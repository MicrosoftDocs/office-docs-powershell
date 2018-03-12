---
title: "Set-ThrottlingPolicyAssociation"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1d007408-e00d-48da-89aa-5994f490fbae
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-ThrottlingPolicyAssociation

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-ThrottlingPolicyAssociation** cmdlet to associate a throttling policy with a specific object. The object can be a user with a mailbox, a user without a mailbox, a contact, or a computer account.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ThrottlingPolicyAssociation -Identity <ThrottlingPolicyAssociationIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example associates a user with a user name of tonysmith to the throttling policy ITStaffPolicy that has higher limits.
  
```
Set-ThrottlingPolicyAssociation -Identity tonysmith -ThrottlingPolicy ITStaffPolicy
```

### Example 2

You don't need to use the **Set-ThrottlingPolicyAssociation** cmdlet to associate a user with a policy. The following commands show another way to associate tonysmith to the throttling policy ITStaffPolicy.
  
```
$b = Get-ThrottlingPolicy ITStaffPolicy; Set-Mailbox -Identity tonysmith -ThrottlingPolicy $b
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-ThrottlingPolicyAssociation** cmdlet defines quota limits for specific objects. For example, if you notice that a user or other object is using excessive bandwidth, you can associate that object with a throttling policy that's more restrictive.
  
> [!NOTE]
> In data center deployments, the object referred to by the _Identity_ and _ThrottlingPolicy_ parameters must be in the same tenant.
  
For more information about how to control the resources consumed by individual users, see [Exchange Workload Management](https://technet.microsoft.com/library/276740c4-bdb7-49f1-9470-ae6f2bfd65aa.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ThrottlingPolicyAssociationIdParameter  <br/> |The _Identity_ parameter specifies the object to which you want to associate a throttling policy. The object can be a user with a mailbox, a user without a mailbox, a contact, or a computer account. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _ThrottlingPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ThrottlingPolicyIdParameter  <br/> |The _ThrottlingPolicy_ parameter specifies the throttling policy that you want to be associated with the object specified by the _Identity_ parameter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

