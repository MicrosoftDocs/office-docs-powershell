---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-managementroleassignment
schema: 2.0.0
title: Set-ManagementRoleAssignment
---

# Set-ManagementRoleAssignment

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-ManagementRoleAssignment cmdlet to modify existing management role assignments.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### RelativeRecipientWriteScope
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> [-RecipientRelativeWriteScope <RecipientWriteScopeType>]
 [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### CustomRecipientWriteScope
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-Confirm]
 [-CustomRecipientWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### RecipientOrganizationalUnitScope
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> [-RecipientOrganizationalUnitScope <OrganizationalUnitIdParameter>]
 [-Confirm]
 [-CustomConfigWriteScope <ManagementScopeIdParameter>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### ExclusiveScope
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> [-ExclusiveConfigWriteScope <ManagementScopeIdParameter>] [-ExclusiveRecipientWriteScope <ManagementScopeIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### RecipientAdministrativeUnitScope
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> -RecipientAdministrativeUnitScope <AdministrativeUnitIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### App
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> [-CustomResourceScope <ManagementScopeIdParameter>]
 [-Confirm]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### RecipientGroupScope
```
Set-ManagementRoleAssignment [-Identity] <RoleAssignmentIdParameter> -RecipientGroupScope <GroupIdParameter>
 [-Confirm]
 [-Enabled <Boolean>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When you modify a role assignment, you can specify a new predefined or custom management scope or provide an organizational unit (OU) to scope the existing role assignment.

You can create custom management scopes using the New-ManagementScope cmdlet and can view a list of existing scopes using the Get-ManagementScope cmdlet. If you choose not to specify an OU, predefined scope, or custom scope, the implicit write scope of the role applies to the role assignment.

For more information about management role assignments, see [Understanding management role assignments](https://learn.microsoft.com/exchange/understanding-management-role-assignments-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ManagementRoleAssignment "Mail Recipients_Denver Help Desk" -Enabled $false
```

This example disables the Mail Recipients\_Denver Help Desk role assignment. When a role assignment is disabled, the users assigned the role can no longer run cmdlets granted by the role.

### Example 2
```powershell
Set-ManagementRoleAssignment "MyGAL_KimA" -RecipientRelativeWriteScope MyGAL
```

This example changes the recipient scope for the MyGAL\_KimA role assignment to MyGAL. When the recipient scope is changed to a predefined value, any previously defined OUs or custom scopes are overwritten.

### Example 3
```powershell
Set-ManagementRoleAssignment "Mail Recipients_Marketing Admins" -RecipientOrganizationalUnitScope "contoso.com/North America/Marketing/Users"
```

This example restricts the Mail Recipients\_Marketing Admins role assignment to the contoso.com/North America/Marketing/Users OU. Users who are members of the Marketing Admins role group assigned the role assignment can create, modify, and remove objects only in the specified OU. When the RecipientOrganizationalUnitScope parameter is used, any predefined or custom scopes on the role assignment are overwritten.

### Example 4
```powershell
Set-ManagementRoleAssignment "Distribution Groups_Cairns Admins" -CustomRecipientWriteScope "Cairns Recipients"
```

This example restricts the Distribution Groups\_Cairns Admins role assignment using the Cairns Recipients custom recipient management scope. Users that are members of the Cairns Admins role group assigned the role assignment can create, modify, and remove only the distribution group objects that match the Cairns Recipients custom recipient management scope.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the name of the management role assignment to modify. If the name of the management role contains spaces, enclose it in quotation marks (").

```yaml
Type: RoleAssignmentIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RecipientAdministrativeUnitScope

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is functional only in the cloud-based service.

The RecipientAdministrativeUnitScope parameter specifies the administrative unit to scope the role assignment to.

Administrative units are Microsoft Entra containers of resources. You can view the available administrative units by using the Get-AdministrativeUnit cmdlet.

You can't use this parameter with any of the other scope parameters.

```yaml
Type: AdministrativeUnitIdParameter
Parameter Sets: RecipientAdministrativeUnitScope
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientGroupScope

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

The RecipientGroupScope parameter specifies a group to consider for scoping the role assignment. Individual members of the specified group (not nested groups) are considered as in scope for the assignment. You can use any value that uniquely identifies the group: Name, DistinguishedName, GUID, or DisplayName.

```yaml
Type: GroupIdParameter
Parameter Sets: RecipientGroupScope
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The CustomConfigWriteScope parameter specifies the existing configuration management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks (").

If you use the CustomConfigWriteScope parameter, you can't use the ExclusiveConfigWriteScope parameter.

To remove a scope, specify a value of $null.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: RelativeRecipientWriteScope, CustomRecipientWriteScope, RecipientOrganizationalUnitScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomRecipientWriteScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The CustomRecipientWriteScope parameter specifies the existing recipient-based management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks (").

If you use the CustomRecipientWriteScope parameter, you can't use the RecipientOrganizationalUnitScope, RecipientRelativeWriteScope, or ExclusiveRecipientWriteScope parameters, and any configured OU or predefined scope on the role assignment is overwritten.

To remove a scope, specify a value of $null.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: CustomRecipientWriteScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomResourceScope

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: RelativeRecipientWriteScope, CustomRecipientWriteScope, RecipientOrganizationalUnitScope, ExclusiveScope, RecipientAdministrativeUnitScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Enabled parameter specifies whether the management role assignment is enabled or disabled. The valid values are $true and $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusiveConfigWriteScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ExclusiveConfigWriteScope parameter specifies the existing configuration exclusive management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks (").

If you use the ExclusiveConfigWriteScope parameter, you can't use the CustomConfigWriteScope parameter.

To remove a scope, specify a value of $null.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: ExclusiveScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExclusiveRecipientWriteScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The ExclusiveRecipientWriteScope parameter specifies the existing recipient-based exclusive management scope to associate with this management role assignment. If the management scope name contains spaces, enclose it in quotation marks (").

If you use the ExclusiveRecipientWriteScope parameter, you can't use the CustomRecipientWriteScope, RecipientOrganizationalUnitScope, or RecipientRelativeWriteScope parameters and any configured OU or predefined scope on the role assignment is overwritten.

To remove a scope, specify a value of $null.

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: ExclusiveScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is available only in the cloud-based service.

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientOrganizationalUnitScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The RecipientOrganizationalUnitScope parameter specifies the OU to scope the new role assignment to. If the OU name contains spaces, enclose the domain and OU in quotation marks (").

If you use the RecipientOrganizationalUnitScope parameter, you can't use the CustomRecipientWriteScope, ExclusiveRecipientWriteScope, or RecipientRelativeWriteScope parameters and any predefined scopes or custom scopes on the role assignment are overwritten.

To specify an OU, use the syntax: domain/ou. To remove an OU, specify a value of $null.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: RecipientOrganizationalUnitScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRelativeWriteScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The RecipientRelativeWriteScope parameter specifies the type of restriction to apply to a recipient scope.

If you use the RecipientRelativeWriteScope parameter, you can't use the CustomRecipientWriteScope, ExclusiveRecipientWriteScope, or RecipientOrganizationalUnitScope parameters.

The available types are: None, Organization, MyGAL, Self and MyDistributionGroups. If you specify a predefined scope, any custom scope or configured OU on the role assignment is overwritten.

Even though the NotApplicable, OU, MyDirectReports, CustomRecipientScope, MyExecutive, MailboxICanDelegate, and ExclusiveRecipientScope values appear in the syntax block for this parameter, they can't be used directly on the command line. They're used internally by the cmdlet.

```yaml
Type: RecipientWriteScopeType
Parameter Sets: RelativeRecipientWriteScope
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

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
