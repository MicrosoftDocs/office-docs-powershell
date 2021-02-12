---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/backup-spsite
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Backup-SPSite
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Backup-SPSite

## SYNOPSIS

Performs a backup of a site collection.



## SYNTAX

```
Backup-SPSite [-Identity] <SPSitePipeBind> -Path <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Force] [-NoSiteLock] [-UseSqlSnapshot] [-WhatIf] [-UseABSDocStreamInfo] [<CommonParameters>]
```

## DESCRIPTION
The Backup-SPSite cmdlet performs a backup of the site collection when the Identity parameter is used.

By default, the site collection will be set to read-only for the duration of the backup to reduce the potential for user activity during the backup operation to corrupt the backup.
If you have SQL Server Enterprise Edition, we recommend that UseSqlSnapshot parameter be used because this ensures a valid backup while it allows users to continue reading and writing to the site collection during the backup.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### -------------------EXAMPLE 1-------------------- 
```
Backup-SPSite https://server_name/sites/site_name -Path C:\Backup\site_name.bak
```

This example backs up a site collection at https://server_name/sites/site_name to the C:\Backup\site_name.bak file.


### -------------------EXAMPLE 2-------------------- 
```
Get-SPSiteAdministration https://server_name/sites/site_name | Backup-SPSite -Path C:\Backup\site_name.bak
```

This example backs up a site collection at https://server_name/sites/site_name to the C:\Backup\site_name.bak file.
Same result as Example 1, but a different way of performing the operation.

### -------------------EXAMPLE 3-------------------- 
```
Backup-SPSite https://server_name/sites/site_name -Path C:\Backup\site_name.bak -UseSqlSnapshot
```

This example backs up a site collection using database snapshots to ensure backup integrity.

### -------------------EXAMPLE 4-------------------- 
```
Backup-SPSite https://server_name/sites/site_name -Path C:\Backup\site_name.bak -NoSiteLock
```

This example backs up a site collection and prevents placing the site into a read only mode during the backup phase. Use the -NoSiteLock parameter when backing up a site in production where it is desirable to not place the site into a read only mode while the backup takes place.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the site collection to be backed up.

For example, a valid URL, such as https://server_name/sites/site_name or a GUID such as, "01234567-89ab-cdef-0123-456789abcdef"

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Path
Specifies the full path to the backup file (that is, C:\Backup\site_name.bak.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Specify to overwrite an existing backup file if it already exists.

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

### -NoSiteLock
Specifies the site collection to remain read and write during the backup.

If  the NoSiteLock parameter is not specified, then a site collection that has a site collection lock setting of "none" or "no additions" will be temporarily set to "read only" while the site collection backup is performed.
Once the backup has completed, the site collection lock will return to its original state.
The backup package will record the original site collection lock state so that it is restored to that state.

If users are writing to the site collection while the site collection is being backed up, then the NoSiteLock parameter is not recommended for potential impact to backup integrity

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

### -UseSqlSnapshot
Specifies a SQL Database Snapshot will be created when the backup begins, and all site collection data will be retrieved directly from the database snapshot.
This snapshot will be deleted automatically when the backup completes

The UseSqlSnapshot parameter is recommended if the database server hosting your content database supports database snapshots such as SQL Server Enterprise Edition and SQL Server Developer Edition.
This is because it will ensure a valid backup while allowing users to continue reading and writing to the site collection during the backup.
It is not necessary to specify the NoSiteLock parameter when specifying the UseSqlSnapshot parameter.

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseABSDocStreamInfo
Do not use.

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

