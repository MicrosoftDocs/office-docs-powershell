---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPDiagnosticsPerformanceCounter

## SYNOPSIS

Returns a collection of performance counters.



## SYNTAX

```
Get-SPDiagnosticsPerformanceCounter [-AssignmentCollection <SPAssignmentCollection>] [-DatabaseServer]
 [-WebFrontEnd] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPDiagnosticsPerformanceCounter cmdlet returns the collection of performance counters that are read and recorded in the usage database.
If neither the DatabaseServer or WebFrontEnd parameters are specified, this cmdlet returns the performance counters on the front end Web servers and database servers in the farm.

To distinguish counters that are collected on database servers and counters that are collected on front end Web servers, note that counters that are collected on database servers have a Provider Name of job-diagnostics-performance-counter-sql-provider, and counters that are collected on front end Web servers have a Provider Name of job-diagnostics-performance-counter-wfe-provider.

The Get-SPDiagnosticsPerformanceCounter cmdlet is only available by using Windows PowerShell.
There is no user interface.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
C:\PS>Get- SPDiagnosticsPerformanceCounter
```

This example gets the performance counter settings for front end Web servers and database servers.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>Get- SPDiagnosticsPerformanceCounter -WebFrontEnd
```

This example gets the performance counter settings for front end Web servers.

### ------------------EXAMPLE 3------------------ 
```
C:\PS>Get- SPDiagnosticsPerformanceCounter -DatabaseServer
```

This example gets the performance counter settings for database servers.

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseServer
Returns performance counters collected for the database servers in the farm.

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

### -WebFrontEnd
Returns performance counters collected for the front end Web servers in the farm.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

