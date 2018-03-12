---
title: "New-MailboxRestoreRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0b67defd-3c6c-4470-acfa-7f22a6c1d2bd

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MailboxRestoreRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MailboxRestoreRequest** cmdlet to restore a soft-deleted or disconnected mailbox. This cmdlet starts the process of moving content from the soft-deleted mailbox, disabled mailbox, or any mailbox in a recovery database into a connected primary or archive mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailboxRestoreRequest -SourceDatabase <DatabaseIdParameter> -SourceStoreMailbox <StoreMailboxIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

To create a restore request, you must provide the **DisplayName**, **LegacyDN**, or **MailboxGUID** for the soft-deleted or disabled mailbox.
  
This example uses the [Get-MailboxStatistics](get-mailboxstatistics.md) cmdlet to return the **DisplayName**, **LegacyDN**, **MailboxGUID**, and **DisconnectReason** for all mailboxes on mailbox database MBD01 that have a disconnect reason of `SoftDeleted` or `Disabled`.
  
```
Get-MailboxStatistics -Database MBD01 | Where {$_.DisconnectReason -eq "SoftDeleted" -or $_.DisconnectReason -eq "Disabled"} | Format-List LegacyDN, DisplayName, MailboxGUID, DisconnectReason
```

### Example 2

This example restores the source mailbox with the MailboxGUID 1d20855f-fd54-4681-98e6-e249f7326ddd on mailbox database MBD01 to the target mailbox with the alias Ayla.
  
```
New-MailboxRestoreRequest -SourceDatabase "MBD01" -SourceStoreMailbox 1d20855f-fd54-4681-98e6-e249f7326ddd -TargetMailbox Ayla
```

### Example 3

This example restores the content of the source mailbox with the **DisplayName** of Tony Smith on mailbox database MBD01 to the archive mailbox for Tony@contoso.com.
  
```
New-MaiboxRestoreRequest -SourceDatabase "MBD01" -SourceStoreMailbox "Tony Smith" -TargetMailbox Tony@contoso.com -TargetIsArchive
```

## Detailed Description
<a name="DetailedDescription"> </a>

When mailboxes are moved from one database to another, Exchange doesn't fully delete the mailbox from the source database immediately upon completion of the move. Instead, the mailbox in the source mailbox database is switched to a soft-deleted state, which allows mailbox data to be accessed during a mailbox restore operation by using the new **MailboxRestoreRequest** cmdlet set. The soft-deleted mailboxes are retained in the source database until either the deleted mailbox retention period expires or you use the **Remove-StoreMailbox** cmdlet to purge the mailbox.
  
To view soft-deleted mailboxes, run the [Get-MailboxStatistics](get-mailboxstatistics.md) cmdlet against a database and look for results that have a **DisconnectReason** with a value of `SoftDeleted`. For more information, see Example 1 later in this topic.
  
A mailbox is marked as Disabled a short time after the **Disable-Mailbox** or **Remove-Mailbox** command completes.
  
> [!NOTE]
> The mailbox won't be marked as Disabled until the Microsoft Exchange Information Store service determines that Active Directory has been updated with the disabled mailbox's information. You can expedite the process by running the **Update-StoreMailboxState** cmdlet against that database.
  
Exchange retains disabled mailboxes in the mailbox database based on the deleted mailbox retention settings configured for that mailbox database. After the specified period of time, the mailbox is permanently deleted.
  
To view disabled mailboxes, run the **Get-MailboxStatistics** cmdlet against a database and look for results that have a **DisconnectReason** with a value of `Disabled`. For more information, see Example 1 later in this topic.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _RemoteDatabaseGuid_ <br/> |Required  <br/> |System.Guid  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoteHostName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoteRestoreType_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Migration.MailboxReplication.RequestBase.RemoteRestoreType  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SourceDatabase_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _SourceDatabase_ parameter specifies the identity of the database from which you're restoring the soft-deleted or disconnected mailbox. <br/> |
| _SourceMailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxLocationIdParameter  <br/> |The  _SourceMailbox_ parameter specifies the soft-deleted mailbox that you want to restore. The best way to identify the soft-deleted mailbox is by its GUID value. You can find the GUID value by running the following command: `Get-Mailbox -SoftDeletedMailbox`.  <br/> |
| _SourceStoreMailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _SourceStoreMailbox_ parameter specifies the identity of the mailbox from which you want to restore content. This parameter accepts the following values: <br/>  MailboxGUID <br/>  LegacyExchangeDN <br/>  DisplayName <br/>  You can find this information by running the[Get-MailboxStatistics](get-mailboxstatistics.md) cmdlet. <br/> |
| _TargetMailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxLocationIdParameter  <br/> | The _TargetMailbox_ parameter specifies the identity of the mailbox or mail user to which you want to restore content. The target mailbox or mail user needs to exist before you can run this command successfully. This parameter accepts the following values: <br/>  GUID <br/>  Alias <br/>  LegacyExchangeDN <br/>  _Domain\Account Name_ <br/>  SMTP address <br/> |
| _AcceptLargeDataLoss_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _AcceptLargeDataLoss_ switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the _BadItemLimit_ or _LargeItemLimit_ parameters to a value of 51 or higher. Otherwise, the command will fail. <br/> |
| _AllowLegacyDNMismatch_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _AllowLegacyDNMismatch_ switch specifies that the operation should continue if the **LegacyExchangeDN** of the source physical mailbox and the target mailbox don't match. You don't need to specify a value with this switch. <br/> By default, this cmdlet checks to make sure that the **LegacyExchangeDN** on the source physical mailbox is present on the target user in the form of the **LegacyExchangeDN** or an X500 proxy address that corresponds to the **LegacyExchangeDN**. This check prevents you from accidentally restoring a source mailbox into the incorrect target mailbox. <br/> |
| _AssociatedMessagesCopyOption_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.FAICopyOption  <br/> | The _AssociatedMessagesCopyOption_ parameter specifies whether associated messages are copied when the request is processed. Associated messages are special messages that contain hidden data with information about rules, views, and forms. By default, associated messages are copied. This parameter accepts the following values: <br/>  `DoNotCopy`: The associated messages aren't copied.  <br/>  `MapByMessageClass`: This option finds the corresponding associated message by looking up the **MessageClass** attribute of the source message. If there's an associated message of this class in both source and target folders, it overwrites the associated message in the target. If there isn't an associated message in the target, it creates a copy in the target. <br/>  `Copy`: This option copies associated messages from the source to the target. If the same message type exists both in the source and the target location, these associated messages are duplicated. This is the default option.  <br/> > [!NOTE]>  Content filtering doesn't apply to associated messages.          |
| _BadItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _BadItemLimit_ parameter specifies the maximum number of bad items that are allowed before the request fails. Abad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit aremissing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.  <br/> Valid input for this parameter is an integer or the value  `unlimited`. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the **New-MailboxRepairRequest** cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again. <br/> > [!NOTE]> If you set this value to 51 or higher, you also need to use the  _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The  _BatchName_ parameter specifies a descriptive name for restoring a batch of mailboxes. You can use the name in the _BatchName_ parameter as a string search when you use the **Get-MailboxRestoreRequest** cmdlet. <br/> |
| _CompletedRequestAgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _CompletedRequestAgeLimit_ parameter specifies how long the status of a completed restore request is set to `Completed`. If this parameter is set to a value of  `0`, the status is cleared immediately instead of being changed to  `Completed`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ConflictResolutionOption_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.ConflictResolutionOption  <br/> | The _ConflictResolutionOption_ parameter specifies what to do if there are multiple matching messages in the target. Valid values are: <br/>  `ForceCopy` <br/>  `KeepAll` <br/>  `KeepLatestItem` <br/>  `KeepSourceItem` (This is the default value.) <br/>  `KeepTargetItem` <br/>  `UpdateFromSource` <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExcludeDumpster_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _ExcludeDumpster_ parameter specifies whether to exclude the Recoverable Items folder. You don't have to include a value with this parameter. If you don't specify this parameter, the Recoverable Items folder is copied with the following subfolders: <br/>  Deletions <br/>  Versions <br/>  Purges <br/> |
| _ExcludeFolders_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ExcludeFolders_ parameter specifies the list of folders to exclude during the restore request. <br/>  Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax: <br/>  `<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the  _SourceRootFolder_ parameter, for example, "MyProjects" or "MyProjects/FY2010". <br/>  `#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example,  `#Inbox#` denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types: <br/>  Inbox <br/>  SentItems <br/>  DeletedItems <br/>  Calendar <br/>  Contacts <br/>  Drafts <br/>  Journal <br/>  Tasks <br/>  Notes <br/>  JunkEmail <br/>  CommunicationHistory <br/>  Voicemail <br/>  Fax <br/>  Conflicts <br/>  SyncIssues <br/>  LocalFailures <br/>  ServerFailures <br/>  If the user creates a personal folder with the same name as a well-known folder and the # symbol surrounding it, you can use a back slash (\) as an escape character to specify that folder. For example, if a user creates a folder named #Notes# and you want to specify that folder, but not the well-known Notes folder, use the following syntax: `\#Notes\#`.  <br/> > [!NOTE]>  Wildcard characters can't be used in folder names.          |
| _IncludeFolders_ <br/> |Optional  <br/> |System.String[]  <br/> | The _IncludeFolders_ parameter specifies the list of folder to include during the restore request. <br/>  Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax: <br/>  `<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the  _SourceRootFolder_ parameter, for example, "MyProjects" or "MyProjects/FY2010". <br/>  `#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example,  `#Inbox#` denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types: <br/>  Inbox <br/>  SentItems <br/>  DeletedItems <br/>  Calendar <br/>  Contacts <br/>  Drafts <br/>  Journal <br/>  Tasks <br/>  Notes <br/>  JunkEmail <br/>  CommunicationHistory <br/>  Voicemail <br/>  Fax <br/>  Conflicts <br/>  SyncIssues <br/>  LocalFailures <br/>  ServerFailures <br/>  If the user creates a personal folder with the same name as a well-known folder and the # symbol surrounding it, you can use a back slash (\) as an escape character to specify that folder. For example, if a user creates a folder named #Notes# and you want to specify that folder, but not the well-known Notes folder, use the following syntax: `\#Notes\#`.  <br/> > [!NOTE]>  Wildcard characters can't be used in folder names.          |
| _InternalFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MailboxReplication.RequestBase.InternalMrsFlag[]  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _InternalFlags_ parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes. <br/> |
| _LargeItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LargeItemLimit_ parameter specifies the maximum number of large items that are allowed before the request fails. Alarge item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used. <br/>  For more information about maximum message size values, see the following topics: <br/>  Exchange 2016:[Message size limits in Exchange 2016](https://technet.microsoft.com/library/bb124345.aspx) <br/>  Exchange Online:[Exchange Online Limits](https://go.microsoft.com/fwlink/p/?LinkId=524926) <br/>  Valid input for this parameter is an integer or the value `unlimited`. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.  <br/> > [!NOTE]>  If you set this value to 51 or higher, you also need to use the _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the specific request for tracking and display purposes. Because you can have multiple restore requests per mailbox, Exchange precedes the name with the mailbox's alias. For example, if you create an export request for a user's mailbox that has the alias Kweku and specify the value of this parameter as RestoreFailedMoves, the identity of this export request is Kweku\RestoreFailedMoves. <br/> If you didn't specify a name for the restore request when it was created, Exchange automatically generates the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestore _X_ (where _X_ = 1-9). <br/> |
| _Priority_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestPriority  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _Priority_ parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are: <br/>  `Lowest` <br/>  `Lower` <br/>  `Low` <br/>  `Normal`: This is the default value.  <br/>  `High` <br/>  `Higher` <br/>  `Highest` <br/>  `Emergency` <br/> |
| _RemoteCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RequestExpiryInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _RequestExpiryInterval_ parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter: <br/>  The completed request is automatically removed based on the _CompletedRequestAgeLimit_ parameter value. <br/>  If the request fails, you need to manually remove it by using the corresponding **Remove-\*Request** cmdlet. <br/>  To specify a value, enter it as a time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/>  When you use the value `Unlimited`, the completed request isn't automatically removed.  <br/> |
| _SkipMerging_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.SkippableMergeComponent[]  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _SkipMerging_ parameter specifies folder-related items to skip when restoring the mailbox. Use one of the following values: <br/>  `FolderRules` <br/>  `FolderACLs` <br/>  `InitialConnectionValidation` <br/>  Use this parameter only if a restore request fails because of folder rules, folder access control lists (ACLs), or initial connection validation. <br/> |
| _SourceIsArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SourceIsArchive_ switch specifies that the source mailbox is an archive mailbox. You can use this switch only with the _SourceMailbox_ parameter. <br/> |
| _SourceRootFolder_ <br/> |Optional  <br/> |System.String  <br/> |The  _SourceRootFolder_ parameter specifies the root folder of the mailbox from which data is restored. If this parameter isn't specified, the command restores all folders. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Suspend_ switch specifies whether to suspend the request. If you use this switch, the request is queued, but the request won't reach the status of **InProgress** until you resume the request with the relevant resume cmdlet. You don't have to specify a value with this switch. <br/> |
| _SuspendComment_ <br/> |Optional  <br/> |System.String  <br/> |The  _SuspendComment_ parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the _Suspend_ parameter. <br/> |
| _TargetIsArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _TargetIsArchive_ parameter specifies that the content is restored into the specified target mailbox's archive. <br/> |
| _TargetRootFolder_ <br/> |Optional  <br/> |System.String  <br/> |The  _TargetRootFolder_ parameter specifies the top-level folder in which to restore data. If you don't specify this parameter, the command restores folders to the top of the folder structure in the target mailbox or archive. Content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure. <br/> |
| _TargetType_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.TargetTypeComponent  <br/> | The _TargetType_parameter specifies the type of mailbox that's the target for the restore operation. Valid values are:  <br/>  `Archive` <br/>  `MailboxLocation` <br/>  `Primary` (This is the default value) <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WorkloadType_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestWorkloadType  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _WorkloadType_ parameter is reserved for internal Microsoft use. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

