---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
title: New-ComplianceSearchAction
schema: 2.0.0
monikerRange: "exchserver-ps-2016 || exchserver-ps-2019 || o365scc-ps"
---

# New-ComplianceSearchAction

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ComplianceSearchAction cmdlet to create actions for content searches in Exchange Server and in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Export
```
New-ComplianceSearchAction [-SearchName] <String[]> [-Export]
 [-ActionName <String>]
 [-ArchiveFormat <ComplianceExportArchiveFormat>]
 [-Confirm]
 [-FileTypeExclusionsForUnindexedItems <String[]>]
 [-EnableDedupe <Boolean>]
 [-ExchangeArchiveFormat <ComplianceExportArchiveFormat>]
 [-Force]
 [-Format <ComplianceDataTransferFormat>]
 [-IncludeCredential]
 [-IncludeSharePointDocumentVersions <Boolean>]
 [-JobOptions <Int32>]
 [-NotifyEmail <String>]
 [-NotifyEmailCC <String>]
 [-ReferenceActionName <String>]
 [-Region <String>]
 [-Report]
 [-RetentionReport]
 [-RetryOnError]
 [-Scenario <ComplianceSearchActionScenario>]
 [-Scope <ComplianceExportScope>]
 [-SearchNames <String[]>]
 [-SharePointArchiveFormat <ComplianceExportArchiveFormat>]
 [-Version <String>]
 [-WhatIf] [<CommonParameters>]
```

### Preview
```
New-ComplianceSearchAction [-SearchName] <String[]> [-Preview]
 [-ActionName <String>]
 [-Confirm]
 [-Force]
 [-Format <ComplianceDataTransferFormat>]
 [-IncludeCredential] [-JobOptions <Int32>]
 [-ReferenceActionName <String>]
 [-Region <String>]
 [-RetryOnError]
 [-Scenario <ComplianceSearchActionScenario>]
 [-SearchNames <String[]>]
 [-Version <String>]
 [-WhatIf] [<CommonParameters>]
```

### Purge
```
New-ComplianceSearchAction [-SearchName] <String[]> [-Purge]
 [-ActionName <String>]
 [-Confirm]
 [-Force]
 [-Format <ComplianceDataTransferFormat>]
 [-IncludeCredential]
 [-JobOptions <Int32>]
 [-PurgeType <ComplianceDestroyType>]
 [-Region <String>]
 [-ReferenceActionName <String>]
 [-RetryOnError]
 [-Scenario <ComplianceSearchActionScenario>]
 [-SearchNames <String[]>]
 [-Version <String>]
 [-WhatIf]] [<CommonParameters>]
```

## DESCRIPTION
After you create a content search using the New-ComplianceSearch cmdlet and run it using the Start-ComplianceSearch cmdlet, you assign a search action to the search using the New-ComplianceSearchAction cmdlet.

In on-premises Exchange, this cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ComplianceSearchAction -SearchName "Project X" -Preview
```

This example creates a preview search action for the content search named Project X.

### -------------------------- Example 2 --------------------------
```
New-ComplianceSearchAction -SearchName "Project X" -Export
```

This example creates an export search action for the content search named Project X.

### -------------------------- Example 3 --------------------------
```
New-ComplianceSearchAction -SearchName "Remove Phishing Message" -Purge -PurgeType SoftDelete
```

This example deletes the search results returned by a content search named Remove Phishing Message. Note that unindexed items aren't deleted when you use the Purge parameter.

### -------------------------- Example 4 --------------------------

```
New-ComplianceSearchAction -SearchName "Case 321 All Sites" -Export -SharePointArchiveFormat SingleZip
```

This example exports the results returned by the content search named "Case 321 All Sites". The search results are compressed and exported to a single ZIP file. If the search included any Exchange locations, the search results are exported as one PST file per mailbox (the default value of the ExchangeArchiveFormat parameter).

## PARAMETERS

### -SearchName
The SearchName parameter specifies the name of the existing content search to associate with the content search action. You can specify multiple content searches separated by commas.

You can find the content search by running the command Get-ComplianceSearch | Format-Table -Auto Name,Status.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActionName
This parameter is available only in the cloud-based service.

The ActionName parameter specifies a name for the content search action. You use this parameter only when you specify multiple content searches in the SearchName parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveFormat
This parameter is available only in the cloud-based service.

This parameter requires the Export role in the Security & Compliance Center. By default, the Export role is assigned only to the eDiscovery Manager role group.

This parameter has been deprecated and is no longer used.

To specify the format for Exchange search results, use the ExchangeArchiveFormat parameter. To specify the format for SharePoint and OneDrive search results, use the SharePointArchiveFormat parameter.

```yaml
Type: ComplianceExportArchiveFormat
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
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
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDedupe
This parameter is available only in the cloud-based service.

The EnableDedupe parameter eliminates duplication of messages when you export content search results. Valid values are:

- $true: Export a single copy of a message if the same message exists in multiple folders or mailboxes.

- $false: Export all copies of a message if the same message exists in multiple folders or mailboxes. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeArchiveFormat
This parameter is available only in the cloud-based service.

This parameter requires the Export role in the Security & Compliance Center. By default, the Export role is assigned only to the eDiscovery Manager role group.

The ExchangeArchiveFormat parameter specifies how to export Exchange search results. Valid values are:

- PerUserPst: One PST file for each mailbox. This is the default value.

- SinglePst: One PST file that contains all exported messages.

- SingleFolderPst: One PST file with a single root folder for the entire export.

- IndividualMessage: Export each message as an .msg message file.

- PerUserZip: One ZIP file for each mailbox. Each ZIP file contains the exported .msg message files from the mailbox. This value corresponds to the "export files in a compressed folder" checkbox in the Security & Compliance Center.

- SingleZip: One ZIP file for all mailboxes. The ZIP file contains all exported .msg message files from all mailboxes. This output setting is only available in PowerShell.

To specify the format for SharePoint and OneDrive search results, use the SharePointArchiveFormat parameter.

```yaml
Type: ComplianceExportArchiveFormat
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Export
This parameter is available only in the cloud-based service.

This parameter requires the Export role in the Security & Compliance Center. By default, the Export role is assigned only to the eDiscovery Manager role group.

The Export switch specifies the action for the content search is to export the full set of results that match the search criteria. You don't need to specify a value with this switch.

To only return the information about each detected item in a report, use the Report switch.

```yaml
Type: SwitchParameter
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileTypeExclusionsForUnindexedItems
The FileTypeExclusionsForUnindexedItems specifies the file types to exclude because they can't be indexed. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Format
In the Security & Compliance Center, this parameter requires the Export role. By default, the Export role is assigned only to the eDiscovery Manager role group.

The Format parameter specifies the format of the search results when you use the Export switch. Valid values are:

- FxStream: Export to PST files. This is the only option that's available when you export search results from the Security & Compliance Center.

- Mime: Export to .eml messsage files. This the default value when you use cmdlets to export the search results.

- Message: Export to .msg messsage files.

- BodyText: Export to .txt files.

```yaml
Type: ComplianceDataTransferFormat
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeCredential
The IncludeCredential switch specifies whether to include the credential in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSharePointDocumentVersions
This parameter is available only in the cloud-based service.

The IncludeSharePointDocumentVersions parameter specifies whether to export previous versions of the document when you use the Export switch. Valid values are:

- $true: Export all versions of the document.

- $false: Export only the current published version of the topic. This is the default value.

```yaml
Type: Boolean
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JobOptions
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmail
In the Security & Compliance Center, this parameter requires the Export role. By default, the Export role is assigned only to the eDiscovery Manager role group.

The NotifyEmail parameter specifies the email address target for the search results when you use the Export switch.

The recipient you specify is in the To: field of the message.

```yaml
Type: String
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifyEmailCC
In the Security & Compliance Center, this parameter requires the Export role. By default, the Export role is assigned only to the eDiscovery Manager role group.

The NotifyEmailCC parameter specifies the email address target for the search results when you use the Export switch.

The recipient you specify is in the Cc: field of the message.

```yaml
Type: String
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Preview
The Preview switch specifies the action for the content search is to preview the results that match the search criteria. You don't need to specify a value with this switch.

In the Security & Compliance Center, this parameter requires the Preivew role. By default, the Preview role is assigned only to the eDiscovery Manager role group.

```yaml
Type: SwitchParameter
Parameter Sets: Preview
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Purge
The Purge switch specifies the action for the content search is to remove items that match the search criteria. You don't need to specify a value with this switch.

Note that a maximum of 10 items per mailbox can be removed at one time. Because the capability to search for and remove messages is intended to be an incident-response tool, this limit helps ensure that messages are quickly removed from mailboxes. This action isn't intended to clean up user mailboxes.

Additionally, unindexed items aren't removed from mailboxes when you use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Purge
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PurgeType
The PurgeType parameter specifies how to remove items when the action is Purge.

The valid value for this parameter is SoftDelete, which means the purged items are recoverable by users until the deleted items retention period expires.

```yaml
Type: ComplianceDestroyType
Parameter Sets: Purge
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReferenceActionName
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Region
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
This parameter is available only in the cloud-based service.

The Report switch specifies the action for the content search is to export a report about the results (information about each item instead of the full set of results) that match the search criteria. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionReport
The RetentionReport switch specifies the action for the content search is to export a retention report. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetryOnError
The RetryOnError switch specifies whether to retry the action on any items that failed without re-running the entire action all over again. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scenario
In the Security & Compliance Center, this parameter requires the Preivew role. By default, the Preview role is assigned only to the eDiscovery Manager role group.

The Scenario parameter specifies the scenario type when you use the Export switch. Valid values are:

- AnalyzeWithZoom: Prepare the search results for processing in Office 365 Advanced eDiscovery.

- General: Exports the search results to the local computer. Emails are exported to .pst files. SharePoint and OneDrive for Business documents are exported in their native Office formats.

- GenerateReportsOnly:

- Inventory:

- RetentionReports:

- TriagePreview:

```yaml
Type: ComplianceSearchActionScenario
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
The Scope parameter specifies the items to include when the action is Export. Valid values are:

- IndexedItemsOnly

- UnindexedItemsOnly

- BothIndexedAndUnindexedItems

This parameter is only meaningful for content searches where the IncludeUnindexedItemsEnabled parameter is set to $true.

```yaml
Type: ComplianceExportScope
Parameter Sets: Export
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScopeDetails
This parameter is available only in the cloud-based service.

This parameter requires the Export or Compliance Search roles in the Security & Compliance Center. By default, these roles are assigned only to the eDiscovery Manager role group.

This parameter is reserved for internal Microsoft use.

```yaml
Type: ComplianceScopeDetail[]
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchNames
This parameter is available only in the cloud-based service.

The SearchNames parameter specifies the names of the existing content searches to associate with the content search action. You separate the content searche names by commas.

You can find content search names by running the command Get-ComplianceSearch | Format-Table -Auto Name,Status.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointArchiveFormat
This parameter is available only in the cloud-based service.

This parameter requires the Export role in the Office 365 Security & Compliance Center. By default, the Export role is assigned only to the eDiscovery Manager role group.

The SharePointArchiveFormat parameter specifies how to export SharePoint and OneDrive search results. Valid values are:

- IndividualMessage: Export the files uncompressed. This is the default value.

- PerUserZip: One ZIP file for each user. Each ZIP file contains the exported files for the user. This value corresponds to the "export files in a compressed folder" checkbox in the Security & Compliance Center.

- SingleZip: One ZIP file for all users. The ZIP file contains all exported files from all users. This output setting is only available in PowerShell.

To specify the format for Exchange search results, use the ExchangeArchiveFormat parameter.

```yaml
Type: ComplianceExportArchiveFormat
Parameter Sets: Export
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Version
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter doesn't work in the Office 365 Security & Compliance Center.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2016, Exchange Server 2019, Office 365 Security & Compliance Center
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/a3a2897c-07a8-41d6-99cd-f2440613fbce.aspx)
