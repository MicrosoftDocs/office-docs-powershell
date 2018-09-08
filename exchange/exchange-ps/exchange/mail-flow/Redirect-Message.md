---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016
title: Redirect-Message
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Redirect-Message

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Redirect-Message cmdlet to drain the active messages from all the delivery queues on a Mailbox server, and transfer those messages to another Mailbox server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Redirect-Message -Server <ServerIdParameter> -Target <MultiValuedProperty> [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When a message queue is drained, the active messages in the queues on the source Mailbox server are routed to the target Mailbox server. After the messages are received and queued by the target Mailbox server, the messages are made redundant. Other considerations include the following:

- Only active messages are drained. Shadow queues aren't drained.

- Messages in the poison message queue aren't drained.

- The source server won't accept new messages while the queues are drained.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Redirect-Message -Server Mailbox01 -Target Mailbox02
```

This example drains the active messages from the delivery queues on the Mailbox server named Mailbox01 and transfers the messages to the server named Mailbox02.

## PARAMETERS

### -Server
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Target
The Target parameter specifies the target Mailbox server where you want to transfer the messages from the drained delivery queues. Enter the server name as a fully qualified domain name (FQDN).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/248138e5-6da4-4652-9cde-f8060c4a854c.aspx)
