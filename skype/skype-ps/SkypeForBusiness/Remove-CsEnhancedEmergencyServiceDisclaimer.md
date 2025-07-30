---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-csenhancedemergencyservicedisclaimer
schema: 2.0.0
title: Remove-CsEnhancedEmergencyServiceDisclaimer
---

# Remove-CsEnhancedEmergencyServiceDisclaimer

## SYNOPSIS
Removes the disclaimer text that is used globally to prompt for location information for an Enhanced 9-1-1 (E9-1-1) implementation.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsEnhancedEmergencyServiceDisclaimer [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
In order for an Enterprise Voice implementation to provide E9-1-1 service, locations must be mapped to ports, subnets, switches and wireless access points to identify the caller's location.
When the caller is connecting from outside one of these mapped points, he must enter his location manually for it to be received by emergency services.
This cmdlet removes the text string that will be displayed to users who choose not to enter their location information.
This message will be displayed only if the LocationRequired property of the user's location policy is set to Disclaimer.
(You can retrieve location policy settings by calling the `Get-CsLocationPolicy` cmdlet.) After calling this cmdlet, a blank message will be displayed to users in this case.


## EXAMPLES

### Example 1
```
Remove-CsEnhancedEmergencyServiceDisclaimer -Identity global
```

This command removes the text of the enhanced emergency service disclaimer.
Note that this does not remove the global disclaimer; it still exists.
It simply sets the Body property to an empty string.


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

This value is required and must be set to Global.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer
This cmdlet does not return a value or an object.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Location.EnhancedEmergencyServiceDisclaimer.

## NOTES

## RELATED LINKS

[Set-CsEnhancedEmergencyServiceDisclaimer](Set-CsEnhancedEmergencyServiceDisclaimer.md)

[Get-CsEnhancedEmergencyServiceDisclaimer](Get-CsEnhancedEmergencyServiceDisclaimer.md)

[Get-CsLocationPolicy](Get-CsLocationPolicy.md)
