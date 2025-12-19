---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-messagetracedetailv2
schema: 2.0.0
title: Get-MessageTraceDetailV2
---

# Get-MessageTraceDetailV2

## SYNOPSIS

## SYNTAX

```
Get-MessageTraceDetailV2 [-MessageTraceId] <Guid> [-RecipientAddress] <String>
 [[-Action] <MultiValuedProperty>]
 [[-EndDate] <System.DateTime>]
 [[-Event] <MultiValuedProperty>]
 [[-MessageId] <String>]
 [[-SenderAddress] <String>]
 [[-StartDate] <System.DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to search message data for the last 90 days. You can only query 10 days worth of data per query. If you enter a timeframe that's older than 90 days, you receive an error and the command returns no results.

Throttling limit: A maximum of 100 query requests are accepted within a 5 minute running window. Throttling is automatically not applied if the request rate is lower than 100 requests in the last 5 minutes

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MessageTraceDetailV2 -MessageTraceId ae5c1219-4c90-41bf-fef5-08d837917e7c -RecipientAddress robert@contoso.com
```

This example retrieves detailed message trace information for messages with the message trace ID value ae5c1219-4c90-41bf-fef5-08d837917e7c that were received by `robert@contoso.com`.

### Example 2
```powershell
Get-MessageTraceV2 -MessageTraceId 2bbad36aa4674c7ba82f4b307fff549f -SenderAddress john@contoso.com -StartDate 06/13/2025 -EndDate 06/15/2025 | Get-MessageTraceDetailV2
```

This example uses the Get-MessageTraceV2 cmdlet to retrieve message trace information for messages with the Exchange Network Message ID value 2bbad36aa4674c7ba82f4b307fff549f sent by `john@contoso.com` between June 13, 2025 and June 15, 2025, and pipelines the results to the Get-MessageTraceDetailV2 cmdlet.

## PARAMETERS

### -MessageTraceId

> Applicable: Exchange Online

The MessageTraceId parameter filters the results by the message trace ID value of the message. This GUID value is generated for every message that's processed by the system (for example, c20e0f7a-f06b-41df-fe33-08d9da155ac1).

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The RecipientAddress parameter filters the results by the recipient's email address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 6
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Action

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Action parameter filters the report by the action taken on messages. To view the complete list of valid values for this parameter, run the command: `Get-MailFilterListReport -SelectionTarget Actions`. The action you specify must correspond to the report type. For example, you can only specify malware filter actions for malware reports.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2025 to specify September 1, 2025. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2025 5:00 PM".

If don't use the StartDate and EndDate parameters, only data from the last 48 hours is returned.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Event

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Event parameter filters the report by the message event. The following are examples of common events:

- RECEIVE: The message was received by the service.
- SEND: The message was sent by the service.
- FAIL: The message failed to be delivered.
- DELIVER: The message was delivered to a mailbox.
- EXPAND: The message was sent to a distribution group that was expanded.
- TRANSFER: Recipients were moved to a bifurcated message because of content conversion, message recipient limits, or agents.
- DEFER: The message delivery was postponed and might be re-attempted later.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which might include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SenderAddress

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2025 to specify September 1, 2025. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2025 5:00 PM".

If don't use the StartDate and EndDate parameters, only data from the last 48 hours is returned.

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
