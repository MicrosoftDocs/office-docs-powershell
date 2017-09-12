---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPServerScaleOutDatabaseDataState

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Synopsis}}



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
**Below Content Applies To:**SharePoint Server 2013

This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPServerScaleOutDatabaseDataState cmdlet to return state information about the specified scale-out database or about the database which will be connected with the specified connection string.
The database state information includes total count of partitions, total weight of the partitions, the range and the subranges of the database.

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Description}}



## EXAMPLES

### ----------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>$databases = Get-SPServerScaleOutDatabase -ServiceApplication $serviceApplication

C:\PS>$database = $databases[0]

C:\PS>Get-SPServerScaleOutDatabaseDataState -Database $database
```

This example gets the data state of the scale-out database for the first scale-out database of the given service application.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -ConnectionString
**Below Content Applies To:**SharePoint Server 2013

Specifies the connection string for the scale-out database from which to return the state information.



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

Specifies the scale-out database for which the command returns state information.



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

### -IsAzureDatabase
**Below Content Applies To:**SharePoint Server 2013

Specifies whether the state information of the scale-out database is in the form of a Microsoft Windows Azure SQL Database.



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

