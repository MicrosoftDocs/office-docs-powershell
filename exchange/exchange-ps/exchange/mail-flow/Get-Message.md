---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-Message
schema: 2.0.0
---

# Get-Message

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-Message cmdlet to view the details of one or more messages in queues on Mailbox servers or Edge Transport servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

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
You can display messages by including the server name as part of the Identity parameter or the Queue parameter or by including the Server parameter with a filter query. The Identity parameter, Queue parameter, and Filter parameter settings are mutually exclusive.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-Message -Filter {FromAddress -like "*@contoso.com"} | Format-List
```

This example displays detailed information about all messages queued on the local server and received from any sender at the contoso.com domain.

### Example 2
```
Get-Message -Filter {FromAddress -like "*@contoso.com" -and SCL -gt 3}
```

This example lists all messages queued on the local server, received from any sender at the contoso.com domain and that have an SCL value greater than 3.

### Example 3
```
Get-Message -Server Server01.contoso.com -SortOrder: +FromAddress,-Size
```

This example displays all messages queued on the server named Server01. The results are sorted first in ascending order by sender address and then in descending order of size.

## PARAMETERS

### -Identity
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
The IncludeRecipientInfo switch specifies whether to display the message recipients in the Recipients field. If you don't include the IncludeRecipientInfo switch, the Recipients field is blank.

Storing the results of a Get-Message -IncludeRecipientInfo command in a variable allows you to display additional properties for the message recipients. The following list describes the available recipient properties:

- Address: The email address of the recipient.

- Type: The recipient type, which may be External, Mailbox or Distribution Group. Distribution Group is used when the destination is an expansion server.

- FinalDestination: The distinguished name (DN) of the object used to route the message.

- Status: The recipient status may be Complete, Ready or Retry.

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
