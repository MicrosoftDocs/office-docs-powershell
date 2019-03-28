---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-MailTrafficATPReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-MailTrafficATPReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailTrafficATPReport cmdlet to view the results of Exchange Online Protection and Advanced Threat Protection (ATP) detections in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailTrafficATPReport [-Action <MultiValuedProperty>] [-AggregateBy <String>]
 [-Direction <MultiValuedProperty>] [-Domain <MultiValuedProperty>] [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>] [-Expression <Expression>] [-Page <Int32>] [-PageSize <Int32>]
 [-ProbeTag <String>] [-StartDate <DateTime>] [-SummarizeBy <MultiValuedProperty>] [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Advanced Threat Protection that opens email attachments in a special hypervisor environment to detect malicious activity.

Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

For the reporting period you specify, the cmdlet returns the following information:

- Domain

- Date

- Event Type

- Direction

- Action

- Message Count

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailTrafficATPReport -Direction Inbound -StartDate 06/13/2018 -EndDate 06/15/2018
```

This example retrieves details for incoming messages between June 13, 2018 and June 15, 2018.

### -------------------------- Example 2 --------------------------
```
Get-MailTrafficATPReport -StartDate 7/20/2018 -EndDate 7/20/2018 -Direction Outbound | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example retrieves the statistics for outgoing messages on July 20, 2018 and displays the results in a table. Every unique combination of EventType and Action is displayed on a separate row in the table.

### -------------------------- Example 3 --------------------------
```
Get-MailTrafficATPReport -StartDate 7/20/2018 -EndDate 7/20/2018 -Direction Outbound -SummarizeBy Domain,EventType | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example is similar to the previous example, but now the results are summarized. Because EventType is one of the summarized values, the rows in the table now contain the unique values of Action. The total number of rows in the report is reduced and values of MessageCount are correspondingly larger on each row.

## PARAMETERS

### -Action
The Action parameter filters the report by the action taken by DLP policies, transport rules, malware filtering, or spam filtering. To view the complete list of valid values for this parameter, run the command Get-MailFilterListReport -SelectionTarget Actions. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

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
The Direction parameter filters the results by incoming or outgoing messages. Valid values for this parameter are Inbound and Outbound.

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

- Message passed (Indicates a good message.)

Email phish EventTypes:

- Advanced phish filter (Indicates a message caught by the Office 365 machine learning model.)

- Anti-spoof: Intra-org (Indicates an internal message caught by anti-phish spoof protection.)

- Anti-spoof: external domain (Indicates an external message caught by anti-phish spoof protection.)

- Domain impersonation\* (Indicates a message impersonating a domain protected by an anti-phish policy.)

- User impersonation\* (Indicates a message impersonating a user protected by an anti-phish policy.)

- Brand impersonation (Indicates a message caught by Office 365 phish filters as impersonating a known brand.)

- General phish filter (Indicates a message caught by basic Office 365 phish protection.)

- Malicious URL reputation (Indicates a message with a known malicious URL caught by Office 365 phish filters.)

- Phish ZAP (Indicates a phish or spam message detected and auto-purged after delivery.)

Email malware EventTypes:

- Anti-malware engine (Indicates a message caught by the Office 365 anti-malware engine.)

- ATP safe attachments\* (Indicates a message with a malicious attachment blocked by ATP.)

- ATP safe links\* (Indicates when a malicious link is blocked by ATP.)

- ZAP (Indicates a message with malware detected and auto-purged after delivery.)

- Office 365 file reputation (Indicates a message with a known malicious file blocked.)

- Anti-malware policy file type block (Indicates when the Common Attachment Types filter blocks a file.)

Content malware EventTypes:

- AtpDocumentMalware\* (Indicates malicious content detected by ATP Safe Attachments in the cloud.)

- AvDocumentMalware (Indicates malware found by the Office 365 anti-malware engine. Reporting requires ATP/E5.)

\* These features require a standalone Office 365 ATP or E5 subscription.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

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

### -Expression
This parameter is reserved for internal Microsoft use.

```yaml
Type: Expression
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

For the Get-MailTrafficATPReport cmdlet, valid values are Action, Direction, Domain, and EventType. You can specify multiple values separated by commas.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/cc9c2cd8-0629-4aa8-bc60-bbd8b0ae9c57.aspx)
