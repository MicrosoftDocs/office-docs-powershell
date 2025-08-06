---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-place
schema: 2.0.0
title: Set-Place
---

# Set-Place

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-Place cmdlet to update room mailboxes with additional metadata, which provides a better search and room suggestion experience.

**Note**: In hybrid environments, this cmdlet doesn't work on the following properties on synchronized room mailboxes: City, CountryOrRegion, GeoCoordinates, Phone, PostalCode, State, or Street. To modify these properties (except GeoCoordinates on synchronized room mailboxes), use the Set-User or Set-Mailbox cmdlets in on-premises Exchange.

**Note**: We recommend using this cmdlet with the EXO V3 module. Commands using Set-Place to change certain combinations of properties together can fail in older versions of the module. For more information about the EXO V3 module, see [About the Exchange Online PowerShell module](https://learn.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-Place [-Identity] <RecipientIdParameter>
 [-AudioDeviceName <String>]
 [-Building <String>]
 [-Capacity <System.Int32>]
 [-City <String>]
 [-Confirm]
 [-CountryOrRegion <CountryInfo>]
 [-DisplayDeviceName <String>]
 [-Floor <System.Int32>]
 [-FloorLabel <String>]
 [-GeoCoordinates <GeoCoordinates>]
 [-IsWheelChairAccessible <Boolean>]
 [-Label <String>]
 [-MTREnabled <Boolean>]
 [-ParentId <String>]
 [-ParentType <Microsoft.Exchange.Management.RecipientTasks.SetPlaceParentType>]
 [-Phone <String>]
 [-PostalCode <String>]
 [-State <String>]
 [-Street <String>]
 [-Tags <String[]>]
 [-VideoDeviceName <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-Place -Identity "Conference Room 01" -IsWheelChairAccessible $true -AudioDeviceName PolyCom -DisplayDeviceName "InFocus WXGA Projector"
```

The example adds the specified metadata to the room mailbox named Conference Room 01.

### Example 2
```powershell
Set-Place -Identity "Conference Room 02" -Building "Building 02" -Capacity 5 -CountryOrRegion ES -Floor 3 -FloorLabel "Human Resources" -Label Interviews
```

The example adds the specified metadata to the room mailbox named Conference Room 02.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the room mailbox that you want to modify. You can use any value that uniquely identifies the room. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AudioDeviceName

> Applicable: Exchange Online

The AudioDeviceName parameter specifies the name of the audio device in the room. If the value contains spaces, enclose the value in quotation marks (").

The default value is blank ($null). To indicate that this room has no audio device, use the value $null for this parameter.

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

### -Building

> Applicable: Exchange Online

The Building parameter specifies the building name or building number that the room is in. If the value contains spaces, enclose the value in quotation marks (").

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

### -Capacity

> Applicable: Exchange Online

The Capacity parameter specifies the capacity of the room. A valid value is an integer.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City

> Applicable: Exchange Online

The City parameter specifies the room's city. If the value contains spaces, enclose the value in quotation marks (").

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

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion

> Applicable: Exchange Online

The CountryOrRegion parameter specifies the room's country or region. A valid value is a valid ISO 3166-1 two-letter country code (for example, AU for Australia) or the corresponding friendly name for the country (which might be different from the official ISO 3166 Maintenance Agency short name).

A reference for two-letter country codes is available at [Country Codes List](https://www.nationsonline.org/oneworld/country_code_list.htm).

The friendly name is returned in the CountryOrRegion property value by the Get-Place cmdlet, but you can use either the friendly name or the two-letter country code in filter operations.

```yaml
Type: CountryInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayDeviceName

> Applicable: Exchange Online

The DisplayDeviceName parameter specifies the name of the display device in the room. If the value contains spaces, enclose the value in quotation marks (").

The default value is blank ($null). To indicate that this room has no display device, use the value $null for this parameter.

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

### -Floor

> Applicable: Exchange Online

The Floor parameter specifies the floor number that the room is on.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FloorLabel

> Applicable: Exchange Online

The FloorLabel parameter specifies a descriptive label for the floor that the room is on. If the value contains spaces, enclose the value in quotation marks (").

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

### -GeoCoordinates

> Applicable: Exchange Online

The GeoCoordinates parameter specifies the room's location in latitude, longitude and (optionally) altitude coordinates. A valid value for this parameter uses one of the following formats:

- Latitude and longitude: For example, "47.644125;-122.122411"
- Latitude, longitude, and altitude: For example, "47.644125;-122.122411;161.432"

**Note**: If period separators don't work for you, use commas instead.

```yaml
Type: GeoCoordinates
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsWheelChairAccessible

> Applicable: Exchange Online

The IsWheelChairAccessible parameter specifies whether the room is wheelchair accessible. Valid values are:

- $true: The room is wheelchair accessible.
- $false: The room is not wheelchair accessible. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Label

> Applicable: Exchange Online

The Label parameter specifies a descriptive label for the room (for example, a number or name). If the value contains spaces, enclose the value in quotation marks (").

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

### -MTREnabled

> Applicable: Exchange Online

**Note**: Currently, this parameter is informational only and results in no additional functionality.

The MTREnabled parameter identifies the room as configured with a Microsoft Teams room system. You can add Teams room systems as audio sources in Teams meetings that involve the room. Valid values are:

- $true: The room is has a Teams room system. You can add the Teams room system to Microsoft Teams meetings when selecting to join a meeting with room audio.
- $false: The room is does not have a Teams room system. Users join Teams meetings using their PC or mobile device audio instead of using room audio. This value is the default.

For more information about Microsoft Teams Rooms, see [Microsoft Teams Rooms](https://learn.microsoft.com/microsoftteams/rooms/).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParentId

> Applicable: Exchange Online

**Note**: This feature is experimental and is available only for organizations using Microsoft Places.

The ParentId parameter specifies the ID of a Place in the parent location hierarchy in Microsoft Places.

Organizations that are onboarding Rooms and Workspaces to Microsoft Places need to use the ParentId and ParentType parameters in a Set-Place command so Microsoft Places works properly.

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

### -ParentType

> Applicable: Exchange Online

**Note**: This feature is experimental and is available only for organizations using Microsoft Places.

The ParentType parameter specifies the parent type of the ParentId in Microsoft Places. Valid values are:

- Floor
- Section

Organizations that are onboarding Rooms and Workspaces to Microsoft Places need to use the ParentId and ParentType parameters in a Set-Place command so Microsoft Places works properly.

```yaml
Type: Microsoft.Exchange.Management.RecipientTasks.SetPlaceParentType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Phone

> Applicable: Exchange Online

The Phone parameter specifies the room's telephone number.

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

### -PostalCode

> Applicable: Exchange Online

The PostalCode parameter specifies the room's postal code.

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

### -State

> Applicable: Exchange Online

The State parameter specifies the room's state or province.

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

### -Street

> Applicable: Exchange Online

The Street parameter specifies the room's physical address.

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

### -Tags

> Applicable: Exchange Online

The Tags parameter specifies additional features of the room (for example, details like the type of view or furniture type).

You can specify multiple labels separated by commas. If the labels contains spaces, enclose the values in quotation marks: `"Label 1","Label 2",..."Label N"`.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoDeviceName

> Applicable: Exchange Online

The VideoDeviceName parameter specifies the name of the video device in the room. If the value contains spaces, enclose the value in quotation marks (").

The default value is blank ($null). To indicate that this room has no video device, use the value $null for this parameter.

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

> Applicable: Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
