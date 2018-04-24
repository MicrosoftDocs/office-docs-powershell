---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Start-HistoricalSearch
schema: 2.0.0
monikerRange: "exchonline-ps || eop-ps"
---

# Start-HistoricalSearch

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Start-HistoricalSearch cmdlet to start a new historical search.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Start-HistoricalSearch -EndDate <DateTime> -ReportTitle <String>
 -ReportType <MessageTrace | MessageTraceDetail | DLP | TransportRule | SPAM | Malware | UnifiedDLP | ATPReport | Spoof | ATPV2>
 -StartDate <DateTime> [-DeliveryStatus <String>] [-Direction <All | Sent | Received>]
 [-DLPPolicy <MultiValuedProperty>] [-Locale <CultureInfo>] [-MessageID <MultiValuedProperty>]
 [-NotifyAddress <MultiValuedProperty>] [-OriginalClientIP <String>] [-RecipientAddress <MultiValuedProperty>]
 [-SenderAddress <MultiValuedProperty>] [-TransportRule <MultiValuedProperty>] [<CommonParameters>]
```

## DESCRIPTION
A historical search provides message trace and report details in a comma-separated value (CSV) file for messages that are aged between 1-4 hours (depending on your environment) and ninety days old. There are limits to the number of historical searches you can perform in a 24 hour period; you'll be warned if you're nearing the daily quota. Cancelled searches count against the daily quota.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Start-HistoricalSearch -ReportTitle "Fabrikam Search" -StartDate 1/1/2016 -EndDate 1/7/2016 -ReportType MessageTrace -SenderAddress michelle@fabrikam.com -NotifyAddress chris@contoso.com
```

This example starts a new historical search named "Fabirkam Search" that has the following properties:

- Date range: January 1, 2016 to January 7, 2016

- Report type: Message trace

- Sender address: michelle@fabrikam.com

- Internal notification email address: chris@contoso.com

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ReportTitle
The ReportTitle parameter specifies a descriptive name for the historical search. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportType
The ReportType parameter specifies the type of historical search that you want to perform. You can use one of the following values:

- DLP

- Malware

- MessageTrace

- MessageTraceDetail

- SPAM

- TransportRule

```yaml
Type: MessageTrace | MessageTraceDetail | DLP | TransportRule | SPAM | Malware | UnifiedDLP | ATPReport | Spoof | ATPV2
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: True
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
Applicable: Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DeliveryStatus
The DeliveryStatus parameter filters the results by the delivery status of the message. You can use one of the following values:

- Delivered

- Expanded

- Failed

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
The Direction parameter filters the results by the direction of the message. Valid values are:

- All: Incoming and outgoing messages.

- Received: Ingoing messages only.

- Sent: Outgoing messages only.

```yaml
Type: All | Sent | Received
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DLPPolicy
The DLPPolicy parameter filters the results by the name of the DLP policy that acted on the message. You can specify multiple DLP policies separated by commas.

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

### -Locale
The Locale parameter filters the results by the locale of the message.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageID
The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string. This may include angle brackets.

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

### -NotifyAddress
The NotifyAddress parameter specifies the email addresses of internal recipients to notify when the historical search is complete. The email address must be in an accepted domain that's configured for your organization. You can enter multiple email addresses separated by commas.

To view the results of the historical search, you need to specify at least one email address for the NotifyAddress parameter. Otherwise, you need to click on the completed message trace in the Exchange admin center at Mail flow \> Message trace.

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

### -OriginalClientIP
The OriginalClientIP parameter filters the results by the original IP address of the message. For incoming messages, the OriginalClientIP value is the sender's IP address. For outgoing messages, the OriginalClientIP value is the IP address of the external SMTP server that received the message.

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

### -TransportRule
The TransportRule parameter filters the results by the name of the transport rule that acted on the message. You can specify multiple transport rules separated by commas.

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9688689c-2953-49de-bb38-eeea10b7f08e.aspx)
