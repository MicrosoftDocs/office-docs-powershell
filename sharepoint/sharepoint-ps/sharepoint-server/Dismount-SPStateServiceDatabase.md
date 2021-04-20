---
external help file: Microsoft.Office.Server.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/dismount-spstateservicedatabase
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Dismount-SPStateServiceDatabase
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Dismount-SPStateServiceDatabase

## SYNOPSIS
Removes the association to a state service database from the farm without dropping the database in the Microsoft SQL Server database.

## SYNTAX

```
Dismount-SPStateServiceDatabase [-Identity] <SPStateDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Dismount-SPStateServiceDatabase cmdlet removes a state service database from a service application and deletes the associated SharePoint object.
This cmdlet does not delete or alter the state service database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
Dismount-SPStateServiceDatabase -Identity 9703f7e2-9521-47c3-bd92-80e3eeba391b
```

This example removes the association between the SharePoint farm and the SQL Server database without dropping the SQL Server database.

### --------------EXAMPLE 2----------------- 
```
Get-SPStateServiceDatabase -ServiceApplication F9168C5E-CEB2-4faa-B6B
F-329BF39FA1E4 | Dismount-SPStateServiceDatabase
```

This example dismounts a single database because only the Identity parameter is used.

## PARAMETERS

### -Identity
Specifies the state service database to remove from the service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a state database (for example, StateSvcDB1); or an instance of a valid SPStateServiceDatabase object.

```yaml
Type: SPStateDatabasePipeBind
Parameter Sets: (All)
Aliases: Name
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

