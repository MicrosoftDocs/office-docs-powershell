---
title: "Disable-UMIPGateway"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b6e0627a-0063-4e1d-bff0-0b35e8d146a2
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Disable-UMIPGateway

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Disable-UMIPGateway** cmdlet to disable a Unified Messaging (UM) IP gateway.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Disable-UMIPGateway -Identity <UMIPGatewayIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Immediate <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables the UM IP gateway MyUMIPGateway and stops it from accepting incoming calls from the IP gateway.
  
```
Disable-UMIPGateway -Identity MyUMIPGateway
```

### Example 2

This example disables the UM IP gateway MyUMIPGateway and disconnects all current calls immediately.
  
```
Disable-UMIPGateway -Identity MyUMIPGateway -Immediate $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The status variable for a UM IP gateway can be used to enable or disable call answering destined for the IP gateway. The **Disable-UMIPGateway** cmdlet disables a UM IP gateway in Active Directory by modifying its status variable. After this task is completed, the UM IP gateway no longer answers incoming calls or makes outgoing calls.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMIPGatewayIdParameter  <br/> |The  _Identity_ parameter specifies the identifier for the UM IP gateway being disabled. This is the directory object ID for the UM IP gateway. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Immediate_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Immediate_ parameter specifies whether the Mailbox server running the Microsoft Exchange Unified Messaging service drops incoming calls associated with this UM IP gateway immediately or waits for the current calls to finish processing. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

