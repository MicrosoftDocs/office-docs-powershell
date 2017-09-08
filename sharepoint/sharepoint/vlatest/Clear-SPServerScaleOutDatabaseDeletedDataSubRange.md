---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Clear-SPServerScaleOutDatabaseDeletedDataSubRange

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Clear-SPServerScaleOutDatabaseDeletedDataSubRange -Database <SPDatabasePipeBind> -IsUpperSubRange <Boolean>
 -Range <SPScaleOutDataRange> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

Use the Clear-SPServerScaleOutDatabaseDeletedDataSubRange cmdlet to clear all partitions inside the specified deleted subrange that are contained within a specified scale-out database.
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### --------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>$state = Get-SPServerScaleOutDatabaseDataState -Database $database

C:\PS>Set-SPServerScaleOutDatabaseDataSubRange -Database $database -Range $state.Range -SubRangePoint $state.Range.RangeEnd -SubRangeMode Deleted -IsUpperSubRange $false

C:\PS>$state = Get-SPServerScaleOutDatabaseDataState -Database $database

C:\PS>Clear-SPServerScaleOutDatabaseDeletedDataSubRange -Database $database -Range $state.Range -IsUpperSubRange $false
```

This example creates a deleted subrange that starts from the data range start point and ends at the data range end point on the first scale-out database of the specified service application.
The example then clears that subrange and all data in the partitions in the subrange.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Database
Below Content Applies To: SharePoint Server 2013

Specifies the scale-out database to clear the deleted subrange from.
Below Content Applies To: SharePoint Server 2016

{{Fill Database Description}}

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
Below Content Applies To: SharePoint Server 2013

Specifies whether the subrange with deleted mode is on the upper or lower side of the data range.
Below Content Applies To: SharePoint Server 2016

{{Fill IsUpperSubRange Description}}

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
Below Content Applies To: SharePoint Server 2013

Specifies the expected data range of the scale-out database.
Below Content Applies To: SharePoint Server 2016

{{Fill Range Description}}

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
Below Content Applies To: SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.
Below Content Applies To: SharePoint Server 2016

{{Fill AssignmentCollection Description}}

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
Below Content Applies To: SharePoint Server 2013

Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Prompts you for confirmation before running the cmdlet.

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
Below Content Applies To: SharePoint Server 2013

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters Below Content Applies To: SharePoint Server 2016

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### Microsoft.SharePoint.PowerShell.SPDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-SPServerScaleOutDatabaseDataSubRange]()

