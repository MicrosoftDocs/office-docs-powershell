---
title: "Stop-DatabaseAvailabilityGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1e167fe5-b1c5-48d9-b3d8-4cf823d1c43c
description: "This cmdlet is available only in on-premises Exchange."
---

# Stop-DatabaseAvailabilityGroup

This cmdlet is available only in on-premises Exchange. 
  
Use the **Stop-DatabaseAvailabilityGroup** cmdlet to mark a member of a database availability group (DAG) as failed, or to mark all DAG members in a specific Active Directory site as failed.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Stop-DatabaseAvailabilityGroup -ActiveDirectorySite <AdSiteIdParameter> -Identity <DatabaseAvailabilityGroupIdParameter> [-ConfigurationOnly <SwitchParameter>] [-QuorumOnly <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example stops the Mailbox server MBX2 in the DAG DAG1.
  
```
Stop-DatabaseAvailabilityGroup -Identity DAG1 -MailboxServer MBX2
```

### Example 2

This example stops all members in the DAG DAG1 in the Active Directory site Redmond.
  
```
Stop-DatabaseAvailabilityGroup -Identity DAG1 -ActiveDirectorySite Redmond
```

### Example 3

This example stops the Mailbox server MBX3, which is currently offline, in the DAG DAG2.
  
```
Stop-DatabaseAvailabilityGroup -Identity DAG2 -MailboxServer MBX3 -ConfigurationOnly
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Stop-DatabaseAvailabilityGroup** cmdlet is used during a datacenter switchover. This cmdlet is used to mark one or members of the DAG as failed (also known asstopped).The **Stop-DatabaseAvailabilityGroup** cmdlet can be run against a DAG only when the DAG is configured with a _DatacenterActivationMode_ value of `DagOnly`.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ActiveDirectorySite_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> |The _ActiveDirectorySite_ parameter specifies the Active Directory site containing the DAG members to stop (for example, stop all DAG members in a particular Active Directory site). <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupIdParameter  <br/> |The _Identity_ parameter specifies the name of the DAG being stopped. <br/> |
| _MailboxServer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> |The _MailboxServer_ parameter specifies a single DAG member to stop. If Datacenter Activation Coordination mode is enabled for the DAG and all DAG members are in the same Active Directory site, use the _MailboxServer_ parameter to stop individual DAG members instead of the _ActiveDirectorySite_ parameter when stopping failed DAG members. <br/> |
| _ConfigurationOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ConfigurationOnly_ parameter updates the Active Directory properties with the stop action, but doesn't perform a stop of the DAG or any members. This parameter must be used when the DAG member servers are offline, but Active Directory is up and accessible in the primary datacenter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _QuorumOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

