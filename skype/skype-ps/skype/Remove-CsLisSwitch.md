---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLisSwitch

## SYNOPSIS
Removes a Location Information Server (LIS) network switch.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsLisSwitch -ChassisID <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 (E9-1-1) allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes a switch from the location configuration database.
Removing a switch will not remove the actual location; it removes only the switch.
To remove the location, call the `Remove-CsLisLocation` cmdlet.

You cannot remove a switch if the ChassisID of the switch is in use by a port.
(Run the following command to find out which ChassisIDs are in use by ports: `Get-CsLisPort | Select-Object ChassisID`.) You must first remove all ports with the given ChassisID before you can remove the switch.

If you attempt to remove a switch that does not exist, no action will be taken and you will not receive an error or a warning message.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsLisSwitch -ChassisID 99-99-99-99-99-99
```

Example 1 removes the LIS switch with the MAC address (ChassisID) 99-99-99-99-99-99.

This command will not succeed if the ChassisID is referenced by a port.
Also, if this switch was associated with a location, that location will not be removed, only the switch will be removed from the location mapping.


### -------------------------- Example 2 --------------------------
```
Get-CsLisSwitch | Where-Object {$_.City -eq ""} | Remove-CsLisSwitch
```

This example removes all switches that do not have a city.
The example begins with a call to the `Get-CsLisSwitch` cmdlet, which returns a collection of all switches.
This collection is piped to the `Where-Object` cmdlet, which finds the items in that collection that have a City property that is empty; in other words, a City that is equal to (-eq) an empty string ("").
Finally, we pipe this collection of switches that don't have cities to the `Remove-CsLisSwitch` cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location database, only the switches that reference those locations are removed.
In this case that means there will be invalid locations (they're invalid because City is a required property for a location) in the location database that should also be removed.
You can remove locations by calling the `Remove-CsLisLocation` cmdlet.


## PARAMETERS

### -ChassisID
The Media Access Control (MAC) address of the network switch.
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
Accepts pipelined input of LIS switch objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Set-CsLisSwitch]()

[Get-CsLisSwitch]()

[Remove-CsLisLocation]()

[Get-CsLisPort]()
