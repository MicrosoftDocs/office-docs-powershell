---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mailtrafficatpreport
applicable: Exchange Online, Exchange Online Protection
title: Get-MailTrafficATPReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-MailTrafficATPReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailTrafficATPReport cmdlet to view the results of Exchange Online Protection and Microsoft Defender for Office 365 detections in your cloud-based organization for the last 90 days.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailTrafficATPReport
 [-Action <MultiValuedProperty>]
 [-AggregateBy <String>]
 [-Direction <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-NumberOfRows <Int32>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-PivotBy <MultiValuedProperty>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [-SummarizeBy <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Microsoft Defender for Office 365 that opens email attachments in a special hypervisor environment to detect malicious activity.

Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

For the reporting period you specify, the cmdlet returns the following information:

- Domain
- Date
- Event Type
- Direction
- Action
- SubType
- Policy Source
- Verdict Source
- Delivery Status
- Message Count

To see all of these columns (width issues), write the output to a file. For example, `Get-MailTrafficATPReport | Out-String -Width 4096 | Out-File "C:\Users\admin\Desktop\Mail Traffic ATP Report.txt"`.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailTrafficATPReport -Direction Inbound -StartDate 06/13/2018 -EndDate 06/15/2018
```

This example retrieves details for incoming messages between June 13, 2018 and June 15, 2018.

### Example 2
```powershell
Get-MailTrafficATPReport -StartDate 7/20/2018 -EndDate 7/20/2018 -Direction Outbound | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example retrieves the statistics for outgoing messages on July 20, 2018 and displays the results in a table. Every unique combination of EventType and Action is displayed on a separate row in the table.

### Example 3
```powershell
Get-MailTrafficATPReport -StartDate 7/20/2018 -EndDate 7/20/2018 -Direction Outbound -SummarizeBy Domain,EventType | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example is similar to the previous example, but now the results are summarized. Because EventType is one of the summarized values, the rows in the table now contain the unique values of Action. The total number of rows in the report is reduced and values of MessageCount are correspondingly larger on each row.

## PARAMETERS

### -Action
The Action parameter filters the report by the action taken on messages. To view the complete list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Direction
The Direction parameter filters the results by incoming or outgoing messages. Valid values are Inbound and Outbound.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value All.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventType
The EventType parameter filters the report by the event type. Valid values are:

- Advanced filter
- Anti-malware Engine
- Campaign
- File detonation
- File detonation reputation
- File reputation
- Fingerprint matching
- General filter
- Impersonation brand
- Impersonation domain
- Impersonation user
- Mailbox intelligence impersonation
- Message passed
- Mixed analysis detection
- Spoof DMARC
- Spoof external domain
- Spoof intra-org
- URL detonation
- URL detonation reputation
- URL malicious reputation

**Note**: Some values values correspond to features that are only available in Defender for Office 365 (plan 1 and plan 2 or plan 2 only).

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfRows
The NumberOfRows parameter specifies the number of rows to return in the report. The maximum value is 10000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PivotBy
{{ Fill PivotBy Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProbeTag
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SummarizeBy
The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report and delivers the report faster. For example, instead of seeing each instance of a specific value of EventType on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that value of EventType on one row in the report.

Valid values are:

- Action
- Direction
- Domain
- EventType

You can specify multiple values separated by commas. When you specify the values Action or Domain, the value is not displayed in the results (the values in the corresponding columns are blank).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
