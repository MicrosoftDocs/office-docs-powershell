---
title: "New-MigrationEndpoint"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0383b4ea-10df-4e1d-9470-2eeb9fd1ea68
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MigrationEndpoint

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MigrationEndpoint** cmdlet to configure the connection settings for cross-forests moves, remote move migrations, cutover or staged Exchange migrations, and IMAP migrations.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MigrationEndpoint -ExchangeRemoteMove <SwitchParameter> -RemoteServer <Fqdn> [-Credentials <PSCredential>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates an endpoint for remote moves by using the  _Autodiscover_ parameter to detect the settings.
  
```
New-MigrationEndpoint -Name Endpoint1 -ExchangeRemoteMove -Autodiscover -EmailAddress tonysmith@contoso.com -Credentials (Get-Credential contoso\tonysmith)
```

### Example 2

This example creates an endpoint for remote moves by specifying the settings manually.
  
```
New-MigrationEndpoint -Name Endpoint2 -ExchangeRemoteMove -RemoteServer MRSServer.contoso.com -Credentials (Get-Credential Contoso.com\Administrator)
```

### Example 3

This example creates an Outlook Anywhere migration endpoint by using the  _Autodiscover_ parameter to detect the connection settings to the on-premises organization. Outlook Anywhere endpoints are used for cutover and staged Exchange migrations. The **Get-Credential** cmdlet is used to obtain the credentials for an on-premises account that has the necessary administrative privileges in the domain and that can access the mailboxes that will be migrated. When prompted for the user name, you can use either the email address or the domain\user name format for the administrator account. This account can be the same one that is specified by the _EmailAddress_ parameter.
  
```
$Credentials = Get-Credential; New-MigrationEndpoint -ExchangeOutlookAnywhere -Name EXCH-AutoDiscover -Autodiscover -EmailAddress administrator@contoso.com -Credentials $Credentials
```

### Example 4

This example creates an Outlook Anywhere migration endpoint by specifying the connection settings manually. Outlook Anywhere endpoints are used for cutover and staged Exchange migrations. The value for the  _ExchangeServer_ parameter specifies the on-premises Exchange server that hosts the mailboxes that will be migrated. The value for the _RPCProxyServer_ parameter specifies the Exchange server in the on-premises organization that has the Client Access server role installed that directly accepts and proxies client connections. The _EmailAddress_ parameter can specify any mailbox in the on-premises domain.
  
```
New-MigrationEndpoint -ExchangeOutlookAnywhere -Name EXCH_Manual -ExchangeServer EXCH-01-MBX.contoso.com -RPCProxyServer EXCH-02-CAS.contoso.com -Credentials (Get-Credential administrator@contoso.com) -EmailAddress annb@contoso.com
```

> [!IMPORTANT]
> It's recommended that you use a migration endpoint created with connection settings that are automatically discovered (see Example 3) because the Autodiscover service will be used to connect to each user mailbox in the migration batch. If you manually specify the connection settings for the endpoint and a user mailbox isn't located on the server specified by the  _ExchangeServer_ parameter, the migration for that user will fail. This is important if you have multiple on-premises Outlook Anywhere servers. Otherwise, you may need to create different migration endpoints that correspond to each on-premises server.
  
### Example 5

This example creates an IMAP migration endpoint. The value for the  _RemoteServer_ parameter specifies the FQDN of the IMAP server that hosts the mailboxes that will be migrated. The endpoint is configured to use port 993 for SSL encryption.
  
```
New-MigrationEndpoint -IMAP -Name IMAPEndpoint -RemoteServer imap.contoso.com -Port 993 -Security Ssl
```

### Example 6

This example creates an IMAP migration endpoint that supports 50 concurrent migrations and 10 concurrent incremental synchronizations. The endpoint is configured to use port 143 for TLS encryption.
  
```
New-MigrationEndpoint -IMAP -Name IMAP_TLS_Endpoint -RemoteServer imap.contoso.com -Port 143 -Security Tls -MaxConcurrentMigrations 50 -MaxConcurrentIncrementalSyncs 10
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-MigrationEndpoint** cmdlet configures the connection settings for different types of migrations:
  
- **Cross-forest move**: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a Remote Move endpoint.
    
- **Remote move migration**: In a hybrid deployment, a remote move migration involves onboarding oroffboarding migrations. Remote move migrations also require the use of an Exchange remote move endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online in Office 365, and uses a remote move endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online in Office 365 to an on-premises Exchange organization and uses a remote move endpoint as the target endpoint of the migration batch.
    
- **Cutover Exchange migration**: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online in Office 365. A cutover Exchange migration requires the use of an Outlook Anywhere migration endpoint.
    
- **Staged Exchange migration**: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online in Office 365. A staged Exchange migration requires the use of an Outlook Anywhere migration endpoint.
    
- **IMAP migration**: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online in Office 365. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.
    
> [!NOTE]
> Moving mailboxes between different servers or databases within a single on-premises Exchange forest (called a local move) doesn't require a migration endpoint. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Autodiscover_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |For an Exchange migration, the  _Autodiscover_ switch specifies whether to get other connection settings for the on-premises server from the Autodiscover service. You don't need to specify a value with this switch. <br/> |
| _Compliance_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Compliance_ switch specifies that the endpoint type is compliance. You don't need to specify a value with this switch. <br/> |
| _EmailAddress_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _EmailAddress_ parameter specifies the email address used by the Autodiscover service or in some cases used to validate the endpoint when you specify the connection settings manually. <br/> |
| _ExchangeOutlookAnywhere_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _ExchangeOutlookAnywhere_ switch specifies the type of endpoint for staged and cutover migrations. You don't need to specify a value with this switch. <br/> |
| _ExchangeRemoteMove_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ExchangeRemoteMove_switch specifies the type of endpoint for cross-forest moves and remote move migrations in a hybrid deployment. You don't need to specify a value with this switch.  <br/> |
| _IMAP_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _IMAP_switch specifies the type of endpoint for IMAP migrations. You don't need to specify a value with this switch.  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name you give to the new migration endpoint. You can use the _Name_ parameter when you run the **New-MigrationBatch** cmdlet. <br/> |
| _PSTImport_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolder_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolderDatabaseServerLegacyDN_ <br/> |Required  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolderToUnifiedGroup_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PublicFolderToUnifiedGroup_switch specifies that the endpoint type is public folders to Office 365 groups. You don't need to specify a value with this switch.  <br/> |
| _RemoteServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> | The _RemoteServer_ parameter specifies the FQDN of the remote server, which depends on the protocol type for moves: <br/>  For cross-forest moves and remote move migrations, this parameter refers to the Exchange server in the on-premises organization that has the Client Access server role installed that directly accepts and proxies client connections. <br/>  For IMAP migrations, this parameter refers to the IMAP server. <br/> |
| _RpcProxyServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RpcProxyServer_ parameter specifies the FQDN of the Exchange server in the on-premises Exchange organization that has the Client Access server role installed that directly accepts and proxies client connections. This parameter is used when you create an Outlook Anywhere migration endpoint for cutover and staged Exchange migrations. Typically, this FQDN will be the same as your Outlook on the web URL; for example, mail.contoso.com. This is also the URL for the proxy server that Outlook uses to connect to an Exchange server. <br/> This parameter is required only when you don't use the  _Autodiscover_ parameter. <br/> |
| _SourceMailboxLegacyDN_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _SourceMailboxLegacyDN_ parameter specifies the **LegacyExchangeDN** value of an on-premises mailbox that's used to test the ability of the migration service to create a connection using this endpoint. The cmdlet tries to access this mailbox using the credentials for the administrator account specified in the command. <br/> |
| _Authentication_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AuthenticationMethod  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _Authentication_ parameter specifies the authentication method used by the on-premises mail server. If you don't include this parameter, `Basic` authentication is used. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Credentials_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credentials_ parameter specifies the credentials to connect to the source or target endpoint for all Exchange migration types. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExchangeServer_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _ExchangeServer_ parameter specifies the FQDN of the on-premises Exchange server that hosts the mailboxes that will be migrated. This parameter is used when you create an Outlook Anywhere migration endpoint for cutover and staged Exchange migrations. <br/> This parameter is required only when you don't use the  _Autodiscover_ parameter. <br/> |
| _MailboxPermission_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationMailboxPermission  <br/> | This parameter is available only in the cloud-based service. <br/>  The _MailboxPermission_ parameter specifies what permissions to use to access the source mailbox during Outlook Anywhere onboarding (staged Exchange migration and cutover Exchange migration). <br/>  The migration administrator account specified for the endpoint must have one of the following permissions: <br/>  `Admin`: The account is a domain administrator who can access any mailbox they want to migrate.  <br/>  `FullAccess`: The account is assigned either the Full Access permission to the mailboxes they want to migrate or the Receive As permission to the mailbox database that hosts the mailboxes that will be migrated.  <br/>  If this parameter isn't specified, the cmdlet tries to access source mailboxes using the domain administrator permission and if that fails, it then tries to access the source mailboxes using the Full Access or Receive As permissions. <br/>  This parameter can't be used for creating non-Outlook Anywhere migration endpoints. <br/> |
| _MaxConcurrentIncrementalSyncs_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxConcurrentIncrementalSyncs_ parameter specifies the maximum number of incremental syncs allowed per endpoint. The default value is 20. <br/> |
| _MaxConcurrentMigrations_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _MaxConcurrentMigrations_ parameter specifies the maximum number of mailboxes that are migrated during initial sync. This parameter is applicable for all migration types. The default value is 100. <br/> |
| _NspiServer_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _NspiServer_ parameter specifies the remote Name Service Provider Interface (NSPI) server location for cutover and staged migrations. You must provide the FQDN of the server. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Port_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is available only in the cloud-based service.  <br/> For an IMAP migration, the  _Port_ parameter specifies the TCP port number used by the migration process to connect to the remote server. This parameter is required when you want to migrate data from an on-premises IMAP server to cloud-based mailboxes. <br/> |
| _Security_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.IMAPSecurityMechanism  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _Security_ parameter specifies the encryption method used by the IMAP server for an IMAP migration. Options are `None`,  `SSL` (the default), or `TLS`. This parameter is required when you want to migrate data from an on-premises IMAP server to cloud-based mailboxes.  <br/> |
| _SkipVerification_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SkipVerification_ switch specifies whether to skip verifying that the remote server is reachable when creating a migration endpoint. You don't need to specify a value with this switch. <br/> |
| _TestMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _TestMailbox_ parameter specifies an Exchange Online mailbox used as the target by the migration service to verify the connection using this endpoint. If this parameter isn't specified, the migration service uses the migration arbitration mailbox in the Exchange Online organization to verify the connection. <br/> This parameter is only used to create Outlook Anywhere migration endpoints.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

