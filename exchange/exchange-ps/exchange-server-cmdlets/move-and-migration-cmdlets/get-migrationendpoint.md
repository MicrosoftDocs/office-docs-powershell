---
title: "Get-MigrationEndpoint"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3576e65b-4b64-46a5-a95a-7045daf4893e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MigrationEndpoint

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MigrationEndpoint** cmdlet to retrieve migration endpoint settings for source or destination servers for cutover or staged Exchange migrations, IMAP migrations, and remote moves.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MigrationEndpoint [-Identity <MigrationEndpointIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the settings for the migration endpoint, OnboardingME01.
  
```
Get-MigrationEndpoint -Identity OnboardingME01
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-MigrationEndpoint** cmdlet retrieves settings for different types of migration:
  
- **Cross-forest move**: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a RemoteMove endpoint.
    
- **Remote move**: In a hybrid deployment, a remote move involves onboarding oroffboarding migrations. Remote moves require the use of a RemoteMove endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online in Office 365, and uses a RemoteMove endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online in Office 365 to an on-premises Exchange organization and uses a RemoteMove endpoint as the target endpoint of the migration batch.
    
- **Cutover Exchange migration**: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online in Office 365. Cutover Exchange migration requires the use of an Exchange endpoint.
    
- **Staged Exchange migration**: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online in Office 365. Staged Exchange migration requires the use of an Exchange endpoint.
    
- **IMAP migration**: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online in Office 365. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.
    
- **Local**: Move mailboxes between different servers or databases within a single on-premises Exchange forest. Local moves don't require the use of an endpoint.
    
For more information about the different move and migration scenarios, see:
  
- [Mailbox Moves in Exchange 2013](https://technet.microsoft.com/library/9c0a0bc9-2a39-4cf0-aa6e-6e5ef3fd38b5.aspx)
    
- [Managing Batch Moves](https://technet.microsoft.com/library/1691b658-f5af-49c6-9170-5c3cb66c7306.aspx)
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ConnectionSettings_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Storage.Management.ExchangeConnectionSettings  <br/> |The _ConnectionSettings_ parameter specifies the configuration settings of source or target servers for which you want to find a matching endpoint. <br/> |
| _Type_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Storage.Management.MigrationType  <br/> | The _Type_ parameter filters the results by the type of migration. Valid values for this parameter are: <br/>  `ExchangeOutlookAnywhere`: Cutover or staged Exchange migrations  <br/>  `ExchangeRemoteMove`: Remote moves and migrations  <br/>  `IMAP`: IMAP migrations  <br/>  `PublicFolder`: Public folder migrations  <br/> |
| _Diagnostic_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Diagnostic_ switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DiagnosticArgument_ <br/> |Optional  <br/> |System.String  <br/> |The _DiagnosticArgument_ parameter modifies the results that are returned by using the _Diagnostic_ switch. Typically, you use the _Diagnostic_ switch and the _DiagnosticArgument_ parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> |The _Identity_ parameter specifies the name of the migration endpoint you want to retrieve settings for. <br/> |
| _Partition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

