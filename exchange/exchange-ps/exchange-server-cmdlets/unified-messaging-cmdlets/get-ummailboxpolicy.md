---
title: "Get-UMMailboxPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f3a09cda-c1b9-4d7c-b1a5-eefc3603ebe7
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UMMailboxPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UMMailboxPolicy** cmdlet to display the properties and values of a Unified Messaging (UM) mailbox policy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMMailboxPolicy [-Identity <MailboxPolicyIdParameter>] [-DomainController <Fqdn>] [-UMDialPlan <UMDialPlanIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a formatted list of all UM mailbox policies in the Active Directory forest.
  
```
Get-UMMailboxPolicy | Format-List
```

### Example 2

This example returns the properties and values for the UM mailbox policy MyUMMailboxPolicy.
  
```
Get-UMMailboxPolicy -Identity MyUMMailboxPolicy
```

### Example 3

This examples displays all the UM mailbox policies associated with the UM dial plan MyUMDialPlan.
  
```
Get-UMMailboxPolicy -UMDialPlan MyUMDialPlan
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMMailboxPolicy** cmdlet retrieves the configuration properties and values for a UM mailbox policy or returns a list of UM mailbox policies.
  
After this task is completed, if the _Identity_ parameter is supplied, the properties and values for the specified UM mailbox policy object are returned. If no parameter is specified at the command prompt, all UM mailbox policies in the Active Directory forest are returned.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _Identity_ parameter specifies the identifier for the UM mailbox policy being viewed. This is the directory object ID for the UM mailbox policy. <br/> |
| _UMDialPlan_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMDialPlanIdParameter  <br/> |The _UMDialPlan_ parameter specifies that all UM mailbox policies associated with the UM dial plan are displayed. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

