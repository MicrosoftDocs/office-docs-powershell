---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-safelinksdetailreport
schema: 2.0.0
title: Get-SafeLinksDetailReport
---

# Get-SafeLinksDetailReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SafeLinksDetailReport cmdlet to return detailed information about Safe Links results for the last 7 days. Yesterday is the most recent date that you can specify.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SafeLinksDetailReport
 [-Action <MultiValuedProperty>]
 [-AppNameList <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <System.DateTime>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-RecipientAddress <MultiValuedProperty>]
 [-StartDate <System.DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
**Note**: If you run Get-SafeLinksDetailReport without specifying a date range, the command will return an unspecified error.

Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites.

This cmdlet returns the following information:

- ClickTime
- NetworkMessageId
- ClientMessageId
- SenderAddress
- RecipientAddress
- Url
- UrlDomain
- Action
- AppName
- SourceId
- Organization
- DetectedBy (Safe Links in Microsoft Defender for Office 365)
- UrlType (currently empty)
- Flags (0: Allowed 1: Blocked 2: ClickedEvenBlocked 3: ClickedDuringScan)

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SafeLinksDetailReport -StartDate 06-07-2020 -EndDate 06-10-2020 -Action Allowed,Blocked -AppNameList "Email Client","Teams" -Domain google.com,teams.com -RecipientAddress faith@contoso.com,chris@contoso.com
```

This example returns filters the results by the following information:

- Date range: June 7, 2020 to June 10, 2020
- Action: Allowed and Blocked
- AppNameList: Email Client and Teams
- URL domain: google.com and teams.com
- Recipient email address: faith@contoso.com and chris@contoso.com

## PARAMETERS

### -Action

> Applicable: Exchange Online

The Action parameter filters the results by action. Valid values are:

- Allowed: URL was allowed due to a "Good" verdict.
- Blocked: URL was blocked due to a "Bad" verdict.
- ClickedDuringScan: User skipped verification of the URL and proceeded to the destination URL before Safe Links finished scanning.
- ClickedEvenBlocked: User was blocked at time of click from accessing URL.
- Scanning: URL is being scanned.
- TenantAllowed: URL allow entry in the Tenant Allow/Block List.
- TenantBlocked: URL block entry in the Tenant Allow/Block List.
- TenantBlockedAndClickedThrough: URL was blocked due to a block entry in the Tenant Allow/Block List, and the user clicked through the block page to access the URL.

You can specify multiple values separated by commas.

**Note**: Values for this parameter are case sensitive. No data returned for an action implies that the action didn't occur.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppNameList

> Applicable: Exchange Online

The AppNameList parameter filters the results by the app where the link was found. Valid values are:

- Email Client
- OfficeDocs
- Teams

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Exchange Online

The Domain parameter filters the results by the domain in the URL.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018.

Yesterday is the most recent date that you can specify. You can't specify a date that's older than 7 days.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Page

> Applicable: Exchange Online

The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize

> Applicable: Exchange Online

The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online

The RecipientAddress parameter filters the results by the recipient's email address.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018.

Yesterday is the most recent date that you can specify. You can't specify a date that's older than 7 days.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
