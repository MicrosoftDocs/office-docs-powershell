---
title: "Get-UMIPGateway"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d7f8c7d0-6ed7-4b74-91de-8b0ed2377946
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UMIPGateway

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UMIPGateway** cmdlet to return a list of properties and values for a specified Unified Messaging (UM) IP gateway or a list of UM IP gateways.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMIPGateway [-Identity <UMIPGatewayIdParameter>] [-DomainController <Fqdn>] [-IncludeSimulator <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a formatted list of all the UM IP gateways in the Active Directory forest.
  
```
Get-UMIPGateway | Format-List
```

### Example 2

This example displays the properties for the UM IP gateway MyUMIPGateway.
  
```
Get-UMIPGateway -Identity MyUMIPGateway
```

### Example 3

This example displays all the UM IP gateways including IP gateway simulators in the Active Directory forest.
  
```
Get-UMIPGateway -IncludeSimulator $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMIPGateway** cmdlet displays the properties and values for a specified UM IP gateway, such as the display name, IP address, status, and outgoing calls settings. If no parameter is specified, all UM IP gateways in the Active Directory forest are returned.
  
When you're using the **Get-UMIPGateway** cmdlet, you can't enter the IP address configured on the UM IP gateway. You must use the name of the UM IP gateway. The name specified with the _Identity_ parameter of the **Get-UMIPGateway** cmdlet can be the same as or different from the host name of the UM IP gateway, for example, **Get-UMIPGateway** _MyUMIPGateway_.
  
After this task is completed, you can view the list of properties and values for a specific UM IP gateway. Or, if the _Identity_ parameter isn't used, the cmdlet returns a list of all UM IP gateways in the forest.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMIPGatewayIdParameter  <br/> |The _Identity_ parameter specifies the identifier for the UM IP gateway being viewed. This parameter is the directory object ID for the UM IP gateway. <br/> |
| _IncludeSimulator_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeSimulator_ switch retrieves the simulator of the UM IP gateway being viewed. A simulator allows a client to connect to the Mailbox server. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

