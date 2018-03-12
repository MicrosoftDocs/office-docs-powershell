---
title: "Remove-RoleAssignmentPolicy"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: cfcfe435-cd52-4d40-a298-0c1ca11b8995
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-RoleAssignmentPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-RoleAssignmentPolicy** cmdlet to remove existing management role assignment policies from your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-RoleAssignmentPolicy -Identity <MailboxPolicyIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the role assignment policy named End User:
  
1. Find all mailboxes that have the End User policy assigned to them.
    
2. Assign a different role assignment policy to the mailboxes. The example uses the policy named Seattle End User.
    
3. Remove all management role assignments that are assigned to the End User policy.
    
4. Remove the End User role assignment policy.
    
```
Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"}; Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"} | Set-Mailbox -RoleAssignmentPolicy "Seattle End User"; Get-ManagementRoleAssignment -RoleAssignee "End User" | Remove-ManagementRoleAssignment; Remove-RoleAssignmentPolicy "End User"
```

For more information about the **Where** cmdlet and pipelining, see[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx) and[Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

The assignment policy you want to remove can't be assigned to any mailboxes or management roles. Also, if you want to remove the default assignment policy, it must be the last assignment policy. Do the following before you attempt to remove an assignment policy:
  
- Use the **Set-Mailbox** cmdlet to change the assignment policy for any mailbox assigned the assignment policy you want to remove.
    
- If the assignment policy is the default assignment policy, use the **Set-RoleAssignmentPolicy** cmdlet to select a new default assignment policy. You don't need to do this if you're removing the last assignment policy.
    
- Use the **Remove-ManagementRoleAssignment** cmdlet to remove any management role assignments assigned to the policy.
    
For more information about assignment policies, see [Understanding End User Role Assignment and Policies](https://technet.microsoft.com/library/25913e43-326a-4371-90b5-021a35f100fe.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _Identity_ parameter specifies the assignment policy to remove. If the assignment policy name has spaces, enclose the name in quotation marks ("). <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

