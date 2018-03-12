---
title: "Set-ManagementRoleAssignment"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 2e0659f9-dfb6-4d91-93fb-35a6a7f8a449

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ManagementRoleAssignment

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-ManagementRoleAssignment** cmdlet to modify existing management role assignments.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ManagementRoleAssignment [-CustomConfigWriteScope <ManagementScopeIdParameter>] [-RecipientRelativeWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate | AdministrativeUnit>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables the Mail Recipients_Denver Help Desk role assignment. When a role assignment is disabled, the users assigned the role can no longer run cmdlets granted by the role.
  
```
Set-ManagementRoleAssignment "Mail Recipients_Denver Help Desk" -Enabled $false
```

### Example 2

This example changes the recipient scope for the MyGAL_KimA role assignment to  `MyGAL`. When the recipient scope is changed to a predefined value, any previously defined OUs or custom scopes are overwritten.
  
```
Set-ManagementRoleAssignment "MyGAL_KimA" -RecipientRelativeWriteScope MyGAL
```

### Example 3

This example restricts the Mail Recipients_Marketing Admins role assignment to the contoso.com/North America/Marketing/Users OU. Users who are members of the Marketing Admins role group assigned the role assignment can create, modify, and remove objects only in the specified OU. When the  _RecipientOrganizationalUnitScope_ parameter is used, any predefined or custom scopes on the role assignment are overwritten.
  
```
Set-ManagementRoleAssignment "Mail Recipients_Marketing Admins" -RecipientOrganizationalUnitScope "contoso.com/North America/Marketing/Users"
```

### Example 4

This example restricts the Distribution Groups_Cairns Admins role assignment using the Cairns Recipients custom recipient management scope. Users that are members of the Cairns Admins role group assigned the role assignment can create, modify, and remove only the distribution group objects that match the Cairns Recipients custom recipient management scope.
  
```
Set-ManagementRoleAssignment "Distribution Groups_Cairns Admins" -CustomRecipientWriteScope "Cairns Recipients"
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you modify a role assignment, you can specify a new predefined or custom management scope or provide an organizational unit (OU) to scope the existing role assignment.
  
You can create custom management scopes using the **New-ManagementScope** cmdlet and can view a list of existing scopes using the **Get-ManagementScope** cmdlet. If you choose not to specify an OU, predefined scope, or custom scope, the implicit write scope of the role applies to the role assignment.
  
For more information about management role assignments, see [Understanding Management Role Assignments](http://technet.microsoft.com/library/1dc33dd6-52fb-4852-a5ce-027bc73e1d8f.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleAssignmentIdParameter  <br/> |The  _Identity_ parameter specifies the name of the management role assignment to modify. If the name of the management role contains spaces, enclose it in quotation marks ("). <br/> |
| _RecipientAdministrativeUnitScope_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AdministrativeUnitIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RecipientAdministrativeUnitScope_parameter specifies the administrative unit to scope the role assignment to.  <br/> Administrative units are Azure Active Directory containers of resources. You can view the available administrative units by using the **Get-AdministrativeUnit** cmdlet. <br/> You can't use this parameter with any of the other scope parameters.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CustomConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _CustomConfigWriteScope_ parameter specifies the existing configuration management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks ("). <br/> If you use the  _CustomConfigWriteScope_ parameter, you can't use the _ExclusiveConfigWriteScope_ parameter. <br/> To remove a scope, specify a value of  `$null`.  <br/> |
| _CustomRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The  _CustomRecipientWriteScope_ parameter specifies the existing recipient-based management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks ("). <br/> If you use the  _CustomRecipientWriteScope_ parameter, you can't use the _RecipientOrganizationalUnitScope_,  _RecipientRelativeWriteScope_, or  _ExclusiveRecipientWriteScope_ parameters, and any configured OU or predefined scope on the role assignment is overwritten. <br/> To remove a scope, specify a value of  `$null`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter specifies whether the management role assignment is enabled or disabled. The valid values are `$true` and `$false`.  <br/> |
| _ExclusiveConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ExclusiveConfigWriteScope_ parameter specifies the existing configuration exclusive management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks ("). <br/> If you use the  _ExclusiveConfigWriteScope_ parameter, you can't use the _CustomConfigWriteScope_ parameter. <br/> To remove a scope, specify a value of  `$null`.  <br/> |
| _ExclusiveRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The  _ExclusiveRecipientWriteScope_ parameter specifies the existing recipient-based exclusive management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks ("). <br/> If you use the  _ExclusiveRecipientWriteScope_ parameter, you can't use the _CustomRecipientWriteScope_,  _RecipientOrganizationalUnitScope_, or  _RecipientRelativeWriteScope_ parameters, and any configured OU or predefined scope on the role assignment is overwritten. <br/> To remove a scope, specify a value of  `$null`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _RecipientOrganizationalUnitScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The  _RecipientOrganizationalUnitScope_ parameter specifies the OU to scope the new role assignment to. If the OU name contains spaces, enclose the domain and OU in quotation marks ("). <br/> If you use the  _RecipientOrganizationalUnitScope_ parameter, you can't use the _CustomRecipientWriteScope_,  _ExclusiveRecipientWriteScope_, or  _RecipientRelativeWriteScope_ parameters, and any predefined scopes or custom scopes on the role assignment are overwritten. <br/> To specify an OU, use the syntax:  _domain/ou_. To remove an OU, specify a value of  `$null`.  <br/> |
| _RecipientRelativeWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.RecipientWriteScopeType  <br/> |The  _RecipientRelativeWriteScope_ parameter specifies the type of restriction to apply to a recipient scope. <br/> If you use the  _RecipientRelativeWriteScope_ parameter, you can't use the _CustomRecipientWriteScope_,  _ExclusiveRecipientWriteScope_, or  _RecipientOrganizationalUnitScope_ parameters. <br/> The available types are:  `None`,  `Organization`,  `MyGAL`,  `Self`, and  `MyDistributionGroups`. If you specify a predefined scope, any custom scope or configured OU on the role assignment is overwritten.  <br/> > [!NOTE]> Even though the  `NotApplicable`,  `OU`,  `MyDirectReports`,  `CustomRecipientScope`,  `MyExecutive`,  `MailboxICanDelegate`, and  `ExclusiveRecipientScope` values appear in the syntax block for this parameter, they can't be used directly on the command line. They're used internally by the cmdlet.          |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

