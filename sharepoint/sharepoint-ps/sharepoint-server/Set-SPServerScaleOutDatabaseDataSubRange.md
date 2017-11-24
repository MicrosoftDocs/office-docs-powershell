---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPServerScaleOutDatabaseDataSubRange
schema: 2.0.0
---

# Set-SPServerScaleOutDatabaseDataSubRange

## SYNOPSIS
Creates a subrange for a specified scale-out database.


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
This cmdlet contains more than one parameter set. You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see [Cmdlet Parameter Sets] (https://msdn.microsoft.com/library/dd878348(VS.85).aspx).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication
$database = $databases[0]
$state = Get-SPServerScaleOutDatabaseDataState -Database $database
Set-SPServerScaleOutDatabaseDataSubRange -Database $database -Range $state.Range -SubRangePoint $state.Range.RangeEnd -SubRangeMode ReadOnly -IsUpperSubRange $false

```

This example creates a read-only subrange that starts from the data range start point and ends at the data range end point on the first scale-out database of the specified service application.


## PARAMETERS

### -ConnectionString
Specifies the connection string for the scale-out database to create the new data sub-range.


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
Specifies the scale-out database to create the data subrange. 


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
Specifies whether to create the data subrange on the upper or lower side of the data range.


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
Specifies the expected current range of the scale-out database prior to this operation.


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
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

Note: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur. 


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
Specifies whether to complete without any errors if the new subrange’s start and end points are the same. If this parameter is specified, no errors are displayed.


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
Specifies whether the database is hosted on SQL Azure.


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
Specifies the start or end point of the data subrange to be created as defined by the following criteria: 

--The start point if the data sub-range is created on the upper side of the data range.
--The end point if the data sub-range is created on the lower side of the data range.

The maximum value is NULL.

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
