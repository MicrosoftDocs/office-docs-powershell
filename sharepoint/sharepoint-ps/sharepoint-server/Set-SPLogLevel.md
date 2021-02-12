---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-sploglevel
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPLogLevel
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Set-SPLogLevel

## SYNOPSIS
Sets the trace and event level for a set of categories.


## SYNTAX

```
Set-SPLogLevel [-AssignmentCollection <SPAssignmentCollection>] [-EventSeverity <String>]
 [-Identity <String[]>] [-InputObject <PSObject>] [-TraceSeverity <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPLogLevel` cmdlet sets the Windows event logging and trace logging levels for one or more diagnostic logging categories registered in the farm.
If an event or trace associated with a category occurs, but is less severe than that category's logging level, the event or trace is not written to the event log or the trace log.
If an event or trace associated with a category occurs and is equally severe or more severe than that category's logging level, the event or trace is written to the event log or the trace log.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ------------------EXAMPLE 1-----------------------
```
set-sploglevel -TraceSeverity Monitorable
```

This example sets the TraceSeverity values for all categories to Monitorable.


### ------------------EXAMPLE 2-----------------------
```
Set-SPLogLevel -TraceSeverity High -EventSeverity Warning -Identity "Cat1"
```

This example sets the EventSeverity and TraceSeverity values for a single category.


### ------------------EXAMPLE 3-----------------------
```
C:\PS>"Cat1", "Cat2", "Cat3" | Set-SPLogLevel -EventSeverity Error
```

This example sets the EventSeverity values for multiple categories.


### ------------------EXAMPLE 4-----------------------
```
Set-SPLogLevel -EventSeverity Warning -Identity "AreaName:*"
```

This example sets the EventSeverity values for all categories in the same area.


## PARAMETERS

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -EventSeverity
Specifies the category level to be set.
The category level is any one of the following values:

- None
- ErrorCritical
- Error
- Warning
- Information
- Verbose

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the name(s) of the category or set of categories to set the throttle for; for example, "Unified Logging Service".
If the Identity parameter is not specified, the event-throttling setting is applied to all categories in the farm.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
The InputObject is pipelined to the cmdlet and can be a string in a format identical to the Identity parameter, or can be an SPDiagnosticsCategory object.
The user can retrieve one or more categories from the `Get-SPLogLevel` cmdlet, modify the category values and then pipeline them into the `Set-SPLogLevel` cmdlet.

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TraceSeverity
Specifies trace throttle to set the specified categor(ies) to.
The trace log files are text files that are written to the trace log path that is defined on the Diagnostic Logging Settings page on the SharePoint Central Administration site.
The type must be any one of the following values:

- None (no traces are written to the trace log)
- Unexpected
- Monitorable
- High
- Medium
- Verbose
- VerboseEx

```yaml
Type: String
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
