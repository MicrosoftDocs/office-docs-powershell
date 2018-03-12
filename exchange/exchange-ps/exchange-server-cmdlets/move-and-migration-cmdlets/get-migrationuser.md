---
title: "Get-MigrationUser"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ca5cbd36-fde3-41f4-8ddf-0b7c4d71fd31
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MigrationUser

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MigrationUser** cmdlet to view information about move and migration users.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MigrationUser [-Identity <MigrationUserIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves status information about the recently migrated user, Tony Smith.
  
```
Get-MigrationUser -Identity TonySmith@contoso.com
```

### Example 2

This example retrieves more detailed information about any ongoing migration for the user with the specified mailbox GUID.
  
```
Get-MigrationUser -MailboxGuid b6a6795c-a010-4f67-aaaa-da372d56fcb9 | Get-MigrationUserStatistics
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _MailboxGuid_ <br/> |Required  <br/> |System.Guid  <br/> |The _MailboxGuid_ parameter specifies the GUID of a mailbox for which you want to view the migration information. <br/> |
| _BatchId_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Batch.MigrationBatchIdParameter  <br/> |The _BatchId_ parameter specifies the name of the migration batch for which you want to return users. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.User.MigrationUserIdParameter  <br/> |The _Identity_ parameter specifies the particular user that you want to retrieve information about. The _Identity_ parameter is represented as an email address. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationUserStatus  <br/> | The _Status_ parameter returns information about migration users that have the specified status state. Use one of the following values: <br/>  `Completed` <br/>  `CompletedWithWarnings` <br/>  `Completing` <br/>  `CompletionFailed` <br/>  `CompletionSynced` <br/>  `Corrupted` <br/>  `Failed` <br/>  `IncrementalFailed` <br/>  `IncrementalStopped` <br/>  `IncrementalSynced` <br/>  `IncrementalSyncing` <br/>  `Provisioning` <br/>  `ProvisionUpdating` <br/>  `Queued` <br/>  `Removing` <br/>  `Starting` <br/>  `Stopped` <br/>  `Stopping` <br/>  `Synced` <br/>  `Syncing` <br/>  `Validating` <br/> |
| _StatusSummary_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationUserStatusSummary  <br/> | The _StatusSummary_ parameter returns abbreviated information about migration users that have the specified status value. Use one of the following values: <br/>  `Active` <br/>  `Completed` <br/>  `Failed` <br/>  `Stopped` <br/>  `Synced` <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

