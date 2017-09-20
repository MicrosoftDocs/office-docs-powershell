---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPStateServiceDatabase

## SYNOPSIS
Creates and provisions a new state service database, and installs the state database schema into it.

## SYNTAX

```
New-SPStateServiceDatabase [-Name] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseCredentials <PSCredential>] [-DatabaseServer <String>]
 [-ServiceApplication <SPStateServiceApplicationPipeBind>] [-Weight <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The New-SPStateServiceDatabase cmdlet creates and a new state service database.
This cmdlet installs the session state database schema in the state service database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPStateServiceApplication -name "State Service Application 1" | New-SPStateServiceDatabase -Name "statedata1" -DatabaseServer "localhost"
```

This example creates a new state service database by using Windows authentication, and associates it with the provided service application.

### --------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPStateServiceApplication -name "State Service Application 1" | New-SPStateServiceDatabase -Name "statedata1" -DatabaseServer "localhost"
```

This example creates a new state service database by using Windows authentication, and associates it with the provided service application.

### --------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
C:\PS>$cred = Get-Credential

C:\PS>Get-SPStateServiceApplication -name "State Service Application 1" | New-SPStateServiceDatabase -Name "statedata1" -DatabaseServer "localhost" -DatabaseCredentials $cred
```

This example creates a new state service database, a new state service application associated with the database and a new state service application proxy associated with the state service application proxy.

This example configures all the objects required to have State Service operational on a farm.

### --------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>$cred = Get-Credential

C:\PS>Get-SPStateServiceApplication -name "State Service Application 1" | New-SPStateServiceDatabase -Name "statedata1" -DatabaseServer "localhost" -DatabaseCredentials $cred
```

This example creates a new state service database, a new state service application associated with the database and a new state service application proxy associated with the state service application proxy.

This example configures all the objects required to have State Service operational on a farm.

## PARAMETERS

### -Name
Specifies the name for the state service database that is stored in SQL Server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the database credentials for SQL Authentication used to access the state service database.
If this parameter is not specified, Windows authentication is used.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the name of the host server for the state service database.

The type must be a valid SQL Server host name; for example, SQLServerHost1.

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

### -ServiceApplication
Specifies the state service application to add the state database to.

The type must be a valid name of a state service application (for example, StateServiceApp1); a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPStateServiceApplication object.

```yaml
Type: SPStateServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Weight
Specifies the weight for the state database.
The default value is 1.

This parameter is used when new rows of data are allocated among the collection of databases that are associated with a service application

The type must be a valid integer in the range of 1 to 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
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

## OUTPUTS

## NOTES

## RELATED LINKS

