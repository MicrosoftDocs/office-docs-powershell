---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spcontentdatabaseorphaneddata
applicable: SharePoint Server 2019
title: Get-SPContentDatabaseOrphanedData
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPContentDatabaseOrphanedData

## SYNOPSIS
Gets orphaned data in content database.


## SYNTAX

```
Get-SPContentDatabaseOrphanedData [-Identity] <SPContentDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```


## DESCRIPTION
Use the **Get-SPContentDatabaseOrphanedData** to display orphaned objects.

## EXAMPLES

### EXAMPLE 1
```powershell
 Get-SPContentDatabase "WSS_Content" | Get-SPContentDatabaseOrphanedData
```
This example gets orphan objects in content database named "WSS_Content".

## PARAMETERS

### -Identity
Specifies the GUID of the content database to get. 

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Server 2019
Required: True
Position: 1
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## RELATED LINKS




