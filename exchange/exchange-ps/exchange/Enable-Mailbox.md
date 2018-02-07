---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# enable-Mailbox

## SYNOPSIS
!!! Exchange Server 2010

Use the Enable-Mailbox cmdlet to mailbox-enable an existing user or Active Directory InetOrgPerson object.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Enable-Mailbox cmdlet to mailbox-enable an existing user, public folder mailbox, or Active DirectoryInetOrgPerson object.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

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
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
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
 [-DomainController <Fqdn>] [-Force] [-MailboxPlan <MailboxPlanIdParameter>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
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
!!! Exchange Server 2010

Mailbox-enabling an existing user or InetOrgPerson object creates additional mailbox attributes on the user object in Active Directory. When the user logs on to the mailbox or receives e-mail messages, a mailbox object in the Exchange database is created.

Use the Identity parameter to specify the user or InetOrgPerson object for whom the mailbox is enabled. Use the Database parameter to specify the Exchange database that contains the mailbox.

When mailbox-enabling an existing user, if an alias isn't specified, Exchange uses the name and converts all non-ASCII characters to question mark (?) characters. In some languages that use nonstandard character sets, the user account may have a non-ASCII value for the name. In this case, when you mailbox-enable the user, the alias is changed to all question mark characters. To avoid this, confirm that the user account has an ASCII name before you create the new mailbox, or make sure you specify a value for the alias.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Mailbox Permissions topic.

!!! Exchange Server 2013

Mailbox-enabling an existing user or InetOrgPerson object creates additional mailbox attributes on the user object in Active Directory. When the user logs on to the mailbox or receives email messages, a mailbox object in the Exchange database is created.

Use the Identity parameter to specify the user or InetOrgPerson object for whom the mailbox is enabled. Use the Database parameter to specify the Exchange database that contains the mailbox.

When mailbox-enabling an existing user, if an alias isn't specified, Exchange uses the name and converts all non-ASCII characters to question mark (?) characters. In some languages that use nonstandard character sets, the user account may have a non-ASCII value for the name. In this case, when you mailbox-enable the user, the alias is changed to all question mark characters. To avoid this, confirm that the user account has an ASCII name before you create the new mailbox, or make sure you specify a value for the alias.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The Enable-Mailbox cmdlet mailbox-enables existing users, public folders, or InetOrgPerson objects by adding the mailbox attributes that are required by Exchange. When the user logs on to the mailbox or receives email messages, the mailbox object is actually created in the Exchange database.

When mailbox-enabling an existing user, beware of non-supported characters in the user account or Name property. If you don't specify an Alias value when you mailbox-enable the user, Exchange converts all non-supported characters to question marks (?). To avoid question marks in the Alias, verify that the user account and Name properties have only supported ASCII or Unicode characters or specify an Alias value when you mailbox-enable the user.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Enable-Mailbox -Identity Contoso\Ayla -Database Database01
```

This example creates a mailbox for the existing user Ayla Kol. The mailbox is created in Database01.

### Example 1 -------------------------- (Exchange Server 2013)
```
Enable-Mailbox -Identity Contoso\Ayla -Database Database01
```

This example creates a mailbox for the existing user Ayla. The mailbox is created in Database01.

### Example 1 -------------------------- (Exchange Server 2016)
```
Enable-Mailbox -Identity Ayla
```

This example creates a mailbox for the existing user named Ayla.

### Example 1 -------------------------- (Exchange Online)
```
Enable-Mailbox -Identity Ayla
```

This example creates a mailbox for the existing user named Ayla.

### Example 2 -------------------------- (Exchange Server 2010)
```
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDatabase "82025f12-8000-4d5e-8059-c052f9355125" -ArchiveDomain "archive.contoso.com"
```

This example creates a remote archive for the existing user Ayla Kol. The archive is created with the following settings:


The archive database has the GUID 82025f12-8000-4d5e-8059-c052f9355125.

The archive domain is archive.contoso.com.

### Example 2 -------------------------- (Exchange Server 2013)
```
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDatabase "82025f12-8000-4d5e-8059-c052f9355125" -ArchiveDomain "archive.contoso.com"
```

This example creates a remote archive for the existing user Ayla. The archive is created with the following settings:


The archive database has the GUID 82025f12-8000-4d5e-8059-c052f9355125.

The archive domain is archive.contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Enable-Mailbox -Identity Ayla -Archive
```

This example creates an In-Place archive for the existing user name Ayla who already has a mailbox.

### Example 2 -------------------------- (Exchange Online)
```
Enable-Mailbox -Identity Ayla -Archive
```

This example creates an In-Place archive for the existing user name Ayla who already has a mailbox.

### Example 3 -------------------------- (Exchange Server 2016)
```
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDomain "archive.contoso.com"
```

This example creates a remote archive for the existing on-premises user named Ayla. The archive is created in the cloud-based organization that uses the domain archive.contoso.com.

### Example 3 -------------------------- (Exchange Online)
```
Enable-Mailbox -Identity ayla@contoso.com -RemoteArchive -ArchiveDomain "archive.contoso.com"
```

This example creates a remote archive for the existing on-premises user named Ayla. The archive is created in the cloud-based organization that uses the domain archive.contoso.com.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the user or InetOrgPerson object that you want to mailbox-enable. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Display name

- Domain\\Account

- User principal name (UPN)



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ArchiveDomain parameter specifies the cloud-based domain on which the archive associated with this mailbox exists. For example, if the SMTP e-mail address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.

Only use this parameter if the archive is hosted in a cloud-based service.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArchiveDomain parameter specifies the cloud-based domain on which the archive associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.

Only use this parameter if the archive is hosted in a cloud-based service.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The Discovery parameter specifies that this mailbox is a Discovery mailbox. Discovery mailboxes are created as target mailboxes for Discovery searches. You don't have to include a value with this parameter.

After being created or enabled, a Discovery mailbox can't be converted to another type of mailbox.

For more information, see Understanding Multi-Mailbox Search.



!!! Exchange Server 2013

The Discovery parameter specifies that this mailbox is a Discovery mailbox. Discovery mailboxes are created as target mailboxes for Discovery searches. You don't have to include a value with this parameter.

After being created or enabled, a Discovery mailbox can't be converted to another type of mailbox.

For more information, see In-Place eDiscovery.



!!! Exchange Server 2016, Exchange Online

The Discoveryswitch specifies that the mailbox is a Discovery mailbox. You don't need to specify a value with this switch. This switch is required only if you're enabling a Discovery mailbox.

Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be converted to another type of mailbox. For more information, see In-Place eDiscovery in Exchange 2016.



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
!!! Exchange Server 2010

The Equipment parameter specifies that the type of resource is equipment, if this mailbox is a resource mailbox. This parameter is required only if you're enabling a resource mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Equipment parameter specifies that the type of resource is equipment, if this mailbox is a resource mailbox. This parameter is required only if you're enabling a resource mailbox.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides. The domain controller in this forest is used to get security information for the account specified by the LinkedMasterAccount parameter. This parameter is required only if you're creating a linked mailbox.Use the fully qualified domain name (FQDN) of the domain controller you want to use as the value for this parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides. The domain controller in this forest is used to get security information for the account specified by the LinkedMasterAccount parameter. This parameter is required only if you're creating a linked mailbox. Use the fully qualified domain name (FQDN) of the domain controller you want to use as the value for this parameter.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides. The master account is the account to link the mailbox to. The master account grants access to the mailbox. This parameter is required only if you're creating a linked mailbox. You can use one of the following values:

- GUID

- DN

- Domain\\Account

- UPN

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides. The master account is the account to link the mailbox to. The master account grants access to the mailbox. This parameter is required only if you're creating a linked mailbox. You can use one of the following values:

- GUID

- DN

- Domain\\Account

- UPN

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The Room parameter specifies that the type of resource is a room, if this mailbox is a resource mailbox. This parameter is required only if you're enabling a resource mailbox.

You don't have to specify a value with this parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Room parameter specifies that the type of resource is a room, if this mailbox is a resource mailbox. This parameter is required only if you're enabling a resource mailbox.

You don't have to specify a value with this parameter.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The Shared parameter specifies that you're creating a shared mailbox. A shared mailbox is a mailbox to which multiple users can log on. This mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

This parameter is required only if you're creating a shared mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Shared parameter specifies that you're creating a shared mailbox. A shared mailbox is a mailbox to which multiple users can log on. This mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

This parameter is required only if you're creating a shared mailbox.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ActiveSyncMailboxPolicy parameter specifies the mailbox policy to enable for the mailbox that you create. If you don't specify this parameter, the default mailbox policy is used.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ActiveSyncMailboxPolicy parameter specifies the mailbox policy to enable for the mailbox that you create. If you don't specify this parameter, the default mailbox policy is used.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The AddressBookPolicy parameter specifies the address book policy to apply to this mailbox. For more information about address book policies, see Understanding Address Book Policies.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The AddressBookPolicy parameter specifies the address book policy to apply to this mailbox. For more information about address book policies, see Address book policies.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name

- Distinguished name (DN)

- GUID

For more information about address book policies, see Address book policies in Exchange 2016.



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
!!! Exchange Server 2010

The Alias parameter specifies the e-mail alias of the mailbox that you're enabling.

The alias can be a combination of characters separated by a period with no intervening spaces. Don't use special characters in the alias.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Alias parameter specifies the email alias of the mailbox that you're enabling.

The alias can be a combination of characters separated by a period with no intervening spaces. Don't use special characters in the alias.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
!!! Exchange Server 2010, Exchange Server 2013

The Archive parameter specifies that when this mailbox is enabled, an archive will be created.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ArchiveDatabase parameter specifies the Exchange database that contains the archive associated with this mailbox. You can use the following values:

- GUID of the database

- Database name



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArchiveDatabase parameter specifies the Exchange database that contains the archive associated with this mailbox. You can use the following values:

- GUID of the database

- Database name



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Microsoft Office Outlook Web App and Microsoft Outlook. The default name is Online Archive - \<Mailbox User's Display Name\>.



!!! Exchange Server 2013

The ArchiveName parameter specifies the name of the archive mailbox. This is the name displayed to users in Microsoft OfficeOutlook Web App and Microsoft Outlook. The default name is Online Archive - \<Mailbox User's Display Name\>.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The Database parameter specifies which Exchange database contains the new mailbox. You can use one of the following values:

- GUID of the database

- Database name



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Database parameter specifies which Exchange database contains the new mailbox. You can use one of the following values:

- GUID of the database

- Database name



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DisplayName parameter specifies the display name for the mailbox. The DisplayName is the name that appears in the Exchange Management Console under Recipient Configuration.



!!! Exchange Server 2013

The DisplayName parameter specifies the display name for the mailbox. The DisplayName is the name that appears in the Exchange Administration Center.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
!!! Exchange Server 2010, Exchange Server 2013

The Force parameter specifies whether to suppress warning or confirmation messages. This parameter can be used when the task is run programmatically and prompting for administrative input is inappropriate. If the Force parameter isn't provided in the command, administrative input is prompted. If the Force parameter is provided in the command, but the value is omitted, its default value is $true.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.



!!! Exchange Server 2016, Exchange Online

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

### -MailboxPlan
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The MailboxPlan parameter specifies the mailbox plan to associate with this mailbox. A mailbox plan specifies the permissions and features available to a mailbox user. The mailbox plan name you provide must be included in the service plan of the organization in which this mailbox resides. To learn more, see Understanding Service Plans and Mailbox Plans.

To use or change the MailboxPlan parameter, tenant administrators must have the ChangeMailboxPlanAssignmentPermissions feature assigned through their service plan.

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010

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
!!! Exchange Server 2010

The PrimarySmtpAddress parameter specifies the primary SMTP address for the mailbox. By default, the primary SMTP address is generated based on the default e-mail address policy. If you specify a primary SMTP address by using this parameter, the command sets the EmailAddressPolicyEnabled attribute of the mailbox to $false, and the e-mail addresses of this mailbox aren't automatically updated based on e-mail address policies.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary SMTP address for the mailbox. By default, the primary SMTP address is generated based on the default email address policy. If you specify a primary SMTP address by using this parameter, the command sets the EmailAddressPolicyEnabled attribute of the mailbox to $false, and the email addresses of this mailbox aren't automatically updated based on email address policies.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RemoteArchive parameter specifies that when the mailbox is enabled, a remote archive for this mailbox will be created. A remote archive exists in a cloud-based service. You don't have to specify a value with this parameter. You can't use the Archive parameter in conjunction with this parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The RemoteArchive parameter specifies that when the mailbox is enabled, a remote archive for this mailbox will be created. A remote archive exists in a cloud-based service. You don't have to specify a value with this parameter. You can't use the Archive parameter in conjunction with this parameter.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RetentionPolicy parameter specifies the name of a retention policy that you want applied to this mailbox. Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The RetentionPolicy parameter specifies the name of a retention policy that you want applied to this mailbox. Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The RoleAssignmentPolicy parameter specifies the management role assignment policy to assign to the mailbox when it's created or enabled. If you don't include this parameter when you create or enable a mailbox, the default assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see Understanding Management Role Assignment Policies.



!!! Exchange Server 2013

The RoleAssignmentPolicy parameter specifies the management role assignment policy to assign to the mailbox when it's created or enabled. If you don't include this parameter when you create or enable a mailbox, the default assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see Understanding management role assignment policies.



!!! Exchange Server 2016, Exchange Online

The RoleAssignmentPolicy parameter specifies the management role assignment policy that's assign to the mailbox. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default role assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see Understanding management role assignment policies.



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
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedRoom parameter is used to specify that the mailbox being enabled is a linked resource mailbox. A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The PublicFolder parameter specifies that the mailbox to enable is a public folder mailbox. Public folder mailboxes are specially designed mailboxes to store the hierarchy and content of public folders. This parameter is required if you're enabling a public folder mailbox.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The HoldForMigration parameter specifies whether to prevent any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging into a public folder mailbox. You must use this parameter when you create the first public folder, which is called the hierarchy mailbox, in your organization.



!!! Exchange Server 2016, Exchange Online

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

