---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Add-SPRoutingMachineInfo

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Adds a new routing target to the farm.



## SYNTAX

```
Add-SPRoutingMachineInfo [-RequestManagementSettings] <SPRequestManagementSettingsPipeBind> [-Name] <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Availability <SPRoutingMachineAvailability>]
 [-OutgoingPort <Int32>] [-OutgoingScheme <SPRoutingOutgoingScheme>] [-StaticWeight <Double>]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Add-SPRoutingMachineInfo cmdlet to add a new routing target to the farm by using the RequestManagementSettings and Name parameters.

## EXAMPLES

### -------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>Add-SPRoutingMachineInfo -RequestManagementSettings $rm -Name <MachineName> -Availability Available

C:\PS>
```

This example adds a routing target for a specified identity to the farm.

### -------------EXAMPLE-------------- (SharePoint Server 2016)
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>Add-SPRoutingMachineInfo -RequestManagementSettings $rm -Name <MachineName> -Availability Available

C:\PS>
```

This example adds a routing target for a specified identity to the farm.

## PARAMETERS

### -RequestManagementSettings
Specifies the name of the request management settings object to add to the routing target.

```yaml
Type: SPRequestManagementSettingsPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the computer to add to the route.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -Availability
Specifies whether or not the added computer will be available for routing.

The valid values are:

--Available
--Unavailable

```yaml
Type: SPRoutingMachineAvailability
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutgoingPort
Specifies the port used by Request Manager to make an outgoing connection.

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

### -OutgoingScheme
Determines the Http scheme of outgoing connections.

The valid values are:

--SameAsIncoming
--Http
--Https

```yaml
Type: SPRoutingOutgoingScheme
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StaticWeight
Specifies the static weight of a computer routing that is used by Request Manager.
If the static weight is higher, more requests will be routed to the computer.

```yaml
Type: Double
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

[Get-SPRoutingMachineInfo]()

[Remove-SPRoutingMachineInfo]()

[Set-SPRoutingMachineInfo]()

