---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# enable-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-Mailbox cmdlet to create mailboxes for existing users who don't already have mailboxes. You can also use this cmdlet to create In-Place archives for existing mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set8
```
enable-Mailbox [-Identity] <UserIdParameter> [-Arbitration]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Alias <String>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf] -LinkedDomainController <String>
 -LinkedMasterAccount <UserIdParameter> [-LinkedCredential <PSCredential>] [<CommonParameters>]
```

### Set10
```
enable-Mailbox [-Identity] <UserIdParameter> -ArchiveDomain <SmtpDomain>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Alias <String>] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>] [-RemoteArchive]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [-Shared] [-Database <DatabaseIdParameter>] [<CommonParameters>]
```

### Set4
```
enable-Mailbox [-Identity] <UserIdParameter> [-Discovery] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [-Arbitration] [<CommonParameters>]
```

### Set2
```
enable-Mailbox [-Identity] <UserIdParameter> [-Equipment] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter> [-LinkedRoom]
 [-LinkedCredential <PSCredential>] [-Arbitration] [<CommonParameters>]
```

### Set5
```
enable-Mailbox [-Identity] <UserIdParameter> -LinkedDomainController <String>
 -LinkedMasterAccount <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Alias <String>]
 [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-Force]
 [-LinkedCredential <PSCredential>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [-PublicFolder] [-HoldForMigration] [-Equipment] [<CommonParameters>]
```

### Set6
```
enable-Mailbox [-Identity] <UserIdParameter> [-Room] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [-Discovery] -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-LinkedCredential <PSCredential>] [<CommonParameters>]
```

### Set7
```
enable-Mailbox [-Identity] <UserIdParameter> [-Shared] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [-Equipment] [-Room] [<CommonParameters>]
```

### Set1
```
enable-Mailbox [-Identity] <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set9
```
enable-Mailbox [-Identity] <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-ArchiveGuid <Guid>]
 [-ArchiveName <MultiValuedProperty>] [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>] [-Force]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf] [-Room] [-Database <DatabaseIdParameter>]
 -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter> [-LinkedRoom]
 [-LinkedCredential <PSCredential>] [<CommonParameters>]
```

### Set3
```
enable-Mailbox [-Identity] <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-PrimarySmtpAddress <SmtpAddress>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf] [-AuditLog] [-PublicFolder] [-HoldForMigration]
 [<CommonParameters>]
```

### Set13
```
enable-Mailbox [-Identity] <UserIdParameter> -ArchiveDomain <SmtpDomain>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Alias <String>] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-PrimarySmtpAddress <SmtpAddress>] [-RemoteArchive]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-ArchiveGuid <Guid>] [-ArchiveName <MultiValuedProperty>]
 [<CommonParameters>]
```

### Set12
```
enable-Mailbox [-Identity] <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-ArchiveGuid <Guid>]
 [-ArchiveName <MultiValuedProperty>] [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>] [-Force]
 [-PrimarySmtpAddress <SmtpAddress>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf] [-AuditLog] [-Database <DatabaseIdParameter>]
 [<CommonParameters>]
```

### Set11
```
enable-Mailbox [-Identity] <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-PrimarySmtpAddress <SmtpAddress>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set15
```
enable-Mailbox [-Identity] <UserIdParameter> -ArchiveDomain <SmtpDomain>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Alias <String>] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-Force] [-PrimarySmtpAddress <SmtpAddress>] [-RemoteArchive]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set14
```
enable-Mailbox [-Identity] <UserIdParameter> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>] [-AutoExpandingArchive] [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-Force] [-PrimarySmtpAddress <SmtpAddress>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Enable-Mailbox cmdlet mailbox-enables existing users, public folders, or InetOrgPerson objects by adding the mailbox attributes that are required by Exchange. When the user logs on to the mailbox or receives email messages, the mailbox object is actually created in the Exchange database.

When mailbox-enabling an existing user, beware of non-supported characters in the user account or Name property. If you don't specify an Alias value when you mailbox-enable the user, Exchange converts all non-supported characters to question marks (?). To avoid question marks in the Alias, verify that the user account and Name properties have only supported ASCII or Unicode characters or specify an Alias value when you mailbox-enable the user.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Enable-Mailbox -Identity Ayla
```

This example creates a mailbox for the existing user named Ayla.

### Example 2
```
Enable-Mailbox -Identity Ayla -Archive
```

This example creates an In-Place archive for the existing user name Ayla who already has a mailbox.

### Example 3
```
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDomain "archive.contoso.com"
```

This example creates a remote archive for the existing on-premises user named Ayla. The archive is created in the cloud-based organization that uses the domain archive.contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user or InetOrgPerson object that you want to mailbox-enable. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.

```yaml
Type: SwitchParameter
Parameter Sets: Set8, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set10, Set13, Set15
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Discovery
The Discoveryswitch specifies that the mailbox is a Discovery mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a Discovery mailbox.

Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be converted to another type of mailbox. For more information, see In-Place eDiscovery (https://technet.microsoft.com/library/dd298021.aspx).

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Equipment
This parameter is available only in on-premises Exchange.

The Equipment parameter specifies that the resource mailbox is an equipment mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling an equipment resource mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set5, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set8, Set2, Set5, Set6, Set9
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount
This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account. For example:

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

This parameter is required only if you're enabling a linked mailbox.

```yaml
Type: UserIdParameter
Parameter Sets: Set8, Set2, Set5, Set6, Set9
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room
This parameter is available only in on-premises Exchange.

The Roomswitch specifies that the resource mailbox is a room mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a room resource mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Set6, Set7, Set9
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Shared
This parameter is available only in on-premises Exchange.

The Sharedswitch specifies that the mailbox is a shared mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a shared mailbox.

A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. The mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

```yaml
Type: SwitchParameter
Parameter Sets: Set10, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

For more information about address book policies, see Address book policies (https://technet.microsoft.com/library/hh529948.aspx).

```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
This parameter is available only in on-premises Exchange.

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archiveswitchcreates an archive mailbox for an existing user that already has a mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set9, Set13, Set12
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set9, Set13, Set12
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveGuid
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: Set9, Set13, Set12
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveName
The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Outlook and Outlook Web App.

If you don't use this parameter, the default value is In-Place Archive - \<Mailbox User's Display Name\>.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set9, Set13, Set12
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set8, Set10, Set4, Set2, Set5, Set6, Set7, Set1, Set9, Set3, Set12, Set11
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use DisplayName parameter, the value of the Name property is used for the display name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedCredential
This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies the credentials used to access the domain controller that's specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: Set8, Set2, Set5, Set6, Set9
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicy
The ManagedFolderMailboxPolicy parameter specifies the managed folder mailbox policy to enable for the mailbox that you create. If you don't specify this parameter, the default managed folder mailbox policy is used.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Set8, Set10, Set4, Set2, Set5, Set6, Set7, Set1, Set9, Set3
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed
The ManagedFolderMailboxPolicyAllowed parameter specifies whether to bypass the warning that messaging records management (MRM) features aren't supported for e-mail clients using versions of Outlook earlier than Office Outlook 2007. When a managed folder mailbox policy is assigned to a mailbox using the ManagedFolderMailboxPolicy parameter, the warning appears by default unless the ManagedFolderMailboxPolicyAllowed parameter is used.

Outlook 2003 Service Pack 3 clients are supported but are provided limited functionality for MRM.

```yaml
Type: SwitchParameter
Parameter Sets: Set8, Set10, Set4, Set2, Set5, Set6, Set7, Set1, Set9, Set3
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

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mailbox to False, which means the email addresses of the mailbox aren't automatically updated by email address policies.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchive
This parameter is available only in on-premises Exchange.

The RemoteArchiveswitch specifies that a remote archive mailbox is created for this mailbox. A remote archive exists in the cloud-based service. You don't need to specify a value with this switch.

You need to use this parameter with the ArchiveDomain parameter, and you can't use this parameter with the Archive parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set10, Set13, Set15
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy
The RoleAssignmentPolicy parameter specifies the management role assignment policy that's assign to the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default role assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see Understanding management role assignment policies (https://technet.microsoft.com/library/dd638100.aspx).

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedRoom
This parameter is available only in on-premises Exchange.

The LinkedRoomswitchspecifies that the mailbox is a linked resource mailbox. You don't need to specify a value with this switch.

A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set9
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
This parameter is available only in on-premises Exchange.

The PublicFolderswitch specifies that the mailbox is a public folder mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a public folder mailbox.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set3, Set12
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldForMigration
This parameter is available only in on-premises Exchange.

The HoldForMigrationswitch specifies whether to prevent any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging on to a public folder mailbox. You don't need to specify a value with this switch.

You need to use this parameter when you create the first public folder, which is called the hierarchy mailbox, in your organization.

Use this parameter only if you plan to migrate legacy Exchange 2010 public folders to Exchange 2016. If you use this switch but don't have legacy public folders to migrate, you won't be able to create any public folders.

```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoExpandingArchive
This parameter is available only in the cloud-based service.

The AutoExpandingArchive switch enables the unlimited archiving feature (called auto-expanding archiving) for the specified mailbox. After you enable auto-expanding archiving, additional storage space is automatically added to the user's archive mailbox when it approaches the storage limit. Note that the user's archive mailbox has to be enabled before auto-expanding archiving can be enabled. Also note that after you enable auto-expanding archiving for the user's mailbox, it can't be disabled.

```yaml
Type: SwitchParameter
Parameter Sets: Set14
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/58de5b3c-05c3-4a1f-84c6-f082d990f22b.aspx)
