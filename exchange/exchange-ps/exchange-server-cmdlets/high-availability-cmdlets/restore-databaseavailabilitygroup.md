---
title: "Restore-DatabaseAvailabilityGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d65394ad-9680-423d-9a93-0b46906123e5
description: "This cmdlet is available only in on-premises Exchange."
---

# Restore-DatabaseAvailabilityGroup

This cmdlet is available only in on-premises Exchange. 
  
Use the **Restore-DatabaseAvailabilityGroup** cmdlet as part of a datacenter switchover of a database availability group (DAG).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Restore-DatabaseAvailabilityGroup -Identity <DatabaseAvailabilityGroupIdParameter> [-ActiveDirectorySite <AdSiteIdParameter>] [-AlternateWitnessDirectory <NonRootLocalLongFullPath>] [-AlternateWitnessServer <FileShareWitnessServerName>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-UsePrimaryWitnessServer <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example activates member servers in the DAG DAG1 for the Active Directory site Portland. In this example, the values for the _AlternateWitnessServer_ parameter and the _AlternateWitnessDirectory_ parameter had been previously set by using the **Set-DatabaseAvailabilityGroup** cmdlet. Thus, there is no need to specify them here.
  
```
Restore-DatabaseAvailabilityGroup -Identity DAG1 -ActiveDirectorySite Portland
```

### Example 2

This example activates member servers in the DAG DAG1 for the Active Directory site Redmond. In this example, the values for the _AlternateWitnessServer_ parameter and the _AlternateWitnessDirectory_ parameter are being set as part of the activation process.
  
```
Restore-DatabaseAvailabilityGroup -Identity DAG1 -ActiveDirectorySite Redmond -AlternateWitnessServer CAS4 -AlternateWitnessDirectory D:\DAG1
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can also use this cmdlet for disaster recovery purposes to restore functionality to a DAG that has lost quorum due to one or more DAG members being offline for an extended period. Before running this cmdlet, you must first run the [Stop-DatabaseAvailabilityGroup](stop-databaseavailabilitygroup.md) cmdlet.
  
The **Restore-DatabaseAvailabilityGroup** cmdlet can be run against a DAG only when the DAG is configured with a _DatacenterActivationMode_ parameter value of `DagOnly`. For more information about the _DatacenterActivationMode_ parameter, see[Understanding Datacenter Activation Coordination Mode](https://technet.microsoft.com/library/57e4bf22-eeae-42a5-beb3-d68d06489592.aspx).
  
You can use the **Set-DatabaseAvailabilityGroup** cmdlet to configure the value for the _DatacenterActivationMode_ parameter.
  
The **Restore-DatabaseAvailabilityGroup** cmdlet performs several operations that affect the structure and membership of the DAG's cluster. This task does the following:
  
- Forcibly evicts the servers listed on the StoppedMailboxServers list from the DAG's cluster, thereby reestablishing quorum for the cluster enabling the surviving DAG members to start and provide service.
    
- Configures the DAG to use the alternate witness server if there is an even number of surviving DAG members, or a single surviving DAG member.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupIdParameter  <br/> |The _Identity_ parameter specifies the name of the DAG being manipulated. <br/> |
| _ActiveDirectorySite_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> |The _ActiveDirectorySite_ parameter specifies the site containing the DAG members to be restored. <br/> |
| _AlternateWitnessDirectory_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _AlternateWitnessDirectory_ parameter specifies the name of an alternate directory used to store witness data. The specified directory must not be in use by any other DAGs or used for any other purpose. This value can be populated ahead by using the **Set-DatabaseAvailabilityGroup** cmdlet. <br/> |
| _AlternateWitnessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.FileShareWitnessServerName  <br/> |The _AlternateWitnessServer_ parameter specifies the name of a new witness server for the DAG as part of a site activation process. This value can be populated ahead by using the **Set-DatabaseAvailabilityGroup** cmdlet. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _UsePrimaryWitnessServer_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UsePrimaryWitnessServer_ parameter specifies that the DAG's currently configured witness server should be used if a witness is needed by the DAG members being activated. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

