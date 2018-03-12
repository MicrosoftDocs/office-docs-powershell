---
title: "Get-Queue"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: df73c45e-3797-4da5-95e3-8478f48d06c1
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-Queue

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-Queue** cmdlet to view configuration information for queues on Mailbox servers or Edge Transport servers.
  
```
Get-Queue [-Filter <String>] [-Server <ServerIdParameter>] <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays detailed information for all queues on the Mailbox server on which the command is run.
  
```
Get-Queue | Format-List
```

### Example 2

This example lists the queues that contain more than 100 messages.
  
```
Get-Queue -Filter {MessageCount -gt 100}
```

### Example 3

This example displays detailed information for a specific queue that exists on the Mailbox server named Server1.
  
```
Get-Queue Server1\contoso.com | Format-List
```

### Example 4

This example lists only the external queues.
  
```
Get-Queue -Exclude Internal
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BookmarkIndex_ <br/> |Optional  <br/> |System.Int32  <br/> |The _BookmarkIndex_ parameter specifies the position in the result set where the displayed results start. The value of this parameter is a 1-based index in the total result set. The _BookmarkIndex_ parameter can't be used with the _BookmarkObject_ parameter. <br/> |
| _BookmarkObject_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewer.ExtensibleQueueInfo  <br/> |The _BookmarkObject_ parameter specifies the object in the result set where the displayed results start. The _BookmarkObject_ parameter can't be used with the _BookmarkIndex_ parameter. <br/> |
| _Exclude_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewerIncludesAndExcludes  <br/> | The _Exclude_ parameter specifies the types of queues you want to exclude from the results. Valid values for this parameter are: <br/>  Internal <br/>  External <br/>  A valid queue `DeliveryType` value. For details, see the NextHopSolutionKey section in[Queues](https://technet.microsoft.com/library/e7ad0ba5-3789-4a2b-9825-6bb1b321609c.aspx).  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The _Filter_ parameter specifies one or more queues by using OPath filter syntax. The OPath filter includes a queue property name followed by a comparison operator and value, for example, `{NextHopDomain -eq "contoso.com"}`. For details about filterable queue properties and comparison operators, see [Queue properties](https://technet.microsoft.com/library/bb125237.aspx) and[Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> You can specify multiple criteria by using the **and** comparison operator. Property values that aren't expressed as an integer must be enclosed in quotation marks ("). <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewer.QueueIdentity  <br/> |The _Identity_ parameter specifies the queue. Valid input for this parameter uses the syntax _Server_\ _Queue_ or _Queue_, for example,  `Mailbox01\contoso.com` or `Unreachable`. For details about queue identity, see the "Queue identity" section in [Find queues and messages in queues in the Exchange Management Shell](https://technet.microsoft.com/library/aa998047.aspx).  <br/> |
| _Include_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewerIncludesAndExcludes  <br/> | The _Include_ parameter specifies the types of queues you want to include the results. Valid values for this parameter are: <br/>  Internal <br/>  External <br/>  A valid queue `DeliveryType` value. For details, see the NextHopSolutionKey section in[Queues](https://technet.microsoft.com/library/e7ad0ba5-3789-4a2b-9825-6bb1b321609c.aspx).  <br/> |
| _IncludeBookmark_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IncludeBookmark_ parameter specifies whether to include the bookmark object when the query results are displayed. The _IncludeBookmark_ parameter is valid when it's used with the _BookmarkObject_ or _BookmarkIndex_ parameters. If you don't specify a value for the _IncludeBookmark_ parameter, the default value of `$true` is used. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _ReturnPageInfo_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ReturnPageInfo_ parameter is a hidden parameter. Use it to return information about the total number of results and the index of the first object of the current page. The default value is `$false`.  <br/> |
| _SearchForward_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _SearchForward_ parameter specifies whether to search forward or backward in the result set. The default value is `$true`. This value causes the result page to be calculated forward from either the start of the result set or forward from a bookmark if specified.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/>  You can use the _Server_ parameter and the _Filter_ parameter in the same command. You can't use the _Server_ parameter and the _Identity_ parameter in the same command. <br/> |
| _SortOrder_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.QueueViewerSortOrderEntry[]  <br/> |The _SortOrder_ parameter specifies an array of message properties used to control the sort order of the result set. Separate each property by using a comma. Prepend a plus sign (+) symbol to the beginning of the property name to display the results in ascending order. Prepend a minus sign (-) symbol to the beginning of the property name to display the results in descending order. <br/> If you don't specify a sort order, the result set is displayed in ascending order by **QueueIdentity**. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

