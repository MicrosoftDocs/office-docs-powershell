---
title: "New-UMIPGateway"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 598774bf-2a38-4779-be5a-9955c6b5ef4b
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-UMIPGateway

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-UMIPGateway** cmdlet to create a Unified Messaging (UM) IP gateway. A UM IP gateway is used to connect Unified Messaging servers to an IP gateway or a Session Initiation Protocol (SIP)-enabled IP Private Branch eXchange (PBX).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-UMIPGateway -Address <UMSmartHost> -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-IPAddressFamily <IPv4Only | IPv6Only | Any>] [-UMDialPlan <UMDialPlanIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the UM IP gateway MyUMIPGateway that enables a Mailbox server to start accepting calls from an IP gateway with an IP address of 10.10.10.1.
  
```
New-UMIPGateway -Identity MyUMIPGateway -Address 10.10.10.1
```

### Example 2

This example creates the UM IP gateway MyUMIPGateway and prevents it from accepting incoming calls and outgoing calls, sets an IPv6 address, and allows the UM IP gateway to use IPv4 and IPV6 addresses.
  
```
New-UMIPGateway -Identity MyUMIPGateway -Address fe80::39bd:88f7:6969:d223%11 -IPAddressFamily Any -Status Disabled -OutcallsAllowed $false
```

### Example 3

This example creates the UM IP gateway MyUMIPGateway that enables a Mailbox server to start accepting calls from an IP gateway with an FQDN of MyUMIPGateway.contoso.com.
  
```
New-UMIPGateway -Identity MyUMIPGateway -Address "MyUMIPGateway.contoso.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-UMIPGateway** cmdlet creates a UM IP gateway. A UM IP gateway has organization-wide scope and references a single physical IP gateway. The UM IP gateway that's created is used to establish a connection to an IP gateway or a SIP-enabled IP PBX. After this task is completed, a new UM IP gateway is created.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Address_ <br/> |Required  <br/> |Microsoft.Exchange.Data.UMSmartHost  <br/> |The  _Address_ parameter specifies the IP address configured on the IP gateway or SIP-enabled IP PBX. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the display name for the UM IP gateway. The name for the new UM IP gateway can contain up to 64 characters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IPAddressFamily_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.IPAddressFamily  <br/> |The  _IPAddressFamily_ parameter specifies whether the UM IP gateway uses Internet Protocol version 4 (IPv4), IPv6, or both to communicate. If set to `IPv4Only`, the UM IP gateway only uses IPv4 to communicate. If set to  `IPv6Only`, the UM IP gateway only uses IPv6. If set to  `Any`, IPv6 will be used first, and then, if necessary, it will fallback to IPv4. The default is  `IPv4Only`.  <br/> |
| _UMDialPlan_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The  _UMDialPlan_ parameter specifies the UM dial plan to be associated with the UM IP gateway. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

