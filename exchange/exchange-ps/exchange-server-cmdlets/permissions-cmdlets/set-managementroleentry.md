---
title: "Set-ManagementRoleEntry"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d4438459-d8b6-4214-b0d0-e374ef75c29e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ManagementRoleEntry

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-ManagementRoleEntry** cmdlet to change the available parameters on an existing management role entry.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ManagementRoleEntry -Identity <RoleEntryIdParameter> [-AddParameter <SwitchParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-Parameters <String[]>] [-RemoveParameter <SwitchParameter>] [-UnScopedTopLevel <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the _Anr_ and _Database_ parameters from the **Get-Mailbox** role entry on the Help Desk Personnel role.
  
```
Set-ManagementRoleEntry "Help Desk Personnel\Get-Mailbox" -Parameters Anr, Database -RemoveParameter
```

### Example 2

This example retrieves a list of role entries on the Help Desk Personnel role and adds the _WhatIf_ switch to each role entry using the **Set-ManagementRoleEntry** cmdlet.
  
```
Get-ManagementRoleEntry "Help Desk Personnel\*" | Set-ManagementRoleEntry -Parameters WhatIf -AddParameter
```

### Example 3

This example adds the _DisplayName_ and _ForwardingAddress_ parameters to the **Set-Mailbox** role entry on the Tier 1 Help Desk role and removes all other parameters from the role entry.
  
```
Set-ManagementRoleEntry "Tier 1 Help Desk\Set-Mailbox" -Parameters DisplayName, ForwardingAddress
```

### Example 4

This example adds the _Location_ parameter to the `MailboxAudit` custom script on the IT Scripts unscoped top level role.
  
```
Set-ManagementRoleEntry "IT Scripts\MailboxAudit" -Parameters Location -AddParameter -UnScopedTopLevel
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-ManagementRoleEntry** cmdlet changes the available parameters on an existing role entry. If you want to add parameters to a role entry, the parameters must exist in the role entry in the parent management role. If you want to remove parameters from a role entry, there can be no role entries in child roles that inherit those parameters from the role entry you want to change. You can't change role entries associated with built-in roles.
  
For more information about management role entries, see [Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleEntryIdParameter  <br/> |The _Identity_ parameter specifies the role entry to change. You must specify the value of the _Identity_ parameter in the format, < _management role_>\< _role entry name_>, for example, ExampleRole\Set-Mailbox.  <br/> For more information about how management role entries work, see [Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).  <br/> If the role entry name contains spaces, enclose it in quotation marks (").  <br/> |
| _AddParameter_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AddParameter_ parameter adds the specified parameters to the specified role entry. Use the _Parameters_ parameter to specify the parameters to add. You can't use the _AddParameter_ parameter in the same command as the _RemoveParameter_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Parameters_ <br/> |Optional  <br/> |System.String[]  <br/> | The _Parameters_ parameter specifies the parameters to be added to or removed from the role entry. <br/>  The _Parameters_ parameter has the following modes: <br/>  When used with the _AddParameter_ parameter, the parameters you specify are added to the role entry. <br/>  When used with the _RemoveParameter_ parameter, the parameters you specify are removed from the role entry. <br/>  When neither the _AddParameter_ nor _RemoveParameter_ parameters are used, only the parameters you specify are included in the role entry. If you specify a value of `$Null` and neither the _AddParameter_ nor _RemoveParameter_ parameters are used, all of the parameters on the role entry are removed. <br/>  You can specify multiple parameters, separated with commas. <br/> |
| _RemoveParameter_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _RemoveParameter_ parameter removes the specified parameters from the specified role entry. Use the _Parameters_ parameter to specify the parameters to remove. You can't use the _RemoveParameter_ parameter in the same command as the _AddParameter_ parameter. <br/> |
| _UnScopedTopLevel_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UnScopedTopLevel_ switch must be used when you want to modify a role entry on an unscoped top level role. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

