---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-message
schema: 2.0.0
title: Remove-Message
---

# Remove-Message

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-Message cmdlet to delete a message from a queue on a Mailbox server or an Edge Transport server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Filter
```
Remove-Message -Filter <String> [-Server <ServerIdParameter>]
 [-Confirm]
 [-WhatIf]
 [-WithNDR <Boolean>]
 [<CommonParameters>]
```

### Identity
```
Remove-Message [-Identity] <MessageIdentity>
 [-Confirm]
 [-WhatIf]
 [-WithNDR <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
A message being transmitted to multiple recipients might be located in multiple queues. If you specify an Identity parameter, the message is removed from a single queue if that identity matches only a single message. If the identity matches more than one message, you receive an error. To remove a message from more than one queue in a single operation, you must use the Filter parameter. If you try to remove a message currently being delivered, the message status changes to PendingDelete. Message delivery isn't interrupted, but if the delivery fails and causes the message to re-enter the queue, it's then removed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-Message -Server Server1 -Filter "FromAddress -eq 'Kweku@contoso.com'" -WithNDR $false
```

This example removes all messages that meet the following criteria without generating NDRs:

- The messages are sent by the sender Kweku@contoso.com.
- The messages are queued on the server Server1.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the message. Valid input for this parameter uses the syntax Server\\Queue\\MessageInteger or Queue\\MessageInteger or MessageInteger, for example, Mailbox01\\contoso.com\\5 or 10. For details about message identity, see [Message identity](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell#message-identity).

```yaml
Type: MessageIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Filter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Filter parameter specifies one or more messages by using OPATH filter syntax. The OPATH filter includes a message property name followed by a comparison operator and value (for example, `"FromAddress -like '*@contoso.com'"`). For details about filterable message properties and comparison operators, see [Properties of messages in queues](https://learn.microsoft.com/Exchange/mail-flow/queues/message-properties) and [Find queues and messages in queues in the Exchange Management Shell](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell).

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can use the Server parameter and the Filter parameter in the same command. You can't use the Server parameter and the Identity parameter in the same command.

```yaml
Type: ServerIdParameter
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -WithNDR

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WithNDR parameter specifies whether a non-delivery report (NDR) is returned to the sender of a message. The default value is $true. This parameter can be used with both the Identity parameter and Filter parameter sets.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
