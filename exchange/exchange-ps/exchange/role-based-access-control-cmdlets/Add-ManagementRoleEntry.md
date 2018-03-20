---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Add-ManagementRoleEntry

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-ManagementRoleEntry cmdlet to add management role entries to an existing management role.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Add-ManagementRoleEntry [-Identity] <RoleEntryIdParameter> [-Confirm] [-DomainController <Fqdn>] [-Overwrite]
 [-Parameters <String[]>] [-PSSnapinName <String>] [-Type <Cmdlet | Script | ApplicationPermission | All>]
 [-UnScopedTopLevel] [-WhatIf] [-Force] [<CommonParameters>]
```

### Set2
```
Add-ManagementRoleEntry [-ParentRoleEntry] <RoleEntryIdParameter> -Role <RoleIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-Overwrite] [-WhatIf] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The cmdlet and its parameters that you add to a role entry must exist in the parent role. You can't add role entries to built-in roles.

You can only add a role entry to a management role if the role entry exists in the role's parent role. For example, if you try to add the Search-Mailbox role entry to a role that's a child of the Mail Recipients role, you'll receive an error. This error occurs because the Search-Mailbox role entry doesn't exist in the Mail Recipients role. To add the Search-Mailbox role entry to a role, you need to create a role that's a child of the Mailbox Import Export role, which contains the Search-Mailbox role entry. Then you can use the Add-ManagementRoleEntry cmdlet to add the Search-Mailbox role entry to the new child role.

For more information about management role entries, see Understanding management roles (Exchange 2016).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Add-ManagementRoleEntry "Recipient Administrators\Get-Mailbox"
```

This example adds a new role entry for the Get-Mailbox cmdlet to the Recipient Administrators management role. The role entry for the Get-Mailbox cmdlet is added exactly as it's configured in the Recipient Administrators parent role.

### Example 2
```
Add-ManagementRoleEntry "Recipient Administrators\Get-Mailbox" -Parameters Identity, Anr, Server, Filter
```

This example adds a new role entry for the Get-Mailbox cmdlet to the Recipient Administrators role. Only the Identity, Anr, Server and Filter parameters are added to the new role entry.

### Example 3
```
Get-ManagementRoleEntry "Mail Recipients\*Mailbox*" | Add-ManagementRoleEntry -Role "Mailbox Administrators"
```

This example uses the Get-ManagementRoleEntry cmdlet to retrieve a list of all the role entries that exist on the Mail Recipients management role that contain the string "Mailbox" in the cmdlet name and then adds them to the Mailbox Administrators role using the Add-ManagementRoleEntry cmdlet. The role entries are added to the child role exactly as they're configured on the parent role.

### Example 4
```
Add-ManagementRoleEntry "IT Scripts\MailboxAudit" -Parameters Department, Location -UnScopedTopLevel
```

This example adds the MailboxAudit script with the Department and Location parameters to the IT Scripts unscoped top-level role.

## PARAMETERS

### -Identity
The Identity parameter specifies the role entry to add. You must specify the value of the Identity parameter in the format: \<management role\>\\\<role entry name\>, for example, ExampleRole\\Set-Mailbox.

For more information about how management role entries work, see Understanding management roles (Exchange 2016).

The role entry you want to add must exist in the parent role. If the role entry name contains spaces, you must enclose the name in quotation marks (").

```yaml
Type: RoleEntryIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ParentRoleEntry
The ParentRoleEntry parameter specifies the role entry in the parent role to add to the role specified with the Role parameter. This parameter generally isn't used directly, but exists to enable the piping of role entries from the Get-ManagementRoleEntry cmdlet. If you use the ParentRoleEntry parameter, you can't use the UnScopedTopLevel switch.

```yaml
Type: RoleEntryIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Role
The Role parameter specifies the role to which the new role entry, specified by the ParentRoleEntry parameter, is added.

```yaml
Type: RoleIdParameter
Parameter Sets: Set2
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

### -Overwrite
The Overwrite parameter causes existing role entries to be overwritten by the role entries being added.

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

### -Parameters
The Parameters parameter specifies the parameters to be included in the role being added. The parameters specified must exist on the cmdlet associated with the role entry. You can specify multiple parameters, separated with commas.

```yaml
Type: String[]
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSSnapinName
This parameter is available only in on-premises Exchange.

The PSSnapinName parameter specifies the Windows PowerShell snap-in that contains the cmdlet associated with the role being added. Use the Get-PSSnapin cmdlet to retrieve a list of available Windows PowerShell snap-ins.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type of role entry being added. The valid values are Cmdlet, Script and ApplicationPermission.

```yaml
Type: Cmdlet | Script | ApplicationPermission | All
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnScopedTopLevel
The UnScopedTopLevel switch specifies that you're adding a custom script or non-Exchange cmdlet to an unscoped top-level management role. You can only use the UnScopedTopLevel switch when you add a role entry to an unscoped top-level role. If you use the UnScopedTopLevel switch, you can't use the ParentRoleEntry parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
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

### -Force
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/ece406f2-a6d6-4b5d-94f0-2819a7672088.aspx)
