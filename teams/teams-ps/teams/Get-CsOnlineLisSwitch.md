---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinelisswitch
applicable: Microsoft Teams
title: Get-CsOnlineLisSwitch
schema: 2.0.0
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Get-CsOnlineLisSwitch

## SYNOPSIS
Retrieves one or more network switches from the location configuration database. Each switch can be associated with a location, in which case this cmdlet will also retrieve the location information of the switches. This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Get-CsOnlineLisSwitch [[-ChassisID] <string>] [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-TargetStore <string>] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet retrieves information on associations between physical locations and the network switch through which the client is connected.

## EXAMPLES

### Example 1
```
Get-CsOnlineLisSwitch
```
```output
ChassisID         LocationId                           Description
---------         ----------                           -----------
B8-BE-BF-4A-A3-00 9905bca0-6fb0-11ec-84a4-25019013784a DKSwitch1
F6-26-79-B5-3D-49 d7714269-ee52-4635-97b0-d7c228801d24 USSwitch1
```

Example 1 retrieves all Location Information Server (LIS) switches and any associated locations.

### Example 2
```
Get-CsOnlineLisSwitch -ChassisID B8-BE-BF-4A-A3-00
```
```output
ChassisID         LocationId                           Description
---------         ----------                           -----------
B8-BE-BF-4A-A3-00 9905bca0-6fb0-11ec-84a4-25019013784a DKSwitch1
```

Example 2 retrieves Location Information Server (LIS) switch "B8-BE-BF-4A-A3-00" and associated location.

## PARAMETERS

### -ChassisID
The Media Access Control (MAC) address of the port's switch. This value will be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### System.String

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlineLisSwitch](Set-CsOnlineLisSwitch.md)

[Remove-CsOnlineLisSwitch](Remove-CsOnlineLisSwitch.md)
