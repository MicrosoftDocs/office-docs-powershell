---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-DistributionGroup

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-DistributionGroup cmdlet to modify the settings of an existing distribution group.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-DistributionGroup cmdlet to modify the settings of existing distribution groups. To add or remove distribution group members, use the Add-DistributionGroupMember, Remove-DistributionGroupMember or Update-DistributionGroupMember cmdlets.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-DistributionGroup cmdlet to modify the settings of existing distribution groups or mail-enabled security groups. To add or remove group members, use the Add-DistributionGroupMember, Remove-DistributionGroupMember or Update-DistributionGroupMember cmdlets.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-DistributionGroup [-Identity] <DistributionGroupIdParameter>
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>] [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-BypassNestedModerationEnabled <$true | $false>] [-BypassSecurityGroupManagerCheck] [-Confirm]
 [-CreateDTMFMap <$true | $false>] [-CustomAttribute1 <String>] [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>] [-CustomAttribute12 <String>] [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>] [-CustomAttribute15 <String>] [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>] [-CustomAttribute4 <String>] [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>] [-CustomAttribute7 <String>] [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-EmailAddresses <ProxyAddressCollection>] [-EmailAddressPolicyEnabled <$true | $false>]
 [-ExpansionServer <String>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ForceUpgrade] [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IgnoreDefaultScope] [-IgnoreNamingPolicy] [-MailTip <String>] [-MailTipTranslations <MultiValuedProperty>]
 [-ManagedBy <MultiValuedProperty>] [-MaxReceiveSize <Unlimited>] [-MaxSendSize <Unlimited>]
 [-MemberDepartRestriction <Closed | Open | ApprovalRequired>]
 [-MemberJoinRestriction <Closed | Open | ApprovalRequired>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Name <String>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RejectMessagesFrom <MultiValuedProperty>] [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>] [-ReportToManagerEnabled <$true | $false>]
 [-ReportToOriginatorEnabled <$true | $false>] [-RequireSenderAuthenticationEnabled <$true | $false>]
 [-RoomList] [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SendOofMessageToOriginatorEnabled <$true | $false>] [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-GenerateExternalDirectoryObjectId] [-ResetMigrationToUnifiedGroup] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

Distribution groups are used to consolidate groups of recipients into a single point of contact for e-mail messages. Distribution groups can't be used to assign permissions to network resources in Active Directory. You can use the Set-DistributionGroup cmdlet to overwrite existing settings or to add new settings.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Distribution groups aren't security principals, and therefore can't be used to assign permissions. However, you can use mail-enabled security groups to assign permissions.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Distribution groups aren't security principals, and therefore can't be assigned permissions. However, you can assign permissions to mail-enabled security groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-DistributionGroup -Identity "Accounting" -DisplayName "Accounting Group"
```

This example changes the display name of an existing distribution group from Accounting to Accounting Group.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-DistributionGroup -Identity "Accounting" -DisplayName "Accounting Group"
```

This example changes the display name of an existing distribution group from Accounting to Accounting Group.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-DistributionGroup -Identity "Accounting" -DisplayName "Accounting Group"
```

This example changes the display name of an existing distribution group from Accounting to Accounting Group.

### Example 1 -------------------------- (Exchange Online)
```
Set-DistributionGroup -Identity "Accounting" -DisplayName "Accounting Group"
```

This example changes the display name of an existing distribution group from Accounting to Accounting Group.

### Example 1 -------------------------- (Exchange Online Protection)
```
Set-DistributionGroup -Identity "Accounting" -DisplayName "Accounting Group"
```

This example changes the display name of an existing distribution group from Accounting to Accounting Group.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-DistributionGroup -Identity "Bldg34 Conf Rooms" -RoomList
```

This example converts the Bldg34 Conf Rooms distribution group to a room list.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-DistributionGroup -Identity "Bldg34 Conf Rooms" -RoomList
```

This example converts the Bldg34 Conf Rooms distribution group to a room list.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-DistributionGroup -Identity "Bldg34 Conf Rooms" -RoomList
```

This example converts the Bldg34 Conf Rooms distribution group to a room list.

### Example 2 -------------------------- (Exchange Online)
```
Set-DistributionGroup -Identity "Bldg34 Conf Rooms" -RoomList
```

This example converts the Bldg34 Conf Rooms distribution group to a room list.

### Example 2 -------------------------- (Exchange Online Protection)
```
Set-DistributionGroup -Identity "Bldg34 Conf Rooms" -RoomList
```

This example converts the Bldg34 Conf Rooms distribution group to a room list.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-DistributionGroup -Identity Ed_DirectReports -Name Ayla_DirectReports -IgnoreNamingPolicy
```

This example changes the name of an existing distribution group from Ed\_DirectReports to Ayla\_DirectReports and ignores the group naming policy.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-DistributionGroup -Identity Ed_DirectReports -Name Ayla_DirectReports -IgnoreNamingPolicy
```

This example changes the name of an existing distribution group from Ed\_DirectReports to Ayla\_DirectReports and ignores the group naming policy.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-DistributionGroup -Identity Ed_DirectReports -Name Ayla_DirectReports -IgnoreNamingPolicy
```

This example changes the name of an existing distribution group from Ed\_DirectReports to Ayla\_DirectReports and ignores the group naming policy.

### Example 3 -------------------------- (Exchange Online)
```
Set-DistributionGroup -Identity Ed_DirectReports -Name Ayla_DirectReports -IgnoreNamingPolicy
```

This example changes the name of an existing distribution group from Ed\_DirectReports to Ayla\_DirectReports and ignores the group naming policy.

### Example 3 -------------------------- (Exchange Online Protection)
```
Set-DistributionGroup -Identity Ed_DirectReports -Name Ayla_DirectReports -IgnoreNamingPolicy
```

This example changes the name of an existing distribution group from Ed\_DirectReports to Ayla\_DirectReports and ignores the group naming policy.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the object that you want to modify.

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

The Identity parameter specifies the distribution group that you want to modify. You can use any value that uniquely identifies the distribution group.

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

The Identity parameter specifies the distribution group or mail-enabled security group that you want to modify. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID



```yaml
Type: DistributionGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFrom
!!! Exchange Server 2010

The AcceptMessagesOnlyFrom parameter specifies the mailbox users, mail users, and mail contacts who can send e-mail messages to this distribution group. You can also specify Microsoft Exchange as a valid recipient for this parameter. If you configure a distribution group to accept messages only from the Microsoft Exchange recipient, the distribution group only receives system-generated messages.

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

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all senders.



!!! Exchange Server 2013

The AcceptMessagesOnlyFrom parameter specifies the mailbox users, mail users, and mail contacts who can send email messages to this distribution group. You can also specify Microsoft Exchange as a valid recipient for this parameter. If you configure a distribution group to accept messages only from the Microsoft Exchange recipient, the distribution group only receives system-generated messages.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all senders.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFrom parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>"....

To add or remove senders without affecting other existing entries, use the following syntax: @{Add="\<sender1\>","\<sender2\>"...; Remove="\<sender1\>","\<sender2\>"...}.

The senders you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.



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

### -AcceptMessagesOnlyFromDLMembers
!!! Exchange Server 2010

The AcceptMessagesOnlyFromDLMembers parameter specifies the distribution groups whose members are allowed to send e-mail messages to this distribution group.

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

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all senders.



!!! Exchange Server 2013

The AcceptMessagesOnlyFromDLMembers parameter specifies the distribution groups whose members are allowed to send email messages to this distribution group.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all senders.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFromDLMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group are allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: \<group1\>,\<group2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<group1\>","\<group2\>"....

To add or remove groups without affecting other existing entries, use the following syntax: @{Add="\<group1\>","\<group2\>"...; Remove="\<group1\>","\<group2\>"...}.

The groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFromDLMembers and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.



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

### -AcceptMessagesOnlyFromSendersOrMembers
!!! Exchange Server 2010

The AcceptMessagesOnlyFromSendersOrMembers parameter specifies the recipients who can send e-mail messages to this distribution group. You can specify users, contacts, or distribution groups. If you specify a distribution group, messages are accepted from all recipients that are members of that distribution group. You can also specify Exchange as a valid recipient for this parameter. If you configure a distribution group to accept messages only from the Exchange recipient, the distribution group only receives system-generated messages.

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

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all senders.



!!! Exchange Server 2013

The AcceptMessagesOnlyFromSendersOrMembers parameter specifies the recipients who can send email messages to this distribution group. You can specify users, contacts, or distribution groups. If you specify a distribution group, messages are accepted from all recipients that are members of that distribution group. You can also specify Exchange as a valid recipient for this parameter. If you configure a distribution group to accept messages only from the Exchange recipient, the distribution group only receives system-generated messages.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all senders.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFromSendersOrMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group are allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>"....

To add or remove individual senders or groups without affecting other existing entries, use the AcceptMessagesOnlyFrom and AcceptMessageOnlyFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers properties, respectively. Therefore, you can't use the AcceptMessagesOnlyFromSendersOrMembers parameter and the AcceptMessagesOnlyFrom or AcceptMessagesOnlyFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.



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

### -Alias
!!! Exchange Server 2010

The Alias parameter specifies the alias of the distribution group. The Alias parameter is used to generate the primary SMTP e-mail address of the object. The value of the Alias parameter can't contain spaces. If the Alias parameter isn't specified, the value of the SamAccountName parameter is used to generate the primary SMTP e-mail address, with any spaces converted to underscores.



!!! Exchange Server 2013

The Alias parameter specifies the alias of the distribution group. The Alias parameter is used to generate the primary SMTP email address of the object.

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

The ArbitrationMailbox parameter specifies the mailbox that's used to manage the moderation process. This parameter is automatically set when blank and moderation is enabled.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the mailbox that's used to manage the moderation process. This parameter is automatically set when moderation is enabled.



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

### -BypassModerationFromSendersOrMembers
!!! Exchange Server 2010

The BypassModerationFromSendersOrMembers parameter specifies senders for whom moderation is to be bypassed.

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

The BypassModerationFromSendersOrMembers parameter specifies senders for whom moderation is to be bypassed.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The BypassModerationFromSendersOrMembers parameter specifies who is allowed to send messages to this moderated recipient without approval from a moderator. Valid values for this parameter are individual senders and groups in your organization. Specifying a group means all members of the group are allowed to send messages to this recipient without approval from a moderator.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple senders and overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>"....

To add or remove one or more senders without affecting any existing entries, use the following syntax: @{Add="\<sender1\>","\<sender2\>"...; Remove="\<sender3\>","\<sender4\>"...}.

This parameter is meaningful only when moderation is enabled for the recipient. By default, this parameter is blank ($null), which means messages from all senders other than the designated moderators are moderated. When a moderator sends a message to this recipient, the message is isn't moderated. In other words, you don't need to use this parameter to include the moderators.



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

### -BypassNestedModerationEnabled
!!! Exchange Server 2010

The ByPassNestedModerationEnabled parameter specifies whether to allow the parent group moderators to provide approval for any nested groups that are also moderated. If you set this parameter to $true, all moderation in any nested distribution groups is bypassed on approved e-mail messages.

The default value is $false.



!!! Exchange Server 2013

The ByPassNestedModerationEnabled parameter specifies whether to allow the parent group moderators to provide approval for any nested groups that are also moderated. If you set this parameter to $true, all moderation in any nested distribution groups is bypassed on approved email messages.

The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ByPassNestedModerationEnabled parameter specifies how to handle message approval when a moderated group contains other moderated groups as members. Valid values are:

- $true: After a moderator approves a message sent to the group, the message is automatically approved for all other moderated groups that are members of the group.

- $false: After a moderator approves a message sent to the group, separate approval is required for each moderated group that's a member of the group. This is the default value.



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

### -BypassSecurityGroupManagerCheck
!!! Exchange Server 2010

The BypassSecurityGroupManagerCheck parameter specifies whether to bypass security checks and moderation for the member that's being added. Use this parameter when the specified distribution group is a moderated distribution group, and you want to bypass security checks and moderation for the member that's being added.



!!! Exchange Server 2013

The BypassSecurityGroupManagerCheck switch specifies whether to bypass security checks and moderation for the member that's being added. Use this switch when the specified distribution group is a moderated distribution group, and you want to bypass security checks and moderation for the member that's being added.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The BypassSecurityGroupManagerCheck switch specifies whether to allow a user who isn't an owner of the group to modify or delete the group. If you aren't defined in the ManagedBy property of the group, you need to use this switch in commands that modify or delete the group. To use this switch, your account requires specific permissions based on the group type:

- Distribution groups or mail-enabled security groups: You need to be a member of the Organization Management role group or have the Security Group Creation and Membership role assigned.

- Role groups: You need to be a member of the Organization Management role group or have the Role Management role assigned.

You don't need to specify a value with this switch.



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

### -CreateDTMFMap
!!! Exchange Server 2010

The CreateDTMFMap parameter specifies that a dual tone multi-frequency (DTMF) map be created for the distribution group.



!!! Exchange Server 2013

The CreateDTMFMap parameter specifies that a dual-tone multiple-frequency (DTMF) map be created for the distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This is the default value.

- $false: A DTMF map isn't created for the recipient.



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

### -CustomAttribute1
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute10
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute11
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute12
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute13
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute14
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute15
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute2
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute3
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute4
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute5
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute6
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute7
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute8
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -CustomAttribute9
The CustomAttribute1 to CustomAttribute15 parameters specify custom attributes. You can use these attributes to store additional information.

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

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the distribution group's name in the Exchange Management Console and in the Exchange global address list (GAL).



!!! Exchange Server 2013

The DisplayName parameter specifies the distribution group's name in the Exchange Administration Center and in the Exchange global address list (GAL).



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The DisplayName parameter specifies the display name of the group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").



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

### -EmailAddresses
!!! Exchange Server 2010

The EmailAddresses parameter specifies the e-mail alias of the distribution group. All valid Microsoft Exchange Server 2010 e-mail address types can be used. You can specify multiple values for the EmailAddresses parameter as a comma-delimited list.

Exchange 2010 doesn't validate custom addresses for correct formatting. You must ensure that the custom address you specify complies with the format requirements for that address type. Because X.400 addresses are considered custom addresses in Exchange 2010, they also aren't validated, and you must provide the correct syntax when specifying an X.400 address.



!!! Exchange Server 2013

The EmailAddresses parameter specifies the email alias of the distribution group. All valid Microsoft Exchange Server 2013 email address types can be used. You can specify multiple values for the EmailAddresses parameter as a comma-delimited list.

Exchange 2013 doesn't validate custom addresses for correct formatting. You must ensure that the custom address you specify complies with the format requirements for that address type. Because X.400 addresses are considered custom addresses in Exchange 2013, they also aren't validated, and you must provide the correct syntax when specifying an X.400 address.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The EmailAddresses parameter specifies all the email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx).

Valid syntax for this parameter is \<Type\>:\<emailaddress1\>,\<Type\>:\<emailaddress2\>.... The optional \<Type\> value specifies the type of email address. Some examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.

- smtp: Other SMTP email addresses.

- X400: X.400 addresses in on-premises Exchange.

- X500: X.500 addresses in on-premises Exchange.

If you don't include a \<Type\> value for an email address, the value smtp is assumed. Note that Exchange doesn't validate the syntax of custom address types (including X.400 addresses). Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the \<Type\> value SMTP on the address.

- The first email address when you don't use any \<Type\> values, or when you use multiple \<Type\> values of smtp.

- If it's available, use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To replace all existing proxy email addresses with the values you specify, use the following syntax: "\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>"....

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: @{Add="\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>"...; Remove="\<Type\>:\<emailaddress2\>","\<Type\>:\<emailaddress2\>"...}.



```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddressPolicyEnabled
!!! Exchange Server 2010

The EmailAddressPolicyEnabled parameter specifies the application of e-mail address policies to this distribution group. Valid values are $true or $false. The default value is $true. By default, all applicable e-mail address policies are applied to this distribution group.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The EmailAddressPolicyEnabled parameter specifies the application of email address policies to this distribution group. Valid values are $true or $false. The default value is $true. By default, all applicable email address policies are applied to this distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The EmailAddressPolicyEnabled parameter specifies whether to apply email address policies to this recipient. Valid values are:

- $true: Email address policies are applied to this recipient. This is the default value.

- $false: Email address policies aren't applied to this recipient.



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

### -ExpansionServer
!!! Exchange Server 2010

The ExpansionServer parameter specifies the Exchange server used to expand the distribution group. Enter the expansion server as a legacy Exchange DN value. The default behavior is to use the closest Exchange Server 2003 computer, or the closest Exchange Server 2007 or Exchange 2010 server that has the Hub Transport server role installed.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ExpansionServer parameter specifies the Exchange server that's used to expand the distribution group. The default value is blank ($null), which means expansion happens on the closest available Exchange 2013 Mailbox server. If you specify an expansion server, and that server is unavailable, any messages that are sent to the distribution group can't be delivered. Therefore, you should consider implementing a high availability solution for an expansion server.

You can specify the following types of servers as expansion servers:

- An Exchange 2013 Mailbox server.

- An Exchange 2010 Hub Transport server.

- An Exchange 2007 Hub Transport server. Exchange 2007 doesn't support moderated recipients, so don't use an Exchange 2007 Hub Transport server as the expansion server for moderated distribution groups.

When you specify an expansion server, use the ExchangeLegacyDN. You can find this value by running the command: Get-ExchangeServer \<ServerName\> | Format-List ExchangeLegacyDN. An example value for this parameter is "/o=Contoso/ou=Exchange Administrative Group(FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01".



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The ExpansionServer parameter specifies the Exchange server that's used to expand the distribution group. The default value is blank ($null), which means expansion happens on the closest available Exchange 2016 Mailbox server. If you specify an expansion server, and that server is unavailable, any messages that are sent to the distribution group can't be delivered. Therefore, you should consider implementing a high availability solution for an expansion server.

You can specify the following types of servers as expansion servers:

- An Exchange 2016 Mailbox server.

- An Exchange 2013 Mailbox server.

- An Exchange 2010 Hub Transport server.

When you specify an expansion server, use the ExchangeLegacyDN. You can find this value by running the command: Get-ExchangeServer \<ServerName\> | Format-List ExchangeLegacyDN. An example value for this parameter is "/o=Contoso/ou=Exchange Administrative Group(FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01".



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

### -ExtensionCustomAttribute1
!!! Exchange Server 2010

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Understanding Custom Attributes.

For more information about using multivalued properties, see Modifying Multivalued Properties.



!!! Exchange Server 2013

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes.

For more information about using multivalued properties, see Modifying multivalued properties.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).



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

### -ExtensionCustomAttribute2
!!! Exchange Server 2010

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Understanding Custom Attributes.

For more information about using multivalued properties, see Modifying Multivalued Properties.



!!! Exchange Server 2013

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes.

For more information about using multivalued properties, see Modifying multivalued properties.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).



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

### -ExtensionCustomAttribute3
!!! Exchange Server 2010

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Understanding Custom Attributes.

For more information about using multivalued properties, see Modifying Multivalued Properties.



!!! Exchange Server 2013

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes.

For more information about using multivalued properties, see Modifying multivalued properties.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).



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

### -ExtensionCustomAttribute4
!!! Exchange Server 2010

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Understanding Custom Attributes.

For more information about using multivalued properties, see Modifying Multivalued Properties.



!!! Exchange Server 2013

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes.

For more information about using multivalued properties, see Modifying multivalued properties.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).



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

### -ExtensionCustomAttribute5
!!! Exchange Server 2010

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Understanding Custom Attributes.

For more information about using multivalued properties, see Modifying Multivalued Properties.



!!! Exchange Server 2013

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes.

For more information about using multivalued properties, see Modifying multivalued properties.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).



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

### -ForceUpgrade
!!! Exchange Server 2010

The ForceUpgrade parameter suppresses the following confirmation: "To save changes on object \<object name\>, the object must be upgraded to the current Exchange version. After the upgrade, this object can't be managed by an earlier version of the Exchange Management Tools. Do you want to continue to upgrade and save the object?" This confirmation occurs when you upgrade a distribution group that was created in Microsoft Exchange Server 2003. You can't manage an Exchange 2003 distribution group by using the Exchange Management Console until you update the object's version.



!!! Exchange Server 2013

The ForceUpgrade parameter suppresses the following confirmation: "To save changes on object \<object name\>, the object must be upgraded to the current Exchange version. After the upgrade, this object can't be managed by an earlier version of the Exchange Management Tools. Do you want to continue to upgrade and save the object?" This confirmation occurs when you upgrade a distribution group that was created in Microsoft Exchange Server 2003. You can't manage an Exchange 2003 distribution group by using the Exchange Administration Center until you update the object's version.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ForceUpgrade switch specifies whether to suppress the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.



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

### -GrantSendOnBehalfTo
!!! Exchange Server 2010

The GrantSendOnBehalfTo parameter specifies a mailbox user who can send on behalf of this distribution group.

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

By default, the value of the GrantSendOnBehalfTo parameter is blank, which means that no other mailbox user has permission to send on behalf of this distribution group.



!!! Exchange Server 2013

The GrantSendOnBehalfTo parameter specifies a mailbox user who can send on behalf of this distribution group.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, the value of the GrantSendOnBehalfTo parameter is blank, which means that no other mailbox user has permission to send on behalf of this distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The GrantSendOnBehalfTo parameter specifies who can send on behalf of this group. Although messages send on behalf of the group clearly show the sender in the From field (\<Sender\> on behalf of \<Group\>), replies to these messages are delivered to the group, not the sender.

The sender you specify for this parameter must a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the sender.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, this parameter is blank, which means no one else has permission to send on behalf of this group.



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

### -HiddenFromAddressListsEnabled
!!! Exchange Server 2010

The HiddenFromAddressListsEnabled parameter specifies whether to hide the distribution group from any Exchange address list. Values are $true or $false. The default value is $false.





!!! Exchange Server 2013

The HiddenFromAddressListsEnabled parameter specifies whether to hide the distribution group from any Exchange address list. Values are $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The HiddenFromAddressListsEnabled parameter specifies whether this recipient is visible in address lists. Valid values are:

- $true: The recipient isn't visible in address lists.

- $false: The recipient is visible in address lists. This is the default value.



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

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



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

### -IgnoreNamingPolicy
!!! Exchange Server 2010

The IgnoreNamingPolicy parameter specifies that the naming policy defined in the DistributionGroupNamingPolicy parameter of the Set-OrganizaitonConfig cmdlet can be ignored. You don't need to specify a value with this parameter.



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

### -MailTip
!!! Exchange Server 2010

The MailTip parameter specifies the message that's displayed to senders when they start drafting an e-mail message to this recipient. The MailTip parameter message must be less than or equal to 250 characters.



!!! Exchange Server 2013

The MailTip parameter specifies the message that's displayed to senders when they start drafting an email message to this recipient. The MailTip parameter message must be less than or equal to 250 characters.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: \<html\>\<body\>This mailbox is not monitored\</body\>\</html\>. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.

- The text is automatically added to the MailTipTranslations property of the recipient as the default value: default:\<MailTip text\>. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.



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

### -MailTipTranslations
!!! Exchange Server 2010, Exchange Server 2013

The MailTipTranslations parameter specifies additional languages when you want to provide the MailTip parameter information for this recipient in multiple languages. For each language, you must provide the locale, followed by a colon and the specific MailTip parameter message in that language. Each MailTip parameter message must be less than or equal to 250 characters. Multiple languages can be separated by commas.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

@{Add="\<culture 1\>:\<localized text 1\>","\<culture 2\>:\<localized text 2\>"...; Remove="\<culture 3\>:\<localized text 3\>","\<culture 4\>:\<localized text 4\>"...}

\<culture\> is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: @{Add="ES:Esta caja no se supervisa."}.



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

### -ManagedBy
!!! Exchange Server 2010

The ManagedBy parameter specifies the name of the mailbox recipient that appears on the Managed by tab of the Active Directory object. If this parameter isn't specified, the creator of the group is the owner.

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

The recipients specified with the ManagedBy parameter aren't automatically members of the distribution group. If you want recipients specified in this parameter to be added as members of the distribution group, you need to add them as members.



!!! Exchange Server 2013

The ManagedBy parameter specifies the name of the mailbox recipient that appears on the Managed by tab of the Active Directory object. If this parameter isn't specified, the creator of the group is the owner.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

The recipients specified with the ManagedBy parameter aren't automatically members of the distribution group. If you want recipients specified in this parameter to be added as members of the distribution group, you need to add them as members.



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

To enter multiple owners and overwrite all existing entries, use the following syntax: \<owner1\>,\<owner2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<owner1\>","\<owner2\>"....

To add or remove owners without affecting other existing entries, use the following syntax: @{Add="\<owner1\>","\<owner2\>"...; Remove="\<owner3\>","\<owner4\>"...}.



An owner that you specify with this parameter isn't automatically a member of the group. You need to manually add the owner as a member.



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

### -MaxReceiveSize
!!! Exchange Server 2010

The MaxReceiveSize parameter specifies the maximum allowed e-mail message size that can be sent to this distribution group. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. Valid values are from 0 through 2147482624 bytes.

By default, the MaxReceiveSize parameter is set to unlimited.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MaxReceiveSize parameter specifies the maximum allowed email message size that can be sent to this distribution group.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

Valid values are from 0 through 2147482624 bytes.

By default, the MaxReceiveSize parameter is set to unlimited.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The MaxReceiveSize parameter specifies the maximum size of an email message that can be sent to this group. Messages that exceed the maximum size are rejected by the group.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

Valid values are from 0 through 2147482624 bytes.

By default, the MaxReceiveSize parameter is set to the value unlimited. This indicates the maximum message size for the group is controlled by other message size limits in the organization.

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSendSize
!!! Exchange Server 2010

The MaxSendSize parameter specifies the maximum allowed e-mail message size that can be sent from this distribution group. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes. Valid values are from 0 through 2147482624 bytes.

By default, the MaxSendSize parameter is set to unlimited.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The MaxSendSize parameter specifies the maximum allowed email message size that can be sent from this distribution group.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are treated as bytes.

Valid values are from 0 through 2147482624 bytes.

By default, the MaxSendSize parameter is set to unlimited.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The MaxSendSize parameter specifies the maximum size of an email message that can be sent by this group.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

Valid values are from 0 through 2147482624 bytes.

By default, the MaxSendSize parameter is set to the value unlimited. This indicates the maximum message size for the group is controlled by other message size limits in the organization.

For any message size limit, you need to set a value that's larger than the actual size you want enforced. This accounts for the Base64 encoding of attachments and other binary data. Base64 encoding increases the size of the message by approximately 33%, so the value you specify should be approximately 33% larger than the actual message size you want enforced. For example, if you specify a maximum message size value of 64 MB, you can expect a realistic maximum message size of approximately 48 MB.



```yaml
Type: Unlimited
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

The MemberDepartRestriction parameter specifies the restrictions that you can put on recipients who want to depart the group membership. This parameter takes the following values:

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

The MemberJoinRestriction parameter specifies the restrictions that you can put on recipients who want to join the group membership. You can use the following values:

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

### -ModeratedBy
!!! Exchange Server 2010

The ModeratedBy parameter specifies the list of users who are responsible for moderating the messages sent to this distribution group. To designate more than one user, separate the users by commas.

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

This parameter is required if you set the ModerationEnabled parameter to $true. If you leave this parameter blank and there's a user already specified as the manager of this distribution group, the ModeratedBy field is automatically set to the ManagedBy parameter of the distribution group. Otherwise, an error is returned.



!!! Exchange Server 2013

The ModeratedBy parameter specifies the list of users who are responsible for moderating the messages sent to this distribution group.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

This parameter is required if you set the ModerationEnabled parameter to $true. If you leave this parameter blank and there's a user already specified as the manager of this distribution group, the ModeratedBy field is automatically set to the ManagedBy parameter of the distribution group. Otherwise, an error is returned.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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
!!! Exchange Server 2010

The ModerationEnabled parameter specifies whether to enable moderation of e-mail sent to this distribution group. To ensure moderation, set this parameter to $true. To disable moderation, set this parameter to $false.

The default value is $false.



!!! Exchange Server 2013

The ModerationEnabled parameter specifies whether to enable moderation of email sent to this distribution group. To ensure moderation, set this parameter to $true. To disable moderation, set this parameter to $false.

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

### -Name
!!! Exchange Server 2010

The Name parameter specifies the name of the distribution group. The Name parameter specifies the distribution group name in Active Directory Users and Computers and also in the Group Name field in the Exchange Management Console.

If group naming policy is enforced, you need to follow the naming constraints specified in the Set-OrganizationConfig cmdlet.



!!! Exchange Server 2013

The Name parameter specifies the name of the distribution group. The Name parameter specifies the distribution group name in Active Directory Users and Computers.

If group naming policy is enforced, you need to follow the naming constraints specified in the Set-OrganizationConfig cmdlet.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name of the group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

If a group naming policy is enforced, you need to follow the naming constraints specified in the DistributionGroupNameBlockedWordList and DistributionGroupNamingPolicy parameters on the Set-OrganizationConfig cmdlet.



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

### -PrimarySmtpAddress
!!! Exchange Server 2010

The PrimarySmtpAddress parameter specifies the primary return SMTP e-mail address for the distribution group. This parameter only has meaning if the distribution group has multiple SMTP e-mail addresses.



!!! Exchange Server 2013

The PrimarySmtpAddress parameter specifies the primary return SMTP email address for the distribution group. This parameter only has meaning if the distribution group has multiple SMTP email addresses.



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

### -RejectMessagesFrom
!!! Exchange Server 2010

The RejectMessagesFrom parameter specifies mailbox users and mail-enabled contacts who aren't allowed to send e-mail messages to this distribution group.

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

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all mailbox users and all mail-enabled contacts.



!!! Exchange Server 2013

The RejectMessagesFrom parameter specifies mailbox users and mail-enabled contacts who aren't allowed to send email messages to this distribution group.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all mailbox users and all mail-enabled contacts.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RejectMessagesFrom parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>"....

To add or remove senders without affecting other existing entries, use the following syntax: @{Add="\<sender1\>","\<sender2\>"...; Remove="\<sender1\>","\<sender2\>"...}.

The senders you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFrom and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.



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

### -RejectMessagesFromDLMembers
!!! Exchange Server 2010

The RejectMessagesFromDLMembers parameter specifies the distribution groups who aren't allowed to send e-mail messages to the distribution group.

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

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all distribution groups.



!!! Exchange Server 2013

The RejectMessagesFromDLMembers parameter specifies the distribution groups who aren't allowed to send email messages to the distribution group.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, the value of this parameter is blank, which enables the distribution group to accept messages from all distribution groups.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RejectMessagesFromDLMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group aren't allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: \<group1\>,\<group2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<group1\>","\<group2\>"....

To add or remove groups without affecting other existing entries, use the following syntax: @{Add="\<group1\>","\<group2\>"...; Remove="\<group1\>","\<group2\>"...}.

The groups you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFromDLMembers and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.



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

### -RejectMessagesFromSendersOrMembers
!!! Exchange Server 2010

The RejectMessagesFromSendersOrMembers parameter specifies the identity of recipients from whom messages are rejected.

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

The RejectMessagesFromSendersOrMembers parameter specifies the identity of recipients from whom messages are rejected.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RejectMessagesFromSendersOrMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group aren't allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>.... If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>"....

To add or remove individual senders or groups without affecting other existing entries, use the RejectMessagesFrom and RejectMessagesFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the RejectMessagesFrom and RejectMessagesFromDLMembers properties, respectively. Therefore, you can't use the RejectMessagesFromSendersOrMembers parameter and the RejectMessagesFrom or RejectMessagesFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.



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

### -ReportToManagerEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ReportToManagerEnabled parameter specifies whether to allow delivery reports to be sent to the distribution group manager. Valid values are $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ReportToManagerEnabled parameter specifies whether delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) are sent to the owners of the group (defined by the ManagedBy property). Valid values are:

- $true: Delivery status notifications are sent to the owners of the group.

- $false: Delivery status notifications aren't sent to the owners of the group. This is the default value.

The ReportToManagerEnabled and ReportToOriginatorEnabled parameters affect the return path for messages sent to the group. Some email servers reject messages that don't have a return path. Therefore, you should set one parameter to $false and one to $true, but not both to $false or both to $true.



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

### -ReportToOriginatorEnabled
!!! Exchange Server 2010

The ReportToOriginatorEnabled parameter specifies whether to allow delivery reports to be sent to the senders of e-mail messages that are sent to this distribution group. Valid values are $true or $false. The default value is $true.



!!! Exchange Server 2013

The ReportToOriginatorEnabled parameter specifies whether to allow delivery reports to be sent to the senders of email messages that are sent to this distribution group. Valid values are $true or $false. The default value is $true.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ReportToOriginatorEnabled parameter specifies whether delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) are sent to senders who send messages to this group. Valid values are:

- $true: Delivery status notifications are sent to the message senders. This is the default value.

- $false: Delivery status notifications aren't sent to the message senders.

The ReportToManagerEnabled and ReportToOriginatorEnabled parameters affect the return path for messages sent to the group. Some email servers reject messages that don't have a return path. Therefore, you should set one parameter to $false and one to $true, but not both to $false or both to $true.



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

### -RequireSenderAuthenticationEnabled
!!! Exchange Server 2010

The RequireSenderAuthenticationEnabled parameter specifies whether to require e-mail message delivery from authenticated senders. If the value is $true, messages are accepted only from authenticated senders. Valid values are $true or $false. The default value is $true.



!!! Exchange Server 2013

The RequireSenderAuthenticationEnabled parameter specifies whether to require email message delivery from authenticated senders. If the value is $true, messages are accepted only from authenticated senders. Valid values are $true or $false. The default value is $true.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The RequireSenderAuthenticationEnabled parameter specifies whether to accept messages only from authenticated (internal) senders. Valid values are:

- $true: Messages are accepted only from authenticated (internal) senders. Messages from unauthenticated (external) senders are rejected.

- $false: Messages are accepted from authenticated (internal) and unauthenticated (external) senders.



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

### -RoomList
!!! Exchange Server 2010

The RoomList parameter specifies that all members of the distribution group are room resource mailboxes. You can create a distribution list for an office building in your organization and add all the rooms in that building to the distribution group. Room list distribution groups are used to generate a list of building locations in Microsoft Outlook 2010 so the user can select a building and get suggestions about when rooms are available in that building, without having to add the rooms in that building individually.

You can't use the RoomList parameter in conjunction with the ExternalManaged parameter.



!!! Exchange Server 2013

The RoomList switch specifies that all members of the distribution group are room resource mailboxes. You can create a distribution group for an office building in your organization and add all the rooms in that building to the distribution group. Room list distribution groups are used to generate a list of building locations in Microsoft Outlook so the user can select a building and get suggestions about when rooms are available in that building, without having to add the rooms in that building individually.



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

The SamAccountName parameter specifies the name for clients of the object running older operating systems. The SamAccountName parameter is displayed in Active Directory and in the Exchange Management Console in the Group name (pre-Windows 2000) field.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The SamAccountName parameter specifies an account identifier that's compatible with older operating systems. The value of this parameter must be less than 20 characters, and can contain letters, numbers, and the following characters:

- !

- #

- $

- %

- ^

- &

- -

- .

- \_

- {

- }

- |

- ~



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

If you want notifications to be sent to all external and internal senders, set this parameter to Always.

If you want notifications to be sent only to the senders who are internal to your organization, set this parameter to Internal.

To disable all status notifications, set this parameter to Never.

Senders are always notified if their message is rejected by the moderators, regardless of the value of the parameter.

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

### -SendOofMessageToOriginatorEnabled
!!! Exchange Server 2010

The SendOofMessageToOriginatorEnabled parameter specifies whether to allow out-of-office messages to be delivered to the senders of e-mail messages sent to this distribution group. Valid values are $true or $false. The default value is $false.



!!! Exchange Server 2013

The SendOofMessageToOriginatorEnabled parameter specifies whether to allow out-of-office messages to be delivered to the senders of email messages sent to this distribution group. Valid values are $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The SendOofMessageToOriginatorEnabled parameter specifies how to handle out of office (OOF) messages for members of the group. Valid values are:

- $true: When messages are sent to the group, OOF messages for any of the group members are sent to the message sender. This is the default value.

- $false: When messages are sent to the group, OOF messages for any of the group members aren't sent to the message sender.



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

### -SimpleDisplayName
The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z

- A - Z

- 0 - 9

- "\<space\>", """, "'", "(", ")", "+", ",", "-", ".", "/", ":", and "?".

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

### -UMDtmfMap
!!! Exchange Server 2010, Exchange Server 2013

The UMDtmfMap parameter specifies whether you want to create a user-defined DTMF map for the UM-enabled distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- emailAddress:\<integers\>

- lastNameFirstName:\<integers\>

- firstNameLastName:\<integers\>

To enter values that overwrite all existing entries, use the following syntax: emailAddress:\<integers\>,lastNameFirstName:\<integers\>,firstNameLastName:\<integers\>.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only emailAddress:\<integers\>, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: @{Add="emailAddress:\<integers\>","lastNameFirstName:\<integers\>","firstNameLastName:\<integers\>"; Remove="emailAddress:\<integers\>","lastNameFirstName:\<integers\>","firstNameLastName:\<integers\>"}.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use @{Add="emailAddress:\<integers1\>","emailAddress:\<intgers2\>} to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.



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

### -WindowsEmailAddress
!!! Exchange Server 2010, Exchange Server 2013

The WindowsEmailAddress parameter specifies the value of the E-mail field of the Active Directory object.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In on-premises environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.

- In cloud environments or in on-premises environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.



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

### -GenerateExternalDirectoryObjectId
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

### -ResetMigrationToUnifiedGroup
This parameter is available only in the cloud-based service.

The ResetMigrationToUnifiedGroup switch specifies whether you want to reset the flag that indicates the migration of the distribution group to an Office 365 Group is in progress. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/e3a8c709-770a-4900-9a57-adcf0d98ff68.aspx)

