---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/add-resubmitrequest
schema: 2.0.0
title: Add-ResubmitRequest
---

# Add-ResubmitRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Add-ResubmitRequest cmdlet to add requests to replay redundant copies of messages from Safety Net after a mailbox database recovery.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### MDBResubmit
```
Add-ResubmitRequest -EndTime <DateTime> -StartTime <DateTime>
 [-Destination <Guid>]
 [-Confirm]
 [-CorrelationId <Guid>]
 [-Server <ServerIdParameter>]
 [-TestOnly <Boolean>]
 [-UnresponsivePrimaryServers <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

### ConditionalResubmit
```
Add-ResubmitRequest -EndTime <DateTime> -StartTime <DateTime>
 [-MessageId <String>]
 [-Recipient <String>]
 [-ResubmitTo <String>]
 [-Sender <String>]
 [-Confirm]
 [-CorrelationId <Guid>]
 [-Server <ServerIdParameter>]
 [-TestOnly <Boolean>]
 [-UnresponsivePrimaryServers <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-ResubmitRequest -Destination 5364aeea-6e6b-4055-8258-229b2c6ac9a2 -StartTime "06/01/2018 6:00 PM" -EndTime "06/02/2018 5:00 AM"
```

This example replays the redundant copies of messages delivered from 6:00 PM June 1, 2018 to 5:00 AM June 2 2018 to the recovered mailbox database 5364aeea-6e6b-4055-8258-229b2c6ac9a2.

## PARAMETERS

### -EndTime

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The EndTime parameter specifies the delivery time of the latest messages that need to be resubmitted from Safety Net.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

The date and time specified by the EndTime parameter must be later than the date and time specified by the StartTime parameter. The date and time specified by both parameters must be in the past.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The StartTime parameter specifies the delivery time of the oldest messages that need to be resubmitted from Safety Net.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

The date and time specified by the StartTime parameter must be earlier than the date and time specified by the EndTime parameter. The date and time specified by both parameters must be in the past.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CorrelationId

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Destination

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Destination parameter specifies the GUID of the destination mailbox database. To find the GUID of the mailbox database, run the command: `Get-MailboxDatabase -Server <ServerName> | Format-List Name,GUID`.

You can't use this parameter with the Recipient, ResubmitTo, or Sender parameters.

```yaml
Type: Guid
Parameter Sets: MDBResubmit
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MessageId parameter filters the results by the Message-ID header field of the message. This value is also known as the Client ID. The format of the Message-ID depends on the messaging server that sent the message. The value should be unique for each message. However, not all messaging servers create values for the Message-ID in the same way. Be sure to include the full Message ID string (which might include angle brackets) and enclose the value in quotation marks (for example, "<d9683b4c-127b-413a-ae2e-fa7dfb32c69d@contoso.com>").

```yaml
Type: String
Parameter Sets: ConditionalResubmit
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recipient

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Recipient parameter filters the messages to resubmit from Safety Net by the specified recipient's email address.

You can't use this parameter with the Destination parameter.

```yaml
Type: String
Parameter Sets: ConditionalResubmit
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResubmitTo

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ResubmitTo parameter specifies the recipient's email address for resubmitted messages that are identified by using the Recipient or Sender parameters.

```yaml
Type: String
Parameter Sets: ConditionalResubmit
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sender

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Sender parameter filters the messages to resubmit from Safety Net by the specified sender's email address.

You can't use this parameter with the Destination parameter.

```yaml
Type: String
Parameter Sets: ConditionalResubmit
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TestOnly

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -UnresponsivePrimaryServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The UnresponsivePrimaryServers parameter identifies the primary servers that should resubmit the messages from Safety Net as being unavailable so other servers can resubmit the messages. If the primary servers are unavailable, you can designate other servers that hold redundant copies of the messages in Safety Net to resubmit their copies of the messages. However, you must identify the unresponsive primary servers to the other servers using this parameter.

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

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
