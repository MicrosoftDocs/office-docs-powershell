---
title: "Get-UMActiveCalls"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4c7418a5-783c-4db7-82da-49ceaa3d534f
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-UMActiveCalls

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-UMActiveCalls** cmdlet to return information about the calls that are active and being processed by the Mailbox server running the Microsoft Exchange Unified Messaging service.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMActiveCalls [-Server <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the details of all active calls on the local Mailbox server.
  
```
Get-UMActiveCalls
```

### Example 2

This example displays the details of all active calls on the Mailbox server MyUMServer.
  
```
Get-UMActiveCalls -Server MyUMServer
```

### Example 3

This example displays the details of all active calls being processed by the UM IP gateway MyUMIPGateway.
  
```
Get-UMActiveCalls -IPGateway MyUMIPGateway
```

### Example 4

This example displays a list of active calls associated with the UM dial plan MyUMDialPlan.
  
```
Get-UMActiveCalls -DialPlan MyUMDialPlan
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMActiveCalls** cmdlet returns information about the active calls being processed. If the **Get-UMActiveCalls** cmdlet specifies either the UM dial plan or UM IP gateway, it looks in Active Directory to determine which Mailbox server running the Microsoft Exchange Unified Messaging service must be contacted. If the Mailbox server is specified at a command prompt, the **Get-UMActiveCalls** cmdlet returns the active calls being processed by the server specified.
  
> [!NOTE]
> When a Mailbox server is process cycling, the **Get-UMActiveCalls** cmdlet doesn't return a list of all calls for both the discontinued process and the active process. It returns the active calls only for the new process.
  
After this task is completed, you can see the list of active calls being processed by a Mailbox server.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DialPlan_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _DialPlan_ parameter specifies the UM dial plan for which you want to retrieve active calls. <br/> |
| _InstanceServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Directory.Management.UMServer  <br/> |The _InstanceServer_ parameter specifies the Mailbox server running the Microsoft Exchange Unified Messaging service for which you want to retrieve active calls. <br/> |
| _IPGateway_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UMIPGatewayIdParameter  <br/> |The _IPGateway_ parameter specifies the UM IP gateway for which you want to retrieve active calls. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Server_ parameter specifies the Mailbox server running the Microsoft Exchange Unified Messaging service for which you want to retrieve active calls. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

