---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLisPort

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an association between a Location Information Server (LIS) port and a location.
This association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an association between a Location Information Server (LIS) port and a location.
This association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsLisPort -ChassisID <String> -PortID <String> -PortIDSubType <PortIDSubType> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes an association between a physical location and a port through which calls will be routed by removing the port from the location configuration database.

Removing a port location will not remove the actual location of the port; it removes only the port.
To remove the location, call the Remove-CsLisLocation cmdlet.
Removing the port will also not remove the switch with the given ChassisID; to remove the switch, call the Remove-CsLisSwitch cmdlet.

If you attempt to remove a port that does not exist, no action will be taken and you will not receive an error or a warning message.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsLisPort cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsLisPort"}

**Below Content Applies To:** Skype for Business Server 2015

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes an association between a physical location and a port through which calls will be routed by removing the port from the location configuration database.

Removing a port location will not remove the actual location of the port; it removes only the port.
To remove the location, call the Remove-CsLisLocation cmdlet.
Removing the port will also not remove the switch with the given ChassisID; to remove the switch, call the Remove-CsLisSwitch cmdlet.

If you attempt to remove a port that does not exist, no action will be taken and you will not receive an error or a warning message.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsLisPort -ChassisID 99-99-99-99-99-99 -PortID 4200 -PortIDSubType 1
```

Example 1 removes the LIS port with the MAC address (ChassisID) 99-99-99-99-99-99, the PortID 4200, and the PortIDSubType 1.
(Note that a value of 1 for PortIDSubType translates into a value of InterfaceAlias.
This parameter and value could also have been entered like this: -PortIDSubType InterfaceAlias)

If this port was associated with a location, that location will not be removed, only the port will be removed from the location mapping.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the LIS port with the MAC address (ChassisID) 99-99-99-99-99-99, the PortID 4200, and the PortIDSubType 1.
(Note that a value of 1 for PortIDSubType translates into a value of InterfaceAlias.
This parameter and value could also have been entered like this: -PortIDSubType InterfaceAlias)

If this port was associated with a location, that location will not be removed, only the port will be removed from the location mapping.

Remove-CsLisPort -ChassisID 99-99-99-99-99-99 -PortID 4200 -PortIDSubType 1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the LIS port with the MAC address (ChassisID) 99-99-99-99-99-99, the PortID 4200, and the PortIDSubType 1.
(Note that a value of 1 for PortIDSubType translates into a value of InterfaceAlias.
This parameter and value could also have been entered like this: -PortIDSubType InterfaceAlias)

If this port was associated with a location, that location will not be removed, only the port will be removed from the location mapping.

Remove-CsLisPort -ChassisID 99-99-99-99-99-99 -PortID 4200 -PortIDSubType 1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLisPort | Where-Object {$_.HouseNumber -eq ""} | Remove-CsLisPort
```

This example removes all port locations that do not have a house number.
The example begins with a call to the Get-CsLisPort cmdlet, which returns a collection of all LIS ports.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a HouseNumber property that is empty; in other words, a HouseNumber that is equal to (-eq) an empty string ("").
Finally, we pipe this collection of port locations that don't have house numbers to the Remove-CsLisPort cmdlet, which removes everything in that collection.

Note that, as in example 1, no locations are removed from the location configuration database, only the ports that reference those locations are removed.
In this case that means there will be invalid locations (they're invalid because HouseNumber is a required property for a location) in the location database that should also be removed.
You can remove locations by calling the Remove-CsLisLocation cmdlet.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all port locations that do not have a house number.
The example begins with a call to the Get-CsLisPort cmdlet, which returns a collection of all LIS ports.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a HouseNumber property that is empty; in other words, a HouseNumber that is equal to (-eq) an empty string ("").
Finally, we pipe this collection of port locations that don't have house numbers to the Remove-CsLisPort cmdlet, which removes everything in that collection.

Note that, as in example 1, no locations are removed from the location configuration database, only the ports that reference those locations are removed.
In this case that means there will be invalid locations (they're invalid because HouseNumber is a required property for a location) in the location database that should also be removed.
You can remove locations by calling the Remove-CsLisLocation cmdlet.

Get-CsLisPort | Where-Object {$_.HouseNumber -eq ""} | Remove-CsLisPort

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all port locations that do not have a house number.
The example begins with a call to the Get-CsLisPort cmdlet, which returns a collection of all LIS ports.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a HouseNumber property that is empty; in other words, a HouseNumber that is equal to (-eq) an empty string ("").
Finally, we pipe this collection of port locations that don't have house numbers to the Remove-CsLisPort cmdlet, which removes everything in that collection.

Note that, as in example 1, no locations are removed from the location configuration database, only the ports that reference those locations are removed.
In this case that means there will be invalid locations (they're invalid because HouseNumber is a required property for a location) in the location database that should also be removed.
You can remove locations by calling the Remove-CsLisLocation cmdlet.

Get-CsLisPort | Where-Object {$_.HouseNumber -eq ""} | Remove-CsLisPort

## PARAMETERS

### -ChassisID
The Media Access Control (MAC) address of the port's switch.
This value will be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PortID
The ID of the port you want to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PortIDSubType
The subtype of the port you want to remove.
This value can be entered as a numeric value or a string, but it must be a valid subtype.
Valid subtypes are:

1: InterfaceAlias

5: InterfaceName

7: LocallyAssigned

```yaml
Type: PortIDSubType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Accepts pipelined input of LIS port objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b8a648af-1064-4a1e-8462-f267b7b72be1(OCS.14).aspx)

[Set-CsLisPort]()

[Get-CsLisPort]()

[Remove-CsLisLocation]()

[Remove-CsLisSwitch]()

[Online Version](http://technet.microsoft.com/EN-US/library/b8a648af-1064-4a1e-8462-f267b7b72be1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b8a648af-1064-4a1e-8462-f267b7b72be1(OCS.16).aspx)

