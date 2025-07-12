---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-managementrole
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection
title: Get-ManagementRole
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-ManagementRole

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ManagementRole cmdlet to view management roles that have been created in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### GetChildren
```
Get-ManagementRole [-Identity] <RoleIdParameter>
 [-GetChildren]
 [-DomainController <Fqdn>]
 [-RoleType <RoleType>]
 [<CommonParameters>]
```

### Recurse
```
Get-ManagementRole [-Identity] <RoleIdParameter>
 [-Recurse]
 [-DomainController <Fqdn>]
 [-RoleType <RoleType>]
 [<CommonParameters>]
```

### Identity
```
Get-ManagementRole [[-Identity] <RoleIdParameter>]
 [-Cmdlet <String>]
 [-CmdletParameters <String[]>]
 [-DomainController <Fqdn>]
 [-RoleType <RoleType>]
 [<CommonParameters>]
```

### Script
```
Get-ManagementRole [[-Identity] <RoleIdParameter>]
 [-Script <String>]
 [-ScriptParameters <String[]>]
 [-DomainController <Fqdn>]
 [-RoleType <RoleType>]
 [<CommonParameters>]
```

## DESCRIPTION
You can view management roles in several ways, from listing all the roles in your organization to listing only the child roles of a specified parent role. You can also view the details of a specific role by piping the output of the Get-ManagementRole cmdlet to the Format-List cmdlet.

For more information about management roles, see [Understanding management roles](https://learn.microsoft.com/exchange/understanding-management-roles-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ManagementRole
```

This example lists all the roles that have been created in your organization.

### Example 2
```powershell
Get-ManagementRole "Mail Recipients" -Recurse
```

This example lists all the roles that are children of the Mail Recipients management role. The command performs a recursive query of all the child roles of the specified parent role. This recursive query finds every child role from the immediate children of the parent to the last child role in the hierarchy. In a recursive list, the parent role is also returned in the list.

### Example 3
```powershell
Get-ManagementRole -CmdletParameters Identity, Database
```

This example lists all the roles that contain both the Identity and Database parameters. Roles that contain only one parameter or the other aren't returned.

### Example 4
```powershell
Get-ManagementRole -RoleType UnScopedTopLevel
```

This example lists all the roles that have a type of UnScopedTopLevel. These roles contain custom scripts or non-Exchange cmdlets.

### Example 5
```powershell
Get-ManagementRole "Transport Rules" | Format-List Name, RoleType
```

This example retrieves only the Transport Rules role and passes the output of the Get-ManagementRole cmdlet to the Format-List cmdlet. The Format-List cmdlet then shows only the Name and RoleType properties of the Transport Rules role. For more information about pipelining and the Format-List cmdlet, see [About Pipelines](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_pipelines) and [Working with command output](https://learn.microsoft.com/exchange/working-with-command-output-exchange-2013-help).

### Example 6
```powershell
Get-ManagementRole "Mail Recipients" -GetChildren
```

This example lists the immediate children of the Mail Recipients role. Only the child roles that hold the Mail Recipients role as their parent role are returned. The Mail Recipients role isn't returned in the list.

## PARAMETERS

### -Identity
The Identity parameter specifies the role you want to view. If the role you want to view contains spaces, enclose the name in quotation marks ("). You can use the wildcard character (\*) and a partial role name to match multiple roles.

```yaml
Type: RoleIdParameter
Parameter Sets: GetChildren, Recurse
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: RoleIdParameter
Parameter Sets: Identity, Script
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -GetChildren
The GetChildren parameter retrieves a list of all the roles that were created based on the parent role specified in the Identity parameter. You don't need to specify a value with this switch.

Only the immediate child roles of the parent role are included in the results.

You can use this switch only with the Identity and RoleType parameters.

```yaml
Type: SwitchParameter
Parameter Sets: GetChildren
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse
The Recurse parameter retrieves a list of all the roles that were created based on the parent role specified in the Identity parameter. You don't need to specify a value with this switch.

The role specified in the Identity parameter, its child roles, and their children are returned.

You can use this switch only with the Identity and RoleType parameters.

```yaml
Type: SwitchParameter
Parameter Sets: Recurse
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Cmdlet
The Cmdlet parameter returns a list of all roles that include the specified cmdlet.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CmdletParameters
The CmdletParameters parameter returns a list of all roles that include the specified parameter or parameters. You can specify more than one parameter by separating each parameter with a comma. If you specify multiple parameters, only the roles that include all of the specified parameters are returned.

```yaml
Type: String[]
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleType
The RoleType parameter returns a list of roles that match the specified role type. For a list of valid role types, see [Understanding management roles](https://learn.microsoft.com/exchange/understanding-management-roles-exchange-2013-help).

```yaml
Type: RoleType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Script
The Script parameter returns a list of all roles that include the specified script.

```yaml
Type: String
Parameter Sets: Script
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScriptParameters
The ScriptParameters parameter returns a list of all roles that include the specified parameter or parameters. You can specify more than one parameter by separating each parameter with a comma. If you specify multiple parameters, only the roles that include all of the specified parameters are returned.

```yaml
Type: String[]
Parameter Sets: Script
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Security & Compliance, Exchange Online Protection

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
