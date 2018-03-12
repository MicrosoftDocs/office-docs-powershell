---
title: "New-MailboxImportRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 7/12/2017
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4ca9af1a-33fa-4d53-a765-f46a1b7f2d3a

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-MailboxImportRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-MailboxImportRequest** cmdlet to begin the process of importing a .pst file to a mailbox or archive. You can create more than one mailbox import request per mailbox and each mailbox import request must have a unique name. Microsoft Exchange automatically generates up to 10 unique names for a mailbox import request. However, to create more than 10 import requests for a mailbox, you need to specify a unique name when creating the import request, or you can remove existing import requests with the[Remove-MailboxExportRequest](remove-mailboxexportrequest.md) cmdlet before starting a new import request with the default request < _Alias_>\MailboxImport _X_ (where _X_ = 0-9).
  
By default, the import checks for duplication of items and doesn't copy the data from the .pst file into the mailbox or archive if a matching item exists in the target mailbox or target archive.
  
> [!NOTE]
> This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in [Manage role groups](https://technet.microsoft.com/library/jj657480.aspx). 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-MailboxImportRequest -FilePath <LongPath> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports a recovered .pst file on SERVER01 into the user Ayla's primary mailbox. Only data in the .pst file's Inbox is imported. The data is imported into the RecoveredFiles folder of the target mailbox for Ayla.
  
```
New-MailboxImportRequest -Mailbox Ayla -FilePath \\SERVER01\PSTFiles\Recovered.pst -TargetRootFolder "RecoveredFiles" -IncludeFolders "#Inbox#"
```

### Example 2

This example imports a .pst file into Kweku's archive folder. The _TargetRootFolder_ isn't specified; therefore, content is merged under existing folders and new folders are created if they don't already exist in the target folder structure.
  
```
New-MailboxImportRequest User2 -FilePath \\server\share\User1.pst -IsArchive -TargetRootFolder /
```

### Example 3

This example imports all of the .pst files on a shared folder. Each .pst file name is named after a corresponding user's alias. The command creates an import request for all the .pst files and imports the data into the matching mailbox.
  
```
Dir \\SERVER01\PSTshareRO\Recovered\*.pst | %{ New-MailboxImportRequest -Name RecoveredPST -BatchName Recovered -Mailbox $_.BaseName -FilePath $_.FullName -TargetRootFolder SubFolderInPrimary}
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
You need to grant the following permission to the group Exchange Trusted Subsystem to the network share where you want to export or import PST files:
  
- To import PST files from the share: Read permission
    
- To save exported PST files to the share: Read/Write permission.
    
If you don't grant this permission, you will receive an error message stating that Exchange is unable to establish a connection to the PST file on the network share.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AzureBlobStorageAccountUri_ <br/> |Required  <br/> |System.Uri  <br/> |This parameter is available only in the cloud-based service.  <br/> PARAMVALUE: Uri  <br/> |
| _AzureSharedAccessSignatureToken_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> PARAMVALUE: String  <br/> |
| _FilePath_ <br/> |Required  <br/> |Microsoft.Exchange.Data.LongPath  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _FilePath_ parameter specifies the network share path of the .pst file from which data is imported, for example, \\SERVER01\PST Files\ToImport.pst. <br/>  You need to grant the following permission to the group Exchange Trusted Subsystem to the network share where you want to export or import PST files: <br/>  To import PST files from the share: Read permission <br/>  To save exported PST files to the share: Read/Write permission. <br/>  If you don't grant this permission, you will receive an error message stating that Exchange is unable to establish a connection to the PST file on the network share. <br/> |
| _Mailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxLocationIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox or mail-enabled user into which to import contents. You can use the following values: <br/>  Alias <br/>  SMTP address <br/>  Display name <br/> |
| _RemoteFilePath_ <br/> |Required  <br/> |Microsoft.Exchange.Data.LongPath  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoteHostName_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AcceptLargeDataLoss_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _AcceptLargeDataLoss_ switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the _BadItemLimit_ or _LargeItemLimit_ parameters to a value of 51 or higher. Otherwise, the command will fail. <br/> |
| _AssociatedMessagesCopyOption_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.FAICopyOption  <br/> | The _AssociatedMessagesCopyOption_ parameter specifies whether associated messages are copied when the request is processed. Associated messages are special messages that contain hidden data with information about rules, views, and forms. By default, associated messages are copied. This parameter accepts the following values: <br/>  `DoNotCopy`: The associated messages aren't copied.  <br/>  `MapByMessageClass`: This option finds the corresponding associated message by looking up the **MessageClass** attribute of the source message. If there's an associated message of this class in both source and target folders, it overwrites the associated message in the target. If there isn't an associated message in the target, it creates a copy in the target. <br/>  `Copy`: This option copies associated messages from the source to the target. If the same message type exists both in the source and the target location, these associated messages are duplicated. This is the default option.  <br/> > [!NOTE]>  Content filtering doesn't apply to associated messages.          |
| _AzureStatusPublishEndpointInfo_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in the cloud-based service.  <br/> PARAMVALUE: String  <br/> |
| _BadItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _BadItemLimit_ parameter specifies the maximum number of bad items that are allowed before the request fails. Abad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit aremissing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.  <br/> Valid input for this parameter is an integer or the value  `unlimited`. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the **New-MailboxRepairRequest** cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again. <br/> > [!NOTE]> If you set this value to 51 or higher, you also need to use the _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _BatchName_ <br/> |Optional  <br/> |System.String  <br/> |The _BatchName_ parameter specifies a descriptive name for importing a batch of mailboxes. You can use the name in the _BatchName_ parameter as a string search when you use the **Get-MailboxImportRequest** cmdlet. <br/> |
| _CompletedRequestAgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _CompletedRequestAgeLimit_ parameter specifies how long the request will be kept after it has completed before being automatically removed. The default value of the _CompletedRequestAgeLimit_ parameter is 30 days. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ConflictResolutionOption_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.ConflictResolutionOption  <br/> | The _ConflictResolutionOption_ parameter specifies what to do if there are multiple matching messages in the target. Valid values are: <br/>  `ForceCopy` <br/>  `KeepAll` <br/>  `KeepLatestItem` <br/>  `KeepSourceItem` (This is the default value.) <br/>  `KeepTargetItem` <br/>  `UpdateFromSource` <br/> |
| _ContentCodePage_ <br/> |Optional  <br/> |System.Int32  <br/> |The _ContentCodePage_ parameter specifies the specific code page to use for an ANSI pst file. ANSI pst filesare used in Outlook 97 to Outlook 2002. You can find the valid values in the[Code Page Identifiers](https://go.microsoft.com/fwlink/p/?linkId=328514) topic. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ExcludeDumpster_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _ExcludeDumpster_ parameter specifies whether to exclude the Recoverable Items folder. You don't have to include a value with this parameter. If you don't specify this parameter, the Recoverable Items folder is copied with the following subfolders: <br/>  Deletions <br/>  Versions <br/>  Purges <br/> |
| _ExcludeFolders_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ExcludeFolders_ parameter specifies the list of folders to exclude during the import. <br/>  Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax: <br/>  `<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the _SourceRootFolder_ parameter, for example, "MyProjects" or "MyProjects/FY2010". <br/>  `#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example,  `#Inbox#` denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types: <br/>  Inbox <br/>  SentItems <br/>  DeletedItems <br/>  Calendar <br/>  Contacts <br/>  Drafts <br/>  Journal <br/>  Tasks <br/>  Notes <br/>  JunkEmail <br/>  CommunicationHistory <br/>  Voicemail <br/>  Fax <br/>  Conflicts <br/>  SyncIssues <br/>  LocalFailures <br/>  ServerFailures <br/>  If the user creates a personal folder with the same name as a well-known folder and the # symbol surrounding it, you can use a back slash (\) as an escape character to specify that folder. For example, if a user creates a folder named #Notes# and you want to specify that folder, but not the well-known Notes folder, use the following syntax: `\#Notes\#`.  <br/> > [!NOTE]>  Wildcard characters can't be used in folder names.           If the _TargetRootFolder_ parameter isn't specified when the Recoverable Items folder is imported, the recoverable item content is placed in the Recoverable Items folder of the target mailbox or archive. <br/> |
| _IncludeFolders_ <br/> |Optional  <br/> |System.String[]  <br/> | The _IncludeFolders_ parameter specifies the list of folders to include during the import. <br/>  Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax: <br/>  `<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the _SourceRootFolder_ parameter, for example, "MyProjects" or "MyProjects/FY2010". <br/>  `#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example,  `#Inbox#` denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types: <br/>  Inbox <br/>  SentItems <br/>  DeletedItems <br/>  Calendar <br/>  Contacts <br/>  Drafts <br/>  Journal <br/>  Tasks <br/>  Notes <br/>  JunkEmail <br/>  CommunicationHistory <br/>  Voicemail <br/>  Fax <br/>  Conflicts <br/>  SyncIssues <br/>  LocalFailures <br/>  ServerFailures <br/>  If the user creates a personal folder with the same name as a well-known folder and the # symbol surrounding it, you can use a back slash (\) as an escape character to specify that folder. For example, if a user creates a folder named #Notes# and you want to specify that folder, but not the well-known Notes folder, use the following syntax: `\#Notes\#`.  <br/> > [!NOTE]>  Wildcard characters can't be used in folder names.          |
| _InternalFlags_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MailboxReplication.RequestBase.InternalMrsFlag[]  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _InternalFlags_ parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes. <br/> |
| _IsArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IsArchive_ switch specifies that you're importing the .pst file into the user's archive. You don't need to specify a value with this switch. <br/> |
| _LargeItemLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _LargeItemLimit_ parameter specifies the maximum number of large items that are allowed before the request fails. Alarge item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used. <br/>  For more information about maximum message size values, see the following topics: <br/>  Exchange 2016:[Message size limits in Exchange 2016](https://technet.microsoft.com/library/bb124345.aspx) <br/>  Exchange Online:[Exchange Online Limits](https://go.microsoft.com/fwlink/p/?LinkId=524926) <br/>  Valid input for this parameter is an integer or the value `unlimited`. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.  <br/> > [!NOTE]>  If you set this value to 51 or higher, you also need to use the _AcceptLargeDataLoss_ switch. Otherwise, the command will fail.          |
| _MigrationMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MRSContentFilterSasUri_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the specific request for tracking and display purposes. Because you can have multiple import requests per mailbox, Exchange precedes the name with the mailbox's alias. For example, if you create an import request for a user's mailbox that has the alias Kweku and specify the value of this parameter as PC1toArchive, the identity of this import request is Kweku\PC1toArchive. <br/> If you don't specify a name using this parameter, Exchange generates up to 10 request names per mailbox, which is MailboxImport _X_ (where _X_ = 0-9). The identity of the request is displayed and searchable as < _alias_>\MailboxImport _X_.  <br/> |
| _Priority_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestPriority  <br/> |The _Priority_ parameter specifies the order in which this request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. <br/> |
| _RemoteCredential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _RemoteCredential_ parameter specifies the credentials of an administrator who has permission to perform the mailbox import request. <br/> This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _RequestExpiryInterval_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> | The _RequestExpiryInterval_ parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter: <br/>  The completed request is automatically removed based on the _CompletedRequestAgeLimit_ parameter value. <br/>  If the request fails, you need to manually remove it by using the corresponding **Remove-\*Request** cmdlet. <br/>  To specify a value, enter it as a time span: `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/>  When you use the value `Unlimited`, the completed request isn't automatically removed.  <br/> |
| _SkipMerging_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.SkippableMergeComponent[]  <br/> |The _SkipMerging_ parameter specifies steps in the import that should be skipped. This parameter is used primarily for debugging purposes. <br/> |
| _SourceEndpoint_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Migration.MigrationService.Endpoint.MigrationEndpointIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SourceRootFolder_ <br/> |Optional  <br/> |System.String  <br/> |The _SourceRootFolder_ parameter specifies the root folder of the .pst file from which data is imported. When specified, the folder hierarchy outside the value of the _SourceRootFolder_ parameter isn't imported, and the _SourceRootFolder_ parameter is mapped to the _TargetRootFolder_ parameter. If this parameter isn't specified, the command imports all folders. <br/> |
| _Suspend_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Suspend_ switch specifies whether to suspend the request. If you use this switch, the request is queued, but the request won't reach the status of **InProgress** until you resume the request with the relevant resume cmdlet. You don't have to specify a value with this switch. <br/> |
| _SuspendComment_ <br/> |Optional  <br/> |System.String  <br/> |The _SuspendComment_ parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the _Suspend_ parameter. <br/> |
| _TargetRootFolder_ <br/> |Optional  <br/> |System.String  <br/> |The _TargetRootFolder_ parameter specifies the top-level mailbox folder that the imported content is placed in. If you don't specify this parameter, the command imports folders to the top of the folder structure in the target mailbox or archive. If the folder already exists, content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WorkloadType_ <br/> |Optional  <br/> |Microsoft.Exchange.MailboxReplicationService.RequestWorkloadType  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _WorkloadType_ parameter is reserved for internal Microsoft use. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

