---
title: "Test-MigrationServerAvailability"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a0959dbe-94ae-4f2e-8e2c-e5d5bd5e1521
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Test-MigrationServerAvailability

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Test-MigrationServerAvailability** cmdlet to test the availability of the target server in preparation to perform cross-forest mailbox moves, migration of on-premises mailboxes to Exchange Online, or to migrate on-premises mailbox data from an IMAP server to Exchange Online mailboxes. For all migration types, the cmdlet attempts to verify the connection settings used to connect to the target server.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Test-MigrationServerAvailability <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

For IMAP migrations, this example verifies the connection to the IMAP mail server imap.contoso.com.
  
```
Test-MigrationServerAvailability -Imap -RemoteServer imap.contoso.com -Port 143
```

### Example 2

This example uses the _Autodiscover_ and _ExchangeOutlookAnywhere_ parameters to verify the connection to an on-premises Exchange server in preparation for migrating on-premises mailboxes to Exchange Online. You can use a similar example to test the connection settings for a staged Exchange migration or a cutover Exchange migration.
  
```
$Credentials = Get-Credential; Test-MigrationServerAvailability -ExchangeOutlookAnywhere -Autodiscover -EmailAddress administrator@contoso.com -Credentials $Credentials
```

### Example 3

This example verifies the connection to a server running Microsoft Exchange Server 2003 named exch2k3.contoso.com and uses NTLM for the authentication method.
  
```
$Credentials = Get-Credential; Test-MigrationServerAvailability -ExchangeOutlookAnywhere -ExchangeServer exch2k3.contoso.com -Credentials $Credentials -RPCProxyServer mail.contoso.com -Authentication NTLM
```

### Example 4

This example verifies the connection settings to a remote server using the settings stored in an existing migration endpoint in Exchange Online.
  
```
Test-MigrationServerAvailability -Endpoint endpoint.contoso.com
```

### Example 5

This example tests multiple existing endpoints.
  
```
$MRSEndpoints = (Get-MigrationEndpoint).RemoteServer; Foreach ($MEP in $MRSEndpoints) {Test-MigrationServerAvailability -Endpoint $MEP}
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Test-MigrationServerAvailability** cmdlet verifies that you can communicate with the on-premises mail server that houses the mailbox data that you want to migrate to cloud-based mailboxes. When you run this cmdlet, you must specify the migration type. You can specify whether to communicate with an IMAP server or with an Exchange server.
  
For an IMAP migration, this cmdlet uses the server's fully qualified domain name (FQDN) and a port number to verify the connection. If the verification is successful, use the same connection settings when you create a migration request with the **New-MigrationBatch** cmdlet.
  
For an Exchange migration, this cmdlet uses one of the following settings to communicate with the on-premises server:
  
- For Exchange 2003, it uses the server's FQDN and credentials for an administrator account that can access the server.
    
- For Exchange Server 2007 and later versions, you can connect using the Autodiscover service and the email address of an administrator account that can access the server.
    
If the verification is successful, you can use the same settings to create a migration endpoint. For more information, see:
  
- [New-MigrationEndpoint](new-migrationendpoint.md)
    
- [New-MigrationBatch](new-migrationbatch.md)
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Autodiscover_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Autodiscover_ parameter specifies that the cmdlet should use the Autodiscover service to obtain the connection settings for the target server. You don't need to specify a value with this switch. <br/> |
| _Compliance_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Compliance_ switch specifies that the endpoint type is compliance. You don't need to specify a value with this switch. <br/> |
| _Credentials_ <br/> |Required  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credentials_ parameter specifies the logon credentials for an account that can access mailboxes on the target server. Specify the _username_ in the _domain\username_ format or the user principal name (UPN) (user@example.com) format. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _EmailAddress_ <br/> |Required  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The _EmailAddress_ parameter specifies the email address of an administrator account that can access the remote server. This parameter is required when you use the _Autodiscover_ parameter. <br/> |
| _Endpoint_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> |The _Endpoint_ parameter specifies the name of the migration endpoint to connect to. A migration endpoint contains the connection settings and other migration configuration settings. If you include this parameter, the **Test-MigrationServerAvailability** cmdlet attempts to verify the ability to connect to the remote server using the settings in the migration endpoint. <br/> |
| _ExchangeOutlookAnywhere_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _ExchangeOutlookAnywhere_ parameter specifies a migration type for migrating on-premises mailboxes to Exchange Online. Use this parameter if you plan to migrate mailboxes to Exchange Online using a staged Exchange migration or a cutover Exchange migration. <br/> |
| _ExchangeRemoteMove_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ExchangeRemoteMove_ parameter specifies a type of migration where mailboxes are moved with full fidelity between two on-premises forests or between an on-premises forest and Exchange Online. Use this parameter if you plan to perform a cross-forest move or migrate mailboxes between an on-premises Exchange organization and Exchange Online in a hybrid deployment. <br/> |
| _ExchangeServer_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The _ExchangeServer_ parameter specifies the FQDN of the on-premises Exchange server. Use this parameter when you plan to perform a staged Exchange migration or a cutover Exchange migration. This parameter is required if you don't use the _Autodiscover_ parameter. <br/> |
| _Imap_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _Imap_ parameter specifies an IMAP migration as the migration type. This parameter is required when you want to migrate data from an IMAP mail server to Exchange Online mailboxes. <br/> |
| _Port_ <br/> |Required  <br/> |System.Int32  <br/> |This parameter is available only in the cloud-based service.  <br/> The _Port_ parameter specifies the TCP port number used by the IMAP migration process to connect to the target server. This parameter is required only for IMAP migrations. <br/> The standard is to use port  `143` for unencrypted connections, port `143` for Transport Layer Security (TLS), and port `993` for Secure Sockets Layer (SSL). <br/> |
| _PSTImport_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolder_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolderDatabaseServerLegacyDN_ <br/> |Required  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolderToUnifiedGroup_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _PublicFolderToUnifiedGroup_switch specifies that the endpoint type is public folders to Office 365 groups. You don't need to specify a value with this switch.  <br/> |
| _RemoteServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> | The _RemoteServer_ parameter specifies the FQDN of the on-premises mail server. This parameter is required when you want to perform one of the following migration types: <br/>  Cross-forest move <br/>  Remote move (hybrid deployments) <br/>  IMAP migration <br/> |
| _RPCProxyServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in the cloud-based service.  <br/> The _RPCProxyServer_ parameter specifies the FQDN of the RPC proxy server for the on-premises Exchange server. This parameter is required when you don't use the _Autodiscover_ parameter. Use this parameter if you plan to perform a staged Exchange migration or a cutover Exchange migration to migrate mailboxes to Exchange Online. <br/> |
| _SourceMailboxLegacyDN_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> The _SourceMailboxLegacyDN_ parameter specifies a mailbox on the target server. Use the _LegacyExchangeDN_ for the on-premises test mailbox as the value for this parameter. The cmdlet will attempt to access this mailbox using the credentials for the administrator account on the target server. <br/> |
| _Authentication_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AuthenticationMethod  <br/> |This parameter is available only in the cloud-based service.  <br/> The _Authentication_ parameter specifies the authentication method used by the on-premises mail server. Use `Basic` or `NTLM`. If you don't include this parameter,  `Basic` authentication is used. <br/> The parameter is only used for cutover Exchange migrations and staged Exchange migrations.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _FilePath_ <br/> |Optional  <br/> |System.String  <br/> |The _FilePath_ parameter specifies the path containing the PST files when testing a PST Import migration endpoint. <br/> |
| _MailboxPermission_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationMailboxPermission  <br/> | This parameter is available only in the cloud-based service. <br/>  The _MailboxPermission_ parameter specifies what permissions are assigned to the migration administrator account defined by the _Credentials_ parameter. You make the permissions assignment to test the connectivity to a user mailbox on the source mail server when you're testing the connection settings in preparation for a staged or cutover Exchange migration or for creating an Exchange Outlook Anywhere migration endpoint. <br/>  Specify one of the following values for the account defined by the _Credentials_ parameter: <br/> **FullAccess**: The account has been assigned the Full-Access permission to the mailboxes that will be migrated.  <br/> **Admin**: The account is a member of the Domain Admins group in the organization that hosts the mailboxes that will be migrated.  <br/>  This parameter isn't used for testing the connection to the remote server for a remote move migration or an IMAP migration. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Security_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.IMAPSecurityMechanism  <br/> |This parameter is available only in the cloud-based service.  <br/> The _Security_ parameter specifies the encryption method used by the remote mail server. The options are `None`,  `Tls`, or  `Ssl`. Use this parameter only when testing the connection to an IMAP server or in preparation for creating a migration endpoint for an IMAP migration.  <br/> |
| _TestMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _TestMailbox_ parameter specifies a mailbox on the target server. Use the primary SMTP address as the value for this parameter. The cmdlet will attempt to access this mailbox using the credentials for the administrator account on the target server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

