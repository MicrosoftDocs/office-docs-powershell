---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-managementrole
schema: 2.0.0
title: New-ManagementRole
---

# New-ManagementRole

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-ManagementRole cmdlet to create a management role based on an existing role or create an unscoped management role.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### NewDerivedRole
```
New-ManagementRole [-Name] <String> -Parent <RoleIdParameter>
 [-EnabledCmdlets <String[]>]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### UnScopedTopLevelRole
```
New-ManagementRole [-Name] <String>
 [-UnScopedTopLevel]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can either create a management role based on an existing role, or you can create an unscoped role that's empty. If you create a role based on an existing role, you start with the management role entries that exist on the existing role. You can then remove entries to customize the role. If you create an unscoped role, the role can contain custom scripts or cmdlets that aren't part of Exchange.

An unscoped role doesn't have any scope restrictions applied. Scripts or non-Microsoft cmdlets included in an unscoped role can view or modify any object in the Exchange organization.

The ability to create an unscoped management role isn't granted by default. To create an unscoped management role, you must assign the management role named Unscoped Role Management to a role group you're a member of. For more information about how to create an unscoped management role, see [Create an unscoped role](https://learn.microsoft.com/exchange/create-an-unscoped-role-exchange-2013-help).

After you create a role, you can change the management role entries on the role and assign the role with a management scope to a user or universal security group (USG).

For more information about management roles, see [Understanding management roles](https://learn.microsoft.com/exchange/understanding-management-roles-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-ManagementRole -Name "Redmond Journaling View-Only" -Parent Journaling

Get-ManagementRoleEntry "Redmond Journaling View-Only\*" | Where { $_.Name -NotLike "Get*" } | %{Remove-ManagementRoleEntry -Identity "$($_.id)\$($_.name)"}
```

This example creates the management role Redmond Journaling View-Only based on the Journaling parent role.

After the role is created, the Remove-ManagementRoleEntry cmdlet is used along with the Where cmdlet to remove all the management role entries that aren't needed on the role. You can't add role entries to the newly created role because it already has all the role entries that exist on its parent role, Journaling.

For more information about pipelining and the Where cmdlet, see the following articles:

- [About Pipelines](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_pipelines)
- [Working with command output](https://learn.microsoft.com/exchange/working-with-command-output-exchange-2013-help)

### Example 2
```powershell
New-ManagementRole -Name "In-house scripts" -UnScopedTopLevel
```

In on-premises Exchange, this example creates the unscoped management role In-house scripts. The UnScopedTopLevel switch requires the Unscoped Role Management role, which isn't assigned to any role group by default.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Name parameter specifies the name of the role. The maximum length of the name is 64 characters. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Parent parameter specifies the identity of the role to copy. If the name of the role contains spaces, enclose the name in quotation marks ("). If you specify the Parent parameter, you can't use the UnScopedTopLevel switch.

```yaml
Type: RoleIdParameter
Parameter Sets: NewDerivedRole
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -UnScopedTopLevel

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

By default, this parameter is available only in the UnScoped Role Management role, and that role isn't assigned to any role groups. To use this parameter, you need to add the UnScoped Role Management role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

The UnScopedTopLevel switch specifies that the role new role is an unscoped top-level management role (a custom, empty role). You don't need to specify a value with this switch.

Unscoped top-level management roles can only contain custom scripts or non-Exchange cmdlets. For more information, see [Create an unscoped role](https://learn.microsoft.com/exchange/create-an-unscoped-role-exchange-2013-help).

You can't use this switch with the Parent parameter.

```yaml
Type: SwitchParameter
Parameter Sets: UnScopedTopLevelRole
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

### -Description

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The Description parameter specifies the description that's displayed when the management role is viewed using the Get-ManagementRole cmdlet. Enclose the description in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledCmdlets

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The EnabledCmdlets parameter specifies the cmdlets that are copied from the parent role. You can specify multiple values separated by commas.

You can only use this parameter with the Parent parameter when you copy a role.

```yaml
Type: String[]
Parameter Sets: NewDerivedRole
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
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
