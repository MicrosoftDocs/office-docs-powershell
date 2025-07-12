---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/enable-mailbox
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Enable-Mailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Enable-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-Mailbox cmdlet to create mailboxes for existing users who don't already have mailboxes. You can also use this cmdlet to create In-Place archives for existing mailboxes.

**Note**: In Exchange Online, you use this cmdlet to add archive mailboxes for existing users and to enable auto-expanding archives. To add a mailbox for an existing Microsoft Entra account, you need to add a license to the account as described in [Assign licenses to user accounts](https://learn.microsoft.com/office365/enterprise/powershell/assign-licenses-to-user-accounts-with-office-365-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Arbitration
```
Enable-Mailbox [-Identity] <UserIdParameter> [-Arbitration]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### RemoteArchive
```
Enable-Mailbox [-Identity] <UserIdParameter> -ArchiveDomain <SmtpDomain>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemoteArchive]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Discovery
```
Enable-Mailbox [-Identity] <UserIdParameter> [-Discovery]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Equipment
```
Enable-Mailbox [-Identity] <UserIdParameter> [-Equipment]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### LinkedRoomMailbox
```
Enable-Mailbox [-Identity] <UserIdParameter> -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-LinkedCredential <PSCredential>]
 [-LinkedRoom]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveGuid <Guid>]
 [-ArchiveName <MultiValuedProperty>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Linked
```
Enable-Mailbox [-Identity] <UserIdParameter> -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-LinkedCredential <PSCredential>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### PublicFolder
```
Enable-Mailbox [-Identity] <UserIdParameter> [-PublicFolder]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-HoldForMigration]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Room
```
Enable-Mailbox [-Identity] <UserIdParameter> [-Room]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Shared
```
Enable-Mailbox [-Identity] <UserIdParameter> [-Shared]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### User
```
Enable-Mailbox [-Identity] <UserIdParameter>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Archive
```
Enable-Mailbox [-Identity] <UserIdParameter>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-ArchiveGuid <Guid>]
 [-ArchiveName <MultiValuedProperty>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AuditLog
```
Enable-Mailbox [-Identity] <UserIdParameter> [-AuditLog]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-Force]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AutoExpandingArchive
```
Enable-Mailbox [-Identity] <UserIdParameter> [-AutoExpandingArchive]
 [-Confirm]
 [-Force]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Enable-Mailbox cmdlet mailbox-enables existing users, public folders, or InetOrgPerson objects by adding the mailbox attributes that are required by Exchange. When the user logs on to the mailbox or receives email messages, the mailbox object is actually created in the Exchange database.

When mailbox-enabling an existing user, beware of non-supported characters in the user account or Name property. If you don't specify an Alias value when you mailbox-enable the user, Exchange converts all non-supported characters to question marks (?). To avoid question marks in the Alias, verify that the user account and Name properties have only supported ASCII or Unicode characters or specify an Alias value when you mailbox-enable the user.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

In Exchange Server, the [CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216) InformationVariable and InformationAction don't work.

## EXAMPLES

### Example 1
```powershell
Enable-Mailbox -Identity Ayla
```

This example creates a mailbox for the existing user named Ayla.

### Example 2
```powershell
Enable-Mailbox -Identity Ayla -Archive
```

This example creates an In-Place archive for the existing username Ayla who already has a mailbox.

### Example 3
```powershell
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDomain "archive.contoso.com"
```

This example creates a remote archive for the existing on-premises user named Ayla. The archive is created in the cloud-based organization that uses the domain archive.contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user or InetOrgPerson object that you want to mailbox-enable. You can use any value that uniquely identifies the user. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration switch is required to mailbox-enable arbitration mailboxes. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailboxes that are used for storing different types of system data and for managing messaging approval workflow.

```yaml
Type: SwitchParameter
Parameter Sets: Arbitration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDomain
This parameter is available only in on-premises Exchange.

The ArchiveDomain parameter specifies the domain in the cloud-based service where the archive that's associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.

Only use this parameter if the archive is hosted in the cloud-based service.

```yaml
Type: SmtpDomain
Parameter Sets: RemoteArchive
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Discovery
This parameter is available only in on-premises Exchange.

The Discovery switch is required to mailbox-enable Discovery mailboxes. You don't need to specify a value with this switch.

Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be converted to another type of mailbox. For more information, see [In-Place eDiscovery in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/ediscovery/ediscovery).

```yaml
Type: SwitchParameter
Parameter Sets: Discovery
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Equipment
This parameter is available only in on-premises Exchange.

The Equipment switch is required to mailbox-enable equipment mailboxes. You don't need to specify a value with this switch.

Equipment mailboxes are resource mailboxes that aren't associated with a specific location (for example, vehicles or computers).

```yaml
Type: SwitchParameter
Parameter Sets: Equipment
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedDomainController
This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the LinkedMasterAccount parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter.

This parameter is required only if you're enabling a linked mailbox.

```yaml
Type: String
Parameter Sets: LinkedRoomMailbox, Linked
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount
This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

This parameter is required only if you're enabling a linked mailbox.

```yaml
Type: UserIdParameter
Parameter Sets: LinkedRoomMailbox, Linked
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedRoom
This parameter is available only in on-premises Exchange.

The LinkedRoom switch is required to mailbox-enable linked resource mailboxes. You don't need to specify a value with this switch.

A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.

```yaml
Type: SwitchParameter
Parameter Sets: LinkedRoomMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
This parameter is available only in on-premises Exchange.

The PublicFolder switch is required to mailbox-enable public folder mailboxes. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolder
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room
This parameter is available only in on-premises Exchange.

The Room switch is required to mailbox-enable room mailboxes. You don't need to specify a value with this switch.

Room mailboxes are resource mailboxes that are associated with a specific location (for example, conference rooms).

```yaml
Type: SwitchParameter
Parameter Sets: Room
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Shared
This parameter is available only in on-premises Exchange.

The Shared switch is required to connect shared mailboxes. You don't need to specify a value with this switch.

A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. The mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

```yaml
Type: SwitchParameter
Parameter Sets: Shared
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy
This parameter is available only in on-premises Exchange.

The ActiveSyncMailboxPolicy parameter specifies the mobile device mailbox policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:.

- Name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default mobile device mailbox policy is applied to the mailbox.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, Archive, AuditLog
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressBookPolicy
This parameter is available only in on-premises Exchange.

The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name
- Distinguished name (DN)
- GUID

For more information about address book policies, see [Address book policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/address-book-policies/address-book-policies).

```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: User
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
This parameter is available only in on-premises Exchange.

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
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, Archive, AuditLog
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch creates an archive mailbox for an existing user that already has a mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDatabase
This parameter is available only in on-premises Exchange.

The ArchiveDatabase parameter specifies the Exchange database that contains the archive that's associated with this mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveGuid
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveName
The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Outlook on the web (formerly known as Outlook Web App). If the value contains spaces, enclose the value in quotation marks (").

In on-premises Exchange, if you don't use this parameter, the following default values are used based on the version of Exchange:

- Exchange 2016 or later: `In-Place Archive -<Display Name>`
- Exchange 2013: `In-Place Archive - <Display Name>`
- Exchange 2010: `Personal Archive - <Display Name>`

In Exchange Online, if you don't use this parameter, the default value is `In-Place Archive -<Display Name>`.

In Outlook in Exchange Online, the value of this parameter is ignored. The name of the archive mailbox that's shown in the folder list is `Online Archive - <PrimarySMTPAddress>`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Archive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: AuditLog
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoExpandingArchive
This parameter is available only in the cloud-based service.

The AutoExpandingArchive switch enables the auto-expanding archiving feature for the specified mailbox. You don't need to specify a value with this switch.

After you enable auto-expanding archiving, additional storage space is automatically added to the user's archive mailbox when it approaches the storage limit.

**Notes**:

- The user's archive mailbox has to be enabled before auto-expanding archiving can be enabled.
- After you enable auto-expanding archiving for the user's mailbox, it can't be disabled.

```yaml
Type: SwitchParameter
Parameter Sets: AutoExpandingArchive
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter specifies the Exchange database that contains the new mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: Arbitration, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, AuditLog
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
This parameter is available only in on-premises Exchange.

The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use DisplayName parameter, the value of the Name property is used for the display name.

```yaml
Type: String
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, Archive, AuditLog
Aliases:

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
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, Archive, AuditLog
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -HoldForMigration
This parameter is available only in on-premises Exchange.

The HoldForMigration switch specifies whether to prevent any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging on to a public folder mailbox. You don't need to specify a value with this switch.

You need to use this switch when you create the first public folder, which is called the hierarchy mailbox, in your organization.

Use this switch only if you plan to migrate legacy Exchange 2010 public folders to Exchange 2016. If you use this switch but don't have legacy public folders to migrate, you won't be able to create any public folders.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolder
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedCredential
This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies the credentials used to access the domain controller that's specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: LinkedRoomMailbox, Linked
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicy
This parameter is available only in Exchange Server 2010.

The ManagedFolderMailboxPolicy parameter specifies the managed folder mailbox policy to enable for the mailbox that you create. If you don't specify this parameter, the default managed folder mailbox policy is used.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed
This parameter is available in Exchange Server 2010.

The ManagedFolderMailboxPolicyAllowed switch specifies whether to bypass the warning that messaging records management (MRM) features aren't supported for clients using versions of Outlook earlier than Office Outlook 2007. You don't need to specify a value with this switch.

When a managed folder mailbox policy is assigned to a mailbox using the ManagedFolderMailboxPolicy parameter, the warning appears by default unless the ManagedFolderMailboxPolicyAllowed switch is used.

Outlook 2003 Service Pack 3 clients are supported but are provided limited functionality for MRM.

```yaml
Type: SwitchParameter
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mailbox to False, which means the email addresses of the mailbox aren't automatically updated by email address policies.

```yaml
Type: SmtpAddress
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, Archive, AuditLog
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchive
This parameter is available only in on-premises Exchange.

The RemoteArchive switch specifies that a remote archive mailbox is created for this mailbox. A remote archive exists in the cloud-based service. You don't need to specify a value with this switch.

You need to use this parameter with the ArchiveDomain parameter, and you can't use this parameter with the Archive parameter.

```yaml
Type: SwitchParameter
Parameter Sets: RemoteArchive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy
This parameter is available only in on-premises Exchange.

The RetentionPolicy parameter specifies the retention policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Arbitration, RemoteArchive, Discovery, Equipment, LinkedRoomMailbox, Linked, PublicFolder, Room, Shared, User, Archive, AuditLog
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy
The RoleAssignmentPolicy parameter specifies the management role assignment policy that's assigned to the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default role assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see [Understanding management role assignment policies](https://learn.microsoft.com/exchange/understanding-management-role-assignment-policies-exchange-2013-help).

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

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
