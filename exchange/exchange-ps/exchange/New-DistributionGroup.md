---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# New-DistributionGroup

## SYNOPSIS
!!! Exchange Server 2010

Use the New-DistributionGroup cmdlet to create a distribution group.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DistributionGroup cmdlet to create distribution groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

If you run New-DistributionGroup without specifying an OU, the default OU scope will be wherever the distribution group is being created. Use the OrganizationUnit parameter to specify a different OU.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DistributionGroup cmdlet to create distribution groups and mail-enabled security groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DistributionGroup [-Name] <String> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>]
 [-BypassNestedModerationEnabled <$true | $false>] [-Confirm] [-CopyOwnerToMember] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-IgnoreNamingPolicy] [-ManagedBy <MultiValuedProperty>]
 [-MemberDepartRestriction <Closed | Open | ApprovalRequired>]
 [-MemberJoinRestriction <Closed | Open | ApprovalRequired>] [-Members <MultiValuedProperty>]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>] [-Notes <String>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>] [-RoomList] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-Type <Distribution | Security>] [-WhatIf]
 [-ExternalDirectoryObjectId <String>] [-RequireSenderAuthenticationEnabled <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can use the New-DistributionGroup cmdlet to create Active Directory group objects of the following types:

- Mail-enabled universal security group

- Universal distribution group

Distribution groups are used to consolidate groups of recipients into a single point of contact for e-mail messages. Distribution groups can't be used to assign permissions to network resources in Active Directory.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You can use the New-DistributionGroup cmdlet to create the following types of groups:

- Mail-enabled universal security group (USG)

- Universal distribution group

Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Distribution groups aren't security principals, and therefore can't be used to assign permissions. However, you can use mail-enabled security groups to assign permissions.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

You can use the New-DistributionGroup cmdlet to create the following types of groups:

- Mail-enabled universal security groups (USGs)

- Universal distribution groups

Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Distribution groups aren't security principals, and therefore can't be assigned permissions. However, you can assign permissions to mail-enabled security groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-DistributionGroup -Name "Managers" -OrganizationalUnit "contoso.com/Users" -SamAccountName "Managers" -Type "Security"
```

This example creates a mail-enabled universal security group that has the following parameters:


The group name is Managers.

The group is created in the Users container in the domain contoso.com.

The group SamAccountName parameter value is Managers.

The group type is Security.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-DistributionGroup -Name "Managers" -OrganizationalUnit "contoso.com/Users" -SamAccountName "Managers" -Type "Security"
```

This example creates a mail-enabled universal security group that has the following parameters:


The group name is Managers.

The group is created in the Users container in the domain contoso.com.

The group SamAccountName parameter value is Managers.

The group type is Security.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-DistributionGroup -Name Managers"Managers" -Type "Security"
```

This example creates a mail-enabled security group named Managers without specifying any members.


You use the Add-DistributionGroupMember cmdlet to add members after you create the group.

### Example 1 -------------------------- (Exchange Online)
```
New-DistributionGroup -Name Managers"Managers" -Type "Security"
```

This example creates a mail-enabled security group named Managers without specifying any members.


You use the Add-DistributionGroupMember cmdlet to add members after you create the group.

### Example 1 -------------------------- (Exchange Online Protection)
```
New-DistributionGroup -Name Managers"Managers" -Type "Security"
```

This example creates a mail-enabled security group named Managers without specifying any members.


You use the Add-DistributionGroupMember cmdlet to add members after you create the group.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-DistributionGroup -Name "ITDepartment" -IgnoreNamingPolicy
```

This example creates the distribution group ITDepartment and ignores the naming policy.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-DistributionGroup -Name "ITDepartment" -IgnoreNamingPolicy
```

This example creates the distribution group ITDepartment and ignores the naming policy.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-DistributionGroup -Name "ITDepartment" -Members chris@contoso.com,michelle@contoso.com,laura@contoso.com,julia@contoso.com
```

This example creates a distribution group named ITDepartment and specifies the members.

### Example 2 -------------------------- (Exchange Online)
```
New-DistributionGroup -Name "ITDepartment" -Members chris@contoso.com,michelle@contoso.com,laura@contoso.com,julia@contoso.com
```

This example creates a distribution group named ITDepartment and specifies the members.

### Example 2 -------------------------- (Exchange Online Protection)
```
New-DistributionGroup -Name "ITDepartment" -Members chris@contoso.com,michelle@contoso.com,laura@contoso.com,julia@contoso.com
```

This example creates a distribution group named ITDepartment and specifies the members.

## PARAMETERS

### -Name
!!! Exchange Server 2010

The Name parameter specifies the name for the new distribution group. The value specified in the Name parameter is also used for the DisplayName parameter if the DisplayName parameter isn't specified.

The Name parameter value can't exceed 64 characters.

If a group naming policy is enforced, you need to follow the naming constraints specified in the DistributionGroupNameBlockedWordList and the DistributionGroupNamingPolicy parameters of the Set-OrganizationConfig cmdlet.

If the values of the Name and DisplayName parameters are different:

- The Name parameter specifies the distribution group name in Active Directory Users and Computers and also in the Group Name field in the Exchange Management Console.

- The DisplayName parameter specifies the distribution group name in the Exchange Management Console and in the Exchange global address list (GAL).



!!! Exchange Server 2013

The Name parameter specifies the name for the new distribution group. The value specified in the Name parameter is also used for the DisplayName parameter if the DisplayName parameter isn't specified.

The Name parameter value can't exceed 64 characters.

If a group naming policy is enforced, you need to follow the naming constraints specified in the DistributionGroupNameBlockedWordList and the DistributionGroupNamingPolicy parameters of the Set-OrganizationConfig cmdlet.

If the values of the Name and DisplayName parameters are different:

- The Name parameter specifies the distribution group name in Active Directory Users and Computers.

- The DisplayName parameter specifies the distribution group name in the Exchange Administration Center (EAC) and in the Exchange global address list (GAL).



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name of the group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is also used for the DisplayName property if you don't use the DisplayName parameter.

If a group naming policy is enforced, you need to follow the naming constraints specified in the DistributionGroupNameBlockedWordList and the DistributionGroupNamingPolicy parameters on the Set-OrganizationConfig cmdlet.



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

### -Alias
!!! Exchange Server 2010

The Alias parameter specifies the alias of the distribution group. The Alias parameter is then used to generate the primary SMTP e-mail address of the object. The value of the Alias parameter can't contain spaces. If the Alias parameter isn't specified, the value of the SamAccountName parameter is used to generate the primary SMTP e-mail address, with any spaces converted to underscores.



!!! Exchange Server 2013

The Alias parameter specifies the alias of the distribution group. The Alias parameter is then used to generate the primary SMTP email address of the object.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed, but they will be mapped to a best-fit US-ASCII text character if the Alias value is used to generate the email address.

If the Alias parameter isn't specified, the value of the SamAccountName parameter is used to generate the primary SMTP email address, with any spaces converted to underscores.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.



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

### -ArbitrationMailbox
!!! Exchange Server 2010

The ArbitrationMailbox parameter specifies the mailbox that's used to manage the moderation process.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the mailbox used to manage the moderation process.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)



```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassNestedModerationEnabled
!!! Exchange Server 2010, Exchange Server 2013

The BypassNestedModerationEnabled parameter specifies whether to allow the parent group moderators to provide approval for any nested groups that are also moderated. If you set this parameter to $true, after a moderator approves a message sent to this distribution group, the message is automatically approved for any other moderated recipients that are members of thisdistribution group. The default value is $false.

This parameter can be set only by top-level organization and tenant administrators.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ByPassNestedModerationEnabled parameter specifies how to handle message approval when a moderated group contains other moderated groups as members. Valid values are:

- $true: After a moderator approves a message sent to the group, the message is automatically approved for all other moderated groups that are members of the group.

- $false: After a moderator approves a message sent to the group, separate approval is required for each moderated group that's a member of the group. This is the default value.

This parameter can be used only by top-level organization and tenant administrators.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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

### -CopyOwnerToMember
!!! Exchange Server 2010

The CopyOwnerToMember parameter specifies that a recipient specified in the ManagedBy parameter is also a member of the distribution group.



!!! Exchange Server 2013

The CopyOwnerToMember switch specifies that a recipient specified in the ManagedBy parameter is also a member of the distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The CopyOwnerToMember switch specifies whether group owners specified by the ManagedBy parameter are also members of the group. You don't need to specify a value with this switch.



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

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the name of the distribution group in the Exchange Management Console and in the Exchange GAL. If the DisplayName parameter isn't specified, the value of the Name parameter is used for the DisplayName parameter.



!!! Exchange Server 2013

The DisplayName parameter specifies the name of the distribution group in the EAC and in the Exchange GAL. If the DisplayName parameter isn't specified, the value of the Name parameter is used for the DisplayName parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The DisplayName parameter specifies the display name of the group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.



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
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreNamingPolicy
!!! Exchange Server 2010

The IgnoreNamingPolicy parameter specifies that the naming policy defined in the DistributionGroupNamingPolicy parameter of the Set-OrganizationConfig cmdlet can be ignored. You don't need to specify a value with this parameter.



!!! Exchange Server 2013

The IgnoreNamingPolicy switch specifies that the naming policy defined in the DistributionGroupNamingPolicy parameter of the Set-OrganizationConfig cmdlet can be ignored. You don't need to specify a value with this switch.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The IgnoreNamingPolicy switch specifies whether to prevent this group from being affected by your organization's distribution group naming policy. The policy is defined by the DistributionGroupNamingPolicy parameter on the Set-OrganizationConfig cmdlet. You don't need to specify a value with this switch.



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

### -ManagedBy
!!! Exchange Server 2010

The ManagedBy parameter specifies the name of the mailbox recipient or Active Directory user that appears in the Managed by tab of the Active Directory object. If this parameter isn't specified, the creator of the group is the owner.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com

To specify an Active Directory user, use one of the following values:

- GUID

- DN

- UPN

- Domain\\Account Name

The recipients specified with the ManagedBy parameter aren't members of the distribution group. If you want recipients specified in this parameter to be added as members of the distribution group, use the CopyOwnerToMember parameter.



!!! Exchange Server 2013

The ManagedBy parameter specifies the name of the mailbox recipient or Active Directory user that appears in the Managed by tab of the Active Directory object. If this parameter isn't specified, the creator of the group is the owner.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)

To specify an Active Directory user, use one of the following values:

- GUID

- DN

- UPN

- Domain\\Account Name

The recipients specified with the ManagedBy parameter aren't members of the distribution group. If you want recipients specified in this parameter to be added as members of the distribution group, use the CopyOwnerToMember parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ManagedBy parameter specifies an owner for the group. A group must have at least one owner. If you don't use this parameter to specify the owner when you create the group, the user account that created the group is the owner. The group owner is able to:

- Modify the properties of the group

- Add or remove group members

- Delete the group

- Approve member depart or join requests (if available)

- Approve messages sent to the group if moderation is enabled, but no moderators are specified.

The owner you specify for this parameter must be a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the owner. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

An owner that you specify with this parameter isn't automatically a member of the group. You need to manually add the owner as a member.

Alternatively, you can use the CopyOwnerToMember switch so the owners are automatically made members of the group.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberDepartRestriction
!!! Exchange Server 2010

The MemberDepartRestriction parameter specifies the restrictions that you can put on recipients who want to depart the group membership. This parameter can take one of the following values:

- Open

- Closed

- ApprovalRequired

Universal security groups can't use the Open value. By default, they're set to Closed.



!!! Exchange Server 2013

The MemberDepartRestriction parameter specifies the restrictions that you put on requests to leave the group. Valid values are:

- Open Members can leave the group without approval from one of the group owners. This is the default value for universal distribution groups. You can't use this value on universal security groups.

- Closed Members can't remove themselves from the group, and requests to leave the group are rejected automatically. Group membership is controlled by the group owners. This is the default value for universal security groups.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The MemberDepartRestriction parameter specifies the restrictions that you put on requests to leave the group. Valid values are:

- Open: Members can leave the group without approval from one of the group owners. This is the default value for universal distribution groups. You can't use this value on universal security groups.

- Closed: Members can't remove themselves from the group, and requests to leave the group are rejected automatically. Group membership is controlled by the group owners. This is the default value for universal security groups.



```yaml
Type: Closed | Open | ApprovalRequired
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberJoinRestriction
!!! Exchange Server 2010

The MemberJoinRestriction parameter specifies the restrictions that you can put on recipients who want to join the group membership. This parameter can take one of the following values:

- Open

- Closed

- ApprovalRequired

Universal security groups can't use the Open value. By default, they're set to Closed.



!!! Exchange Server 2013

The MemberJoinRestriction parameter specifies the restrictions that you put on requests to join the group. Valid values are:

- Open Users can add themselves to the group without approval from one of the group owners. You can't use this value on universal security groups.

- Closed Users can't add themselves to the group, and requests to join the group are rejected automatically. Group membership is controlled by the group owners. This is the default value on universal security groups and universal distribution groups.

- ApprovalRequired Users can request to join the group. The user is added to the group after the request is approved by one of the group owners.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The MemberJoinRestriction parameter specifies the restrictions that you put on requests to join the group. Valid values are:

- Open: Users can add themselves to the group without approval from a group owner. You can't use this value on universal security groups.

- Closed: Users can't add themselves to the group, and requests to join the group are rejected automatically. Group membership is controlled by the group owners. This is the default value on universal security groups and universal distribution groups.

- ApprovalRequired: Users can request to join the group. The user is added to the group after the request is approved by one of the group owners. Although you can use this value on universal security groups, user requests to join the group aren't sent to the group owners, so this setting is only effective on universal distribution groups.



```yaml
Type: Closed | Open | ApprovalRequired
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members
!!! Exchange Server 2010

The Members parameter specifies the initial list of recipients or Active Directory users who are a part of this distribution group.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com

To specify an Active Directory user, use one of the following values:

- GUID

- DN

- UPN

- Domain\\Account Name



!!! Exchange Server 2013

The Members parameter specifies the initial list of recipients or Active Directory users who are a part of this distribution group.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)

To specify an Active Directory user, use one of the following values:

- GUID

- DN

- UPN

- Domain\\Account Name



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Members parameter specifies the recipients (mail-enabled objects) that are members of the group. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

After you create the group, you use the Get-DistributionGroupMember cmdlet to view the group members, and the Add-DistributionGroupMember, Remove-DistributionGroupMember, and Update-DistributionGroupMember cmdlets to manage group membership.

Although it isn't required, it's a good idea to add only security principals (for example, mailboxes and mail users with user accounts or other mail-enabled security groups) to mail-enabled security groups. If you assign permissions to a mail-enabled security group, any members that aren't security principals (for example, mail contacts or distribution groups) won't have the permissions assigned.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
!!! Exchange Server 2010, Exchange Server 2013

The ModeratedBy parameter specifies the users who are responsible for moderating the messages sent to this distribution group. To designate more than one user, separate the users by commas.

The ModeratedBy parameter is required if you set the ModerationEnabled parameter to $true. If you leave this parameter blank and there is a user already specified as the manager of this distribution group, the ModeratedBy field is automatically set to the ManagedBy parameter of the distribution group. Otherwise, an error is returned.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ModeratedBy parameter specifies one or more moderators for this group. A moderator approves messages sent to the group before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

For mail-enabled security groups, you need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

For distribution groups, if you set the ModerationEnabled parameter to the value $true, but you don't use this parameter to specify any moderators, the group owners that are specified by the ManagedBy parameter are responsible for approving messages sent to the group.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ModerationEnabled parameter specifies whether to enable moderation for the distribution group. To ensure moderation, set this parameters to $true. To disable moderation, set this parameter to $false.

The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.

- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
!!! Exchange Server 2010, Exchange Server 2013

The Notes parameter specifies additional information about the distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").



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

### -Organization
!!! Exchange Server 2010

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.



!!! Exchange Server 2013

The Organization parameter is reserved for internal Microsoft use.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
!!! Exchange Server 2010, Exchange Server 2013

The OrganizationalUnit parameter specifies the container where the distribution group is created.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The OrganizationalUnit parameter specifies the location in Active Directory where the group is created.

Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID



```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideRecipientQuotas
!!! Exchange Server 2010

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The OverrideRecipientQuotas parameter specifies that the recipient quotas for this group can be overridden. Groups that are part of a tenant organization will use the quotas defined in the tenant organization's service plan. Use this parameter to allow the command to skip the tenant-level recipient quotas check.

Using this parameter doesn't set quotas. You need to define the quotas for the group using the appropriate Set cmdlet.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.



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

### -PrimarySmtpAddress
!!! Exchange Server 2010

The PrimarySmtpAddress parameter specifies the primary return SMTP e-mail address for the distribution group. This parameter has meaning only if the distribution group has multiple SMTP e-mail addresses.



!!! Exchange Server 2013

The PrimarySmtpAddress parameter specifies the primary return SMTP email address for the distribution group. This parameter has meaning only if the distribution group has multiple SMTP email addresses.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.



```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoomList
!!! Exchange Server 2010

The RoomList parameter specifies that all members of the distribution group are room resource mailboxes. You can create a distribution list for an office building in your organization and add all the rooms in that building to the distribution group. Room list distribution groups are then used to generate a list of building locations in Microsoft Outlook 2010 so the user can select a building and get information about when rooms are available in that building, without having to add the rooms in that building individually.

You can't use the RoomList parameter in conjunction with the ExternalManaged parameter.



!!! Exchange Server 2013

The RoomList switch specifies that all members of the distribution group are room resource mailboxes. You can create a distribution group for an office building in your organization and add all the rooms in that building to the distribution group. Room list distribution groups are then used to generate a list of building locations in Microsoft Outlook 2010 so the user can select a building and get information about when rooms are available in that building, without having to add the rooms in that building individually.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RoomList switch specifies that all members of this distribution group are room mailboxes. You don't need to specify a value with this switch.

You can create a distribution group for an office building in your organization and add all rooms in that building to the distribution group. Room list distribution groups are used to generate a list of building locations for meeting requests in Outlook 2010 or later. Room lists allow a user to select a building and get availability information for all rooms in that building, without having to add each room individually.



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

### -SamAccountName
!!! Exchange Server 2010

The SamAccountName parameter specifies the name for clients of the object running older operating systems. The SamAccountName parameter is displayed in Active Directory and the Exchange Management Console in the Group name (pre-Windows 2000) field. If the Alias parameter isn't specified, the following conditions are true:

- The value of the SamAccountName parameter is used for the value of the Alias parameter, with any spaces converted to underscores.

- The SamAccountName parameter, with any spaces converted to underscores, is used to generate the primary SMTP e-mail address of the object.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The SamAccountName parameter specifies the name for clients of the object running older operating systems. The SamAccountName parameter is displayed in Active Directory. If the Alias parameter isn't specified, the following conditions are true:

- The value of the SamAccountName parameter is used for the value of the Alias parameter, with any spaces converted to underscores.

- The SamAccountName parameter, with any spaces converted to underscores, is used to generate the primary SMTP email address of the object.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.



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

### -SendModerationNotifications
!!! Exchange Server 2010, Exchange Server 2013

The SendModerationNotifications parameter specifies whether status notifications are sent to users when they send a message to the moderated distribution group. You can specify one of the following values:

- Always

- Internal

- Never

Set this parameter to Always if you want notifications to be sent to all senders.

Set this parameter to Internal if you want notifications to be sent only to the senders who are internal to your organization.

Set this parameter to Never to disable all status notifications.

The senders are always notified if their message is rejected by the moderators, regardless of the value of the parameter.

The default value is Never.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.

- Internal: Notify senders in the organization when their messages aren't approved.

- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).



```yaml
Type: Never | Internal | Always
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
!!! Exchange Server 2010

The Type parameter specifies the group type that's created in Active Directory. The group's scope is always Universal. Valid values are Distribution or Security.



!!! Exchange Server 2013

The Type parameter specifies the group type created in Active Directory. The group's scope is always Universal. Valid values are Distribution or Security.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Type parameter specifies the type of group that you want to create. Valid values are:

- Distribution: A distribution group. These groups can't have permissions assigned. This is the default value.

- Security: A mail-enabled security group. These groups can have permissions assigned.

The group's scope is always Universal.



```yaml
Type: Distribution | Security
Parameter Sets: (All)
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

### -ExternalDirectoryObjectId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSenderAuthenticationEnabled
The RequireSenderAuthenticationEnabled parameter specifies whether to accept messages only from authenticated (internal) senders. Valid values are:

- $true: Messages are accepted only from authenticated (internal) senders. Messages from unauthenticated (external) senders are rejected.

- $false: Messages are accepted from authenticated (internal) and unauthenticated (external) senders.

The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/7446962a-cf07-47a1-90d8-45df44057065.aspx)

