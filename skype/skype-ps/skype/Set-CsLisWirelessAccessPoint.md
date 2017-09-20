---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsLisWirelessAccessPoint

## SYNOPSIS
Creates a Location Information Server (LIS) wireless access point (WAP), creates an association between a WAP and a location (creating a new location if that location doesn't exist), or modifies an existing WAP and its associated location.
The association between a WAP and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### LocationEnumeratedOptionalSet
```
Set-CsLisWirelessAccessPoint -BSSID <String> [-City <String>] [-CompanyName <String>] [-Country <String>]
 [-Description <String>] [-HouseNumber <String>] [-HouseNumberSuffix <String>] [-Location <String>]
 [-PostalCode <String>] [-PostDirectional <String>] [-PreDirectional <String>] [-State <String>]
 [-StreetName <String>] [-StreetSuffix <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### WAPSet
```
Set-CsLisWirelessAccessPoint -BSSID <String> [-Description <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### LocationEnumeratedMandatorySet
```
Set-CsLisWirelessAccessPoint -City <String> -CompanyName <String> -Country <String> -HouseNumber <String>
 -HouseNumberSuffix <String> -Location <String> -PostalCode <String> -PostDirectional <String>
 -PreDirectional <String> -State <String> -StreetName <String> -StreetSuffix <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet allows the administrator to map physical locations to the WAP through which calls will be routed.

The BSSID parameter is the only required parameter for this cmdlet.
If you enter a BSSID value that already exists, this cmdlet will update the location for that WAP based on the location parameters that are supplied.
If the BSSID does not exist, a new WAP location will be created.

If a location with an address exactly matching the address parameters entered here (including null values) does not exist in the location database, a new address will be created based on the parameters entered with this cmdlet.
(You can retrieve a list of locations by calling the `Get-CsLisLocation` cmdlet.) The `Set-CsLisWirelessAccessPoint` cmdlet does not require or prompt for location parameters; you can create a WAP entry without associating it with a location.
It's also possible to create an invalid location with this cmdlet.
A valid location consists of, at minimum, the Location, HouseNumber, StreetName, City, State and Country.
If you do not supply all of these parameters, calls that are received by the referenced WAP may not contain the information required by the emergency operator.
It is recommended that you be as specific as possible with the location parameters and fill in as many as possible.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsLisWirelessAccessPoint -BSSID 99-99-99-99-99-99
```

Example 1 creates or updates a LIS WAP location entry.
The command in this example includes only one (required) parameter: BSSID.
The value of the BSSID is the identifier (in the form of a MAC address) of the WAP, in this case 99-99-99-99-99-99.

Notice that this example does not include any address information.
It's possible to create a WAP entry on the Location Information Server without associating it with an address.
However, emergency calls routed through this WAP may not contain enough information for the emergency operator to identify a location.

IMPORTANT: If a LIS WAP location with this BSSID already exists, it will be replaced by the values in this command.
That means that if this WAP were associated with an address (a physical location), that association would no longer exist because we didn't include any location information in this command.
The location will still exist in the location database, but it will not be associated with this WAP.


### -------------------------- Example 2 --------------------------
```
Set-CsLisWirelessAccessPoint -BSSID 99-99-99-99-99-99 -Location "30/1000" -HouseNumber 1234 -PreDirectional NE -StreetName First -StreetSuffix Avenue -City Redmond -State WA -Country US -PostalCode 99999
```

Example 2 updates the WAP created in Example 1 by adding address information.
(This is actually deleting the existing entry and replacing it with this new entry.) If the address does not exist in the location database, this cmdlet will create that location.


## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point.
This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.
If an entry with the specified BSSID value does not exist, a new WAP location will be created.
If an entry with the specified BSSID does exist, that entry will be replaced.

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet, WAPSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -City
The location city.

Maximum length: 64 characters.

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

### -CompanyName
The name of the company at this location.

Maximum length: 60 characters

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

### -Country
The country/region this location is in.

Maximum length: 2 characters

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

### -Description
A detailed description of this WAP location.

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet, WAPSet
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

Maximum length: 10 characters

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Accepts pipelined input of LIS wireless access point objects.

## OUTPUTS

###  
This cmdlet creates or modifies an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Remove-CsLisWirelessAccessPoint]()

[Get-CsLisWirelessAccessPoint]()

[Get-CsLisLocation]()
