---
external help file: Microsoft.Office.Server.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/clear-spserverscaleoutdatabaselog
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Clear-SPServerScaleOutDatabaseLog
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Clear-SPServerScaleOutDatabaseLog

## SYNOPSIS

Clears all scale-out logs in the specified scale-out database unless there is a scale-out log entry newer than the specified time-out value.


## SYNTAX

```
Clear-SPServerScaleOutDatabaseLog -Database <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-LogEntryTimeout <Int32>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

Use the Clear-SPServerScaleOutDatabaseLog cmdlet clears all scale-out logs in the specified scale-out database unless there is a scale-out log entry newer than the specified time-out value.

## EXAMPLES

### -----------EXAMPLE------- 
```
$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication
$database = $databases[0]
Clear-SPServerScaleOutDatabaseLog -Database $database -LogEntryTimeout 30
```

This example removes all scale-out log entries in the first scale-out database of the specified service application unless there is a scale-out log entry which is more recent than 30 minutes.


## PARAMETERS

### -Database

Specifies the scale-out database from which to clear the logs.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
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

### -Confirm

Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogEntryTimeout

Specifies the time-out value in minutes for the log entries.
If there is at least one log entry which is more recent than this value, no log entries will be deleted.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

