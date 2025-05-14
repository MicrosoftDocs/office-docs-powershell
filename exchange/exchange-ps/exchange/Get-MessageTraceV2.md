---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-messagetracev2
applicable: Exchange Online, Exchange Online Protection
title: Get-MessageTraceV2
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
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
You can use this cmdlet to search message data for the last 10 days. If you run this cmdlet without any parameters, only data from the last 48 hours is returned.

If you enter a start date that is older than 10 days, you will receive an error and the command will return no results.

To search for message data that is greater than 10 days old, use the Start-HistoricalSearch and Get-HistoricalSearch cmdlets.

By default, this cmdlet returns a maximum of 1000 results, and will timeout on very large queries. If your query returns too many results, consider splitting it up using smaller StartDate and EndDate intervals.

The time stamps on the output are in UTC time format. That might be different from the time format that you used for the -StartDate and the -EndDate parameters.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MessageTraceV2 -SenderAddress john@contoso.com -StartDate 05/13/2025 -EndDate 05/15/2025
```

This example retrieves message trace information for messages sent by `john@contoso.com` between May 13, 2025 and May 15, 2025.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2025 to specify September 1, 2025. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2025 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -FromIP
The FromIP parameter filters the results by the source IP address. For incoming messages, the value of FromIP is the public IP address of the SMTP email server that sent the message.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MessageTraceId
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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. A valid value is from 1 to 5000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 6
Default value: 0
Accept pipeline input: True (ByPropertyName)
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
Position: 7
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2025 to specify September 1, 2025. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2025 5:00 PM".

```yaml
Type: System.DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 8
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StartingRecipientAddress
{{ Fill StartingRecipientAddress Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 9
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Status
The Status parameter filters the results by the delivery status of the message. Valid values for this parameter are:

- None: The message has no delivery status because it was rejected or redirected to a different recipient.
- GettingStatus: The message is waiting for status update.
- Failed: Message delivery was attempted and it failed or the message was filtered as spam or malware, or by transport rules.
- Pending: Message delivery is underway or was deferred and is being retried.
- Delivered: The message was delivered to its destination.
- Expanded: There was no message delivery because the message was addressed to a distribution group and the membership of the distribution was expanded.
- Quarantined: The message was quarantined.
- FilteredAsSpam: The message was marked as spam.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subject
The Subject parameter filters the results by the subject of the message. If the value contains spaces, enclose the value in quotation marks (").

You specify how the value is evaluated in the message subject by using the SubjectFilterType parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 11
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SubjectFilterType
The SubjectFilterType parameter specifies how the value specified by the Subject parameter is evaluated. Valid values are:

- Contains
- EndWith
- StartWith

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 12
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -ToIP
The ToIP parameter filters the results by the destination IP address. For outgoing messages, the value of ToIP is the public IP address in the resolved MX record for the destination domain. For incoming messages to Exchange Online, the value is blank.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
