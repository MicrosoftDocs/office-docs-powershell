---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-RoleAssignmentPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# New-RoleAssignmentPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-RoleAssignmentPolicy cmdlet to create management role assignment policies in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-RoleAssignmentPolicy [-Name] <String> [-Confirm] [-Description <String>] [-DomainController <Fqdn>]
 [-IsDefault] [-Roles <RoleIdParameter[]>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
When you create an assignment policy, you can assign it to users using the New-Mailbox, Set-Mailbox, or Enable-Mailbox cmdlets. If you make the new assignment policy the default assignment policy, it's assigned to all new mailboxes that don't have an explicit assignment policy assigned to them.

You can add management roles to the new assignment policy when you create it, or you can create the assignment policy and add roles later. You must assign at least one management role to the new assignment policy for it to apply permissions to a mailbox. Without any roles assigned to the new assignment policy, users assigned to it won't be able to manage their mailbox configuration. To assign a management role after the assignment policy has been created, use the New-ManagementRoleAssignment cmdlet. For more information, see Manage role assignment policies (https://technet.microsoft.com/library/jj657511.aspx).

For more information about assignment policies, see Understanding management role assignment policies (https://technet.microsoft.com/library/dd638100.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-RoleAssignmentPolicy -Name "End User Policy"; Set-Mailbox -Identity Joe -RoleAssignmentPolicy "End User Policy"
```

This example creates an assignment policy. After the assignment policy is created, you can assign the assignment policy to a mailbox using the Set-Mailbox cmdlet.

### -------------------------- Example 2 --------------------------
```
New-RoleAssignmentPolicy -Name "Default End User Policy" -IsDefault
```

This example creates an assignment policy using the IsDefault switch.

### -------------------------- Example 3 --------------------------
```
New-RoleAssignmentPolicy -Name "Limited End User Policy" -Roles "MyPersonalInformation", "MyDistributionGroupMembership", "MyVoiceMail" -IsDefault; Get-Mailbox -ResultSize Unlimited | Set-Mailbox -RoleAssignmentPolicy "Limited End User Policy"
```

This example creates an assignment policy that enables users to modify their personal information, manage their distribution group membership, and manage their voice mail. The new assignment policy is created as the new default assignment policy. Then, all existing mailboxes are configured to use the new assignment policy.

First, the new assignment policy is created and set as the new default assignment policy.

Because setting the new role assignment as default applies only to new mailboxes or mailboxes moved from previous versions of Exchange, the Set-Mailbox cmdlet is used to configure the new assignment policy on all existing mailboxes.

## PARAMETERS

### -Name
The Name parameter specifies the name of the new assignment policy. If the assignment policy name contains spaces, enclose the name in quotation marks ("). The maximum length of the name is 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: 1
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies the description that's displayed when the role assignment policy is viewed using the Get-RoleAssignmentPolicy cmdlet. Enclose the description in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
The IsDefault switch makes the assignment policy the default assignment policy. You don't have to specify a value with this switch.

New mailboxes or mailboxes moved from previous versions of Exchange are assigned the default assignment policy when an explicit assignment policy isn't provided.

Setting an assignment policy as default doesn't change the role assignment on existing mailboxes. To change the assignment policies on existing mailboxes, use the Set-Mailbox cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Roles
The Roles parameter specifies the management roles to assign to the role assignment policy when it's created. If a role name contains spaces, enclose the name in quotation marks ("). If you want to assign more that one role, separate the role names with commas.

For a list of built-in management roles that you can assign to a role group, see Built-in management roles (https://technet.microsoft.com/library/dd638077.aspx).

```yaml
Type: RoleIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/25a56027-2e25-4f98-842f-c671a1bf56f9.aspx)
