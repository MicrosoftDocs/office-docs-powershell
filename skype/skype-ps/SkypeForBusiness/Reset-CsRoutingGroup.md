---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/reset-csroutinggroup
schema: 2.0.0
title: Reset-CsRoutingGroup
---

# Reset-CsRoutingGroup

## SYNOPSIS
Enables administrators to reset a Windows Fabric routing group that is not working correctly.

## SYNTAX

```
Reset-CsRoutingGroup [-RoutingGroup] <String> [-Binding <String>] [-Confirm] [-Force]
 [-HostNameStorageService <String>] [-Lyss] [-ResetType <RgResetType>] [-TargetFqdn <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Reset-CsRoutingGroup` cmdlet provides a way for administrators to reset Windows Fabric routing groups that are "missing" or are otherwise not working correctly.
Missing routing groups can be identified by using the `Get-CsPoolFabricState` cmdlet and the FilterOnMissingReplicas parameter.

## EXAMPLES

### Example 1
```
Reset-CsRoutingGroup -RoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c" -ResetType "Transient"
```

The command shown in Example 1 performs a transient on the routing group with the identity bef5fa3b-3c97-4af0-abe7-611deee7616c.


## PARAMETERS

### -Binding

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: b

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -HostNameStorageService

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: h

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Lyss

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: SwitchParameter

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

### -ResetType

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Type of reset to be performed.
Allowed values are:

- Permanent. Takes everything back from Back End Servers and recreates the whole routing group.

- Transient. Resets the Windows Fabric service and fixes any issues, then syncs up any missing data from the RTCLocal Database.

- Recreate. Deletes existing data from Windows Fabric service about the routing group and reloads them from the RTCLocal Database.

```yaml
Type: RgResetType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingGroup

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Globally unique identifier (GUID) of the routing group that needs to be reset.
For example:

`-RoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c"`

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the pool containing the routing group that needs to be reset.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

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

### -WhatIf

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

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

### None
The `Reset-CsRoutingGroup` cmdlet does not accept pipelined input.

## OUTPUTS

### None
The `Reset-CsRoutingGroup` cmdlet does return objects or data.

## NOTES

## RELATED LINKS
