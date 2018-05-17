---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsLisPort
schema: 2.0.0
---

# Set-CsLisPort

## SYNOPSIS
Creates a Location Information Server (LIS) port, creates an association between a port and a location (creating a new location if that location doesn't exist), or modifies an existing port and its associated location.
The association between a port and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### LocationEnumeratedOptionalSet
```
Set-CsLisPort -ChassisID <String> [-City <String>] [-CompanyName <String>] [-Country <String>]
 [-Description <String>] [-HouseNumber <String>] [-HouseNumberSuffix <String>] [-Location <String>]
 -PortID <String> [-PortIDSubType <PortIDSubType>] [-PostalCode <String>] [-PostDirectional <String>]
 [-PreDirectional <String>] [-State <String>] [-StreetName <String>] [-StreetSuffix <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### PortSet
```
Set-CsLisPort -ChassisID <String> [-Description <String>] -PortID <String> [-PortIDSubType <PortIDSubType>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### LocationEnumeratedMandatorySet
```
Set-CsLisPort -City <String> -CompanyName <String> -Country <String> -HouseNumber <String>
 -HouseNumberSuffix <String> -Location <String> -PostalCode <String> -PostDirectional <String>
 -PreDirectional <String> -State <String> -StreetName <String> -StreetSuffix <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet allows the administrator to map physical locations to the port through which the client is connected.

The combination of ChassisID, PortID and PortIDSubType makes a unique port location.
If you enter a ChassisID/PortID/PortIDSubType key combination that already exists, this cmdlet will update the location for that port based on the location parameters that are supplied.
If the key combination does not exist, a new port location will be created.

If a location with an address exactly matching the address parameters entered here (including null values) does not exist in the location database, a new address will be created based on the parameters entered with this cmdlet.
(You can retrieve a list of locations by calling the `Get-CsLisLocation` cmdlet.) The `Set-CsLisPort` cmdlet does not require or prompt for location parameters; you can create a port entry without associating it with a location.
It's also possible to create an invalid location with this cmdlet.
A valid location consists of, at minimum, the Location, HouseNumber, StreetName, City, State and Country.
If you do not supply all of these parameters, calls that are received by the referenced port may not contain the information required by the emergency operator (depending on whether valid settings are available for a switch, subnet, or wireless access point that can be used in place of port settings).
It is recommended that you be as specific as possible with the location parameters and fill in as many as possible.

One of the required parameters of this cmdlet is ChassisID.
ChassisID is the Media Access Control (MAC) address of the port's network switch.
If this switch does not exist in the location database, this cmdlet will create that switch.
You can retrieve existing switches by calling the `Get-CsLisSwitch` cmdlet.
Keep in mind that although a new switch entry will be created, that switch will not be automatically associated with the location information entered using the `Set-CsLisPort` cmdlet; you must set the switch location with the `Set-CsLisSwitch` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsLisPort -ChassisID 99-99-99-99-99-99 -PortID 4200 -PortIDSubType 1
```

Example 1 creates or updates a LIS port location entry.
The command in this example includes three parameters: ChassisID, PortID and PortIDSubtype.
The value of the ChassisID is the MAC address 99-99-99-99-99-99, the value of the PortID is 4200 and the value of the PortIDSubType is 1.
(Note that a value of 1 for PortIDSubType translates into a value of InterfaceAlias.
This parameter and value could also have been entered like this: `-PortIDSubType InterfaceAlias`.) These three parameters are required to create a unique instance of a port location.

Note that this example does not include any address information.
It's possible to create a port entry on the Location Information Server without associating it with an address.
However, emergency calls routed through this port may not (depending on subnet or switch locations that have been defined) contain enough information for the emergency operator to identify a location.

IMPORTANT: If a LIS port location with this key combination already exists, it will be replaced by the values in this command.
That means that if this port were associated with an address (a physical location), that association would no longer exist because we didn't include any location information in this command.
The location will still exist in the location database, but it will not be associated with this port.


### -------------------------- Example 2 --------------------------
```
Set-CsLisPort -ChassisID 99-99-99-99-99-99 -PortID 4200 -PortIdSubType 1 -Location "30/1000" -HouseNumber 1234 -PreDirectional NE -StreetName First -StreetSuffix Avenue -City Redmond -State WA -Country US -PostalCode 99999
```

Example 2 updates the port created in Example 1 by adding address information.
If the address does not exist in the location database, this cmdlet will create that location.


### -------------------------- Example 3 --------------------------
```
$a = Get-CsLisPort | Where-Object {$_.ChassisID -eq "99-99-99-99-99-88"}

$a | Set-CsLisPort -Location "30/1000" -HouseNumber 1234 -StreetName First -StreetSuffix Avenue -City Redmond -State WA -Country US -PostalCode 99999
```

This example updates all locations defined for ports with a MAC address (ChassisID) of 99-99-99-99-99-88.
The first line in this example begins with a call to the `Get-CsLisPort` cmdlet, which retrieves all the ports that have been defined in the LIS service.
That collection of ports is piped to the `Where-Object` cmdlet, which finds all the items in the collection with a ChassisID equal to (-eq) 99-99-99-99-99-88.
This collection of ports with the ChassisID 99-99-99-99-99-88 is assigned to the variable $a.

In the second line of this example, we pipe the contents of variable $a (the collection of LIS ports with the ChassisID 99-99-99-99-99-88) to the `Set-CsLisPort` cmdlet.
This cmdlet will take each item in that collection and update it with the values in the parameters specified (Location, HouseNumber, StreetName, StreetSuffix, City, State, Country, and PostalCode).


## PARAMETERS

### -ChassisID
The MAC address of the port's switch.
This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab, or as an IP address.
If the combination of ChassisID, PortID, and PortIDSubType is unique, a new port location will be created.
If this combination is not unique, the port location with that key combination will be updated with the parameter values supplied with the command.

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet, PortSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -City
The location city of this port.

Maximum length: 64 characters.

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -CompanyName
The name of the company at this location.

Maximum length: 60 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Country
The country/region this port is in.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Description
A detailed description of this port location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet, PortSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HouseNumber
The house number of the location for the port.
For a company this is the number on the street where the company is located.

Maximum length: 10 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HouseNumberSuffix
Additional information for the house number, such as 1/2 or A.
For example, 1234 1/2 Oak Street or 1234 A Elm Street.

Note: To designate an apartment number or office suite, you must use the Location parameter.
For example, `-Location "Suite 100/Office 150"`.

Maximum length: 5 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Location
The name for this location.
Typically this value is the name of a location more specific than the civic address, such as an office number, but it can be any string value.

Maximum length: 20 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PortID
The ID of the port associated with this location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet, PortSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PortIDSubType
The subtype of the port.
This value can be entered as a numeric value or a string, but it must be a valid subtype.
Valid subtypes are:

1: InterfaceAlias

5: InterfaceName

7: LocallyAssigned

Default: 7 (LocallyAssigned)

```yaml
Type: PortIDSubType
Parameter Sets: LocationEnumeratedOptionalSet, PortSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PostalCode
The postal code associated with this location.

Maximum length: 10 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PostDirectional
The directional designation of a street name.
For example, NE or NW for Main Street NE or 7th Avenue NW.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PreDirectional
The directional designation for a street name that precedes the name of the street.
For example, NE or NW for NE Main Street or NW 7th Avenue.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -State
The state or province associated with this location.

Maximum length: 2 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StreetName
The name of the street for this location.

Maximum length: 60 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StreetSuffix
The type of street designated in a street name, such as Street, Avenue, or Court.

Maximum length: 10 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
This cmdlet creates or modifies an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Remove-CsLisPort](Remove-CsLisPort.md)

[Get-CsLisPort](Get-CsLisPort.md)

[Get-CsLisLocation](Get-CsLisLocation.md)

[Get-CsLisSwitch](Get-CsLisSwitch.md)

