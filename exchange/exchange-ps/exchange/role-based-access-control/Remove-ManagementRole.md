---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: Remove-ManagementRole
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || eop-ps"
---

# Remove-ManagementRole

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-ManagementRole cmdlet to remove custom management roles that you don't need anymore.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-ManagementRole [-Identity] <RoleIdParameter> [-Confirm] [-DomainController <Fqdn>] [-Force] [-Recurse]
 [-UnScopedTopLevel] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to remove all the management role assignments from a role before you delete it. If the role is the parent of child roles, the child roles must be removed before you remove the parent role, or you must use the Recurse parameter when you remove the parent role. You can only remove custom roles. Built-in roles, such as the Mail Recipients role, can't be removed. For more information about how to remove a custom role, see Remove a role (https://technet.microsoft.com/library/dd335178.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-ManagementRole ExampleRole1
```

This example removes the single role ExampleRole1.

### -------------------------- Example 2 --------------------------
```
Remove-ManagementRole ExampleRole2 -Recurse -WhatIf
```

This example runs the Remove-ManagementRole cmdlet with the WhatIf switch. The WhatIf switch lets the command run as if it were going to perform the action you specified but doesn't commit any changes. Instead, it displays the results of what would have happened, so you can verify that the actions are correct.

If the results are as expected, remove the WhatIf switch and run the command again to remove the ExampleRole2 parent role and all its child roles.

### -------------------------- Example 3 --------------------------
```
Get-ManagementRole *Example* | Remove-ManagementRole -WhatIf
```

This example uses the Get-ManagementRole cmdlet to get a list of roles that contain the string "Example" in the role name, and then pipes the list to the Remove-ManagementRole cmdlet. The Remove-ManagementRole cmdlet, because the WhatIf switch is specified, displays the roles that would have been removed but doesn't commit any changes. If the results are as expected, the command can be run again without the WhatIf switch to remove the roles.

### -------------------------- Example 4 --------------------------
```
Remove-ManagementRole "In-house scripts" -UnScopedTopLevel
```

In on-premises Exchange, this example removes the In-house scripts unscoped top-level management role. Because this is an unscoped top-level role, the UnScopedTopLevel switch must be used. Note that the UnScopedTopLevel switch requires the UnScoped Role Management role, which isn't assigned to any role groups by default.

For more information about unscoped top-level management roles, see Understanding management roles (https://technet.microsoft.com/library/dd298116.aspx).

## PARAMETERS

### -Identity
The Identity parameter specifies the custom role to remove. If the name of the role contains spaces, enclose the name in quotation marks (").

```yaml
Type: RoleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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

### -Force
This parameter is available only in the cloud-based service.

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

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

### -Recurse
The Recurse parameter removes all child roles of the role specified with the Identity parameter, and then removes the specified role.

The Recurse parameter removes all child roles of the specified role. We recommend that you first use the command with the WhatIf switch to confirm that the action to be taken is correct.

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

### -UnScopedTopLevel
This parameter is available on in on-premises Exchange.

By default, this parameter is only available in the UnScoped Role Management role, and that role isn't assigned to any role groups. To use this parameter, you need to add the UnScoped Role Management role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

The UnScopedTopLevel switch specifies that the role you're trying to remove is an unscoped top-level role. You don't need to specify a value with this switch.

You must use this switch if you want to remove an unscoped top-level role.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/d67099bd-bb7e-4ad7-8d8a-9d4909d59dba.aspx)
