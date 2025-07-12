---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog
applicable: Exchange Online, Exchange Online Protection
title: Search-UnifiedAuditLog
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Search-UnifiedAuditLog

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Search-UnifiedAuditLog cmdlet to search the unified audit log. This log contains events from Exchange Online, SharePoint, OneDrive, Microsoft Entra ID, Microsoft Teams, Power BI, and other Microsoft 365 services. You can search for all events in a specified date range, or you can filter the results based on specific criteria, such as the user who performed the action, the action, or the target object.

**Note**: By default, this cmdlet returns a subset of results containing up to 100 records. Use SessionCommand parameter with the ReturnLargeSet value to exhaustively search up to 50,000 results. The SessionCommand parameter causes the cmdlet to return unsorted data.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Search-UnifiedAuditLog -EndDate <ExDateTime> -StartDate <ExDateTime>
 [-Formatted]
 [-FreeText <String>]
 [-HighCompleteness]
 [-IPAddresses <String[]>]
 [-LongerRetentionEnabled <String>]
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

The Search-UnifiedAuditLog cmdlet is available in Exchange Online PowerShell. You can also view events from the unified auditing log by using the Microsoft Purview compliance portal. For more information, see [Audited activities](https://learn.microsoft.com/purview/audit-log-activities).

If you want to programmatically download data from the Microsoft 365 audit log, we recommend that you use the Microsoft 365 Management Activity API instead of using the Search-UnifiedAuditLog cmdlet in a PowerShell script. The Microsoft 365 Management Activity API is a REST web service that you can use to develop operations, security, and compliance monitoring solutions for your organization. For more information, see [Management Activity API reference](https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference).

This cmdlet is available in Office 365 operated by 21Vianet, but it won't return any results.

The OutVariable parameter accepts objects of type ArrayList. Here's an example of how to use it:

`$start = (Get-Date).AddDays(-1); $end = (Get-Date).AddDays(-0.5); $auditData = New-Object System.Collections.ArrayList; Search-UnifiedAuditLog -StartDate $start -EndDate $end -OutVariable +auditData | Out-Null`

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2023 -EndDate 5/2/2023 -SessionCommand ReturnLargeSet
```

This example searches the unified audit log for all events from May 1, 2023 12:00AM to May 2, 2023 12:00AM.

**Note**: If you don't include a timestamp in the value for the StartDate or EndDate parameters, the default timestamp 12:00 AM (midnight) is used.

### Example 2
```powershell
Search-UnifiedAuditLog -StartDate "6/1/2023 8:00 AM" -EndDate "6/1/2023 6:00 PM" -RecordType ExchangeAdmin -SessionCommand ReturnLargeSet
```

This example searches the unified audit log for all Exchange admin events from 8:00 AM to 6:00 PM on June 1, 2023.

**Note** If you use the same date for the StartDate and EndDate parameters, you need to include a timestamp; otherwise, no results will be returned because the date and time for the start and end dates will be the same.

### Example 3
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2023 -EndDate 5/8/2023 -SessionId "UnifiedAuditLogSearch 05/08/17" -SessionCommand ReturnLargeSet
```

This example searches the unified audit log for all events from May 1, 2023 to May 8, 2023. If you don't include a time stamp in the StartDate or EndDate parameters, The data is returned in pages as the command is rerun sequentially while using the same SessionId value.

**Note**: Always use the same SessionCommand value for a given SessionId value. Don't switch between ReturnLargeSet and ReturnNextPreviewPage for the same session ID. Otherwise, the output is limited to 10,000 results.

### Example 4
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2023 -EndDate 5/8/2023 -RecordType SharePointFileOperation -Operations FileAccessed -SessionId "WordDocs_SharepointViews" -SessionCommand ReturnLargeSet
```

This example searches the unified audit log for any files accessed in SharePoint from May 1, 2023 to May 8, 2023. The data is returned in pages as the command is rerun sequentially while using the same SessionId value.

### Example 5
```powershell
Search-UnifiedAuditLog -StartDate 5/1/2023 -EndDate 5/8/2023 -ObjectIDs "https://alpinehouse.sharepoint.com/sites/contoso/Departments/SM/International/Shared Documents/Sales Invoice - International.docx" -SessionCommand ReturnLargeSet
```

This example searches the unified audit log from May 1, 2023 to May 8, 2023 for all events relating to a specific Word document identified by its ObjectIDs value.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range. Entries are stored in the unified audit log in Coordinated Universal Time (UTC). If you specify a date/time value without a time zone, the value is in UTC.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, `"2018-05-06 14:30:00z"`.
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2018 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

If you don't include a timestamp in the value for this parameter, the default timestamp is 12:00 AM (midnight) on the specified date.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2018 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

If you don't include a timestamp in the value for this parameter, the default timestamp is 12:00 AM (midnight) on the specified date.

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HighCompleteness
**Note**: This parameter is currently in Preview, isn't available in all organizations, and is subject to change.

The HighCompleteness switch specifies completeness instead performance in the results. You don't need to specify a value with this switch.

When you use this switch, the query returns more complete search results but might take significantly longer to run. If you don't use this switch, the query runs faster but might have missing search results.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LongerRetentionEnabled
{{ Fill LongerRetentionEnabled Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ObjectIds
The ObjectIds parameter filters the log entries by object ID. The object ID is the target object that was acted upon, and depends on the RecordType and Operations values of the event.

For example, for SharePoint operations, the object ID is the URL path to a file, folder, or site. To search logs in a site, add a wildcard (\*) in front of the site URL (for example, `"https://contoso.sharepoint.com/sites/test/*"`).

For Microsoft Entra operations, the object ID is the account name or GUID value of the account.

The ObjectId value appears in the AuditData (also known as Details) property of the event.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operations
The Operations parameter filters the log entries by operation. The available values for this parameter depend on the RecordType value. For a list of the available values for this parameter, see [Audited activities](https://learn.microsoft.com/purview/audit-log-activities).

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordType
The RecordType parameter filters the log entries by record type. For details about the available values, see [AuditLogRecordType](https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-schema#auditlogrecordtype).

```yaml
Type: AuditRecordType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionCommand
The SessionCommand parameter specifies how much information is returned and how it's organized. This parameter is required if you want to retrieve more than the default limit of 100 results. Valid values are:

- ReturnLargeSet: This value causes the cmdlet to return unsorted data. By using paging, you can access a maximum of 50,000 results. This is the recommended value if an ordered result is not required and has been optimized for search latency.
- ReturnNextPreviewPage: This value causes the cmdlet to return data sorted on date. The maximum number of records returned through use of either paging or the ResultSize parameter is 5,000 records.

**Note**: Always use the same SessionCommand value for a given SessionId value. Don't switch between ReturnLargeSet and ReturnNextPreviewPage for the same session ID. Otherwise, the output is limited to 10,000 results.

```yaml
Type: UnifiedAuditSessionCommand
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteIds
The SiteIds parameter filters the log entries by the SharePoint SiteId (GUID). You can enter multiple values separated by commas: `Value1, Value2,...ValueN`.

To obtain the SiteId for a SharePoint site, append `/_api/site/id` to the URL of the site collection you want to specify. For example, change the URL `https://contoso.sharepoint.com/sites/hr-project` to `https://contoso.sharepoint.com/sites/hr-project/_api/site/id`. An XML payload is returned and the SiteId for the site collection is displayed in the Edm.Guid property; for example: `<d:Id xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:georss="http://www.georss.org/georss" xmlns:gml="http://www.opengis.net/gml" m:type="Edm.Guid">14ab81b6-f23d-476a-8cac-ad5dbd2910f7</d:Id>`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserIds
The UserIds parameter filters the log entries by the account (UserPrincipalName) of the user who performed the action. For example, laura@contoso.onmicrosoft.com.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
