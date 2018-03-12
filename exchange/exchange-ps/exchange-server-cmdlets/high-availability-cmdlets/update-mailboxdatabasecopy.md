---
title: "Update-MailboxDatabaseCopy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 37ebb66a-382e-4fd9-81f8-795f776a87b1
description: "This cmdlet is available only in on-premises Exchange."
---

# Update-MailboxDatabaseCopy

This cmdlet is available only in on-premises Exchange. 
  
Use the **Update-MailboxDatabaseCopy** cmdlet to seed or reseed a mailbox database copy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-MailboxDatabaseCopy -Identity <DatabaseCopyIdParameter> [-BeginSeed <SwitchParameter>] [-CatalogOnly <SwitchParameter>] [-DatabaseOnly <SwitchParameter>] [-DeleteExistingFiles <SwitchParameter>] [-Force <SwitchParameter>] [-ManualResume <SwitchParameter>] [-Network <DatabaseAvailabilityGroupNetworkIdParameter>] [-NetworkCompressionOverride <UseDagDefault | Off | On>] [-NetworkEncryptionOverride <UseDagDefault | Off | On>] [-NoThrottle <SwitchParameter>] [-PrimaryDatabasePartitionOnly <SwitchParameter>] [-SafeDeleteExistingFiles <SwitchParameter>] [-SecondaryDatabasePartitionOnly <SwitchParameter>] [-SourceServer <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example seeds a copy of the database DB1 on the Mailbox server MBX1.
  
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1
```

### Example 2

This example seeds a copy of the database DB1 on the Mailbox server MBX1 using MBX2 as the source Mailbox server for the seed.
  
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1 -SourceServer MBX2
```

### Example 3

This example seeds a copy of the database DB1 on the Mailbox server MBX1 without seeding the content index catalog.
  
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1 -DatabaseOnly
```

### Example 4

This example seeds the content index catalog for the copy of the database DB1 on the Mailbox server MBX1 without seeding the database file. The content index catalog seeding occurs over the MAPI network.
  
```
Update-MailboxDatabaseCopy -Identity DB1\MBX1 -CatalogOnly
```

### Example 5

This example performs a full server reseed of all of the databases on the Mailbox server MBX1.
  
```
Update-MailboxDatabaseCopy -Server MBX1
```

## Detailed Description
<a name="DetailedDescription"> </a>

Seeding is the process in which a copy of a mailbox database is added to another Mailbox server. This becomes the database copy into which copied log files and data are replayed.
  
The **Update-MailboxDatabaseCopy** cmdlet can also be used to seed a content index catalog for a mailbox database copy. When you do this, the MAPI network is used, regardless of the value you specify with the _Network_ parameter.
  
You must suspend a database copy before you can update it using the **Update-MailboxDatabaseCopy** cmdlet. For detailed steps about how to suspend a database copy, see[Suspend or Resume a Mailbox Database Copy](https://technet.microsoft.com/library/96aa1b82-3e15-4215-843e-3d583af9504b.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CancelSeed_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _CancelSeed_ switch specifies whether to cancel an in-progress seeding operation. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseCopyIdParameter  <br/> |The _Identity_ parameter specifies the name or GUID of the mailbox database whose copy is being seeded. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> |The _Server_ parameter is used as part of a full server reseed operation. It can be used with the _MaximumSeedsInParallel_ parameter to start reseeds of database copies in parallel across the specified server in batches of up to the value of the _MaximumSeedsInParallel_ parameter copies at a time. <br/> |
| _BeginSeed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BeginSeed_ switch asynchronously starts the seeding operation and then exits the cmdlet. You don't need to specify a value with this switch. <br/> This switch is useful for scripting reseeds.  <br/> |
| _CatalogOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _CatalogOnly_switch specifies that only the content index catalog for the database copy should be seeded. You don't need to specify a value with this switch.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DatabaseOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DatabaseOnly_switch specifies that only the database copy should be seeded. The content index catalog isn't seeded. You don't need to specify a value with this switch.  <br/> |
| _DeleteExistingFiles_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DeleteExistingFiles_ switch specifies whether to remove the existing log files at the target location. You don't need to specify a value with this switch. <br/> This switch removes only the files that it checks for and fails if other files are present. No action is taken on other files at the target location. Therefore, if database-related files are present, you must manually remove them.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _ManualResume_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ManualResume_ switch specifies whether to automatically resume replication on the database copy. You don't need to specify a value with this switch. <br/> With this switch, you can manually resume replication to the database copy.  <br/> |
| _MaximumSeedsInParallel_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MaximumSeedsInParallel_ parameter is used with the _Server_ parameter to specify the maximum number of parallel seeding operations that should occur across the specified server during a full server reseed operation. The default value is `10`.  <br/> |
| _Network_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupNetworkIdParameter  <br/> |The _Network_ parameter specifies which DAG network should be used for seeding. Note that content index catalog seeding always occurs over the MAPI network, even if you use this parameter to specify the DAG network. <br/> |
| _NetworkCompressionOverride_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.SystemConfigurationTasks.UseDagDefaultOnOff  <br/> |The _NetworkCompressionOverride_ parameter specifies whether to override the current DAG network compression settings. <br/> |
| _NetworkEncryptionOverride_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.SystemConfigurationTasks.UseDagDefaultOnOff  <br/> |The _NetworkEncryptionOverride_ parameter specifies whether to override the current DAG encryption settings. <br/> |
| _NoThrottle_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _NoThrottle_ switch prevents the seeding operation from being throttled. You don't need to specify a value with this switch. <br/> |
| _PrimaryDatabasePartitionOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SafeDeleteExistingFiles_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SafeDeleteExistingFiles_switch specifies a seeding operation with a single copy redundancy pre-check prior to the seed. You don't need to specify a value with this switch.  <br/> Because this switch includes the redundancy safety check, it requires a lower level of permissions than the _DeleteExistingFiles_ parameter. Limited permission administrators can perform the seeding operation by using this switch. <br/> |
| _SecondaryDatabasePartitionOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SourceServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _SourceServer_ parameter specifies the name of a Mailbox server with a passive copy of the mailbox database to be used as the source for the seed operation. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

