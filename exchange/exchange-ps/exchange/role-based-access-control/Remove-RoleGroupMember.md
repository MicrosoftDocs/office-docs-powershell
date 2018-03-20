---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
schema: 2.0.0
---

# Remove-RoleGroupMember

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-RoleGroupMember cmdlet to remove a member of a management role group.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-RoleGroupMember [-Identity] <RoleGroupIdParameter> -Member <SecurityPrincipalIdParameter>
 [-BypassSecurityGroupManagerCheck] [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
When you remove a member from a role group, that member can no longer manage the features made available by the role group if the role group is the only means by which the member is granted access to the feature.

If the ManagedBy property has been populated with role group managers, the user removing a role group member must be a role group manager. Alternately, if the user is a member of the Organization Management role group or is directly or indirectly assigned the Role Management role, the BypassSecurityGroupManagerCheck switch can be used to override the security group management check.

If the role group is a linked role group, you can't use the Remove-RoleGroupMember cmdlet to remove members from the role group. Instead, you need to remove members from the foreign universal security group (USG) linked to the linked role group. To find the foreign USG linked to a role group, use the Get-RoleGroup cmdlet.

For more information about role groups, see Understanding management role groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Remove-RoleGroupMember "Recipient Management" -Member David
```

This example removes the user David from the role group Recipient Management.

### Example 2
```
Get-User -Filter { Department -Eq "Sales" -And -RecipientType -Eq "UserMailbox" } | Get-Mailbox | Remove-RoleGroupMember "Sales and Marketing Group" -WhatIf
```

This example finds all the mailboxes that are part of the Sales department and removes them from the Sales and Marketing Group role group. Because we're using the WhatIf switch, the changes aren't written to the role group, so you can verify that the correct members will be removed.

After you've verified that the correct members will be removed the role group, remove the WhatIf switch and run the command again.

For more information about pipelining, and the WhatIf parameter, see the following topics:

- 0Pipelining

- WhatIf, Confirm and ValidateOnly switches

### Example 3
```
Remove-RoleGroupMember "Training Administrators" -Member "Training Assistants" -BypassSecurityGroupManagerCheck
```

This example removes the Training Assistants USG from the Training Administrators role group. Because the user running the command wasn't added to the ManagedBy property of the role group, the BypassSecurityGroupManagerCheck switch must be used. The user is assigned the Role Management role, which enables the user to bypass the security group manager check.

## PARAMETERS

### -Identity
The Identity parameter specifies the role group that you want to remove a member from. If the role group name contains spaces, enclose the name in quotation marks (").

```yaml
Type: RoleGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Member
The Member parameter specifies the mailbox or USG to remove from a role group. You can only specify one member at a time. If the member name contains spaces, enclose the name in quotation marks (").

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassSecurityGroupManagerCheck
The BypassSecurityGroupManagerCheck switch enables a user who hasn't been added to the ManagedBy property to remove a member from a role group. The user must be a member of the Organization Management role group or be assigned, either directly or indirectly, the Role Management role.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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

### -WhatIf
This parameter doesn't work in the Office 365 Security & Compliance Center.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/eed5ec30-471f-4c60-b377-bdf4a249b3d5.aspx)
