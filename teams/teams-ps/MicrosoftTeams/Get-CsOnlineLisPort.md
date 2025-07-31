---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinelisport
schema: 2.0.0
title: Get-CsOnlineLisPort
---

# Get-CsOnlineLisPort

## SYNOPSIS
Retrieves one or more ports from the location configuration database.

## SYNTAX

```
Get-CsOnlineLisPort [[-ChassisID] <string>] [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-PortID <string>] [-TargetStore <string>] [<CommonParameters>]
```

## DESCRIPTION
Each port can be associated with a location, in which case this cmdlet will also retrieve the location information of the ports. This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet retrieves information on associations between physical locations and the port through which the client is connected.

## EXAMPLES

### Example 1
```
Get-CsOnlineLisPort
```
```output
PortID  ChassisID         LocationId                           Description
------  ---------         ----------                           -----------
G1/0/30 B8-BE-BF-4A-A3-00 9905bca0-6fb0-11ec-84a4-25019013784a
S2/0/25 F6-26-79-B5-3D-49 d7714269-ee52-4635-97b0-d7c228801d24
```

Example 1 retrieves all Location Information Server (LIS) ports and any associated locations.

### Example 2
```
Get-CsOnlineLisPort -ChassisID 'B8-BE-BF-4A-A3-00' -PortID 'G1/0/30'
```
```output
PortID  ChassisID         LocationId                           Description
------  ---------         ----------                           -----------
G1/0/30 B8-BE-BF-4A-A3-00 9905bca0-6fb0-11ec-84a4-25019013784a
```

Example 2 retrieves the location information for port G1/0/30 with ChassisID B8-BE-BF-4A-A3-00.

## PARAMETERS

### -ChassisID

> Applicable: Microsoft Teams

The Media Access Control (MAC) address of the port's switch. This value will be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

Required: False
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Guid

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlineLisPort](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinelisport)

[Remove-CsOnlineLisPort](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csonlinelisport)
