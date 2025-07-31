---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinelisport
schema: 2.0.0
title: Remove-CsOnlineLisPort
---

# Remove-CsOnlineLisPort

## SYNOPSIS
Removes an association between a Location port and a location. This association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Remove-CsOnlineLisPort [-ChassisID] <string> -PortID <string> [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-TargetStore <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet removes an association between a physical location and a port through which calls will be routed by removing the port from the location configuration database.

Removing a port location will not remove the actual location of the port; it removes only the port.

## EXAMPLES

### Example 1
```
Remove-CsOnlineLisPort -PortID 12174 -ChassisID 0B-23-CD-16-AA-CC
```

Example 1 removes the location information for port 12174 with ChassisID 0B-23-CD-16-AA-CC.

## PARAMETERS

### -ChassisID

> Applicable: Microsoft Teams

The Media Access Control (MAC) address of the port's switch. This value will be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Microsoft Teams

Prompts you for confirmation before running the cmdlet.

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

### -Force

> Applicable: Microsoft Teams

The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDebug

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

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

### -NCSApiUrl

> Applicable: Microsoft Teams

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

### -PortID

> Applicable: Microsoft Teams

This parameter identifies the ID of the port.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetStore

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlineLisPort](https://learn.microsoft.com/powershell/module/teams/set-csonlinelisport)

[Get-CsOnlineLisPort](https://learn.microsoft.com/powershell/module/teams/get-csonlinelisport)
