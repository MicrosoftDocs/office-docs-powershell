---
title: "Get-ServerHealth"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: ca9cff3a-ecda-422d-abd7-b7d8da71a6c7
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ServerHealth

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ServerHealth** cmdlet to return health information related to the server you specify.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ServerHealth -Identity <ServerIdParameter> [-HaImpactingOnly <SwitchParameter>] [-HealthSet <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the server health for server Server01.
  
```
Get-ServerHealth -Identity Server01
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
The cmdlet returns health values that you can use to determine the state of the server. See [Server Health and Performance](https://technet.microsoft.com/library/9d1fdec8-8273-4c71-88f1-b4edfd542c4f.aspx) for related information.
  
The cmdlet also returns an alert value that provides the specific state of your server. The following values may be returned:
  
- Degraded
    
- Unhealthy
    
- Repairing
    
- Disabled
    
- Unavailable
    
- UnInitialized
    
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Identity_ parameter specifies the identity of the server you want health information for. <br/> |
| _HaImpactingOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _HaImpactingOnly_ switch specifies whether the cmdlet must roll up only the monitors that have **HaImpacting** set to `True`.  <br/> |
| _HealthSet_ <br/> |Optional  <br/> |System.String  <br/> |The _HealthSet_ parameter returns the health state of a group of monitors. Monitors that are similar or are tied to a component's architecture are grouped to form ahealth set. You can determine the collection of monitors (and associated probes and responders) in a given health set by using the _Get-MonitoringItemIdentity_ cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

