---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPWebApplicationHttpThrottlingMonitor
schema: 2.0.0
---

# Set-SPWebApplicationHttpThrottlingMonitor

## SYNOPSIS
Sets the Health Score bucket values for an existing network throttling performance counter for a specified Web application.


## SYNTAX

```
Set-SPWebApplicationHttpThrottlingMonitor [-Identity] <SPWebApplicationPipeBind> [-Category] <String>
 [-Counter] <String> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-HealthScoreBuckets <Double[]>] [-Instance <String>] [-IsDESC] [-LowerLimit <Double>] [-UpperLimit <Double>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPWebApplicationHttpThrottlingMonitor` cmdlet sets the Health Score bucket values for an existing network throttling performance counter for a specified Web application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------
```
C:\PS>$buckets=(2000,1000,500,300,200,100,50,30,20,10)
Set-SPWebApplicationHttpThrottlingMonitor http://sharepoint -
Category Memory -Counter 'Available Mbytes' -IsDesc -HealthScoreBuckets $buckets
```

This example sets the Health Score bucket values for the Memory\Available Mbytes counter to the array listed for the http://sharepoint Web application.


### ------------------EXAMPLE 2------------------
```
C:\PS>Set-SPWebApplicationHttpThrottlingMonitor http://sharepoint
0 -Category Memory -Counter 'Available Mbytes' -IsDesc -UpperLimit 3000
```

This example sets the upper limit for the Memory\Available Mbytes counter, the highest value in the Health Score buckets, to 3000 for the http://sharepoint Web application.


## PARAMETERS

### -Identity
Specifies the SharePoint Web application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Category
Specifies the name of the performance counter category.

The type must be a valid performance counter category in the throttling monitor.
Use the `Get-SPWebApplicationHttpThrottlingMonitor` cmdlet to return a list of performance counter categories in the throttling monitor.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Counter
Specifies the name of the performance counter.

The type must be a valid performance counter in the throttling monitor.
Use the `Get-SPWebApplicationHttpThrottlingMonitor` cmdlet to return a list of performance counters in the throttling monitor.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 3
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HealthScoreBuckets
Specifies bucket ranges to use in determining the calculation of the server Health Score for this counter.

```yaml
Type: Double[]
Parameter Sets: (All)
Aliases: Buckets
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Instance
Specifies the instance of the performance counter.
The default value is empty.
If the specified value is invalid, this cmdlet will not run.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -IsDESC
Specifies that this counter is interpreted in descending order.

If this parameter is set, Health Score bucket values are interpreted in descending order; for example, set this parameter by using the Memory category and Available Mbytes counter to monitor available memory.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -LowerLimit
Specifies the lower limit of the numerical threshold of the specified performance counter.
The lower limit is the lowest value in the Health Score bucket values.

```yaml
Type: Double
Parameter Sets: (All)
Aliases: Lower
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UpperLimit
Specifies the upper limit of the numerical threshold of the specified performance counter.
The upper limit is the highest value in the Health Score bucket values.

```yaml
Type: Double
Parameter Sets: (All)
Aliases: Upper
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
