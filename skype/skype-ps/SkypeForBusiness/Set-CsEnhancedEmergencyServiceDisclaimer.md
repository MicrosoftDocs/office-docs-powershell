---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csenhancedemergencyservicedisclaimer
schema: 2.0.0
title: Set-CsEnhancedEmergencyServiceDisclaimer
---

# Set-CsEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
Sets disclaimer text that will be used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.
This cmdlet was introduced in Lync Server 2010.
It has been deprecated for use with Skype for Business Server.
For Skype for Business Server, E9-1-1 disclaimers should be configured by using the `New-CsLocationPolicy` cmdlet and the `Set-CsLocationPolicy` cmdlet.


## SYNTAX

### Identity
```
Set-CsEnhancedEmergencyServiceDisclaimer [[-Identity] <XdsIdentity>] [-Body <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsEnhancedEmergencyServiceDisclaimer [-Instance <PSObject>] [-Body <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, they must enter their location manually for it to be received by emergency services.
This cmdlet sets a text string that will be displayed to users who decide not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling the `Get-CsLocationPolicy` cmdlet.)


## EXAMPLES

### Example 1
```
Set-CsEnhancedEmergencyServiceDisclaimer -Body "Warning: If you do not provide a location, emergency services may be delayed in reaching your location should you need to call for help."
```

This example replaces the text of the global enhanced emergency services disclaimer with the text provided in the string passed to the Body parameter.
This setting can be applied only at the global scope, which is the default for Identity and therefore does not need to be specified.


## PARAMETERS

### -Body

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A string containing information that will be displayed to users who are connected from locations that cannot be resolved by the location mapping (wiremap) who choose not to enter their location manually.

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

This will always be Global.

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

A reference to an enhanced emergency service disclaimer object.
Must be of type EnhancedEmergencyServiceDisclaimer.

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

### Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer

Accepts pipelined input of an enhanced emergency service disclaimer object.

## OUTPUTS

### None
This cmdlet does not return a value or an object.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer.

## NOTES

## RELATED LINKS

[Remove-CsEnhancedEmergencyServiceDisclaimer](Remove-CsEnhancedEmergencyServiceDisclaimer.md)

[Get-CsEnhancedEmergencyServiceDisclaimer](Get-CsEnhancedEmergencyServiceDisclaimer.md)

[Get-CsLocationPolicy](Get-CsLocationPolicy.md)
