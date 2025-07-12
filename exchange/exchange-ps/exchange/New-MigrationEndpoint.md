---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-migrationendpoint
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-MigrationEndpoint
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-MigrationEndpoint

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MigrationEndpoint cmdlet to configure the connection settings for cross-forests moves, remote move migrations, cutover or staged Exchange migrations, IMAP migrations, and Google Workspace (formerly G Suite) migrations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### ExchangeRemoteMoveAutoDiscover
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -EmailAddress <SmtpAddress>
 [-Autodiscover]
 [-ExchangeRemoteMove]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### ExchangeOutlookAnywhereAutoDiscover
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -EmailAddress <SmtpAddress>
 [-Autodiscover]
 [-ExchangeOutlookAnywhere]
 [-AcceptUntrustedCertificates]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-SourceMailboxLegacyDN <String>]
 [-TestMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### ExchangeOutlookAnywhere
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential>
 [-EmailAddress <SmtpAddress>]
 [-ExchangeOutlookAnywhere]
 [-ExchangeServer <String>]
 [-AcceptUntrustedCertificates]
 [-Authentication <AuthenticationMethod>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MailboxPermission <MigrationMailboxPermission>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-NspiServer <String>]
 [-Partition <MailboxIdParameter>]
 [-RpcProxyServer <Fqdn>]
 [-SkipVerification]
 [-SourceMailboxLegacyDN <String>]
 [-TestMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### ExchangeRemoteMove
```
New-MigrationEndpoint -Name <String> -RemoteServer <Fqdn>
 [-Credentials <PSCredential>]
 [-ExchangeRemoteMove]
 [-ApplicationId <String>]
 [-AppSecretKeyVaultUrl <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-RemoteTenant <String>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### PSTImport
```
New-MigrationEndpoint -Name <String> -RemoteServer <Fqdn>
 [-Credentials <PSCredential>]
 [-PSTImport]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### IMAP
```
New-MigrationEndpoint -Name <String> -RemoteServer <Fqdn>
 [-IMAP]
 [-Port <Int32>]
 [-Security <IMAPSecurityMechanism>]
 [-AcceptUntrustedCertificates]
 [-Authentication <AuthenticationMethod>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### Gmail
```
New-MigrationEndpoint -Name <String> -ServiceAccountKeyFileData <Byte[]>
 [-Gmail]
 [-EmailAddress <SmtpAddress>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### GoogleMarketplaceApp
```
New-MigrationEndpoint -Name <String> -OAuthCode <SecureString> [-Gmail]
 [-Confirm]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-ProgressAction <ActionPreference>]
 [-RedirectUri <String>]
 [-SkipVerification]
 [-TestMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### PublicFolder
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -PublicFolderDatabaseServerLegacyDN <String> -RpcProxyServer <Fqdn> -SourceMailboxLegacyDN <String>
 [-PublicFolder]
 [-Authentication <AuthenticationMethod>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-TestMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Compliance
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -RemoteServer <Fqdn>
 [-Compliance]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### MrsProxyPublicFolderToUnifiedGroup
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -RemoteServer <Fqdn>
 [-PublicFolderToUnifiedGroup]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-TestMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### MrsProxyPublicFolder
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -RemoteServer <Fqdn>
 [-PublicFolder]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-WhatIf]
 [<CommonParameters>]
```

### LegacyPublicFolderToUnifiedGroup
```
New-MigrationEndpoint -Name <String> -Credentials <PSCredential> -PublicFolderDatabaseServerLegacyDN <String> -RpcProxyServer <Fqdn> -SourceMailboxLegacyDN <String>
 [-PublicFolderToUnifiedGroup]
 [-Authentication <AuthenticationMethod>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MaxConcurrentIncrementalSyncs <Unlimited>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-Partition <MailboxIdParameter>]
 [-SkipVerification]
 [-TestMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-MigrationEndpoint cmdlet configures the connection settings for different types of migrations:

- Cross-forest move: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a Remote Move endpoint.
- Remote move migration: In a hybrid deployment, a remote move migration involves onboarding or offboarding migrations. Remote move migrations also require the use of an Exchange remote move endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online, and uses a remote move endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online to an on-premises Exchange organization and uses a remote move endpoint as the target endpoint of the migration batch.
- Cutover Exchange migration: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online. A cutover Exchange migration requires the use of an Outlook Anywhere migration endpoint.
- Staged Exchange migration: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online. A staged Exchange migration requires the use of an Outlook Anywhere migration endpoint.
- IMAP migration: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.
- Google Workspace migration: Migration mailbox data from a Google Workspace tenant to Exchange Online. For a Google Workspace migration, you must first create cloud-based mail users or mailboxes before you migrate mailbox data. Google Workspace migrations require the use of a Gmail endpoint.

Moving mailboxes between different servers or databases within a single on-premises Exchange forest (called a local move) doesn't require a migration endpoint.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MigrationEndpoint -Name Endpoint1 -ExchangeRemoteMove -Autodiscover -EmailAddress tonysmith@contoso.com -Credentials (Get-Credential contoso\tonysmith)
```

This example creates an endpoint for remote moves by using the Autodiscover parameter to detect the settings.

### Example 2
```powershell
New-MigrationEndpoint -Name Endpoint2 -ExchangeRemoteMove -RemoteServer MRSServer.contoso.com -Credentials (Get-Credential Contoso.com\Administrator)
```

This example creates an endpoint for remote moves by specifying the settings manually.

### Example 3
```powershell
$Credentials = Get-Credential

New-MigrationEndpoint -ExchangeOutlookAnywhere -Name EXCH-AutoDiscover -Autodiscover -EmailAddress administrator@contoso.com -Credentials $Credentials
```

This example creates an Outlook Anywhere migration endpoint by using the Autodiscover parameter to detect the connection settings to the on-premises organization. Outlook Anywhere endpoints are used for cutover and staged Exchange migrations. The Get-Credential cmdlet is used to obtain the credentials for an on-premises account that has the necessary administrative privileges in the domain and that can access the mailboxes that will be migrated. When prompted for the user name, you can use either the email address or the domain\\username format for the administrator account. This account can be the same one that is specified by the EmailAddress parameter.

### Example 4
```powershell
New-MigrationEndpoint -ExchangeOutlookAnywhere -Name EXCH_Manual -ExchangeServer EXCH-01-MBX.contoso.com -RPCProxyServer EXCH-02-CAS.contoso.com -Credentials (Get-Credential administrator@contoso.com) -EmailAddress annb@contoso.com
```

This example creates an Outlook Anywhere migration endpoint by specifying the connection settings manually. Outlook Anywhere endpoints are used for cutover and staged Exchange migrations. The value for the ExchangeServer parameter specifies the on-premises Exchange server that hosts the mailboxes that will be migrated. The value for the RPCProxyServer parameter specifies the Exchange server in the on-premises organization that has the Client Access server role installed that directly accepts and proxies client connections. The EmailAddress parameter can specify any mailbox in the on-premises domain.

It's recommended that you use a migration endpoint created with connection settings that are automatically discovered (see Example 3) because the Autodiscover service will be used to connect to each user mailbox in the migration batch. If you manually specify the connection settings for the endpoint and a user mailbox isn't located on the server specified by the ExchangeServer parameter, the migration for that user will fail. This is important if you have multiple on-premises Outlook Anywhere servers. Otherwise, you may need to create different migration endpoints that correspond to each on-premises server.

### Example 5
```powershell
New-MigrationEndpoint -IMAP -Name IMAPEndpoint -RemoteServer imap.contoso.com -Port 993 -Security Ssl
```

This example creates an IMAP migration endpoint. The value for the RemoteServer parameter specifies the FQDN of the IMAP server that hosts the mailboxes that will be migrated. The endpoint is configured to use port 993 for SSL encryption.

### Example 6
```powershell
New-MigrationEndpoint -IMAP -Name IMAP_TLS_Endpoint -RemoteServer imap.contoso.com -Port 143 -Security Tls -MaxConcurrentMigrations 50 -MaxConcurrentIncrementalSyncs 10
```

This example creates an IMAP migration endpoint that supports 50 concurrent migrations and 10 concurrent incremental synchronizations. The endpoint is configured to use port 143 for TLS encryption.

## PARAMETERS

### -Name
The Name parameter specifies the name you give to the new migration endpoint. You can use the Name parameter when you run the New-MigrationBatch cmdlet.

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

### -Autodiscover
For an Exchange migration, the Autodiscover switch specifies whether to get other connection settings for the on-premises server from the Autodiscover service. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ExchangeRemoteMoveAutoDiscover, ExchangeOutlookAnywhereAutoDiscover
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Compliance
The Compliance switch specifies that the endpoint type is compliance. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Compliance
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
The Credentials parameter specifies the credentials to connect to the source or target endpoint for all Exchange migration types.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: ExchangeRemoteMoveAutoDiscover, ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere, PublicFolder, Compliance, MrsProxyPublicFolderToUnifiedGroup, MrsProxyPublicFolder, LegacyPublicFolderToUnifiedGroup
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PSCredential
Parameter Sets: ExchangeRemoteMove, PSTImport
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddress
The EmailAddress parameter specifies the email address used by the Autodiscover service or in some cases used to validate the endpoint when you specify the connection settings manually.

```yaml
Type: SmtpAddress
Parameter Sets: ExchangeRemoteMoveAutoDiscover, ExchangeOutlookAnywhereAutoDiscover
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SmtpAddress
Parameter Sets: ExchangeOutlookAnywhere, Gmail
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeOutlookAnywhere
This parameter is available only in the cloud-based service.

The ExchangeOutlookAnywhere switch specifies the type of endpoint for staged and cutover migrations. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeRemoteMove
The ExchangeRemoteMove switch specifies the type of endpoint for cross-forest moves and remote move migrations in a hybrid deployment. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: ExchangeRemoteMoveAutoDiscover, ExchangeRemoteMove
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Gmail
This parameter is available only in the cloud-based service.

The Gmail switch specifies the type of endpoint for Google Workspace migrations. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Gmail
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IMAP
This parameter is available only in the cloud-based service.

The IMAP switch specifies the type of endpoint for IMAP migrations. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: IMAP
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuthCode
This parameter is available only in the cloud-based service.

{{ Fill OAuthCode Description }}

```yaml
Type: SecureString
Parameter Sets: GoogleMarketplaceApp
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSTImport
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: PSTImport
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolder, MrsProxyPublicFolder
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderDatabaseServerLegacyDN
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: PublicFolder, LegacyPublicFolderToUnifiedGroup
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderToUnifiedGroup
The PublicFolderToUnifiedGroup switch specifies that the endpoint type is public folders to Microsoft 365 Groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: MrsProxyPublicFolderToUnifiedGroup, LegacyPublicFolderToUnifiedGroup
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteServer
The RemoteServer parameter specifies the FQDN of the remote server, which depends on the protocol type for moves:

- For cross-forest moves and remote move migrations, this parameter refers to the Exchange server in the on-premises organization that has the Client Access server role installed that directly accepts and proxies client connections.
- For IMAP migrations, this parameter refers to the IMAP server.

```yaml
Type: Fqdn
Parameter Sets: ExchangeRemoteMove, PSTImport, IMAP, Compliance, MrsProxyPublicFolderToUnifiedGroup, MrsProxyPublicFolder
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcProxyServer
This parameter is available only in the cloud-based service.

The RpcProxyServer parameter specifies the FQDN of the Exchange server in the on-premises Exchange organization that has the Client Access server role installed that directly accepts and proxies client connections. This parameter is used when you create an Outlook Anywhere migration endpoint for cutover and staged Exchange migrations. Typically, this FQDN will be the same as your Outlook on the web URL; for example, mail.contoso.com. This is also the URL for the proxy server that Outlook uses to connect to an Exchange server.

This parameter is required only when you don't use the Autodiscover parameter.

```yaml
Type: Fqdn
Parameter Sets: PublicFolder, LegacyPublicFolderToUnifiedGroup
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: ExchangeOutlookAnywhere
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceAccountKeyFileData
This parameter is available only in the cloud-based service.

The ServiceAccountKeyFileData parameter is used to specify information needed to authenticate as a service account. The data should come from the JSON key file that is downloaded when the service account that has been granted access to your remote tenant is created.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
Parameter Sets: Gmail
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceMailboxLegacyDN
This parameter is available only in the cloud-based service.

The SourceMailboxLegacyDN parameter specifies the LegacyExchangeDN value of an on-premises mailbox that's used to test the ability of the migration service to create a connection using this endpoint. The cmdlet tries to access this mailbox using the credentials for the administrator account specified in the command.

```yaml
Type: String
Parameter Sets: PublicFolder, LegacyPublicFolderToUnifiedGroup
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptUntrustedCertificates
This parameter is available only in the cloud-based service.

{{ Fill AcceptUntrustedCertificates Description }}

```yaml
Type: SwitchParameter
Parameter Sets: ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere, IMAP
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
This parameter is available only in the cloud-based service.

{{ Fill ApplicationId Description }}

```yaml
Type: String
Parameter Sets: ExchangeRemoteMove
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSecretKeyVaultUrl
This parameter is available only in the cloud-based service.

{{ Fill AppSecretKeyVaultUrl Description }}

```yaml
Type: String
Parameter Sets: ExchangeRemoteMove
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
This parameter is available only in the cloud-based service.

The Authentication parameter specifies the authentication method used by the on-premises mail server. If you don't include this parameter, Basic authentication is used.

```yaml
Type: AuthenticationMethod
Parameter Sets: ExchangeOutlookAnywhere, IMAP, PublicFolder, LegacyPublicFolderToUnifiedGroup
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

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: ExchangeRemoteMoveAutoDiscover, ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere, ExchangeRemoteMove, PSTImport, IMAP, Gmail, PublicFolder, Compliance, MrsProxyPublicFolderToUnifiedGroup, MrsProxyPublicFolder, LegacyPublicFolderToUnifiedGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeServer
This parameter is available only in the cloud-based service.

The ExchangeServer parameter specifies the FQDN of the on-premises Exchange server that hosts the mailboxes that will be migrated. This parameter is used when you create an Outlook Anywhere migration endpoint for cutover and staged Exchange migrations.

This parameter is required only when you don't use the Autodiscover parameter.

```yaml
Type: String
Parameter Sets: ExchangeOutlookAnywhere
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPermission
This parameter is available only in the cloud-based service.

The MailboxPermission parameter specifies what permissions to use to access the source mailbox during Outlook Anywhere onboarding (staged Exchange migration and cutover Exchange migration).

The migration administrator account specified for the endpoint must have one of the following permissions:

- Admin: The account is a domain administrator who can access any mailbox they want to migrate.
- FullAccess: The account is assigned either the Full Access permission to the mailboxes they want to migrate or the Receive As permission to the mailbox database that hosts the mailboxes that will be migrated.

If this parameter isn't specified, the cmdlet tries to access source mailboxes using the domain administrator permission and if that fails, it then tries to access the source mailboxes using the Full Access or Receive As permissions.

This parameter can't be used for creating non-Outlook Anywhere migration endpoints.

```yaml
Type: MigrationMailboxPermission
Parameter Sets: ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentIncrementalSyncs
The MaxConcurrentIncrementalSyncs parameter specifies the maximum number of incremental syncs allowed per endpoint. The default value is 20.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentMigrations
The MaxConcurrentMigrations parameter specifies the maximum number of mailboxes that are migrated during initial sync. This parameter is applicable for all migration types. The default value is 100.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NspiServer
This parameter is available only in the cloud-based service.

The NspiServer parameter specifies the remote Name Service Provider Interface (NSPI) server location for cutover and staged migrations. You must provide the FQDN of the server.

```yaml
Type: String
Parameter Sets: ExchangeOutlookAnywhere
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port
This parameter is available only in the cloud-based service.

For an IMAP migration, the Port parameter specifies the TCP port number used by the migration process to connect to the remote server. This parameter is required when you want to migrate data from an on-premises IMAP server to cloud-based mailboxes.

```yaml
Type: Int32
Parameter Sets: IMAP
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectUri
This parameter is available only in the cloud-based service.

{{ Fill RedirectUri Description }}

```yaml
Type: String
Parameter Sets: GoogleMarketplaceApp
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteTenant
This parameter is available only in the cloud-based service.

{{ Fill RemoteTenant Description }}

```yaml
Type: String
Parameter Sets: ExchangeRemoteMove
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Security
This parameter is available only in the cloud-based service.

For an IMAP migration, the Security parameter specifies the encryption method used by the remote mail server. The options are None, Tls, or Ssl.

```yaml
Type: IMAPSecurityMechanism
Parameter Sets: IMAP
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipVerification
The SkipVerification switch specifies whether to skip verifying that the remote server is reachable when creating a migration endpoint. You don't need to specify a value with this switch.

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

### -TestMailbox
This parameter is available only in the cloud-based service.

The TestMailbox parameter specifies an Exchange Online mailbox used as the target by the migration service to verify the connection using this endpoint. You can use any value that uniquely identifies the mailbox. For example:

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

If you don't use this parameter, the migration service uses the migration arbitration mailbox in the Exchange Online organization to verify the connection.

This parameter is only used to create Outlook Anywhere migration endpoints.

```yaml
Type: MailboxIdParameter
Parameter Sets: ExchangeOutlookAnywhereAutoDiscover, ExchangeOutlookAnywhere, Gmail, GoogleMarketplaceApp, PublicFolder, MrsProxyPublicFolderToUnifiedGroup, LegacyPublicFolderToUnifiedGroup
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
