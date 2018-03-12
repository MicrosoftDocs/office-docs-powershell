---
title: "Search-Mailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 9ee3b02c-d343-4816-a583-a90b1fad4b26

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Search-Mailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Search-Mailbox** cmdlet to search a mailbox and copy the results to a specified target mailbox, delete messages from the source mailbox, or both.
  
```
Search-Mailbox [-DeleteContent <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example searches the mailbox of Joe Healy and copies the search results to the DiscoveryMailbox in the folder JoeHealy-ProjectHamilton.
  
```
Search-Mailbox -Identity "Joe Healy" -SearchQuery "Subject:Project Hamilton" -TargetMailbox "DiscoveryMailbox" -TargetFolder "JoeHealy-ProjectHamilton" -LogLevel Full
```

### Example 2

This example searches April Stewart's mailbox for messages that contain the phrase "Your bank statement" in the subject and logs the result in the SearchAndDeleteLog folder in the administrator's mailbox. Messages aren't copied to the target mailbox.
  
```
Search-Mailbox -Identity "April Stewart" -SearchQuery 'Subject:"Your bank statement"' -TargetMailbox "administrator" -TargetFolder "SearchAndDeleteLog" -LogOnly -LogLevel Full
```

### Example 3

This example searches April Stewart's mailbox for messages that contain the phrase "Your bank statement" in the subject and deletes the messages from the source mailbox. You have to be assigned the Mailbox Import Export management role to use the  _DeleteContent_ switch.
  
```
Search-Mailbox -Identity "April Stewart" -SearchQuery 'Subject:"Your bank statement"' -DeleteContent
```

### Example 4

This example searches all mailboxes in your organization for messages that contain the words "election", "candidate", or "vote". The search results are copied to the Discovery Search Mailbox in the folder AllMailboxes-Election.
  
```
Get-Mailbox | Search-Mailbox -SearchQuery 'election OR candidate OR vote' -TargetMailbox "Discovery Search Mailbox" -TargetFolder "AllMailboxes-Election" -LogLevel Full
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use the **Search-Mailbox** cmdlet to search messages in a specified mailbox and perform any of the following tasks:
  
- Copy messages to a specified target mailbox.
    
- Delete messages from the source mailbox. You have to be assigned the Mailbox Import Export management role to delete messages.
    
- Copy messages from the source mailbox and delete them from the target mailbox.
    
- Perform single item recovery to recover items from a user's Recoverable Items folder.
    
- Clean up the Recoverable Items folder for a mailbox when it has reached the Recoverable Items hard quota.
    
> [!CAUTION]
> In Exchange Online, we recommend that you don't use the **Search-Mailbox -DeleteContent** command to delete messages in mailboxes that have auto-expanding archiving enabled. Unexpected data loss may occur.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _EstimateResultOnly_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _EstimateResultOnly_ switch specifies that only an estimate of the total number and size of messages returned by the search be provided. Messages aren't copied to the target mailbox. You can't use this switch with the _TargetMailbox_ parameter. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies the identity of the mailbox to search. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _TargetFolder_ <br/> |Required  <br/> |System.String  <br/> |The  _TargetFolder_ parameter specifies a folder name in which search results are saved in the target mailbox. The folder is created in the target mailbox upon execution. <br/> |
| _TargetMailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _TargetMailbox_ parameter specifies the identity of the destination mailbox where search results are copied. You can use the following values: <br/>  Alias <br/>  Display name <br/>  _Domain\Account_ <br/>  SMTP address <br/>  DN <br/>  Object GUID <br/>  UPN <br/>  LegacyExchangeDN <br/>  When you specify a value for the _TargetMailbox_ parameter, you must also specify the _TargetFolder_ parameter. You can't use this parameter with the _EstimateResultOnly_ switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DeleteContent_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _DeleteContent_ switch specifies that the messages returned by the search be permanently deleted from the source mailbox. When used with the _TargetMailbox_ parameter, messages are copied to the target mailbox and removed from the source mailbox. If you set the logging level for the search to `Basic` or `Full`, you must specify a target mailbox and a target folder to place the log in. To delete messages from the source mailbox without copying them to the target mailbox, don't specify the  _TargetMailbox_,  _TargetFolder_, and  _LogLevel_ parameters. <br/> As previously stated, we recommend that you don't use the  _DeleteContent_ switch to delete messages in Exchange Online mailboxes that have auto-expanding archiving enabled because unexpected data loss may occur. <br/> > [!IMPORTANT]> You need to be assigned the Mailbox Import Export management role to use this switch. By default, this role isn't assigned to any role group. Typically, you assign a role to a built-in or custom role group. Or you can assign a role to a user, or a universal security group. > Before you use the  _DeleteContent_ switch to delete content, we recommend that you test search parameters by using the _LogOnly_ parameter, as shown in Example 2.          |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DoNotIncludeArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _DoNotIncludeArchive_ switch specifies that the user's archive mailbox shouldn't be included in the search. You don't need to specify a value for this switch. By default, the archive mailbox is always searched. <br/> If auto-expanding archiving is enabled for an Exchange Online mailbox, only the user's primary archive mailbox is searched. Auxiliary archive mailboxes aren't included in the search.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch overrides the confirmation prompt displayed when your use the _DeleteContent_ switch to permanently delete messages. <br/> |
| _IncludeUnsearchableItems_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeUnsearchableItems_ switch specifies whether to include items that couldn't be indexed by Exchange Search. When set to `$true`, the  _IncludeUnsearchableItems_ switch specifies that items that couldn't be indexed by Exchange Search should be included in the search results. <br/> |
| _LogLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Infoworker.MailboxSearch.LoggingLevel  <br/> | The _LogLevel_ parameter specifies the logging level for the search. It can have one of the following values: <br/>  `Suppress`: No logs are kept.  <br/>  `Basic`: Basic information about the query and who ran it is kept.  <br/>  `Full`: In addition to the information kept by the  `Basic` log level, the `Full` log level adds a complete list of search results. <br/>  The default log level is `Basic`.  <br/> |
| _LogOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _LogOnly_ switch specifies that a search be performed and only a log be generated. Messages returned by the search aren't copied to the target mailbox. The logging level is specified by using the _LogLevel_ parameter. <br/> |
| _SearchDumpster_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SearchDumpster_ parameter specifies whether to search the Recoverable Items folder, which is the storage location in which items deleted from the Deleted Items folder or hard-deleted items are stored until they're purged from the mailbox database. By default, the Recoverable Items folder is always searched. To exclude the folder from the search, set the _SearchDumpster_ switch to `$false`, for example, `-SearchDumpster:$false` <br/> |
| _SearchDumpsterOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SearchDumpsterOnly_ switch specifies that only the Recoverable Items folder of the specified mailbox be searched. You can also use this switch with the _DeleteContent_ switch to delete messages from the Recoverable Items folder and reduce the size of the folder. <br/> |
| _SearchQuery_ <br/> |Optional  <br/> |System.String  <br/> |The  _SearchQuery_ parameter specifies a search string or a query formatted using Keyword Query Language (KQL). For more details about KQL, see[Keyword Query Language syntax reference](https://go.microsoft.com/fwlink/?LinkId=269603).  <br/> If this parameter is empty, all messages are returned.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

