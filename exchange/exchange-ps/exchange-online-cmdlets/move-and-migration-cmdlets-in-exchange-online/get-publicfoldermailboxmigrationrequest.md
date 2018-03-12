---
title: "Get-PublicFolderMailboxMigrationRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 27e715ca-1b64-493b-8f78-24d29a7b6b0a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolderMailboxMigrationRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-PublicFolderMailboxMigrationRequest** cmdlet to view the status of individual jobs in public folder migration batches that were created by using the **New-MigrationBatch** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderMailboxMigrationRequest [-Identity <PublicFolderMailboxMigrationRequestIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns information about all migration requests.
  
```
Get-PublicFolderMailboxMigrationRequest
```

### Example 2

In on-premises Exchange, this example returns all migration requests that have a priority value of  `High`,  `Higher`,  `Highest` or `Emergency`.
  
```
Get-PublicFolderMailboxMigrationRequest -HighPriority $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-PublicFolderMailboxMigrationRequest** cmdlet displays the following properties by default.
  
-  `Name`: The name assigned by the system to a specific mailbox migration job.
    
-  `TargetMailbox`: The mailbox being migrated.
    
-  `Status`: The current status of the job.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The  _BatchName_ parameter filters the results by the friendly **BatchName** value that was assigned when the batch job was created. The format of this value is: `MigrationService:<Batch name provided at batch creation>`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HighPriority_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _HighPriority_ parameter filters the results based on the **Priority** value that was assigned when the request was created. Valid input for this parameter is `$true` or `$false`. Here's how these values filter the results:  <br/>  `$true` Returns requests that were created with the **Priority** value `High`,  `Higher`,  `Highest` or `Emergency`.  <br/>  `$false` Returns requests that were created with the **Priority** value `Normal`,  `Low`,  `Lower` or `Lowest`.  <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.PublicFolderMailboxMigrationRequestIdParameter  <br/> | The _Identity_ parameter specifies the public folder mailbox migration request that you want to view. The value uses the syntax: `\PublicFolderMailboxMigration<GUID>` (for example, `\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e`).  <br/>  You can't use this parameter with the following parameters: <br/>  _BatchName_ <br/>  _HighPriority_ <br/>  _Name_ <br/>  _RequestQueue_ <br/>  _Suspend_ <br/>  _Status_ <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the public folder mailbox migration request. If the name was not specified at creation, the default value is `PublicFolderMailboxMigration<GUID>` (for example, `PublicFolderMailboxMigration2ffdef13-01b9-4586-af2b-d5a5482010a8`).  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
| _RequestQueue_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestStatus  <br/> | The _Status_ parameter filters the results based on status. You can use the following values: <br/>  `AutoSuspended` <br/>  `Completed` <br/>  `CompletedWithWarning` <br/>  `CompletionInProgress` <br/>  `Failed` <br/>  `InProgress` <br/>  `None` <br/>  `Queued` <br/>  `Suspended` <br/>  `Synced` <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Suspend_ parameter specifies whether to return requests that have been suspended. Valid input for this parameter is `$true` or `$false`.  <br/> You can't use this parameter with the  _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

