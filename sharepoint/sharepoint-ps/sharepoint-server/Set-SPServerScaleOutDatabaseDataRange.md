---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPServerScaleOutDatabaseDataRange
schema: 2.0.0
---

# Set-SPServerScaleOutDatabaseDataRange

## SYNOPSIS
Extends the range of a specified scale-out database.


## SYNTAX

```
Set-SPServerScaleOutDatabaseDataRange -Database <SPDatabasePipeBind> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-NewRangePoint <Byte[]>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Set-SPServerScaleOutDatabaseDataRange cmdlet to extend the range of a specified scale-out database in a specified direction.


## EXAMPLES

### --------------------EXAMPLE---------------------
```
$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication
$database = $databases[0]
$state = Get-SPServerScaleOutDatabaseDataState -Database $database
Set-SPServerScaleOutDatabaseDataRange -Database $database -Range $state.Range -NewRangePoint $null -IsUpperSubRange $true
```

This example extends the data range end point of the first database in the specified service application up to the maximum range point.


## PARAMETERS

### -Database
Specifies the scale-out database to which to extend the data range.


```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsUpperSubRange
Specifies whether to set the start point or the end point of the data range with the specified value in the NewRangePoint parameter.


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
Specifies the expected data range of the scale-out database.


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

### -NewRangePoint
Specifies the new start point or end point of the database.
The maximum value is NULL.

``yaml
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

[Set-SPServerScaleOutDatabaseDataSubRange](Set-SPServerScaleOutDatabaseDataSubRange.md)

[Clear-SPServerScaleOutDatabaseDeletedDataSubRange](Clear-SPServerScaleOutDatabaseDeletedDataSubRange.md)
