---
title: "Set-MigrationEndpoint"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: bebd0d6e-0bae-416b-a596-81dba35b4bab

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MigrationEndpoint

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MigrationEndpoint** cmdlet to edit settings for cutover or staged Exchange migrations, IMAP migrations, and remote moves.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MigrationEndpoint -Identity <MigrationEndpointIdParameter> [-Authentication <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>] [-Confirm [<SwitchParameter>]] [-Credentials <PSCredential>] [-DomainController <Fqdn>] [-ExchangeServer <String>] [-MailboxPermission <Admin | FullAccess>] [-MaxConcurrentIncrementalSyncs <Unlimited>] [-MaxConcurrentMigrations <Unlimited>] [-NspiServer <String>] [-Partition <MailboxIdParameter>] [-Port <Int32>] [-PublicFolderDatabaseServerLegacyDN <String>] [-RemoteServer <Fqdn>] [-RpcProxyServer <Fqdn>] [-Security <None | Ssl | Tls>] [-SkipVerification <SwitchParameter>] [-SourceMailboxLegacyDN <String>] [-TestMailbox <MailboxIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the  _MaxConcurrentIncrementalSyncs_ setting to 50 on the CutoverExchangeEndpoint01 migration endpoint using the NSPI server Server01.
  
```
Set-MigrationEndpoint -Identity CutoverExchangeEndpoint01 -MaxConcurrentIncrementalSyncs 50 -NspiServer Server01.contoso.com
```

### Example 2

This example changes the  _MaxConcurrentMigrations_ setting to 10 on the Onboardingmigrationendpoint01 migration endpoint using the remote server, Server01.
  
```
Set-MigrationEndpoint -Identity Onboardingmigrationendpoint01 -MaxConcurrentMigrations 10 -RemoteServer Server01.contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

Use the **Set-MigrationEndpoint** cmdlet to configure settings for different types of migration:
  
- **Cross-forest move**: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a RemoteMove endpoint.
    
- **Remote move**: In a hybrid deployment, a remote move involves onboarding oroffboarding migrations. Remote moves require the use of a RemoteMove endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online in Office 365, and uses a RemoteMove endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online in Office 365 to an on-premises Exchange organization and uses a RemoteMove endpoint as the target endpoint of the migration batch.
    
- **Cutover Exchange migration**: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online in Office 365. Cutover Exchange migration requires the use of an Exchange endpoint.
    
- **Staged Exchange migration**: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online in Office 365. Staged Exchange migration requires the use of an Exchange endpoint.
    
- **IMAP migration**: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online in Office 365. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.
    
- **Local**: Move mailboxes between different servers or databases within a single on-premises Exchange forest. Local moves don't require the use of an endpoint.
    
For more information about the different move and migration scenarios, see:
  
- [Mailbox Moves in Exchange 2013](http://technet.microsoft.com/library/9c0a0bc9-2a39-4cf0-aa6e-6e5ef3fd38b5.aspx)
    
- [Managing Batch Moves](http://technet.microsoft.com/library/1691b658-f5af-49c6-9170-5c3cb66c7306.aspx)
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> |The  _Identity_ parameter specifies the name of the migration endpoint you want to configure. <br/> |
| _Authentication_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AuthenticationMethod  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _Authentication_ parameter specifies the authentication method used by the on-premises mail server. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Credentials_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credentials_ parameter specifies the credentials to use for connecting to the remote endpoint. Credentials should be used when creating either a staged or cutover Exchange endpoint or a RemoteMove endpoint. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExchangeServer_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _ExchangeServer_ parameter specifies the on-premises source Exchange server for cutover and staged migrations. This parameter is applicable only to staged and cutover Exchange endpoints which don't use Autodiscovery. <br/> |
| _MailboxPermission_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationMailboxPermission  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _MailboxPermission_ parameter specifies what permissions should be used to access the source mailbox during OutlookAnywhere onboarding (Staged Exchange Migration and Cutover Exchange Migration). This parameter is not for non-OutlookAnywhere migrations. <br/> The account specified must have the following permissions:  <br/> FullAccess permission. The account has Full-Access permission to the mailboxes they want to migrate. Admin permission. The account is a domain administrator who can access any mailbox they want to migrate. |
| _MaxConcurrentIncrementalSyncs_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxConcurrentIncrementalSyncs_ parameter specifies the maximum number of incremental syncs allowed for this endpoint at a specified time. This value must be less or equal to _MaxConcurrentMigrations_ parameter. <br/> |
| _MaxConcurrentMigrations_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxConcurrentMigrations_ parameter specifies the maximum number of mailboxes that will be migrated for this endpoint at a specified time. This parameter is applicable for all migration types. <br/> |
| _NspiServer_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _NspiServer_ parameter specifies the FQDN of the remote Name Service Provider Interface (NSPI) server. This parameter is only applicable to staged and cutover Exchange endpoints that don't use Autodiscovery. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Port_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in the cloud-based service.  <br/> For an IMAP migration, the  _Port_ parameter specifies the TCP port number used by the migration process to connect to the remote server. <br/> |
| _PublicFolderDatabaseServerLegacyDN_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoteServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> | The _RemoteServer_ parameter specifies the remote server depending on the protocol type for moves: <br/> **Exchange server moves**: The FQDN of an Exchange server that has the Client Access role installed, a Client Access server array, or a group of Client Access servers that are located behind a supported network load balancer.  <br/> **IMAP moves**: The FQDN of the IMAP server.  <br/> |
| _RpcProxyServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in the cloud-based service.  <br/> For a staged Exchange migration, the  _RpcProxyServer_ parameter specifies the FQDN of the RPC proxy server for the on-premises Exchange server. This parameter is only applicable to staged and cutover Exchange endpoints that don't use Autodiscovery <br/> |
| _Security_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.IMAPSecurityMechanism  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SkipVerification_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SkipVerification_ switch specifies whether to skip verifying that the remote server is reachable when creating a migration endpoint. The default value is `$false`.  <br/> |
| _SourceMailboxLegacyDN_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _SourceMailboxLegacyDN_ parameter specifies a mailbox on the target server. Use the LegacyExchangeDN for the on-premises test mailbox as the value for this parameter. The cmdlet tries to access this mailbox using the credentials for the administrator account on the target server. <br/> |
| _TestMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _TestMailbox_ parameter specifies a mailbox on the target server. Use the primary SMTP address as the value for this parameter. The cmdlet tries to access this mailbox using the credentials for the administrator account on the target server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

