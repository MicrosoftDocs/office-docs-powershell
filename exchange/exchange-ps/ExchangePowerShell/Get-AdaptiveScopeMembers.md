---
applicable: Exchange Online, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
ms.reviewer: amuralidhara
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

Cmdlet output is a list where the first element contains result metadata. Subsequent elements contain the members.

Metadata includes the following information:

- The total number of members for the request.
- The number of members returned in the current page.
- Whether additional pages are available.

If additional pages exist, the metadata includes a Watermark value and the IsLastPage value is False.

To retrieve the next page, pass the Watermark value to the PageCookie parameter in your next invocation of the cmdlet. Use the AdaptiveReportFilters parameter to filter the members.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users"
```

This example retrieves the members of the adaptive scope US Finance Users. If the scope contains fewer than 10,000 members, all members are returned.

For larger scopes, only the first 10,000 members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 2
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -PageResultSize Unlimited
```

This example returns every member of the adaptive scope US Finance Users.

**Important**: We don't recommend using the PageResultSize value Unlimited for large adaptive scopes. Using Unlimited on large adaptive scopes might lead to long‑running requests and transient failures that can't be efficiently retried.

### Example 3
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -PageResultSize 0
```

This example only returns metadata with total member count of the adaptive scope US Finance Users.

### Example 4
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -PageResultSize 30
```

This example retrieves the members of the adaptive scope US Finance Users. If the scope contains fewer than 30 members, all members are returned.

For larger scopes, only the first 30 members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 5
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -State Added
```

This example retrieves the current members of the adaptive scope US Finance Users. If the scope contains fewer than 10,000 current members, all current members are returned.

For larger scopes, only the first 10,000 current members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 6
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Users" -State Removed
```

This example retrieves the past members of the adaptive scope US Finance Users. If the scope contains fewer than 10,000 past members, all past members are returned.

For larger scopes, only the first 10,000 past members are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 7
```powershell
Get-AdaptiveScopeMembers -Identity "US Finance Sites" -AdaptivereportFilters @{"SiteUrlContainsAny" = @("/personal/", "/teams/")}
```

This example retrieves the members of the adaptive scope US Finance Sites where the site url contains `/personal/` or `/teams/`. If the results contains fewer than 10,000 members, all are returned.

For larger results, only the first 10,000 are included, and the first object in the response contains metadata with a watermark that can be used to request subsequent pages.

### Example 8
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
$all | Export-Csv -NoTypeInformation -Path "C:\Data\AdaptiveScopeMembers_$($scope -replace ' ','_').csv"
```

This example retrieves the members of the adaptive scope US Finance Users 200 members at a time and saves them to a list. The results are saved to the specified CSV file.

### Example 9
```powershell
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

Customers often need to export all members of an adaptive scope into files for review, auditing, offline analysis, or to share with other teams. This **Export‑AdaptiveScopeMembers** helper script simplifies this process by automatically paging through the scope, exporting each page to a CSV file, and writing execution metadata for resume.

This export workflow is **restartable**. If the script stops midway due to a transient failure, network issue, or timeout, you can simply run it again. It reads the existing metadata file, resumes from the last successfully processed page, and continues exporting until all pages have been retrieved.

Paste this function into your session and call it with the desired parameters. You can call `Export-AdaptiveScopeMembers` to save the results to files.

This example retrieves the members of the adaptive scope US Finance Users and saves every 10,000 members to a csv file under the provided folder. The folder is created if it doesn't already exist:

`Export-AdaptiveScopeMembers -Scope "US Finance Users" -Out "D:\adaptivescopedetails"`.

This example retrieves the members of the adaptive scope US Finance Users and saves every 200 members to a csv file under the provided folder. The folder is created if it doesn't already exist:

`Export-AdaptiveScopeMembers -Scope "US Finance Users" -Out "D:\adaptivescopedetails" -Size 200`.

By default, the -Resume parameter is set to $true, allowing the export process to automatically continue from the last completed page if a PowerShell session is interrupted.
Specify $false to start the export from the beginning and overwrite any previously saved progress.

`Export-AdaptiveScopeMembers -Scope "US Finance Users" -Out "D:\adaptivescopedetails" -Size 200 -Resume $false`

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

The AdaptiveReportFilters parameter specifies one or more filters used to refine the results.

This parameter accepts a hash table where each key maps to a list (array) of up to 10 values. Valid filter keys are:

- MailboxGuidEqualsAny
- MailboxGuidNotEqualsAny
- ObjectIdEqualsAny
- ObjectIdNotEqualsAny
- SiteIdEqualsAny
- SiteIdNotEqualsAny
- SiteUrlContainsAny
- SiteUrlEqualsAny
- SiteUrlNotContainsAny
- SiteUrlNotEqualsAny
- SiteUrlNotStartsWithAny
- SiteUrlStartsWithAny
- SmtpAddressEqualsAny
- SmtpAddressNotEqualsAny
- SmtpAddressNotStartsWithAny
- SmtpAddressStartsWithAny
- UpnEqualsAny
- UpnNotEqualsAny
- UpnNotStartsWithAny
- UpnStartsWithAny

Multiple key values use logical OR syntax. Multiple non-\*Not\* keys use OR syntax. Mixed \*Not\* and non-\*Not\* keys use logical AND syntax.

Example parameter value to filter by UPN prefix:

`@{UpnStartsWithAny = @("john", "mary")`

Example parameter value to include by SMTP address AND exclude by UPN:

`@{SmtpAddressEqualsAny = @("alice@contoso.com","bob@contoso.com"); UpnNotEqualsAny = @("bob.old@contoso.com")}`

Example parameter value to include by SMTP address OR include by UPN

`@{SmtpAddressEqualsAny = @("alice@contoso.com","bob@contoso.com"); UpnEqualsAny = @("bob.old@contoso.com")}`

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

The PageCookie specifies the bookmark where the cmdlet should continue retrieving results from.

Use the Watermark value returned from a previous request to the same adaptive scope as the value of this parameter. The watermark acts as a continuation token, allowing the cmdlet to resume exactly where the previous page ended and fetch the next page of members.

**Important**: Manually editing or fabricating a Watermark value might cause skipped pages, duplicate results, or invalid requests. Always use the Watermark value exactly as returned by the cmdlet.

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

The PageResultSize parameter specifies the maximum number of members to return for the request.

For best reliability and performance, retrieve members in multiple smaller pages until the last page is reached. This approach introduces natural breakpoints, reduces wait times, and allows seamless retries when transient issues occur.

**Important**: We don't recommend using the PageResultSize value Unlimited for large adaptive scopes. Using Unlimited on large adaptive scopes might lead to long‑running requests and transient failures that can't be efficiently retried.

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

The State parameter specifies the state of the members of the adaptive scope. Valid values are:

- Added: Current members of the adaptive scope.
- Removed: Former members of the adaptive scope.

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
