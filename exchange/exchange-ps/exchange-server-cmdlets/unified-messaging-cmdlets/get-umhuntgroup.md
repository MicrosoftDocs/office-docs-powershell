---
title: "Get-UMHuntGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 89471543-4fae-42b0-a807-fd15bec97307
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UMHuntGroup

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UMHuntGroup** cmdlet to display the properties and values for an existing Unified Messaging (UM) hunt group.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMHuntGroup [-Identity <UMHuntGroupIdParameter>] [-DomainController <Fqdn>] [-UMDialPlan <UMDialPlanIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays all the UM hunt groups in the Active Directory forest.
  
```
Get-UMHuntGroup
```

### Example 2

This example displays the details of the UM hunt group MyUMHuntGroup in a formatted list.
  
```
Get-UMHuntGroup -Identity MyUMIPGateway\MyUMHuntGroup | Format-List
```

### Example 3

This example displays all of the UM hunt groups associated with the UM dial plan MyUMDialPlan.
  
```
Get-UMHuntGroup -UMDialPlan MyUMDialPlan
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMHuntGroup** cmdlet retrieves the properties for a single UM hunt group or a list of UM hunt groups. When you're using the **Get-UMHuntGroup** cmdlet, you can't only enter the name of the UM hunt group. You must also include the name of the UM IP gateway associated with the UM hunt group, for example, `Get-UMHuntGroup -Identity MyUMIPGateway\MyUMHuntGroup1`.
  
After this task is completed, if the _Identity_ parameter is specified, the properties for the UM hunt group are returned. If neither the _Identity_ nor the _UMDialPlan_ parameter is specified, all UM hunt groups in the Active Directory forest are returned.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMHuntGroupIdParameter  <br/> |The _Identity_ parameter specifies the identifier for the UM hunt group being viewed. This is the directory object ID for the UM hunt group. <br/> |
| _UMDialPlan_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies the UM dial plan associated with a UM hunt group. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

