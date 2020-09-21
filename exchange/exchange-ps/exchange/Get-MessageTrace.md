---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-messagetrace
applicable: Exchange Online, Exchange Online Protection
title: Get-MessageTrace
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-MessageTrace

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MessageTrace cmdlet to trace messages as they pass through the cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-MessageTrace
 [-EndDate <DateTime>]
 [-Expression <Expression>]
 [-FromIP <String>]
 [-MessageId <MultiValuedProperty>]
 [-MessageTraceId <Guid>]
 [-Page <Int32>]
 [-PageSize <Int32>]
 [-ProbeTag <String>]
 [-RecipientAddress <MultiValuedProperty>]
 [-SenderAddress <MultiValuedProperty>]
 [-StartDate <DateTime>]
 [-Status <MultiValuedProperty>]
 [-ToIP <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to search message data for the last 10 days. If you run this cmdlet without any parameters, only data from the last 48 hours is returned.

If you enter a start date that is older than 10 days, you will receive an error and the command will return no results.

To search for message data that is greater than 10 days old, use the Start-HistoricalSearch and Get-HistoricalSearch cmdlets.

This cmdlet returns a maximum of 1000000 results, and will timeout on very large queries. If your query returns too many results, consider splitting it up using smaller StartDate and EndDate intervals.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MessageTrace -SenderAddress john@contoso.com -StartDate 06/13/2018 -EndDate 06/15/2018
```

This example retrieves message trace information for messages sent by john@contoso.com between June 13, 2018 and June 15, 2018.

## PARAMETERS

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
Accept pipeline input: True
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

### -FromIP
The FromIP parameter filters the results by the source IP address. For incoming messages, the value of FromIP is the public IP address of the SMTP email server that sent the message. For outgoing messages from Exchange Online, the value is blank.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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
Accept pipeline input: True
Accept wildcard characters: False
```

### -MessageTraceId
The MessageTraceId parameter can be used with the recipient address to uniquely identify a message trace and obtain more details. A message trace ID is generated for every message that's processed by the system.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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
Accept pipeline input: True
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
Accept pipeline input: True
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
Accept pipeline input: True
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
Position: Named
Default value: None
Accept pipeline input: False
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
Position: Named
Default value: None
Accept pipeline input: True
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
