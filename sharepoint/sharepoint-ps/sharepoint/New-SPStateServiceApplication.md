---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPStateServiceApplication

## SYNOPSIS
Creates a new state service application.

## SYNTAX

```
New-SPStateServiceApplication [-Name] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Database <SPStateDatabasePipeBind>] [<CommonParameters>]
```

## DESCRIPTION
The New-SPStateServiceApplication cmdlet creates a new state service application on the farm.
A state service application is the container for state service databases.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>New-SPStateServiceApplication -Name "State Service Application 1"
```

This example creates a new state service application, named State Service Application 1, on the farm.

State service applications are the container for databases.
State service applications must have a proxy and a database created to be usable.

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>New-SPStateServiceApplication -Name "State Service Application 1"
```

This example creates a new state service application, named State Service Application 1, on the farm.

State service applications are the container for databases.
State service applications must have a proxy and a database created to be usable.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>New-SPStateServiceDatabase -Name "State Service Database" | New-SPStateServiceApplication -Name "StateServiceApp1" | New-SPStateServiceApplicationProxy -DefaultProxyGroup
```

This example creates a new state service database, a new state service application associated with the database and a new state service application proxy associated with the state service application proxy.

This example configures all the objects required to have State Service operational on a farm.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>New-SPStateServiceDatabase -Name "State Service Database" | New-SPStateServiceApplication -Name "StateServiceApp1" | New-SPStateServiceApplicationProxy -DefaultProxyGroup
```

This example creates a new state service database, a new state service application associated with the database and a new state service application proxy associated with the state service application proxy.

This example configures all the objects required to have State Service operational on a farm.

## PARAMETERS

### -Name
Specifies the name of the new service application.

The type must be a valid name of a service application; for example, StateSvcApp1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Database
Specifies the state service database that is associated with the new service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a state database (for example, StateSvcDB1); or an instance of a valid SPStateServiceDatabase object.

```yaml
Type: SPStateDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

