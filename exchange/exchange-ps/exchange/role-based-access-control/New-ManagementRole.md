---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: New-ManagementRole
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps || eop-ps"
---

# New-ManagementRole

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ManagementRole cmdlet to create a management role based on an existing role or create an unscoped management role.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-ManagementRole [-Name] <String> -Parent <RoleIdParameter> [-Confirm] [-Description <String>]
 [-DomainController <Fqdn>] [-Force] [-WhatIf]
 [-EnabledCmdlets <String[]>] [<CommonParameters>]
```

### Set2
```
New-ManagementRole [-Name] <String> [-UnScopedTopLevel] [-Confirm] [-Description <String>]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can either create a management role based on an existing role, or you can create an unscoped role that's empty. If you create a role based on an existing role, you start with the management role entries that exist on the existing role. You can then remove entries to customize the role. If you create an unscoped role, the role can contain custom scripts or cmdlets that aren't part of Exchange.

An unscoped role doesn't have any scope restrictions applied. Scripts or third-party cmdlets included in an unscoped role can view or modify any object in the Exchange organization.

The ability to create an unscoped management role isn't granted by default. To create an unscoped management role, you must assign the Unscoped Role Management management role to a role group you're a member of. For more information about how to create an unscoped management role, see Create an unscoped role (https://technet.microsoft.com/library/dd876886.aspx).

After you create a role, you can change the management role entries on the role and assign the role with a management scope to a user or universal security group (USG).

For more information about management roles, see Understanding management roles (https://technet.microsoft.com/library/dd298116.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ManagementRole -Name "Redmond Journaling View-Only" -Parent Journaling; Get-ManagementRoleEntry "Redmond Journaling View-Only\*" | Where { $_.Name -NotLike "Get*" } | Remove-ManagementRoleEntry -WhatIf
```

This example creates the management role Redmond Journaling View-Only based on the Journaling parent role.

After the role is created, the Remove-ManagementRoleEntry cmdlet is used along with the Where cmdlet to remove all the management role entries that aren't needed on the role. You can't add role entries to the newly created role because it already has all the role entries that exist on its parent role, Journaling. The WhatIf switch is used to verify that the correct role entries are removed.

After confirmation that the command removes the correct role entries, the second command is run again without the WhatIf switch.

For more information about pipelining and the Where cmdlet, see the following topics:

- Pipelining (https://technet.microsoft.com/library/aa998260.aspx)

- Working with command output (https://technet.microsoft.com/library/bb123533.aspx)

### -------------------------- Example 2 --------------------------
```
New-ManagementRole -Name "In-house scripts" -UnScopedTopLevel
```

In on-premises Exchange, this example creates the unscoped management role In-house scripts. Note that the UnScopedTopLevel switch requires the Unscoped Role Management role, which isn't assigned to any role group by default.

## PARAMETERS

### -Name
The Name parameter specifies the name of the role. The maximum length of the name is 64 characters. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
The Parent parameter specifies the identity of the role to copy. If the name of the role contains spaces, enclose the name in quotation marks ("). If you specify the Parent parameter, you can't use the UnScopedTopLevel switch.

```yaml
Type: RoleIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -UnScopedTopLevel
This parameter is available on in on-premises Exchange.

By default, this parameter is only available in the UnScoped Role Management role, and that role isn't assigned to any role groups. To use this parameter, you need to add the UnScoped Role Management role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

The UnScopedTopLevel switch specifies that the role should be a custom, empty role. You don't need to specify a value with this switch.

If you use this switch, you can't use the Parent parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies the description that's displayed when the management role is viewed using the Get-ManagementRole cmdlet. Enclose the description in quotation marks (").

```yaml
Type: String
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

### -EnabledCmdlets
The EnabledCmdlets parameter specifies the cmdlets that are copied from the parent role. You can specify multiple values separated by commas.

You can only use this parameter with the Parent parameter when you copy a role.

```yaml
Type: String[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/76367e39-a387-430f-b3a5-1df20dd31201.aspx)
