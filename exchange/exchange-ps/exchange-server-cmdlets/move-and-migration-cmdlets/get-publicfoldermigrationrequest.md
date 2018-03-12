---
title: "Get-PublicFolderMigrationRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: df474db6-7408-4aac-b703-424c9f36560e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolderMigrationRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-PublicFolderMigrationRequest** cmdlet to view the detailed status of on-going public folder migration requests that were initiated by using the **New-PublicFolderMigrationRequest** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderMigrationRequest [-Identity <PublicFolderMigrationRequestIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the status of in-progress migration requests.
  
```
Get-PublicFolderMigrationRequest
```

### Example 2

This example returns all migration requests that have the name PFMigrate10_11_12, and the request has been suspended.
  
```
Get-PublicFolderMigrationRequest -Identity "PFMigrate10_11_12" | Format-List Suspended,AutoSuspended
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The _BatchName_ parameter specifies the name that was given to a batch migration request. <br/> You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _HighPriority_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _HighPriority_ parameter filters the results based on the **Priority** value that was assigned when the request was created. Valid input for this parameter is `$true` or `$false`. Here's how these values filter the results:  <br/>  `$true` Returns requests that were created with the **Priority** value `High`,  `Higher`,  `Highest` or `Emergency`.  <br/>  `$false` Returns requests that were created with the **Priority** value `Normal`,  `Low`,  `Lower` or `Lowest`.  <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.PublicFolderMigrationRequestIdParameter  <br/> | The _Identity_ parameter specifies the identity of the public folder. You can use the following values: <br/>  GUID <br/>  Name <br/>  You can't use this parameter in conjunction with the following parameters: <br/> _BatchName_ <br/> _RequestQueue_ <br/> _Status_ <br/> _Suspend_ <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the public folder migration request. <br/> |
| _RequestQueue_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RequestStatus  <br/> | The _Status_ parameter filters the results based on status. You can use the following values: <br/>  `AutoSuspended` <br/>  `Completed` <br/>  `CompletedWithWarning` <br/>  `CompletionInProgress` <br/>  `Failed` <br/>  `InProgress` <br/>  `None` <br/>  `Queued` <br/>  `Suspended` <br/>  `Synced` <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Suspend_ parameter specifies whether to return requests that have been suspended. Valid input for this parameter is `$true` or `$false`.  <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

