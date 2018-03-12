---
title: "Move-DatabasePath"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d6873ded-d521-428f-821f-d10ea2c44b7e
description: "This cmdlet is available only in on-premises Exchange."
---

# Move-DatabasePath

This cmdlet is available only in on-premises Exchange. 
  
Use the **Move-DatabasePath** cmdlet to set a new path to the location of a database on the specified Mailbox server and to move the related files to that location.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Move-DatabasePath -Identity <DatabaseIdParameter> [-ConfigurationOnly <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-EdbFilePath <EdbFilePath>] [-Force <SwitchParameter>] [-LogFolderPath <NonRootLocalLongFullPath>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets a new path for the mailbox database specified by the mailbox database name. To perform the move operation, the database must be temporarily dismounted, making it inaccessible to all users. If the database is currently dismounted, it isn't remounted upon completion.
  
```
Move-DatabasePath -Identity MyDatabase01 -EdbFilePath C:\NewFolder\MyDatabase01.edb
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you use the **Move-DatabasePath** cmdlet, consider the following:
  
- This cmdlet fails if it's run while the database is being backed up.
    
- If the specified database is mounted when this cmdlet is run, the database is automatically dismounted and then remounted, and is unavailable to users while it's dismounted.
    
- This cmdlet normally can be run on the affected Mailbox server only. An exception is that this cmdlet can be run on an administrator's workstation when using the _ConfigurationOnly_ parameter with a value of `$true`.
    
- This cmdlet can't be run against replicated mailbox databases. To move the path of a replicated database, you must first remove all replicated copies, and then you can perform the move operation. After the move operation is complete, you can add copies of the mailbox database.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |The _Identity_ parameter specifies the GUID, distinguished name (DN), or name of the database. <br/> |
| _ConfigurationOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ConfigurationOnly_ switch specifies whether the configuration of the database changes without moving any files. A value of `$true` changes the configuration. A value of `$false` changes the configuration and moves the files. The default value is `$false`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EdbFilePath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EdbFilePath  <br/> |The _EdbFilePath_ parameter specifies a new file path for the database. All current database files are moved to this location. The default location is < _ExchangeInstallDirectory_>\Mailbox\LocalCopies\MBDatabase.edb. This file path can't be the same as the path for the backup copy of the database.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _LogFolderPath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _LogFolderPath_ parameter specifies the folder where log files are stored. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

