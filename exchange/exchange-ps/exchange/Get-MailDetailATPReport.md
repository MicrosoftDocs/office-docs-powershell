---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-maildetailatpreport
applicable: Exchange Online, Exchange Online Protection
title: Get-MailDetailATPReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-MailDetailATPReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailDetailATPReport cmdlet to list details about Exchange Online Protection and Microsoft Defender for Office 365 detections in your cloud-based organization for the last 10 days.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MailDetailATPReport
 [-DataSource <String>]
 [-Direction <MultiValuedProperty>]
 [-Domain <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-MalwareName <MultiValuedProperty>]
 [-MessageId <MultiValuedProperty>]
 [-MessageTraceId <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-RecipientAddress <MultiValuedProperty>]
 [-SenderAddress <MultiValuedProperty>]
 [-StartDate <DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Microsoft Defender for Office 365 that opens email attachments in a special hypervisor environment to detect malicious activity.

Safe Links is a feature in Microsoft Defender for Office 365 that checks links in email messages to see if they lead to malicious web sites. When a user clicks a link in a message, the URL is temporarily rewritten and checked against a list of known, malicious web sites. Safe Links includes the URL trace reporting feature to help determine who has clicked through to a malicious web site.

For the reporting period you specify, the cmdlet returns the following information:

- Date
- Message ID
- Message Trace ID
- Domain
- Subject
- Message Size
- Direction: Values are Inbound, Outbound, IntraOrg Or Unknown. Unknown means the messages weren't processed by the filtering stack. In other words, the messages were dropped at the edge before they made it into our filtering stack, so we can't tell the direction for them.
- Sender Address
- Recipient Address
- Event Type
- Bulk complaint level
- Verdict Type
- Action
- File Name
- Malware Name

This cmdlet is limited to 10,000 results. If you reach this limit, you can use the available parameters to filter the output.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailDetailATPReport -StartDate 7/22/2018 -EndDate 7/31/2018
```

This example returns the actions for the last 10 days in July, 2018. (Note: Customers with Defender for Office 365 subscriptions will be able to get up to 30 days of data.)

## PARAMETERS

### -DataSource
{{ Fill DataSource Description }}

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
The Direction parameter filters the results by incoming or outgoing messages. Valid values are:

- Inbound
- Outbound
- IntraOrg

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

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only. If you enter the date, enclose the value in quotation marks ("), for example, "09/01/2018".

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

**Note**: Some values correspond to features that are available only in Defender for Office 365 (plan 1 and plan 2 or plan 2 only).

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

### -MalwareName
The MalwareName parameter filters the results by malware payload. Valid values are:

- Excel
- EXE
- Flash
- Others
- PDF
- PowerPoint
- URL

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

### -MessageId
The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which may include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

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

### -MessageTraceId
The MessageTraceId parameter filters the results by the message trace ID value of the message. This GUID value is generated for every message that's processed by the system (for example, c20e0f7a-f06b-41df-fe33-08d9da155ac1).

You can specify multiple values separated by commas.

The MessageTraceId value is also available in the output of the following cmdlets:

- Get-MailDetailDlpPolicyReport
- Get-MailDetailEncryptionReport
- Get-MailDetailTransportRuleReport
- Get-MessageTrace
- Get-MessageTraceDetail

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

### -RecipientAddress
The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

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

### -SenderAddress
The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas.

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

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018".

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
