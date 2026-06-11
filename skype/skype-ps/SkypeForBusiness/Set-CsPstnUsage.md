---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-cspstnusage
schema: 2.0.0
title: Set-CsPstnUsage
---

# Set-CsPstnUsage

## SYNOPSIS
Modifies a set of strings that identify the allowed public switched telephone network (PSTN) usages.
This cmdlet can be used to add usages to the list of PSTN usages or remove usages from the list.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsPstnUsage [[-Identity] <XdsIdentity>] [-Usage <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsPstnUsage [-Instance <PSObject>] [-Usage <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
PSTN usages are string values that are used for call authorization.
A PSTN usage links a voice policy to a route.
The `Set-CsPstnUsage` cmdlet is used to add or remove phone usages to or from the usage list.
This list is global so it can be used by policies and routes throughout the Skype for Business Server deployment.


## EXAMPLES

### Example 1
```
Set-CsPstnUsage -Identity global -Usage @{add="International"}
```

This command adds the string "International" to the current list of available PSTN usages.


### Example 2
```
Set-CsPstnUsage -Identity global -Usage @{remove="Local"}
```

This command removes the string "Local" from the list of available PSTN usages.


### Example 3
```
Set-CsPstnUsage -Usage @{remove="Local"}
```

The command in this example performs the exact same action as the command in Example 2: it removes the "Local" PSTN usage.
This example shows the command without the Identity parameter specified.
The only Identity available to the `Set-CsPstnUsage` cmdlet is the Global identity; omitting the Identity parameter defaults to Global.


### Example 4
```
Set-CsPstnUsage -Usage @{replace="International","Restricted"}
```

This command replaces everything in the usage list with the values International and Restricted.
All previously existing usages are removed.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The scope at which these settings are applied.
The Identity for this cmdlet is always Global.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A reference to a PSTN usage object.
This object must be of type PstnUsages and can be retrieved by calling the `Get-CsPstnUsage` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Usage

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Contains a list of allowable usage strings.
These entries can be any string value.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnUsages

Accepts pipelined input of PSTN usage objects.

## OUTPUTS

### None
This cmdlet does not return a value or object.
Instead, it configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnUsages object.

## NOTES

## RELATED LINKS

[Get-CsPstnUsage](Get-CsPstnUsage.md)
