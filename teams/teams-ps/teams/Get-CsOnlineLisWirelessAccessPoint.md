---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineliswirelessaccesspoint
applicable: Microsoft Teams
title: Get-CsOnlineLisWirelessAccessPoint
schema: 2.0.0
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Retrieves one or more wireless access points (WAPs) from the location configuration database. Each WAP can be associated with a location, in which case this cmdlet will also retrieve the location information of the WAPs. This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Get-CsOnlineLisWirelessAccessPoint [[-BSSID] <string>] [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-TargetStore <string>] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet retrieves information on associations between physical locations and the WAP through which the client is connected.

The BSSID (Basic Service Set Identifiers) is used to describe sections of a wireless local area network. It is the MAC of the 802.11 side of the access point. The BSSID parameter in this command also supports the wildcard format to cover all BSSIDs in the range which are sharing the same description and Location ID. The wildcard '*' can be on either the last one or two character(s).

If a BSSID with a wildcard format is already exists, a location request with a WAP which is within this wildcard range will return the access point that is configured with the wildcard format.

## EXAMPLES

### Example 1
```
Get-CsOnlineLisWirelessAccessPoint
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
F0-6E-0B-C2-03-23 d7714269-ee52-4635-97b0-d7c228801d24 USWAP1
34-E3-80-D5-AB-60 9905bca0-6fb0-11ec-84a4-25019013784a DKWAP1
F0-6E-0B-C2-03-*  b2804a1a-e4cf-47df-8964-3eaf6fe1ae3a SEWAPs
```

Example 1 retrieves all Location Information Server (LIS) wireless access points and any associated locations.

### Example 2
```
Get-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-03-23
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
F0-6E-0B-C2-03-23 d7714269-ee52-4635-97b0-d7c228801d24 USWAP1
```

Example 2 retrieves Location Information Server (LIS) wireless access point "F0-6E-0B-C2-03-23" and associated location.

### Example 3
```
Get-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-03-*
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
F0-6E-0B-C2-03-*  b2804a1a-e4cf-47df-8964-3eaf6fe1ae3a SEWAPs
```

Example 3 retrieves Location Information Server (LIS) wireless access point "F0-6E-0B-C2-03-*" and associated location.

### Example 4
```
Get-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-03-12
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
F0-6E-0B-C2-03-*  b2804a1a-e4cf-47df-8964-3eaf6fe1ae3a SEWAPs
```

Example 4 retrieves Location Information Server (LIS) wireless access point "F0-6E-0B-C2-03-12" and associated location.

## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point. This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. It can be presented in wildcard format. The wildcard '*' can be on either the last one or two character(s).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: 1
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDebug
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NCSApiUrl
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

### -TargetStore
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlineLisWirelessAccessPoint](https://learn.microsoft.com/powershell/module/teams/set-csonlineliswirelessaccesspoint)

[Remove-CsOnlineLisWirelessAccessPoint](https://learn.microsoft.com/powershell/module/teams/remove-csonlineliswirelessaccesspoint)
