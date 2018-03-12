---
title: "New-UMHuntGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4aaad0e7-7125-42d5-a51c-78f872f56594
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-UMHuntGroup

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-UMHuntGroup** cmdlet to create a Unified Messaging (UM) hunt group used to link incoming calls to a specific UM dial plan.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-UMHuntGroup -Name <String> -UMDialPlan <UMDialPlanIdParameter> -UMIPGateway <UMIPGatewayIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-PilotIdentifier <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the UM hunt group MyUMHuntGroup that has a pilot identifier of 12345.
  
```
New-UMHuntGroup -Name MyUMHuntGroup -PilotIdentifier 12345 -UMDialPlan MyUMDialPlan -UMIPGateway MyUMIPGateway
```

### Example 2

This example creates the UM hunt group MyUMHuntGroup that has multiple pilot identifiers.
  
```
New-UMHuntGroup -Name MyUMHuntGroup -PilotIdentifier 5551234,55555 -UMDialPlan MyUMDialPlan -UMIPGateway MyUMIPGateway
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-UMHuntGroup** cmdlet creates a UM hunt group in Active Directory. Running this cmdlet enables all Mailbox servers associated with UM dial plans to communicate with an IP gateway. A UM hunt group must be created to allow communication between a UM IP gateway and a UM dial plan.
  
After this task is completed, a new UM hunt group is created.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the UM hunt group name used for display purposes. This string can contain as many as 64 characters, and it must be unique. <br/> |
| _UMDialPlan_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies the UM dial plan used with the UM hunt group. <br/> |
| _UMIPGateway_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMIPGatewayIdParameter  <br/> |The _UMIPGateway_ parameter specifies the UM IP gateway to be associated with the UM hunt group. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _PilotIdentifier_ <br/> |Optional  <br/> |System.String  <br/> |The _PilotIdentifier_ parameter specifies the number string used to uniquely identify the pilot access number for the specified IP gateway. This number must match the subscriber access number configured in the UM dial plan. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

