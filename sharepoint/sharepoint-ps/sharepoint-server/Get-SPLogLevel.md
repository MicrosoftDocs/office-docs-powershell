---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-sploglevel
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPLogLevel
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPLogLevel

## SYNOPSIS

Returns a list of objects or diagnostic levels.



## SYNTAX

```
Get-SPLogLevel [-AssignmentCollection <SPAssignmentCollection>] [-Identity <String[]>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPLogLevel cmdlet displays a list of objects or diagnostic levels based on the criteria specified.
If no parameter is specified, a list of all diagnostic levels for all categories is returned.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
Get-SPLogLevel
```

This example displays throttle levels for all categories.

### --------------EXAMPLE 2----------------- 
```
Get-SPLogLevel -Identity "Category1"
```

This example displays the throttle level for the Category1 category.

### --------------EXAMPLE 3----------------- 
```
C:\PS>"Cat1", "Cat2", "Cat3" | Get-SpLogLevel
```

This example displays the throttle level for multiple categories.

### --------------EXAMPLE 4----------------- 
```
Get-SPLogLevel -Identity "Area:*"
```

This example displays the throttle level for all categories in one area.

## PARAMETERS

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Identity
Specifies a valid category name; for example, Backup and Restore, or Administration.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

