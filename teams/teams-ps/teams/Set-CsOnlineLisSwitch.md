---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinelisswitch
applicable: Microsoft Teams
title: Set-CsOnlineLisSwitch
schema: 2.0.0
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineLisSwitch

## SYNOPSIS
Creates a Location Information Server (LIS) switch, creates an association between a switch and a location, or modifies an existing switch and its associated location. The association between a switch and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Set-CsOnlineLisSwitch [-ChassisID] <string> -LocationId <guid> [-Description <string>] [-Force] [-IsDebug <bool>]
 [-NCSApiUrl <string>] [-TargetStore <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet allows the administrator to map physical locations to the network switch through which the client is connected.

## EXAMPLES

### Example 1
```
Set-CsOnlineLisSwitch -ChassisID B8-BE-BF-4A-A3-00 -Description "DKSwitch1" -LocationId 9905bca0-6fb0-11ec-84a4-25019013784a
```

Example 1 creates a switch with Chassis ID "B8-BE-BF-4A-A3-00", and associates it with location ID 9905bca0-6fb0-11ec-84a4-25019013784a.

## PARAMETERS

### -ChassisID
If ChassisID sub type is a MAC Address then this value must be in a string format in the following representation nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.
Otherwise, (different sub type, such as Interface Name), then this value must be in a string format as set on the switch

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
Specifies the administrator defined description of the switch.

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

### System.Guid

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsOnlineLisSwitch](https://learn.microsoft.com/powershell/module/teams/get-csonlinelisswitch)

[Remove-CsOnlineLisSwitch](https://learn.microsoft.com/powershell/module/teams/remove-csonlinelisswitch)
