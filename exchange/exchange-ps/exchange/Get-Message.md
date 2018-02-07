---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-Message

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-Message cmdlet to view the details of one or more messages in a queue on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-Message cmdlet to view the details of one or more messages in queues on Mailbox servers or Edge Transport servers.

## SYNTAX

### Set2
```
Get-Message [[-Identity] <MessageIdentity>] [-BookmarkIndex <Int32>] [-BookmarkObject <ExtensibleMessageInfo>]
 [-IncludeBookmark <$true | $false>] [-IncludeComponentLatencyInfo] [-IncludeRecipientInfo]
 [-ResultSize <Unlimited>] [-ReturnPageInfo <$true | $false>] [-SearchForward <$true | $false>]
 [-SortOrder <QueueViewerSortOrderEntry[]>] [<CommonParameters>]
```

### Set1
```
Get-Message [-BookmarkIndex <Int32>] [-BookmarkObject <ExtensibleMessageInfo>] [-Filter <String>]
 [-IncludeBookmark <$true | $false>] [-IncludeComponentLatencyInfo] [-IncludeRecipientInfo]
 [-ResultSize <Unlimited>] [-ReturnPageInfo <$true | $false>] [-SearchForward <$true | $false>]
 [-Server <ServerIdParameter>] [-SortOrder <QueueViewerSortOrderEntry[]>] [<CommonParameters>]
```

### Set3
```
Get-Message [-BookmarkIndex <Int32>] [-BookmarkObject <ExtensibleMessageInfo>]
 [-IncludeBookmark <$true | $false>] [-IncludeComponentLatencyInfo] [-IncludeRecipientInfo]
 [-Queue <QueueIdentity>] [-ResultSize <Unlimited>] [-ReturnPageInfo <$true | $false>]
 [-SearchForward <$true | $false>] [-SortOrder <QueueViewerSortOrderEntry[]>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can display messages by including the server name as part of the Identity parameter or the Queue parameter or by including the Server parameter with a filter query. The Identity parameter, Queue parameter, and Filter parameter settings are mutually exclusive.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Queues" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You can display messages by including the server name as part of the Identity parameter or the Queue parameter or by including the Server parameter with a filter query. The Identity parameter, Queue parameter, and Filter parameter settings are mutually exclusive.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Queues" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You can display messages by including the server name as part of the Identity parameter or the Queue parameter or by including the Server parameter with a filter query. The Identity parameter, Queue parameter, and Filter parameter settings are mutually exclusive.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-Message -Filter {FromAddress -like "*@contoso.com"} | Format-List
```

This example displays detailed information about all messages queued on the local server and received from any sender at the contoso.com domain.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-Message -Filter {FromAddress -like "*@contoso.com"} | Format-List
```

This example displays detailed information about all messages queued on the local server and received from any sender at the contoso.com domain.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-Message -Filter {FromAddress -like "*@contoso.com"} | Format-List
```

This example displays detailed information about all messages queued on the local server and received from any sender at the contoso.com domain.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-Message -Filter {FromAddress -like "*@contoso.com" -and SCL -gt 3}
```

This example lists all messages queued on the local server, received from any sender at the contoso.com domain, and that have an SCL value greater than 3.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-Message -Filter {FromAddress -like "*@contoso.com" -and SCL -gt 3}
```

This example lists all messages queued on the local server, received from any sender at the contoso.com domain, and that have an SCL value greater than 3.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-Message -Filter {FromAddress -like "*@contoso.com" -and SCL -gt 3}
```

This example lists all messages queued on the local server, received from any sender at the contoso.com domain, and that have an SCL value greater than 3.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-Message -Server Server1.contoso.com -SortOrder: +FromAddress,-Size
```

This example displays all messages queued on the server Server1. The results are sorted first in ascending order by sender address and then in descending order of size.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-Message -Server Server01.contoso.com -SortOrder: +FromAddress,-Size
```

This example displays all messages queued on the server named Server01. The results are sorted first in ascending order by sender address and then in descending order of size.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-Message -Server Server01.contoso.com -SortOrder: +FromAddress,-Size
```

This example displays all messages queued on the server named Server01. The results are sorted first in ascending order by sender address and then in descending order of size.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the MessageIdentity integer. This is an integer that represents a particular message and an optional server and queue identity. The syntax for this parameter can be specified as follows:

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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookmarkIndex
The BookmarkIndex parameter specifies the position in the result set where the displayed results start. The value of this parameter is a 1-based index in the total result set. The BookmarkIndex parameter can't be used with the BookmarkObject parameter.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookmarkObject
The BookmarkObject parameter specifies the object in the result set where the displayed results start. The BookmarkObject parameter can't be used with the BookmarkIndex parameter.

```yaml
Type: ExtensibleMessageInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
!!! Exchange Server 2010

The Filter parameter requires an expression that specifies the property value criteria for the messages that you want to display. The expression includes a property name followed by a comparison operator and value. The following message properties are valid criteria for the Filter parameter:

- DateReceived The date that the message was received.

- ExpirationTime The time that a message will expire.

- FromAddress The SMTP address of the sender of a message. This value is taken from the MAIL FROM header field in the message envelope.

- Identity An integer that represents a particular message and an optional server and queue identity.

- InternetMessageId The value of the Message-ID header field. This property is expressed as a GUID followed by the SMTP address of the sending server, as in this example: 67D7543D6103DC4FBEBA6BC7205DACABA61231@exchange.contoso.com.

- LastError A text string of the last error recorded for a message.

- MessageSourceName A text string of the name of the component that submitted this message to the queue.

- Queue The identity of the queue that holds the message. Enter the queue identity in the form of Server\\destination, where destination is a remote domain, Mailbox server, or persistent queue name.

- RetryCount The number of times that delivery of a message to a destination was tried.

- SCL The spam confidence level (SCL) of the message. Valid SCL entries are integers from 0 through 9. An empty SCL property value indicates that the message hasn't been processed by the Content Filter agent.

- Size The size of a message.

- SourceIP The IP address of the external server that submitted the message to the Exchange organization.

- Status The current message status. Message status options are Active, Retry, Suspended, PendingSuspend, or PendingRemove.

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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeBookmark
The IncludeBookmark parameter specifies whether to include the bookmark object when the query results are displayed. The IncludeBookmark parameter is valid when it's used with the BookmarkObject or BookmarkIndex parameters. If you don't specify a value for the IncludeBookmark parameter, the default value of $true is used.

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

### -IncludeComponentLatencyInfo
The IncludeComponentLatencyInfo switch specifies whether the information about component latency is included in the message properties. If you include this switch, the message objects returned will include latency measurements for each Transport component that has contributed to the local server latency for each queued message.

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

### -IncludeRecipientInfo
!!! Exchange Server 2010

The IncludeRecipientInfo parameter specifies whether to display the message recipients in the Recipients field. If you don't include the IncludeRecipientInfo parameter, the Recipients field is blank.

Storing the results of a Get-Message -IncludeRecipientInfo command in a variable allows you to display additional properties for the message recipients. The following list describes the available recipient properties:

- Address The e-mail address of the recipient.

- Type The recipient type, which may be External, Mailbox, or Distribution Group. Distribution Group is used when the destination is an expansion server.

- FinalDestination The distinguished name (DN) of the object used to route the message. The object could be a connector, a Mailbox server, or an expansion server.

- Status The recipient status may be Complete, Ready, or Retry.

- LastError The SMTP response after the last delivery attempt or a localized error message if the message is placed in the unreachable queue.

For example, to store the recipient information of a message in the Contoso.com remote delivery queue that has the MessageIdentity value of 1234 to a variable named $x, use the following command: $x=Get-Message -Identity "Contoso.com\\1234" -IncludeRecipientInfo

To display the extended recipient properties that are now stored in the $x variable, use the following command: $x.Recipients



!!! Exchange Server 2013

The IncludeRecipientInfo switch specifies whether to display the message recipients in the Recipients field. If you don't include the IncludeRecipientInfo switch, the Recipients field is blank.

Storing the results of a Get-Message -IncludeRecipientInfo command in a variable allows you to display additional properties for the message recipients. The following list describes the available recipient properties:

- Address: The email address of the recipient.

- Type: The recipient type, which may be External, Mailbox, or Distribution Group. Distribution Group is used when the destination is an expansion server.

- FinalDestination: The distinguished name (DN) of the object used to route the message.

- Status: The recipient status may be Complete, Ready, or Retry.

- LastError: The SMTP response after the last delivery attempt or a localized error message if the message is placed in the unreachable queue.

For example, to store the recipient information of a message in the contoso.com remote delivery queue that has the MessageIdentity value of 1234 to a variable named $x, use the following command: $x=Get-Message -Identity "contoso.com\\1234" -IncludeRecipientInfo

To display the extended recipient properties that are now stored in the $x variable, use the following command: $x.Recipients



!!! Exchange Server 2016

The IncludeRecipientInfo switch specifies whether to display the message recipients in the Recipients field. If you don't include the IncludeRecipientInfo switch, the Recipients field is blank.

Storing the results of a Get-Message -IncludeRecipientInfo command in a variable allows you to display additional properties for the message recipients. The following list describes the available recipient properties:

- Address: The email address of the recipient.

- Type: The recipient type, which may be External, Mailbox, or Distribution Group. Distribution Group is used when the destination is an expansion server.

- FinalDestination: The distinguished name (DN) of the object used to route the message.

- Status: The recipient status may be Complete, Ready, or Retry.

- LastError: The SMTP response after the last delivery attempt or a localized error message if the message is placed in the unreachable queue.

For example, to store the recipient information of a message in the contoso.com remote delivery queue that has the MessageIdentity value of 1234 to a variable named $x, use the following command: $x=Get-Message -Identity "contoso.com\\1234" -IncludeRecipientInfo.

To display the extended recipient properties that are now stored in the $x variable, use the following command : $x.Recipients.



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

### -Queue
!!! Exchange Server 2010

The Queue parameter specifies the identity of the queue that contains the messages that you want to display. Enter the queue identity in the form of Server\\destination, where destination is a remote domain, Mailbox server, or persistent queue name.



!!! Exchange Server 2013

The Queue parameter specifies the identity of the queue that contains the messages that you want to display. Valid input for this parameter uses the syntax \<Server\>\\\<Queue\> or \<Queue\>, for example, Mailbox01\\contoso.com or Unreachable. For details about queue identity, see the "Queue identity" section in Use the Exchange Management Shell to manage queues.

If you use the Queue parameter, you can't use the Identity, Filter or Server parameters.



!!! Exchange Server 2016

The Queue parameter specifies the identity of the queue that contains the messages that you want to display. Valid input for this parameter uses the syntax \<Server\>\\\<Queue\> or \<Queue\>, for example, Mailbox01\\contoso.com or Unreachable. For details about queue identity, see the "Queue identity" section in Find queues and messages in queues in the Exchange Management Shell.

If you use the Queue parameter, you can't use the Identity, Filter or Server parameters.



```yaml
Type: QueueIdentity
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ResultSize
!!! Exchange Server 2010

The ResultSize parameter specifies the total number of items to display in the result set. The default ResultSize parameter value is set to 1000. The ResultSize parameter supports an unlimited number of results, but Exchange limits the result set to 250,000.



!!! Exchange Server 2013, Exchange Server 2016

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReturnPageInfo
The ReturnPageInfo parameter is a hidden parameter. Use it to return information about the total number of results and the index of the first object of the current page. The default value is $false.

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

### -SearchForward
The SearchForward parameter specifies whether to search forward or backward in the result set. The default value is $true. This value causes the result page to be calculated forward from either the start of the result set or forward from a bookmark if specified.

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

### -Server
!!! Exchange Server 2010

The Server parameter specifies the name of the server to connect to by using the remote procedure call (RPC) that contains the queues that hold the messages that you want to display. Enter the Server parameter as a host name or a fully qualified domain name (FQDN). If this parameter isn't used, the local server is queried.



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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SortOrder
!!! Exchange Server 2010

The SortOrder parameter specifies an array of message properties used to control the sort order of the result set. Separate each property by using a comma. Prepend a plus sign (+) symbol to the beginning of the property name to display the results in ascending order. Prepend a minus sign (-) symbol to the beginning of the property name to display the results in descending order. If you don't specify a sort order, the result set is displayed in ascending order by MessageIdentity integer.



!!! Exchange Server 2013, Exchange Server 2016

The SortOrder parameter specifies an array of message properties used to control the sort order of the result set. Separate each property by using a comma. Prepend a plus sign (+) symbol to the beginning of the property name to display the results in ascending order. Prepend a minus sign (-) symbol to the beginning of the property name to display the results in descending order.

If you don't specify a sort order, the result set is displayed in ascending order by MessageIdentity integer.



```yaml
Type: QueueViewerSortOrderEntry[]
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

[Online Version](https://technet.microsoft.com/library/d6020f77-c852-46f6-b7c5-5ca6feae0fdf.aspx)

