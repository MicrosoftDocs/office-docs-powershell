---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-unifiedgroup
schema: 2.0.0
title: New-UnifiedGroup
---

# New-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-UnifiedGroup cmdlet to create Microsoft 365 Groups in your cloud-based organization. To add members, owners, and subscribers to Microsoft 365 Groups, use the Add-UnifiedGroupLinks cmdlet.

**Note**: You can't use this cmdlet to create Microsoft 365 Groups if you connect using certificate based authentication (also known as CBA or app-only authentication for unattended scripts) or Azure managed identity. You can use Microsoft Graph instead. For more information, see [Create group](https://learn.microsoft.com/graph/api/group-post-groups).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

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
 [-IsMemberAllowedToEditContent <System.Boolean>]
 [-Language <CultureInfo>]
 [-ManagedBy <RecipientIdParameter[]>]
 [-Members <RecipientIdParameter[]>]
 [-Name <String>]
 [-Notes <String>]
 [-Owner <RecipientIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-SensitivityLabelId <Sustem.Guid>]
 [-SuppressWarmupMessage]
 [-WhatIf]
 [<CommonParameters>]
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
 [-SensitivityLabelId <Sustem.Guid>]
 [-SuppressWarmupMessage]
 [-WhatIf]
 [<CommonParameters>]
```

### SegmentationOption
```
New-UnifiedGroup [-DisplayName <String>]
 [-SubscriptionEnabled]
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
 [-SensitivityLabelId <Sustem.Guid>]
 [-SuppressWarmupMessage]
 [-WhatIf]
 [<CommonParameters>]
```

### DlMigration
```
New-UnifiedGroup -DlIdentity <DistributionGroupIdParameter>
 [-ConvertClosedDlToPrivateGroup]
 [-DeleteDlAfterMigration]
 [-Confirm]
 [-ExecutingUser <RecipientIdParameter>]
 [-ManagedBy <RecipientIdParameter[]>]
 [-Members <RecipientIdParameter[]>]
 [-Owner <RecipientIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Microsoft 365 Groups are group objects that are available across Microsoft 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-UnifiedGroup -DisplayName "Engineering Department" -Alias "engineering"
```

This example creates a new Microsoft 365 Group named Engineering Department.

## PARAMETERS

### -DisplayName

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The DisplayName parameter specifies the name of the Microsoft 365 Group. The display name is visible in the Exchange admin center, address lists, and Outlook. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

For Microsoft 365 Groups, the DisplayName value is used in the unique Name property. However, because the DisplayName value doesn't need to be unique, the DisplayName value is appended with an underscore character (\_) and a short GUID value when it's used for the Name property.

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlIdentity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The DlIdentity parameter specifies the distribution group (also known as a distribution list or DL) that you want to migrate to a Microsoft 365 Group. The distribution group must be a universal distribution group (the RecipientTypeDetails property value is MailUniversalDistributionGroup). You can use any value that uniquely identifies the distribution group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

All the properties and membership of the distribution group are copied to the Microsoft 365 Group.

The alias and proxy addresses of the distribution group are moved to the Microsoft 365 Group, and are replaced on the distribution group by the values `DLMigrated_<GUID>`. The original proxy addresses are copied to the ExtensionCustomAttribute5 property of the distribution group.

Microsoft 365 Groups don't have ReportToManager and ReportToOriginator parameters, so the values of these parameters aren't migrated from the distribution group to the Microsoft 365 Group. The Microsoft 365 Group behaves as if the default values of these parameters were set (ReportToManager is $false and ReportToOriginator is $true). In other words, delivery status notifications (also known as DSNs, non-delivery reports, NDRs, or bounce messages) are sent to the message sender and not to the owner of the Microsoft 365 Group.

```yaml
Type: DistributionGroupIdParameter
Parameter Sets: DlMigration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessType

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The AccessType parameter specifies the privacy type for the Microsoft 365 Group. Valid values are:

- Public: The group content and conversations are available to everyone, and anyone can join the group without approval from a group owner. This value is the default.
- Private: The group content and conversations are available only to members of the group, and joining the group requires approval from a group owner.

You can change the privacy type at any point in the lifecycle of the group.

**Note**: Although a user needs to be a member to participate in a private group, anyone can send email to a private group, and receive replies from the private group.

```yaml
Type: ModernGroupTypeInfo
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the Microsoft 365 Group. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

If you don't use the Alias parameter when you create a Microsoft 365 Group, the value of the DisplayName parameter is used for the Alias value. Spaces are removed, unsupported characters are converted to question marks (?), and numbers might be added to maintain the uniqueness of the Alias value.

When you create a Microsoft 365 Group without using the EmailAddresses parameter, the Alias value is used to generate the primary email address (`alias@domain`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to `oe` in the primary email address.

The Alias value is appended with the ExternalDirectoryObjectId property value and used as the Name property value for the Microsoft 365 Group (`<Alias>_<ExternalDirectoryObjectId>`).

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysSubscribeMembersToCalendarEvents

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The AlwaysSubscribeMembersToCalendarEvents switch controls the default subscription settings of new members that are added to the Microsoft 365 Group.

- If you use this switch without a value, all future members that are added to the group  have their subscriptions set to ReplyAndEvents.
- If you use this exact syntax: `-AlwaysSubscribeMembersToCalendarEvents:$false`, all future members that are added to the group have their subscriptions set to ReplyOnly.

Group members can change their own subscription settings, which can override your intended use of this switch.

The AutoSubscribeNewMembers switch overrides this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoSubscribeNewMembers

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The AutoSubscribeNewMembers switch specifies whether to automatically subscribe new members that are added to the Microsoft 365 Group to conversations and calendar events. You don't need to specify a value with this switch.

You need to use this switch with the SubscriptionEnabled switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Classification

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

### -ConvertClosedDlToPrivateGroup

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ConvertClosedDlToPrivateGroup switch specifies whether to migrate the closed distribution group to a private Microsoft 365 Group. You don't need to specify a value with this switch.

By default, this switch is always applied when migrating closed distribution groups, and is no longer required.

If the distribution group has the value Closed for the MemberDepartRestriction or MemberJoinRestriction parameters, the distribution group is always migrated to a private Microsoft 365 Group. For open distribution groups, the migrated Microsoft 365 Group is always public, not private.

You can only use this switch with the DlIdentity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: DlMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataEncryptionPolicy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The DataEncryptionPolicy parameter specifies the data encryption policy that's applied to the Microsoft 365 Group. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: Identity, SegmentationOption, ProvisioningOptions
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteDlAfterMigration

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The DeleteDlAfterMigration switch specifies whether to delete the distribution group after it's migrated to a Microsoft 365 Group. You don't need to specify a value with this switch.

You can only use this switch with the DlIdentity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: DlMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The EmailAddresses parameter specifies all email addresses (proxy addresses) for the Microsoft 365 Group, including the primary SMTP address. In cloud-based organizations, the primary SMTP address and other proxy addresses for Microsoft 365 Groups are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the Microsoft 365 Group.

Valid syntax for this parameter is `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`. The optional `Type` value specifies the type of email address. Examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.
- smtp: Other SMTP email addresses.
- SPO: SharePoint email address.

If you don't include a Type value for an email address, the address is assumed to be an SMTP email address. The syntax of SMTP email addresses is validated, but the syntax of other email address types isn't validated. Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the Type value SMTP on the address.
- The first email address when you don't use any Type values, or when you use multiple lowercase smtp Type values.
- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

```yaml
Type: ProxyAddressCollection
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExecutingUser

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExoErrorAsWarning

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ExoErrorAsWarning switch specifies that Exchange Online errors that you encounter while creating the Microsoft 365 Group are treated as warnings, not errors. You don't need to specify a value with this switch.

Creating Microsoft 365 Groups involves background operations in Microsoft Entra ID and Exchange Online. Errors that you might encounter in Exchange Online don't prevent the creation of the group (and therefore aren't really errors), because the group object in Microsoft Entra ID is synchronized back to Exchange Online.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenGroupMembershipEnabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The HiddenGroupMembershipEnabled switch specifies whether to hide the members of the Microsoft 365 Group from users who aren't members of the group. You don't need to specify a value with this switch.

You can use this setting to help comply with regulations that require you to hide group membership from outsiders (for example, a Microsoft 365 Group that represents students enrolled in a class).

**Note**: You can't change this setting after you create the group. If you create the group with hidden membership, you can't edit the group later to reveal the membership to the group, or vice-versa. Also, any Microsoft 365 Groups with hidden group membership aren't supported in sensitivity labeling policies.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsMemberAllowedToEditContent

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

{{ Fill IsMemberAllowedToEditContent Description }}

```yaml
Type: System.Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Language parameter specifies the language preference for the Microsoft 365 Group.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The MailboxRegion parameter specifies the preferred data location (PDL) for the Microsoft 365 Group in multi-geo environments.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Members parameter specifies the recipients (mail-enabled objects) that are members of the Microsoft 365 Group. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is deprecated and no longer used.

Previously, if you specified a value for this parameter, a random GUID value was added and used as the Name property value for the Microsoft 365 Group (`Name_<RandomGUID>`). Now, the value of the Name property is populated by the Alias parameter value and the ExternalDirectoryObjectId property value (`<Alias>_<ExternalDirectoryObjectId>`).

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Notes parameter specifies the description of the Microsoft 365 Group. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Owner parameter specifies the for the Microsoft 365 Group. An owner is a group member who has certain privileges, such as the ability to edit group properties.

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

```yaml
Type: SmtpAddress
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSenderAuthenticationEnabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The RequireSenderAuthenticationEnabled parameter specifies whether to accept messages only from authenticated (internal) senders. Valid values are:

- $true: Messages are accepted only from authenticated (internal) senders. Messages from unauthenticated (external) senders are rejected.
- $false: Messages are accepted from authenticated (internal) and unauthenticated (external) senders.

```yaml
Type: Boolean
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SensitivityLabelId

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SensitivityLabelId parameter specifies the GUID value of the sensitivity label that's assigned to the Microsoft 365 Group.

**Note**: In the output of the Get-UnifiedGroup cmdlet, this property is named SensitivityLabel, not SensitivityLabelId.

```yaml
Type: System.Guid
Parameter Sets: Identity, SegmentationOption, ProvisioningOptions
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriptionEnabled

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SubscriptionEnabled switch specifies whether subscriptions to conversations and calendar events are enabled for the Microsoft 365 Group. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressWarmupMessage

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is deprecated and no longer used.

```yaml
Type: SwitchParameter
Parameter Sets: Identity, ProvisioningOptions, SegmentationOption
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
