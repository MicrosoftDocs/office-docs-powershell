---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Get-ManagementRoleAssignment
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps || eop-ps"
---

# Get-ManagementRoleAssignment

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ManagementRoleAssignment cmdlet to retrieve management role assignments.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-ManagementRoleAssignment [[-Identity] <RoleAssignmentIdParameter>]
 [-ConfigWriteScope <None | NotApplicable | OrganizationConfig | CustomConfigScope | PartnerDelegatedTenantScope | ExclusiveConfigScope>]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-Delegating <$true | $false>]
 [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-Exclusive <$true | $false>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>] [-GetEffectiveUsers]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate>]
 [-RoleAssigneeType <User | SecurityGroup | RoleAssignmentPolicy | MailboxPlan | ForeignSecurityPrincipal | RoleGroup | LinkedRoleGroup | Computer | PartnerLinkedRoleGroup>]
 [-WritableDatabase <DatabaseIdParameter>] [-WritableRecipient <GeneralRecipientIdParameter>]
 [-WritableServer <ServerIdParameter>] [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [<CommonParameters>]
```

### Set2
```
Get-ManagementRoleAssignment [-AssignmentMethod <AssignmentMethod[]>]
 [-ConfigWriteScope <None | NotApplicable | OrganizationConfig | CustomConfigScope | PartnerDelegatedTenantScope | ExclusiveConfigScope>]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>] [-Delegating <$true | $false>]
 [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-Exclusive <$true | $false>]
 [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>]
 [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>] [-GetEffectiveUsers]
 [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-RecipientWriteScope <None | NotApplicable | Organization | MyGAL | Self | MyDirectReports | OU | CustomRecipientScope | MyDistributionGroups | MyExecutive | ExclusiveRecipientScope | MailboxICanDelegate>]
 [-Role <RoleIdParameter>] [-RoleAssignee <RoleAssigneeIdParameter>]
 [-RoleAssigneeType <User | SecurityGroup | RoleAssignmentPolicy | MailboxPlan | ForeignSecurityPrincipal | RoleGroup | LinkedRoleGroup | Computer | PartnerLinkedRoleGroup>]
 [-WritableDatabase <DatabaseIdParameter>] [-WritableRecipient <GeneralRecipientIdParameter>]
 [-WritableServer <ServerIdParameter>] [-RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You can retrieve role assignments in a variety of ways including by assignment type, scope type, or name, and whether the assignment is enabled or disabled. You can also view a list of role assignments that provide access to a specified recipient, server, or database.

For more information about management role assignments, see Understanding management role assignments (https://technet.microsoft.com/library/dd335131.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ManagementRoleAssignment "Denver Help Desk" | Format-List
```

This example retrieves the Denver Help Desk role assignment using the Get-ManagementRoleAssignment cmdlet and pipes the output to the Format-List cmdlet. For more information about the Format-List cmdlet, see Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

### -------------------------- Example 2 --------------------------
```
Get-ManagementRoleAssignment -Enabled $true -Delegating $true
```

This example retrieves all the role assignments that are enabled and have been designated as delegating role assignments.

### -------------------------- Example 3 --------------------------
```
Get-ManagementRoleAssignment -RecipientWriteScope MyGAL
```

This example retrieves all the role assignments that include the MyGAL recipient-based scope restriction type.

### -------------------------- Example 4 --------------------------
```
Get-ManagementRoleAssignment -Role "Mail Recipients"
```

This example retrieves all the role assignments associated with the Mail Recipients management role.

### -------------------------- Example 5 --------------------------
```
Get-ManagementRoleAssignment -WritableRecipient Bob -GetEffectiveUsers
```

This example retrieves a list of all the users and the role assignments that can modify the recipient Bob.

### -------------------------- Example 6 --------------------------
```
Get-ManagementRoleAssignment -ExclusiveConfigWriteScope "Redmond Executive Servers" -GetEffectiveUsers
```

This example retrieves a list of all exclusive scopes that can modify server objects that match Redmond Executive Servers. The command also lists the users who are effectively assigned the role assignments through role groups or USGs.

### -------------------------- Example 7 --------------------------
```
Get-ManagementRoleAssignment -WritableDatabase "Contoso Sales"
```

This example retrieves all the role assignments that can modify the database Contoso Sales.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the role assignment to retrieve. If the name of the role assignment contains spaces, enclose it in quotation marks ("). If the RoleAssignee parameter is used, you can't use the Identity parameter.

```yaml
Type: RoleAssignmentIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AssignmentMethod
The AssignmentMethod parameter specifies the type of role assignment to include in the results returned by the cmdlet. You can specify one or more of the following values:

- Direct

- SecurityGroup

- RoleGroup

- RoleAssignmentPolicy

If you provide more than one value, separate each value with a comma.

You must specify a value with the RoleAssignee parameter if you use the AssignmentMethod parameter.

```yaml
Type: AssignmentMethod[]
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigWriteScope
The ConfigWriteScope parameter specifies the type of management configuration scope to include in the results returned by the cmdlet. The valid values are None, OrganizationConfig, CustomConfigScope, and ExclusiveConfigScope.

```yaml
Type: None | NotApplicable | OrganizationConfig | CustomConfigScope | PartnerDelegatedTenantScope | ExclusiveConfigScope
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

The CustomConfigWriteScope parameter returns only the regular role assignments that include the specified configuration-based regular scope.

This parameter can only be used to retrieve regular configuration-based scopes. To retrieve a list of exclusive configuration-based scopes, use the ExclusiveConfigWriteScope parameter instead.

If the scope name contains spaces, enclose it in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomRecipientWriteScope
The CustomRecipientWriteScope parameter returns only the regular role assignments that include the specified recipient-based regular scope.

This parameter can only be used to retrieve regular recipient-based scopes. To retrieve a list of exclusive recipient-based scopes, use the ExclusiveRecipientWriteScope parameter instead.

If the scope name contains spaces, enclose it in quotation marks (").

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
The Delegating parameter specifies whether delegating or regular role assignments should be returned.

By default, both delegating and regular scopes are returned. To return only delegating role assignments, specify a value of $true. To return only regular role assignments, specify a value of $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
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

### -Enabled
The Enabled parameter specifies whether enabled or disabled role assignments should be returned. To return enabled role assignments, specify a value of $true. To return disabled role assignments, specify a value of $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Exclusive
The Exclusive parameter specifies whether exclusive or regular role assignments should be returned.

By default, both exclusive and regular scopes are returned. To return only exclusive role assignments, specify a value of $true. To return only regular role assignments, specify a value of $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusiveConfigWriteScope
This parameter is available only in on-premises Exchange.

The ExclusiveConfigWriteScope parameter returns only the exclusive role assignments that include the specified configuration-based exclusive scope.

This parameter can only be used to retrieve exclusive configuration-based scopes. To retrieve a list of regular configuration-based scopes, use the CustomConfigWriteScope parameter instead.

If the scope name contains spaces, enclose it in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusiveRecipientWriteScope
The ExclusiveRecipientWriteScope parameter returns only the exclusive role assignments that include the specified recipient-based exclusive scope.

This parameter can only be used to retrieve exclusive recipient-based scopes. To retrieve a list of regular recipient-based scopes, use the CustomRecipientWriteScope parameter instead.

If the scope name contains spaces, enclose it in quotation marks (").

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

### -GetEffectiveUsers
The GetEffectiveUsers switch specifies that the command should show the list of users in the role groups, assignment policies, or USGs associated with a role assignment. The users are effectively assigned the role assignment through their role group, assignment policy, or USG.

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
The RecipientOrganizationalUnitScope parameter returns only the role assignments that include the specified organizational unit (OU). If the OU tree contains spaces, enclose it in quotation marks (").

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

### -RecipientWriteScope
The RecipientWriteScope parameter returns only the role assignments associated with the recipient scope restriction type specified. The valid values are None, MyGAL, Self, OU, CustomRecipientScope, MyDistributionGroups and ExclusiveRecipientScope.

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

### -Role
The Role parameter returns only the role assignments associated with the specified management role. If the name of the role contains spaces, enclose it in quotation marks (").

```yaml
Type: RoleIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RoleAssignee
The RoleAssignee parameter specifies the role group, assignment policy, user, or universal security group (USG) for which you want to view role assignments. If the RoleAssignee parameter is used, you can't use the Identity parameter.

By default, the command returns both direct role assignments to the role assignee and indirect role assignments granted to a role assignee through role groups or assignment policies.

If the name of the user or USG contains spaces, enclose it in quotation marks (").

```yaml
Type: RoleAssigneeIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssigneeType
The RoleAssigneeType parameter specifies the type of role assignee to return. The valid values are User, SecurityGroup, RoleAssignmentPolicy, ForeignSecurityPrincipal, RoleGroup, LinkedRoleGroup and Computer.

```yaml
Type: User | SecurityGroup | RoleAssignmentPolicy | MailboxPlan | ForeignSecurityPrincipal | RoleGroup | LinkedRoleGroup | Computer | PartnerLinkedRoleGroup
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WritableDatabase
This parameter is available only in on-premises Exchange.

The WritableDatabase parameter specifies the database object you want to test to determine which role assignments allow it to be modified. The command takes into account the roles and scopes associated with each role assignment. If the database name contains spaces, enclose it in quotation marks (").

If this parameter is used with the GetEffectiveUsers switch, all the users who can modify the database object indirectly through role groups and USGs are also returned. Without the GetEffectiveUsers switch, only the role groups, users and USGs directly assigned the role assignment are returned.

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WritableRecipient
The WritableRecipient parameter specifies the recipient object you want to test to determine which role assignments allow it to be modified. The command takes into account the roles and scopes associated with each role assignment. If the recipient name contains spaces, enclose it in quotation marks (").

If this parameter is used with the GetEffectiveUsers switch, all of the users who can modify the recipient object indirectly through role groups and USGs are also returned. Without the GetEffectiveUsers switch, only the role groups, users and USGs directly assigned the role assignment are returned.

```yaml
Type: GeneralRecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WritableServer
This parameter is available only in on-premises Exchange.

The WritableServer parameter specifies the server object you want to test to determine which role assignments allow it to be modified. The command takes into account the roles and scopes associated with each role assignment. If the server object name contains spaces, enclose it in quotation marks (").

If this parameter is used with the GetEffectiveUsers switch, all of the users who can modify the server object indirectly through role groups and USGs are also returned. Without the GetEffectiveUsers switch, only the role groups, users and USGs directly assigned the role assignment are returned.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientAdministrativeUnitScope
This parameter is available only in the cloud-based service.

The RecipientAdministrativeUnitScope parameter returns only the role assignments that include the specified administrative unit.

Administrative units are Azure Active Directory containers of resources. You can view the available administrative units by using the Get-AdministrativeUnit cmdlet.

```yaml
Type: AdministrativeUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/a3a6ee46-061b-444a-8639-43a416309445.aspx)
