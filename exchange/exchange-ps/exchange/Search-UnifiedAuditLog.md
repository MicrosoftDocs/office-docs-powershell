---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/search-unifiedauditlog
applicable: Exchange Online
title: Search-UnifiedAuditLog
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Search-UnifiedAuditLog

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Search-UnifiedAuditLog cmdlet to search the unified audit log. This log contains events from Exchange Online, SharePoint Online, OneDrive for Business, Azure Active Directory, Microsoft Teams, Power BI, and other Microsoft 365 services. You can search for all events in a specified date range, or you can filter the results based on specific criteria, such as the user who performed the action, the action, or the target object.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Search-UnifiedAuditLog -EndDate <ExDateTime> -StartDate <ExDateTime>
 [-Formatted]
 [-FreeText <String>]
 [-IPAddresses <String[]>]
 [-ObjectIds <String[]>]
 [-Operations <String[]>]
 [-RecordType <AuditRecordType>]
 [-ResultSize <Int32>]
 [-SessionCommand <UnifiedAuditSessionCommand>]
 [-SessionId <String>]
 [-SiteIds <String[]>]
 [-UserIds <String[]>]
 [<CommonParameters>]
```

## DESCRIPTION
The Search-UnifiedAuditLog cmdlet presents pages of data based on repeated iterations of the same command. Use SessionId and SessionCommand to repeatedly run the cmdlet until you get zero returns, or hit the maximum number of results based on the session command. To gauge progress, look at the ResultIndex (hits in the current iteration) and ResultCount (hits for all iterations) properties of the data returned by the cmdlet.

The Search-UnifiedAuditLog cmdlet is available in Exchange Online PowerShell. You can also view events from the unified auditing log by using the Security & Compliance Center. For more information, see [Audited activities](https://docs.microsoft.com/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance#audited-activities).

If you want to programmatically download data from the Microsoft 365 audit log, we recommend that you use the Microsoft 365 Management Activity API instead of using the Search-UnifiedAuditLog cmdlet in a PowerShell script. The Microsoft 365 Management Activity API is a REST web service that you can use to develop operations, security, and compliance monitoring solutions for your organization. For more information, see [Management Activity API reference](https://docs.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2018 -EndDate 5/2/2018
```

This example searches the unified audit log for all events from May 1, 201812:00AM to May 2, 2018 12:00AM.

Note: If you don't include a timestamp in the value for the StartDate or EndDate parameters, the default timestamp 12:00 AM (midnight) is used.

### Example 2
```powershell
Search-UnifiedAuditLog -StartDate "6/1/2018 8:00 AM" -EndDate "6/1/2018 6:00 PM" -RecordType ExchangeAdmin
```

This example searches the unified audit log for all Exchange admin events from 8:00 AM to 6:00 PM on June 1, 2018.

>[!NOTE]
> If you use the same date for the StartDate and EndDate parameters, you have to include a timestamp; otherwise, no results will be returned because the date and time for the start and end dates will be the same.

### Example 3
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2018 -EndDate 5/8/2018 -SessionId "UnifiedAuditLogSearch 05/08/17" -SessionCommand ReturnNextPreviewPage
```

This example searches the unified audit log for all events from May 1, 2018 to May 8, 2018. If you don't include a time stamp in the StartDate or EndDate parameters, The data is returned in pages as the command is rerun sequentially while using the same SessionId value.

> [!NOTE]
> If you use the SessionCommand value ReturnLargeSet, and then you use the value ReturnNextPreviewPage for the same session ID, the results are limited to 10,000 records (not 50,000).

### Example 4
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2018 -EndDate 5/8/2018 -RecordType SharePointFileOperation -Operations FileAccessed -SessionId "WordDocs_SharepointViews"-SessionCommand ReturnNextPreviewPage
```

This example searches the unified audit log for any files accessed in SharePoint Online from May 1, 2018 to May 8, 2018. The data is returned in pages as the command is rerun sequentially while using the same SessionId value.

### Example 5
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2018 -EndDate 5/8/2018 -ObjectIDs "https://alpinehouse.sharepoint.com/sites/contoso/Departments/SM/International/Shared Documents/Sales Invoice - International.docx"
```

This example searches the unified audit log from May 1, 2018 to May 8, 2018 for all events relating to a specific Word document identified by its ObjectIDs value.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range. Entries are stored in the unified audit log in Coordinated Universal Time (UTC). If you specify a date/time value without a time zone, the value is in UTC.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2018-05-06 14:30:00z"`.

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2018 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://docs.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

If you don't include a timestamp in the value for this parameter, the default timestamp is 12:00 AM (midnight) on the specified date.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range. Entries are stored in the unified audit log in Coordinated Universal Time (UTC). If you specify a date/time value without a time zone, the value is in UTC.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2018-05-06 14:30:00z"`.

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2018 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://docs.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

If you don't include a timestamp in the value for this parameter, the default timestamp is 12:00 AM (midnight) on the specified date.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Formatted
The Formatted switch causes attributes that are normally returned as integers (for example, RecordType and Operation) to be formatted as descriptive strings. You don't need to specify a value with this switch.

In addition, this switch makes AuditData more readable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FreeText
The FreeText parameter filters the log entries by the specified text string. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddresses
The IPAddresses parameter filters the log entries by the specified IP addresses. You specify multiple IP addresses separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ObjectIds
The ObjectIds parameter filters the log entries by object ID. The object ID is the target object that was acted upon, and depends on the RecordType and Operations values of the event. For example, for SharePoint operations, the object ID is the URL path to a file, folder, or site. For Azure Active Directory operations, the object ID is the account name or GUID value of the account.

The ObjectId value appears in the AuditData (also known as Details) property of the event.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operations
The Operations parameter filters the log entries by operation. The available values for this parameter depend on the RecordType value. For a list of the available values for this parameter, see [Audited activities](https://docs.microsoft.com/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance#audited-activities).

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordType
The RecordType parameter filters the log entries by record type. Valid values are:

- AeD

- AirInvestigation

- ApplicationAudit

- AzureActiveDirectory

- AzureActiveDirectoryAccountLogon

- AzureActiveDirectoryStsLogon

- Campaign

- ComplianceDLPExchange

- ComplianceDLPSharePoint

- ComplianceDLPSharePointClassification

- ComplianceSupervisionExchange

- CustomerKeyServiceEncryption

- CRM

- DataCenterSecurityCmdlet

- DataGovernance

- DataInsightsRestApiAudit

- Discovery

- DLPEndpoint

- ExchangeAdmin

- ExchangeAggregatedOperation

- ExchangeItem

- ExchangeItemAggregated

- ExchangeItemGroup

- HRSignal

- HygieneEvent

- InformationWorkerProtection

- InformationBarrierPolicyApplication

- Kaizala

- LabelContentExplorer

- MailSubmission

- MicrosoftFlow

- MicrosoftForms

- MicrosoftTeamsAnalytics

- MicrosoftTeams

- MicrosoftTeamsAdmin

- MicrosoftTeamsDevice

- MicrosoftTeamsAddOns

- MicrosoftStream

- MicrosoftTeamsSettingsOperation

- MipAutoLabelSharePointItem

- MipAutoLabelSharePointPolicyLocation

- MIPLabel

- OfficeNative

- OneDrive

- PowerBIAudit

- Project

- PowerAppsApp

- PowerAppsPlan

- Quarantine

- SecurityComplianceAlerts

- SecurityComplianceCenterEOPCmdlet

- SecurityComplianceInsights

- SharePoint

- SharePointCommentOperation

- SharePointContentTypeOperation

- SharePointFileOperation

- SharePointFieldOperation

- SharePointListOperation

- SharePointListItemOperation

- SharePointSharingOperation

- SkypeForBusinessCmdlets

- SkypeForBusinessPSTNUsage

- SkypeForBusinessUsersBlocked

- SyntheticProbe

- ThreatFinder

- ThreatIntelligence

- ThreatIntelligenceAtpContent

- ThreatIntelligenceUrl

- TeamsHealthcare

- WorkplaceAnalytics

- Yammer

```yaml
Type: AuditRecordType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. The default value is 100, maximum is 5,000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionCommand
The SessionCommand parameter specifies how much information is returned and how it's organized. Valid values are:

- ReturnNextPreviewPage: This value causes the cmdlet to return data sorted on date. The maximum number of records returned through use of either paging or the ResultSize parameter is 5,000 records.

- ReturnLargeSet: This value causes the cmdlet to return unsorted data. By using paging, you can access a maximum of 50,000 results.

**Note**: Always use the same SessionCommand value for a given SessionId value. Don't switch between ReturnLargeSet and ReturnNextPreviewPage for the same session ID.

```yaml
Type: UnifiedAuditSessionCommand
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionId
The SessionId parameter specifies an ID you provide in the form of a string to identify a command (the cmdlet and its parameters) that will be run multiple times to return paged data. The SessionId can be any string value you choose.

When the cmdlet is run sequentially with the same session ID, the cmdlet will return the data in sequential blocks of the size specified by ResultSize.

For a given session ID, if you use the SessionCommand value ReturnLargeSet, and then you use the SessionCommand value ReturnNextPreviewPage, the results are limited to 10,000 records. To have all 50,000 records available, always use the ReturnLargeSet value each time your run the cmdlet for the same session ID.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteIds
The SiteIds parameter filters the log entries by site ID. You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIds
The UserIds parameter filters the log entries by the ID of the user who performed the action.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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

## OUTPUTS

###  
The OutVariable parameter accepts objects of type ArrayList. Here's an example of how to use it:

$start = (Get-Date).AddDays(-1); $end = (Get-Date).AddDays(-0.5); $auditData = New-Object System.Collections.ArrayList; Search-UnifiedAuditLog -StartDate $start -EndDate $end -OutVariable +auditData | Out-Null

## NOTES

## RELATED LINKS
