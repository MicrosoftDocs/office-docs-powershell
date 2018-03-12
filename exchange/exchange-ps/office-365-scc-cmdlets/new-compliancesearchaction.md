---
title: "New-ComplianceSearchAction"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/9/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: a3a2897c-07a8-41d6-99cd-f2440613fbce
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-ComplianceSearchAction

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-ComplianceSearchAction** cmdlet to create actions for compliance searches in Exchange Server 2016 and in the Office 365 Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ComplianceSearchAction <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a preview search action for the compliance search named Project X.
  
```
New-ComplianceSearchAction -SearchName "Project X" -Preview
```

### Example 2

This example creates an export search action for the compliance search named Project X.
  
```
New-ComplianceSearchAction -SearchName "Project X" -Export
```

### Example 3

This example deletes the search results returned by a compliance search named Remove Phishing Message. Note that unindexed items aren't deleted when you use the  _Purge_ parameter.
  
```
New-ComplianceSearchAction -SearchName "Remove Phishing Message" -Purge -PurgeType SoftDelete
```

## Detailed Description
<a name="DetailedDescription"> </a>

 After you create a compliance search using the **New-ComplianceSearch** cmdlet, and run it using the **Start-ComplianceSearch** cmdlet, you assign a search action to the search using the **New-ComplianceSearchAction** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group. 
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ActionName_ <br/> |Optional  <br/> |System.String  <br/> |The  _ActionName_ parameter specifies a name for the compliance search action. You use this parameter only when you specify multiple compliance searches in the _SearchName_ parameter. <br/> |
| _ArchiveFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceExportArchiveFormat  <br/> | The _ArchiveFormat_ parameter specifies how to export Exchange search results. Valid values are: <br/>  `PerUserPst`: One PST file for each mailbox. This is the default value.  <br/>  `SinglePst`: One PST file that contains all exported messages.  <br/>  `SingleFolderPst`: One PST file with a single root folder for the entire export.  <br/>  `IndividualMessage`: Export each message as a file, using the .msg format.  <br/>  `SingleZip`: One ZIP file that contains all exported messages.  <br/>  `PerUserZip`: One ZIP file for each mailbox.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _EnableDedupe_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _EnableDedupe_ parameter eliminates duplication of messages when you export compliance search results. Valid values are: <br/>  `$true`: Export a single copy of a message if the same message exists in multiple folders or mailboxes.  <br/>  `$false`: Export all copies of a message if the same message exists in multiple folders or mailboxes. This is the default value.  <br/> |
| _ExchangeArchiveFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceExportArchiveFormat  <br/> | The _ExchangeArchiveFormat_ parameter specifies how to export Exchange search results. Valid values are: <br/>  `PerUserPst`: One PST file for each mailbox. This is the default value.  <br/>  `SinglePst`: One PST file that contains all exported messages.  <br/>  `SingleFolderPst`: One PST file with a single root folder for the entire export.  <br/>  `IndividualMessage`: Export each message as a file, using the .msg format.  <br/>  `SingleZip`: One ZIP file that contains all exported messages, using the .msg format.  <br/>  `PerUserZip`: One ZIP file for each mailbox.  <br/> |
| _Export_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Export_ switch specifies the action for the compliance search is to export the full set of results that match the search criteria. You don't need to specify a value with this switch. <br/> To only return the information about each detected item in a report, use the  _Report_ switch. <br/> |
| _FileTypeExclusionsForUnindexedItems_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _FileTypeExclusionsForUnindexedItems_specifies the file types to exclude because they can't be indexed. You can specify multiple values separated by commas.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Format_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceDataTransferFormat  <br/> | The _Format_ parameter specifies the format of the search results when you use the _Export_ switch. Valid values are: <br/>  `FxStream`: Export to PST files. This is the only option that's available when you export search results from the Security &amp; Compliance Center.  <br/>  `Mime`: Export to .eml messsage files. This the default value when you use cmdlets to export the search results.  <br/>  `Message`: Export to .msg messsage files.  <br/>  `BodyText`: Export to .txt files.  <br/> |
| _IncludeCredential_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeCredential_switch specifies whether to include the credential in the results. You don't need to specify a value with this switch.  <br/> |
| _IncludeSharePointDocumentVersions_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _IncludeSharePointDocumentVersions_ parameter specifies whether to export previous versions of the document when you use the _Export_ switch. Valid values are: <br/>  `$true`: Export all versions of the document.  <br/>  `$false`: Export only the current published version of the topic. This is the default value.  <br/> |
| _JobOptions_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MaxUnindexedSize_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _MaxUnindexedSize_parameter specifies the maximum size in bytes for unindexed items. A valid value is an integer.  <br/> |
| _NotifyEmail_ <br/> |Optional  <br/> |System.String  <br/> |The  _NotifyEmail_ parameter specifies the email address to send a notification when the export is finished when you use the _Export_ switch. Notification messages can only be sent when you prepare the search results for analysis in Office 365 Advanced eDiscovery by using the _Scenario_ parameter set to `AnalyzeWithZoom`.  <br/> The recipient you specify is in the  `To:` field of the message. <br/> |
| _NotifyEmailCC_ <br/> |Optional  <br/> |System.String  <br/> |The  _NotifyEmailCC_ parameter specifies the email address to send a notification when the export is finished when you use the _Export_ switch. Notification messages can only be sent when you prepare the search results for analysis in Office 365 Advanced eDiscovery by using the _Scenario_ parameter set to `AnalyzeWithZoom`.  <br/> The recipient you specify is in the  `Cc:` field of the message. <br/> |
| _Preview_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Preview_ switch specifies the action for the compliance search is to preview the results that match the search criteria. You don't need to specify a value with this switch. <br/> |
| _Purge_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Purge_ switch specifies the action for the compliance search is to remove items that match the search criteria. You don't need to specify a value with this switch. <br/> Note that a maximum of 10 items per mailbox can be removed at one time. Because the capability to search for and remove messages is intended to be an incident-response tool, this limit helps ensure that messages are quickly removed from mailboxes. This action isn't intended to clean up user mailboxes.  <br/> Additionally, unindexed items aren't removed from mailboxes when you use this switch.  <br/> |
| _PurgeType_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceDestroyType  <br/> |The  _PurgeType_ parameter specifies how to remove items when the action is **Purge**. <br/> The valid value for this parameter is  `SoftDelete`, which means the purged items are recoverable by users until the deleted items retention period expires.  <br/> |
| _ReferenceActionName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Region_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Report_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Report_ switch specifies the action for the compliance search is to export a report about the results (information about each item instead of the full set of results) that match the search criteria. You don't need to specify a value with this switch. <br/> |
| _RetentionReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _RetentionReport_ switch specifies the action for the compliance search is to export a retention report. You don't need to specify a value with this switch. <br/> |
| _RetryOnError_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _RetryOnError_ switch specifies whether to retry the action on any items that failed without re-running the entire action all over again. You don't need to specify a value with this switch. <br/> |
| _Scenario_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceSearchActionScenario  <br/> | The _Scenario_ parameter specifies the scenario type when you use the _Export_ switch. Valid values are: <br/>  `AnalyzeWithZoom`: Prepare the search results for processing in Office 365 Advanced eDiscovery.  <br/>  `General`: Exports the search results to the local computer. Emails are exported to .pst files. SharePoint and OneDrive for Business documents are exported in their native Office formats.  <br/>  `GenerateReportsOnly`: Exports only the content search reports; the actual search results aren't exported.  <br/> |
| _Scope_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceExportScope  <br/> | The _Scope_ parameter specifies the items to include when the action is **Export**. Valid values are: <br/>  `IndexedItemsOnly` <br/>  `UnindexedItemsOnly` <br/>  `BothIndexedAndUnindexedItems` <br/>  This parameter is only meaningful for compliance searches where the _IncludeUnindexedItemsEnabled_ parameter is set to `$true`.  <br/> |
| _ScopeDetails_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceScopeDetail[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SearchName_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _SearchName_ parameter specifies the name of the existing compliance search to associate with the compliance search action. You can specify multiple compliance searches separated by commas. <br/> You can find the compliance search by running the command  `Get-ComplianceSearch | Format-Table -Auto Name,Status`.  <br/> |
| _SearchNames_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _SearchNames_ parameter specifies the names of the existing compliance searches to associate with the compliance search action. You separate the compliance search names by commas. <br/> You can find compliance search names by running the command  `Get-ComplianceSearch | Format-Table -Auto Name,Status`.  <br/> |
| _SharePointArchiveFormat_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceExportArchiveFormat  <br/> | This parameter is available only in the cloud-based service. <br/>  The _SharePointArchiveFormat_ parameter specifies how to export SharePoint search results. Valid values are: <br/>  `IndividualMessage`: Exports uncompressed files to a separate folder for each site. The folder structure of the site is reproduced.  <br/>  `SingleZip`: One ZIP file that contains all exported files; files are organized in a separate folder for each site. The folder structure of the site is reproduced.  <br/>  `PerUserZip`: One ZIP file for each site. The folder structure of the site is reproduced.  <br/> |
| _ShareRootPath_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Version_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

