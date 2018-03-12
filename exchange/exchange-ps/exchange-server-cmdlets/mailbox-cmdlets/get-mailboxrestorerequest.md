---
title: "Get-MailboxRestoreRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 11/6/2017
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6e2a5296-7820-4266-a96f-609588390a18
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxRestoreRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-MailboxRestoreRequest** cmdlet to view detailed status of an ongoing restore request that was initiated by using the **New-MailboxRestoreRequest** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxRestoreRequest [-AccountPartition <AccountPartitionIdParameter>] [-Identity <MailboxRestoreRequestIdParameter>] [-Organization <OrganizationIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the status of the in-progress and queued restore request with the identity ayla\MailboxRestore.
  
```
Get-MailboxRestoreRequest -Identity "ayla\MailboxRestore"
```

### Example 2

This example returns the status of in-progress and queued restore requests that are being restored to the mailbox database MBD01.
  
```
Get-MailboxRestoreRequest -RequestQueue MBD01
```

### Example 3

This example returns all restore requests that have the name RestoreToMBD01 where the restore request has been suspended.
  
```
Get-MailboxRestoreRequest -Name "RestoreToMBD01" -Suspend $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccountPartition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AccountPartitionIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The _BatchName_ parameter specifies the name given to a batch of restore requests. <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HighPriority_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _HighPriority_ parameter filters the results based on the **Priority** value that was assigned when the request was created. Valid input for this parameter is `$true` or `$false`. Here's how these values filter the results:  <br/>  `$true` Returns requests that were created with the **Priority** value `High`,  `Higher`,  `Highest` or `Emergency`.  <br/>  `$false` Returns requests that were created with the **Priority** value `Normal`,  `Low`,  `Lower` or `Lowest`.  <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.MailboxRestoreRequestIdParameter  <br/> |The _Identity_ parameter specifies the identity of the restore request. The _Identity_ parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: < _alias_>\< _name_>.  <br/> If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestore _X_ (where _X_ = 1-9). <br/> You can't use this parameter with the _Name_ parameter. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies that any restore request that has the specified name is returned. <br/> Use this parameter to search on the name you provided when you created the restore request.  <br/> If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestore _X_ (where _X_ = 1-9). <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _Organization_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RequestQueue_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SourceDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _SourceDatabase_ parameter specifies that the cmdlet should only return restore requests for mailboxes that are being restored from the specified source database. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestStatus  <br/> | The _Status_ parameter filters the results based on status. You can use the following values: <br/>  `AutoSuspended` <br/>  `Completed` <br/>  `CompletedWithWarning` <br/>  `CompletionInProgress` <br/>  `Failed` <br/>  `InProgress` <br/>  `None` <br/>  `Queued` <br/>  `Suspended` <br/>  `Synced` <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Suspend_ parameter specifies whether to return requests that have been suspended. Valid input for this parameter is `$true` or `$false`.  <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _TargetMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxLocationIdParameter  <br/> | The _TargetMailbox_ parameter specifies the identity of the target mailbox. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

