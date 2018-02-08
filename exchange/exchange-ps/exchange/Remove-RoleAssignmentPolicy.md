---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Remove-RoleAssignmentPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-RoleAssignmentPolicy cmdlet to remove an existing management role assignment policy from a server running Microsoft Exchange Server 2010.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-RoleAssignmentPolicy cmdlet to remove an existing management role assignment policy from a server running Microsoft Exchange Server 2013.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-RoleAssignmentPolicy cmdlet to remove existing management role assignment policies from your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-RoleAssignmentPolicy [-Identity] <MailboxPolicyIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The assignment policy you want to remove can't be assigned to any mailboxes or management roles. Also, if you want to remove the default assignment policy, it must be the last assignment policy. Do the following before you attempt to remove an assignment policy:

- Use the Set-Mailbox cmdlet to change the assignment policy for any mailbox that's assigned the assignment policy you want to remove.

- If the assignment policy is the default assignment policy, use the Set-RoleAssignmentPolicy cmdlet to select a new default assignment policy. You don't need to do this if you're removing the last assignment policy.

- Use the Remove-ManagementRoleAssignment cmdlet to remove any management role assignments assigned to the policy.

For more information about assignment policies, see Understanding Management Role Assignment Policies.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Assignment policies" entry in the Role Management Permissions topic.

!!! Exchange Server 2013

The assignment policy you want to remove can't be assigned to any mailboxes or management roles. Also, if you want to remove the default assignment policy, it must be the last assignment policy. Do the following before you attempt to remove an assignment policy:

- Use the Set-Mailbox cmdlet to change the assignment policy for any mailbox assigned the assignment policy you want to remove.

- If the assignment policy is the default assignment policy, use the Set-RoleAssignmentPolicy cmdlet to select a new default assignment policy. You don't need to do this if you're removing the last assignment policy.

- Use the Remove-ManagementRoleAssignment cmdlet to remove any management role assignments assigned to the policy.

For more information about assignment policies, see Understanding management role assignment policies.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Assignment policies" entry in the Role management permissions topic.

!!! Exchange Server 2016, Exchange Online

The assignment policy you want to remove can't be assigned to any mailboxes or management roles. Also, if you want to remove the default assignment policy, it must be the last assignment policy. Do the following before you attempt to remove an assignment policy:

- Use the Set-Mailbox cmdlet to change the assignment policy for any mailbox assigned the assignment policy you want to remove.

- If the assignment policy is the default assignment policy, use the Set-RoleAssignmentPolicy cmdlet to select a new default assignment policy. You don't need to do this if you're removing the last assignment policy.

- Use the Remove-ManagementRoleAssignment cmdlet to remove any management role assignments assigned to the policy.

For more information about assignment policies, see Understanding management role assignment policies.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"}; Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"} | Set-Mailbox -RoleAssignmentPolicy "Seattle End User"; Get-ManagementRoleAssignment -RoleAssignee "End User" | Remove-ManagementRoleAssignment; Remove-RoleAssignmentPolicy "End User"
```

This example removes the role assignment policy named End User:


Find all mailboxes that have the End User policy assigned to them.

Assign a different role assignment policy to the mailboxes. The example uses the policy named Seattle End User.

Remove all management role assignments that are assigned to the End User policy.

Remove the End User role assignment policy.

For more information about the Where cmdlet and pipelining, see Working with Command Output and Pipelining.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"}; Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"} | Set-Mailbox -RoleAssignmentPolicy "Seattle End User"; Get-ManagementRoleAssignment -RoleAssignee "End User" | Remove-ManagementRoleAssignment; Remove-RoleAssignmentPolicy "End User"
```

This example removes the role assignment policy named End User:


Find all mailboxes that have the End User policy assigned to them.

Assign a different role assignment policy to the mailboxes. The example uses the policy named Seattle End User.

Remove all management role assignments that are assigned to the End User policy.

Remove the End User role assignment policy.

For more information about the Where cmdlet and pipelining, see Working with command output and Pipelining.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"}; Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"} | Set-Mailbox -RoleAssignmentPolicy "Seattle End User"; Get-ManagementRoleAssignment -RoleAssignee "End User" | Remove-ManagementRoleAssignment; Remove-RoleAssignmentPolicy "End User"
```

This example removes the role assignment policy named End User:


Find all mailboxes that have the End User policy assigned to them.

Assign a different role assignment policy to the mailboxes. The example uses the policy named Seattle End User.

Remove all management role assignments that are assigned to the End User policy.

Remove the End User role assignment policy.

For more information about the Where cmdlet and pipelining, see Working with command output and Pipelining.

### Example 1 -------------------------- (Exchange Online)
```
Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"}; Get-Mailbox | Where {$_.RoleAssignmentPolicy -Eq "End User"} | Set-Mailbox -RoleAssignmentPolicy "Seattle End User"; Get-ManagementRoleAssignment -RoleAssignee "End User" | Remove-ManagementRoleAssignment; Remove-RoleAssignmentPolicy "End User"
```

This example removes the role assignment policy named End User:


Find all mailboxes that have the End User policy assigned to them.

Assign a different role assignment policy to the mailboxes. The example uses the policy named Seattle End User.

Remove all management role assignments that are assigned to the End User policy.

Remove the End User role assignment policy.

For more information about the Where cmdlet and pipelining, see Working with command output and Pipelining.

## PARAMETERS

### -Identity
The Identity parameter specifies the assignment policy to remove. If the assignment policy name has spaces, enclose the name in quotation marks (").

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/cfcfe435-cd52-4d40-a298-0c1ca11b8995.aspx)

