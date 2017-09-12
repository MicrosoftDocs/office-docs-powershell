---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPStateServiceApplicationProxy

## SYNOPSIS
Creates a proxy for a state service application.

## SYNTAX

```
New-SPStateServiceApplicationProxy [-ServiceApplication] <SPStateServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-DefaultProxyGroup] [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
The New-SPStateServiceApplicationProxy cmdlet creates a proxy for a state service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPServiceApplication -Identity 9703f7e2-9521-47c3-bd92-80e3eeba391b | New-SPStateServiceApplicationProxy -DefaultProxyGroup
```

This example creates a new service application proxy, associates it with a provided service application, and adds it to the farm's default proxy group.

### --------------EXAMPLE------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPServiceApplication -Identity 9703f7e2-9521-47c3-bd92-80e3eeba391b | New-SPStateServiceApplicationProxy -DefaultProxyGroup
```

This example creates a new service application proxy, associates it with a provided service application, and adds it to the farm's default proxy group.

## PARAMETERS

### -ServiceApplication
Specifies the state service application to associate with the new proxy.

The type must be a valid name of a state service application (for example, StateServiceApp1); a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPStateServiceApplication object.

```yaml
Type: SPStateServiceApplicationPipeBind
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

### -DefaultProxyGroup
Specifies that the service application proxy is added to the farm's default proxy group.

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

### -Name
Specifies the display name of the new proxy.

The type must be a valid name of a SQL Server database; for example, SessionStateDB1.
Service application proxy; for example, StateSvcAppProxy1.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

