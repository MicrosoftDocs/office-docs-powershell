---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# New-ManagementRoleAssignment

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ManagementRoleAssignment cmdlet to assign a management role to a management role group, management role assignment policy, user, or universal security group (USG).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set4
```
New-ManagementRoleAssignment [[-Name] <String>] -Computer <ComputerIdParameter> -Role <RoleIdParameter>
 [-Confirm] [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>] [-Force]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate>]
 [-UnScopedTopLevel] [-WhatIf] [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [<CommonParameters>]
```

### Set3
```
New-ManagementRoleAssignment [[-Name] <String>] -Policy <MailboxPolicyIdParameter> -Role <RoleIdParameter>
 [-Confirm] [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>] [-Force]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate>]
 [-UnScopedTopLevel] [-WhatIf] [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [<CommonParameters>]
```

### Set2
```
New-ManagementRoleAssignment [[-Name] <String>] -Role <RoleIdParameter>
 -SecurityGroup <SecurityGroupIdParameter> [-Confirm] [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-Delegating] [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>] [-Force]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate>]
 [-UnScopedTopLevel] [-WhatIf] [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [<CommonParameters>]
```

### Set1
```
New-ManagementRoleAssignment [[-Name] <String>] -Role <RoleIdParameter> -User <UserIdParameter> [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-Delegating] [-DomainController <Fqdn>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>] [-Force]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientRelativeWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate>]
 [-UnScopedTopLevel] [-WhatIf] [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
When you add a new role assignment, you can specify a built-in or custom role that was created using the New-ManagementRole cmdlet and specify an organizational unit (OU) or predefined or custom management scope to restrict the assignment.

You can create custom management scopes using the New-ManagementScope cmdlet and can view a list of existing scopes using the Get-ManagementScope cmdlet. If you choose not to specify an OU, or predefined or custom scope, the implicit write scope of the role applies to the role assignment.

For more information about management role assignments, see Understanding management role assignments.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-ManagementRoleAssignment -Role "Mail Recipients" -SecurityGroup "Tier 2 Help Desk"
```

This example assigns the Mail Recipients role to the Tier 2 Help Desk role group.

### Example 2
```
Get-ManagementRole "MyVoiceMail" | Format-Table Name, IsEndUserRole; New-ManagementRoleAssignment -Role "MyVoiceMail" -Policy "Sales end-users"
```

This example assigns the MyVoiceMail role to the "Sales end-users" role assignment policy. First, the IsEndUserRole property on the MyVoiceMail role is verified to be sure it's set to $true, indicating it's an end-user role.

After the role has been verified to be an end-user role, the role is assigned to the "Sales end-users" role assignment policy.

### Example 3
```
New-ManagementRoleAssignment -Role "Eng Help Desk" -SecurityGroup "Eng HD Personnel" -RecipientOrganizationalUnitScope contoso.com/Engineering/Users
```

This example assigns the Eng Help Desk role to the Eng HD Personnel role group. The assignment restricts the recipient write scope of the role to the contoso.com/Engineering/Users OU. Users who are members of the Eng HD Personnel role group can only create, modify, or remove objects contained within that OU.

### Example 4
```
New-ManagementRoleAssignment -Role "Distribution Groups" -SecurityGroup "North America Exec Assistants" -CustomRecipientWriteScope "North America Recipients"
```

This example assigns the Distribution Groups role to the North America Exec Assistants role group. The assignment restricts the recipient write scope of the role to the scope specified in the North America Recipients custom recipient management scope. Users who are members of the North America Exec Assistants role group can only create, modify, or remove distribution group objects that match the specified custom recipient management scope.

### Example 5
```
New-ManagementRoleAssignment -Name "Exchange Servers_John" -Role "Exchange Servers" -User John -CustomConfigWriteScope "Sydney Servers"
```

This example assigns the Exchange Servers role to John. Because John should only manage the servers running Exchange located in Sydney, the role assignment restricts the configuration write scope of the role to the scope specified in the Sydney Servers custom configuration role group. John can only manage servers that match the specified custom configuration management scope.

### Example 6
```
New-ManagementRoleAssignment -Name "Excl-Mail Recipients_Executive Administrators" -Role "Mail Recipients" -SecurityGroup "Executive Administrators" -ExclusiveRecipientWriteScope "Exclusive-Executive Recipients"
```

This example assigns the Mail Recipients role to the Executive Administrators role group. The assignment restricts the recipient write scope of the role to the scope specified in the Exclusive-Executive Recipients exclusive recipient management scope. Because the Exclusive-Executive Recipients scope is an exclusive scope, only users of the Executive Administrators can manage the executive recipients that match the exclusive recipient scope. No other users, unless they're also assigned an assignment that uses an exclusive scope that matches the same users, can modify the executive recipients.

### Example 7
```
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Computer
This parameter is available only in on-premises Exchange.

The Computer parameter specifies the name of the computer to assign the management role to.

If you specify the Computer parameter, you can't specify the SecurityGroup, User, or Policy parameters.

```yaml
Type: ComputerIdParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter specifies the name of the management role assignment policy to assign the management role to.

The IsEndUserRole property of the role you specify using the Role parameter must be set to $true.

If you specify the Policy parameter, you can't specify the SecurityGroup, Computer, or User parameters. If the policy name contains spaces, enclose the name in quotation marks (").

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
The Role parameter specifies the existing role to assign. If the role name contains spaces, enclose the name in quotation marks (").

```yaml
Type: RoleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SecurityGroup
The SecurityGroup parameter specifies the name of the management role group or universal USG to assign the management role to.

If you specify the SecurityGroup parameter, you can't specify the Policy, Computer, or User parameters. If the role group or USG name contains spaces, enclose the name in quotation marks (").

```yaml
Type: SecurityGroupIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the name or alias of the user to assign the management role to.

If you specify the User parameter, you can't specify the SecurityGroup, Computer, or Policy parameters. If the value contains spaces, enclose the name in quotation marks (").

```yaml
Type: UserIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Delegating
The Delegating parameter specifies whether the user or USG assigned to the role can delegate the role to other users or groups. You don't have to specify a value with the Delegating parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Type: None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnScopedTopLevel
The UnScopedTopLevel switch specifies that the role provided with the Role parameter is an unscoped top level management role. You can only create a role assignment using the UnScopedTopLevel switch if the role specified using the Role parameter is an unscoped top level role.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAdministrativeUnitScope
This parameter is available only in the cloud-based service.

The RecipientAdministrativeUnitScope parameter specifies the administrative unit to scope the new role assignment to.

Administrative units are Azure Active Directory containers of resources. You can view the available administrative units by using the Get-AdministrativeUnit cmdlet.

```yaml
Type: AdministrativeUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/34d4f2e3-f2c5-49e1-a6a9-1366da65a78c.aspx)
