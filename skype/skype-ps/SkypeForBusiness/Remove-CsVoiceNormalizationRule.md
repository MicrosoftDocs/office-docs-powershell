---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-csvoicenormalizationrule
schema: 2.0.0
title: Remove-CsVoiceNormalizationRule
---

# Remove-CsVoiceNormalizationRule

## SYNOPSIS
Removes a voice normalization rule.
Voice normalization rules are used to convert telephone dialing requirements (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.

**Note**: This cmdlet has been deprecated in Teams PowerShell Module 4.0.0.

## SYNTAX

```
Remove-CsVoiceNormalizationRule [-Identity] <XdsIdentity> [-Tenant <guid>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are removed by using this cmdlet will be deleted from the dial plans of the organization, so they won't be returned by the `Get-CsVoiceNormalizationRule` cmdlet and will not appear in the NormalizationRules property returned by a call to the `Get-CsDialPlan` cmdlet.
This means that calling the `Remove-CsVoiceNormalizationRule` cmdlet could leave a dial plan with no normalization rules.


## EXAMPLES

### Example 1
```
Remove-CsVoiceNormalizationRule -Identity site:Redmond/SeattleRule1
```

This example removes the voice normalization rule with the Identity site:Redmond/SeattleRule1.


### Example 2
```
Remove-CsVoiceNormalizationRule -Identity site:Redmond
```

This example removes all voice normalization rules from site Redmond.


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

The unique identity of the rule to be removed.
If the Identity specified includes the scope followed by a slash and then the name (for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name), the one rule with that unique Identity will be removed.
If the value passed to the Identity contains only the scope (site:Redmond), all normalization rules at that scope will be removed.


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

### -Tenant

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

For internal Microsoft usage.

```yaml
Type: Guid
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

### Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule

Accepts pipelined input of voice normalization rule objects.

## OUTPUTS

### None
This cmdlet deletes an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule.

## NOTES

## RELATED LINKS

[New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md)

[Set-CsVoiceNormalizationRule](Set-CsVoiceNormalizationRule.md)

[Get-CsVoiceNormalizationRule](Get-CsVoiceNormalizationRule.md)

[Test-CsVoiceNormalizationRule](Test-CsVoiceNormalizationRule.md)

[Remove-CsDialPlan](Remove-CsDialPlan.md)

[Get-CsDialPlan](Get-CsDialPlan.md)
