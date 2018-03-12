---
title: "Get-UMCallRouterSettings"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: dbd22f09-4a97-4738-903d-f2760c15c101
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-UMCallRouterSettings

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-UMCallRouterSettings** cmdlet to view the settings of the Microsoft Exchange Unified Messaging Call Router service. This service exists on Exchange servers that have the Client Access server role installed, and is used by telephony clients to connect to Exchange.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMCallRouterSettings [-DomainController <Fqdn>] [-Server <ServerIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays a summary list of the Microsoft Exchange Unified Messaging Call Router service settings on all Exchange servers in the Active Directory forest.
  
```
Get-UMCallRouterSettings
```

### Example 2

This example displays detailed information for the Microsoft Exchange Unified Messaging Call Router service that's running on the server named EXCH01.
  
```
Get-UMCallRouterSettings -Server EXCH01 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

When the cmdlet is used for a single server, it returns the UM call router properties including  `MaxCalls`,  `MaxFaxCalls`, and  `UMDialPlans`. The properties and their values are stored in the Unified Messaging section of the Microsoft Exchange configuration object in Active Directory.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

