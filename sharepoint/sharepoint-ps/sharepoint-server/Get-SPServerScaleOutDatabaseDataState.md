---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPServerScaleOutDatabaseDataState
schema: 2.0.0
---

# Get-SPServerScaleOutDatabaseDataState

## SYNOPSIS

Returns the state information about the specified scale-out database.




## SYNTAX

### UnattachedDatabase
```
Get-SPServerScaleOutDatabaseDataState -ConnectionString <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-IsAzureDatabase] [-WhatIf] [<CommonParameters>]
```

### AttachedDatabase
```
Get-SPServerScaleOutDatabaseDataState -Database <SPDatabasePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPServerScaleOutDatabaseDataState cmdlet to return state information about the specified scale-out database or about the database which will be connected with the specified connection string.
The database state information includes total count of partitions, total weight of the partitions, the range and the subranges of the database.




## EXAMPLES

### ----------------EXAMPLE-------------- 
```
C:\PS>$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

PS C:\>Get-SPServerScaleOutDatabaseDataState -Database $database
```

This example gets the data state of the scale-out database for the first scale-out database of the given service application.


## PARAMETERS

### -ConnectionString

Specifies the connection string for the scale-out database from which to return the state information.





```yaml
Type: String
Parameter Sets: UnattachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database

Specifies the scale-out database for which the command returns state information.



```yaml
Type: SPDatabasePipeBind
Parameter Sets: AttachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAzureDatabase

Specifies whether the state information of the scale-out database is in the form of a Microsoft Windows Azure SQL Database.





```yaml
Type: SwitchParameter
Parameter Sets: UnattachedDatabase
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

