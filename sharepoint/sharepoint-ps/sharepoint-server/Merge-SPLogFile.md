---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Merge-SPLogFile
schema: 2.0.0
---

# Merge-SPLogFile

## SYNOPSIS

Combines trace log entries from all farm computers into a single log file on the local computer.



## SYNTAX

```
Merge-SPLogFile -Path <String> [-Area <String[]>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Category <String[]>] [-ContextFilter <String[]>] [-Correlation <Guid[]>] [-EndTime <DateTime>]
 [-EventID <String[]>] [-ExcludeNestedCorrelation] [-Level <String>] [-Message <String[]>] [-Overwrite]
 [-Process <String[]>] [-StartTime <DateTime>] [-ThreadID <UInt32[]>] [<CommonParameters>]
```

## DESCRIPTION
The Merge-SPLogFile cmdlet returns records from Unified Logging Service (ULS) trace log files on each farm server that match the criteria, and writes the results to a new log file on the local computer.
If no results are returned, a warning is written to the Windows PowerShell console window.

We recommend that you filter by using the StartTime and EndTime parameters to optimize performance of this cmdlet.
Some filtering parameters such as Process, Area, Category, EventID and Message support wildcards.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- 
```
C:\PS>Merge-SPLogFile -Path "C:\Logs\FarmMergedLog.log" -Overwrite
```

This example merges the last hour of log data from all farm computers with no filtering.

### --------------EXAMPLE 2----------------- 
```
C:\PS>Merge-SPLogFile -Path "C:\Logs\FarmMergedLog.log" -Overwrite -Area Search
```

This example merges the last hour of log data from the Search area.

### --------------EXAMPLE 3----------------- 
```
C:\PS>Merge-SPLogFile -Path "C:\Logs\FarmMergedLog.log" -Overwrite -Area "SharePoint Foundation","Web Analytics Services"
```

This example merges the last hour of log data from the SharePoint Foundation and Web Analytics Services areas.

### --------------EXAMPLE 4----------------- 
```
C:\PS>Merge-SPLogFile -Path "C:\Logs\FarmMergedLog.log" -Overwrite -Level High
```

This example merges the log data of level High or higher.

### --------------EXAMPLE 5----------------- 
```
C:\PS>Merge-SPLogFile -Path "C:\Logs\FarmMergedLog.log" -Overwrite -StartTime "06/09/2008 16:00" - EndTime "06/09/2008 16:15"
```

This example merges the log data for events in a particular time range, which is culture-specific to the United States.

### --------------EXAMPLE 6----------------- 
```
C:\PS>Merge-SPLogFile -Path "C:\Logs\FarmMergedLog.log" -Overwrite -Message "*permission changed*"
```

This example merges the log data for events with permission changed in the message text.

### --------------EXAMPLE 7----------------- 
```
C:\PS>Merge-SPLogFile -Overwrite -Path d:\1.log -ContextFilter "name=timer job*" -Area "*search*"
```

This example merges the log data for all search timer jobs.

### --------------EXAMPLE 8----------------- 
```
C:\PS>Merge-SPLogFile -Overwrite -Path d:\2.log -ContextFilter "user=contoso?joeuser"
```

This example shows how to merge the log data for all user names that have a contoso\joeuser or Contoso/joeuser format.

## PARAMETERS

### -Path
Specifies the path and file name to which to write the merged log file.
Relative paths are supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Area
Specifies the area name to filter on.

The type must be a valid name; for example, SharePoint Foundation.

The use of wildcards is supported.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Category
Specifies the category ID to filter on.

The type must be a valid category name; for example, category1.

The use of wildcards is supported.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContextFilter
Specifies a filter for trace entries in a particular context in the form key=value, for example, user=contoso\joeuser.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Correlation
Specifies the correlation ID to filter on.
The type must be a valid GUID, in the form F0BB0790-4323-A153-096F-ABCDC80E24D4.

```yaml
Type: Guid[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTime
Specifies the end time of the log entries returned.

The type must be a valid DateTime format that is culture-specific to the administrative language, such as 2/16/2007 12:15:12 for English-US.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventID
Specifies the Event ID to filter on.
The use of wildcards is supported.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeNestedCorrelation
Excludes nested correlation values in the results.
This parameter is only used when filtering results by using the ContextFilter parameter

By default, records returned from the ContextFilter parameter include all related records in addition to the records that match the filter.
Specifying this option includes only the records that match the filter and excludes any related records.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Level
Specifies the level name to filter on.

Results include the specified level and everything more severe.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Message
Specifies the message text to filter on.

The type must be valid text.
Text with spaces should be enclosed with quotation marks; for example, "This is a test."

The use of wildcards is supported.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Overwrite
Overwrites the log file if it already exists at the specified path.

The type must be either of the following values:

- $True
- $False

The default value is $False.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Process
Specifies the process name to filter on.

The use of wildcards is supported.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
Specifies the start time of the log entries returned.

The type must be a valid DateTime format that is culture-specific to the administrative language, such as 2/16/2007 12:15:12 for English-US.

The default is one hour prior to the current time on the local computer.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThreadID
Specifies the thread ID to filter on.

The type must be a valid integer from 0 through 4,294,967,295.

```yaml
Type: UInt32[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

