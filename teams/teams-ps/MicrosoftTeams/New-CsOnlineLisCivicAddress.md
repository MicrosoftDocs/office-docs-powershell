---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlineliscivicaddress
schema: 2.0.0
title: New-CsOnlineLisCivicAddress
---

# New-CsOnlineLisCivicAddress

## SYNOPSIS
Use the New-CsOnlineLisCivicAddress cmdlet to create a civic address in the Location Information Service (LIS).

## SYNTAX

```
New-CsOnlineLisCivicAddress -CompanyName <string> -CountryOrRegion <string> [-City <string>] [-CityAlias <string>] [-CompanyTaxId <string>]
[-Description <string>] [-Elin <string>] [-Force] [-HouseNumber <string>] [-HouseNumberSuffix <string>]
[-Latitude <string>] [-Longitude <string>] [-PostalCode <string>] [-PostDirectional <string>] [-PreDirectional <string>]
[-StateOrProvince <string>] [-StreetName <string>] [-StreetSuffix <string>] [-Confidence <String>] [-IsAzureMapValidationRequired <String>] [-ValidationStatus <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Because each civic address needs at least one location to assign to users, creating a new civic address also creates a default location.
This is useful in cases where a civic address has no particular sub-locations.
In that scenario you can create the civic address using the New -CsOnlineLisCivicAddress cmdlet and use the default location identifier for assignment to users.
The example output from the Get-CsOnlineLisCivicAddress below shows the DefaultLocationId property.

CivicAddressId : 51a8a6e3-dae4-4653-9a99-a6e71c4c24ac

HouseNumber :

HouseNumberSuffix :

PreDirectional :

StreetName :

StreetSuffix :

PostDirectional :

City :

PostalCode :

StateOrProvince :

CountryOrRegion : US

Description :

CompanyName : MSFT

DefaultLocationId : 75301b5d-3609-458e-a379-da9a1ab33228

ValidationStatus : NotValidated

NumberOfVoiceUsers : 0

## EXAMPLES

### Example 1
```powershell
New-CsOnlineLisCivicAddress -HouseNumber 1 -StreetName 'Microsoft Way' -City Redmond -StateorProvince Washington -CountryOrRegion US -PostalCode 98052 -Description "West Coast Headquarters" -CompanyName Contoso -Latitude 47.63952 -Longitude -122.12781 -Elin MICROSOFT_ELIN
```

This example creates a new civic address described as "West Coast Headquarters": 1 Microsoft Way, Redmond WA, 98052 and sets the geo-coordinates.

## PARAMETERS

### -City
Specifies the city of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CityAlias
Specifies the city alias of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompanyTaxId
Specifies the company tax identifier of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confidence
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
Specifies the country or region of the new civic address.
Needs to be a valid country code as contained in the ISO 3166-1 alpha-2 specification.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies an administrator defined description of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumber
Specifies the numeric portion of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumberSuffix
Specifies the numeric suffix of the new civic address.
For example, if the property was multiplexed, the HouseNumberSuffix parameter would be the multiplex specifier: "425A Smith Avenue", or "425B Smith Avenue".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAzureMapValidationRequired
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Latitude
Specifies the angular distance of a place north or south of the earth's equator using the decimal degrees format. Required for all countries except Australia and Japan where it's optional.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Longitude
Specifies the angular distance of a place east or west of the meridian at Greenwich, England, using the decimal degrees format. Required for all countries except Australia and Japan where it's optional.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostalCode
Specifies the postal code of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostDirectional
Specifies the directional attribute of the new civic address which follows the street name.
For example, "425 Smith Avenue NE".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreDirectional
Specifies the directional attribute of the new civic address which precedes the street name.
For example, "425 NE Smith Avenue".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOrProvince
Specifies the state or province of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetName
Specifies the street name of the new civic address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetSuffix
Specifies the street type of the new civic address.
The street suffix will typically be something like street, avenue, way, or boulevard.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidationStatus
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/set-csonlineliscivicaddress)

[Remove-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/remove-csonlineliscivicaddress)

[Get-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/get-csonlineliscivicaddress)
