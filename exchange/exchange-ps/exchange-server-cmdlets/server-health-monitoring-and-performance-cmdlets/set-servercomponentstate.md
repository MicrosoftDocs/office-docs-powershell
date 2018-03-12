---
title: "Set-ServerComponentState"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: bf0a92ce-9bcf-476e-b92b-8279c141f361
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-ServerComponentState

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-ServerComponentState** cmdlet to configure and update Microsoft Exchange components and endpoints on servers you specify.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ServerComponentState -Component <String> -Identity <ServerIdParameter> -Requester <String> -State <Inactive | Active | Draining | Unknown> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-LocalOnly <SwitchParameter>] [-RemoteOnly <SwitchParameter>] [-TimeoutInSeconds <Int32>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the Unified Messaging (UM) component state to Active, as requested by maintenance mode.
  
```
Set-ServerComponentState -Component UMCallRouter -Identity MailboxServer01 -Requester Maintenance -State Active
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Component_ <br/> |Required  <br/> |System.String  <br/> |The _Component_ parameter specifies the component or endpoint for which you want to set the state. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Identity_ parameter specifies the server you want to configure. <br/> |
| _Requester_ <br/> |Required  <br/> |System.String  <br/> | The _Requester_ parameter specifies the system requesting this state change. Valid values are: <br/>  `HealthAPI` <br/>  `Maintenance` <br/>  `Sidelined` <br/>  `Functional` <br/>  `Deployment` <br/> |
| _State_ <br/> |Required  <br/> |Microsoft.Exchange.Data.ServiceState  <br/> | The _State_ parameter specifies the state that you want for the component. Valid values are: <br/>  `Active` <br/>  `Inactive` <br/>  `Draining` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _LocalOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _LocalOnly_switch specifies that the changes are written to the registry of the Exchange server only, and not to Active Directory. You don't need to specify a value with this switch.  <br/> |
| _RemoteOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _RemoteOnly_switch specifies that the changes are written to Active Directory only, and not to the registry of the Exchange server. You don't need to specify a value with this switch.  <br/> |
| _TimeoutInSeconds_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

