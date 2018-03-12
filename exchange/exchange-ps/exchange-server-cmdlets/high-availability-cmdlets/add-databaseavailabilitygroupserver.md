---
title: "Add-DatabaseAvailabilityGroupServer"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6bd0a3fe-dec6-47c2-b9a3-8dffb60e4aad
description: "This cmdlet is available only in on-premises Exchange."
---

# Add-DatabaseAvailabilityGroupServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **Add-DatabaseAvailabilityGroupServer** cmdlet to add a Mailbox server to a database availability group (DAG). A DAG is a set of Mailbox servers that use continuous replication and managed availability to provide automatic database-level recovery from database, server, or network failures.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-DatabaseAvailabilityGroupServer -Identity <DatabaseAvailabilityGroupIdParameter> -MailboxServer <ServerIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-SkipDagValidation <SwitchParameter>] [-SkipInstallCluster <SwitchParameter>] [-SpareServer <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the Mailbox server MBX1 to the DAG DAG1.
  
```
Add-DatabaseAvailabilityGroupServer -Identity DAG1 -MailboxServer MBX1
```

## Detailed Description
<a name="DetailedDescription"> </a>

A computer object for a DAG is created in Active Directory when the first server is added to the DAG. This object is used to authenticate servers to each other within a DAG.
  
To add a Mailbox server to a DAG, the Mailbox server must be running the Windows Server 2008 R2 Enterprise or Datacenter operating system, the Windows Server 2012 Standard or Datacenter operating system, or the Windows Server 2012 R2 operating system, and it must not belong to any other DAG. The Mailbox server must be running the same versions of the Windows operating system and Microsoft Exchange, and be in the same Active Directory domain as all other Mailbox servers in the DAG. In addition, the Mailbox server must not be configured as an Active Directory domain controller or global catalog server.
  
To add the first server to a DAG and create a computer object for the DAG, the Exchange Windows Permissions security group must have the appropriate rights to add computer accounts to the domain. Alternatively, a computer account can be created and disabled prior to adding the server. Adding the first server to the DAG enables the computer account for the DAG. Thus, the account used for the task doesn't need permissions to add a computer account to the domain. If you're pre-creating the computer account, the name of the account must match the name for the DAG. For example, if the DAG is named DAG1, the computer account must be named DAG1.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupIdParameter  <br/> |The _Identity_ parameter specifies the name of the DAG to which the server is being added. <br/> |
| _MailboxServer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _MailboxServer_ parameter specifies the name of the Mailbox server being added to the DAG. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _SkipDagValidation_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipDagValidation_ switch specifies whether to bypass the validation of the DAG's quorum model and the health check on the DAG's witness when adding members to the DAG. <br/> |
| _SkipInstallCluster_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SpareServer_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

