---
title: "Get-PublicFolderMailboxMigrationRequestStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0c34d326-5a8c-426e-bbb6-eab477f2aab7
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-PublicFolderMailboxMigrationRequestStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-PublicFolderMailboxMigrationRequestStatistics** cmdlet to view the detailed status of individual jobs in a public folder migration batch created using **New-MigrationBatch** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PublicFolderMailboxMigrationRequestStatistics -Identity <PublicFolderMailboxMigrationRequestIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uses the _Identity_ parameter to return information about the specified target job.
  
```
Get-PublicFolderMailboxMigrationRequestStatistics -Identity \PublicFolderMailboxMigration4ce124b0-d760-4364-94bc-40d7918fd171
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-PublicFolderMailboxMigrationRequestStatistics** cmdlet displays the following properties by default.
  
-  `Name`: The name assigned by the system to a specific mailbox migration job.
    
-  `StatusDetail`: The current status of the job.
    
-  `TargetMailbox`: The mailbox being migrated.
    
-  `PercentComplete`: The percentage of job completion.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.PublicFolderMailboxMigrationRequestIdParameter  <br/> |The _Identity_ parameter specifies the public folder mailbox migration request. The default identity value is `\PublicFolderMailboxMigration<UniqueIdentifier>` (for example, `\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e`).  <br/> You can't use this parameter with the _RequestQueue_ and _RequestGuid_ parameters. <br/> |
| _RequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestQueue_ parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example: <br/>  Database GUID <br/>  Database name <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _ReportOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReportOnly_ switch returns the results as an array of report entries. You don't need to specify a value with this switch. <br/> |
| _RequestGuid_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RequestGuid_ parameter specifies the unique **RequestGuid** identifier of the request that you want to remove. To find the **RequestGuid** value, use the **Get-PublicFolderMailboxMigrationRequest** cmdlet. <br/> If you use this parameter, you also need to use the _RequestQueue_ parameter. You can't use either of these parameters with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

