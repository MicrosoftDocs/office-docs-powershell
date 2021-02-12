---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spbackuphistory
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPBackupHistory
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPBackupHistory

## SYNOPSIS

Returns a history of backup and restore operations.



## SYNTAX

```
Get-SPBackupHistory -Directory <String> [-AssignmentCollection <SPAssignmentCollection>] [-ShowBackup]
 [-ShowRestore] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPBackupHistory cmdlet reads a history of backup and restore operations that have been run.
Specifies whether you want to display only the backup history, only the restore history, or all of the history.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### ------------------EXAMPLE 1----------------- 
```
Get-SPBackupHistory -Directory \\file_server\share\Backup
```

This example returns all farm backup and restore operations that have been run for the \\\\file_server\share\Backup directory.

### ------------------EXAMPLE 2----------------- 
```
Get-SPBackupHistory -Directory C:\Backup -ShowBackup
```

This example returns all of the farm backup operations that have been run for the C:\Backup directory.

### ------------------EXAMPLE 3----------------- 
```
(Get-SPBackupHistory -Directory C:\Backup -ShowBackup)[0].SelfId | Restore-SPFarm -Directory C:\Backup -RestoreMethod overwrite
```

This example gets all of the farm backup operations that have been run for the C:\Backup directory, finds the most recent backup, and then passes its backup GUID to the Restore-SPFarm cmdlet.
The Restore-SPFarm cmdlet will then perform an overwrite restore from that backup package.

## PARAMETERS

### -Directory
Specifies the path where the SharePoint Products backup packages generated from a farm backup have been stored.

The type must be a valid path in either of the following forms:

- C:\folder_name
- \\\\server_name\folder_name

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
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

### -ShowBackup
Filters the output so that the history of backup operations only is displayed.
If both the ShowBackup and the ShowRestore parameters are not specified, the history of both backup and restore operations is displayed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowRestore
Filters the output so that the history of restore operations only is displayed.
If both the ShowBackup and the ShowRestore parameters are absent, the history of both backup and restore operations is displayed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

