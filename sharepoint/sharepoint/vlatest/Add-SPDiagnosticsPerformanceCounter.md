---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Add-SPDiagnosticsPerformanceCounter

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Add-SPDiagnosticsPerformanceCounter [-Category] <String> -Counter <String> [-AllInstances]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DatabaseServer] [-WebFrontEnd] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Add-SPDiagnosticsPerformanceCounter [-Category] <String> [-Counter <String>] -Instance <String> [-AllInstances]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DatabaseServer] [-WebFrontEnd] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_3
```
Add-SPDiagnosticsPerformanceCounter [-Category] <String> [-Instance <String>] [-AllInstances]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DatabaseServer] [-WebFrontEnd] [-WhatIf]
 -CounterList <String[]>
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Add-SPDiagnosticsPerformanceCounter cmdlet adds a performance counter to a front end Web server or a database server.
A performance counter is read and recorded in the usage database.
By default, the new performance counter is added to the database servers in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
C:\PS>Add-SPDiagnosticsPerformanceCounter -category ASP.NET -Counter "Requests Queued"
```

This example adds the counter that has the name ASP.NET\Requests Queued on front end Web servers.

### ------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>Add-SPDiagnosticsPerformanceCounter -category ASP.NET -Counter "Requests Queued"
```

This example adds the counter that has the name ASP.NET\Requests Queued on front end Web servers.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
C:\PS>Add-SPDiagnosticsPerformanceCounter -category PhysicalDisk -counter "Avg. Disk Queue Length" -allinstances
```

This example adds all instances of the counter PhysicalDisk in the category Avg.
Disk Queue Length on front end Web servers.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>Add-SPDiagnosticsPerformanceCounter -category PhysicalDisk -counter "Avg. Disk Queue Length" -allinstances
```

This example adds all instances of the counter PhysicalDisk in the category Avg.
Disk Queue Length on front end Web servers.

### ------------------EXAMPLE 3------------------ (SharePoint Server 2013)
```
C:\PS>Add-SPDiagnosticsPerformanceCounter -category Processor -counter "% Processor Time" -instance "_Total" -databaseserver
```

This example adds the _Total instance of the counter % Processor Time in the category Processor on database servers.

### ------------------EXAMPLE 3------------------ (SharePoint Server 2016)
```
C:\PS>Add-SPDiagnosticsPerformanceCounter -category Processor -counter "% Processor Time" -instance "_Total" -databaseserver
```

This example adds the _Total instance of the counter % Processor Time in the category Processor on database servers.

## PARAMETERS

### -Category
Specifies the category of performance counter to add to the target Web front end computer or database server.

The type must be a valid name of a category of performance counters; for example, ASP.NET, PhysicalDisk, or Processor.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Counter
Specifies the type of counter to add to the target Web front end computer or database server.

The type must be a valid name of counter type; for example, Requests Queued, Avg.
Disk Queue Length, and % Processor Time.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Instance
Specifies the display name of the new performance counter.

The type must be a valid name of a performance counter instance; for example Total_PerfCounter.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AllInstances
Collects all instances of a counter category and type on the target Web front end computer or database server.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: True (ByPropertyName)
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Adds the specified performance counter to all database servers in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WebFrontEnd
Adds the specified performance counter to all Web front end computers in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CounterList
{{Fill CounterList Description}}

```yaml
Type: String[]
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

