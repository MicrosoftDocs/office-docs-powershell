---
title: "Get-HealthReport"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f33fbed5-0e01-4d7e-a252-121b2afb6864
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-HealthReport

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-HealthReport** cmdlet to return health information for the Exchange server that you specify. You can use the health values to determine the state of the server.The cmdlet also returns an alert value that provides the specific state of your server.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-HealthReport -Identity <ServerIdParameter> [-GroupSize <Int32>] [-HaImpactingOnly <SwitchParameter>] [-HealthSet <String>] [-MinimumOnlinePercent <Int32>] [-RollupGroup <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves health information for the server named Mailbox01.
  
```
Get-HealthReport -Identity Mailbox01-RollupGroup
```

## Detailed Description
<a name="DetailedDescription"> </a>

The following list contains the health values that are returned:
  
- Online
    
- Partially Online
    
- Offline
    
- Sidelined
    
- Functional
    
- Unavailable
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Identity_ parameter specifies the Exchange server that you want to view. You can use the following values to identify the server: <br/>  Name <br/>  Distinguished name (DN) <br/>  FQDN <br/> |
| _GroupSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The _GroupSize_ parameter determines the size of the group to process against for a rollup. The default value is 12. <br/> |
| _HaImpactingOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _HaImpactingOnly_ switch filters the results to only the monitors that have **HaImpacting** set to `True`. You don't need to specify a value with this switch.  <br/> |
| _HealthSet_ <br/> |Optional  <br/> |System.String  <br/> |The _HealthSet_ parameter filters the results by the specified health set. Monitors that are similar or are tied to a component's architecture are grouped to form ahealth set. You can determine the collection of monitors (and associated probes and responders) in a given health set by using the **Get-MonitoringItemIdentity** cmdlet. <br/> |
| _MinimumOnlinePercent_ <br/> |Optional  <br/> |System.Int32  <br/> |The _MinimumOnlinePercent_ parameter specifies the number of members in the group to be functioning with rollup information Degraded instead of Unhealthy. The default value is 70 percent. <br/> |
| _RollupGroup_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _RollupGroup_switch specifies that the health data is rolled up across servers with redundancy limits. You don't need to specify a value with this switch.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

