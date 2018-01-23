---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPRoutingMachineInfo
schema: 2.0.0
---

# Set-SPRoutingMachineInfo

## SYNOPSIS
Sets routing target properties.


## SYNTAX

```
Set-SPRoutingMachineInfo [-Identity] <SPRoutingMachineInfoPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Availability <SPRoutingMachineAvailability>]
 [-ClearOutgoingPort] [-OutgoingPort <Int32>] [-OutgoingScheme <SPRoutingOutgoingScheme>]
 [-StaticWeight <Double>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPRoutingMachineInfo` cmdlet to set routing target properties by using the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE---------------------
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>$m=Get-SPRoutingMachineInfo -RequestManagementSettings $rm -Name <MachineName>

C:\PS>Set-SPRoutingMachineInfo -Identity $m -Availability Unavailable
```

This example sets the "Availability" routing target property to Unavailable for a specified identity.

## PARAMETERS

### -Identity
Specifies the name of the request management settings object to set.

```yaml
Type: SPRoutingMachineInfoPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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
Specifies whether or not the specified computer will be available for routing.

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

### -ClearOutgoingPort
Clears the outgoing port if it is set.

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
Determines the schema of outgoing connections.

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
Specifies whether the static weight of a computer routing is used by Request Manager.
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

[Add-SPRoutingMachineInfo](Add-SPRoutingMachineInfo.md)

[Get-SPRoutingMachineInfo](Get-SPRoutingMachineInfo.md)

[Remove-SPRoutingMachineInfo](Remove-SPRoutingMachineInfo.md)
