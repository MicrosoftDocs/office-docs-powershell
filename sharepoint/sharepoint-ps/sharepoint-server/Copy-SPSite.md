---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/copy-spsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Copy-SPSite
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Copy-SPSite

## SYNOPSIS

Makes a copy of a site collection.



## SYNTAX

```
Copy-SPSite [-Identity] <SPSitePipeBind> [-TargetUrl] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-DestinationDatabase <SPContentDatabasePipeBind>] [-HostHeaderWebApplication <String>] [-PreserveSiteId]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Copy-SPSite cmdlet to make a copy of a site collection from an implied source content database to a specified destination content database.

The copy of the site collection has a new URL and a new SiteID.
When you have database snapshot capabilities on a computer runningSQL Server, a temporary snapshot of the source database is created for the duration of the copy to prevent any data changes during the copy process.
If you do not have database snapshot capabilities on the server running SQL Server, you can back up the source and restore it to the destination to get the same result.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE------------- 
```
Copy-SPSite https://contoso/sites/OldTeam -DestinationDatabase WSS_Content -TargetUrl https://contoso/sites/NewTeam
```

This example makes a copy of the https://contoso/sites/OldTeam site collection from its database to the WSS_Content database with the new URL, https://contoso/sites/NewTeam and a new Site ID.

## PARAMETERS

### -Identity
Specifies the site collection to copy.
This can be a valid URL or GUID.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TargetUrl
The URL that will be used for the destination copy of the site collection.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DestinationDatabase
Specifies the location where the copy will be sent to.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostHeaderWebApplication
Use when the site collection is a host-named site collection that allows the site to land on the correct web application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreserveSiteId
Specifies if the SiteID is to be saved or not.

The valid values are True and False. The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Test-SPSite](Test-SPSite.md)

[Repair-SPSite](Repair-SPSite.md)

