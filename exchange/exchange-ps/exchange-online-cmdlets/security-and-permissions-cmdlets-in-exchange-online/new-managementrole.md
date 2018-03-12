---
title: "New-ManagementRole"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/27/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 76367e39-a387-430f-b3a5-1df20dd31201
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-ManagementRole

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-ManagementRole** cmdlet to create a management role based on an existing role or create an unscoped management role.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ManagementRole -Parent <RoleIdParameter> [-EnabledCmdlets <String[]>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the management role Redmond Journaling View-Only based on the Journaling parent role.
  
After the role is created, the **Remove-ManagementRoleEntry** cmdlet is used along with the **Where** cmdlet to remove all the management role entries that aren't needed on the role. You can't add role entries to the newly created role because it already has all the role entries that exist on its parent role, Journaling. The _WhatIf_ switch is used to verify that the correct role entries are removed.
  
```
New-ManagementRole -Name "Redmond Journaling View-Only" -Parent Journaling; Get-ManagementRoleEntry "Redmond Journaling View-Only\*" | Where { $_.Name -NotLike "Get*" } | Remove-ManagementRoleEntry -WhatIf
```

After confirmation that the command removes the correct role entries, the second command is run again without the  _WhatIf_ switch.
  
For more information about pipelining and the **Where** cmdlet, see the following topics:
  
- [Pipelining](http://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx)
    
- [Working with Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx)
    
### Example 2

This example creates the unscoped management role In-house scripts. The user running the command, or the role group the user is a member of, is assigned the Unscoped Role Management management role. This assignment is required to use the  _UnScopedTopLevel_ switch.
  
```
New-ManagementRole -Name "In-house scripts" -UnScopedTopLevel
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can either create a management role based on an existing role, or you can create an unscoped role that's empty. If you create a role based on an existing role, you start with the management role entries that exist on the existing role. You can then remove entries to customize the role. If you create an unscoped role, the role can contain custom scripts or cmdlets that aren't part of Exchange.
  
> [!CAUTION]
> An unscoped role doesn't have any scope restrictions applied. Scripts or third-party cmdlets included in an unscoped role can view or modify any object in the Exchange organization. > The ability to create an unscoped management role isn't granted by default. To create an unscoped management role, you must assign the Unscoped Role Management management role to a role group you're a member of. For more information about how to create an unscoped management role, see [Create an Unscoped Role](http://technet.microsoft.com/library/5a042ccf-4d5f-4609-a91b-21c20d1e6459.aspx). 
  
After you create a role, you can change the management role entries on the role and assign the role with a management scope to a user or universal security group (USG).
  
For more information about management roles, see [Understanding Management Roles](http://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the role. The maximum length of the name is 64 characters. If the name contains spaces, enclose the name in quotation marks ("). <br/> |
| _Parent_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter  <br/> |The  _Parent_ parameter specifies the identity of the role to copy. If the name of the role contains spaces, enclose the name in quotation marks ("). If you specify the _Parent_ parameter, you can't use the _UnScopedTopLevel_ switch. <br/> |
| _UnScopedTopLevel_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _UnScopedTopLevel_ switch specifies that the role should be a custom, empty role. If you specify the _UnScopedTopLevel_ switch, you can't use the _Parent_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies the description that's displayed when the management role is viewed using the **Get-ManagementRole** cmdlet. Enclose the description in quotation marks ("). <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EnabledCmdlets_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _EnabledCmdlets_parameter specifies the cmdlets that are copied from the parent role. You can specify multiple values separated by commas.  <br/> You can only use this parameter with the  _Parent_ parameter when you copy a role. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

