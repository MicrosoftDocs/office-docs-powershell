---
title: "Get-PublicFolderMoveRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2bcadd33-e520-498b-8551-9ef38d6d5f54
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-PublicFolderMoveRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-PublicFolderMoveRequest** cmdlet to view the detailed status of an ongoing public folder move that was initiated using the[New-PublicFolderMoveRequest](new-publicfoldermoverequest.md) cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderMoveRequest [-Identity <PublicFolderMoveRequestIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the status of an in-progress public folder move request with the identity \PublicFolderMove, which is the default name assigned to public folder moves.
  
```
Get-PublicFolderMoveRequest -Identity \PublicFolderMove
```

### Example 2

This example returns the status of in-progress and queued requests that are on the source database MBD01.
  
```
Get-PublicFolderMoveRequest -RequestQueue MBD01
```

## Detailed Description
<a name="DetailedDescription"> </a>

Public folder move requests are used to move public folders between public folder mailboxes. After the move request is complete, you need to update the hierarchy using the [Update-PublicFolderMailbox](../../exchange-server-cmdlets/sharing-and-collaboration-cmdlets/update-publicfoldermailbox.md) cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The _BatchName_ parameter specifies the name that was given to a batch public folder move request. <br/> You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HighPriority_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _HighPriority_ parameter filters the results based on the **Priority** value that was assigned when the request was created. Valid input for this parameter is `$true` or `$false`. Here's how these values filter the results:  <br/>  `$true` Returns requests that were created with the **Priority** value `High`,  `Higher`,  `Highest` or `Emergency`.  <br/>  `$false` Returns requests that were created with the **Priority** value `Normal`,  `Low`,  `Lower` or `Lowest`.  <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.PublicFolderMoveRequestIdParameter  <br/> | The _Identity_ parameter specifies the identity of the public folder move request. The default identity assigned to public folder move requests is `\PublicFolderMove`.  <br/>  This parameter can't be used in conjunction with the following parameters: <br/> _BatchName_ <br/> _HighPriority_ <br/> _Name_ <br/> _RequestQueue_ <br/> _Suspend_ <br/> _Status_ <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the public folder move request. If you didn't specify a name when creating the move request, `PublicFolderMove` will be the default name assigned to the request. <br/> You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _RequestQueue_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestStatus  <br/> | The _Status_ parameter filters the results based on status. You can use the following values: <br/>  `AutoSuspended` <br/>  `Completed` <br/>  `CompletedWithWarning` <br/>  `CompletionInProgress` <br/>  `Failed` <br/>  `InProgress` <br/>  `None` <br/>  `Queued` <br/>  `Suspended` <br/>  `Synced` <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Suspend_ parameter specifies whether to return requests that have been suspended. Valid input for this parameter is `$true` or `$false`.  <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

