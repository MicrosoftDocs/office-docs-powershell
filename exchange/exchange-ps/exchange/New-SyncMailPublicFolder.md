---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-syncmailpublicfolder
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-SyncMailPublicFolder
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-SyncMailPublicFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

The New-SyncMailPublicFolder cmdlet is used by the Import-MailPublicFoldersForMigration.ps1 and Sync-MailPublicFolders.ps1 scripts to create mail-enabled public folder recipient objects in Exchange Online (the scripts synchronize mail-enabled public folder objects from the source on-premises Exchange organization to Exchange Online). Don't use this cmdlet unless you are directed to do so by Microsoft Customer Service and Support or by specific documentation.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-SyncMailPublicFolder [-Name] <String> [-Alias] <String> -EntryId <String>
 [-AcceptMessagesOnlyFrom <DeliveryRecipientIdParameter[]>]
 [-Confirm]
 [-Contacts <RecipientIdParameter[]>]
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
 [-DeliverToMailboxAndForward <Boolean>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-EmailAddresses <ProxyAddress[]>]
 [-ExternalEmailAddress <SmtpAddress>]
 [-ForwardingAddress <RecipientIdParameter>]
 [-GrantSendOnBehalfTo <RecipientIdParameter[]>]
 [-HiddenFromAddressListsEnabled]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-OnPremisesObjectId <Guid>]
 [-OverrideRecipientQuotas]
 [-RejectMessagesFrom <DeliveryRecipientIdParameter[]>]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is only used by the Import-MailPublicFoldersForMigration.ps1 and Sync-MailPublicFolders.ps1 scripts. Don't run this cmdlet in the Exchange Management Shell or in Exchange Online PowerShell.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-SyncMailPublicFolder
```

This cmdlet is only used by the Import-MailPublicFoldersForMigration.ps1 and Sync-MailPublicFolders.ps1 scripts. Don't run this cmdlet in the Exchange Management Shell or in Exchange Online PowerShell.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the mail-enabled public folder. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is also used for the DisplayName property if you don't use the DisplayName parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EntryId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFrom
The AcceptMessagesOnlyFrom parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can specify multiple senders separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

The senders you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: DeliveryRecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Contacts
The Contacts parameter specifies the contacts for the public folder. Contacts are persons about whom you can save several types of information, such as addresses, telephone numbers, and web page URLs.

Valid values for this parameter are recipients in your organization. You can use any value that uniquely identifies the recipient. For example:

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeliverToMailboxAndForward
The DeliverToMailboxAndForward parameter specifies the message delivery behavior when a forwarding address is specified by the ForwardingAddress parameter. Valid values are:

- $true: Messages are delivered to this mail-enabled public folder and forwarded to the specified recipient or email address.
- $false: If a forwarding recipient is configured, messages are delivered only to the specified recipient, and messages aren't delivered to this mail-enabled public folder. If no forwarding recipient is configured, messages are delivered only to this mailbox. This is the default value.

The default value is $false. This parameter is meaningful only if you configure a forwarding recipient by using the ForwardingAddress parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the mail-enabled public folder. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
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
- If it's available, use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

```yaml
Type: ProxyAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalEmailAddress
The ExternalEmailAddress parameter specifies an email address outside the organization.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForwardingAddress
The ForwardingAddress parameter specifies a forwarding address for messages that are sent to this mail-enabled public folder. A valid value for this parameter is a recipient in your organization. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

How messages are delivered and forwarded is controlled by the DeliverToMailboxAndForward parameter.

- DeliverToMailboxAndForward is $true: Messages are delivered to this mail-enabled public folder and forwarded to the specified recipient.
- DeliverToMailboxAndForward is $false: Messages are only forwarded to the specified recipient. Messages aren't delivered to this mail-enabled public folder.

The default value is blank ($null), which means no forwarding recipient is configured.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrantSendOnBehalfTo
The GrantSendOnBehalfTo parameter specifies who can send on behalf of this mail-enabled public folder. Although messages send on behalf of the public folder clearly show the sender in the From field (`<Sender> on behalf of <PublicFolder>`), replies to these messages are delivered to the public folder, not the sender.

The sender you specify for this parameter must be a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

By default, this parameter is blank, which means no one else has permission to send on behalf of this public folder.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenFromAddressListsEnabled
The HiddenFromAddressListsEnabled switch specifies that this recipient is not visible in address lists. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxReceiveSize
The MaxReceiveSize parameter specifies the maximum size of a message that can be sent to the mail-enabled public folder. Messages larger than the maximum size are rejected.

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSendSize
The MaxSendSize parameter specifies the maximum size of a message that can be sent by the mail-enabled public folder.

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnPremisesObjectId
The OnPremisesObjectId parameter specifies the GUID of the on-premises mail-enabled public folder that's used to create the mail-enabled public folder object in Exchange Online.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideRecipientQuotas
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFrom
The RejectMessagesFrom parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can specify multiple senders separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

The senders you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFrom and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

```yaml
Type: DeliveryRecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsEmailAddress
The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.
- In environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
