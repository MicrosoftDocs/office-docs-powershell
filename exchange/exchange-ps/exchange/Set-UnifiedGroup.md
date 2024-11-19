---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-unifiedgroup
applicable: Exchange Online, Exchange Online Protection
title: Set-UnifiedGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-UnifiedGroup cmdlet to modify Microsoft 365 Groups in your cloud-based organization. To modify members, owners, and subscribers of Microsoft 365 Groups, use the Add-UnifiedGroupLinks and Remove-UnifiedGroupLinks cmdlets.

**Important**: You can't use this cmdlet to remove all Microsoft Online Email Routing Address (MOERA) addresses from the Microsoft 365 Group. There must be at least one MOERA address attached to a group. To learn more about MOERA addresses, see [How the proxyAddresses attribute is populated in Microsoft Entra ID](https://support.microsoft.com/help/3190357).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UnifiedGroup [-Identity] <UnifiedGroupIdParameter>
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-AccessType <ModernGroupTypeInfo>]
 [-Alias <String>]
 [-AlwaysSubscribeMembersToCalendarEvents]
 [-AuditLogAgeLimit <EnhancedTimeSpan>]
 [-AutoSubscribeNewMembers]
 [-CalendarMemberReadOnly]
 [-Classification <String>]
 [-Confirm]
 [-ConnectorsEnabled]
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
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HiddenFromExchangeClientsEnabled]
 [-InformationBarrierMode <GroupInformationBarrierMode>]
 [-IsMemberAllowedToEditContent <System.Boolean>]
 [-Language <CultureInfo>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Notes <String>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-SensitivityLabelId <Sustem.Guid>]
 [-SubscriptionEnabled]
 [-UnifiedGroupWelcomeMessageEnabled]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Microsoft 365 Groups are group objects that are available across Microsoft 365 services.

> [!NOTE]
> You can't change the HiddenGroupMembershipEnabled setting on an existing Microsoft 365 Group. The setting is available only during new group creation.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UnifiedGroup -Identity "Marketing Department" -PrimarySmtpAddress marketing@contoso.com -RequireSenderAuthenticationEnabled $false
```

This example makes the following changes to the Microsoft 365 Group named Marketing Department:

- The primary email address is changed to marketing@contoso.com.
- The Microsoft 365 Group is allowed to receive mail from unauthenticated (external) senders.

### Example 2
```powershell
Set-UnifiedGroup -Identity "Legal Department" -AccessType Private
```

This example changes the Microsoft 365 Group named Legal Department from a public group to a private group.

## PARAMETERS

### -Identity
The Identity parameter specifies the Microsoft 365 Group that you want to modify. You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFromSendersOrMembers
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

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -AccessType
The AccessType parameter specifies the privacy type for the Microsoft 365 Group. Valid values are:

- Public: The group content and conversations are available to everyone, and anyone can join the group without approval from a group owner.
- Private: The group content and conversations are available only to members of the group, and joining the group requires approval from a group owner.

**Note**: Although a user needs to be a member to participate in a private group, anyone can send email to a private group, and receive replies from the private group.

```yaml
Type: ModernGroupTypeInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the Microsoft 365 Group. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysSubscribeMembersToCalendarEvents
The AlwaysSubscribeMembersToCalendarEvents switch controls the default subscription settings of new members that are added to the Microsoft 365 Group. Changing this setting doesn't affect existing group members.

- If you use this switch without a value, all future members that are added to the group will have their subscriptions set to ReplyAndEvents. Previous events are not automatically added to their calendars.
- If you use this exact syntax: `-AlwaysSubscribeMembersToCalendarEvents:$false,` all future members that are added to the group will have their subscriptions set to ReplyOnly.

Group members can change their own subscription settings, which can override your intended use of this switch.

The AutoSubscribeNewMembers switch overrides this switch.

**Note**: This property is evaluated only when you add internal members from your organization. Guest user accounts are always subscribed when added as a member. You can manually remove subscriptions for guest users by using the Remove-UnifiedGroupLinks cmdlet.

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

### -AuditLogAgeLimit
The AuditLogAgeLimit parameter specifies the maximum age of audit log entries for the Microsoft 365 Group. Log entries older than the specified value are removed. The default value is 90 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

For example, to specify 60 days for this parameter, use 60.00:00:00.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoSubscribeNewMembers
The AutoSubscribeNewMembers switch specifies whether to automatically subscribe new members that are added to the Microsoft 365 Group to conversations and calendar events. Only users that are added to the group after you enable this setting are automatically subscribed to the group.

- To subscribe new members to conversations and calendar events, use the AutoSubscribeNewMembers switch without a value.
- If you don't want to subscribe new members to conversations and calendar events, use this exact syntax: `-AutoSubscribeNewMembers:$false`.

**Note**: This property is evaluated only when you add internal members from your organization. Guest user accounts are always subscribed when added as a member. You can manually remove subscriptions for guest users by using the Remove-UnifiedGroupLinks cmdlet.

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

### -CalendarMemberReadOnly
The CalendarMemberReadOnly switch specifies whether to set read-only Calendar permissions to the Microsoft 365 Group for members of the group.

- To set read-only Calendar permissions, use the CalendarMemberReadOnly switch without a value.
- To remove read-only Calendar permissions, use this exact syntax: `-CalendarMemberReadOnly:$false`.

To view the current value of the CalendarMemberReadOnly property on a Microsoft 365 Group, replace `<EmailAddress>` with the email address of the group, and run this command: `Get-UnifiedGroup -Identity <EmailAddress> -IncludeAllProperties | Format-List *Calendar*`.

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

### -Classification
The Classification parameter specifies the classification for the Microsoft 365 Group. You need to configure the list of available classifications in Microsoft Entra ID before you can specify a value for this parameter. For more information, see [Microsoft Entra cmdlets for configuring group settings](https://learn.microsoft.com/azure/active-directory/users-groups-roles/groups-settings-cmdlets).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabled
The ConnectorsEnabled specifies whether to enable the ability to use connectors for the Microsoft 365 Group.

- To enable connectors, use the ConnectorsEnabled switch without a value.
- To disable connectors, use this exact syntax: `-ConnectorsEnabled:$false`.

To use this switch, the value of the ConnectorsEnabled parameter on the Set-OrganizationConfig cmdlet must be set to $true (which is the default value).

For more information about connectors for Microsoft 365 Groups, see [Connect apps to your groups in Outlook](https://support.microsoft.com/office/ed0ce547-038f-4902-b9b3-9e518ae6fbab).

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

### -CustomAttribute1
This parameter specifies a value for the CustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute10
This parameter specifies a value for the CustomAttribute10 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute11
This parameter specifies a value for the CustomAttribute11 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute12
This parameter specifies a value for the CustomAttribute12 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute13
This parameter specifies a value for the CustomAttribute13 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute14
This parameter specifies a value for the CustomAttribute14 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute15
This parameter specifies a value for the CustomAttribute15 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute2
This parameter specifies a value for the CustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute3
This parameter specifies a value for the CustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute4
This parameter specifies a value for the CustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute5
This parameter specifies a value for the CustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute6
This parameter specifies a value for the CustomAttribute6 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute7
This parameter specifies a value for the CustomAttribute7 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute8
This parameter specifies a value for the CustomAttribute8 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomAttribute9
This parameter specifies a value for the CustomAttribute9 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataEncryptionPolicy
The DataEncryptionPolicy parameter specifies the data encryption policy that's applied to the Microsoft 365 Group. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

To remove an existing policy, use the value $null.

```yaml
Type: DataEncryptionPolicyIdParameter
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
The DisplayName parameter specifies the name of the Microsoft 365 Group. The display name is visible in the Exchange admin center, address lists, and Outlook. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
The EmailAddresses parameter specifies all email addresses (proxy addresses) for the Microsoft 365 Group, including the primary SMTP address. In cloud-based organizations, the primary SMTP address and other proxy addresses for Microsoft 365 Groups are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the Microsoft 365 Group.

Valid syntax for this parameter is `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`. The optional `Type` value specifies the type of email address. Examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.
- smtp: Other SMTP email addresses.
- SPO: SharePoint Online email address.

If you don't include a Type value for an email address, the address is assumed to be an SMTP email address. The syntax of SMTP email addresses is validated, but the syntax of other email address types isn't validated. Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the Type value SMTP on the address.
- The first email address when you don't use any Type values, or when you use multiple lowercase smtp Type values.
- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To replace all existing proxy email addresses with the values you specify, use the following syntax: `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`.

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: `@{Add="Type:EmailAddress1","Type:EmailAddress2",...; Remove="Type:EmailAddress3","Type:EmailAddress4",...}`.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute1
This parameter specifies a value for the ExtensionCustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -ExtensionCustomAttribute2
This parameter specifies a value for the ExtensionCustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -ExtensionCustomAttribute3
This parameter specifies a value for the ExtensionCustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -ExtensionCustomAttribute4
This parameter specifies a value for the ExtensionCustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -ExtensionCustomAttribute5
This parameter specifies a value for the ExtensionCustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

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

### -ForceUpgrade
The ForceUpgrade switch suppresses the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

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

### -GrantSendOnBehalfTo
The GrantSendOnBehalfTo parameter specifies who can send on behalf of this Microsoft 365 Group. Although messages that are sent on behalf of the group clearly show the sender in the From field (`<Sender> on behalf of <Microsoft 365 Group>`), replies to these messages are delivered to the group, not the sender.

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

By default, this parameter is blank, which means no one else has permission to send on behalf of this Microsoft 365 Group.

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

### -HiddenFromAddressListsEnabled
The HiddenFromAddressListsEnabled parameter specifies whether the Microsoft 365 Group appears in the global address list (GAL) and other address lists in your organization. Valid values are:

- $true: The Microsoft 365 Group is hidden from the GAL and other address lists. The group can still receive messages, but users can't search for or browse to the group in Outlook or Outlook on the web. Users also can't find the group by using the Discover option in Outlook on the web. For users that are members of the Microsoft 365 Group, the group will still appear in the navigation pane in Outlook and Outlook on the web if HiddenFromExchangeClientsEnabled property is **NOT** enabled.
- $false: The Microsoft 365 Group is visible in the GAL and other address lists.

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

### -HiddenFromExchangeClientsEnabled
The HiddenFromExchangeClientsEnabled switch specifies whether the Microsoft 365 Group is hidden from Outlook clients connected to Microsoft 365.

- To enable this setting, you don't need to specify a value with this switch. The Microsoft 365 Group is hidden from Outlook experiences. The group isn't visible in the Outlook left-hand navigation and isn't visible in the global address list (GAL). The group name doesn't resolve during the creation of a new message in Outlook. The group can still receive messages, but users can't search for or browse to the group in Outlook or Outlook on the web. Users can't find the group by using the Discover option in Outlook on the web. The HiddenFromAddressListsEnabled property is set to the value True to prevent the group from showing in the GAL and in the Offline Address Book (OAB).
- To disable this setting, use this exact syntax: `-HiddenFromExchangeClientsEnabled:$false`. The Microsoft 365 Group isn't hidden from Outlook experiences. The group will be visible in the GAL and other address lists. This is the default value.
- If Microsoft 365 Groups are hidden from Exchange clients, users don't see the option to subscribe or unsubscribe to a Microsoft 365 Group.

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

### -InformationBarrierMode
The InformationBarrierMode parameter specifies the information barrier mode for the Microsoft 365 Group. Valid values are:

- Explicit
- Implicit
- Open
- OwnerModerated

```yaml
Type: GroupInformationBarrierMode
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsMemberAllowedToEditContent
{{ Fill IsMemberAllowedToEditContent Description }}

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The Language parameter specifies language preference for the Microsoft 365 Group.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion
The MailboxRegion parameter specifies the preferred data location (PDL) for the Microsoft 365 Group in multi-geo environments.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTip
The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: `<html><body>This mailbox is not monitored</body></html>`. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.
- The text is automatically added to the MailTipTranslations property of the recipient as the default value: `default:<MailTip text>`. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipTranslations
The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

`@{Add="Culture1:Localized text 1","\Culture2:Localized text 2"...; Remove="Culture3:Localized text 3","Culture4:Localized text 4"...}`.

CultureN is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: `@{Add="ES:Esta caja no se supervisa."}`.

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

### -MaxReceiveSize
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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSendSize
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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

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

### -ModerationEnabled
The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

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

### -Notes
The Notes parameter specifies the description of the Microsoft 365 Group. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFromSendersOrMembers
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
Applicable: Exchange Online, Exchange Online Protection

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

### -SensitivityLabelId
The SensitivityLabelId parameter specifies the GUID value of the sensitivity label that's assigned to the Microsoft 365 Group.

**Note**: In the output of the Get-UnifiedGroup cmdlet, this property is named SensitivityLabel, not SensitivityLabelId.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriptionEnabled
The SubscriptionEnabled switch specifies whether the group owners can enable subscription to conversations and calendar events on the groups they own. This option can be set only in Exchange Online PowerShell.

- To change the value to $true, use this switch without a value.
- To change the value to $false, use this exact syntax: `-SubscriptionEnabled:$false`. The value of the AutoSubscribeNewMembers parameter must also be $false before you can use the value $false for this switch.

**Note**: You should use the value $false for this switch only if you intend to disable group owner ability to change subscription options on the group. Group owners will not be able to enable subscription options on the group settings using Outlook on the web or Outlook desktop. Group owners might see the error, "The group update is in progress" error when they try to enable Subscription option. Admins trying to enable Subscription from Microsoft admin center might also see error, "Can't save 'Send copies of group conversations and events to group member's inboxes' Either your assigned product license doesn't include Exchange Online or you have recently created this group and it's still not ready for management".

**Note**: This property is evaluated only when you add internal members from your organization. Guest user accounts are always subscribed when added as a member. You can manually remove subscriptions for guest users by using the Remove-UnifiedGroupLinks cmdlet.

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

### -UnifiedGroupWelcomeMessageEnabled
The UnifiedGroupWelcomeMessageEnabled switch specifies whether to enable or disable sending system-generated welcome messages to users who are added as members to the Microsoft 365 Group.

- To enable this setting, you don't need to specify a value with this switch.
- To disable this setting, use this exact syntax: `-UnifiedGroupWelcomeMessageEnabled:$false`.

This setting only controls email send by the Microsoft 365 Group. It doesn't control email sent by connected products (for example, Teams or Viva Engage).

This setting is enabled by default.

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
