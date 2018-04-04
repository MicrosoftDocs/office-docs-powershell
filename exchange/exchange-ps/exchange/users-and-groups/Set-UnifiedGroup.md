---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-UnifiedGroup
schema: 2.0.0
---

# Set-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-UnifiedGroup cmdlet to modify Office 365 groups in your cloud-based organization. To modify members, owners, and subscribers of Office 365 groups, use the Add-UnifiedGroupLinks and Remove-UnifiedGroupLinks cmdlets.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-UnifiedGroup [-Identity] <UnifiedGroupIdParameter>
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>] [-AccessType <Public | Private>]
 [-Alias <String>] [-AlwaysSubscribeMembersToCalendarEvents] [-AutoSubscribeNewMembers]
 [-CalendarMemberReadOnly] [-Classification <String>] [-Confirm] [-ConnectorsEnabled]
 [-CustomAttribute1 <String>] [-CustomAttribute10 <String>] [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>] [-CustomAttribute13 <String>] [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>] [-CustomAttribute2 <String>] [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>] [-CustomAttribute5 <String>] [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>] [-CustomAttribute8 <String>] [-CustomAttribute9 <String>] [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>] [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>] [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>] [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ForceUpgrade] [-GrantSendOnBehalfTo <MultiValuedProperty>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-Language <CultureInfo>] [-MailboxRegion <String>] [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>] [-Notes <String>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RequireSenderAuthenticationEnabled <$true | $false>] [-UnifiedGroupWelcomeMessageEnabled] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Office 365 groups are group objects that are available across Office 365 services.

The HiddenGroupMembershipEnabled parameter is only available on the New-UnifiedGroup cmdlet. You can't change this setting on an existing Office 365 Group group.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-UnifiedGroup -Identity "Marketing Department" -PrimarySmtpAddress marketing@contoso.com -RequireSenderAuthenticationEnabled $false
```

This example makes the following changes to the Office 365 Group named Marketing Department:


The primary email address is changed to marketing@contoso.com.

The Office 365 Group is allowed to receive mail from unauthenticated (external) senders.

### Example 2
```
Set-UnifiedGroup -Identity "Legal Department" -AccessType Private
```

This example changes the Office 365 Group named Legal Department from a public group to a private group.

## PARAMETERS

### -Identity
The Identity parameter specifies the Office 365 Group that you want to modify. You can use any value that uniquely identifies the Office 365 Group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove individual senders or groups without affecting other existing entries, use the AcceptMessagesOnlyFrom and AcceptMessageOnlyFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers properties, respectively. Therefore, you can't use the AcceptMessagesOnlyFromSendersOrMembers parameter and the AcceptMessagesOnlyFrom or AcceptMessagesOnlyFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessType
The AccessType parameter specifies the privacy type for the Office 365 Group. Valid values are:

- Public: The group content and conversations are available to everyone, and anyone can join the group without approval from a group owner.

- Private: The group content and conversations are only available to members of the group, and joining the group requires approval from a group owner.

Note: Although a user needs to be a member to participate in a private group, anyone can send email to a private group, and receive replies from the private group.

```yaml
Type: Public | Private
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the Office 365 Group. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysSubscribeMembersToCalendarEvents
The AlwaysSubscribeMembersToCalendarEvents switch controls the default subscription settings of new members that are added to the Office 365 Group. Changing this setting doesn't affect existing group members.

- If you use this switch without a value, all future members that are added to the group will have their subscriptions set to ReplyAndEvents.

- If you use this exact syntax: -AlwaysSubscribeMembersToCalendarEvents:$false, all future members that are added to the group will have their subscriptions set to ReplyOnly.

Group members can change their own subscription settings, which can override your intended use of this switch.

The AutoSubscribeNewMembers switch overrides this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoSubscribeNewMembers
The AutoSubscribeNewMembers switch specifies whether to automatically subscribe new members that are added to the Office 365 Group to conversations and calendar events. Only users that are added to the group after you enable this setting are automatically subscribed to the group..

- To subscribe new members to conversations and calendar events, use the AutoSubscribeNewMembers switch without a value.

- If you don't want to subscribe new members to conversations and calendar events, use this exact syntax: -AutoSubscribeNewMembers:$false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CalendarMemberReadOnly
The CalendarMemberReadOnly switch specifies whether to set read-only Calendar permissions to the Office 365 Group for members of the group.

- To set read-only Calendar permissions, use the CalendarMemberReadOnly switch without a value.

- To remove read-only Calendar permissions, use this exact syntax: -CalendarMemberReadOnly:$false.

To view the current value of the CalendarMemberReadOnly property on an Office 365 Group, replace \<EmailAddress\> with the email address of the group, and run this command: Get-UnifiedGroup -Identity \<EmailAddress\> -IncludeAllProperties | Format-List \*Calendar\*.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Classification
The Classification parameter specifies the classification for the Office 365 Group. You need to configure the list of available classifications in Azure Active Directory before you can specify a value for this parameter. For more information, see Azure Active Directory cmdlets for configuring group settings (https://go.microsoft.com/fwlink/p/?LinkId=827484).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabled
The ConnectorsEnabled specifies whether to enable the ability to use connectors for the Office 365 Group.

- To enable connectors, use the ConnectorsEnabled switch without a value.

- To disable connectors, use this exact syntax: -ConnectorsEnabled:$false.

To use this switch, the value of the ConnectorsEnabled parameter on the Set-OrganizationConfig cmdlet must be set to $true (which is the default value).

For more information about connectors for Office 365 groups, see Connect apps to your groups (https://go.microsoft.com/fwlink/p/?LinkId=787545).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

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
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the name of the Office 365 Group. The display name is visible in the Exchange admin center, address lists, and Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
The EmailAddresses parameter specifies all the email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx).

Valid syntax for this parameter is \<Type\>:\<emailaddress1\>,\<Type\>:\<emailaddress2\>,...\<Type\>:\<emailaddressN\>. The optional \<Type\> value specifies the type of email address. Some examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.

- smtp: Other SMTP email addresses.

- X400: X.400 addresses in on-premises Exchange.

- X500: X.500 addresses in on-premises Exchange.

If you don't include a \<Type\> value for an email address, the value smtp is assumed. Note that Exchange doesn't validate the syntax of custom address types (including X.400 addresses). Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the \<Type\> value SMTP on the address.

- The first email address when you don't use any \<Type\> values, or when you use multiple \<Type\> values of smtp.

- If it's available, use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To replace all existing proxy email addresses with the values you specify, use the following syntax: "\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>",..."\<Type\>:\<emailaddressN\>".

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: @{Add="\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>",...; Remove="\<Type\>:\<emailaddress2\>","\<Type\>:\<emailaddress2\>",...}.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute1
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute2
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute3
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute4
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute5
The ExtensionCustomAttribute1-5 parameters specify custom attributes that store additional information. You can specify multiple values for these parameters as a comma delimited list. Each ExtensionCustomAttribute parameter can hold up to 1,300 values.

For more information about custom attributes, see Custom attributes (https://technet.microsoft.com/library/ee423541.aspx).

For more information about using multivalued properties, see Modifying multivalued properties (https://technet.microsoft.com/library/bb684908.aspx).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceUpgrade
The ForceUpgrade switch specifies whether to suppress the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrantSendOnBehalfTo
The GrantSendOnBehalfTo parameter specifies who can send on behalf of this Office 365 Group. Although messages that are sent on behalf of the group clearly show the sender in the From field (\<Sender\> on behalf of \<Office365Group\>), replies to these messages are delivered to the group, not the sender.

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

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

By default, this parameter is blank, which means no one else has permission to send on behalf of this Office 365 Group group.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenFromAddressListsEnabled
The HiddenFromAddressListsEnabled specifies whether the Office 365 Group appears in the global address list (GAL) and other address lists in your organization. Valid values are:

- $true: The Office 365 Group is hidden from the GAL and other address lists. The group can still receive messages, but users can't search for or browse to the group in Outlook or Outlook on the web. Users also can't find the group by using the Discover option in Outlook on the web. For users that are members of the Office 365 Group, the group will still appear in the navigation pane in Outlook and Outlook on the web.

- $false: The Office 365 Group is visible in the GAL and other address lists. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The Language parameter specifies language preference for the Office 365 Group.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTip
The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: \<html\>\<body\>This mailbox is not monitored\</body\>\</html\>. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.

- The text is automatically added to the MailTipTranslations property of the recipient as the default value: default:\<MailTip text\>. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipTranslations
The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

@{Add="\<culture 1\>:\<localized text 1\>","\<culture 2\>:\<localized text 2\>"...; Remove="\<culture 3\>:\<localized text 3\>","\<culture 4\>:\<localized text 4\>"...}

\<culture\> is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: @{Add="ES:Esta caja no se supervisa."}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
The Notes parameter specifies the description of the Office 365 Group. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: \<sender1\>,\<sender2\>,...\<senderN\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<sender1\>","\<sender2\>",..."\<senderN\>".

To add or remove individual senders or groups without affecting other existing entries, use the RejectMessagesFrom and RejectMessagesFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the RejectMessagesFrom and RejectMessagesFromDLMembers properties, respectively. Therefore, you can't use the RejectMessagesFromSendersOrMembers parameter and the RejectMessagesFrom or RejectMessagesFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnifiedGroupWelcomeMessageEnabled
The UnifiedGroupWelcomeMessageEnabled switch specifies whether to enable or disable sending system-generated welcome messages to users who are added as members to the Office 365 Group.

- To enable this setting, you don't need to specify a value with this switch.

- To disable this setting, use this exact syntax: -UnifiedGroupWelcomeMessageEnabled:$false.

This setting is enabled by default.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/e120e5c5-8643-4623-a15d-f97811f58e99.aspx)

