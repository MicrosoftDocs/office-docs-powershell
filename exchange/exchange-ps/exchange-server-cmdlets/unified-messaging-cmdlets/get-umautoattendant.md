---
title: "Get-UMAutoAttendant"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7e577b3a-184d-4533-b1c9-c2c8884a442a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UMAutoAttendant

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UMAutoAttendant** cmdlet to retrieve the properties and the values for a Unified Messaging (UM) auto attendant.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMAutoAttendant [-Identity <UMAutoAttendantIdParameter>] [-DomainController <Fqdn>] [-UMDialPlan <UMDialPlanIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a formatted list of all UM auto attendants in the Active Directory forest.
  
```
Get-UMAutoAttendant | Format-List
```

### Example 2

This example displays the properties of the UM auto attendant MyUMAutoAttendant.
  
```
Get-UMAutoAttendant -Identity MyUMAutoAttendant
```

### Example 3

This examples displays all the UM auto attendants associated with the UM dial plan MyUMDialPlan.
  
```
Get-UMAutoAttendant -UMDialPlan MyUMDialPlan
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMAutoAttendant** cmdlet retrieves the properties for a single UM auto attendant or for a list of UM auto attendants.
  
After this task is completed, if no parameter is supplied with the cmdlet, the cmdlet returns all UM auto attendants in the Active Directory forest. Or, if the UM dial plan ID is supplied but no name is supplied, the cmdlet returns all UM auto attendants linked to the UM dial plan.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMAutoAttendantIdParameter  <br/> |The _Identity_ parameter specifies the identifier for the UM auto attendant that's being viewed. This is the directory object ID for the UM auto attendant. <br/> |
| _UMDialPlan_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies whether to display all the UM auto attendants that are associated with the UM dial plan that's specified. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

