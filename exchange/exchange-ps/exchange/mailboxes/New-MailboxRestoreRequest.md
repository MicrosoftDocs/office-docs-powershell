---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-MailboxRestoreRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-MailboxRestoreRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailboxRestoreRequest cmdlet to restore a soft-deleted or disconnected mailbox. This cmdlet starts the process of moving content from the soft-deleted mailbox, disabled mailbox, or any mailbox in a recovery database into a connected primary or archive mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
New-MailboxRestoreRequest -SourceDatabase <DatabaseIdParameter> -SourceStoreMailbox <StoreMailboxIdParameter>
 -TargetMailbox <MailboxOrMailUserIdParameter> [-AcceptLargeDataLoss] [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <DoNotCopy | MapByMessageClass | Copy>] [-BadItemLimit <Unlimited>]
 [-BatchName <String>] [-Confirm] [-ConflictResolutionOption <KeepSourceItem | KeepLatestItem | KeepAll>]
 [-DomainController <Fqdn>] [-ExcludeDumpster] [-ExcludeFolders <String[]>] [-IncludeFolders <String[]>]
 [-MRSServer <Fqdn>] [-Name <String>] [-Priority <Normal | High>] [-SourceRootFolder <String>] [-Suspend]
 [-SuspendComment <String>] [-TargetIsArchive] [-TargetRootFolder <String>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-MailboxRestoreRequest -RemoteDatabaseGuid <Guid> -RemoteHostName <Fqdn>
 -RemoteRestoreType <None | RecoveryDatabase | DisconnectedMailbox | SoftDeletedRecipient>
 -SourceStoreMailbox <StoreMailboxIdParameter> -TargetMailbox <MailboxOrMailUserIdParameter>
 [-AcceptLargeDataLoss] [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <DoNotCopy | MapByMessageClass | Copy>] [-BadItemLimit <Unlimited>]
 [-BatchName <String>] [-CompletedRequestAgeLimit <Unlimited>] [-Confirm]
 [-ConflictResolutionOption <KeepSourceItem | KeepLatestItem | KeepAll>] [-DomainController <Fqdn>]
 [-ExcludeDumpster] [-ExcludeFolders <String[]>] [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>] [-Name <String>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>]
 [-RemoteCredential <PSCredential>] [-SkipMerging <SkippableMergeComponent[]>] [-SourceRootFolder <String>]
 [-Suspend] [-SuspendComment <String>] [-TargetIsArchive] [-TargetRootFolder <String>] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-RequestExpiryInterval <Unlimited>] [-TargetType <Primary | Archive | MailboxLocation>] [<CommonParameters>]
```

### Set1
```
New-MailboxRestoreRequest -SourceDatabase <DatabaseIdParameter> -SourceStoreMailbox <StoreMailboxIdParameter>
 -TargetMailbox <MailboxOrMailUserIdParameter> [-AcceptLargeDataLoss] [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <DoNotCopy | MapByMessageClass | Copy>] [-BadItemLimit <Unlimited>]
 [-BatchName <String>] [-CompletedRequestAgeLimit <Unlimited>] [-Confirm]
 [-ConflictResolutionOption <KeepSourceItem | KeepLatestItem | KeepAll>] [-DomainController <Fqdn>]
 [-ExcludeDumpster] [-ExcludeFolders <String[]>] [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>] [-Name <String>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>]
 [-SkipMerging <SkippableMergeComponent[]>] [-SourceRootFolder <String>] [-Suspend] [-SuspendComment <String>]
 [-TargetIsArchive] [-TargetRootFolder <String>] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-RequestExpiryInterval <Unlimited>] [-TargetType <Primary | Archive | MailboxLocation>] [<CommonParameters>]
```

### Set3
```
New-MailboxRestoreRequest -SourceMailbox <MailboxLocationIdParameter>
 -TargetMailbox <MailboxLocationIdParameter> [-AcceptLargeDataLoss] [-AllowLegacyDNMismatch]
 [-AssociatedMessagesCopyOption <DoNotCopy | MapByMessageClass | Copy>] [-BadItemLimit <Unlimited>]
 [-BatchName <String>] [-CompletedRequestAgeLimit <Unlimited>] [-Confirm]
 [-ConflictResolutionOption <KeepSourceItem | KeepLatestItem | KeepAll | UpdateFromSource | ForceCopy | KeepTargetItem>]
 [-DomainController <Fqdn>] [-ExcludeDumpster] [-ExcludeFolders <String[]>] [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>] [-Name <String>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>]
 [-RequestExpiryInterval <Unlimited>] [-SkipMerging <SkippableMergeComponent[]>] [-SourceIsArchive]
 [-SourceRootFolder <String>] [-Suspend] [-SuspendComment <String>] [-TargetIsArchive]
 [-TargetRootFolder <String>] [-TargetType <Primary | Archive | MailboxLocation>] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport | XO1Migration | CrossResourceForest | ShadowSync | XrmSharing | ThirdPartyContactSync>]
 [<CommonParameters>]
```

## DESCRIPTION
When mailboxes are moved from one database to another, Exchange doesn't fully delete the mailbox from the source database immediately upon completion of the move. Instead, the mailbox in the source mailbox database is switched to a soft-deleted state, which allows mailbox data to be accessed during a mailbox restore operation by using the new MailboxRestoreRequest cmdlet set. The soft-deleted mailboxes are retained in the source database until either the deleted mailbox retention period expires or you use the Remove-StoreMailbox cmdlet to purge the mailbox.

To view soft-deleted mailboxes, run the Get-MailboxStatistics cmdlet against a database and look for results that have a DisconnectReason with a value of SoftDeleted. For more information, see Example 1 later in this topic.

A mailbox is marked as Disabled a short time after the Disable-Mailbox or Remove-Mailbox command completes.

The mailbox won't be marked as Disabled until the Microsoft Exchange Information Store service determines that Active Directory has been updated with the disabled mailbox's information. You can expedite the process by running the Update-StoreMailboxState cmdlet against that database.

Exchange retains disabled mailboxes in the mailbox database based on the deleted mailbox retention settings configured for that mailbox database. After the specified period of time, the mailbox is permanently deleted.

To view disabled mailboxes, run the Get-MailboxStatistics cmdlet against a database and look for results that have a DisconnectReason with a value of Disabled. For more information, see Example 1 later in this topic.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxStatistics -Database MBD01 | Where {$_.DisconnectReason -eq "SoftDeleted" -or $_.DisconnectReason -eq "Disabled"} | Format-List LegacyDN, DisplayName, MailboxGUID, DisconnectReason
```

To create a restore request, you must provide the DisplayName, LegacyDN, or MailboxGUID for the soft-deleted or disabled mailbox.

This example uses the Get-MailboxStatistics cmdlet to return the DisplayName, LegacyDN, MailboxGUID, and DisconnectReason for all mailboxes on mailbox database MBD01 that have a disconnect reason of SoftDeleted or Disabled.

### -------------------------- Example 2 --------------------------
```
New-MailboxRestoreRequest -SourceDatabase "MBD01" -SourceStoreMailbox 1d20855f-fd54-4681-98e6-e249f7326ddd -TargetMailbox Ayla
```

This example restores the source mailbox with the MailboxGUID 1d20855f-fd54-4681-98e6-e249f7326ddd on mailbox database MBD01 to the target mailbox with the alias Ayla.

### -------------------------- Example 3 --------------------------
```
New-MaiboxRestoreRequest -SourceDatabase "MBD01" -SourceStoreMailbox "Tony Smith" -TargetMailbox Tony@contoso.com -TargetIsArchive
```

This example restores the content of the source mailbox with the DisplayName of Tony Smith on mailbox database MBD01 to the archive mailbox for Tony@contoso.com.

## PARAMETERS

### -SourceDatabase
This parameter is available only in on-premises Exchange.

The SourceDatabase parameter specifies the identity of the database from which you're restoring the soft-deleted or disconnected mailbox.

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceStoreMailbox
This parameter is available only in on-premises Exchange.

The SourceStoreMailbox parameter specifies the MailboxGUID of the source mailbox that you want to restore content from.

You can find the MailboxGUID by running the Get-MailboxStatistics cmdlet.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: (All), Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox
The TargetMailbox parameter specifies the GUID of the target mailbox or mail user where you want to restore content to. The target mailbox or mail user needs to exist before you can run this command successfully.

You can find the GUID value for the mailbox or mail user by running the Get-Mailbox or Get-MailUser cmdlets.

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the BadItemLimit or LargeItemLimit parameters to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLegacyDNMismatch
The AllowLegacyDNMismatch switch specifies that the operation should continue if the LegacyExchangeDN of the source physical mailbox and the target mailbox don't match. You don't need to specify a value with this switch.

By default, this cmdlet checks to make sure that the LegacyExchangeDN on the source physical mailbox is present on the target user in the form of the LegacyExchangeDN or an X500 proxy address that corresponds to the LegacyExchangeDN. This check prevents you from accidentally restoring a source mailbox into the incorrect target mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssociatedMessagesCopyOption
The AssociatedMessagesCopyOption parameter specifies whether associated messages are copied when the request is processed. Associated messages are special messages that contain hidden data with information about rules, views, and forms. By default, associated messages are copied. This parameter accepts the following values:

- DoNotCopy: The associated messages aren't copied. This is the default option.

- MapByMessageClass: This option finds the corresponding associated message by looking up the MessageClass attribute of the source message. If there's an associated message of this class in both source and target folders, it overwrites the associated message in the target. If there isn't an associated message in the target, it creates a copy in the target.

- Copy: This option copies associated messages from the source to the target. If the same message type exists both in the source and the target location, these associated messages are duplicated.

Content filtering doesn't apply to associated messages.

```yaml
Type: DoNotCopy | MapByMessageClass | Copy
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies a descriptive name for restoring a batch of mailboxes. You can use the name in the BatchName parameter as a string search when you use the Get-MailboxRestoreRequest cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Type: KeepSourceItem | KeepLatestItem | KeepAll
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFolders
The ExcludeFolders parameter specifies the list of folders to exclude during the restore request.

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

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeFolders
The IncludeFolders parameter specifies the list of folder to include during the restore request.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the specific request for tracking and display purposes. Because you can have multiple restore requests per mailbox, Exchange precedes the name with the mailbox's alias. For example, if you create an export request for a user's mailbox that has the alias Kweku and specify the value of this parameter as RestoreFailedMoves, the identity of this export request is Kweku\\RestoreFailedMoves.

If you didn't specify a name for the restore request when it was created, Exchange automatically generates the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
This parameter is available only in on-premises Exchange.

The Priority parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are:

- Lowest

- Lower

- Low

- Normal (This is the default value.)

- High

- Higher

- Highest

- Emergency

```yaml
Type: Normal | High
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceRootFolder
The SourceRootFolder parameter specifies the root folder of the mailbox from which data is restored. If this parameter isn't specified, the command restores all folders.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetIsArchive
The TargetIsArchive parameter specifies that the content is restored into the specified target mailbox's archive.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetRootFolder
The TargetRootFolder parameter specifies the top-level folder in which to restore data. If you don't specify this parameter, the command restores folders to the top of the folder structure in the target mailbox or archive. Content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDatabaseGuid
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteRestoreType
This parameter is reserved for internal Microsoft use.

```yaml
Type: None | RecoveryDatabase | DisconnectedMailbox | SoftDeletedRecipient
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the status of a completed restore request is set to Completed. If this parameter is set to a value of 0, the status is cleared immediately instead of being changed to Completed.

```yaml
Type: Unlimited
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: Message size limits in Exchange 2016 (https://technet.microsoft.com/library/bb124345.aspx)

- Exchange Online: Exchange Online Limits (https://go.microsoft.com/fwlink/p/?LinkId=524926)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
This parameter is reserved for internal Microsoft use.

```yaml
Type: PSCredential
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
This parameter is available only in on-premises Exchange.

The SkipMerging parameter specifies folder-related items to skip when restoring the mailbox. Use one of the following values:

- FolderRules

- FolderACLs

- InitialConnectionValidation

Use this parameter only if a restore request fails because of folder rules, folder access control lists (ACLs), or initial connection validation.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType
This parameter is available only in on-premises Exchange.

The WorkloadType parameter is reserved for internal Microsoft use.

```yaml
Type: None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceMailbox
The SourceMailbox parameter specifies the soft-deleted mailbox that you want to restore. The best way to identify the soft-deleted mailbox is by its GUID value. You can find the GUID value by running the following command: Get-Mailbox -SoftDeletedMailbox.

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval
This parameter is available only in on-premises Exchange.

The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.

- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceIsArchive
The SourceIsArchive switch specifies that the source mailbox is an archive mailbox. You can use this switch only with the SourceMailbox parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetType
The TargetType parameter specifies the type of mailbox that's the target for the restore operation. Valid values are:

- Archive

- MailboxLocation

- Primary (This is the default value)

```yaml
Type: Primary | Archive | MailboxLocation
Parameter Sets: Set2, Set1, Set3
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/0b67defd-3c6c-4470-acfa-7f22a6c1d2bd.aspx)
