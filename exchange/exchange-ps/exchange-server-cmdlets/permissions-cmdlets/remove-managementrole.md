---
title: "Remove-ManagementRole"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d67099bd-bb7e-4ad7-8d8a-9d4909d59dba

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-ManagementRole

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-ManagementRole** cmdlet to remove custom management roles that you don't need anymore.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-ManagementRole -Identity <RoleIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-Recurse <SwitchParameter>] [-UnScopedTopLevel <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the single role ExampleRole1.
  
```
Remove-ManagementRole ExampleRole1
```

### Example 2

This example runs the **Remove-ManagementRole** cmdlet with the _WhatIf_ switch. The _WhatIf_ switch lets the command run as if it were going to perform the action you specified but doesn't commit any changes. Instead, it displays the results of what would have happened, so you can verify that the actions are correct.
  
```
Remove-ManagementRole ExampleRole2 -Recurse -WhatIf
```

If the results are as expected, remove the _WhatIf_ switch and run the command again to remove the `ExampleRole2` parent role and all its child roles.
  
### Example 3

This example uses the **Get-ManagementRole** cmdlet to get a list of roles that contain the string "Example" in the role name, and then pipes the list to the **Remove-ManagementRole** cmdlet. The **Remove-ManagementRole** cmdlet, because the _WhatIf_ switch is specified, displays the roles that would have been removed but doesn't commit any changes. If the results are as expected, the command can be run again without the _WhatIf_ switch to remove the roles.
  
```
Get-ManagementRole *Example* | Remove-ManagementRole -WhatIf
```

### Example 4

This example removes the In-house scripts unscoped top-level management role. Because this is an unscoped top-level role, the _UnScopedTopLevel_ switch must be used.
  
```
Remove-ManagementRole "In-house scripts" -UnScopedTopLevel
```

For more information about unscoped top-level management roles, see [Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

You need to remove all the management role assignments from a role before you delete it. If the role is the parent of child roles, the child roles must be removed before you remove the parent role, or you must use the _Recurse_ parameter when you remove the parent role. You can only remove custom roles. Built-in roles, such as the Mail Recipients role, can't be removed. For more information about how to remove a custom role, see[Remove a Management Role](https://technet.microsoft.com/library/2fb6f453-f37a-4636-8353-3f9927f81298.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter  <br/> |The _Identity_ parameter specifies the custom role to remove. If the name of the role contains spaces, enclose the name in quotation marks ("). <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Recurse_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Recurse_ parameter removes all child roles of the role specified with the _Identity_ parameter, and then removes the specified role. <br/> > [!CAUTION]> The _Recurse_ parameter removes all child roles of the specified role. We recommend that you first use the command with the _WhatIf_ switch to confirm that the action to be taken is correct.          |
| _UnScopedTopLevel_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UnScopedTopLevel_ switch specifies that the role you're trying to remove is an unscoped top-level role. You must use this switch if you want to remove an unscoped top-level role. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

