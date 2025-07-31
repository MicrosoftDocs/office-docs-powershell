---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/suspend-queue
schema: 2.0.0
title: Suspend-Queue
---

# Suspend-Queue

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Suspend-Queue cmdlet to stop processing for a queue on a Mailbox server or an Edge Transport server.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Filter
```
Suspend-Queue -Filter <String>
 [-Server <ServerIdParameter>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
Suspend-Queue [-Identity] <QueueIdentity>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Suspend-Queue cmdlet stops processing on a queue that has a status of Active or Retry. Messages being processed are delivered, but no additional messages leave the queue. When you use the Identity parameter, the queue is suspended only if the identity matches a single queue. If the identity matches more than one queue, you receive an error. To suspend more than one queue in a single operation, you must use the Filter parameter.

For instructions on how to resume suspended queues, see [Resume-Queue](https://learn.microsoft.com/powershell/module/exchangepowershell/resume-queue).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Suspend-Queue -Filter "NextHopDomain -eq "contoso.com" -and Status -eq 'Retry'"
```

This example suspends processing on all queues holding messages for delivery to the domain contoso.com and that currently have a status of Retry.

### Example 2
```powershell
Suspend-Queue -Server Server1.contoso.com -Filter "MessageCount -gt 100"
```

This example suspends processing on all queues on the server Server1.contoso.com that have more than 100 messages in the queue.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the queue. Valid input for this parameter uses the syntax Server\\Queue or Queue, for example, Mailbox01\\contoso.com or Unreachable. For details about queue identity, see [Queue identity](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell#queue-identity).

```yaml
Type: QueueIdentity
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

The Filter parameter specifies one or more queues by using OPATH filter syntax. The OPATH filter includes a queue property name followed by a comparison operator and value (for example, `"NextHopDomain -eq 'contoso.com'"`). For details about filterable queue properties and comparison operators, see [Queue properties in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/queues/queue-properties) and [Find queues and messages in queues in the Exchange Management Shell](https://learn.microsoft.com/Exchange/mail-flow/queues/queues-and-messages-in-powershell).

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
