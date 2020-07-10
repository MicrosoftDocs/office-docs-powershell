---
external help file: Microsoft.SharePoint.PowerShell.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-splogevent
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPLogEvent
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Get-SPLogEvent

## SYNOPSIS

Returns results from a Unified Logging Service (ULS) trace log.



## SYNTAX

### Directory
```
Get-SPLogEvent [-AssignmentCollection <SPAssignmentCollection>] [-AsString] [-ContextKey <String[]>]
 [-Directory <String>] [-MinimumLevel <String>] [-EndTime <DateTime>] [-StartTime <DateTime>]
 [<CommonParameters>]
```

### File
```
Get-SPLogEvent [-AssignmentCollection <SPAssignmentCollection>] [-AsString] [-ContextKey <String[]>]
 [-MinimumLevel <String>] [-EndTime <DateTime>] [-File <String>] [-StartTime <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Get-SPLogEvent cmdlet returns records from a ULS trace log file that match the criteria.
If no parameters are specified, all records from all log files are returned.
Use the StartTime and EndTime parameters to filter on a time range.
The use of these parameters is recommended to optimize performance of this cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
Get-SPLogEvent -MinimumLevel "Warning"
```

This example returns all log entries equal to or more severe than Warning from the default log directory.

### --------------EXAMPLE 2----------------- 
```
Get-SPLogEvent -Directory "C:\Logs" | Where-Object {$_.Level -eq "Warning"}
```

This example returns all warning entries from log files in the C:\Logs directory.

### --------------EXAMPLE 3-----------------
```
Get-SPLogEvent -StartTime "12/04/2007 17:00" -EndTime "12/04/2007 18:00"
```

This example returns error entries that occurred during a particular time range, which is culture-specific to the United States.

### --------------EXAMPLE 4----------------- 
```
Get-SPLogEvent -ContextKey @("UserName" ,"SiteName")
```

This example returns the contents of the most recent log file and adds the specified context key data.

### --------------EXAMPLE 5----------------- 
```
Get-SPLogEvent | Where-Object {$_.Level -eq "Error" -and {$_.Area -eq "SharePoint Foundation "}
```

This example returns all error entries related to SharePoint Foundation.

### --------------EXAMPLE 6----------------- 
```
Get-SPLogEvent -ContextKey @("Name") | %{$_.ToString() + "'t" + $_.Context["Name"]}
```

This example returns the contents of the log file and adds context data.

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

### -AsString
Returns each record as a separate string

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

### -ContextKey
Specifies that context data should be added to the results for the specified Context Keys, for example: `-ContextKey @("UserName", "SiteName")`.

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

### -Directory
Lists log files from an alternate directory (any directory other than the configured LogLocation directory).

```yaml
Type: String
Parameter Sets: Directory
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinimumLevel
Returns records at or above the specified level.
The valid values are Error or Warning.

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

### -EndTime
The type must be a valid DateTime format that is culture-specific to the administrative language, such as 2/16/2007 12:15:12 for English-US.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -File
Specifies a specific file to query records from.

```yaml
Type: String
Parameter Sets: File
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
The type must be a valid DateTime format that is culture-specific to the administrative language, such as 2/16/2007 12:15:12 for English-US.

```yaml
Type: DateTime
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

