---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLisLocation

## SYNOPSIS
Removes a location from the location configuration database for Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### LocationEnumeratedMandatorySet
```
Remove-CsLisLocation -City <String> -CompanyName <String> -Country <String> -HouseNumber <String>
 -HouseNumberSuffix <String> -Location <String> -PostalCode <String> -PostDirectional <String>
 -PreDirectional <String> -State <String> -StreetName <String> -StreetSuffix <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### LocationEnumeratedOptionalSet
```
Remove-CsLisLocation [-City <String>] [-CompanyName <String>] [-Country <String>] [-HouseNumber <String>]
 [-HouseNumberSuffix <String>] [-Location <String>] [-PostalCode <String>] [-PostDirectional <String>]
 [-PreDirectional <String>] [-State <String>] [-StreetName <String>] [-StreetSuffix <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Skype for Business Server the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
This cmdlet removes a location from the location configuration database.
All properties of a location combined make the location unique, so you must enter all non-null properties of the location to remove it.
If you do not enter all non-null properties of the location you want to remove (and no other location contains only the properties you specified), no locations will be removed.
You won't receive an error in this case, but no action will occur.

This cmdlet will not remove locations that are associated with a Location Information Server (LIS) port, subnet, switch, or wireless access point.
If you attempt to remove a location referenced by any of these devices, you'll receive an error.
You must remove all references before removing the location.
You can use the `Remove-CsLisPort` cmdlet, the `Remove-CsLisSubnet` cmdlet, the `Remove-CsLisSwitch` cmdlet and the `Remove-CsLisWirelessAccessPoint` cmdlet to remove these references.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsLisLocation -Location Bldg30NEWing -HouseNumber 1000 -StreetName Main -City Redmond -State WA -Country US
```

Example 1 removes a location named Bldg30NEWing.
This command specifies values for the parameters Location, HouseNumber, StreetName, City, State and Country.
This means that those are the only properties of the location to be deleted that contain non-null values.
If you don't supply parameter values for all non-null properties, the location will not be deleted.
You will be prompted for any parameter that you haven't specified in the command, but if they contain null values you can simply press Enter at each prompt.


### -------------------------- Example 2 --------------------------
```
Get-CsLisLocation -Unreferenced | Remove-CsLisLocation
```

This example will remove all locations that are not referenced by a LIS port, subnet, switch, or wireless access point.
The command begins with a call to the `Get-CsLisLocation` cmdlet, specifying the Unreferenced parameter.
This will return a collection of all locations that are not referenced by a LIS port, subnet, switch, or wireless access point.
This collection is then piped to the `Remove-CsLisLocation` cmdlet, which removes each location in the collection.


## PARAMETERS

### -City
The location city.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -CompanyName
The name of the company at this location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Country
The country/region this location is in.
This value will contain two characters or less.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HouseNumber
The house number of the location.
For a company this is the number on the street where the company is located.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HouseNumberSuffix
Additional information for the house number, such as 1/2 or A.
For example, 1234 1/2 Oak Street or 1234 A Elm Street.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Location
The name for this location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PostalCode
The postal code associated with this location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PostDirectional
The directional designation of a street name.
For example, NE or NW for Main Street NE or 7th Avenue NW.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -PreDirectional
The directional designation for a street name that precedes the name of the street.
For example, NE or NW for NE Main Street or NW 7th Avenue.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -State
The state or province associated with this location.
This value will be two characters or less.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StreetName
The name of the street for this location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -StreetSuffix
The type of street designated in a street name, such as Street, Avenue, or Court.

```yaml
Type: String
Parameter Sets: LocationEnumeratedMandatorySet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
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
Accepts pipelined input of LIS location objects.

## OUTPUTS

###  
This cmdlet does not return a value or object.
It removes an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Set-CsLisLocation]()

[Get-CsLisLocation]()

[Remove-CsLisPort]()

[Remove-CsLisSubnet]()

[Remove-CsLisSwitch]()

[Remove-CsLisWirelessAccessPoint]()

[Get-CsLisCivicAddress]()
