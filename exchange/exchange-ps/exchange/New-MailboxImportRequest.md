---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-mailboximportrequest
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-MailboxImportRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-MailboxImportRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailboxImportRequest cmdlet to begin the process of importing a .pst file to a mailbox or archive.

NOTE: This cmdlet is no longer supported in Exchange Online. To import a .pst file in Exchange Online, see [Use network upload to import PST files](https://docs.microsoft.com/microsoft-365/compliance/use-network-upload-to-import-pst-files).

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://docs.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Mailbox
```
New-MailboxImportRequest [-Mailbox] <MailboxOrMailUserIdParameter> -FilePath <LongPath>
 [-AcceptLargeDataLoss]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentCodePage <Int32>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-IsArchive]
 [-LargeItemLimit <Unlimited>]
 [-MRSServer <Fqdn>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RemoteCredential <PSCredential>]
 [-RemoteHostName <Fqdn>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MailboxImportRequest
```
New-MailboxImportRequest [-Mailbox] <MailboxLocationIdParameter> -FilePath <LongPath>
 [-AcceptLargeDataLoss]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentCodePage <Int32>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-IsArchive]
 [-LargeItemLimit <Unlimited>]
 [-MigrationMailbox <MailboxIdParameter>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### AzureImportRequest
```
New-MailboxImportRequest [-Mailbox] <MailboxLocationIdParameter> -AzureBlobStorageAccountUri <Uri> -AzureSharedAccessSignatureToken <String>
 [-AcceptLargeDataLoss]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-AzureStatusPublishEndpointInfo <String>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentCodePage <Int32>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-IsArchive]
 [-LargeItemLimit <Unlimited>]
 [-MigrationMailbox <MailboxIdParameter>]
 [-MRSContentFilterSasUri <Uri>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### RemoteRequest
```
New-MailboxImportRequest [-Mailbox] <MailboxLocationIdParameter> -RemoteFilePath <LongPath> -RemoteHostName <Fqdn>
 [-AcceptLargeDataLoss]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentCodePage <Int32>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-IsArchive]
 [-LargeItemLimit <Unlimited>]
 [-MigrationMailbox <MailboxIdParameter>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RemoteCredential <PSCredential>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceEndpoint <MigrationEndpointIdParameter>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

## DESCRIPTION
You can create more than one mailbox import request per mailbox and each mailbox import request must have a unique name. Microsoft Exchange automatically generates up to 10 unique names for a mailbox import request. However, to create more than 10 import requests for a mailbox, you need to specify a unique name when creating the import request, or you can remove existing import requests with the Remove-MailboxExportRequest cmdlet before starting a new import request with the default request \<Alias\>\\MailboxImportX (where X = 0-9).

By default, the import checks for duplication of items and doesn't copy the data from the .pst file into the mailbox or archive if a matching item exists in the target mailbox or target archive.

In on-premises Exchange, you need to grant the following permission to the group Exchange Trusted Subsystem to the network share where you want to export or import PST files:

- To import PST files from the share: Read permission

- To save exported PST files to the share: Read/Write permission.

If you don't grant this permission, you will receive an error message stating that Exchange is unable to establish a connection to the PST file on the network share.

## EXAMPLES

### Example 1
```powershell
New-MailboxImportRequest -Mailbox Ayla -FilePath \\SERVER01\PSTFiles\Recovered.pst -TargetRootFolder "RecoveredFiles" -IncludeFolders "#Inbox#"
```

This example imports a recovered .pst file on SERVER01 into the user Ayla's primary mailbox. Only data in the .pst file's Inbox is imported. The data is imported into the RecoveredFiles folder of the target mailbox for Ayla.

### Example 2
```powershell
New-MailboxImportRequest User2 -FilePath \\server\share\User1.pst -IsArchive -TargetRootFolder /
```

This example imports a .pst file into Kweku's archive folder. The TargetRootFolder isn't specified; therefore, content is merged under existing folders and new folders are created if they don't already exist in the target folder structure.

### Example 3
```powershell
Dir \\SERVER01\PSTshareRO\Recovered\*.pst | %{ New-MailboxImportRequest -Name RecoveredPST -BatchName Recovered -Mailbox $_.BaseName -FilePath $_.FullName -TargetRootFolder SubFolderInPrimary}
```

This example imports all of the .pst files on a shared folder. Each .pst file name is named after a corresponding user's alias. The command creates an import request for all the .pst files and imports the data into the matching mailbox.

## PARAMETERS

### -FilePath
This parameter is available only in on-premises Exchange.

The FilePath parameter specifies the network share path of the .pst file from which data is imported, for example, \\\\SERVER01\\PST Files\\ToImport.pst.

You need to grant the following permission to the group Exchange Trusted Subsystem to the network share where you want to export or import PST files:

- To import PST files from the share: Read permission

- To save exported PST files to the share: Read/Write permission.

If you don't grant this permission, you will receive an error message stating that Exchange is unable to establish a connection to the PST file on the network share.

```yaml
Type: LongPath
Parameter Sets: Mailbox, MailboxImportRequest
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the destination mailbox where the content is being imported to.

In Exchange 2016 CU7 or later and Exchange Online, this parameter is the type MailboxLocationIdParameter, so the easiest value that you can use to identify the mailbox is the Alias value.

In Exchange 2016 CU6 or earlier, this parameter is the type MailboxOrMailUserIdParameter, so you can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: MailboxImportRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RemoteFilePath
This parameter is reserved for internal Microsoft use.

```yaml
Type: LongPath
Parameter Sets: RemoteRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteHostName
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: RemoteRequest
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

In Exchange 2013 or later or Exchange Online, you need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

In Exchange 2010, you need to use this switch if you set the BadItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssociatedMessagesCopyOption
The AssociatedMessagesCopyOption parameter specifies whether associated messages are copied when the request is processed. Associated messages are special messages that contain hidden data with information about rules, views, and forms. By default, associated messages are copied. This parameter accepts the following values:

- DoNotCopy: The associated messages aren't copied.

- MapByMessageClass: This option finds the corresponding associated message by looking up the MessageClass attribute of the source message. If there's an associated message of this class in both source and target folders, it overwrites the associated message in the target. If there isn't an associated message in the target, it creates a copy in the target.

- Copy: This option copies associated messages from the source to the target. If the same message type exists both in the source and the target location, these associated messages are duplicated. This is the default option.

Content filtering doesn't apply to associated messages.

```yaml
Type: FAICopyOption
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureBlobStorageAccountUri
This parameter is available only in the cloud-based service.

PARAMVALUE: Uri

```yaml
Type: Uri
Parameter Sets: AzureImportRequest
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureSharedAccessSignatureToken
This parameter is available only in the cloud-based service.

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: AzureImportRequest
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AzureStatusPublishEndpointInfo
This parameter is available only in the cloud-based service.

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: AzureImportRequest
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

In Exchange 2010, if you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies a descriptive name for importing a batch of mailboxes. You can use the name in the BatchName parameter as a string search when you use the Get-MailboxImportRequest cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request will be kept after it has completed before being automatically removed. The default value of the CompletedRequestAgeLimit parameter is 30 days.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConflictResolutionOption
The ConflictResolutionOption parameter specifies what to do if there are multiple matching messages in the target. Valid values are:

- ForceCopy

- KeepAll

- KeepLatestItem

- KeepSourceItem (This is the default value.)

- KeepTargetItem

- UpdateFromSource

```yaml
Type: ConflictResolutionOption
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentCodePage
The ContentCodePage parameter specifies the specific code page to use for an ANSI pst file. ANSI pst filesare used in Outlook 97 to Outlook 2002. You can find the valid values in the [Code Page Identifiers](https://docs.microsoft.com/windows/win32/intl/code-page-identifiers) topic.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDumpster
The ExcludeDumpster parameter specifies whether to exclude the Recoverable Items folder. You don't have to include a value with this parameter. If you don't specify this parameter, the Recoverable Items folder is copied with the following subfolders:

- Deletions

- Versions

- Purges

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFolders
The ExcludeFolders parameter specifies the list of folders to exclude during the import.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

\<FolderName\>/\*: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, "MyProjects" or "MyProjects/FY2010".

\#\<FolderName\>\#/\*: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

- Inbox

- SentItems

- DeletedItems

- Calendar

- Contacts

- Drafts

- Journal

- Tasks

- Notes

- JunkEmail

- CommunicatorHistory

- Voicemail

- Fax

- Conflicts

- SyncIssues

- LocalFailures

- ServerFailures

If the user creates a personal folder with the same name as a well-known folder and the \# symbol surrounding it, you can use a back slash (\\) as an escape character to specify that folder. For example, if a user creates a folder named \#Notes\# and you want to specify that folder, but not the well-known Notes folder, use the following syntax: \\\#Notes\\\#.

Wildcard characters can't be used in folder names.

If the TargetRootFolder parameter isn't specified when the Recoverable Items folder is imported, the recoverable item content is placed in the Recoverable Items folder of the target mailbox or archive.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeFolders
The IncludeFolders parameter specifies the list of folders to include during the import.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

\<FolderName\>/\*: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, "MyProjects" or "MyProjects/FY2010".

\#\<FolderName\>\#/\*: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

- Inbox

- SentItems

- DeletedItems

- Calendar

- Contacts

- Drafts

- Journal

- Tasks

- Notes

- JunkEmail

- CommunicationHistory

- Voicemail

- Fax

- Conflicts

- SyncIssues

- LocalFailures

- ServerFailures

If the user creates a personal folder with the same name as a well-known folder and the \# symbol surrounding it, you can use a back slash (\\) as an escape character to specify that folder. For example, if a user creates a folder named \#Notes\# and you want to specify that folder, but not the well-known Notes folder, use the following syntax: \\\#Notes\\\#.

Wildcard characters can't be used in folder names.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalFlags
This parameter is available only in on-premises Exchange.

The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsArchive
The IsArchive switch specifies that you're importing the .pst file into the user's archive. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://docs.microsoft.com/Exchange/mail-flow/message-size-limits)

- Exchange Online: [Exchange Online Limits](https://docs.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

**Note**: This parameter is being deprecated in the cloud-based service. In the future, if you don't use this parameter, Skipped Item approval semantics will be used instead.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationMailbox
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: AzureImportRequest, MailboxImportRequest, RemoteRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSContentFilterSasUri
This parameter is reserved for internal Microsoft use.

```yaml
Type: Uri
Parameter Sets: AzureImportRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSServer
This parameter is available or functional only in Exchange Server 2010.

The MRSServer parameter specifies the FQDN of the Client Access server on which the instance of the Microsoft Exchange Mailbox Replication service (MRS) is running. This parameter is used for debugging purposes only. Use this parameter only if directed by support personnel.

```yaml
Type: Fqdn
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the specific request for tracking and display purposes. Because you can have multiple import requests per mailbox, Exchange precedes the name with the mailbox's alias. For example, if you create an import request for a user's mailbox that has the alias Kweku and specify the value of this parameter as PC1toArchive, the identity of this import request is Kweku\\PC1toArchive.

If you don't specify a name using this parameter, Exchange generates up to 10 request names per mailbox, which is MailboxImportX (where X = 0-9). The identity of the request is displayed and searchable as \<alias\>\\MailboxImportX.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies the order in which this request should be processed in the request queue. Requests are processed in order, based on server health, status, priority and last update time.

```yaml
Type: RequestPriority
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
This parameter is available only in on-premises Exchange.

The RemoteCredential parameter specifies the credentials of an administrator who has permission to perform the mailbox import request.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://docs.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: Mailbox, RemoteRequest
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval
The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.

- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: AzureImportRequest, MailboxImportRequest, RemoteRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
The SkipMerging parameter specifies steps in the import that should be skipped. This parameter is used primarily for debugging purposes.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint
This parameter is reserved for internal Microsoft use.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: AzureImportRequest, MailboxImportRequest, RemoteRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceRootFolder
The SourceRootFolder parameter specifies the root folder of the .pst file from which data is imported. When specified, the folder hierarchy outside the value of the SourceRootFolder parameter isn't imported, and the SourceRootFolder parameter is mapped to the TargetRootFolder parameter. If this parameter isn't specified, the command imports all folders.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
The Suspend switch specifies whether to suspend the request. If you use this switch, the request is queued, but the request won't reach the status of InProgress until you resume the request with the relevant resume cmdlet. You don't have to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendComment
The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetRootFolder
The TargetRootFolder parameter specifies the top-level mailbox folder that the imported content is placed in. If you don't specify this parameter, the command imports folders to the top of the folder structure in the target mailbox or archive. If the folder already exists, content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RequestWorkloadType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
