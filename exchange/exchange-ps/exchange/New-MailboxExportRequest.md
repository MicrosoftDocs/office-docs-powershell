---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-mailboxexportrequest
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: New-MailboxExportRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-MailboxExportRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-MailboxExportRequest cmdlet to begin the process of exporting contents of a primary mailbox or archive to a .pst file.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Mailbox (Default)
```
New-MailboxExportRequest [-Mailbox] <MailboxOrMailUserIdParameter> -FilePath <LongPath>
 [-AcceptLargeDataLoss]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
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

### MailboxExportRequest
```
New-MailboxExportRequest [-Mailbox] <MailboxLocationIdParameter> -FilePath <LongPath>
 [-AcceptLargeDataLoss]
 [-AssociatedMessagesCopyOption <FAICopyOption>]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ConflictResolutionOption <ConflictResolutionOption>]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-DomainController <Fqdn>]
 [-ExcludeDumpster]
 [-ExcludeFolders <String[]>]
 [-IncludeFolders <String[]>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-IsArchive]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-Priority <RequestPriority>]
 [-RemoteCredential <PSCredential>]
 [-RemoteHostName <Fqdn>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-SourceRootFolder <String>]
 [-Suspend]
 [-SuspendComment <String>]
 [-TargetRootFolder <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

### MailboxComplianceExportRequest
```
New-MailboxExportRequest [-Mailbox] <MailboxLocationIdParameter> -ComplianceStorePath <String> -RemoteCredential <PSCredential>
 [-AcceptLargeDataLoss]
 [-BadItemLimit <Unlimited>]
 [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm]
 [-ContentFilter <String>]
 [-ContentFilterLanguage <CultureInfo>]
 [-DomainController <Fqdn>]
 [-InternalFlags <InternalMrsFlag[]>]
 [-IsArchive]
 [-LargeItemLimit <Unlimited>]
 [-Name <String>]
 [-PreferredMessageFormat <MessageCopyFormat>]
 [-Priority <RequestPriority>]
 [-RequestExpiryInterval <Unlimited>]
 [-SkipMerging <SkippableMergeComponent[]>]
 [-Suspend]
 [-SuspendComment <String>]
 [-WhatIf]
 [-WorkloadType <RequestWorkloadType>]
 [<CommonParameters>]
```

## DESCRIPTION
You can create more than one mailbox export request per mailbox, and each mailbox export request must have a unique name. Microsoft Exchange automatically generates up to 10 unique names for a mailbox export request. However, to create more than 10 export requests for a mailbox, you need to specify a unique name when creating the export request. You can remove existing export requests with the Remove-MailboxExportRequest cmdlet before starting a new request with the default request name `<alias>\MailboxExportX` (where X = 0-9).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

You need to grant the following permission to the group Exchange Trusted Subsystem to the network share where you want to export or import PST files:

- To import PST files from the share: Read permission
- To save exported PST files to the share: Read/Write permission.

If you don't grant this permission, you will receive an error message stating that Exchange is unable to establish a connection to the PST file on the network share.

## EXAMPLES

### Example 1
```powershell
New-MailboxExportRequest -Mailbox AylaKol -FilePath "\\SERVER01\PSTFileShare\Ayla_Recovered.pst"
```

This example exports the user Ayla Kol's primary mailbox to a .pst file on the network shared folder PSTFileShare on SERVER01.

### Example 2
```powershell
New-MailboxExportRequest -Mailbox Kweku -FilePath "\\SERVER01\PSTFileShare\Kweku_Archive.pst" -IsArchive
```

This example exports the user Kweku's archive to a .pst file on the network shared folder PSTFileShare on SERVER01.

### Example 3
```powershell
New-MailboxExportRequest -Mailbox Tony -ContentFilter "(Body -like '*company*') -and (body -like '*profit*') -and (Received -lt '01/01/2018')" -FilePath "\\SERVER01\PSTFileShare\Tony_CompanyProfits.pst"
```

This example exports messages that contain the words "company" and "profit" in the body of the message for the user Tony received before January 1, 2018.

### Example 4
```powershell
New-MailboxExportRequest -Mailbox Kweku -IncludeFolders "#Inbox#" -FilePath \\SERVER01\PSTFileShare\Kweku\InPlaceHold.pst
```

This example exports all messages from Kweku's Inbox to the .pst file InPlaceHold.

## PARAMETERS

### -Mailbox
The Mailbox parameter specifies the source mailbox where the contents are being exported from.

In Exchange 2016 CU7 or later, this parameter is the type MailboxLocationIdParameter, so the easiest value that you can use to identify the mailbox is the Alias value.

In Exchange 2016 CU6 or earlier, this parameter is the type MailboxOrMailUserIdParameter, so you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
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
Parameter Sets: MailboxExportRequest, MailboxComplianceExportRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ComplianceStorePath
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: MailboxComplianceExportRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilePath
The FilePath parameter specifies the network share path of the .pst file to which data is exported, for example, \\\\SERVER01\\PST Files\\exported.pst.

You need to grant the following permission to the group Exchange Trusted Subsystem to the network share where you want to export or import PST files:

- To import PST files from the share: Read permission
- To save exported PST files to the share: Read/Write permission.

If you don't grant this permission, you will receive an error message stating that Exchange is unable to establish a connection to the PST file on the network share.

```yaml
Type: LongPath
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
This parameter is reserved for internal Microsoft use.

```yaml
Type: PSCredential
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: PSCredential
Parameter Sets: MailboxComplianceExportRequest
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You don't need to specify a value with this switch.

In Exchange 2013 or later, you need to use this switch if you set the LargeItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

In Exchange 2010, you need to use this switch if you set the BadItemLimit parameter to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

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
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

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

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies a descriptive name for exporting a batch of mailboxes. You can use the name in the BatchName parameter as a string search when you use the Get-MailboxExportRequest cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request will be kept after it has completed before being automatically removed. The default CompletedRequestAgeLimit is 30 days.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

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
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFilter
**Important**: You can't use this parameter to export between two dates. If you try, you'll get system convert errors. You can export from a specific date, or export to a specific date, but not both.

The ContentFilter parameter uses OPATH filter syntax to filter the results by the specified properties and values. Only contents that match the ContentFilter parameter will be exported into the .pst file. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For filterable properties, see [Filterable properties for the ContentFilter parameter](https://learn.microsoft.com/exchange/filterable-properties-for-the-contentfilter-parameter).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentFilterLanguage
The ContentFilterLanguage parameter specifies the language being used in the ContentFilter parameter for string searches.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDumpster
The ExcludeDumpster switch specifies whether to exclude the Recoverable Items folder. You don't need to specify a value with this switch.

If you don't use this switch, the Recoverable Items folder is copied with the following subfolders:

- Deletions
- Versions
- Purges

```yaml
Type: SwitchParameter
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFolders
The ExcludeFolders parameter specifies the list of folders to exclude during the export.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

`<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, "MyProjects" or "MyProjects/FY2010".

`#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

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

If the user creates a personal folder with the same name as a well-known folder and the \# symbol surrounding it, you can use a backslash (\\) as an escape character to specify that folder. For example, if a user creates a folder named \#Notes\# and you want to specify that folder instead of the well-known Notes folder, use the following syntax: `\#Notes\#`.

Wildcard characters can't be used in folder names.

To exclude the Recoverable Items folder, you must use the ExcludeDumpster parameter.

```yaml
Type: String[]
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeFolders
The IncludeFolders parameter specifies the list of folders to include during the export.

Folder names aren't case-sensitive, and there are no character restrictions. Use the following syntax:

`<FolderName>/*`: Use this syntax to denote a personal folder under the folder specified in the SourceRootFolder parameter, for example, "MyProjects" or "MyProjects/FY2010".

`#<FolderName>#/*`: Use this syntax to denote a well-known folder regardless of the folder's name in another language. For example, \#Inbox\# denotes the Inbox folder even if the Inbox is localized in Turkish, which is Gelen Kutusu. Well-known folders include the following types:

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

If the user creates a personal folder with the same name as a well-known folder and the \# symbol surrounding it, you can use a backslash (\\) as an escape character to specify that folder. For example, if a user creates a folder named \#Notes\# and you want to specify that folder instead of the well-known Notes folder, use the following syntax: `\#Notes\#`.

Wildcard characters can't be used in folder names.

The Recoverable Items folder is always included if you don't use the ExcludeDumpster parameter, regardless of the list of folders you provide.

```yaml
Type: String[]
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalFlags
The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsArchive
The IsArchive switch specifies that you're exporting from the user's archive. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: [Message size limits in Exchange Server](https://learn.microsoft.com/Exchange/mail-flow/message-size-limits)
- Exchange Online: [Exchange Online Limits](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MRSServer
This parameter is available only in Exchange Server 2010.

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
The Name parameter specifies the name of the specific request for tracking and display purposes. Because you can have multiple export requests per mailbox, Exchange precedes the name with the mailbox's alias. For example, if you create an export request for a user's mailbox that has the alias Kweku and specify the value of this parameter as PC1toArchive, the identity of this export request is Kweku\\PC1toArchive.

If you don't specify a name using this parameter, Exchange generates up to 10 request names per mailbox, which is MailboxExportX (where X = 0-9). The identity of the request is displayed and searchable as `<alias>\MailboxExportX`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMessageFormat
This parameter is reserved for internal Microsoft use.

```yaml
Type: MessageCopyFormat
Parameter Sets: MailboxComplianceExportRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are:

- Lower
- Low
- Normal (This is the default value.)
- High
- Higher
- Highest
- Emergency

```yaml
Type: RequestPriority
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteHostName
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

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
Parameter Sets: MailboxComplianceExportRequest, MailboxExportRequest
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
The SkipMerging parameter specifies steps in the export that should be skipped. This parameter is used primarily for debugging purposes.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceRootFolder
The SourceRootFolder parameter specifies the root folder of the mailbox from which data is exported. If this parameter isn't specified, the command exports all folders.

```yaml
Type: String
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
The Suspend switch specifies whether to suspend the request. You don't need to specify a value with this switch.

If you use this switch, the request is queued, but the request won't reach the status of InProgress until you resume the request with the relevant resume cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetRootFolder
The TargetRootFolder parameter specifies the top-level folder in which to export data. If you don't specify this parameter, the command exports folders to the top of the folder structure in the target .pst file. Content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure.

```yaml
Type: String
Parameter Sets: Mailbox, MailboxExportRequest
Aliases:

Required: True
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType
This parameter is reserved for internal Microsoft use.

```yaml
Type: RequestWorkloadType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
