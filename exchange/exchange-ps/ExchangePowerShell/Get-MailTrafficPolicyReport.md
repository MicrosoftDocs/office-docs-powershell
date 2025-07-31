---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailtrafficpolicyreport
schema: 2.0.0
title: Get-MailTrafficPolicyReport
---

# Get-MailTrafficPolicyReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailTrafficPolicyReport cmdlet to view statistics about messages that were affected by data loss prevention (DLP) policies and transport rules for the last 90 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailTrafficPolicyReport [-Action <MultiValuedProperty>]
 [-AggregateBy <String>]
 [-Direction <MultiValuedProperty>]
 [-DlpPolicy <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [-SummarizeBy <MultiValuedProperty>]
 [-TransportRule <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
For the reporting period you specify, the cmdlet returns the following information:

- Domain
- Date
- DLP Policy
- Transport Rule
- Event Type
- Direction
- Message Count

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailTrafficPolicyReport -Direction Outbound -StartDate 06/13/2015 -EndDate 06/15/2015
```

This example retrieves the statics for outgoing messages between June 13, 2015 and June 15, 2015 that were affected by DLP policies and transport rules.

### Example 2
```powershell
Get-MailTrafficPolicyReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example retrieves the statics for outgoing messages on December 12, 2015 and displays the results in a table. Every unique combination of EventType and Action is displayed on a separate row in the table.

### Example 3
```powershell
Get-MailTrafficPolicyReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound -SummarizeBy Domain,DlpPolicy,TransportRule,EventType | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example is similar to the previous example, but now the results are summarized. Because the EventType is one of the summarized values, the rows in the table now contain the unique values of Action. The total number of rows in the report is reduced, and values of MessageCount are correspondingly larger on each row.

## PARAMETERS

### -Action

> Applicable: Exchange Online, Exchange Online Protection

The Action parameter filters the report by the action taken on messages. To view the complete list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

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

> Applicable: Exchange Online, Exchange Online Protection

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

### -Direction

> Applicable: Exchange Online, Exchange Online Protection

The Direction parameter filters the results by incoming or outgoing messages. Valid values are:

- Inbound
- Outbound

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

### -DlpPolicy

> Applicable: Exchange Online, Exchange Online Protection

The DlpPolicy parameter filters the report by the name of the DLP policy. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

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

> Applicable: Exchange Online, Exchange Online Protection

The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value All.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

The EventType parameter filters the report by the event type. Valid values are:

- DLPActionHits
- DLPPolicyFalsePositive
- DLPPolicyHits
- DLPPolicyOverride
- DLPRuleHits
- TransportRuleActionHits
- TransportRuleHits

To view the potential list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget EventTypes`. The event type you specify must correspond to the report. For example, you can only specify policy event types for policy reports.

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

### -Page

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

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

### -ProbeTag

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

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

### -StartDate

> Applicable: Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Online, Exchange Online Protection

The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report, and delivers the report faster. For example, instead of seeing each instance of a specific value of EventType on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that value of EventType on one row in the report.

For this cmdlet, valid values are:

- Action
- Direction
- DLPPolicy
- Domain
- EventType
- TransportRule

You can specify multiple values separated by commas. When you specify the values DLPPolicy, Domain, EventType, or TransportRule the value is not displayed in the results (the values in the corresponding columns are blank).

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

### -TransportRule

> Applicable: Exchange Online, Exchange Online Protection

The TransportRule parameter filters the report by the name of the transport rule. You can specify multiple values separated by commas. If the value contains spaces, enclose the value in quotation marks (").

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
