---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsLisLocation

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new location or modifies an existing location in the location configuration database for Enhanced 9-1-1 (E9-1-1).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new location or modifies an existing location in the location configuration database for Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### LocationEnumeratedOptionalSet
```
Set-CsLisLocation [-Instance] <PSObject> [-City <String>] [-CompanyName <String>] [-Country <String>]
 [-HouseNumber <String>] [-HouseNumberSuffix <String>] [-Location <String>] [-PostalCode <String>]
 [-PostDirectional <String>] [-PreDirectional <String>] [-State <String>] [-StreetName <String>]
 [-StreetSuffix <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### LocationEnumeratedMandatorySet
```
Set-CsLisLocation -City <String> -CompanyName <String> -Country <String> -HouseNumber <String>
 -HouseNumberSuffix <String> -Location <String> -PostalCode <String> -PostDirectional <String>
 -PreDirectional <String> -State <String> -StreetName <String> -StreetSuffix <String> [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Microsoft Lync Server 2010 the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
(This map is known as a wiremap.) This cmdlet adds a new address to or modifies an existing address in the list of locations that are stored in the location configuration database on the Location Information Server (LIS).
The locations are subsequently matched to a list of valid addresses provided by the emergency services provider working with the company.

The combination of all required parameters (other than Instance) for this cmdlet constitutes a unique entry.
Changing any of these parameters will create a new location rather than modifying an existing location.
Note that although all these parameters are required, some can contain null values.
The parameters that must contain non-null values are: Location, HouseNumber, StreetName, City, State, and Country.
To change an existing value, you must use the Instance parameter (or pipe an instance to the cmdlet).

In addition to using this cmdlet to create a location, a location will also be created automatically when a new address is entered for port, subnet, switch, or wireless access point information.
This information can be entered by using the Set-CsLisPort, Set-CsLisSubnet, Set-CsLisSwitch, and Set-CsLisWirelessAccessPoint cmdlets.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsLisLocation cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsLisLocation"}

**Below Content Applies To:** Lync Server 2013

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Lync Server the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
(This map is known as a wiremap.) This cmdlet adds a new address to or modifies an existing address in the list of locations that are stored in the location configuration database on the Location Information Server (LIS).
The locations are subsequently matched to a list of valid addresses provided by the emergency services provider working with the company.

The combination of all required parameters (other than Instance) for this cmdlet constitutes a unique entry.
Changing any of these parameters will create a new location rather than modifying an existing location.
Note that although all these parameters are required, some can contain null values.
The parameters that must contain non-null values are: Location, HouseNumber, StreetName, City, State, and Country.
To change an existing value, you must use the Instance parameter (or pipe an instance to the cmdlet).

In addition to using this cmdlet to create a location, a location will also be created automatically when a new address is entered for port, subnet, switch, or wireless access point information.
This information can be entered by using the Set-CsLisPort, Set-CsLisSubnet, Set-CsLisSwitch, and Set-CsLisWirelessAccessPoint cmdlets.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsLisLocation cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsLisLocation"}

**Below Content Applies To:** Skype for Business Server 2015

E9-1-1 enables those who answer emergency calls to determine the caller's geographic location without having to ask the caller for that information.
In Skype for Business Server 2015 the location is determined based on mapping the caller's port, subnet, switch, or wireless access point to a specific location.
(This map is known as a wiremap.) This cmdlet adds a new address to or modifies an existing address in the list of locations that are stored in the location configuration database on the Location Information Server (LIS).
The locations are subsequently matched to a list of valid addresses provided by the emergency services provider working with the company.

The combination of all required parameters (other than Instance) for this cmdlet constitutes a unique entry.
Changing any of these parameters will create a new location rather than modifying an existing location.
Note that although all these parameters are required, some can contain null values.
The parameters that must contain non-null values are: Location, HouseNumber, StreetName, City, State, and Country.
To change an existing value, you must use the Instance parameter (or pipe an instance to the cmdlet).

In addition to using this cmdlet to create a location, a location will also be created automatically when a new address is entered for port, subnet, switch, or wireless access point information.
This information can be entered by using the Set-CsLisPort cmdlet, the Set-CsLisSubnet cmdlet, the Set-CsLisSwitch cmdlet, and the Set-CsLisWirelessAccessPoint cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsLisLocation -Location Bldg30NEWing -HouseNumber 1000 -StreetName Main -City Redmond -State WA -Country US
```

Example 1 creates a new location named Bldg30NEWing.
This command fills in all the parameters that are required to have values for a location to be created.
In this example the address of the location is 1000 Main, Redmond, WA, US.
That address is entered by specifying the HouseNumber parameter with the value 1000; the StreetName parameter with the value Main; the City parameter with the value Redmond; and the Country parameter with the value US.

Note that if you run a command with the parameters shown here you will be prompted to enter more parameters.
However, you can simply press Enter at each prompt without supplying values and your location will be created.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new location named Bldg30NEWing.
This command fills in all the parameters that are required to have values for a location to be created.
In this example the address of the location is 1000 Main, Redmond, WA, US.
That address is entered by specifying the HouseNumber parameter with the value 1000; the StreetName parameter with the value Main; the City parameter with the value Redmond; and the Country parameter with the value US.

Note that if you run a command with just the parameters shown here you will be prompted to enter additional parameters.
However, you can simply press Enter at each prompt without supplying values and your location will be created.

Set-CsLisLocation -Location Bldg30NEWing -HouseNumber 1000 -StreetName Main -City Redmond -State WA -Country US

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new location named Bldg30NEWing.
This command fills in all the parameters that are required to have values for a location to be created.
In this example the address of the location is 1000 Main, Redmond, WA, US.
That address is entered by specifying the HouseNumber parameter with the value 1000; the StreetName parameter with the value Main; the City parameter with the value Redmond; and the Country parameter with the value US.

Note that if you run a command with just the parameters shown here you will be prompted to enter additional parameters.
However, you can simply press Enter at each prompt without supplying values and your location will be created.

Set-CsLisLocation -Location Bldg30NEWing -HouseNumber 1000 -StreetName Main -City Redmond -State WA -Country US

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsLisLocation -Location "Suite 100/Office 20" -CompanyName "Litware, Inc." -HouseNumber 1234 -HouseNumberSuffix "" -PreDirectional "" -StreetName Main -StreetSuffix St -PostDirectional "" -City Redmond -State WA -PostalCode 99999 -Country US
```

This example is similar to Example 1 in that it creates a new location.
However, in this example the command specifies all the parameters for the cmdlet.
This will avoid the prompts that will follow the command in Example 1 because this example instead simply sets any values we want to leave blank to empty strings.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example is similar to Example 1 in that it creates a new location.
However, in this example the command specifies all the parameters for the cmdlet.
This will avoid the prompts that will follow the command in Example 1 because this example instead simply sets any values we want to leave blank to empty strings.

Set-CsLisLocation -Location "Suite 100/Office 20" -CompanyName "Litware, Inc." -HouseNumber 1234 -HouseNumberSuffix "" -PreDirectional "" -StreetName Main -StreetSuffix St -PostDirectional "" -City Redmond -State WA -PostalCode 99999 -Country US

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example is similar to Example 1 in that it creates a new location.
However, in this example the command specifies all the parameters for the cmdlet.
This will avoid the prompts that will follow the command in Example 1 because this example instead simply sets any values we want to leave blank to empty strings.

Set-CsLisLocation -Location "Suite 100/Office 20" -CompanyName "Litware, Inc." -HouseNumber 1234 -HouseNumberSuffix "" -PreDirectional "" -StreetName Main -StreetSuffix St -PostDirectional "" -City Redmond -State WA -PostalCode 99999 -Country US

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
$a = Get-CsLisLocation | Where-Object {$_.Location -ceq "Bldg30NEWing"}
Set-CsLisLocation -Instance $a -StreetSuffix Street
```

This example modifies the location created in Example 1.
The first line in the example begins with a call to the Get-CsLisLocation cmdlet.
This returns a collection of all locations defined within the Lync Server 2010 deployment.
This collection is then piped to the Where-Object cmdlet.
Where-Object retrieves all items from the collection where the Location property is equal to (-ceq, case-sensitive equals) Bldg30NEWing.
The object matching this criteria is assigned to the variable $a.

In line 2 we call Set-CsLisLocation.
The first parameter is the Instance parameter.
We pass this parameter the variable ($a) containing the object we retrieved in line 1, which just happens to be the object we want to modify.
We then specify the StreetSuffix parameter, passing it a value of Street.
This will change the value of the StreetSuffix property of the location in variable $a to Street.

Keep in mind that because Location is not a unique property, the Where-Object cmdlet could return more than one location.
If it does, this example will not work.
To modify multiple locations at once, see Example 3.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example modifies the location created in Example 1.
The first line in the example begins with a call to the Get-CsLisLocation cmdlet.
This returns a collection of all locations defined within the Lync Server deployment.
This collection is then piped to the Where-Object cmdlet.
Where-Object retrieves all items from the collection where the Location property is equal to (-ceq, case-sensitive equals) Bldg30NEWing.
The object matching this criteria is assigned to the variable $a.

In line 2 we call Set-CsLisLocation.
The first parameter is the Instance parameter.
We pass this parameter the variable ($a) containing the object we retrieved in line 1, which just happens to be the object we want to modify.
We then specify the StreetSuffix parameter, passing it a value of Street.
This will change the value of the StreetSuffix property of the location in variable $a to Street.

Keep in mind that because Location is not a unique property, the Where-Object cmdlet could return more than one location.
If it does, this example will not work.
To modify multiple locations at once, see Example 4.

$a = Get-CsLisLocation | Where-Object {$_.Location -ceq "Bldg30NEWing"}

Set-CsLisLocation -Instance $a -StreetSuffix Street

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the location created in Example 1.
The first line in the example begins with a call to the Get-CsLisLocation cmdlet.
This returns a collection of all locations defined within the Skype for Business Server 2015 deployment.
This collection is then piped to the Where-Object cmdlet.
The Where-Object cmdlet retrieves all items from the collection where the Location property is equal to (-ceq, case-sensitive equals) Bldg30NEWing.
The object matching this criteria is assigned to the variable $a.

In line 2 we call the Set-CsLisLocation cmdlet.
The first parameter is the Instance parameter.
We pass this parameter the variable ($a) containing the object we retrieved in line 1, which just happens to be the object we want to modify.
We then specify the StreetSuffix parameter, passing it a value of Street.
This will change the value of the StreetSuffix property of the location in variable $a to Street.

Keep in mind that because Location is not a unique property, the Where-Object cmdlet could return more than one location.
If it does, this example will not work.
To modify multiple locations at once, see Example 4.

$a = Get-CsLisLocation | Where-Object {$_.Location -ceq "Bldg30NEWing"}

Set-CsLisLocation -Instance $a -StreetSuffix Street

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
$a = Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}
$a | Set-CsLisLocation -StreetSuffix Avenue
```

Example 4 modifies the StreetSuffix property of one or more location objects.
The example begins much like Example 3.
We begin by calling Get-CsLisLocation to retrieve all the locations.
We then pipe this collection of locations to Where-Object, which narrows down the collection to only those locations with a Location property equal to NorthCampus.
This new collection is stored in variable $a.
In line 2 we pipe the contents of $a to the Set-CsLisLocation cmdlet.
This cmdlet will go through each object (each location) that was stored in $a and modify that object.
In this case the modification is to change the StreetSuffix property of each object to Avenue.

The commands in this example can also be accomplished without the use of a variable.
Simply pipe the results of the Where-Object command to the Set-CsLisLocation command, like this:

Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"} | Set-CsLisLocation -StreetSuffix Avenue

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 modifies the StreetSuffix property of one or more location objects.
The example begins much like Example 3.
We begin by calling Get-CsLisLocation to retrieve all the locations.
We then pipe this collection of locations to Where-Object, which narrows down the collection to only those locations with a Location property equal to NorthCampus.
This new collection is stored in variable $a.
In line 2 we pipe the contents of $a to the Set-CsLisLocation cmdlet.
This cmdlet will go through each object (each location) that was stored in $a and modify that object.
In this case the modification is to change the StreetSuffix property of each object to Avenue.

The commands in this example can also be accomplished without the use of a variable.
Simply pipe the results of the Where-Object command to the Set-CsLisLocation command, like this:

Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"} | Set-CsLisLocation -StreetSuffix Avenue

$a = Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}

$a | Set-CsLisLocation -StreetSuffix Avenue

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 modifies the StreetSuffix property of one or more location objects.
The example begins much like Example 3.
We begin by calling the Get-CsLisLocation cmdlet to retrieve all the locations.
We then pipe this collection of locations to the Where-Object cmdlet, which narrows down the collection to only those locations with a Location property equal to NorthCampus.
This new collection is stored in variable $a.
In line 2 we pipe the contents of $a to the Set-CsLisLocation cmdlet.
This cmdlet will go through each object (each location) that was stored in $a and modify that object.
In this case the modification is to change the StreetSuffix property of each object to Avenue.

The commands in this example can also be accomplished without the use of a variable.
Simply pipe the results of the Where-Object cmdlet command to the Set-CsLisLocation cmdlet, like this:

Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"} | Set-CsLisLocation -StreetSuffix Avenue

$a = Get-CsLisLocation | Where-Object {$_.Location -ceq "NorthCampus"}

$a | Set-CsLisLocation -StreetSuffix Avenue

## PARAMETERS

### -Instance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A reference to a location object.
This object must contain the properties required to create a location.
You can retrieve an object of this type by calling Get-CsLisLocation.



**Below Content Applies To:** Skype for Business Server 2015

A reference to a location object.
This object must contain the properties required to create a location.
You can retrieve an object of this type by calling the Get-CsLisLocation cmdlet.



```yaml
Type: PSObject
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumberSuffix
Additional information for the house number, such as 1/2 or A.
For example, 1234 1/2 Oak Street or 1234 A Elm Street.

Note: To designate an apartment number or office suite, you must use the Location parameter.
For example, -Location "Suite 100/Office 150".

Maximum length: 5 characters

```yaml
Type: String
Parameter Sets: LocationEnumeratedOptionalSet
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
Accept pipeline input: False
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
It creates or modifies an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/955cdce0-250d-48b7-8891-5355d801911f(OCS.14).aspx)

[Remove-CsLisLocation]()

[Get-CsLisLocation]()

[Set-CsLisPort]()

[Set-CsLisSubnet]()

[Set-CsLisSwitch]()

[Set-CsLisWirelessAccessPoint]()

[Get-CsLisCivicAddress]()

[Online Version](http://technet.microsoft.com/EN-US/library/955cdce0-250d-48b7-8891-5355d801911f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/955cdce0-250d-48b7-8891-5355d801911f(OCS.16).aspx)

