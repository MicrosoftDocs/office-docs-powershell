---
title: "New-ManagementRoleAssignment"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 34d4f2e3-f2c5-49e1-a6a9-1366da65a78c

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-ManagementRoleAssignment

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-ManagementRoleAssignment** cmdlet to assign a management role to a management role group, management role assignment policy, user, or universal security group (USG).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ManagementRoleAssignment -User <UserIdParameter> [-Delegating <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example assigns the Mail Recipients role to the Tier 2 Help Desk role group.
  
```
New-ManagementRoleAssignment -Role "Mail Recipients" -SecurityGroup "Tier 2 Help Desk"
```

### Example 2

This example assigns the MyVoiceMail role to the "Sales end-users" role assignment policy. First, the **IsEndUserRole** property on the MyVoiceMail role is verified to be sure it's set to `$true`, indicating it's an end-user role.
  
After the role has been verified to be an end-user role, the role is assigned to the "Sales end-users" role assignment policy.
  
```
Get-ManagementRole "MyVoiceMail" | Format-Table Name, IsEndUserRole; New-ManagementRoleAssignment -Role "MyVoiceMail" -Policy "Sales end-users"
```

### Example 3

This example assigns the Eng Help Desk role to the Eng HD Personnel role group. The assignment restricts the recipient write scope of the role to the contoso.com/Engineering/Users OU. Users who are members of the Eng HD Personnel role group can only create, modify, or remove objects contained within that OU.
  
```
New-ManagementRoleAssignment -Role "Eng Help Desk" -SecurityGroup "Eng HD Personnel" -RecipientOrganizationalUnitScope contoso.com/Engineering/Users
```

### Example 4

This example assigns the Distribution Groups role to the North America Exec Assistants role group. The assignment restricts the recipient write scope of the role to the scope specified in the North America Recipients custom recipient management scope. Users who are members of the North America Exec Assistants role group can only create, modify, or remove distribution group objects that match the specified custom recipient management scope.
  
```
New-ManagementRoleAssignment -Role "Distribution Groups" -SecurityGroup "North America Exec Assistants" -CustomRecipientWriteScope "North America Recipients"
```

### Example 5

This example assigns the Exchange Servers role to John. Because John should only manage the servers running Exchange located in Sydney, the role assignment restricts the configuration write scope of the role to the scope specified in the Sydney Servers custom configuration role group. John can only manage servers that match the specified custom configuration management scope.
  
```
New-ManagementRoleAssignment -Name "Exchange Servers_John" -Role "Exchange Servers" -User John -CustomConfigWriteScope "Sydney Servers"
```

### Example 6

This example assigns the Mail Recipients role to the Executive Administrators role group. The assignment restricts the recipient write scope of the role to the scope specified in the Exclusive-Executive Recipients exclusive recipient management scope. Because the Exclusive-Executive Recipients scope is an exclusive scope, only users of the Executive Administrators can manage the executive recipients that match the exclusive recipient scope. No other users, unless they're also assigned an assignment that uses an exclusive scope that matches the same users, can modify the executive recipients.
  
```
New-ManagementRoleAssignment -Name "Excl-Mail Recipients_Executive Administrators" -Role "Mail Recipients" -SecurityGroup "Executive Administrators" -ExclusiveRecipientWriteScope "Exclusive-Executive Recipients"
```

### Example 7

This example assigns the Mail Recipients role to the Contoso Sub - Seattle role group. The administrators in this role group should only be allowed to create and manage mail recipients in specific databases that have been allocated for use by the Contoso subsidiary, A. Datum Corporation (adatum.com). Also, this group of administrators should only be allowed to manage the Contoso employees located in the Seattle office. This is done by creating a role assignment with both a database scope, to limit management of mail recipients to only the databases in the database scope, and a recipient OU scope, to limit access to only the recipient objects within the Contoso Seattle OU.
  
```
New-ManagementRoleAssignment -Name "Mail Recipients_Contoso Seattle" -Role "Mail Recipients" -SecurityGroup "Contoso Sub - Seattle" -CustomConfigWriteScope "Contoso Databases" -RecipientOrganizationalUnitScope adatum.com/Contoso/Seattle/Users 
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you add a new role assignment, you can specify a built-in or custom role that was created using the **New-ManagementRole** cmdlet and specify an organizational unit (OU) or predefined or custom management scope to restrict the assignment.
  
You can create custom management scopes using the **New-ManagementScope** cmdlet and can view a list of existing scopes using the **Get-ManagementScope** cmdlet. If you choose not to specify an OU, or predefined or custom scope, the implicit write scope of the role applies to the role assignment.
  
For more information about management role assignments, see [Understanding Management Role Assignments](https://technet.microsoft.com/library/1dc33dd6-52fb-4852-a5ce-027bc73e1d8f.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Computer_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ComputerIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Computer_ parameter specifies the name of the computer to assign the management role to. <br/> If you specify the _Computer_ parameter, you can't specify the _SecurityGroup_, _User_, or _Policy_ parameters. <br/> |
| _Policy_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _Policy_ parameter specifies the name of the management role assignment policy to assign the management role to. <br/> The **IsEndUserRole** property of the role you specify using the _Role_ parameter must be set to `$true`.  <br/> If you specify the _Policy_ parameter, you can't specify the _SecurityGroup_, _Computer_, or _User_ parameters. If the policy name contains spaces, enclose the name in quotation marks ("). <br/> |
| _Role_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter  <br/> |The _Role_ parameter specifies the existing role to assign. If the role name contains spaces, enclose the name in quotation marks ("). <br/> |
| _SecurityGroup_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityGroupIdParameter  <br/> |The _SecurityGroup_ parameter specifies the name of the management role group or universal USG to assign the management role to. <br/> If you specify the _SecurityGroup_ parameter, you can't specify the _Policy_, _Computer_, or _User_ parameters. If the role group or USG name contains spaces, enclose the name in quotation marks ("). <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> |The _User_ parameter specifies the name or alias of the user to assign the management role to. <br/> If you specify the _User_ parameter, you can't specify the _SecurityGroup_, _Computer_, or _Policy_ parameters. If the value contains spaces, enclose the name in quotation marks ("). <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CustomConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _CustomConfigWriteScope_ parameter specifies the existing configuration scope to associate with this management role assignment. If you use the _CustomConfigWriteScope_ parameter you can't use the _ExclusiveConfigWriteScope_ parameter. If the management scope name contains spaces, enclose the name in quotation marks ("). <br/> |
| _CustomRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The _CustomRecipientWriteScope_ parameter specifies the existing recipient-based management scope to associate with this management role assignment. If the management scope name contains spaces, enclose the name in quotation marks ("). If you use the _CustomRecipientWriteScope_ parameter, you can't use the _RecipientOrganizationalUnitScope_ or _ExclusiveRecipientWriteScope_ parameters. <br/> |
| _Delegating_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Delegating_ parameter specifies whether the user or USG assigned to the role can delegate the role to other users or groups. You don't have to specify a value with the _Delegating_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExclusiveConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ExclusiveConfigWriteScope_ parameter specifies the exclusive configuration-based management scope to associate with the new role assignment. If you use the _ExclusiveConfigWriteScope_ parameter, you can't use the _CustomConfigWriteScope_ parameter. If the scope name contains spaces, enclose the name in quotation marks ("). <br/> |
| _ExclusiveRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The _ExclusiveRecipientWriteScope_ parameter specifies the exclusive recipient-based management scope to associate with the new role assignment. If you use the _ExclusiveRecipientWriteScope_ parameter, you can't use the _CustomRecipientWriteScope_ or _RecipientOrganizationalUnitScope_ parameters. If the scope name contains spaces, enclose the name in quotation marks ("). <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the new management role assignment. The maximum length of the name is 64 characters. If the management role assignment name contains spaces, enclose the name in quotation marks ("). If you don't specify a name, one will be created automatically. <br/> |
| _RecipientAdministrativeUnitScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdministrativeUnitIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _RecipientAdministrativeUnitScope_parameter specifies the administrative unit to scope the new role assignment to.  <br/> Administrative units are Azure Active Directory containers of resources. You can view the available administrative units by using the **Get-AdministrativeUnit** cmdlet. <br/> |
| _RecipientOrganizationalUnitScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The _RecipientOrganizationalUnitScope_ parameter specifies the OU to scope the new role assignment to. If you use the _RecipientOrganizationalUnitScope_ parameter, you can't use the _CustomRecipientWriteScope_ or _ExclusiveRecipientWriteScope_ parameters. To specify an OU, use the syntax: _domain/ou_. If the OU name contains spaces, enclose the domain and OU in quotation marks (").  <br/> |
| _RecipientRelativeWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.RecipientWriteScopeType  <br/> |The _RecipientRelativeWriteScope_ parameter specifies the type of restriction to apply to a recipient scope. The available types are `None`,  `Organization`,  `MyGAL`,  `Self`, and ` MyDistributionGroups`. The _RecipientRelativeWriteScope_ parameter is automatically set when the _CustomRecipientWriteScope_ or _RecipientOrganizationalUnitScope_ parameters are used. <br/> > [!NOTE]> Even though the  `NotApplicable`,  `OU`,  `MyDirectReports`,  `CustomRecipientScope`,  `MyExecutive`,  `MailboxICanDelegate` and `ExclusiveRecipientScope` values appear in the syntax block for this parameter, they can't be used directly on the command line. They are used internally by the cmdlet.          |
| _UnScopedTopLevel_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _UnScopedTopLevel_ switch specifies that the role provided with the _Role_ parameter is an unscoped top level management role. You can only create a role assignment using the _UnScopedTopLevel_ switch if the role specified using the _Role_ parameter is an unscoped top level role. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

