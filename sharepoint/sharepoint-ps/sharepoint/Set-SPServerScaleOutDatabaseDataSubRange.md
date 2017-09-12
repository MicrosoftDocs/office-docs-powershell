---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPServerScaleOutDatabaseDataSubRange

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Synopsis}}



## SYNTAX

### UnattachedDatabase
```
Set-SPServerScaleOutDatabaseDataSubRange -ConnectionString <String> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> -SubRangeMode <SPScaleOutDatabaseSubRangeMode>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-IgnoreSubRangePointOnBoundary]
 [-IsAzureDatabase] [-SubRangePoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

### AttachedDatabase
```
Set-SPServerScaleOutDatabaseDataSubRange -Database <SPDatabasePipeBind> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> -SubRangeMode <SPScaleOutDatabaseSubRangeMode>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-IgnoreSubRangePointOnBoundary]
 [-SubRangePoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Set-SPServerScaleOutDatabaseDataSubRange cmdlet to create a subrange with the specified parameters for a specified scale-out database or a database which will be connected with a specified connection string.
A subrange is a subset of a range of data.

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Description}}



## EXAMPLES

### --------------EXAMPLE------------- (SharePoint Server 2013)
```
C:\PS>$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>$state = Get-SPServerScaleOutDatabaseDataState -Database $database

C:\PS>Set-SPServerScaleOutDatabaseDataSubRange -Database $database -Range $state.Range -SubRangePoint $state.Range.RangeEnd -SubRangeMode ReadOnly -IsUpperSubRange $false
```

This example creates a read-only subrange that starts from the data range start point and ends at the data range end point on the first scale-out database of the specified service application.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -ConnectionString
**Below Content Applies To:**SharePoint Server 2013

Specifies the connection string for the scale-out database to create the new data sub-range.



**Below Content Applies To:**SharePoint Server 2016

{{Fill ConnectionString Description}}



```yaml
Type: String
Parameter Sets: UnattachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
**Below Content Applies To:**SharePoint Server 2013

Specifies the scale-out database to create the data subrange.



**Below Content Applies To:**SharePoint Server 2016

{{Fill Database Description}}



```yaml
Type: SPDatabasePipeBind
Parameter Sets: AttachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsUpperSubRange
**Below Content Applies To:**SharePoint Server 2013

Specifies whether to create the data subrange on the upper or lower side of the data range.



**Below Content Applies To:**SharePoint Server 2016

{{Fill IsUpperSubRange Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Range
**Below Content Applies To:**SharePoint Server 2013

Specifies the expected current range of the scale-out database prior to this operation.



**Below Content Applies To:**SharePoint Server 2016

{{Fill Range Description}}



```yaml
Type: SPScaleOutDataRange
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubRangeMode
**Below Content Applies To:**SharePoint Server 2013

Specifies the mode of the data subrange to be created.
The data subrange mode values are the following:

--NULL- The data subrange on the specified side (lower or upper) of the data range will be removed.
--ReadOnly - The partitions which are inside the new data subrange can be read, but cannot be modified.
--Changing -The partitions which are inside the new data subrange cannot be read or modified
--Deleted- The partitions which are inside the new data subrange cannot be read or modified



**Below Content Applies To:**SharePoint Server 2016

{{Fill SubRangeMode Description}}



```yaml
Type: SPScaleOutDatabaseSubRangeMode
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AssignmentCollection Description}}



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
**Below Content Applies To:**SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

Prompts you for confirmation before running the cmdlet.



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

### -IgnoreSubRangePointOnBoundary
**Below Content Applies To:**SharePoint Server 2013

Specifies whether to complete without any errors if the new subrange's start and end points are the same.
If this parameter is specified, no errors are displayed.



**Below Content Applies To:**SharePoint Server 2016

{{Fill IgnoreSubRangePointOnBoundary Description}}



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

### -IsAzureDatabase
**Below Content Applies To:**SharePoint Server 2013

Specifies whether the database is hosted on SQL Azure.



**Below Content Applies To:**SharePoint Server 2016

{{Fill IsAzureDatabase Description}}



```yaml
Type: SwitchParameter
Parameter Sets: UnattachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubRangePoint
**Below Content Applies To:**SharePoint Server 2013

Specifies the start or end point of the data subrange to be created as defined by the following criteria:

--The start point if the data sub-range is created on the upper side of the data range.
--The end point if the data sub-range is created on the lower side of the data range.

The maximum value is NULL.



**Below Content Applies To:**SharePoint Server 2016

{{Fill SubRangePoint Description}}



```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:**SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters



**Below Content Applies To:**SharePoint Server 2016

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



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

### Microsoft.SharePoint.PowerShell.SPDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Clear-SPServerScaleOutDatabaseDeletedDataSubRange]()

