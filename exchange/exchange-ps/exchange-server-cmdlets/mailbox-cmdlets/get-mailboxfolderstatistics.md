---
title: "Get-MailboxFolderStatistics"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 212ca564-435e-4af6-8673-5564732bf118
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxFolderStatistics

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxFolderStatistics** cmdlet to retrieve information about the folders in a specified mailbox, including the number and size of items in the folder, the folder name and ID, and other information.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxFolderStatistics -Identity <GeneralMailboxOrMailUserIdParameter> [-Archive <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example doesn't specify the _FolderScope_ parameter and retrieves all the information about the user Chris in the Contoso domain.
  
```
Get-MailboxFolderStatistics -Identity contoso\chris
```

### Example 2

This example uses the _FolderScope_ parameter to view the statistics for calendar folders for the user Chris.
  
```
Get-MailboxFolderStatistics -Identity Chris -FolderScope Calendar
```

### Example 3

This example uses the _Archive_switch to view the statistics for Ayla's archive.
  
```
Get-MailboxFolderStatistics -Identity Ayla@contoso.com -Archive
```

### Example 4

This example uses the _IncludeAnalysis_switch to view the statistics of Tony's Recoverable Items folder.
  
```
Get-MailboxFolderStatistics -Identity "Tony" -FolderScope RecoverableItems -IncludeAnalysis
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
> [!NOTE]
> A mailbox can have hidden items that are never visible to the user and are only used by applications. The **Get-MailboxFolderStatistics** cmdlet can return hidden items for the following values: FolderSize, FolderAndSubfolderSize, ItemsInFolder, and ItemsInFolderAndSubfolders.
  
> [!NOTE]
> The **Get-MailboxFolderStatistics** cmdlet shouldn't be confused with the **Get-MailboxStatistics** cmdlet. For more information, see[Get-MailboxStatistics](get-mailboxstatistics.md). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies the identity of the mailbox or mail user. You can use any value that uniquely identifies the mailbox or mail user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_switch specifies whether to return the usage statistics of the archive associated with the mailbox or mail user. You don't need to specify a value with this switch.  <br/> |
| _AuditLog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FolderScope_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ElcFolderType  <br/> | The _FolderScope_ parameter specifies the scope of the search by folder type. Valid parameter values include: <br/>  `All` <br/>  `Archive` <br/>  `Calendar` <br/>  `Contacts` <br/>  `ConversationHistory` <br/>  `DeletedItems` <br/>  `Drafts` <br/>  `Inbox` <br/>  `JunkEmail` <br/>  `Journal` <br/>  `LegacyArchiveJournals` <br/>  `ManagedCustomFolder` <br/>  `NonIpmRoot` <br/>  `Notes` <br/>  `Outbox` <br/>  `Personal` <br/>  `RecoverableItems` <br/>  `RssSubscriptions` <br/>  `SentItems` <br/>  `SyncIssues` <br/>  `Tasks` <br/>  The `ManagedCustomFolder` value returns output for all managed custom folders. The `RecoverableItems` value returns output for the Recoverable Items folder and the Deletions, DiscoveryHolds, Purges, and Versions subfolders. <br/> |
| _IncludeAnalysis_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeAnalysis_switch specifies whether to scan all items within a folder and return statistics related to the folder and item size. You don't need to specify a value with this switch.  <br/> You should use this switch for troubleshooting purposes, because the command might take a long time to complete.  <br/> |
| _IncludeInternalAccessFolders_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IncludeOldestAndNewestItems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeOldestAndNewestItems_switch specifies whether to return the dates of the oldest and newest items in each folder. You don't need to specify a value with this switch.  <br/> |
| _IncludeRecoverableItems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

