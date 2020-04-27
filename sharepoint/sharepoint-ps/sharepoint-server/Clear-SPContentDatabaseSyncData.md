---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/clear-spcontentdatabasesyncdata
applicable: SharePoint Server 2019
title: Clear-SPContentDatabaseSyncData
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Clear-SPContentDatabaseSyncData

## SYNOPSIS
Clears synchronization information from the content databases that have not been synchronized since the mentioned number of days.

## SYNTAX

```
Clear-SPContentDatabaseSyncData [-DaysSinceLastProfileSync] <Int32>]
 [-AssignmentCollection <SPAssignmentCollection>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use the **Clear-SPContentDatabaseSyncData** to clear synchronization information from the content databases that has not been synchronized since the mentioned number of days, which can be passed as a parameter.

## EXAMPLES

### EXAMPLE 1
```powershell
 Clear-SPContentDatabaseSyncData -DaysSinceLastProfileSync 12
```

This example resets synchronization information from the content databases that have not been synchronized for more than or equal to 12 days, without prompting for user confirmation.

## PARAMETERS

### -DaysSinceLastProfileSync
Specifies the least number of days by which the databases are old.

The default value of this parameter is 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Server 2019
Required: False
Position: 1
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
Prompts you for confirmation before running the cmdlet.

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS




