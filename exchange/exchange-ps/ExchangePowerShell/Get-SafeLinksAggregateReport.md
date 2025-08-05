---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-safelinksaggregatereport
schema: 2.0.0
title: Get-SafeLinksAggregateReport
---

# Get-SafeLinksAggregateReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SafeLinksAggregateReport cmdlet to return general information about Safe Links results for the last 90 days. Yesterday is the most recent date that you can specify.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SafeLinksAggregateReport
 [-Action <MultiValuedProperty>]
 [-AppNameList <MultiValuedProperty>]
 [-EndDate <System.DateTime>]
 [-StartDate <System.DateTime>]
 [-SummarizeBy <String>]
 [<CommonParameters>]
```

## DESCRIPTION
**Note**: If you run Get-SafeLinksAggregateReport without specifying a date range, the command will return an unspecified error.

Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites.

For the reporting period you specify, the cmdlet returns the following information:

- Action
- App
- MessageCount
- RecipientCount

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SafeLinksAggregateReport -StartDate 06-01-2020 -EndDate 06-10-2020 -SummarizeBy App -AppNameList "Email Client","Teams"
```

This example returns results summarized by Email Client and Teams results for the specified date range.

## PARAMETERS

### -Action

> Applicable: Exchange Online

The Action parameter filters the results by action. Valid values are:

- Allowed
- Blocked
- ClickedDuringScan
- ClickedEvenBlocked
- Scanning
- TenantAllowed
- TenantBlocked
- TenantBlockedAndClickedThrough

You can specify multiple values separated by commas.

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

### -EndDate

> Applicable: Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018.

Yesterday is the most recent date that you can specify. You can't specify a date that's older than 90 days.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018.

Yesterday is the most recent date that you can specify. You can't specify a date that's older than 90 days.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SummarizeBy

> Applicable: Exchange Online

The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report, and delivers the report faster. For example, instead of seeing each instance of a specific value of Action or AppNameList on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that specific Action or App on one row in the report.

For this cmdlet, valid values are:

- Action: Only the values specified by the Action parameter are returned.
- App: Only the values specified by the AppNameList parameter are returned.

```yaml
Type: String
Parameter Sets: (All)
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
