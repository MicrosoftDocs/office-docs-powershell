---
title: "Get-TransportRulePredicate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 10/6/2016
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3054220d-0973-4832-840e-b9ef9e7c9064
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-TransportRulePredicate

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-TransportRulePredicate** cmdlet to view the predicates (conditions and exceptions) that are available for transport rules (mal flow rules).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-TransportRulePredicate [-Name <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all predicates.
  
```
Get-TransportRulePredicate
```

### Example 2

This example returns detailed information about the predicate named  `SubjectMatches`.
  
```
Get-TransportRulePredicate -Name SubjectMatches | Format-List
```

For more information about pipelining, see [Pipelining](http://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx). For more information about how to work with the output of a command, see [Manipulating Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
### Example 3

This example returns a summary list of all predicates that have Attachment in the name.
  
```
Get-TransportRulePredicate | Where {$_.Name -like "*Attachment*"}
```

For more information about how to work with the output of a command, see [Manipulating Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx)
  
## Detailed Description
<a name="DetailedDescription"> </a>

Collectively, the conditions and exceptions in rules are known as predicates, because for every condition, there's a corresponding exception that uses the exact same settings and syntax. The only difference is conditions specify messages to include, while exceptions specify messages to exclude. That's why the output of this cmdlet doesn't list exceptions separately. Also, the names of some of the predicates that are returned by this cmdlet are different than the corresponding parameter names in the **New-TransportRule** and **Set-TransportRule** cmdlets.
  
In on-premises Exchange, the predicates that are available on Mailboxes servers and Edge Transports server are different.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the predicate that you want to view. To see the list of available names, run the command `Get-TransportRulePredicate`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

