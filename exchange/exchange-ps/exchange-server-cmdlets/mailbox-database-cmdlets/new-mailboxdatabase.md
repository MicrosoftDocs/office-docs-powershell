---
title: "New-MailboxDatabase"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5008090b-e776-4ff6-807c-208e00f4daab
description: "This cmdlet is available only in on-premises Exchange."
---

# New-MailboxDatabase

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-MailboxDatabase** cmdlet to create a mailbox database, or a recovery database. Each database you create must have a unique name in the organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailboxDatabase -Name <String> [-AutoDagExcludeFromMonitoring <$true | $false>] [-IsExcludedFromInitialProvisioning <SwitchParameter>] [-IsExcludedFromProvisioning <$true | $false>] [-IsSuspendedFromProvisioning <$true | $false>] [-OfflineAddressBook <OfflineAddressBookIdParameter>] [-PublicFolderDatabase <DatabaseIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the mailbox database DB1. This example also uses a non-default location for the database file.
  
```
New-MailboxDatabase -Name "DB1" -EdbFilePath D:\ExchangeDatabases\DB1\DB1.edb
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the new mailbox database. <br/> |
| _Recovery_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Recovery_ parameter specifies that the new database is designated as a recovery database. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |The _Server_ parameter specifies the server on which you want to create the database. <br/> |
| _AutoDagExcludeFromMonitoring_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AutoDagExcludeFromMonitoring_ parameter specifies that the database being created should not be monitored by managed availability. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EdbFilePath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EdbFilePath  <br/> |The _EdbFilePath_ parameter specifies the path to the database files. The default value is %programfiles%\Microsoft\Exchange Server\V15\Mailbox\ _\<Database name\>_.edb.  <br/> |
| _IsExcludedFromInitialProvisioning_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IsExcludedFromInitialProvisioning_ parameter specifies that this database is temporarily not considered by the mailbox provisioning load balancer. If the _IsExcludedFromInitialProvisioning_ parameter is enabled, new mailboxes aren't added automatically to this database. <br/> |
| _IsExcludedFromProvisioning_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsExcludedFromProvisioning_ parameter specifies whether this database is considered by the mailbox provisioning load balancer. If the _IsExcludedFromProvisioning_ parameter is set to `$true`, no new mailboxes are automatically added to this database.  <br/> |
| _IsSuspendedFromProvisioning_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IsSuspendedFromProvisioning_ parameter specifies whether this database is temporarily considered by the mailbox provisioning load balancer. <br/> |
| _LogFolderPath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _LogFolderPath_ parameter specifies the folder location for log files. <br/> |
| _MailboxProvisioningAttributes_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.MailboxProvisioningAttributes  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OfflineAddressBook_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OfflineAddressBookIdParameter  <br/> |The _OfflineAddressBook_ parameter specifies the associated offline address book (OAB) for the new mailbox database. <br/> |
| _PublicFolderDatabase_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |The _PublicFolderDatabase_ parameter specifies the associated public folder database for the new mailbox database. <br/> |
| _SkipDatabaseLogFolderCreation_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

