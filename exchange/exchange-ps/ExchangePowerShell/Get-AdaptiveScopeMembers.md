---
applicable: Exchange Online, Security & Compliance
author: amuralidhara
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: amuralidhara
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers
schema: 2.0.0
title: Get-AdaptiveScopeMembers
---

# Get-AdaptiveScopeMembers

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AdaptiveScopeMembers cmdlet to retrieve current and past members of adaptive scopes in your organization. Adaptive scopes are used in retention policies, Insider Risk Management policies and retention label policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)

```
Get-AdaptiveScopeMembers [-Identity] <ComplianceRuleIdParameter> [<CommonParameters>]
```

### Default

```
Get-AdaptiveScopeMembers [-Identity] <ComplianceRuleIdParameter>
 [-AdaptiveReportFilters <PswsHashtable>]
 [-PageResultSize <UnlimitedInt>]
 [-State <LocationState>]
 [<CommonParameters>]
```

### AdaptiveReportPagination

```
Get-AdaptiveScopeMembers [-Identity] <ComplianceRuleIdParameter> -PageCookie <string> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to retrieve existing and past members (users, groups, or sites) of an adaptive scope.

The cmdlet returns a list where:
- The **first element** contains **result metadata**, and  
- The **subsequent elements** contain the **members**.

The metadata includes:
- The **total number of members** for the request,  
- The **number of members returned in the current page**, and  
- Whether **additional pages** are available.

If additional pages exist, the metadata will include a **`Watermark`** value and **`IsLastPage`** will be `false`.
To retrieve the next page, pass the `Watermark` value to the **`-PageCookie`** parameter in your next invocation of the cmdlet.
Use the **`-AdaptiveReportFilters`** parameter to filter the members.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1 - Retrieve members of an adaptive scope with default page size of 10000
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users"
```

This example retrieves the members of the adaptive scope US Finance Users.
If the scope contains fewer than 10,000 members, all members are returned.
For larger scopes, only the first 10,000 members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 2 - Retrieve all members of an adaptive scope
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -PageResultSize unlimited
```

This example returns every member of the adaptive scope US Finance Users.

> **⚠️ Warning:**  
> Although you *can* specify `Unlimited` to retrieve all members in a single request, this is **not recommended** for large adaptive scopes. Using `Unlimited` may lead to long‑running requests and increases the likelihood of transient failures that cannot be efficiently retried.

### Example 3 - Retrieve only the count of members in the adaptive scope
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -PageResultSize 0
```

This example only returns the metadata with total member count of the adaptive scope US Finance Users.


### Example 4 - Retrieve up to 30 members of the adaptive scope
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -PageResultSize 30
```

This example retrieves the members of the adaptive scope US Finance Users.
If the scope contains fewer than 30 members, all members are returned.
For larger scopes, only the first 30 members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 5 - Retrieve only the current members of the adaptive scope
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -State Added
```

This example retrieves the current members of the adaptive scope US Finance Users.
If the scope contains fewer than 10,000 current members, all current members are returned.
For larger scopes, only the first 10,000 current members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 6 - Retrieve only the past members of the adaptive scope
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -State Removed
```

This example retrieves the past members of the adaptive scope US Finance Users.
If the scope contains fewer than 10,000 past members, all past members are returned.
For larger scopes, only the first 10,000 past members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 7 - Retrieve a subset of members using filters
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Sites" -AdaptivereportFilters @{"SiteUrlContainsAny" = @("/personal/", "/teams/")}
```

This example retrieves the members of the adaptive scope US Finance Sites where the site url contains `/personal/` or `/teams/`
If the results contains fewer than 10,000 members, all are returned.
For larger results, only the first 10,000 are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

You can find more details about `AdaptiveReportFilters` in the [AdaptiveReportFilters](#adaptivereportfilters) section


### Example 8 — Paginated results

```powershell
$scope="US Finance Users"; $size=200; $cookie=$null
$all=@()
do {
  $page = Get-AdaptiveScopeMembers -Identity $scope -Size $size -PageCookie $cookie
  if(-not $page){ break }
  $meta = $page[0]
  if($meta.CurrentPageMemberCount -gt 0){ $all += $page[1..($page.Count-1)] }
  $cookie = if($meta.IsLastPage){ $null } else { $meta.Watermark }
} while($cookie -ne $null)
$all | Export-Csv -NoTypeInformation -Path "D:\AdaptiveScopeMembers_$($scope -replace ' ','_').csv"
```

This example retrieves the members of the adaptive scope US Finance Users 200 members at a time and saves them to a list.
After all members are returned, it saves the list of members as a csv file.


## PARAMETERS

### -Identity

> Applicable: Exchange Online, Security & Compliance

The Identity parameter specifies the adaptive scope. You can use any value that uniquely identifies the adaptive scope. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AdaptiveReportFilters

> Applicable: Exchange Online, Security & Compliance


Specifies one or more filters used to refine the results returned by `Get-AdaptiveScopeMembers`.

This parameter accepts a **PSWS hashtable**, where each key maps to a list (array) of **up to 10 values**.  
Filters whose name contains **`Not`** act as exclusion filters and are typically **intersected** with other filters when multiple keys are provided.

#### Supported Filter Keys
**Mailbox GUID filters**

- `MailboxGuidEqualsAny`
- `MailboxGuidNotEqualsAny`

**SMTP address filters**

- `SmtpAddressEqualsAny`
- `SmtpAddressNotEqualsAny`
- `SmtpAddressStartsWithAny`
- `SmtpAddressNotStartsWithAny`

**ObjectId filters**

- `ObjectIdEqualsAny`
- `ObjectIdNotEqualsAny`

**SharePoint Site filters**

- `SiteIdEqualsAny`
- `SiteIdNotEqualsAny`
- `SiteUrlEqualsAny`
- `SiteUrlNotEqualsAny`
- `SiteUrlContainsAny`
- `SiteUrlNotContainsAny`
- `SiteUrlStartsWithAny`
- `SiteUrlNotStartsWithAny`

**User Principal Name (UPN) filters**

- `UpnEqualsAny`
- `UpnNotEqualsAny`
- `UpnStartsWithAny`
- `UpnNotStartsWithAny`


#### Example 1 — Filter by UPN prefix
```powershell
-AdaptiveReportFilters @{
    UpnStartsWithAny = @("john", "mary")
}
```

#### Example 2 — Include by SMTP address and exclude by UPN
```powershell
-AdaptiveReportFilters @{
    SmtpAddressEqualsAny = @("alice@contoso.com","bob@contoso.com")
    UpnNotEqualsAny      = @("bob.old@contoso.com")
}
```

#### Example 3 — Include by SMTP address or include by UPN
```powershell
-AdaptiveReportFilters @{
    SmtpAddressEqualsAny = @("alice@contoso.com","bob@contoso.com")
    UpnEqualsAny      = @("bob.old@contoso.com")
}
```


```yaml
Type: PswsHashtable
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageCookie

> Applicable: Exchange Online, Security & Compliance

Specifies the bookmark from which the cmdlet should continue retrieving results.

Use the **`Watermark`** value returned from a previous request to the *same* adaptive scope as the value of this parameter. The watermark acts as a continuation token, allowing the cmdlet to resume exactly where the previous page ended and fetch the next page of members.

> **⚠️ Warning:**  
> Do **not** manually edit or fabricate a watermark value. Doing so may cause skipped pages, duplicate results, or invalid requests. Always use the watermark exactly as returned by the cmdlet.


```yaml
Type: string
Parameter Sets: AdaptiveReportPagination
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageResultSize

> Applicable: Exchange Online, Security & Compliance

Specifies the maximum number of members to return for the request.

> **⚠️ Warning:**  
> Although you *can* specify `Unlimited` to retrieve all members in a single request, this is **not recommended** for large adaptive scopes. Using `Unlimited` may lead to long‑running requests and increases the likelihood of transient failures that cannot be efficiently retried.


For best reliability and performance, retrieve members in **multiple smaller pages** until the last page is reached. This approach introduces natural breakpoints, reduces wait times, and allows seamless retries when transient issues occur.


```yaml
Type: UnlimitedInt
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: 10000
Accept pipeline input: False
Accept wildcard characters: False
```

### -State

> Applicable: Exchange Online, Security & Compliance

The LocationState parameter specifies the state of the members of the adaptive scope. Valid values are:

- Added
- Removed

State Added specifies members which are current members of the adaptive scope.
State Removed specifies members which were once active members but have since been removed from membership.

```yaml
Type: LocationState
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).


## Export to files

### Description

Customers often need to export all members of an adaptive scope into files for review, auditing, offline analysis, or to share with other teams.  
The **Export‑AdaptiveScopeMembers** helper script simplifies this process by automatically paging through the scope, exporting each page to a CSV file, and writing execution metadata for resume.

This export workflow is **restartable**.  
If the script stops midway due to a transient failure, network issue, or timeout, you can simply run it again. It will read the existing metadata file, resume from the last successfully processed page, and continue exporting until all pages have been retrieved.

### Usage

Paste the following PowerShell function into your session and call it with the desired parameters.


```
function Export-AdaptiveScopeMembers {
    [CmdletBinding()] param([string]$Scope,[string]$Out,[int]$Size=10000,[bool]$Resume=$true)
  $scope=$Scope; $out=$Out; $size=$Size;
  $meta=Join-Path $out "$scope-exportadaptivescopemembersexecutioninfo.json"
  if (-not (Test-Path $out)) { New-Item -ItemType Directory -Path $out | Out-Null }
  $m = if ($resume -and (Test-Path $meta)) { Get-Content $meta -Raw | ConvertFrom-Json } else {$null}
  $cookie = if ($m) {$m.Watermark} else {$null}; $page = if ($m -and $m.IsLastPage -ne $true) { $m.LastPageProcessed + 1 } else {1}; $isLast=$false
  do {
    $res = if ($cookie) { Get-AdaptiveScopeMembers -Identity $scope -PageCookie $cookie -WarningAction SilentlyContinue} else { Get-AdaptiveScopeMembers -Identity $scope -PageResultSize $size -WarningAction SilentlyContinue }
    $metaObj = $res[0]; $members = $res[1..($res.Count-1)]
    if ($members.Count) { $file=Join-Path $out "$scope-part$($page).csv"; $members | Export-Csv $file -NoTypeInformation; Write-Host "Exported $($members.Count) of page $page to file '$file'" }
    $cookie = $metaObj.Watermark; $isLast = $metaObj.IsLastPage
    $status = @{TimestampUtc=(Get-Date).ToUniversalTime().ToString("o"); TotalResults=$metaObj.TotalMemberCount; PageSize=$metaObj.CurrentPageMemberCount; Identity=$metaObj.Identity; Watermark=$cookie; LastPageProcessed=$page; IsLastPage=$metaObj.IsLastPage}
    if ($isLast)   {
      $status = @{TimestampUtc=(Get-Date).ToUniversalTime().ToString("o"); TotalResults=$metaObj.TotalMemberCount; Identity=$metaObj.Identity; Watermark=$cookie; LastPageProcessed=$page; IsLastPage=$metaObj.IsLastPage}
    }
    $status | ConvertTo-Json | Set-Content $meta
    $page++
  } while (-not $isLast)
  Write-Host "Completed exporting members of adaptive scope '$scope' to folder '$out'"
}
```

Users can now call `Export-AdaptiveScopeMembers` to save the results to files in their disk

### Example 1
```powershell
Export-AdaptiveScopeMembers -Scope "US Finance Users" -Out "D:\adaptivescopedetails"
```

This example retrieves the members of the adaptive scope US Finance Users and saves every 10000 members to a csv file under the provided folder. The folder is created if it doesn't already exist.

### Example 2
```powershell
Export-AdaptiveScopeMembers -Scope "US Finance Users" -Out "D:\adaptivescopedetails" -Size 200
```

This example retrieves the members of the adaptive scope US Finance Users and saves every 200 members to a csv file under the provided folder. The folder is created if it doesn't already exist.

### Example 3
```powershell
Export-AdaptiveScopeMembers -Scope "US Finance Users" -Out "D:\adaptivescopedetails" -Size 200 -Resume $false
```

By default, the -Resume parameter is set to $true, allowing the export process to automatically continue from the last completed page if a PowerShell session is interrupted.
Specify $false to start the export from the beginning and overwrite any previously saved progress.

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
