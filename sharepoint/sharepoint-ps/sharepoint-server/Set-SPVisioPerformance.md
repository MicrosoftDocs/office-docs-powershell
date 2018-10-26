---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPVisioPerformance
schema: 2.0.0
---

# Set-SPVisioPerformance

## SYNOPSIS
Sets performance properties for a Visio Services application.


## SYNTAX

```
Set-SPVisioPerformance -MaxDiagramCacheAge <Int32> -MaxDiagramSize <Int64> -MaxRecalcDuration <Int32>
 -MinDiagramCacheAge <Int32> -VisioServiceApplication <SPVisioServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] -MaxCacheSize <Int64> [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPVisioPerformance` cmdlet sets properties related to performance for a Visio Services application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -------------------EXAMPLE 1----------------------
```
PS C:\>Set-SPVisioPerformance -VisioServiceApplication "VGS2" -MaxDiagramSize 10 -MaxRecalcDuration 120 -MinDiagramCacheAge 1 -MaxDiagramCacheAge 4
```

This example changes settings that are related to performance for a Visio Services application.


### -------------------EXAMPLE 2----------------------
```
PS C:\>Set-SPVisioPerformance -VisioServiceApplication "VGS2" -MaxDiagramSize 10
```

This example changes settings that are related to performance for a Visio Services application.
Note that only one setting value is specified.
The cmdlet prompts you for the other parameter values.


## PARAMETERS

### -MaxDiagramCacheAge
Specifies the time, in minutes, after which cached items are purged.
This value affects memory use on the server.
A large cache age slows the rate at which diagrams can be refreshed by users and reduces CPU and memory use of the server.
The default value is 60 minutes.

The type must be an integer in the range of 0 to 34560 (24 days).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDiagramSize
Specifies the maximum size, in megabytes, of a diagram that can be opened by the Visio Services application.
The default value is 5.

The type must be an integer in the range of 1 to 50.

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRecalcDuration
Specifies the maximum time, in seconds, that a diagram can only be recalculated by the Visio Services application.
Diagram recalculation operations that take longer than this number of seconds are canceled by the service.
A low value increases performance by allowing only simple diagrams to be processed by the server, which minimizes CPU and memory use.
A larger value allows the recalculation of more complex diagrams while using more CPU cycles and memory.

The type must be a valid integer value in the range of 1 to 120 seconds (2 minutes).
The default value is 60 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinDiagramCacheAge
Specifies the minimum time, in minutes, a diagram is cached in memory.
This value affects memory use on the server.
A small value allows users to refresh their diagrams more often, but will increase memory and CPU load of the server.
The default value is 5.

The type must be an integer in the range of 0 to 34560 (24 days).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VisioServiceApplication
Specifies the Visio Services application that contains the SPVisioPerformance object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxCacheSize
{{Fill MaxCacheSize Description}}

```yaml
Type: Int64
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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
