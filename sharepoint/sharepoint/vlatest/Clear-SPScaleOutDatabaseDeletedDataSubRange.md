---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Clear-SPScaleOutDatabaseDeletedDataSubRange

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Clear-SPScaleOutDatabaseDeletedDataSubRange -Database <SPDatabasePipeBind> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
Use the Clear-SPScaleOutDatabaseDeletedDataSubRange cmdlet to clear all partitions inside the specified deleted subrange that are contained within a specified scale-out database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>$databases = Get-SPScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>$state = Get-SPScaleOutDatabaseDataState -Database $database

C:\PS>Set-SPScaleOutDatabaseDataSubRange -Database $database -Range $state.Range -SubRangePoint $state.Range.RangeEnd -SubRangeMode Deleted -IsUpperSubRange $false

C:\PS>$state = Get-SPScaleOutDatabaseDataState -Database $database

C:\PS>Clear-SPScaleOutDatabaseDeletedDataSubRange -Database $database -Range $state.Range -IsUpperSubRange $false
```

This example creates a deleted subrange that starts from the data range start point and ends at the data range end point on the first scale-out database of the specified service application.
The example then clears that subrange and all data in the partitions in the subrange.

### --------------EXAMPLE-------------- (SharePoint Server 2016)
```
C:\PS>$databases = Get-SPScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>$state = Get-SPScaleOutDatabaseDataState -Database $database

C:\PS>Set-SPScaleOutDatabaseDataSubRange -Database $database -Range $state.Range -SubRangePoint $state.Range.RangeEnd -SubRangeMode Deleted -IsUpperSubRange $false

C:\PS>$state = Get-SPScaleOutDatabaseDataState -Database $database

C:\PS>Clear-SPScaleOutDatabaseDeletedDataSubRange -Database $database -Range $state.Range -IsUpperSubRange $false
```

This example creates a deleted subrange that starts from the data range start point and ends at the data range end point on the first scale-out database of the specified service application.
The example then clears that subrange and all data in the partitions in the subrange.

## PARAMETERS

### -Database
Specifies the scale-out database to clear the deleted subrange from.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsUpperSubRange
Specifies whether the subrange with deleted mode is on the upper or lower side of the data range.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

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

Required: True
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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPScaleOutDatabaseDataSubRange]()

