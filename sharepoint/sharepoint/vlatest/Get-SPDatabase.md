---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPDatabase

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPDatabase [[-Identity] <SPDatabasePipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPDatabase -ServerInstance <SPDatabaseServiceInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_3
```
Get-SPDatabase [-AssignmentCollection <SPAssignmentCollection>] -Name <String>
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPDatabase cmdlet displays all public properties of a database to the current window.
If the Identity parameter is specified, only properties of that ID are displayed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPDatabase -ServerInstance "ServerA\SharePoint"
```

This example gets all databases on a specific named SQL Server Express instance.

### --------------------EXAMPLE--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPDatabase -ServerInstance "ServerA\SharePoint"
```

This example gets all databases on a specific named SQL Server Express instance.

## PARAMETERS

### -Identity
Specifies the name of the database to display public properties.

The type must be a valid GUID, in the form 1234-3456-567kg.

```yaml
Type: SPDatabasePipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServerInstance
Specifies the name of the SQL instance that contains the database in either the form "Server" for a default SQL instance or "Server\Instance" for a named SQL instance.

```yaml
Type: SPDatabaseServiceInstancePipeBind
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

### -Name
{{Fill Name Description}}

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

