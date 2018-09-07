---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center
title: Get-DlpDetectionsReport
schema: 2.0.0
monikerRange: "exchonline-ps || o365scc-ps"
---

# Get-DlpDetectionsReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-DlpDetectionsReport cmdlet to list a summary of Data Loss Prevention (DLP) rule matches for SharePoint Online and OneDrive for Business in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DlpDetectionsReport [-Action <MultiValuedProperty>] [-AggregateBy <String>]
 [-DlpCompliancePolicy <MultiValuedProperty>] [-DlpComplianceRule <MultiValuedProperty>] [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>]
 [-Source <MultiValuedProperty>] [-StartDate <DateTime>] [-SummarizeBy <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-DlpDetectionsReport cmdlet returns general DLP detection data that's aggregated per day. The properties returned include:

- Date

- DlpPolicy

- TransportRule

- Action

- EventType

- MessageCount

- Source

- StartDate

- EndDate

To see detailed information about each DLP rule match, use the Get-DlpDetailReport cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-DlpDetectionsReport -StartDate 11/01/2015 -EndDate 11/30/2015
```

This example lists the DLP activities for November, 2015.

## PARAMETERS

### -Action
The Action parameter filters the report by the action taken by DLP policies. Valid values are:

- BlockAccess

- GenerateIncidentReport

- NotifyUser

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AggregateBy
The AggregateBy parameter specifies the reporting period. Valid values are Hour, Day, or Summary. The default value is Day.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpCompliancePolicy
The DlpCompliancePolicy parameter filters the report by the name of the DLP compliance policy. You can specify multiple policies separated by commas.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpComplianceRule
The DlpComplianceRule parameter filters the report by the name of the DLP compliance rule. You can specify multiple rules separated by commas.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType
The EventType parameter filters the report by the event type. Valid values are:

- DLPActionHits

- DLPPolicyFalsePositive

- DLPPolicyHits

- DLPPolicyOverride

- DLPRuleHits

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Expression
This parameter is reserved for internal Microsoft use.

```yaml
Type: Expression
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Page
The Page parameter specifies the page number of the results you want to view. Valid input for this parameter is an integer between 1 and 1000. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PageSize
The PageSize parameter specifies the maximum number of entries per page. Valid input for this parameter is an integer between 1 and 5000. The default value is 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source
The Source parameter filters the report by workload. Valid values are:

- EXCH: Exchange Online

- ODB: OneDrive for Business

- SPO: SharePoint Online

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SummarizeBy
The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report and delivers the report faster. For example, instead of seeing each instance of a specific value of EventType on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that value of EventType on one row in the report.

For the Get-DLPDetectionsReport cmdlet, the SummarizeBy parameter accepts the following values:

- Action

- DLPPolicy

- Domain

- EventType

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/063edb32-476f-41e7-a232-2b08276eb331.aspx)
