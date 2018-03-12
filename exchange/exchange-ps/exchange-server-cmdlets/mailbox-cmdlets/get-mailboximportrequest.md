---
title: "Get-MailboxImportRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 7/12/2017
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7ee34d59-190e-45b4-80be-4479b1935ae4

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxImportRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxImportRequest** cmdlet to view the detailed status of an ongoing import request that was initiated using the **New-MailboxImportRequest** cmdlet.
  
> [!NOTE]
> This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in [Manage role groups](https://technet.microsoft.com/library/jj657480.aspx). 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxImportRequest [-Identity <MailboxImportRequestIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the default information regarding the status of the ongoing import request with the identity tony\Recovered. The type of information returned by default includes name, mailbox, and status.
  
```
Get-MailboxImportRequest -Identity "tony\Recovered"
```

### Example 2

This example returns the status of import requests in the ImportingDB1PSTs batch that completed.
  
```
Get-MailboxImportRequest -BatchName "ImportingDB1PSTs" -Status Completed
```

### Example 3

This example returns all import requests that have the name Recovered where the import has been suspended.
  
```
Get-MailboxImportRequest -Name "Recovered" -Suspend $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The search criteria for the **Get-MailboxImportRequest** cmdlet is a Boolean **And** statement. If you use multiple parameters, you narrow your search and reduce your search results.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The _BatchName_ parameter specifies the name given to a batch import request. <br/> You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HighPriority_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _HighPriority_ parameter filters the results based on the **Priority** value that was assigned when the request was created. Valid input for this parameter is `$true` or `$false`. Here's how these values filter the results:  <br/>  `$true` Returns requests that were created with the **Priority** value `High`,  `Higher`,  `Highest` or `Emergency`.  <br/>  `$false` Returns requests that were created with the **Priority** value `Normal`,  `Low`,  `Lower` or `Lowest`.  <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxImportRequestIdParameter  <br/> | The _Identity_ parameter specifies the identity of the import request. By default, import requests are named < _alias_>\MailboxImport _X_ (where _X_ = 0-9). If you specify a name for the import request, use the following syntax: < _alias_>\< _name_>. Microsoft Exchange automatically precedes the request with the mailbox's alias.  <br/>  You can't use this parameter with the following parameters: <br/> _BatchName_ <br/> _Mailbox_ <br/> _Name_ <br/> _Status_ <br/> _Suspend_ <br/> _HighPriority_ <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxLocationIdParameter  <br/> | The _Mailbox_ parameter specifies the identity of the mailbox or mail user into which content is being imported. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies that import requests that have the specified name are returned. <br/> Use this parameter to search on the name that you provided when you created the import request. If you didn't specify a name when the request was created, the default name is MailboxImport _X_ (where _X_ = 0-9). <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _RequestQueue_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestStatus  <br/> | The _Status_ parameter filters the results based on status. You can use the following values: <br/>  `AutoSuspended` <br/>  `Completed` <br/>  `CompletedWithWarning` <br/>  `CompletionInProgress` <br/>  `Failed` <br/>  `InProgress` <br/>  `None` <br/>  `Queued` <br/>  `Suspended` <br/>  `Synced` <br/>  You can't use this parameter with the _Identity_ parameter. <br/> > [!NOTE]>  `CompletionInProgress` and `AutoSuspended` don't apply to import requests and won't return any information.          |
| _Suspend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Suspend_ parameter specifies whether to return requests that have been suspended. Valid input for this parameter is `$true` or `$false`.  <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

