---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/export-spoquerylogs
applicable: SharePoint Online
title: Export-SPOQueryLogs
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---


# Export-SPOQueryLogs

## SYNOPSIS

Export query logs for a user in an Office 365 tenant.

## SYNTAX

```powershell
Export-SPOQueryLogs [-StartTime <DateTime>] -LoginName <String> -OutputFolder <String> [<CommonParameters>]
```

## DESCRIPTION

Export the query logs for a user in an Office 365 tenant. The result of the export is stored in the current working folder or a specified folder, in the two files loginName_queries.csv and loginName_personalQueries.csv.

The output of the queries.csv will be for example:

| QueryTime  |  QueryText |
| ------------- | ------------- |
| 5/31/2018 09:16 | Querytext1  |
| 5/31/2018 08:16  | Querytext2  |

You have to be a tenant admin to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

## EXAMPLES

### ------------ Example 1 --------------------

```powershell
Export-SPOQueryLogs -LoginName user1@contoso.sharepoint.com
```

Example 1 exports the query log for a user who has the e-mail address user1@contoso.sharepoint.com to the two files user1@contoso.sharepoint.com_queries.csv and user1@contoso.sharepoint.com_personalQueries.csv, in the current working folder.

### ------------ Example 2 --------------------

````powershell
Export-SPOQueryLogs -LoginName user1@contoso.sharepoint.com -StartTime "2018-10-21" -OutputFolder "c:\users\contosoadmin\Documents"
```

Example 2 exports the query log from the starting time 21. October 2018, for a user who has the e-mail address user1@contoso.sharepoint.com, to the two files user1@contoso.sharepoint.com_queries.csv and user1@contoso.sharepoint.com_personalQueries.csv, in the folder c:\users\contosoadmin\Documents.

## PARAMETERS

### -LoginName

Specifies the login name of the user to export.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFolder

Target folder where the CSV file is generated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime

Specifies from which point of time to export the logs from. Use the date format YYYY-MM-DD.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps)

[Set up the SharePoint Online Management Shell Windows PowerShell environment](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)
