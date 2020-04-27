---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csonlinelislocation
applicable: Skype for Business Online
title: New-CsOnlineLisLocation
schema: 2.0.0
manager: bulenteg
author: junya
ms.author: junya
ms.reviewer:
---

# New-CsOnlineLisLocation

## SYNOPSIS
Use the New-CsOnlineLisLocation cmdlet to either to create a new emergency dispatch location within an existing civic address, or to create both a new civic address and a location assigned to that address.
There can be multiple locations in a civic address.
Typically the civic address designates the building, and locations are specific parts of that building such as a floor, office, or wing.

## SYNTAX

### ExistingCivicAddress (Default)
```
New-CsOnlineLisLocation -CivicAddressId <Guid> -Location <String> [-CompanyName <String>]
 [-CompanyTaxId <String>] [-HouseNumberSuffix <String>] [-CityAlias <String>] [-Latitude <String>]
 [-Longitude <String>] [-Confidence <String>] [-Elin <String>] [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### CreateCivicAddress
```
New-CsOnlineLisLocation [-Location <String>] [-CompanyName <String>] [-CompanyTaxId <String>]
 [-HouseNumber <String>] [-HouseNumberSuffix <String>] [-StreetName <String>] [-StreetSuffix <String>]
 [-PostDirectional <String>] [-PreDirectional <String>] [-City <String>] [-CityAlias <String>]
 [-StateOrProvince <String>] -CountryOrRegion <String> [-PostalCode <String>] [-Description <String>]
 [-Latitude <String>] [-Longitude <String>] [-Confidence <String>] [-Elin <String>] [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsOnlineLisLocation -CivicAddressId b39ff77d-db51-4ce5-8d50-9e9c778e1617 -Location "Office 101, 1st Floor"
```

This example creates a new location called "Office 101, 1st Floor" in the civic address specified by its identity.


### -------------------------- Example 2 --------------------------
```
New-CsOnlineLisLocation -Location "Office 202, 2nd Floor" -CompanyName "Contoso" -HouseNumber 3910 -StreetName 163rd -StreetSuffix St -City Bellevue -StateOrProvince WA -CountryOrRegion US -PostalCode 98004 -Description "New civic address location" -Elin TEST_ELIN
```

This example creates a new civic address and a location assigned to the address. Location is called "Office 202, 2st Floor" with Elin string "TEST_ELIN"


## PARAMETERS

### -CivicAddressId
Specifies the unique identifier of the civic address that will contain the new location.
If specified, no other address description parameters are allowed.
Civic address identities can be discovered by using the Get-CsOnlineLisCivicAddress cmdlet.

```yaml
Type: Guid
Parameter Sets: ExistingCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
Specifies the country or region of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases: Country
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Location
Specifies an administrator defined description of the new location.
For example, "2nd Floor Cafe", "Main Lobby", or "Office 250".

```yaml
Type: String
Parameter Sets: ExistingCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
Specifies the city of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CityAlias
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompanyName
Specifies the name of your organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases: Name
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompanyTaxId
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies an administrator defined description of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumber
Specifies the numeric portion of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumberSuffix
Specifies the numeric suffix of the civic address.
For example, if the property was multiplexed, the HouseNumberSuffix parameter would be the multiplex specifier: "425A Smith Avenue", or "425B Smith Avenue".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostalCode
Specifies the postal code of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostDirectional
Specifies the directional attribute of the civic address which follows the street name.
For example, "425 Smith Avenue NE".

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreDirectional
Specifies the directional attribute of the civic address which precedes the street name.
For example, "425 NE Smith Avenue ".

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOrProvince
Specifies the state or province of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases: State
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetName
Specifies the street name of the civic address.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetSuffix
Specifies the modifier of the street name.
The street suffix will typically be something like street, avenue, way, or boulevard.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confidence
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Elin
Specifies the Emergency Location Identification Number.
This is used in Direct Routing EGW scenarios.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Latitude
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Longitude
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

