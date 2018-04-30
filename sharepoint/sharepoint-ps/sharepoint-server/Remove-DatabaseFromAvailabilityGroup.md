---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Remove-DatabaseFromAvailabilityGroup
schema: 2.0.0
---

# Remove-DatabaseFromAvailabilityGroup

## SYNOPSIS
Removes one or more SharePoint databases from an availability group in SQL Server.


## SYNTAX

### Default
```
Remove-DatabaseFromAvailabilityGroup [-AGName] <String> [-AssignmentCollection <SPAssignmentCollection>]
 -DatabaseName <String> [-Force] [-KeepSecondaryData] [<CommonParameters>]
```

### AllDatabases
```
Remove-DatabaseFromAvailabilityGroup [-AGName] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Force] [-KeepSecondaryData] [-ProcessAllDatabases] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set. You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets. For more information about how to use parameter sets, see [https://msdn.microsoft.com/library/dd878348(VS.85).aspx](https://msdn.microsoft.com/library/dd878348(VS.85).aspx).


## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>Remove-DatabaseFromAvailabilityGroup -AGName MyAvailabilityGroup -DatabaseName WSS_Content 
```

This example removes the availability group named "MyAvailabilityGroup" from the WSS_Content database.


## PARAMETERS

### -AGName
The name of the availability group from which the databases are being removed.

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

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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
The name of the database to be removed from the availability group. 

NOTE: This parameter should not be used in conjunction with the ProcessAllDatabases parameter.

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

### -Force
Forces a remove from the group.

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

### -KeepSecondaryData
Specifies that copies of the databases on the replicas in the availability group will not be deleted. Otherwise, those database copies will be dropped.

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

### -ProcessAllDatabases
Removes all databases from the current SharePoint farm into the availability group. 

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
