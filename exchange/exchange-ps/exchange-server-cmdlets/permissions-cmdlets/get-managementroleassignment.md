---
title: "Get-ManagementRoleAssignment"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a3a6ee46-061b-444a-8639-43a416309445
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ManagementRoleAssignment

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ManagementRoleAssignment** cmdlet to retrieve management role assignments.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ManagementRoleAssignment [-Identity <RoleAssignmentIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the Denver Help Desk role assignment using the **Get-ManagementRoleAssignment** cmdlet and pipes the output to the **Format-List** cmdlet. For more information about the **Format-List** cmdlet, see[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
```
Get-ManagementRoleAssignment "Denver Help Desk" | Format-List
```

### Example 2

This example retrieves all the role assignments that are enabled and have been designated as delegating role assignments.
  
```
Get-ManagementRoleAssignment -Enabled $true -Delegating $true
```

### Example 3

This example retrieves all the role assignments that include the  `MyGAL` recipient-based scope restriction type.
  
```
Get-ManagementRoleAssignment -RecipientWriteScope MyGAL
```

### Example 4

This example retrieves all the role assignments associated with the Mail Recipients management role.
  
```
Get-ManagementRoleAssignment -Role "Mail Recipients"
```

### Example 5

This example retrieves a list of all the users and the role assignments that can modify the recipient Bob.
  
```
Get-ManagementRoleAssignment -WritableRecipient Bob -GetEffectiveUsers
```

### Example 6

This example retrieves a list of all exclusive scopes that can modify server objects that match Redmond Executive Servers. The command also lists the users who are effectively assigned the role assignments through role groups or USGs.
  
```
Get-ManagementRoleAssignment -ExclusiveConfigWriteScope "Redmond Executive Servers" -GetEffectiveUsers
```

### Example 7

This example retrieves all the role assignments that can modify the database Contoso Sales.
  
```
Get-ManagementRoleAssignment -WritableDatabase "Contoso Sales"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can retrieve role assignments in a variety of ways including by assignment type, scope type, or name, and whether the assignment is enabled or disabled. You can also view a list of role assignments that provide access to a specified recipient, server, or database.
  
For more information about management role assignments, see [Understanding Management Role Assignments](https://technet.microsoft.com/library/1dc33dd6-52fb-4852-a5ce-027bc73e1d8f.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AssignmentMethod_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AssignmentMethod[]  <br/> | The _AssignmentMethod_ parameter specifies the type of role assignment to include in the results returned by the cmdlet. You can specify one or more of the following values: <br/>  `Direct` <br/>  `SecurityGroup` <br/>  `RoleGroup` <br/>  `RoleAssignmentPolicy` <br/>  If you provide more than one value, separate each value with a comma. <br/>  You must specify a value with the _RoleAssignee_ parameter if you use the _AssignmentMethod_ parameter. <br/> |
| _ConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ConfigWriteScopeType  <br/> |The _ConfigWriteScope_ parameter specifies the type of management configuration scope to include in the results returned by the cmdlet. The valid values are `None`,  `OrganizationConfig`,  `CustomConfigScope`, and  `ExclusiveConfigScope`.  <br/> |
| _CustomConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _CustomConfigWriteScope_ parameter returns only the regular role assignments that include the specified configuration-based regular scope. <br/> This parameter can only be used to retrieve regular configuration-based scopes. To retrieve a list of exclusive configuration-based scopes, use the _ExclusiveConfigWriteScope_ parameter instead. <br/> If the scope name contains spaces, enclose it in quotation marks (").  <br/> |
| _CustomRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The _CustomRecipientWriteScope_ parameter returns only the regular role assignments that include the specified recipient-based regular scope. <br/> This parameter can only be used to retrieve regular recipient-based scopes. To retrieve a list of exclusive recipient-based scopes, use the _ExclusiveRecipientWriteScope_ parameter instead. <br/> If the scope name contains spaces, enclose it in quotation marks (").  <br/> |
| _Delegating_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Delegating_ parameter specifies whether delegating or regular role assignments should be returned. <br/> By default, both delegating and regular scopes are returned. To return only delegating role assignments, specify a value of  `$true`. To return only regular role assignments, specify a value of  `$false`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether enabled or disabled role assignments should be returned. To return enabled role assignments, specify a value of `$true`. To return disabled role assignments, specify a value of  `$false`.  <br/> |
| _Exclusive_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Exclusive_ parameter specifies whether exclusive or regular role assignments should be returned. <br/> By default, both exclusive and regular scopes are returned. To return only exclusive role assignments, specify a value of  `$true`. To return only regular role assignments, specify a value of  `$false`.  <br/> |
| _ExclusiveConfigWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ExclusiveConfigWriteScope_ parameter returns only the exclusive role assignments that include the specified configuration-based exclusive scope. <br/> This parameter can only be used to retrieve exclusive configuration-based scopes. To retrieve a list of regular configuration-based scopes, use the _CustomConfigWriteScope_ parameter instead. <br/> If the scope name contains spaces, enclose it in quotation marks (").  <br/> |
| _ExclusiveRecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The _ExclusiveRecipientWriteScope_ parameter returns only the exclusive role assignments that include the specified recipient-based exclusive scope. <br/> This parameter can only be used to retrieve exclusive recipient-based scopes. To retrieve a list of regular recipient-based scopes, use the _CustomRecipientWriteScope_ parameter instead. <br/> If the scope name contains spaces, enclose it in quotation marks (").  <br/> |
| _GetEffectiveUsers_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GetEffectiveUsers_ switch specifies that the command should show the list of users in the role groups, assignment policies, or USGs associated with a role assignment. The users are effectively assigned the role assignment through their role group, assignment policy, or USG. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleAssignmentIdParameter  <br/> |The _Identity_ parameter specifies the name of the role assignment to retrieve. If the name of the role assignment contains spaces, enclose it in quotation marks ("). If the _RoleAssignee_ parameter is used, you can't use the _Identity_ parameter. <br/> |
| _RecipientAdministrativeUnitScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdministrativeUnitIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _RecipientAdministrativeUnitScope_ parameter returns only the role assignments that include the specified administrative unit. <br/> Administrative units are Azure Active Directory containers of resources. You can view the available administrative units by using the **Get-AdministrativeUnit** cmdlet. <br/> |
| _RecipientOrganizationalUnitScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The _RecipientOrganizationalUnitScope_ parameter returns only the role assignments that include the specified organizational unit (OU). If the OU tree contains spaces, enclose it in quotation marks ("). <br/> |
| _RecipientWriteScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.RecipientWriteScopeType  <br/> |The _RecipientWriteScope_ parameter returns only the role assignments associated with the recipient scope restriction type specified. The valid values are `None`,  `MyGAL`,  `Self`,  `OU`,  `CustomRecipientScope`,  `MyDistributionGroups`, and  `ExclusiveRecipientScope`.  <br/> |
| _Role_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter  <br/> |The _Role_ parameter returns only the role assignments associated with the specified management role. If the name of the role contains spaces, enclose it in quotation marks ("). <br/> |
| _RoleAssignee_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleAssigneeIdParameter  <br/> |The _RoleAssignee_ parameter specifies the role group, assignment policy, user, or universal security group (USG) for which you want to view role assignments. If the _RoleAssignee_ parameter is used, you can't use the _Identity_ parameter. <br/> By default, the command returns both direct role assignments to the role assignee, and indirect role assignments granted to a role assignee through role groups or assignment policies.  <br/> If the name of the user or USG contains spaces, enclose it in quotation marks (").  <br/> |
| _RoleAssigneeType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.RoleAssigneeType  <br/> |The _RoleAssigneeType_ parameter specifies the type of role assignee to return. The valid values are `User`,  `SecurityGroup`,  `RoleAssignmentPolicy`,  `ForeignSecurityPrincipal`,  `RoleGroup`,  `LinkedRoleGroup`, and  `Computer`.  <br/> |
| _WritableDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _WritableDatabase_ parameter specifies the database object you want to test to determine which role assignments allow it to be modified. The command takes into account the roles and scopes associated with each role assignment. If the database name contains spaces, enclose it in quotation marks ("). <br/> If this parameter is used with the _GetEffectiveUsers_ switch, all the users who can modify the database object indirectly through role groups and USGs are also returned. Without the _GetEffectiveUsers_ switch, only the role groups, users, and USGs directly assigned the role assignment are returned. <br/> |
| _WritableRecipient_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralRecipientIdParameter  <br/> |The _WritableRecipient_ parameter specifies the recipient object you want to test to determine which role assignments allow it to be modified. The command takes into account the roles and scopes associated with each role assignment. If the recipient name contains spaces, enclose it in quotation marks ("). <br/> If this parameter is used with the _GetEffectiveUsers_ switch, all of the users who can modify the recipient object indirectly through role groups and USGs are also returned. Without the _GetEffectiveUsers_ switch, only the role groups, users, and USGs directly assigned the role assignment are returned. <br/> |
| _WritableServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _WritableServer_ parameter specifies the server object you want to test to determine which role assignments allow it to be modified. The command takes into account the roles and scopes associated with each role assignment. If the server object name contains spaces, enclose it in quotation marks ("). <br/> If this parameter is used with the _GetEffectiveUsers_ switch, all of the users who can modify the server object indirectly through role groups and USGs are also returned. Without the _GetEffectiveUsers_ switch, only the role groups, users, and USGs directly assigned the role assignment are returned. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

