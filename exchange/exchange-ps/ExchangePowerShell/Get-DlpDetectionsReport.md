---
applicable: Exchange Online, Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpdetectionsreport
schema: 2.0.0
title: Get-DlpDetectionsReport
---

# Get-DlpDetectionsReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**Note**: This cmdlet will be retired. Use the [Export-ActivityExplorerData](https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata) cmdlet to view DLP information. Data from Export-ActivityExplorerData is the same as the retired Get-DlpIncidentDetailReport cmdlet.

Use the Get-DlpDetectionsReport cmdlet to list a summary of data loss prevention (DLP) rule matches for Exchange Online, SharePoint and OneDrive in your cloud-based organization for the last 30 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpDetectionsReport [-Action <MultiValuedProperty>]
 [-AggregateBy <String>]
 [-DlpCompliancePolicy <MultiValuedProperty>]
 [-DlpComplianceRule <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-Expression <Expression>]
 [-EventType <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-Source <MultiValuedProperty>]
 [-StartDate <DateTime>]
 [-SummarizeBy <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-DlpDetectionsReport cmdlet returns general DLP detection data that's aggregated per day. The properties returned include:

- Date
- DLP Policy
- DLP Compliance Rule
- Event Type
- Source
- Message Count

To see all of these columns (width issues), write the output to a file. For example, `Get-DlpDetectionsReport | Out-String -Width 4096 | Out-File "C:\Users\admin\Desktop\DLP Detections Report.txt"`.

To see detailed information about each DLP rule match, use the Get-DlpDetailReport cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DlpDetectionsReport -StartDate 11/01/2018 -EndDate 11/30/2018
```

This example lists the DLP activities for November, 2018.

## PARAMETERS

### -Action

> Applicable: Exchange Online, Security & Compliance

The Action parameter filters the report by the action taken by DLP policies. Valid values are:

- BlockAccess
- GenerateIncidentReport
- NotifyUser

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

### -AggregateBy

> Applicable: Exchange Online, Security & Compliance

The AggregateBy parameter specifies the reporting period. Valid values are Hour, Day, or Summary. The default value is Day.

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

### -DlpCompliancePolicy

> Applicable: Exchange Online, Security & Compliance

The DlpCompliancePolicy parameter filters the report by the name of the DLP compliance policy. You can specify multiple policies separated by commas.

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

### -DlpComplianceRule

> Applicable: Exchange Online, Security & Compliance

The DlpComplianceRule parameter filters the report by the name of the DLP compliance rule. You can specify multiple rules separated by commas.

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

> Applicable: Exchange Online, Security & Compliance

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType

> Applicable: Exchange Online, Security & Compliance

The EventType parameter filters the report by the event type. Valid values are:

- DataRetentions
- DLPActionHits
- DLPActionUndo
- DLPByIncidentIdActionHits
- DLPByIncidentIdMessages
- DLPByIncidentIdPolicyFalsePositive
- DLPByIncidentIdPolicyHits
- DLPByIncidentIdPolicyOverride
- DLPByIncidentIdRuleHits
- DLPMessages
- DLPPolicyFalsePositive
- DLPPolicyHits
- DLPPolicyOverride
- DLPRuleHits

To view the potential list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify DLP event types for DLP reports.

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

### -Expression

> Applicable: Security & Compliance

This parameter is available only in Security & Compliance PowerShell

This parameter is reserved for internal Microsoft use.

```yaml
Type: Expression
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page

> Applicable: Exchange Online, Security & Compliance

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

> Applicable: Exchange Online, Security & Compliance

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

### -Source

> Applicable: Exchange Online, Security & Compliance

The Source parameter filters the report by workload. Valid values are:

- EXCH: Exchange Online
- ODB: OneDrive
- SPO: SharePoint

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

### -StartDate

> Applicable: Exchange Online, Security & Compliance

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SummarizeBy

> Applicable: Exchange Online, Security & Compliance

The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report and delivers the report faster. For example, instead of seeing each instance of a specific value of EventType on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that value of EventType on one row in the report.

For this cmdlet, valid values are:

- DLPPolicy
- Domain
- EventType

You can specify multiple values separated by commas. The values that you specify for this parameter are not displayed in the results (the values in the corresponding columns are blank).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
