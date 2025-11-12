---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-messagetracev2
schema: 2.0.0
title: Get-MessageTraceV2
---

# Get-MessageTraceV2

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MessageTraceV2 cmdlet to trace messages as they pass through the cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MessageTraceV2
 [[-EndDate] <System.DateTime>]
 [[-FromIP] <String>]
 [[-MessageId] <MultiValuedProperty>]
 [[-MessageTraceId] <System.Guid>]
 [[-RecipientAddress] <MultiValuedProperty>]
 [[-ResultSize] <Int32>]
 [[-SenderAddress] <MultiValuedProperty>]
 [[-StartDate] <System.DateTime>]
 [[-StartingRecipientAddress] <String>]
 [[-Status] <MultiValuedProperty>]
 [[-SubjectFilterType] <String>]
 [[-Subject] <String>]
 [[-ToIP] <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to search message data for the last 90 days. If you run this cmdlet without any parameters, only data from the last 48 hours is returned. You can only return 10 days worth of data per query.

By default, this cmdlet returns up to 1000 results, with a maximum of 5000 results. If your data exceeds the result size, query in multiple rounds or use smaller StartDate and EndDate intervals.

The time stamps on the output are in UTC time format. That might be different from the time format that you used for the -StartDate and the -EndDate parameters.

Throttling limit: A maximum of 100 query requests are accepted within a 5 minute running window. Throttling is automatically not applied if the request rate is lower than 100 requests in the last 5 minutes

Pagination isn't supported in this cmdlet. To query subsequent data, use the StartingRecipientAddress and EndDate parameters with the values from the **Recipient address** and **Received Time** properties respectively of the previous result in the next query.

Best Practices:

- Use the ResultSize parameter to adjust the size of your results.
- Be as precise as possible. Narrow the gap between StartDate and EndDate and use additional parameters (for example, SenderAddress) where possible.
- Use MessageTraceId where possible (required for messages sent to more than 1000 recipients).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MessageTraceV2 -SenderAddress john@contoso.com -StartDate 06/13/2025 -EndDate 06/15/2025
```

This example retrieves message trace information for messages sent by `john@contoso.com` between June 13, 2025 and June 15, 2025.

## PARAMETERS

### -EndDate

> Applicable: Exchange Online, Exchange Online Protection

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2025 to specify September 1, 2025. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2025 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -FromIP

> Applicable: Exchange Online, Exchange Online Protection

The FromIP parameter filters the results by the source IP address. For incoming messages, the value of FromIP is the public IP address of the SMTP email server that sent the message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MessageId

> Applicable: Exchange Online, Exchange Online Protection

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which might include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@DM3NAM06BG401.Eop-nam06.prod.protection.outlook.com>").

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MessageTraceId

> Applicable: Exchange Online, Exchange Online Protection

The MessageTraceId parameter filters the results by the message trace ID value of the message. This GUID value is generated for every message that's processed by the system (for example, c20e0f7a-f06b-41df-fe33-08d9da155ac1).

The MessageTraceId value is also available in the output of the following cmdlets:

- Get-MailDetailATPReport
- Get-MailDetailDlpPolicyReport
- Get-MailDetailEncryptionReport
- Get-MailDetailTransportRuleReport
- Get-MessageTraceDetailV2

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -RecipientAddress

> Applicable: Exchange Online, Exchange Online Protection

The RecipientAddress parameter filters the results by the recipient's email address. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. A valid value is from 1 to 5000. The default value is 1000.

**Note**: This parameter replaces the PageSize parameter that was available on the Get-MessageTrace cmdlet.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: 0
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SenderAddress

> Applicable: Exchange Online, Exchange Online Protection

The SenderAddress parameter filters the results by the sender's email address. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Online, Exchange Online Protection

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2025 to specify September 1, 2025. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2025 5:00 PM".

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

### -StartingRecipientAddress

> Applicable: Exchange Online, Exchange Online Protection

The StartingRecipientAddress parameter is used with the EndDate parameter to query subsequent data for partial results while avoiding duplication. Query subsequent data by taking the **Recipient address** and **Received Time** values of the last record of the partial results and using them as the values for the StartingRecipientAddress and EndDate parameters respectively in the next query.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Status

> Applicable: Exchange Online, Exchange Online Protection

The Status parameter filters the results by the delivery status of the message. Valid values are:

- Delivered: The message was delivered to its destination.
- Expanded: There was no message delivery because the message was addressed to a distribution group and the membership of the distribution was expanded.
- Failed: Message delivery was attempted and it failed.
- FilteredAsSpam: The message was marked as spam.
- GettingStatus: The message is waiting for status update.
- Pending: Message delivery is underway or was deferred and is being retried.
- Quarantined: The message was quarantined.

You can separate multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subject

> Applicable: Exchange Online, Exchange Online Protection

The Subject parameter filters the results by the subject of the message. If the value contains spaces, enclose the value in quotation marks (").

You specify how the value is evaluated in the message subject by using the SubjectFilterType parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 11
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SubjectFilterType

> Applicable: Exchange Online, Exchange Online Protection

The SubjectFilterType parameter specifies how the value of the Subject parameter is evaluated. Valid values are:

- Contains
- EndsWith
- StartsWith

We recommend using StartsWith or EndsWith instead of Contains whenever possible.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 12
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ToIP

> Applicable: Exchange Online, Exchange Online Protection

The ToIP parameter filters the results by the destination IP address. For outgoing messages, the value of ToIP is the public IP address in the resolved MX record for the destination domain. For incoming messages to Exchange Online, the value is blank.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 13
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
