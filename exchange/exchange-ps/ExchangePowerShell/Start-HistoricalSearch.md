---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/start-historicalsearch
schema: 2.0.0
title: Start-HistoricalSearch
---

# Start-HistoricalSearch

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Start-HistoricalSearch cmdlet to start a new historical search.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Start-HistoricalSearch -EndDate <DateTime> -ReportTitle <String> -ReportType <HistoricalSearchReportType> -StartDate <DateTime>
 [-BlockStatus <String>]
 [-CompressFile <Boolean>]
 [-ConnectorType <String>]
 [-DeliveryStatus <String>]
 [-Direction <MessageDirection>]
 [-DLPPolicy <MultiValuedProperty>]
 [-EncryptionTemplate <String>]
 [-EncryptionType <String>]
 [-Locale <CultureInfo>]
 [-MessageID <MultiValuedProperty>]
 [-NetworkMessageID <MultiValuedProperty>]
 [-NotifyAddress <MultiValuedProperty>]
 [-OriginalClientIP <String>]
 [-RecipientAddress <MultiValuedProperty>]
 [-SenderAddress <MultiValuedProperty>]
 [-SmtpSecurityError <String>]
 [-TLSUsed <String>]
 [-TransportRule <MultiValuedProperty>]
 [-Url <String>]
 [<CommonParameters>]
```

## DESCRIPTION
A historical search provides message trace and report details in a comma-separated value (CSV) file for messages that are aged between 1-4 hours (depending on your environment) and 90 days old. You can submit a maximum of 250 historical searches that you can submit in a 24 hour period. You get a warning if you approach the daily quota. Cancelled searches count against the daily quota. Also, in each CSV file there is a limit of 100000 results or lines.

If you specify a distribution group, all messages might not be returned in the results. To ensure that all messages are returned, specify the individual recipient.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Start-HistoricalSearch -ReportTitle "Fabrikam Search" -StartDate 1/1/2023 -EndDate 1/7/2023 -ReportType MessageTrace -SenderAddress michelle@fabrikam.com -NotifyAddress chris@contoso.com
```

This example starts a new historical search named "Fabrikam Search" that has the following properties:

- Date range: January 1 2023 to January 6 2023. Because we aren't specifying the time of day, the value 0:00 AM is used. In this example, the date range is equivalent to -StartDate "1/1/2023 0:00 AM" -EndDate "1/7/2023 0:00 AM"
- Report type: Message trace
- Sender address: michelle@fabrikam.com
- Internal notification email address: chris@contoso.com

## PARAMETERS

### -EndDate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

If you don't specify the time of day, the default value 0:00 AM is used. For example, the value 12/31/2022 is really "12/31/2022 0:00 AM", which means no data from 12/31/2022 is included (only data from 12/30/2022 is included).

You also need to use at least one of the following parameters in the command: MessageID, RecipientAddress, or SenderAddress.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReportTitle

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ReportTitle parameter specifies a descriptive name for the historical search. If the value contains spaces, enclose the value in quotation marks (").

You also need to use at least one of the following parameters in the command: MessageID, RecipientAddress, or SenderAddress.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ReportType parameter specifies the type of historical search that you want to perform. You can use one of the following values:

- ATPReport: Defender for Office 365 File types report and Defender for Office 365 Message disposition report
- ConnectorReport: Inbound/Outbound Message Report.
- DLP: Data Loss Prevention Report.
- MessageTrace: Message Trace Report.
- MessageTraceDetail: Message Trace Details Report.
- OutboundSecurityReport: Outbound Message in Transit Security Report.
- P2SenderAttribution: P2 Sender Attribution Report.
- SPAM: SPAM Detections Report.
- Spoof: Spoof Mail Report.
- TransportRule: Transport or Mail Flow Rules Report.
- UnifiedDLP: Unified Data Loss Prevention Report.

You also need to use at least one of the following parameters in the command: MessageID, RecipientAddress, or SenderAddress.

```yaml
Type: HistoricalSearchReportType
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BlockStatus

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The BlockStatus parameter filters the results in OutboundSecurityReport reports by the status of messages sent externally, messages blocked due to security checks, or messages sent successfully.

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

### -CompressFile

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill CompressFile Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ConnectorType parameter filters the results in ConnectorReport reports by the connector type. Valid values are:

- OnPremises
- Partner
- NoConnector

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

### -DeliveryStatus

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The DeliveryStatus parameter filters the results by the delivery status of the message. You can use one of the following values:

- Delivered
- Expanded
- Failed

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

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Direction parameter filters the results by the direction of the message. Valid values are:

- All: Incoming and outgoing messages.
- Received: Ingoing messages only.
- Sent: Outgoing messages only.

```yaml
Type: MessageDirection
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DLPPolicy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The DLPPolicy parameter filters the results by the name of the DLP policy that acted on the message. You can specify multiple DLP policies separated by commas.

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

### -EncryptionTemplate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill EncryptionTemplate Description }}

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

### -EncryptionType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill EncryptionType Description }}

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

### -Locale

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Locale parameter filters the results by the locale of the message.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageID

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which might include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

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

### -NetworkMessageID

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The NetworkMessageId parameter filters the message tracking log entries by the value of the NetworkMessageId field. This field contains a unique message ID value that persists across copies of the message that might be created due to bifurcation or distribution group expansion. An example value is 1341ac7b13fb42ab4d4408cf7f55890f.

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

### -NotifyAddress

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The NotifyAddress parameter specifies the email addresses of internal recipients to notify when the historical search is complete. The email address must be in an accepted domain that's configured for your organization. You can enter multiple email addresses separated by commas.

To view the results of the historical search, you need to specify at least one email address for the NotifyAddress parameter. Otherwise, you need to click on the completed message trace in the Exchange admin center at **Mail flow** \> **Message trace**.

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

### -OriginalClientIP

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The OriginalClientIP parameter filters the results by the original IP address of the message. For incoming messages, the OriginalClientIP value is the sender's IP address. For outgoing messages, the OriginalClientIP value is the IP address of the external SMTP server that received the message.

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

### -RecipientAddress

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas. The maximum number of addresses is 100.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -SenderAddress

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas. The maximum number of addresses is 100.

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

### -SmtpSecurityError

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SmtpSecurityError parameter filters the results in OutboundSecurityReport reports by the error type of blocked messages when sent externally.

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

### -TLSUsed

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The TLSUsed parameter filters the results in ConnectorReport reports by the TLS version. Valid values are:

- No Tls
- TLS1.2
- TLS1.3

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

### -TransportRule

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The TransportRule parameter filters the results by the name of the Exchange mail flow rule (also known as a transport rule) that acted on the message. You can specify multiple transport rules separated by commas.

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

### -Url

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill Url Description }}

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
