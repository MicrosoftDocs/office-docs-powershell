---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/update-rolegroupmember
schema: 2.0.0
title: Update-RoleGroupMember
---

# Update-RoleGroupMember

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Update-RoleGroupMember cmdlet to modify the members of a management role group.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-RoleGroupMember [-Identity] <RoleGroupIdParameter>
 [-BypassSecurityGroupManagerCheck]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Members <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Update-RoleGroupMember cmdlet enables you to replace the entire membership list for a role group or perform programmatic addition or removal of multiple members at a single time. The membership list that you specify with the Members parameter on this cmdlet replaces the membership list for the specific role group. For this reason, take care when using this cmdlet so you don't mistakenly overwrite role group membership.

The Add-RoleGroupMember and Remove-RoleGroupMember cmdlets can be used to add or remove role group members. You can combine these cmdlets with other cmdlets, such as Get-Mailbox, to add or remove multiple members without overwriting the entire membership list at once.

If the ManagedBy property is populated with role group managers, the user updating role group membership must be a role group manager. Alternately, if the user is a member of the Organization Management role group or is directly or indirectly assigned the Role Management role, the BypassSecurityGroupManagerCheck switch can be used to override the security group management check.

If the role group is a linked role group, you can't use the Update-RoleGroupMember cmdlet to modify members on the role group. Instead, you need to modify members on the foreign universal security group (USG) that's linked to the linked role group. To find the foreign USG that's linked to a role group, use the Get-RoleGroup cmdlet.

For more information about role groups, see [Understanding management role groups](https://learn.microsoft.com/exchange/understanding-management-role-groups-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Update-RoleGroupMember "Recipient Administrators" -Members "Mark", "Jane", "Mary", "Fred"
```

This example sets the Recipient Administrators role group membership list to Mark, Jane, Mary and Fred.

### Example 2
```powershell
Update-RoleGroupMember "Recipient Administrators" -Members "Mark", "Jane", "Mary", "Fred" -BypassSecurityGroupManagerCheck
```

This example sets the Recipient Administrators role group membership list to Mark, Jane, Mary and Fred. Because the user running the command wasn't added to the ManagedBy property of the role group, the BypassSecurityGroupManagerCheck switch must be used. The user is assigned the Role Management role, which enables the user to bypass the security group manager check.

### Example 3
```powershell
Update-RoleGroupMember "Organization Management" -Members @{Add=(Get-Mailbox David).Identity, (Get-Group "Help Desk Managers").Identity

Remove=(Get-Mailbox "Christine").Identity, (Get-Mailbox "Isabel").Identity}
```

This example adds multiple members to, and removes multiple members from, a role group without replacing all the existing members on the role group. This example makes use of multivalued property syntax described in [Modifying multivalued properties](https://learn.microsoft.com/exchange/modifying-multivalued-properties-exchange-2013-help). When you use this multivalued property syntax, you must manually retrieve the Identity of the mailbox or mail-enabled security group that you want to add to or remove from the role group. Use the syntax that matches the type of object you want to add or remove:

Mailbox: If you want to add or remove a mailbox, use the syntax `(Get-Mailbox "<Alias or Name>").Identity`.

Mail-enabled security group: If you want to add or remove a mail-enabled security group, use the syntax `(Get-Group "<Name>").Identity`.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the role group whose membership you want to modify. If the name of the role group contains spaces, enclose the name in quotation marks (").

```yaml
Type: RoleGroupIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassSecurityGroupManagerCheck

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Built-in security add-on for on-premises mailboxes

The BypassSecurityGroupManagerCheck switch specifies whether to allow a user who isn't an owner of the group to modify or delete the group. You don't need to specify a value with this switch.

If you aren't defined in the ManagedBy property of the group, you need to use this switch in commands that modify or delete the group. To use this switch, your account requires specific permissions based on the group type:

- Distribution groups or mail-enabled security groups: You need to be a member of the Organization Management role group or have the Security Group Creation and Membership role assigned.
- Role groups: You need to be a member of the Organization Management role group or have the Role Management role assigned.

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

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

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

### -Members

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The Members parameter specifies the mailboxes or mail-enabled USGs to add as a member of the role group. You can identify the user or group by the name, DN, or primary SMTP address value. You can specify multiple members separated by commas (`Value1,Value2,...ValueN`). If the value contains spaces, enclose the value in quotation marks (`"Value 1","Value 2",..."Value N"`).

By default, the values that you specify overwrite the existing membership list of the role group. To add or remove multiple members without replacing the entire membership list, see the Examples section.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Security & Compliance, Built-in security add-on for on-premises mailboxes

The WhatIf switch doesn't work in Security & Compliance PowerShell.

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
