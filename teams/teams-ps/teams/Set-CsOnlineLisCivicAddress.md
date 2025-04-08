---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlineliscivicaddress
applicable: Microsoft Teams
title: Set-CsOnlineLisCivicAddress
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineLisCivicAddress

## SYNOPSIS
Use the \`Set-CsOnlineLisCivicAddress\` cmdlet to modify an existing civic address which has not been validated.
Validated civic addresses cannot be modified.

> [!Note]
> This cmdlet is only available for public use with limited countries/regions and certain fields. The remaining countries/regions and fields are for Microsoft internal use only.

## SYNTAX

```
Set-CsOnlineLisCivicAddress -CivicAddressId <Guid> [-CompanyName <String>] [-CompanyTaxId <String>]
 [-HouseNumber <String>] [-HouseNumberSuffix <String>] [-StreetName <String>] [-StreetSuffix <String>]
 [-PreDirectional <String>] [-PostDirectional <String>] [-City <String>] [-CityAlias <String>]
 [-StateOrProvince <String>] [-CountryOrRegion <String>] [-PostalCode <String>] [-Description <String>]
 [-ValidationStatus <String>] [-Latitude <String>] [-Longitude <String>] [-Confidence <String>]
 [-Elin <String>] [-IsAzureMapValidationRequired <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-CsOnlineLisCivicAddress` cmdlet to modify limited fields of an existing civic address.

Editing address using this cmdlet is restricted to the following countries/regions:
Australia, Brazil, Canada, Croatia, Czech Republic, Estonia, Hong Kong SAR, Hungary, Israel, Japan, Latvia, Lithuania, Mexico, New Zealand, Poland, Puerto Rico, Romania, Singapore, South Korea, Slovenia, South Africa, United States.

If the user runs this cmdlet on one of the unsupported countries/regions, it may interfere with number assignment and potentially is against regulatory requirements, so public use of the API is limited to the above countries/regions.

## EXAMPLES

### Example 1
```powershell
Set-CsOnlineLisCivicAddress -CivicAddressId a363a9b8-1acd-41de-916a-296c7998a024 -Description "City Center" -CompanyName Contoso
```

This example modifies the description and company name of the civic address with the identity a363a9b8-1acd-41de-916a-296c7998a024.

### Example 2
```powershell
Set-CsOnlineLisCivicAddress -CivicAddressId a363a9b8-1acd-41de-916a-296c7998a024 -Latitude 47.63952 -Longitude -122.12781 -ELIN MICROSOFT_ELIN
```

This example modifies the latitude, longitude and ELIN name of the civic address with the identity a363a9b8-1acd-41de-916a-296c7998a024.

## PARAMETERS

### -CivicAddressId
Specifies the unique identifier of the civic address to be modified.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
Specifies a new city for the civic address. Publicly editable.

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
Short form of the city name. 
This parameter is reserved for internal Microsoft use.

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
Specifies a new company name for the civic address. Publicly editable.

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

### -CompanyTaxId
Used to store TaxId for regulatory reasons. 
This parameter is reserved for internal Microsoft use.

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

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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
Specifies a new country or region for the civic address.
For public use, restricted to the following countries/regions: 

**AU, BR, CA, HR, CZ, EE, HK, HU, IL, JP, LV, LT, MX, NZ, PL, PR, RO, SG, KR, SI, ZA, US**

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

### -Description
Specifies a new description for the civic address. Publicly editable.

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
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumber
Specifies the new numeric portion of the civic address. Publicly editable.

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
Specifies the new numeric suffix of the new civic address.
For example, if the property was multiplexed, the HouseNumberSuffix parameter would be the multiplex specifier: "425A Smith Avenue", or "425B Smith Avenue".

This parameter is reserved for internal Microsoft use.

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

### -PostalCode
Specifies the new postal code of the civic address. Publicly editable.

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
Specifies the new directional attribute of the civic address which follows the street name.
For example, "425 Smith Avenue NE".

This parameter is reserved for internal Microsoft use.

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
Specifies the new directional attribute of the civic address which precedes the street name.
For example, "425 NE Smith Avenue ".

This parameter is reserved for internal Microsoft use.

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
Specifies the new state or province of the civic address. Publicly editable.

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
Specifies the new street name of the civic address. Publicly editable.

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
Specifies the new modifier of the street name of the new civic address.
The street suffix will typically be something like street, avenue, way, or boulevard.

This parameter is reserved for internal Microsoft use.

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
Microsoft internal use only

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

### -Latitude
Specifies the angular distance of a place north or south of the earth's equator in the decimal degrees format. Publicly editable.

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

### -Longitude
Specifies the angular distance of a place east or west of the meridian at Greenwich, England, in the decimal degrees format. Publicly editable.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/get-csonlineliscivicaddress)

[New-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/new-csonlineliscivicaddress)

[Remove-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/remove-csonlineliscivicaddress)
