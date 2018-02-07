---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-Message

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-Message cmdlet to delete a message from a queue on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Remove-Message cmdlet to delete a message from a queue on a Mailbox server or an Edge Transport server.

## SYNTAX

### Set2
```
Remove-Message -Filter <String> [-Confirm] [-Server <ServerIdParameter>] [-WhatIf] [-WithNDR <$true | $false>]
 [<CommonParameters>]
```

### Set1
```
Remove-Message [-Identity] <MessageIdentity> [-Confirm] [-WhatIf] [-WithNDR <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Remove-Message cmdlet deletes one or more messages in a queue on a Hub Transport server or an Edge Transport server. A message being transmitted to multiple recipients might be located in multiple queues. If you specify an Identity parameter, the message is removed from a single queue if that identity matches only a single message. If the identity matches more than one message, you receive an error. To remove a message from more than one queue in a single operation, you must use the Filter parameter. If you try to remove a message currently being delivered, the message status changes to PendingDelete. Message delivery isn't interrupted, but if the delivery fails and causes the message to re-enter the queue, it's then removed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Queues" entry in the Transport Permissions topic.

!!! Exchange Server 2013

A message being transmitted to multiple recipients might be located in multiple queues. If you specify an Identity parameter, the message is removed from a single queue if that identity matches only a single message. If the identity matches more than one message, you receive an error. To remove a message from more than one queue in a single operation, you must use the Filter parameter. If you try to remove a message currently being delivered, the message status changes to PendingDelete. Message delivery isn't interrupted, but if the delivery fails and causes the message to re-enter the queue, it's then removed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Queues" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

A message being transmitted to multiple recipients might be located in multiple queues. If you specify an Identity parameter, the message is removed from a single queue if that identity matches only a single message. If the identity matches more than one message, you receive an error. To remove a message from more than one queue in a single operation, you must use the Filter parameter. If you try to remove a message currently being delivered, the message status changes to PendingDelete. Message delivery isn't interrupted, but if the delivery fails and causes the message to re-enter the queue, it's then removed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-Message -Server Server1 -Filter {FromAddress -eq "Kweku@contoso.com"} -WithNDR $false
```

This example removes all messages that meet the following criteria without generating NDRs:


The messages are sent by the sender Kweku@contoso.com.

The messages are queued on the server Server1.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-Message -Server Server1 -Filter {FromAddress -eq "Kweku@contoso.com"} -WithNDR $false
```

This example removes all messages that meet the following criteria without generating NDRs:


The messages are sent by the sender Kweku@contoso.com.

The messages are queued on the server Server1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-Message -Server Server1 -Filter {FromAddress -eq "Kweku@contoso.com"} -WithNDR $false
```

This example removes all messages that meet the following criteria without generating NDRs:


The messages are sent by the sender Kweku@contoso.com.

The messages are queued on the server Server1.

## PARAMETERS

### -Filter
!!! Exchange Server 2010

The Filter parameter requires an expression that specifies the property value criteria for the messages that you want to remove. The expression includes a property name followed by a comparison operator and value. The following message properties are valid criteria for the Filter parameter:

- DateReceived The date that the message was received.

- ExpirationTime The time that a message will expire.

- FromAddress The SMTP address of the sender of a message. This value is taken from MAIL FROM in the message envelope.

- Identity An integer that represents a particular message and an optional server and queue identity.

- InternetMessageId The value of the Message-ID header field. This property is expressed as a GUID followed by the SMTP address of the sending server, as in this example: 67D7543D6103DC4FBEBA6BC7205DACABA61231@exchange.contoso.com.

- LastError A text string of the last error recorded for a message.

- MessageSourceName A text string of the name of the component that submitted this message to the queue.

- Queue The identity of the queue that holds the message. Enter the queue identity in the form of Server\\destination, where destination is a remote domain, Mailbox server, or persistent queue name.

- RetryCount The number of times that delivery of a message to a destination was tried.

- SCL The spam confidence level (SCL) of the message. Valid SCL entries are integers 0 through 9. An empty SCL property value indicates that the message hasn't been processed by the Content Filter agent.

- Size The size of a message.

- SourceIP The IP address of the external server that submitted the message to the Exchange organization.

- Status The current message status. Message status options are Active, Retry, Suspended, PendingSuspend, and PendingRemove.

- Subject A text string that represents the e-mail subject. The value is taken from the Subject header field.

You can specify multiple filter criteria by using the and comparison operator. Property values that aren't expressed as a single integer must be enclosed in quotation marks (").



!!! Exchange Server 2013

The Filter parameter specifies one or more messages by using OPath filter syntax. The OPath filter includes a message property name followed by a comparison operator and value, for example, {FromAddress -like "\*@contoso.com"}. For details about filterable message properties and comparison operators, see Message filters and Use the Exchange Management Shell to manage queues.

You can specify multiple criteria by using the and comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks (").



!!! Exchange Server 2016

The Filter parameter specifies one or more messages by using OPath filter syntax. The OPath filter includes a message property name followed by a comparison operator and value, for example, {FromAddress -like "\*@contoso.com"}. For details about filterable message properties and comparison operators, see Properties of messages in queues (https://technet.microsoft.com/library/bb123714.aspx) and https://technet.microsoft.com/library/aa998047.aspx (Find queues and messages in queues in the Exchange Management Shell).

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

The Identity parameter specifies the MessageIdentity integer that represents a particular message and an optional server and queue identity. The syntax for this parameter is as follows:

- Server\\QueueIdentity\\MessageIdentity

- QueueIdentity\\MessageIdentity

- Server\\\*\\MessageIdentity

- MessageIdentity



!!! Exchange Server 2013

The Identity parameter specifies the message. Valid input for this parameter uses the syntax Server\\Queue\\MessageInteger or Queue\\MessageInteger or MessageInteger, for example, Mailbox01\\contoso.com\\5 or 10. For details about message identity, see the "Message identity" section in Use the Exchange Management Shell to manage queues.



!!! Exchange Server 2016

The Identity parameter specifies the message. Valid input for this parameter uses the syntax Server\\Queue\\MessageInteger or Queue\\MessageInteger or MessageInteger, for example, Mailbox01\\contoso.com\\5 or 10. For details about message identity, see the "Message identity" section in Find queues and messages in queues in the Exchange Management Shell (https://technet.microsoft.com/library/aa998047.aspx).



```yaml
Type: MessageIdentity
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

The Server parameter specifies the name of the server to connect to by using the remote procedure call (RPC) that contains the queues that hold the messages that you want to remove. Enter the Server parameter as a host name or a fully qualified domain name (FQDN). If this parameter isn't used, the local server is queried.



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

### -WithNDR
The WithNDR parameter specifies whether a non-delivery report (NDR) is returned to the sender of a message. The default value is $true. This parameter can be used with both the Identity parameter and Filter parameter sets.

```yaml
Type: $true | $false
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

[Online Version](https://technet.microsoft.com/library/15d5987b-bedd-437e-b86a-6b0e80619fde.aspx)

