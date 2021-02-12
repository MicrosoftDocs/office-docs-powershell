---
external help file: microsoft.office.project.server.stsadmcommandhandler.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spprojectusersyncfullsyncthreshold
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Set-SPProjectUserSyncFullSyncThreshold
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Set-SPProjectUserSyncFullSyncThreshold

## SYNOPSIS
Defines the threshold over which a delta user sync job will be executed as a complete user sync.
This threshold is the product of the number of projects multiplied by the number of users.

## SYNTAX

```
Set-SPProjectUserSyncFullSyncThreshold [-Url] <Uri> [-Threshold] <Int32>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPProjectUserSyncFullSyncThreshold` cmdlet defines the threshold over which a delta user sync job will be executed as a complete user sync.
This threshold is the product of the number of projects multiplied by the number of users.
The purpose of this threshold is to use the full sync method instead of the delta sync method when the amount of changes is large enough.
Set it to a negative value to reset to the default (not set).

This cmdlet only works in Project Server Permission mode.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251833 (https://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------------EXAMPLE---------------------
```
Set-SPProjectUserSyncFullSyncThreshold -URL https://contoso-AppSrv/ -Threshold 800
```

This example sets the full user sync threshold for the Project Web App instance at https://contoso-AppSrv/PWA to 800.


## PARAMETERS

### -Url
The URL of the Project Web App instance where you want to set the threshold.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Threshold
A whole number consisting of the number of projects multiplied by the number of users.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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

[Set-SPProjectUserSync](Set-SPProjectUserSync.md)

[Set-SPProjectUserSyncDisabledSyncThreshold](Set-SPProjectUserSyncDisabledSyncThreshold.md)

[Set-SPProjectUserSyncOffPeakSyncThreshold](Set-SPProjectUserSyncOffPeakSyncThreshold.md)
