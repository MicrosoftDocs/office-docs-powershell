---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-distributiongroup
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: New-DistributionGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-DistributionGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-DistributionGroup cmdlet to create distribution groups and mail-enabled security groups.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DistributionGroup [-Name] <String>
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-BccBlocked <Boolean>]
 [-BypassNestedModerationEnabled <Boolean>]
 [-Confirm]
 [-CopyOwnerToMember]
 [-Description <MultiValueProperty>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-HiddenGroupMembershipEnabled]
 [-IgnoreNamingPolicy]
 [-ManagedBy <MultiValuedProperty>]
 [-MemberDepartRestriction <MemberUpdateType>]
 [-MemberJoinRestriction <MemberUpdateType>]
 [-Members <MultiValuedProperty>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Notes <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-RoomList]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-Type <GroupType>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can use the New-DistributionGroup cmdlet to create the following types of groups:

- Mail-enabled universal security groups (USGs)
- Universal distribution groups

Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Distribution groups aren't security principals, and therefore can't be assigned permissions. However, you can assign permissions to mail-enabled security groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

In Exchange Server, the [CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216) InformationVariable and InformationAction don't work.

## EXAMPLES

### Example 1
```powershell
New-DistributionGroup -Name "Managers" -Type "Security"
```

This example creates a mail-enabled security group named Managers without specifying any members.

You use the Add-DistributionGroupMember cmdlet to add members after you create the group.

### Example 2
```powershell
New-DistributionGroup -Name "ITDepartment" -Members chris@contoso.com,michelle@contoso.com,laura@contoso.com,julia@contoso.com
```

This example creates a distribution group named ITDepartment and specifies the members.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is also used for the DisplayName property if you don't use the DisplayName parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (`alias@domain`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to `oe` in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.onmicrosoft.com results in the Alias property value `helpdesk`.
- Recipients without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox
This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccBlocked
This parameter is available only in the cloud-based service.

The BccBlocked parameter specifies whether members of the group don't receive messages if the group is used in the Bcc line. Valid values are:

- $true: If the group is used in the Bcc line, members of the group don't receive the message, and the sender receives a non-delivery report (also known as an NDR or bounce message). Other recipients of the message aren't blocked. If an external sender uses the group in the Bcc line, members of the group aren't blocked. For nested groups, the message is blocked only for members of the top-level group.
- $false: There are no restrictions for using the group in the Bcc line of messages. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassNestedModerationEnabled
The ByPassNestedModerationEnabled parameter specifies how to handle message approval when a moderated group contains other moderated groups as members. Valid values are:

- $true: After a moderator approves a message sent to the group, the message is automatically approved for all other moderated groups that are members of the group.
- $false: After a moderator approves a message sent to the group, separate approval is required for each moderated group that's a member of the group. This is the default value.

This parameter can be used only by top-level organization and tenant administrators.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyOwnerToMember
The CopyOwnerToMember switch specifies whether group owners specified by the ManagedBy parameter are also members of the group. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
This parameter is available only in the cloud-based service.

{{ Fill Description Description }}

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

If a group naming policy is enforced in your organization, users need to follow the naming constraints as specified by the DistributionGroupNameBlockedWordList parameter on the Set-OrganizationConfig cmdlet. To bypass this requirement, use the IgnoreNamingPolicy switch.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -HiddenGroupMembershipEnabled
This parameter is available only in the cloud-based service.

The HiddenGroupMembershipEnabled switch specifies whether to hide the members of the distribution group from users who aren't members of the group. You don't need to specify a value with this switch.

You can use this setting to help comply with regulations that require you to hide group membership from members or outsiders (for example, a distribution group that represents students enrolled in a class).

**Note**: If you create the group with hidden membership, you can't edit the group later to reveal the membership to the group.

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

### -IgnoreNamingPolicy
The IgnoreNamingPolicy switch specifies whether to prevent this group from being affected by your organization's group naming policy. You don't need to specify a value with this switch.

The group naming policy is defined by the DistributionGroupNamingPolicy and DistributionGroupNameBlockedWordList parameters on the Set-OrganizationConfig cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter specifies an owner for the group. A group must have at least one owner. If you don't use this parameter to specify the owner when you create the group, the user account that created the group is the owner. The group owner is able to:

- Modify the properties of the group
- Add or remove group members
- Delete the group
- Approve member depart or join requests (if available)
- Approve messages sent to the group if moderation is enabled, but no moderators are specified.

The owner you specify for this parameter must be a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned).

Considerations for mail-enabled security groups as group owners:

- If you specify a mail-enabled security group as a group owner in on-premises Exchange, the mail-enabled security group doesn't sync to the cloud object.
- Group management in Outlook doesn't work if the owner is a mail-enabled security group. To manage the group in Outlook, the owner must be a mailbox or a mail user. If you specify a mail-enabled security group as the owner of the group, the group isn't visible in **Distribution groups I own** for the group owners (members of the mail-enabled security group).

You can use any value that uniquely identifies the owner. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

To enter multiple owners, use the following syntax: `Owner1,Owner2,...OwnerN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Owner1","Owner2",..."OwnerN"`.

Owners that you specify with this parameter are not automatically added as group members. Use the CopyOwnerToMember switch or manually add the owners as members.

**Note**: Group management in Outlook doesn't work when the owner is a mail-enabled security group. To manage the group in Outlook, the owner must be a mailbox or a mail user.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberDepartRestriction
The MemberDepartRestriction parameter specifies the restrictions that you put on requests to leave the group. Valid values are:

- Open: Members can leave the group without approval from one of the group owners. This is the default value for universal distribution groups. You can't use this value on universal security groups.
- Closed: Members can't remove themselves from the group, and requests to leave the group are rejected automatically. Group membership is controlled by the group owners. This is the default value for universal security groups.

```yaml
Type: MemberUpdateType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberJoinRestriction
The MemberJoinRestriction parameter specifies the restrictions that you put on requests to join the group. Valid values are:

- Open: Users can add themselves to the group without approval from a group owner. You can't use this value on universal security groups.
- Closed: Users can't add themselves to the group, and requests to join the group are rejected automatically. Group membership is controlled by the group owners. This is the default value on universal security groups and universal distribution groups.
- ApprovalRequired: Users can request to join the group. The user is added to the group after the request is approved by one of the group owners. Although you can use this value on universal security groups, user requests to join the group aren't sent to the group owners, so this setting is only effective on universal distribution groups.

```yaml
Type: MemberUpdateType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members
The Members parameter specifies the recipients (mail-enabled objects) that are members of the group. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

After you create the group, you use the Get-DistributionGroupMember cmdlet to view the group members, and the Add-DistributionGroupMember, Remove-DistributionGroupMember, and Update-DistributionGroupMember cmdlets to manage group membership.

Although it isn't required, it's a good idea to add only security principals (for example, mailboxes and mail users with user accounts or other mail-enabled security groups) to mail-enabled security groups. If you assign permissions to a mail-enabled security group, any members that aren't security principals (for example, mail contacts or distribution groups) won't have the permissions assigned.

The maximum number of entries for this parameter is 10000.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
The ModeratedBy parameter specifies one or more moderators for this group. A moderator approves messages sent to the group before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

For mail-enabled security groups, you need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

For distribution groups, if you set the ModerationEnabled parameter to the value $true, but you don't use this parameter to specify any moderators, the group owners that are specified by the ManagedBy parameter are responsible for approving messages sent to the group.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter specifies the location in Active Directory where the group is created.

Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoomList
The RoomList switch specifies that all members of this distribution group are room mailboxes. You don't need to specify a value with this switch.

You can create a distribution group for an office building in your organization and add all rooms in that building to the distribution group. Room list distribution groups are used to generate a list of building locations for meeting requests in Outlook 2010 or later. Room lists allow a user to select a building and get availability information for all rooms in that building, without having to add each room individually.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the following characters: !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications
The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.
- Internal: Notify senders in the organization when their messages aren't approved.
- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: TransportModerationNotificationFlags
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the type of group that you want to create. Valid values are:

- Distribution: A distribution group. These groups can't have permissions assigned. This is the default value.
- Security: A mail-enabled security group. These groups can have permissions assigned.

The group's scope is always Universal.

```yaml
Type: GroupType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
