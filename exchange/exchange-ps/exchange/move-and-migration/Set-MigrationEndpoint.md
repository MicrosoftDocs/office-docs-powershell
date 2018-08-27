---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-MigrationEndpoint
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-MigrationEndpoint

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MigrationEndpoint cmdlet to edit settings for cutover or staged Exchange migrations, IMAP migrations and remote moves.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MigrationEndpoint [-Identity] <MigrationEndpointIdParameter>
 [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-Confirm] [-Credentials <PSCredential>] [-DomainController <Fqdn>]  [-ExchangeServer <String>] 
 [-MailboxPermission <Admin | FullAccess>]  [-MaxConcurrentIncrementalSyncs <Unlimited>] 
 [-MaxConcurrentMigrations <Unlimited>] [-NspiServer <String>]
 [-Port <Int32>] [-RemoteServer <Fqdn>] [-RpcProxyServer <Fqdn>] [-Security <None | Ssl | Tls>]
 [-SkipVerification] [-SourceMailboxLegacyDN <String>] [-TestMailbox <MailboxIdParameter>] [-WhatIf]
 [-Partition <MailboxIdParameter>] [-PublicFolderDatabaseServerLegacyDN <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the Set-MigrationEndpoint cmdlet to configure settings for different types of migration:

- Cross-forest move: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a RemoteMove endpoint.

- Remote move: In a hybrid deployment, a remote move involves onboarding or offboarding migrations. Remote moves require the use of a RemoteMove endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online in Office 365, and uses a RemoteMove endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online in Office 365 to an on-premises Exchange organization and uses a RemoteMove endpoint as the target endpoint of the migration batch.

- Cutover Exchange migration: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online in Office 365. Cutover Exchange migration requires the use of an Exchange endpoint.

- Staged Exchange migration: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online in Office 365. Staged Exchange migration requires the use of an Exchange endpoint.

- IMAP migration: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online in Office 365. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.

- Local: Move mailboxes between different servers or databases within a single on-premises Exchange forest. Local moves don't require the use of an endpoint.

For more information about the different move and migration scenarios, see:

- Mailbox moves (https://technet.microsoft.com/library/jj150543.aspx)

- Manage on-premises mailbox moves (https://technet.microsoft.com/library/jj150487.aspx)

Changes made to an endpoint that affect the individual users within the batch are applied starting at the next time that the batch is processed. If you are running this cmdlet in the cloud-based service and wish to speed up the application of these settings, consider running the Set-MigrationBatch cmdlet with the -Update parameter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-MigrationEndpoint -Identity CutoverExchangeEndpoint01 -MaxConcurrentIncrementalSyncs 50 -NspiServer Server01.contoso.com
```

This example changes the MaxConcurrentIncrementalSyncs setting to 50 on the CutoverExchangeEndpoint01 migration endpoint using the NSPI server Server01.

### -------------------------- Example 2 --------------------------
```
Set-MigrationEndpoint -Identity Onboardingmigrationendpoint01 -MaxConcurrentMigrations 10 -RemoteServer Server01.contoso.com
```

This example changes the MaxConcurrentMigrations setting to 10 on the Onboardingmigrationendpoint01 migration endpoint using the remote server, Server01.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the migration endpoint you want to configure.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Authentication
This parameter is available only in the cloud-based service.

The Authentication parameter specifies the authentication method used by the remote mail server.

```yaml
Type: Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
The Credentials parameter specifies the credentials to use for connecting to the remote endpoint. Credentials should be used when creating either a staged or cutover Exchange endpoint or a RemoteMove endpoint.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeServer
This parameter is available only in the cloud-based service.

The ExchangeServer parameter specifies the on-premises source Exchange server for cutover and staged migrations. This parameter is applicable only to staged and cutover Exchange endpoints which don't use Autodiscovery.

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

### -MailboxPermission
This parameter is available only in the cloud-based service.

The MailboxPermission parameter specifies what permissions should be used to access the source mailbox during OutlookAnywhere onboarding (Staged Exchange Migration and Cutover Exchange Migration). This parameter is not for non-OutlookAnywhere migrations.

The account specified must have the following permissions:

- FullAccess permission. The account has Full-Access permission to the mailboxes they want to migrate.

- Admin permission. The account is a domain administrator who can access any mailbox they want to migrate.

```yaml
Type: Admin | FullAccess
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentIncrementalSyncs
The MaxConcurrentIncrementalSyncs parameter specifies the maximum number of incremental syncs allowed for this endpoint at a specified time. This value must be less or equal to MaxConcurrentMigrations parameter.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentMigrations
The MaxConcurrentMigrations parameter specifies the maximum number of mailboxes that will be migrated for this endpoint at a specified time. This parameter is applicable for all migration types.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NspiServer
This parameter is available only in the cloud-based service.

The NspiServer parameter specifies the FQDN of the remote Name Service Provider Interface (NSPI) server. This parameter is only applicable to staged and cutover Exchange endpoints that don't use Autodiscovery.

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

### -Port
This parameter is available only in the cloud-based service.

For an IMAP migration, the Port parameter specifies the TCP port number used by the migration process to connect to the remote server.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteServer
The RemoteServer parameter specifies the remote server depending on the protocol type for moves:

- Exchange server moves: The FQDN of an Exchange server that has the Client Access role installed, a Client Access server array, or a group of Client Access servers that are located behind a supported network load balancer.

- IMAP moves: The FQDN of the IMAP server.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcProxyServer
This parameter is available only in the cloud-based service.

For a staged Exchange migration, the RpcProxyServer parameter specifies the FQDN of the RPC proxy server for the on-premises Exchange server. This parameter is only applicable to staged and cutover Exchange endpoints that don't use Autodiscovery

```yaml
Type: Fqdn
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipVerification
The SkipVerification switch specifies whether to skip verifying that the remote server is reachable when creating a migration endpoint. The default value is $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceMailboxLegacyDN
This parameter is available only in the cloud-based service.

The SourceMailboxLegacyDN parameter specifies a mailbox on the target server. Use the LegacyExchangeDN for the on-premises test mailbox as the value for this parameter. The cmdlet tries to access this mailbox using the credentials for the administrator account on the target server.

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

### -TestMailbox
This parameter is available only in the cloud-based service.

The TestMailbox parameter specifies a mailbox on the target server. Use the primary SMTP address as the value for this parameter. The cmdlet tries to access this mailbox using the credentials for the administrator account on the target server.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
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
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderDatabaseServerLegacyDN
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/bebd0d6e-0bae-416b-a596-81dba35b4bab.aspx)
