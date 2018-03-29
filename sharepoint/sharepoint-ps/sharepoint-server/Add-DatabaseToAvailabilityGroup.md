---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Add-DatabaseToAvailabilityGroup
schema: 2.0.0
---

# Add-DatabaseToAvailabilityGroup

## SYNOPSIS
Adds one or more SharePoint databases to a SQL Server Availability Group

## SYNTAX

#### Default
```
Add-DatabaseToAvailabilityGroup [-AGName] <String> [-AssignmentCollection <SPAssignmentCollection>]
 -DatabaseName <String> [-FileShare <String>] [<CommonParameters>]
```

### AllDatabases
```
Add-DatabaseToAvailabilityGroup [-AGName] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-FileShare <String>] [-ProcessAllDatabases] [<CommonParameters>]
```

## DESCRIPTION
Use the Add-DatabaseToAvailabilityGroup cmdlet to add an availability group to the farm.

## EXAMPLES

### Example 1 
```
Add-DatabaseToAvailabilityGroup -AGName MyAvailabilityGroup -DatabaseName WSS_Content -FileShare \\backup\share\ 
```

This example adds the database WSS_Content to the availability group named "MyAvailabilityGroup".

### Example 2
```
Add-DatabaseToAvailabilityGroup -AGName MyAvailabilityGroup -ProcessAllDatabases -FileShare \\backup\share\ 
```

This example adds all SharePoint databases attached to the farm to the availability group named "MyAvailabilityGroup"

## PARAMETERS

### -AGName
The name of the availability group from which the databases are being added.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

**NOTE:** When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur. 

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

### -DatabaseName
The name of the database to be added to the availability group. 
**Note:** This parameter should not be used in conjunction with the **ProcessAllDatabases** parameter.

```yaml
Type: String
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileShare
When a database is being added to the availability group, backup / restores are done from this location to propagate the database to all replicas.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProcessAllDatabases
Adds all databases from the current SharePoint farm into the availability group.

```yaml
Type: SwitchParameter
Parameter Sets: AllDatabases
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

