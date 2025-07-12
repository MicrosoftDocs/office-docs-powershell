---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-managementroleassignment
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: New-ManagementRoleAssignment
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-ManagementRoleAssignment

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ManagementRoleAssignment cmdlet to assign a management role to a management role group, management role assignment policy, user, or universal security group (USG).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### App
```
New-ManagementRoleAssignment [[-Name] <String>] -Role <RoleIdParameter> -App <ServicePrincipalIdParameter> [-CustomResourceScope <ManagementScopeIdParameter>]
 [-Confirm]
 [-Delegating]
 [-Force]
 [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [-RecipientGroupScope <GroupIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Computer
```
New-ManagementRoleAssignment [[-Name] <String>] -Computer <ComputerIdParameter> -Role <RoleIdParameter>
 [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>]
 [-Force]
 [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [-RecipientGroupScope <GroupIdParameter>]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <RecipientWriteScopeType>]
 [-UnScopedTopLevel]
 [-WhatIf]
 [<CommonParameters>]
```

### Policy
```
New-ManagementRoleAssignment [[-Name] <String>] -Policy <MailboxPolicyIdParameter> -Role <RoleIdParameter>
 [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>]
 [-Force]
 [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [-RecipientGroupScope <GroupIdParameter>]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <RecipientWriteScopeType>]
 [-UnScopedTopLevel]
 [-WhatIf]
 [<CommonParameters>]
```

### SecurityGroup
```
New-ManagementRoleAssignment [[-Name] <String>] -Role <RoleIdParameter> -SecurityGroup <SecurityGroupIdParameter>
 [-Delegating]
 [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>]
 [-Force]
 [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [-RecipientGroupScope <GroupIdParameter>]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <RecipientWriteScopeType>]
 [-UnScopedTopLevel]
 [-WhatIf]
 [<CommonParameters>]
```

### User
```
New-ManagementRoleAssignment [[-Name] <String>] -Role <RoleIdParameter> -User <UserIdParameter>
 [-Delegating]
 [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>]
 [-Force]
 [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [-RecipientGroupScope <GroupIdParameter>]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <RecipientWriteScopeType>]
 [-UnScopedTopLevel]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When you add a new role assignment, you can specify a built-in or custom role that was created using the New-ManagementRole cmdlet and specify an organizational unit (OU) or predefined or custom management scope to restrict the assignment.

You can create custom management scopes using the New-ManagementScope cmdlet and can view a list of existing scopes using the Get-ManagementScope cmdlet. If you choose not to specify an OU, or predefined or custom scope, the implicit write scope of the role applies to the role assignment.

For more information about management role assignments, see [Understanding management role assignments](https://learn.microsoft.com/exchange/understanding-management-role-assignments-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ManagementRoleAssignment -Role "Mail Recipients" -SecurityGroup "Tier 2 Help Desk"
```

This example assigns the Mail Recipients role to the Tier 2 Help Desk role group.

### Example 2
```powershell
Get-ManagementRole "MyVoiceMail" | Format-Table Name, IsEndUserRole

New-ManagementRoleAssignment -Role "MyVoiceMail" -Policy "Sales end-users"
```

This example assigns the MyVoiceMail role to the "Sales end-users" role assignment policy. First, the IsEndUserRole property on the MyVoiceMail role is verified to be sure it's set to $true, indicating it's an end-user role.

After the role has been verified to be an end-user role, the role is assigned to the "Sales end-users" role assignment policy.

### Example 3
```powershell
New-ManagementRoleAssignment -Role "Eng Help Desk" -SecurityGroup "Eng HD Personnel" -RecipientOrganizationalUnitScope contoso.com/Engineering/Users
```

This example assigns the Eng Help Desk role to the Eng HD Personnel role group. The assignment restricts the recipient write scope of the role to the contoso.com/Engineering/Users OU. Users who are members of the Eng HD Personnel role group can only create, modify, or remove objects contained within that OU.

### Example 4
```powershell
New-ManagementRoleAssignment -Role "Distribution Groups" -SecurityGroup "North America Exec Assistants" -CustomRecipientWriteScope "North America Recipients"
```

This example assigns the Distribution Groups role to the North America Exec Assistants role group. The assignment restricts the recipient write scope of the role to the scope specified in the North America Recipients custom recipient management scope. Users who are members of the North America Exec Assistants role group can only create, modify, or remove distribution group objects that match the specified custom recipient management scope.

### Example 5
```powershell
New-ManagementRoleAssignment -Name "Exchange Servers_John" -Role "Exchange Servers" -User John -CustomConfigWriteScope "Sydney Servers"
```

This example assigns the Exchange Servers role to John. Because John should only manage the servers running Exchange located in Sydney, the role assignment restricts the configuration write scope of the role to the scope specified in the Sydney Servers custom configuration role group. John can only manage servers that match the specified custom configuration management scope.

### Example 6
```powershell
New-ManagementRoleAssignment -Name "Excl-Mail Recipients_Executive Administrators" -Role "Mail Recipients" -SecurityGroup "Executive Administrators" -ExclusiveRecipientWriteScope "Exclusive-Executive Recipients"
```

This example assigns the Mail Recipients role to the Executive Administrators role group. The assignment restricts the recipient write scope of the role to the scope specified in the Exclusive-Executive Recipients exclusive recipient management scope. Because the Exclusive-Executive Recipients scope is an exclusive scope, only users of the Executive Administrators can manage the executive recipients that match the exclusive recipient scope. No other users, unless they're also assigned an assignment that uses an exclusive scope that matches the same users, can modify the executive recipients.

### Example 7
```powershell
New-ManagementRoleAssignment -Name "Mail Recipients_Contoso Seattle" -Role "Mail Recipients" -SecurityGroup "Contoso Sub - Seattle" -CustomConfigWriteScope "Contoso Databases" -RecipientOrganizationalUnitScope adatum.com/Contoso/Seattle/Users
```

This example assigns the Mail Recipients role to the Contoso Sub - Seattle role group. The administrators in this role group should only be allowed to create and manage mail recipients in specific databases that have been allocated for use by the Contoso subsidiary, A. Datum Corporation (adatum.com). Also, this group of administrators should only be allowed to manage the Contoso employees located in the Seattle office. This is done by creating a role assignment with both a database scope, to limit management of mail recipients to only the databases in the database scope and a recipient OU scope, to limit access to only the recipient objects within the Contoso Seattle OU.

## PARAMETERS

### -Name
The Name parameter specifies a name for the new management role assignment. The maximum length of the name is 64 characters. If the management role assignment name contains spaces, enclose the name in quotation marks ("). If you don't specify a name, one will be created automatically.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -App
This parameter is available only in the cloud-based service.

The App parameter specifies the service principal to assign the management role to. Specifically, the ObjectId GUID value from the output of the Get-ServicePrincipal cmdlet (for example, 6233fba6-0198-4277-892f-9275bf728bcc).

For more information about service principals, see [Application and service principal objects in Microsoft Entra ID](https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals).

You can't use this parameter with the SecurityGroup, Policy, or User cmdlets.

```yaml
Type: ServicePrincipalIdParameter
Parameter Sets: App
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Computer
This parameter is available only in on-premises Exchange.

The Computer parameter specifies the name of the computer to assign the management role to.

You can't use this parameter with the SecurityGroup, User, or Policy parameters.

```yaml
Type: ComputerIdParameter
Parameter Sets: Computer
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the name of the management role assignment policy to assign the management role to. If the value contains spaces, enclose the value in quotation marks (").

The IsEndUserRole property of the role you specify using the Role parameter must be set to $true.

You can't use this parameter with the App, SecurityGroup, Computer, or User parameters.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Policy
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
The Role parameter specifies the existing role to assign. You can use any value that uniquely identifies the role. For example:

- Name
- Distinguished name (DN)
- GUID

If the value contains spaces, enclose the value in quotation marks (").

If you use the App parameter, you can't specify admin or user roles; you can only specify application roles (for example, "Application Mail.Read").

```yaml
Type: RoleIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SecurityGroup
The SecurityGroup parameter specifies the name of the management role group or mail-enabled universal security group to assign the management role to. If the value contains spaces, enclose the value in quotation marks (").

You can't use this parameter with the App, Policy, Computer, or User parameters.

```yaml
Type: SecurityGroupIdParameter
Parameter Sets: SecurityGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the user to assign the management role to.

For the best results, we recommend using the following values:

- UPN: For example, `user@contoso.com` (users only).
- Domain\\SamAccountName: For example, `contoso\user`.

You can't use this parameter with the App, SecurityGroup, Computer, or Policy parameters.

```yaml
Type: UserIdParameter
Parameter Sets: User
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomConfigWriteScope
This parameter is available only in on-premises Exchange.

The CustomConfigWriteScope parameter specifies the existing configuration scope to associate with this management role assignment. If you use the CustomConfigWriteScope parameter you can't use the ExclusiveConfigWriteScope parameter. If the management scope name contains spaces, enclose the name in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomRecipientWriteScope
The CustomRecipientWriteScope parameter specifies the existing recipient-based management scope to associate with this management role assignment. If the management scope name contains spaces, enclose the name in quotation marks ("). If you use the CustomRecipientWriteScope parameter, you can't use the RecipientOrganizationalUnitScope or ExclusiveRecipientWriteScope parameters.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomResourceScope
This parameter is available only in the cloud-based service.

The CustomResourceScope parameter specifies the custom management scope to associate with this management role assignment. You can use any value that uniquely identifies the management scope. For example:

- Name
- Distinguished name (DN)
- GUID

If the value contains spaces, enclose the value in quotation marks (").

You use this parameter with the App parameter to assign permissions to service principals. For more information, see For more information about service principals, see [Application and service principal objects in Microsoft Entra ID](https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals).

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: App
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Delegating
The Delegating switch specifies whether the user or USG assigned to the role can delegate the role to other users or groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: SecurityGroup, User, App
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusiveConfigWriteScope
This parameter is available only in on-premises Exchange.

The ExclusiveConfigWriteScope parameter specifies the exclusive configuration-based management scope to associate with the new role assignment. If you use the ExclusiveConfigWriteScope parameter, you can't use the CustomConfigWriteScope parameter. If the scope name contains spaces, enclose the name in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusiveRecipientWriteScope
The ExclusiveRecipientWriteScope parameter specifies the exclusive recipient-based management scope to associate with the new role assignment. If you use the ExclusiveRecipientWriteScope parameter, you can't use the CustomRecipientWriteScope or RecipientOrganizationalUnitScope parameters. If the scope name contains spaces, enclose the name in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This parameter is available only in the cloud-based service.

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAdministrativeUnitScope
This parameter is functional only in the cloud-based service.

The RecipientAdministrativeUnitScope parameter specifies the administrative unit to scope the new role assignment to.

Administrative units are Microsoft Entra containers of resources. You can view the available administrative units by using the Get-AdministrativeUnit cmdlet.

```yaml
Type: AdministrativeUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientGroupScope
This parameter is available only in the cloud-based service.

The RecipientGroupScope parameter specifies a group to consider for scoping the role assignment. Individual members of the specified group (not nested groups) are considered as in scope for the assignment. You can use any value that uniquely identifies the group: Name, DistinguishedName, GUID, or DisplayName.

```yaml
Type: GroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientOrganizationalUnitScope
The RecipientOrganizationalUnitScope parameter specifies the OU to scope the new role assignment to. If you use the RecipientOrganizationalUnitScope parameter, you can't use the CustomRecipientWriteScope or ExclusiveRecipientWriteScope parameters. To specify an OU, use the syntax: domain/ou. If the OU name contains spaces, enclose the domain and OU in quotation marks (").

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRelativeWriteScope
The RecipientRelativeWriteScope parameter specifies the type of restriction to apply to a recipient scope. The available types are None, Organization, MyGAL, Self, and MyDistributionGroups. The RecipientRelativeWriteScope parameter is automatically set when the CustomRecipientWriteScope or RecipientOrganizationalUnitScope parameters are used.

Even though the NotApplicable, OU, MyDirectReports, CustomRecipientScope, MyExecutive, MailboxICanDelegate and ExclusiveRecipientScope values appear in the syntax block for this parameter, they can't be used directly on the command line. They are used internally by the cmdlet.

```yaml
Type: RecipientWriteScopeType
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnScopedTopLevel
This parameter is available only in on-premises Exchange.

By default, this parameter is available only in the UnScoped Role Management role, and that role isn't assigned to any role groups. To use this parameter, you need to add the UnScoped Role Management role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

The UnScopedTopLevel switch specifies that the role provided with the Role parameter is an unscoped top-level management role. You don't need to specify a value with this switch.

Unscoped top-level management roles can only contain custom scripts or non-Exchange cmdlets. For more information, see [Create an unscoped role](https://learn.microsoft.com/exchange/create-an-unscoped-role-exchange-2013-help).

```yaml
Type: SwitchParameter
Parameter Sets: Computer, Policy, SecurityGroup, User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
