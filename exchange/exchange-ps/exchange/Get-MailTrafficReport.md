---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mailtrafficreport
applicable: Exchange Online, Exchange Online Protection
title: Get-MailTrafficReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-MailTrafficReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailTrafficReport cmdlet to view details about message traffic in your organization for the last 90 days.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailTrafficReport
 [-Action <MultiValuedProperty>]
 [-AggregateBy <String>]
 [-Direction <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-Expression <Expression>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [-SummarizeBy <MultiValuedProperty>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use the EventTypes values from the Get-MailTrafficReport cmdlet to analyze what happened to messages when they were filtered by the service. The following list describes the event types for messages.

Mail traffic summary

- AdvancedProtectionMalware: Messages that were marked as malware by the Office 365 Advanced Threat Protection service. For details about the Advanced Threat Protection service, see [Office 365 Advanced Threat Protection service description](https://docs.microsoft.com/office365/servicedescriptions/office-365-advanced-threat-protection-service-description).

- AtpGoodMail: Messages that were delivered after passing through the Office 365 Advanced Threat Protection service. This count shows the number of unique messages. If a message was delivered to multiple recipients, it would still count as a single message.

- DLPMessages: Messages that matched a data loss prevention (DLP) policy. For details about data loss prevention, see [Overview of data loss prevention](https://docs.microsoft.com/microsoft-365/compliance/data-loss-prevention-policies).

- Expire: Messages that cannot be delivered, stuck in a queue, and after some time expired.

- GoodMail: Messages that were delivered after passing through the malware and spam filters. This count shows the number of unique messages. If a message was delivered to multiple recipients, it would still count as a single message.

- Malware: Messages that were marked as malware.

-	Receive: Messages successfully received by the service.

-	SpoofMail: Messages that were marked as spoofed by the Office 365 anti-spoofing protection.

- TransportRuleHits: Messages that matched a transport rule. If a message matched multiple rules, this event type would show each of the rule matches.

-	TransportRuleMessages: Messages that matched a transport rule. If a message matched multiple rules, this event type would show each of the rule matches.

Spam detections

- SpamIPBlock: Messages that were blocked based on the sender IP.

- SpamDBEBFilter: Messages that were blocked based on checking the recipient against the directory. This happens when a message is addressed to an unknown recipient.

- SpamEnvelopeBlock: Messages that were blocked based on SMTP.

- SpamContentFiltered: Messages that passed the initial IP and SMTP filters and were filtered based on content, rules or other spam configurations.

Spam analysis - content-filtered spam

- Spam\_AdditionalSpamFiltered: Messages filtered based on advanced spam filters that have been enabled. For details about the advanced spam filter, see [Advanced spam filtering options](https://docs.microsoft.com/microsoft-365/security/office-365-security/advanced-spam-filtering-asf-options).

- Spam\_BlockList: Messages that were filtered because the sender was on a spam filter block list. For more details on how to configure these lists, see [Configure your spam filter policies](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-your-spam-filter-policies).

- Spam\_BulkFiltered: Messages that were filtered as bulk mail. See message volume breakdown by Bulk Complaint Level (BCL) for further analysis of bulk mail. For more information about bulk mail processing, see [What's the difference between junk email and bulk email?](https://docs.microsoft.com/microsoft-365/security/office-365-security/what-s-the-difference-between-junk-email-and-bulk-email).

- Spam\_ContentScanFiltered: Messages that were filtered based on the message content.

- Spam\_ETRFiltered: Messages that were filtered due to a transport rule.

- Spam\_SenderBlocked: Messages that were filtered because the sender was on a block list.

Spam analysis - non-spam messages

- NonSpam\_AdditionalSpamFilterPassed: Messages that were passed based on advanced spam filters that have been enabled. For details about the advanced spam filters, see [Advanced spam filtering options](https://docs.microsoft.com/microsoft-365/security/office-365-security/advanced-spam-filtering-asf-options).

- NonSpam\_AllowList: Messages that were passed because the sender was on a spam filter allow list. For more details on how to configure these lists, see [Configure your spam filter policies](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-your-spam-filter-policies).

- NonSpam\_BulkPassed: Messages that were determined not to be bulk mail.

- NonSpam\_ContentScanPassed: Messages that were passed by the content scan.

- NonSpam\_ETRPassed: Messages that passed based on a transport rule.

- NonSpam\_IntraOrg: Messages that were deemed as low risk of spam based on factors such as intra-organizational mail.

- NonSpam\_IPAllowed: Messages that were passed because the sending IP was on the IP allow list.

- NonSpam\_SafeSender: Messages that were passed because the sender was marked as safe.

Bulk mail

- BCL0: Messages that are not bulk mail are marked with Bulk Complaint Level (BCL) value of 0. For details on how to use BCL to mark messages as spam, see [Use mail flow rules to configure bulk email filtering in Exchange Online Protection](https://docs.microsoft.com/microsoft-365/security/office-365-security/use-transport-rules-to-configure-bulk-email-filtering).

- BCL1 through BCL9: Messages with BCL rating of 1 through 9.

Encryption

- EncryptionManual: Messages manually encrypted by users.

- EncryptionPolicy: Messages that matched a rule for encrypting email messages using the latest Office 365 Message Encryption (OME) capabilities.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailTrafficReport -Direction Inbound -StartDate 06/13/2015 -EndDate 06/15/2015
```

This example retrieves details for incoming messages between June 13, 2015 and June 15, 2015.

### Example 2
```powershell
Get-MailTrafficReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example retrieves the statistics for outgoing messages on December 12, 2015, and displays the results in a table. Every unique combination of EventType and Action is displayed on a separate row in the table.

### Example 3
```powershell
Get-MailTrafficReport -StartDate 12/12/2015 -EndDate 12/12/2015 -Direction Outbound -SummarizeBy Domain,EventType | Format-Table Domain,Date,EventType,Action,MessageCount
```

This example is similar to the previous example, but now the results are summarized. Because the EventType is one of the summarized values, the rows in the table now contain the unique values of Action. The total number of rows in the report is reduced, and values of MessageCount are correspondingly larger on each row.

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

If you don't use the Domain parameter, the message count for your entire organization is returned. This includes messages that were sent from or to unregistered domains that are attributed to your organization. Unregistered domains can be attributed to your organization in hybrid or EOP standalone configurations.

Notes:

- Messages that are sent to recipients in multiple domains are counted differently at the domain level versus the organizational level. At the domain level, the message is counted for each different domain. At the organizational level, the message is counted only once. Therefore, if you add up the total number of received messages for each domain, the value might not match the total number of received messages for the organization.

- The Domain value is Others for messages that were sent from or to unregistered domains that are attributed to your organization (messages in domains that aren't configured as accepted domains in your organization).

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
The EventType parameter filters the report by the event type. To view the complete list of valid values for this parameter, run the command Get-MailFilterListReport -SelectionTarget EventTypes. The event type you specify must correspond to the report. For example, you can only specify malware filter events for malware reports.

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
The SummarizeBy parameter returns totals based on the values you specify. If your report filters data using any of the values accepted by this parameter, you can use the SummarizeBy parameter to summarize the results based on those values. To decrease the number of rows returned in the report, consider using the SummarizeBy parameter. Summarizing reduces the amount of data that's retrieved for the report, and delivers the report faster. For example, instead of seeing each instance of a specific value of EventType on an individual row in the report, you can use the SummarizeBy parameter to see the total number of instances of that value of EventType on one row in the report.

For the Get-MailTrafficReport cmdlet, the SummarizeBy parameter accepts the values Action, Domain, and EventType. You can specify multiple values separated by commas.

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
