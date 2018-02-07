---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Suspend-Queue

## SYNOPSIS
!!! Exchange Server 2010

Use the Suspend-Queue cmdlet to stop processing for a queue on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Suspend-Queue cmdlet to stop processing for a queue on a Mailbox server or an Edge Transport server.

## SYNTAX

### Set2
```
Suspend-Queue -Filter <String> [-Confirm] [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Suspend-Queue [-Identity] <QueueIdentity> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Suspend-Queue cmdlet stops processing on a queue that has a status of Active or Retry. Messages being processed are delivered, but no additional messages leave the queue. When you use the Identity parameter, the queue is suspended only if the identity matches a single queue. If the identity matches more than one queue, you receive an error. To suspend more than one queue in a single operation, you must use the Filter parameter.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Queues" entry in the Transport Permissions topic.

!!! Exchange Server 2013

The Suspend-Queue cmdlet stops processing on a queue that has a status of Active or Retry. Messages being processed are delivered, but no additional messages leave the queue. When you use the Identity parameter, the queue is suspended only if the identity matches a single queue. If the identity matches more than one queue, you receive an error. To suspend more than one queue in a single operation, you must use the Filter parameter.

For instructions on how to resume suspended queues, see Resume-Queue.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Queues" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

The Suspend-Queue cmdlet stops processing on a queue that has a status of Active or Retry. Messages being processed are delivered, but no additional messages leave the queue. When you use the Identity parameter, the queue is suspended only if the identity matches a single queue. If the identity matches more than one queue, you receive an error. To suspend more than one queue in a single operation, you must use the Filter parameter.

For instructions on how to resume suspended queues, see Resume-Queue.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Suspend-Queue -Filter {NextHopDomain -eq "contoso.com" -and Status -eq "Retry"}
```

This example suspends processing on all queues holding messages for delivery to the domain contoso.com and that currently have a status of Retry.

### Example 1 -------------------------- (Exchange Server 2013)
```
Suspend-Queue -Filter {NextHopDomain -eq "contoso.com" -and Status -eq "Retry"}
```

This example suspends processing on all queues holding messages for delivery to the domain contoso.com and that currently have a status of Retry.

### Example 1 -------------------------- (Exchange Server 2016)
```
Suspend-Queue -Filter {NextHopDomain -eq "contoso.com" -and Status -eq "Retry"}
```

This example suspends processing on all queues holding messages for delivery to the domain contoso.com and that currently have a status of Retry.

### Example 2 -------------------------- (Exchange Server 2010)
```
Suspend-Queue -Server Server1.contoso.com -Filter {MessageCount -gt 100}
```

This example suspends processing on all queues on server Server1.contoso.com that have more than 100 messages in the queue.

### Example 2 -------------------------- (Exchange Server 2013)
```
Suspend-Queue -Server Server1.contoso.com -Filter {MessageCount -gt 100}
```

This example suspends processing on all queues on the server Server1.contoso.com that have more than 100 messages in the queue.

### Example 2 -------------------------- (Exchange Server 2016)
```
Suspend-Queue -Server Server1.contoso.com -Filter {MessageCount -gt 100}
```

This example suspends processing on all queues on the server Server1.contoso.com that have more than 100 messages in the queue.

## PARAMETERS

### -Filter
!!! Exchange Server 2010

The Filter parameter requires an expression that specifies the property value criteria for the queues that you want to suspend. The expression includes a property name followed by a comparison operator and value. The following queue properties are valid criteria for the Filter parameter:

DeliveryType The delivery type for this queue as defined by transport. The delivery type must be one of the following values:

DNSConnectorDelivery

NonSMTPGatewayDelivery

SmartHostConnectorDelivery

SmtpRelayWithinAdSitetoEdge

MapiDelivery

SmtpRelayWithinAdSite

SmtpRelaytoRemoteAdSite

SmtpRelaytoTiRg

Undefined

Unreachable

Identity The queue identity in the form of Server\\destination, where destination is a remote domain, Mailbox server, or persistent queue name.

LastError A text string of the last error recorded for a queue.

LastRetryTime The time when a connection was last tried for this queue.

MessageCount The number of items in the queue.

NextHopConnector The GUID of the connector used to create the queue.

NextHopDomain The next hop domain of the queue, specified as a remote SMTP domain, a server name, the name of an Active Directory site, or a message database (MDB) identifier.

NextRetryTime The time when a connection will next be tried for this queue.

Status The status of the queue. Queue status options are Active, Ready, Retry, or Suspended.

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").



!!! Exchange Server 2013

The Filter parameter specifies one or more queues by using OPath filter syntax. The OPath filter includes a queue property name followed by a comparison operator and value, for example, {NextHopDomain -eq "contoso.com"}. For details about filterable queue properties and comparison operators, see Queue filters and Use the Exchange Management Shell to manage queues.

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").



!!! Exchange Server 2016

The Filter parameter specifies one or more queues by using OPath filter syntax. The OPath filter includes a queue property name followed by a comparison operator and value, for example, {NextHopDomain -eq "contoso.com"}. For details about filterable queue properties and comparison operators, see Queue properties (https://technet.microsoft.com/library/bb125237.aspx) and Find queues and messages in queues in the Exchange Management Shell (https://technet.microsoft.com/library/aa998047.aspx).

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").



```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the queue that contains the messages that you want to suspend. Enter the queue identity in the form of Server\\destination, where destination is a remote domain, Mailbox server, or persistent queue name.



!!! Exchange Server 2013

The Identity parameter specifies the queue. Valid input for this parameter uses the syntax Server\\Queue or Queue, for example, Mailbox01\\contoso.com or Unreachable. For details about queue identity, see the "Queue identity" section in Use the Exchange Management Shell to manage queues.



!!! Exchange Server 2016

The Identity parameter specifies the queue. Valid input for this parameter uses the syntax Server\\Queue or Queue, for example, Mailbox01\\contoso.com or Unreachable. For details about queue identity, see the "Queue identity" section in Find queues and messages in queues in the Exchange Management Shell (https://technet.microsoft.com/library/aa998047.aspx).



```yaml
Type: QueueIdentity
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
!!! Exchange Server 2010

The Server parameter specifies the name of the server to connect to by using the remote procedure call (RPC) that contains the queues that hold the messages that you want to suspend. Enter the server name as a host name or a fully qualified domain name (FQDN). If this parameter isn't used, the local server is queried.



!!! Exchange Server 2013

The Server parameter specifies the Exchange server on which you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use the Server parameter, the command is run on the local server.

You can use the Server parameter and the Filter parameter in the same command. You can't use the Server parameter and the Identity parameter in the same command.



!!! Exchange Server 2016

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can use the Server parameter and the Filter parameter in the same command. You can't use the Server parameter and the Identity parameter in the same command.



```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/7dca48c4-69a1-4157-a50e-88907dd32d04.aspx)

