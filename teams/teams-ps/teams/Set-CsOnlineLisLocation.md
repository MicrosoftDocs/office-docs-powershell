---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinelislocation
applicable: Microsoft Teams
title: Set-CsOnlineLisLocation
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineLisLocation

## SYNOPSIS
Use the \`Set-CsOnlineLisLocation\` cmdlet to modify an existing emergency dispatch location. There can be multiple locations in a civic address.
Typically the civic address designates the building, and locations are specific parts of that building such as a floor, office, or wing.

## SYNTAX

### UseCivicAddressId (Default)
```
Set-CsOnlineLisLocation -CivicAddressId <guid> [-City <string>] [-CityAlias <string>] [-CompanyName <string>] [-CompanyTaxId <string>]
 [-Confidence <string>] [-CountryOrRegion <string>] [-Description <string>] [-Elin <string>] [-Force] [-HouseNumber <string>] [-HouseNumberSuffix <string>]
 [-Latitude <string>] [-Longitude <string>] [-PostalCode <string>] [-PostDirectional <string>] [-PreDirectional <string>]
 [-StateOrProvince <string>] [-StreetName <string>] [-StreetSuffix <string>] [-IsAzureMapValidationRequired <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UseLocationId
```
Set-CsOnlineLisLocation -LocationId <guid> [-CityAlias <string>] [-Confidence <string>] [-Elin <string>] [-Force]
 [-Latitude <string>] [-Longitude <string>] [-Location <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```powershell
Set-CsOnlineLisLocation -LocationId 5aa884e8-d548-4b8e-a289-52bfd5265a6e -Location "B5 2nd Floor"
```

This example changes the location description of the location specified by its location identity.

## PARAMETERS

### -CivicAddressId
Specifies the unique identifier of the civic address that contains the location to be modified.
Civic address identities can be discovered by using the \`Get-CsOnlineLisCivicAddress\` cmdlet.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: Guid
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LocationId
Specifies the unique identifier of the location to be modified. Location identities can be discovered by using the \`Get-CsOnlineLisLocation\` cmdlet.

```yaml
Type: Guid
Parameter Sets: UseLocationId
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -City
Specifies the city of the civic address.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CityAlias

**Note:** This parameter has been deprecated from the Teams PowerShell Module version 3.0.0 or later.

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

### -CompanyName
Specifies the name of your organization.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CompanyTaxId
The company tax ID.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confidence

**Note:** This parameter is not supported and will be deprecated.

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

### -CountryOrRegion
Specifies the country or region of the civic address.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Description
Specifies an administrator defined description of the civic address.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Elin
Specifies the Emergency Location Identification Number. This is used in Direct Routing EGW scenarios.

**Note:** You can set or change the ELIN, but you can't clear its value. If you need to clear the value, you should recreate the location.

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

### -HouseNumber
Specifies the numeric portion of the civic address.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
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

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
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

**Note:** This parameter is not supported and will be deprecated.

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

**Note:** This parameter is not supported and will be deprecated.

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
### -Location
Specifies an administrator defined description of the new location. For example, "2nd Floor Cafe", "Main Lobby", or "Office 250".

```yaml
Type: String
Parameter Sets: UseLocationId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PostalCode
Specifies the postal code of the civic address.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PostDirectional
Specifies the directional attribute of the civic address which follows the street name.
For example, "425 Smith Avenue NE".

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PreDirectional
Specifies the directional attribute of the civic address which precedes the street name. For example, "425 NE Smith Avenue ".

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
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

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StreetName
Specifies the street name of the civic address.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StreetSuffix
Specifies a modifier of the street name of the civic address. The street suffix will typically be something like street, avenue, way, or boulevard.

**Note:** This parameter is not supported and will be deprecated.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teans

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IsAzureMapValidationRequired
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: UseCivicAddressId
Aliases:
Applicable: Microsoft Teans

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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/new-csonlinelislocation)

[Get-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/get-csonlinelislocation)

[Remove-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/remove-csonlinelislocation)
