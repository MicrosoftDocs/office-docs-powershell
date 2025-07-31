---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-distributiongroup
schema: 2.0.0
title: Set-DistributionGroup
---

# Set-DistributionGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-DistributionGroup cmdlet to modify the settings of existing distribution groups or mail-enabled security groups. To add or remove group members, use the Add-DistributionGroupMember, Remove-DistributionGroupMember or Update-DistributionGroupMember cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DistributionGroup [-Identity] <DistributionGroupIdParameter>
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-BccBlocked <Boolean>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-BypassNestedModerationEnabled <Boolean>]
 [-BypassSecurityGroupManagerCheck]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-Description <MultiValueProperty>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-EmailAddressPolicyEnabled <Boolean>]
 [-ExpansionServer <String>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HiddenGroupMembershipEnabled]
 [-IgnoreDefaultScope]
 [-IgnoreNamingPolicy]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-ManagedBy <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MemberDepartRestriction <MemberUpdateType>]
 [-MemberJoinRestriction <MemberUpdateType>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-ReportToManagerEnabled <Boolean>]
 [-ReportToOriginatorEnabled <Boolean>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetMigrationToUnifiedGroup]
 [-RoomList]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SendOofMessageToOriginatorEnabled <Boolean>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UpdateMemberCount]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Distribution groups aren't security principals, and therefore can't be assigned permissions. However, you can assign permissions to mail-enabled security groups.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DistributionGroup -Identity "Accounting" -DisplayName "Accounting Group"
```

This example changes the display name of an existing distribution group from Accounting to Accounting Group.

### Example 2
```powershell
Set-DistributionGroup -Identity "Bldg34 Conf Rooms" -RoomList
```

This example converts the Bldg34 Conf Rooms distribution group to a room list.

### Example 3
```powershell
Set-DistributionGroup -Identity Ed_DirectReports -Name Ayla_DirectReports -IgnoreNamingPolicy
```

This example changes the name of an existing distribution group from Ed\_DirectReports to Ayla\_DirectReports and ignores the group naming policy.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the distribution group or mail-enabled security group that you want to modify. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: DistributionGroupIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFrom parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove senders without affecting other existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

The senders you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -AcceptMessagesOnlyFromDLMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFromDLMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group are allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: `Group1,Group2,...GroupN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Group1","Group2",..."GroupN"`.

To add or remove groups without affecting other existing entries, use the following syntax: `@{Add="Group1","Group2"...; Remove="Group3","Group4"...}`.

The groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFromDLMembers and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

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

### -AcceptMessagesOnlyFromSendersOrMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFromSendersOrMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group are allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove individual senders or groups without affecting other existing entries, use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers properties, respectively. Therefore, you can't use the AcceptMessagesOnlyFromSendersOrMembers parameter and the AcceptMessagesOnlyFrom or AcceptMessagesOnlyFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -Alias

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BccBlocked

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The BccBlocked parameter specifies whether members of the group don't receive messages if the group is used in the Bcc line. Valid values are:

- $true: If the group is used in the Bcc line, members of the group don't receive the message, and the sender receives a non-delivery report (also known as an NDR or bounce message). Other recipients of the message aren't blocked. If an external sender uses the group in the Bcc line, members of the group aren't blocked. For nested groups, the message is blocked only for members of the top-level group.
- $false: There are no restrictions for using the group in the Bcc line of messages. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassModerationFromSendersOrMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The BypassModerationFromSendersOrMembers parameter specifies who is allowed to send messages to this moderated recipient without approval from a moderator. Valid values for this parameter are individual senders and groups in your organization. Specifying a group means all members of the group are allowed to send messages to this recipient without approval from a moderator.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple senders and overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove one or more senders without affecting any existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

This parameter is meaningful only when moderation is enabled for the recipient. By default, this parameter is blank ($null), which means messages from all senders other than the designated moderators are moderated. When a moderator sends a message to this recipient, the message is isn't moderated. In other words, you don't need to use this parameter to include the moderators.

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

### -BypassNestedModerationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ByPassNestedModerationEnabled parameter specifies how to handle message approval when a moderated group contains other moderated groups as members. Valid values are:

- $true: After a moderator approves a message sent to the group, the message is automatically approved for all other moderated groups that are members of the group.
- $false: After a moderator approves a message sent to the group, separate approval is required for each moderated group that's a member of the group. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassSecurityGroupManagerCheck

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -CreateDTMFMap

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This is the default value.
- $false: A DTMF map isn't created for the recipient.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute1

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute10

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute10 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute11

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute11 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute12

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute12 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute13

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute13 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute14

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute14 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute15

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute15 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute2

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute3

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute4

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute5

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute6

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute6 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute7

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute7 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute8

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute8 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute9

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute9 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The Description parameter specifies an optional description for the distribution group. If the value contains spaces, enclose the value in quotation marks.

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

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The DisplayName parameter specifies the display name of the group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If a group naming policy is enforced in your organization, users need to follow the naming constraints as specified by the DistributionGroupNameBlockedWordList parameter on the Set-OrganizationConfig cmdlet. To bypass this requirement, use the IgnoreNamingPolicy switch.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -EmailAddresses

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The EmailAddresses parameter specifies all email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies).

Valid syntax for this parameter is `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`. The optional `Type` value specifies the type of email address. Examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.
- smtp: Other SMTP email addresses.
- X400: X.400 addresses in on-premises Exchange.
- X500: X.500 addresses in on-premises Exchange.

If you don't include a Type value for an email address, the address is assumed to be an SMTP email address. The syntax of SMTP email addresses is validated, but the syntax of other email address types isn't validated. Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the Type value SMTP on the address.
- The first email address when you don't use any Type values, or when you use multiple lowercase smtp Type values.
- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

The PrimarySmtpAddress parameter updates the primary email address and WindowsEmailAddress property to the same value.

To replace all existing proxy email addresses with the values you specify, use the following syntax: `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`.

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: `@{Add="Type:EmailAddress1","Type:EmailAddress2",...; Remove="Type:EmailAddress3","Type:EmailAddress4",...}`.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddressPolicyEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The EmailAddressPolicyEnabled parameter specifies whether to apply email address policies to this recipient. Valid values are:

- $true: Email address policies are applied to this recipient. This is the default value.
- $false: Email address policies aren't applied to this recipient.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpansionServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The ExpansionServer parameter specifies the Exchange server that's used to expand the distribution group. The default value is blank ($null), which means expansion happens on the closest available Exchange server. If you specify an expansion server, and that server is unavailable, any messages that are sent to the distribution group can't be delivered.

You can specify the following types of servers as expansion servers:

- An Exchange 2013 or later Mailbox server.
- An Exchange 2010 Hub Transport server.

When you specify an expansion server, use the ExchangeLegacyDN. You can find this value by running the command: `Get-ExchangeServer <ServerName> | Format-List ExchangeLegacyDN`. An example value for this parameter is "/o=Contoso/ou=Exchange Administrative Group(FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Mailbox01".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute1

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute1 -eq 'Value'"` will return a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute2

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute2 -eq 'Value'"` will return a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute3

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute3 -eq 'Value'"` will return a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute4

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute4 -eq 'Value'"` will return a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute5

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute5 -eq 'Value'"` will return a match if the property _contains_ the specified value.

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

### -ForceUpgrade

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ForceUpgrade switch suppresses the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

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

### -GrantSendOnBehalfTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The GrantSendOnBehalfTo parameter specifies who can send on behalf of this group. Although messages send on behalf of the group clearly show the sender in the From field (`<Sender> on behalf of <Group>`), replies to these messages are delivered to the group, not the sender.

The sender you specify for this parameter must a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the sender. For example:

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

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

By default, this parameter is blank, which means no one else has permission to send on behalf of this group.

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

### -HiddenFromAddressListsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The HiddenFromAddressListsEnabled parameter specifies whether this recipient is visible in address lists. Valid values are:

- $true: The recipient isn't visible in address lists.
- $false: The recipient is visible in address lists. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenGroupMembershipEnabled

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The HiddenGroupMembershipEnabled switch specifies whether to hide the members of the distribution group from users who aren't members of the group. You don't need to specify a value with this switch.

You can use this setting to help comply with regulations that require you to hide group membership from members or outsiders (for example, a distribution group that represents students enrolled in a class).

**Note**: If you hide the membership of the group with this parameter, you can't edit the group later to reveal the membership to the group.

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

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

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

### -IgnoreNamingPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The IgnoreNamingPolicy switch specifies whether to prevent this group from being affected by your organization's group naming policy. You don't need to specify a value with this switch.

The group naming policy is defined by the DistributionGroupNamingPolicy and DistributionGroupNameBlockedWordList parameters on the Set-OrganizationConfig cmdlet.

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

### -MailTip

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: `<html><body>This mailbox is not monitored</body></html>`. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.
- The text is automatically added to the MailTipTranslations property of the recipient as the default value: `default:<MailTip text>`. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipTranslations

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

`@{Add="Culture1:Localized text 1","\Culture2:Localized text 2"...; Remove="Culture3:Localized text 3","Culture4:Localized text 4"...}`.

CultureN is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: `@{Add="ES:Esta caja no se supervisa."}`.

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

### -ManagedBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

To enter multiple owners and overwrite all existing entries, use the following syntax: `Owner1,Owner2,...OwnerN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Owner1","Owner2",..."OwnerN"`.

To add or remove owners without affecting other existing entries, use the following syntax: `@{Add="Owner1","Owner2",...; Remove="Owner3","Owner4"...}`.

Owners that you specify with this parameter are not added as group members. You need to manually add the owner as a member.

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

### -MaxReceiveSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The MaxReceiveSize parameter specifies the maximum size of an email message that can be sent to this group. Messages that exceed the maximum size are rejected by the group.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited. The default value is unlimited, which indicates the maximum size is imposed elsewhere (for example, organization, server, or connector limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSendSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The MaxSendSize parameter specifies the maximum size of an email message that can be sent by this group.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited. The default value is unlimited, which indicates the maximum size is imposed elsewhere (for example, organization, server, or connector limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberDepartRestriction

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MemberDepartRestriction parameter specifies the restrictions that you put on requests to leave the group. Valid values are:

- Open: Members can leave the group without approval from one of the group owners. This is the default value for universal distribution groups. You can't use this value on universal security groups.
- Closed: Members can't remove themselves from the group, and requests to leave the group are rejected automatically. Group membership is controlled by the group owners. This is the default value for universal security groups.

```yaml
Type: MemberUpdateType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberJoinRestriction

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The MemberJoinRestriction parameter specifies the restrictions that you put on requests to join the group. Valid values are:

- Open: Users can add themselves to the group without approval from a group owner. You can't use this value on universal security groups.
- Closed: Users can't add themselves to the group, and requests to join the group are rejected automatically. Group membership is controlled by the group owners. This is the default value on universal security groups and universal distribution groups.
- ApprovalRequired: Users can request to join the group. The user is added to the group after the request is approved by one of the group owners. Although you can use this value on universal security groups, user requests to join the group aren't sent to the group owners, so this setting is only effective on universal distribution groups.

```yaml
Type: MemberUpdateType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

For mail-enabled security groups, you need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

For distribution groups, if you set the ModerationEnabled parameter to the value $true, but you don't use this parameter to specify any moderators, the group owners that are specified by the ManagedBy parameter are responsible for approving messages sent to the group.

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

### -ModerationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name of the group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

If you set the EmailAddressPolicyEnabled parameter to $false, you can specify the primary address using the PrimarySmtpAddress parameter, but the email addresses of the group are no longer automatically updated by email address policies.

The PrimarySmtpAddress parameter updates the primary email address and WindowsEmailAddress property to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RejectMessagesFrom parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove senders without affecting other existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

The senders you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFrom and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -RejectMessagesFromDLMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RejectMessagesFromDLMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group aren't allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: `Group1,Group2,...GroupN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Group1","Group2",..."GroupN"`.

To add or remove groups without affecting other existing entries, use the following syntax: `@{Add="Group1","Group2"...; Remove="Group3","Group4"...}`.

The groups you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFromDLMembers and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

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

### -RejectMessagesFromSendersOrMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RejectMessagesFromSendersOrMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group aren't allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove individual senders or groups without affecting other existing entries, use the RejectMessagesFrom and RejectMessagesFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the RejectMessagesFrom and RejectMessagesFromDLMembers properties, respectively. Therefore, you can't use the RejectMessagesFromSendersOrMembers parameter and the RejectMessagesFrom or RejectMessagesFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -ReportToManagerEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ReportToManagerEnabled parameter specifies whether delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) are sent to the owner (first one listed if more than one) of the group (defined by the ManagedBy property). Valid values are:

- $true: Delivery status notifications are sent to the owner (first one listed if more than one) of the group.
- $false: Delivery status notifications aren't sent to the owner (first one listed if more than one) of the group. This is the default value.

The ReportToManagerEnabled and ReportToOriginatorEnabled parameters affect the return path for messages sent to the group. Some email servers reject messages that don't have a return path. Therefore, you should set one parameter to $false and one to $true, but not both to $false or both to $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportToOriginatorEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ReportToOriginatorEnabled parameter specifies whether delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) are sent to senders who send messages to this group. Valid values are:

- $true: Delivery status notifications are sent to the message senders. This is the default value.
- $false: Delivery status notifications aren't sent to the message senders.

The ReportToManagerEnabled and ReportToOriginatorEnabled parameters affect the return path for messages sent to the group. Some email servers reject messages that don't have a return path. Therefore, you should set one parameter to $false and one to $true, but not both to $false or both to $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSenderAuthenticationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RequireSenderAuthenticationEnabled parameter specifies whether to accept messages only from authenticated (internal) senders. Valid values are:

- $true: Messages are accepted only from authenticated (internal) senders. Messages from unauthenticated (external) senders are rejected.
- $false: Messages are accepted from authenticated (internal) and unauthenticated (external) senders.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetMigrationToUnifiedGroup

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The ResetMigrationToUnifiedGroup switch specifies whether you want to reset the flag that indicates the migration of the distribution group to a Microsoft 365 Group is in progress. You don't need to specify a value with this switch.

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

### -RoomList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The RoomList switch specifies that all members of this distribution group are room mailboxes. You don't need to specify a value with this switch.

You can create a distribution group for an office building in your organization and add all rooms in that building to the distribution group. Room list distribution groups are used to generate a list of building locations for meeting requests in Outlook 2010 or later. Room lists allow a user to select a building and get availability information for all rooms in that building, without having to add each room individually.

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

### -SamAccountName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the following characters: !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.
- Internal: Notify senders in the organization when their messages aren't approved.
- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: TransportModerationNotificationFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendOofMessageToOriginatorEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The SendOofMessageToOriginatorEnabled parameter specifies how to handle out of office (OOF) messages for members of the group. Valid values are:

- $true: When messages are sent to the group, OOF messages for any of the group members are sent to the message sender.
- $false: When messages are sent to the group, OOF messages for any of the group members aren't sent to the message sender. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleDisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z
- A - Z
- 0 - 9
- space
- `" ' ( ) + , - . / : ?`

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDtmfMap

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- `emailAddress:<integers>`
- `lastNameFirstName:<integers>`
- `firstNameLastName:<integers>`

To enter values that overwrite all existing entries, use the following syntax: `emailAddress:<integers>,lastNameFirstName:<integers>,firstNameLastName:<integers>`.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only `emailAddress:<integers>`, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: `@{Add="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"; Remove="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"}`.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use `@{Add="emailAddress:<integers1>","emailAddress:<integers2>}` to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.

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

### -UpdateMemberCount

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill UpdateMemberCount Description }}

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -WindowsEmailAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.
- In environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

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
