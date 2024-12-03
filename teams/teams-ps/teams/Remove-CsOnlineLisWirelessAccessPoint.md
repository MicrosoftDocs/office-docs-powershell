---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlineliswirelessaccesspoint
applicable: Microsoft Teams
title: Remove-CsOnlineLisWirelessAccessPoint
schema: 2.0.0
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Remove-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Removes a Location Information Server (LIS) wireless access point (WAP).

## SYNTAX

```
Remove-CsOnlineLisWirelessAccessPoint [-BSSID] <string> [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-TargetStore <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet removes a WAP from the location configuration database. Removing the WAP will not remove the location associated with that WAP. Use the \`Remove-CsLisOnlineLocation\` cmdlet to remove a location.

The BSSID (Basic Service Set Identifiers) is used to describe sections of a wireless local area network. It is the MAC of the 802.11 side of the access point. The BSSID parameter in this command also supports the wildcard format to cover all BSSIDs in a range which are sharing the same description and Location ID. The wildcard '*' can be on either the last one or two character(s).

If a BSSID with wildcard format is already exists, the request for removing a single BSSID which is within this wildcard range and with the same location ID will not be accepted.

## EXAMPLES

### Example 1
```
Remove-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-03-23
```

Example 1 removes the Location Information Server (LIS) wireless access point with BSS ID "F0-6E-0B-C2-03-23".

### Example 2
```
Remove-CsOnlineLisWirelessAccessPoint -BSSID F0-6E-0B-C2-04-*
```

Example 2 removes the Location Information Server (LIS) wireless access point with BSS ID "F0-6E-0B-C2-04-*".

## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point. This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. It can be presented in wildcard format. The wildcard '*' can be on either the last one or two character(s).

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

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlineLisWirelessAccessPoint](https://learn.microsoft.com/powershell/module/teams/set-csonlineliswirelessaccesspoint)

[Get-CsOnlineLisWirelessAccessPoint](https://learn.microsoft.com/powershell/module/teams/get-csonlineliswirelessaccesspoint)
