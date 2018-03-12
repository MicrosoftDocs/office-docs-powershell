---
title: "Add-RoleGroupMember"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: ed53e269-a855-4066-88a7-1ba36086bd72
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Add-RoleGroupMember

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Add-RoleGroupMember** cmdlet to add members to a management role group.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Add-RoleGroupMember -Identity <RoleGroupIdParameter> -Member <SecurityPrincipalIdParameter> [-BypassSecurityGroupManagerCheck <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the user David to the role group Recipient Management.
  
```
Add-RoleGroupMember "Recipient Management" -Member David
```

### Example 2

This example finds all the mailboxes that are part of the Sales department and adds them to the Sales and Marketing Group role group. Because we're using the  _WhatIf_ switch, the changes aren't written to the role group, so you can verify that the correct members will be added.
  
```
Get-User -Filter { Department -Eq "Sales" -And RecipientType -Eq "UserMailbox" } | Get-Mailbox | Add-RoleGroupMember "Sales and Marketing Group" -WhatIf
```

After you've verified that the correct members will be added to the role group, remove the  _WhatIf_ switch and run the command again.
  
For more information about pipelining, and the  _WhatIf_ parameter, see the following topics:
  
- [Pipelining](http://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx)
    
- [WhatIf, Confirm, and ValidateOnly Switches](http://technet.microsoft.com/library/a850eea7-431e-49c5-b877-1ebde2a2b48f.aspx)
    
### Example 3

This example adds the Training Assistants USG to the Training Administrators role group. Because the user running the command wasn't added to the **ManagedBy** property of the role group, the _BypassSecurityGroupManagerCheck_ switch must be used. The user is assigned the Role Management role, which enables the user to bypass the security group manager check.
  
```
Add-RoleGroupMember "Training Administrators" -Member "Training Assistants" -BypassSecurityGroupManagerCheck
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you add a member to a role group, that mailbox, universal security group (USG), or computer is given the effective permissions provided by the management roles assigned to the role group.
  
If the **ManagedBy** property has been populated with role group managers, the user adding a role group member must be a role group manager. Alternately, if the user is a member of the Organization Management role group or is directly or indirectly assigned the Role Management role, the _BypassSecurityGroupManagerCheck_ switch can be used to override the security group management check.
  
If the role group is a linked role group, you can't use the **Add-RoleGroupMember** cmdlet to add members to the role group. Instead, you need to add members to the foreign USG that's linked to the linked role group. To find the foreign USG that's linked to a role group, use the **Get-RoleGroup** cmdlet.
  
For more information about role groups, see [Understanding Management Role Groups](http://technet.microsoft.com/library/2a92e06c-523e-4fd4-a937-152562b7741d.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleGroupIdParameter  <br/> |The  _Identity_ parameter specifies the role group to add a member to. If the role group name contains spaces, enclose the name in quotation marks ("). <br/> |
| _Member_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> |The  _Member_ parameter specifies the mailbox, USG, or computer to add to a role group. You can only specify one member at a time. If the member name contains spaces, enclose the name in quotation marks ("). <br/> |
| _BypassSecurityGroupManagerCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _BypassSecurityGroupManagerCheck_ switch enables a user who hasn't been added to the **ManagedBy** property to add a member to a role group. The user must be a member of the Organization Management role group or be assigned, either directly or indirectly, the Role Management role. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

