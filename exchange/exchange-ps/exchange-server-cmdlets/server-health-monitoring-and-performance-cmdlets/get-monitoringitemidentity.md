---
title: "Get-MonitoringItemIdentity"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7a4da080-0fe6-4dd7-85a2-cceeb68f95e0
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MonitoringItemIdentity

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MonitoringItemIdentity** cmdlet to discover the monitoring items that you can use to return health information about your Exchange servers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MonitoringItemIdentity -Identity <String> -Server <ServerIdParameter>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns information about the health set named OutlookMapiHttp.Proxy on the server named ExchSrv01.
  
```
Get-MonitoringItemIdentity -Identity OutlookMapiHttp.Proxy -Server ExchSrv01
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |System.String  <br/> |The _Identity_ parameter specifies the health setthat you want to view. To see the list of available health sets, you can use the **Get-ServerHealth** or **Get-HealthReport** cmdlets. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

