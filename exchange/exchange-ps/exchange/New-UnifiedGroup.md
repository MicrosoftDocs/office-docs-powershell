---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-unifiedgroup
applicable: Exchange Online
title: New-UnifiedGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# New-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-UnifiedGroup cmdlet to create Office 365 Groups in your cloud-based organization. To add members, owners, and subscribers to Office 365 Groups, use the Add-UnifiedGroupLinks cmdlet.

> [!NOTE]
> We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
New-UnifiedGroup [-DisplayName <String>]
 [-AccessType <ModernGroupTypeInfo>]
 [-MailboxRegion <String>]
 [-Alias <String>]
 [-AlwaysSubscribeMembersToCalendarEvents]
 [-AutoSubscribeNewMembers]
 [-Classification <String>]
 [-Confirm]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExecutingUser <RecipientIdParameter>]
 [-ExoErrorAsWarning]
 [-HiddenGroupMembershipEnabled]
 [-Language <CultureInfo>]
 [-ManagedBy <RecipientIdParameter[]>]
 [-Members <RecipientIdParameter[]>]
 [-Name <String>]
 [-Notes <String>]
 [-Owner <RecipientIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-SuppressWarmupMessage]
 [-WhatIf] [<CommonParameters>]
```

### ProvisioningOptions
```
New-UnifiedGroup [-DisplayName <String>]
 [-AccessType <ModernGroupTypeInfo>]
 [-Alias <String>]
 [-AlwaysSubscribeMembersToCalendarEvents]
 [-AutoSubscribeNewMembers]
 [-Classification <String>]
 [-Confirm]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExecutingUser <RecipientIdParameter>]
 [-ExoErrorAsWarning]
 [-HiddenGroupMembershipEnabled]
 [-Language <CultureInfo>]
 [-ManagedBy <RecipientIdParameter[]>]
 [-Members <RecipientIdParameter[]>]
 [-Name <String>]
 [-Notes <String>]
 [-Owner <RecipientIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-SuppressWarmupMessage]
 [-WhatIf] [<CommonParameters>]
```

### SegmentationOption
```
New-UnifiedGroup [-DisplayName <String>] [-SubscriptionEnabled]
 [-AccessType <ModernGroupTypeInfo>]
 [-Alias <String>]
 [-AlwaysSubscribeMembersToCalendarEvents]
 [-AutoSubscribeNewMembers]
 [-Classification <String>]
 [-Confirm]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExecutingUser <RecipientIdParameter>]
 [-ExoErrorAsWarning]
 [-HiddenGroupMembershipEnabled]
 [-Language <CultureInfo>]
 [-ManagedBy <RecipientIdParameter[]>]
 [-Members <RecipientIdParameter[]>]
 [-Name <String>]
 [-Notes <String>]
 [-Owner <RecipientIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-SuppressWarmupMessage]
 [-WhatIf] [<CommonParameters>]
```

### DlMigration
```
New-UnifiedGroup -DlIdentity <DistributionGroupIdParameter> [-ConvertClosedDlToPrivateGroup] [-DeleteDlAfterMigration]
 [-Confirm]
 [-ExecutingUser <RecipientIdParameter>]
 [-ManagedBy <RecipientIdParameter[]>]
 [-Members <RecipientIdParameter[]>]
 [-Owner <RecipientIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Office 365 Groups are group objects that are available across Office 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-UnifiedGroup -DisplayName "Engineering Department" -Alias engineering
```

This example creates a new Office 365 Group named Engineering Department.

## PARAMETERS

### -DisplayName
The DisplayName parameter specifies the name of the Office 365 Group. The display name is visible in the Exchange admin center, address lists, and Outlook. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

For Office 365 Groups, the DisplayName value is used in the unique Name property. However, because the DisplayName value doesn't need to be unique, the DisplayName value is appended with an underscore character (\_) and a short GUID value when it's used for the Name property.

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlIdentity
The DlIdentity parameter specifies the distribution group (also known as a distribution list or DL) that you want to migrate to an Office 365 Group. The distribution group must be a universal distribution group (the RecipientTypeDetails property value is MailUniversalDistributionGroup). You can use any value that uniquely identifies the distribution group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

All the properties and membership of the distribution group are copied to the Office 365 Group.

The alias and proxy addresses of the distribution group are moved to the Office 365 Group, and are replaced on the distribution group by the values DLMigrated\_\<GUID\>. The original proxy addresses are copied to the ExtensionCustomAttribute5 property of the distribution group.

Office 365 Groups don't have ReportToManager and ReportToOriginator parameters, so the values of these parameters aren't migrated from the distribution group to the Office 365 Group. The Office 365 Group behaves as if the default values of these parameters were set (ReportToManager is $false and ReportToOriginator is $true). In other words, delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) are sent to the message sender and not to the owner of the Office 365 Group.

```yaml
Type: DistributionGroupIdParameter
Parameter Sets: DlMigration
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessType
The AccessType parameter specifies the privacy type for the Office 365 Group. Valid values are:

- Public: The group content and conversations are available to everyone, and anyone can join the group without approval from a group owner. This is the default value.

- Private: The group content and conversations are only available to members of the group, and joining the group requires approval from a group owner.

You can change the privacy type at any point in the lifecycle of the group.

Note: Although a user needs to be a member to participate in a private group, anyone can send email to a private group, and receive replies from the private group.

```yaml
Type: ModernGroupTypeInfo
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
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

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, \`, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

If you don't use the Alias parameter when you create an Office 365 Group, the value of the DisplayName parameter is used for the Alias value. Spaces are removed, unsupported characters are converted to question marks (?), and numbers may be added to maintain the uniqueness of the Alias value.

When you create an Office 365 Group without using the EmailAddresses parameter, the Alias value is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

The Alias value is appended with the ExternalDirectoryObjectId property value and used as the Name property value for the Office 365 Group ("Alias\_\<ExternalDirectoryObjectId\>"\).

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysSubscribeMembersToCalendarEvents
The AlwaysSubscribeMembersToCalendarEvents switch controls the default subscription settings of new members that are added to the Office 365 Group.

- If you use this switch without a value, all future members that are added to the group will have their subscriptions set to ReplyAndEvents.

- If you use this exact syntax: -AlwaysSubscribeMembersToCalendarEvents:$false, all future members that are added to the group will have their subscriptions set to ReplyOnly.

Group members can change their own subscription settings, which can override your intended use of this switch.

The AutoSubscribeNewMembers switch overrides this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoSubscribeNewMembers
The AutoSubscribeNewMembers switch specifies whether to automatically subscribe new members that are added to the Office 365 Group to conversations and calendar events. You don't need to specify a value with this switch.

You need to use this switch with the SubscriptionEnabled switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Classification
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
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

### -ConvertClosedDlToPrivateGroup
The ConvertClosedDlToPrivateGroup switch specifies whether to migrate the closed distribution group to a private Office 365 Group. You don't need to specify a value with this switch.

By default, this switch is always applied when migrating closed distribution groups, and is no longer required.

If the distribution group has the value Closed for the MemberDepartRestriction or MemberJoinRestriction parameters, the distribution group will always be migrated to a private Office 365 Group. For open distribution groups, the migrated Office 365 Group is always public, not private.

You can only use this switch with the DlIdentity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: DlMigration
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataEncryptionPolicy
The DataEncryptionPolicy parameter specifies the data encryption policy that's applied to the Office 365 Group. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: Identity, SegmentationOption, ProvisioningOptions
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteDlAfterMigration
The DeleteDlAfterMigration switch specifies whether to delete the distribution group after it's migrated to an Office 365 Group. You don't need to specify a value with this switch.

You can only use this switch with the DlIdentity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: DlMigration
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
The EmailAddresses parameter specifies all the email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see [Email address policies in Exchange Server](https://docs.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies).

Valid syntax for this parameter is \<Type\>:\<emailaddress1\>,\<Type\>:\<emailaddress2\>,...\<Type\>:\<emailaddressN\>. The optional \<Type\> value specifies the type of email address. Some examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.

- smtp: Other SMTP email addresses.

- X400: X.400 addresses in on-premises Exchange.

- X500: X.500 addresses in on-premises Exchange.

If you don't include a \<Type\> value for an email address, the value smtp is assumed. Note that Exchange doesn't validate the syntax of custom address types (including X.400 addresses). Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the \<Type\> value SMTP on the address.

- The first email address when you don't use any \<Type\> values, or when you use multiple \<Type\> values of smtp.

- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

To enter multiple proxy email addresses, use the following syntax: "\<Type\>:\<emailaddress1\>","\<Type\>:\<emailaddress2\>",..."\<Type\>:\<emailaddressN\>".

```yaml
Type: ProxyAddressCollection
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExecutingUser
This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExoErrorAsWarning
The ExoErrorAsWarning switch specifies that Exchange Online errors that you encounter while creating the Office 365 Group are treated as warnings, not errors. You don't need to specify a value with this switch.

Creating Office 365 Groups involves background operations in Azure Active Directory and Exchange Online. Errors that you might encounter in Exchange Online don't prevent the creation of the group (and therefore aren't really errors), because the group object in Azure Active Directory is synchronized back to Exchange Online.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenGroupMembershipEnabled
The HiddenGroupMembershipEnabled switch specifies whether to hide the members of the Office 365 Group from users who aren't members of the group. You don't need to specify a value with this switch.

You can use this setting to help comply with regulations that require you to hide group membership from outsiders (for example, an Office 365 Group group that represents students enrolled in a class).

Note: You can't change this setting after you create the group. If you create the group with hidden membership, you can't edit the group later to reveal the membership to the group.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The Language parameter specifies the language preference for the Office 365 Group.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members
The Members parameter specifies the recipients (mail-enabled objects) that are members of the Office 365 Group. You can use any value that uniquely identifies the recipient. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
This parameter has been deprecated and is no longer used.

Previously, if you specified a value for this parameter, a random GUID value was added and used as the Name property value for the Office 365 Group \("Name\_\<RandomGUID\>"\). Now, the value of the Name property is populated by the Alias parameter value and the ExternalDirectoryObjectId property value ("Alias\_\<ExternalDirectoryObjectId\>"\).

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
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
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
The Owner parameter specifies the for the Office 365 Group. An owner is a group member who has certain privileges, such as the ability to edit group properties.

The owner you specify for this parameter must be a mailbox or mail user (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the owner. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
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
The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

```yaml
Type: SmtpAddress
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
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
Type: Boolean
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriptionEnabled
The SubscriptionEnabled switch specifies whether subscriptions to conversations and calendar events are enabled for the Office 365 Group. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: SegmentationOption
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressWarmupMessage
This parameter has been deprecated and is no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
