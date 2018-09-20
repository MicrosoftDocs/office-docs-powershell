---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Test-MigrationServerAvailability
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Test-MigrationServerAvailability

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Test-MigrationServerAvailability cmdlet to test the availability of the target server in preparation to perform cross-forest mailbox moves, migration of on-premises mailboxes to Exchange Online, or to migrate on-premises mailbox data from an IMAP server to Exchange Online mailboxes. For all migration types, the cmdlet attempts to verify the connection settings used to connect to the target server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set7
```
Test-MigrationServerAvailability [-Autodiscover] -Credentials <PSCredential> -EmailAddress <SmtpAddress>
 [-ExchangeRemoteMove] [-Confirm] [-WhatIf] [-PublicFolderToUnifiedGroup] -RemoteServer <Fqdn>
 [-Partition <MailboxIdParameter>] [-TestMailbox <MailboxIdParameter>] [<CommonParameters>]
```

### Set8
```
Test-MigrationServerAvailability [-Autodiscover] -Credentials <PSCredential> -EmailAddress <SmtpAddress>
 [-ExchangeOutlookAnywhere] [-SourceMailboxLegacyDN <String>] [-Confirm]
 [-MailboxPermission <Admin | FullAccess>] [-TestMailbox <MailboxIdParameter>] [-WhatIf]
 -ExchangeServer <String> -RPCProxyServer <Fqdn>
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

### Set4
```
Test-MigrationServerAvailability -Credentials <PSCredential> [-PSTImport] -RemoteServer <Fqdn> [-Confirm]
 [-FilePath <String>] [-WhatIf] [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

### Set5
```
Test-MigrationServerAvailability -Credentials <PSCredential> [-EmailAddress <SmtpAddress>]
 [-ExchangeOutlookAnywhere] -ExchangeServer <String> -RPCProxyServer <Fqdn> [-SourceMailboxLegacyDN <String>]
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Confirm] [-MailboxPermission <Admin | FullAccess>] [-TestMailbox <MailboxIdParameter>] [-WhatIf]
 [-Compliance] [-RemoteServer <Fqdn>] [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

### Set6
```
Test-MigrationServerAvailability -Credentials <PSCredential> -RPCProxyServer <Fqdn>
 -SourceMailboxLegacyDN <String>
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Confirm] [-TestMailbox <MailboxIdParameter>] [-WhatIf] [-PublicFolder] -RemoteServer <Fqdn>
 [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

### Set3
```
Test-MigrationServerAvailability [-Credentials <PSCredential>] [-ExchangeRemoteMove] -RemoteServer <Fqdn>
 [-Confirm] [-WhatIf] [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

### Set9
```
Test-MigrationServerAvailability -Endpoint <MigrationEndpointIdParameter> [-Confirm] [-WhatIf]
 -Credentials <PSCredential> [-PublicFolder] -PublicFolderDatabaseServerLegacyDN <String>
 -RPCProxyServer <Fqdn> -SourceMailboxLegacyDN <String>
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Partition <MailboxIdParameter>] [-TestMailbox <MailboxIdParameter>] [<CommonParameters>]
```

### Set2
```
Test-MigrationServerAvailability [-Imap] -Port <Int32> -RemoteServer <Fqdn>
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Confirm] [-Security <None | Ssl | Tls>] [-WhatIf] [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

### Set11
```
Test-MigrationServerAvailability [-Autodiscover] -Credentials <PSCredential> -EmailAddress <SmtpAddress>
 [-ExchangeOutlookAnywhere] [-SourceMailboxLegacyDN <String>] [-Confirm]
 [-MailboxPermission <Admin | FullAccess>] [-Partition <MailboxIdParameter>]
 [-TestMailbox <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set12
```
Test-MigrationServerAvailability [-Autodiscover] -Credentials <PSCredential> -EmailAddress <SmtpAddress>
 [-ExchangeRemoteMove] [-Confirm] [-Partition <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set10
```
Test-MigrationServerAvailability -Credentials <PSCredential> -PublicFolderDatabaseServerLegacyDN <String>
 [-PublicFolderToUnifiedGroup] -RPCProxyServer <Fqdn> -SourceMailboxLegacyDN <String>
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Confirm] [-Partition <MailboxIdParameter>] [-TestMailbox <MailboxIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set13
```
Test-MigrationServerAvailability -Endpoint <MigrationEndpointIdParameter> [-Confirm]
 [-Partition <MailboxIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-MigrationServerAvailability cmdlet verifies that you can communicate with the on-premises mail server that houses the mailbox data that you want to migrate to cloud-based mailboxes. When you run this cmdlet, you must specify the migration type. You can specify whether to communicate with an IMAP server or with an Exchange server.

For an IMAP migration, this cmdlet uses the server's fully qualified domain name (FQDN) and a port number to verify the connection. If the verification is successful, use the same connection settings when you create a migration request with the New-MigrationBatch cmdlet.

For an Exchange migration, this cmdlet uses one of the following settings to communicate with the on-premises server:

- For Exchange 2003, it uses the server's FQDN and credentials for an administrator account that can access the server.

- For Exchange Server 2007 and later versions, you can connect using the Autodiscover service and the email address of an administrator account that can access the server.

If the verification is successful, you can use the same settings to create a migration endpoint. For more information, see:

- New-MigrationEndpoint

- New-MigrationBatch

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-MigrationServerAvailability -Imap -RemoteServer imap.contoso.com -Port 143
```

For IMAP migrations, this example verifies the connection to the IMAP mail server imap.contoso.com.

### -------------------------- Example 2 --------------------------
```
$Credentials = Get-Credential; Test-MigrationServerAvailability -ExchangeOutlookAnywhere -Autodiscover -EmailAddress administrator@contoso.com -Credentials $Credentials
```

This example uses the Autodiscover and ExchangeOutlookAnywhere parameters to verify the connection to an on-premises Exchange server in preparation for migrating on-premises mailboxes to Exchange Online. You can use a similar example to test the connection settings for a staged Exchange migration or a cutover Exchange migration.

### -------------------------- Example 3 --------------------------
```
$Credentials = Get-Credential; Test-MigrationServerAvailability -ExchangeOutlookAnywhere -ExchangeServer exch2k3.contoso.com -Credentials $Credentials -RPCProxyServer mail.contoso.com -Authentication NTLM
```

This example verifies the connection to a server running Microsoft Exchange Server 2003 named exch2k3.contoso.com and uses NTLM for the authentication method.

### -------------------------- Example 4 --------------------------
```
Test-MigrationServerAvailability -Endpoint endpoint.contoso.com
```

This example verifies the connection settings to a remote server using the settings stored in an existing migration endpoint in Exchange Online.

### -------------------------- Example 5 --------------------------
```
$MRSEndpoints = (Get-MigrationEndpoint).RemoteServer; Foreach ($MEP in $MRSEndpoints) {Test-MigrationServerAvailability -Endpoint $MEP}
```

This example tests multiple existing endpoints.

## PARAMETERS

### -Autodiscover
The Autodiscover parameter specifies that the cmdlet should use the Autodiscover service to obtain the connection settings for the target server. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set7, Set8, Set11, Set12
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
The Credentials parameter specifies the logon credentials for an account that can access mailboxes on the target server. Specify the username in the domain\\username format or the user principal name (UPN) (user@example.com) format.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: Set7, Set8, Set4, Set5, Set6, Set9, Set11, Set12, Set10
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
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddress
The EmailAddress parameter specifies the email address of an administrator account that can access the remote server. This parameter is required when you use the Autodiscover parameter.

```yaml
Type: SmtpAddress
Parameter Sets: Set7, Set8, Set11, Set12
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
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Endpoint
The Endpoint parameter specifies the name of the migration endpoint to connect to. A migration endpoint contains the connection settings and other migration configuration settings. If you include this parameter, the Test-MigrationServerAvailability cmdlet attempts to verify the ability to connect to the remote server using the settings in the migration endpoint.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: Set9, Set13
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeOutlookAnywhere
This parameter is available only in the cloud-based service.

The ExchangeOutlookAnywhere parameter specifies a migration type for migrating on-premises mailboxes to Exchange Online. Use this parameter if you plan to migrate mailboxes to Exchange Online using a staged Exchange migration or a cutover Exchange migration.

```yaml
Type: SwitchParameter
Parameter Sets: Set8, Set5, Set11
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeRemoteMove
The ExchangeRemoteMove parameter specifies a type of migration where mailboxes are moved with full fidelity between two on-premises forests or between an on-premises forest and Exchange Online. Use this parameter if you plan to perform a cross-forest move or migrate mailboxes between an on-premises Exchange organization and Exchange Online in a hybrid deployment.

```yaml
Type: SwitchParameter
Parameter Sets: Set7, Set3, Set12
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeServer
This parameter is available only in the cloud-based service.

The ExchangeServer parameter specifies the FQDN of the on-premises Exchange server. Use this parameter when you plan to perform a staged Exchange migration or a cutover Exchange migration. This parameter is required if you don't use the Autodiscover parameter.

```yaml
Type: String
Parameter Sets: Set8, Set5
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Imap
This parameter is available only in the cloud-based service.

The Imap parameter specifies an IMAP migration as the migration type. This parameter is required when you want to migrate data from an IMAP mail server to Exchange Online mailboxes.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port
This parameter is available only in the cloud-based service.

The Port parameter specifies the TCP port number used by the IMAP migration process to connect to the target server. This parameter is required only for IMAP migrations.

The standard is to use port 143 for unencrypted connections, port 143 for Transport Layer Security (TLS), and port 993 for Secure Sockets Layer (SSL).

```yaml
Type: Int32
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PSTImport
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteServer
The RemoteServer parameter specifies the FQDN of the on-premises mail server. This parameter is required when you want to perform one of the following migration types:

- Cross-forest move

- Remote move (hybrid deployments)

- IMAP migration

```yaml
Type: Fqdn
Parameter Sets: Set7, Set4, Set6, Set3, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RPCProxyServer
This parameter is available only in the cloud-based service.

The RPCProxyServer parameter specifies the FQDN of the RPC proxy server for the on-premises Exchange server. This parameter is required when you don't use the Autodiscover parameter. Use this parameter if you plan to perform a staged Exchange migration or a cutover Exchange migration to migrate mailboxes to Exchange Online.

```yaml
Type: Fqdn
Parameter Sets: Set8, Set5, Set6, Set9, Set10
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

The SourceMailboxLegacyDN parameter specifies a mailbox on the target server. Use the LegacyExchangeDN for the on-premises test mailbox as the value for this parameter. The cmdlet will attempt to access this mailbox using the credentials for the administrator account on the target server.

```yaml
Type: String
Parameter Sets: Set8, Set5, Set11
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Set6, Set9, Set10
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
This parameter is available only in the cloud-based service.

The Authentication parameter specifies the authentication method used by the on-premises mail server. Use Basic or NTLM. If you don't include this parameter, Basic authentication is used.

The parameter is only used for cutover Exchange migrations and staged Exchange migrations.

```yaml
Type: Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured
Parameter Sets: Set8, Set5, Set6, Set9, Set2, Set10
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilePath
The FilePath parameter specifies the path containing the PST files when testing a PST Import migration endpoint.

```yaml
Type: String
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPermission
This parameter is available only in the cloud-based service.

The MailboxPermission parameter specifies what permissions are assigned to the migration administrator account defined by the Credentials parameter. You make the permissions assignment to test the connectivity to a user mailbox on the source mail server when you're testing the connection settings in preparation for a staged or cutover Exchange migration or for creating an Exchange Outlook Anywhere migration endpoint.

Specify one of the following values for the account defined by the Credentials parameter:

- FullAccess: The account has been assigned the Full-Access permission to the mailboxes that will be migrated.

- Admin: The account is a member of the Domain Admins group in the organization that hosts the mailboxes that will be migrated.

This parameter isn't used for testing the connection to the remote server for a remote move migration or an IMAP migration.

```yaml
Type: Admin | FullAccess
Parameter Sets: Set8, Set5, Set11
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
Type: None | Ssl | Tls
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestMailbox
This parameter is available only in the cloud-based service.

The TestMailbox parameter specifies a mailbox on the target server. Use the primary SMTP address as the value for this parameter. The cmdlet will attempt to access this mailbox using the credentials for the administrator account on the target server.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set7, Set8, Set5, Set6, Set9, Set11, Set10
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

### -Compliance
The Compliance switch specifies that the endpoint type is compliance. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set5
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set6, Set9
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderDatabaseServerLegacyDN
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set9, Set10
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderToUnifiedGroup
The PublicFolderToUnifiedGroup switch specifies that the endpoint type is public folders to Office 365 groups. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set7, Set10
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partition
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/a0959dbe-94ae-4f2e-8e2c-e5d5bd5e1521.aspx)
