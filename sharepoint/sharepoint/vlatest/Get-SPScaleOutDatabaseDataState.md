---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPScaleOutDatabaseDataState

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPScaleOutDatabaseDataState -ConnectionString <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-IsAzureDatabase] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPScaleOutDatabaseDataState -Database <SPDatabasePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPScaleOutDatabaseDataState cmdlet to return state information about the specified scale-out database or about the database which will be connected with the specified connection string.
The database state information includes total count of partitions, total weight of the partitions, the range and the subranges of the database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>$databases = Get-SPScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>Get-SPScaleOutDatabaseDataState -Database $database
```

This example gets the data state of the scale-out database for the first scale-out database of the given service application.

### ----------------EXAMPLE-------------- (SharePoint Server 2016)
```
C:\PS>$databases = Get-SPScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>Get-SPScaleOutDatabaseDataState -Database $database
```

This example gets the data state of the scale-out database for the first scale-out database of the given service application.

## PARAMETERS

### -ConnectionString
Specifies the connection string for the scale-out database from which to return the state information.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
Specifies the scale-out database to return the state information about.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### -IsAzureDatabase
Specifies whether the state information of the scale-out database is in the form of a Microsoft SQL Azure Database.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

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

