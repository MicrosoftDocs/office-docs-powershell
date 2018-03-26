---
external help file: 
applicable: SharePoint Server 2016
title: Merge-SPUsageLog
schema: 2.0.0
---

# Merge-SPUsageLog

## SYNOPSIS
Returns records from usage log files.

## SYNTAX

```
Merge-SPUsageLog [-Identity] <SPUsageDefinitionPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-DiagnosticLogPath <String>] [-EndTime <DateTime>] [-OverWrite] [-Partial] [-Servers <String[]>]
 [-StartTime <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The Merge-SPUsageLog cmdlet returns records from usage log files on each farm server that match the criteria, and writes the results to pipeline.

The command gathers, filters, and aggregates logs base on user specified criteria, we recommend that you filter by using the StartTime and EndTime parameters to optimize performance of this cmdlet.

You should at least specify a usage type. For information on valid usage types, see Get-SPUsageDefinition.

This cmdlet requires PowerShell Remoting to be enabled.

## EXAMPLES

### Example 1 
```
PS C:\>Merge-SPUsageLog -Identity 'Timer Jobs' -Servers SPSERVER1
```

Merges the Usage log for the Usage Definition 'Timer Jobs' from the specified server and outputs to the PowerShell console.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DiagnosticLogPath
Specifies the file to write diagnostic information to. A relative path is supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTime
Specifies the end time of the log entries returned.

The type must be a valid DateTime format that is culture-specific to the administrative language, that is, 2/16/2007 12:15:12 for English-US.

The default value is the current time.

If you want to specify UTC time, you must add a "Z" to the end of the parameter. For example, "2016-06-15 03:29:18.199 Z". If the "Z" is not specify, local computer time will be displayed instead of UTC.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the name of usage log file.

```yaml
Type: SPUsageDefinitionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -OverWrite
Overwrites the diagnostic log file if it already exists at the specified path.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Partial
Not used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Servers
The server address or addresses to filter on.

To obtain a list of valid addresses in the farm use Get-SPServer | Select Address.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
Specifies the start time of the log entries returned.

The type must be a valid DateTime format that is culture-specific to the administrative language, such as "2/16/2007 12:15:12" for English-US.

The default value is one hour prior to the current time on the local computer.

If you want to specify UTC time, you must add a "Z" to the end of the parameter. For example, "2016-06-15 03:29:18.199 Z". If the "Z" is not specify, local computer time will be displayed instead of UTC.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPUsageDefinitionPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

