---
title: "Remove-ManagementRoleEntry"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: dcd62514-a541-4385-859a-c8503a33d2e5
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-ManagementRoleEntry

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-ManagementRoleEntry** cmdlet to remove existing management role entries.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-ManagementRoleEntry -Identity <RoleEntryIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the **New-Mailbox** role entry from the Tier 1 Help Desk role.
  
```
Remove-ManagementRoleEntry "Tier 1 Help Desk\New-Mailbox"
```

### Example 2

This example removes all the role entries that have the verb  `New` on the Tier 1 Help Desk role by piping the output of the **Get-ManagementRoleEntry** cmdlet to the **Remove-ManagementRoleEntry** cmdlet. Because the _WhatIf_ switch has been specified along with the **Remove-ManagementRoleEntry** cmdlet, the cmdlet lists what changes would have been made but doesn't commit any changes.
  
```
Get-ManagementRoleEntry "Tier 1 Help Desk\New-*" | Remove-ManagementRoleEntry -WhatIf
```

After you verify that the correct role entries will be removed, run the same command without the  _WhatIf_ switch to remove the role entries.
  
## Detailed Description
<a name="DetailedDescription"> </a>

The **Remove-ManagementRoleEntry** cmdlet removes existing role entries. However, you can't remove role entries from built-in management roles.
  
For more information about management role entries, see [Understanding Management Roles](http://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleEntryIdParameter  <br/> |The  _Identity_ parameter specifies the role entry to remove. You must specify the value of the _Identity_ parameter in the format, < _management role_>\< _role entry name_>, for example,  _ExampleRole\Set-Mailbox_.  <br/> For more information about how management role entries work, see [Understanding Management Roles](http://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).  <br/> If the role entry name contains spaces, enclose the name in quotation marks (").  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

