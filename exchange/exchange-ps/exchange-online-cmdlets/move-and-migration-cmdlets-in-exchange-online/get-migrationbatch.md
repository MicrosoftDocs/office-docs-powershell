---
title: "Get-MigrationBatch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3a4d27c4-712b-40e8-b5a8-a4f1b8e5a3c6
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MigrationBatch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MigrationBatch** cmdlet to retrieve status information about the current migration batch.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MigrationBatch [-Identity <MigrationBatchIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays status information for the migration batch LocalMove2.
  
```
Get-MigrationBatch -Identity LocalMove2
```

### Example 2

This example displays information about all migration batches associated with the migration endpoint exsrv1.contoso.com.
  
```
Get-MigrationBatch -Endpoint exsrv1.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-MigrationBatch** cmdlet displays status information about the current migration batch. This information includes the following information:
  
- Status of the migration batch
    
- Total number of mailboxes being migrated
    
- Number of successfully completed migrations
    
- Migration errors
    
- Date and time when the migration was started
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The  _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Endpoint_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> |The  _Endpoint_ parameter returns a list of migration batches associated with the specified migration endpoint. <br/> If you use this parameter, you can't include the  _Identity_ parameter. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Batch.MigrationBatchIdParameter  <br/> |The  _Identity_ parameter identifies the name of the current migration batch. The value for this parameter is specified by the _Name_ parameter of the **New-MigrationBatch** cmdlet. <br/> If you use this parameter, you can't include the  _Endpoint_ parameter. <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeReport_ parameter returns additional information about the specified migration batch. This information is displayed in the **Report** field. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Status_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationBatchStatus  <br/> | The _Status_ parameter returns a list of migration batches that have the specified status state. Use one of the following values: <br/>  `Completed` <br/>  `CompletedWithErrors` <br/>  `Completing` <br/>  `Corrupted` <br/>  `Created` <br/>  `Failed` <br/>  `IncrementalSyncing` <br/>  `Removing` <br/>  `Starting` <br/>  `Stopped` <br/>  `Syncing` <br/>  `Stopping` <br/>  `Synced` <br/>  `SyncedwithErrors` <br/>  `Waiting` <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

