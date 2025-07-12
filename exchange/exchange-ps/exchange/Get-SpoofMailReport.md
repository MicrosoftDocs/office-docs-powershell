---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-spoofmailreport
applicable: Exchange Online, Exchange Online Protection
title: Get-SpoofMailReport
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-SpoofMailReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SpoofMailReport cmdlet to view information about spoofed senders in your cloud-based organization for the past 90 days. Spoofing is where the sender of the inbound message is different than the actual source of the message (for example, the sender is lila@contoso.com, but the message was sent from the email infrastructure of fabrikam.com).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SpoofMailReport [-Action <MultiValuedProperty>]
 [-Direction <MultiValuedProperty>]
 [-EndDate <DateTime>]
 [-EventType <MultiValuedProperty>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-StartDate <DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SpoofMailReport cmdlet returns the following information:

- Date: Date the message was sent.
- Event Type: Typically, this value is SpoofMail.
- Direction: This value is Inbound.
- Domain: The sender domain. This corresponds to one of your organization's accepted domains.
- Spoofed User: The sending email address if the domain is one of your organization's domains, or the sending domain if the domain is external.
- True Sender: The organizational domain of the PTR record, or pointer record, of the sending IP address, also known as the reverse DNS address. If the sending IP address does not have a PTR record, this field will be blank and the Sender IP column will be filled in. Both columns will not be filled in at the same time.
- Sending Infrastructure: The true sending domain that's found in the DNS record of the source email server. If no domain is found, the source email server's IP address is shown.
- Count: The number of spoofed messages that were sent to your organization from the source messaging server during the specified time period.
- Spoof Type: The relationship between the sender and recipient domain of the spoof mail. If both belong to same domain (including subdomains) or domain owned by the same organization, then Spoof Type is intra-org or Internal. If both belong to different domains, then Spoof Type is cross-org or External.
- Source: Typically, this value is "Spoof intelligence".
- Result: CompAuthResult
- Result Code: CompAuthReason
- SPF
- DKIM
- DMARC

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SpoofMailReport -StartDate 03/01/2020 -EndDate 03/11/2020
```

This example shows the insider spoofing detections in your organization during the month of March 2016.

## PARAMETERS

### -Action
The Action parameter filters the report by the action taken on messages. To view the complete list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

You can specify multiple values separated by commas.

Common values for this report are GoodMail and CaughtAsSpam.

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

### -Direction
The Direction parameter filters the results by incoming messages. The valid value for this parameter is Inbound.

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

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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
The EventType parameter filters the report by the event type. The only valid value for this parameter is SpoofMail.

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

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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
