---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlinelislocation
applicable: Microsoft Teams
title: New-CsOnlineLisLocation
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# New-CsOnlineLisLocation

## SYNOPSIS
Use the New-CsOnlineLisLocation cmdlet to create a new emergency dispatch location within an existing civic address. Typically the civic address designates the building, and locations are specific parts of that building such as a floor, office, or wing.

## SYNTAX

```
New-CsOnlineLisLocation -Location <string> -CivicAddressId <guid> [-Elin <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```powershell
New-CsOnlineLisLocation -CivicAddressId b39ff77d-db51-4ce5-8d50-9e9c778e1617 -Location "Office 101, 1st Floor"
```

This example creates a new location called "Office 101, 1st Floor" in the civic address specified by its identity.

## PARAMETERS

### -CivicAddressId
Specifies the unique identifier of the civic address that will contain the new location. Civic address identities can be discovered by using the Get-CsOnlineLisCivicAddress cmdlet.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Location
Specifies an administrator-defined description of the new location. For example, "2nd Floor Cafe", "Main Lobby", or "Office 250".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CountryOrRegion
Specifies the country or region of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases: Country
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -City
Specifies the city of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CityAlias
Specifies the city alias.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CompanyName
Specifies the name of your organization.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: (All)
Aliases: Name
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompanyTaxId
The company tax ID.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confidence
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies an administrator defined description of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Elin
Specifies the Emergency Location Identification Number. This is used in Direct Routing EGW scenarios.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HouseNumber
Specifies the numeric portion of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -HouseNumberSuffix
Specifies the numeric suffix of the civic address.
For example, if the property was multiplexed, the HouseNumberSuffix parameter would be the multiplex specifier: "425A Smith Avenue", or "425B Smith Avenue".

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Latitude
Specifies the angular distance of a place north or south of the earth's equator using the decimal degrees format.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Longitude
Specifies the angular distance of a place east or west of the meridian at Greenwich, England, using the decimal degrees format.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostalCode
Specifies the postal code of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PostDirectional
Specifies the directional attribute of the civic address which follows the street name. For example, "425 Smith Avenue NE".

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PreDirectional
Specifies the directional attribute of the civic address which precedes the street name. For example, "425 NE Smith Avenue".

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StateOrProvince
Specifies the state or province of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases: State
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StreetName
Specifies the street name of the civic address.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StreetSuffix
Specifies the modifier of the street name. The street suffix will typically be something like street, avenue, way, or boulevard.

**Note:** This parameter is not supported and is deprecated.

```yaml
Type: String
Parameter Sets: CreateCivicAddress
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

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

[Set-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/set-csonlinelislocation)

[Get-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/get-csonlinelislocation)

[Remove-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/remove-csonlinelislocation)
