---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Remove-SPDiagnosticsPerformanceCounter

## SYNOPSIS
Removes an instance of a performance counter.


## SYNTAX

```
Remove-SPDiagnosticsPerformanceCounter [-Category] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Counter <String>] [-DatabaseServer] [-Instance <String>] [-WebFrontEnd] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Remove-SPDiagnosticsPerformanceCounter` cmdlet removes performance counters from the collection of performance counters that are read and recorded in the usage database.
This cmdlet can also be used to remove entire categories and types of counters from the collection.
If either the DatabaseServer or WebFrontEnd parameters are not specified, this cmdlet removes the specified performance counters on the front end Web servers in the farm.

The `Remove-SPDiagnosticsPerformanceCounter` cmdlet is only available by using Windows PowerShell.
There is no user interface.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
C:\PS>Remove-SPDiagnosticsPerformanceCounter -category ASP.NET
```

This example removes all the counters in the category ASP.NET on front end Web servers.


### ------------------EXAMPLE 2------------------
```
C:\PS>Remove-SPDiagnosticsPerformanceCounter -category ASP.NET -Counter "Requests Queued"
```

This example removes the counters in the category ASP.NET that have requests queued on front end Web servers.


### ------------------EXAMPLE 3------------------
```
C:\PS>Remove-SPDiagnosticsPerformanceCounter -category Processor -counter "% Processor Time" -instance "_Total" -databaseserver
```

This example removes the counters of the _Total instance, with the counter % Processor Time in the category Processor on database servers.


## PARAMETERS

### -Category
Specifies the category of performance counters to remove.

The type must be a valid name of a category of performance counters; for example, ASP.NET, PhysicalDisk, or Processor.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Counter
Specifies the type of counter to remove.
If this parameter is not specified, this cmdlet removes all performance counters of the specified category.

The type must be a valid name of counter type; for example, Requests Queued, Avg.
Disk Queue Length, and % Processor Time.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DatabaseServer
Removes the specified performance counters that are collected on the database servers in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Instance
Specifies the instance name of the performance counter to remove.
If this parameter is not specified, this cmdlet removes all instances of the specified performance counter.

The type must be a valid name of a performance counter instance; for example Total_PerfCounter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WebFrontEnd
Removes performance counters that are collected on the front end Web servers in the farm.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
