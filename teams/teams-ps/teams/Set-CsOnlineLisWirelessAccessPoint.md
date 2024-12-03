---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlineliswirelessaccesspoint
applicable: Microsoft Teams
title: Set-CsOnlineLisWirelessAccessPoint
schema: 2.0.0
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Creates a Location Information Server (LIS) wireless access point (WAP), creates an association between a WAP and a location, or modifies an existing WAP and its associated location. The association between a WAP and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Set-CsOnlineLisWirelessAccessPoint [-BSSID] <string> -LocationId <guid> [-Description <string>] [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>]
 [-TargetStore <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet allows the administrator to map physical locations to the WAP through which calls will be routed.

The BSSID (Basic Service Set Identifiers) is used to describe sections of a wireless local area network. It is the MAC of the 802.11 side of the access point. The BSSID parameter in this command also supports the wildcard format to cover all BSSIDs in a range which share the same description and Location ID. The wildcard '*' can be on either the last one or two character(s).

If a BSSID with wildcard format is already existing, the request for adding one more new BSSID which is within this wildcard range and with the same location ID will not be accepted.

## EXAMPLES

### Example 1
```
Set-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-03-23 -Description "USWAP1" -LocationId d7714269-ee52-4635-97b0-d7c228801d24
```

Example 1 creates the wireless access point with BSSID "F0-6E-0B-C2-03-23", associated with location ID d7714269-ee52-4635-97b0-d7c228801d24.

### Example 2
```
Set-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-04-* -LocationId b2804a1a-e4cf-47df-8964-3eaf6fe1ae3a -Description 'SEWAPs'
```

Example 2 creates the wireless access point with Chassis ID "F0-6E-0B-C2-04-*", associated with location ID b2804a1a-e4cf-47df-8964-3eaf6fe1ae3a. BSSID "F0-6E-0B-C2-04-*" is in wildcard format which is equivalent to adding all BSSIDs with the same LocationID in the range "F0-6E-0B-C2-04-[0-9A-F][0-9A-F]".

## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point. This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. If an entry with the specified BSSID value does not exist, a new WAP will be created. If an entry with the specified BSSID already exists, that entry will be replaced. It can be presented in wildcard format. The wildcard '*' can be on either the last one or two character(s).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LocationId
The name for this location.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies the administrator defined description of the WAP.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

### System.Guid

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsOnlineLisWirelessAccessPoint](https://learn.microsoft.com/powershell/module/teams/get-csonlineliswirelessaccesspoint)

[Remove-CsOnlineLisWirelessAccessPoint](https://learn.microsoft.com/powershell/module/teams/remove-csonlineliswirelessaccesspoint)
