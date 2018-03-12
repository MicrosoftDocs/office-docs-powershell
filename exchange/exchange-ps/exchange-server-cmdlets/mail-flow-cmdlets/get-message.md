---
title: "Get-Message"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d6020f77-c852-46f6-b7c5-5ca6feae0fdf
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-Message

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-Message** cmdlet to view the details of one or more messages in queues on Mailbox servers or Edge Transport servers.
  
```
Get-Message [-Filter <String>] [-Server <ServerIdParameter>] <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays detailed information about all messages queued on the local server and received from any sender at the contoso.com domain.
  
```
Get-Message -Filter {FromAddress -like "*@contoso.com"} | Format-List
```

### Example 2

This example lists all messages queued on the local server, received from any sender at the contoso.com domain, and that have an SCL value greater than 3.
  
```
Get-Message -Filter {FromAddress -like "*@contoso.com" -and SCL -gt 3}
```

### Example 3

This example displays all messages queued on the server named Server01. The results are sorted first in ascending order by sender address and then in descending order of size.
  
```
Get-Message -Server Server01.contoso.com -SortOrder: +FromAddress,-Size
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can display messages by including the server name as part of the _Identity_ parameter or the _Queue_ parameter or by including the _Server_ parameter with a filter query. The _Identity_ parameter, _Queue_ parameter, and _Filter_ parameter settings are mutually exclusive.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BookmarkIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The _BookmarkIndex_ parameter specifies the position in the result set where the displayed results start. The value of this parameter is a 1-based index in the total result set. The _BookmarkIndex_ parameter can't be used with the _BookmarkObject_ parameter. <br/> |
| _BookmarkObject_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewer.ExtensibleMessageInfo  <br/> |The _BookmarkObject_ parameter specifies the object in the result set where the displayed results start. The _BookmarkObject_ parameter can't be used with the _BookmarkIndex_ parameter. <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The _Filter_ parameter specifies one or more messages by using OPath filter syntax. The OPath filter includes a message property name followed by a comparison operator and value, for example, `{FromAddress -like "*@contoso.com"}`. For details about filterable message properties and comparison operators, see [Properties of messages in queues](https://technet.microsoft.com/library/bb123714.aspx) and[https://technet.microsoft.com/library/aa998047.aspx](Find queues and messages in queues in the Exchange Management Shell).  <br/> You can specify multiple criteria by using the **and** comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks ("). <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewer.MessageIdentity  <br/> |The _Identity_ parameter specifies the message. Valid input for this parameter uses the syntax _Server_\ _Queue_\ _MessageInteger_ or _Queue_\ _MessageInteger_ or _MessageInteger_, for example,  `Mailbox01\contoso.com\5` or `10`. For details about message identity, see the "Message identity" section in [Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> |
| _IncludeBookmark_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IncludeBookmark_ parameter specifies whether to include the bookmark object when the query results are displayed. The _IncludeBookmark_ parameter is valid when it's used with the _BookmarkObject_ or _BookmarkIndex_ parameters. If you don't specify a value for the _IncludeBookmark_ parameter, the default value of `$true` is used. <br/> |
| _IncludeComponentLatencyInfo_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeComponentLatencyInfo_ switch specifies whether the information about component latency is included in the message properties. If you include this switch, the message objects returned will include latency measurements for each Transport component that has contributed to the local server latency for each queued message. <br/> |
| _IncludeRecipientInfo_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IncludeRecipientInfo_ switch specifies whether to display the message recipients in the **Recipients** field. If you don't include the _IncludeRecipientInfo_ switch, the **Recipients** field is blank. <br/>  Storing the results of a `Get-Message -IncludeRecipientInfo` command in a variable allows you to display additional properties for the message recipients. The following list describes the available recipient properties: <br/> **Address**: The email address of the recipient.  <br/> **Type**: The recipient type, which may be External, Mailbox, or Distribution Group. Distribution Group is used when the destination is an expansion server.  <br/> **FinalDestination**: The distinguished name (DN) of the object used to route the message.  <br/> **Status**: The recipient status may be  `Complete`,  `Ready`, or  `Retry`.  <br/> **LastError**: The SMTP response after the last delivery attempt or a localized error message if the message is placed in the unreachable queue.  <br/>  For example, to store the recipient information of a message in the contoso.com remote delivery queue that has the **MessageIdentity** value of `1234` to a variable named `$x`, use the following command:  `$x=Get-Message -Identity "contoso.com\1234" -IncludeRecipientInfo`.  <br/>  To display the extended recipient properties that are now stored in the `$x` variable, use the following command : `$x.Recipients`.  <br/> |
| _Queue_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewer.QueueIdentity  <br/> |The _Queue_ parameter specifies the identity of the queue that contains the messages that you want to display. Valid input for this parameter uses the syntax < _Server_>\< _Queue_> or < _Queue_>, for example,  `Mailbox01\contoso.com` or `Unreachable`. For details about queue identity, see the "Queue identity" section in [Use the Exchange Management Shell to Manage Queues](https://technet.microsoft.com/library/5433c1d3-ad2e-4f82-b50d-b67964b32f26.aspx).  <br/> If you use the _Queue_ parameter, you can't use the _Identity_, _Filter_ or _Server_ parameters. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _ReturnPageInfo_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ReturnPageInfo_ parameter is a hidden parameter. Use it to return information about the total number of results and the index of the first object of the current page. The default value is `$false`.  <br/> |
| _SearchForward_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SearchForward_ parameter specifies whether to search forward or backward in the result set. The default value is `$true`. This value causes the result page to be calculated forward from either the start of the result set or forward from a bookmark if specified.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can use the _Server_ parameter and the _Filter_ parameter in the same command. You can't use the _Server_ parameter and the _Identity_ parameter in the same command. <br/> |
| _SortOrder_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewerSortOrderEntry[]  <br/> |The _SortOrder_ parameter specifies an array of message properties used to control the sort order of the result set. Separate each property by using a comma. Prepend a plus sign (+) symbol to the beginning of the property name to display the results in ascending order. Prepend a minus sign (-) symbol to the beginning of the property name to display the results in descending order. <br/> If you don't specify a sort order, the result set is displayed in ascending order by **MessageIdentity** integer. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

