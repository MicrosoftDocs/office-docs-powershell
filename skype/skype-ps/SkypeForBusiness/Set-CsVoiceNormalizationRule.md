---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: rogupta
online version: https://learn.microsoft.com/powershell/module/skype/set-csvoicenormalizationrule
schema: 2.0.0
title: Set-CsVoiceNormalizationRule
---

# Set-CsVoiceNormalizationRule

## SYNOPSIS
Modifies a voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.

**Note**: This cmdlet has been deprecated in Teams PowerShell Module 4.0.0.

## SYNTAX

### Identity (Default)
```
Set-CsVoiceNormalizationRule [-Description <String>] [-Pattern <String>]
 [-Translation <String>] [-IsInternalExtension <Boolean>] [-Priority <Int32>] [[-Identity] <XdsIdentity>] [-Tenant <guid>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsVoiceNormalizationRule [-Tenant <guid>] [-Description <String>] [-Pattern <String>]
 [-Translation <String>] [-IsInternalExtension <Boolean>] [-Priority <Int32>] [-Instance <PSObject>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Skype for Business Server format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are modified by using this cmdlet are part of the dial plan and, in addition to being accessible through the `Get-CsVoiceNormalizationRule` cmdlet, can also be accessed through the NormalizationRules property returned by a call to the `Get-CsDialPlan` cmdlet.


## EXAMPLES

### Example 1
```
Set-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond" -Description "Add a prefix to all numbers on site Redmond"
```

This example sets the description of the rule Prefix Redmond on site Redmond to "Add a prefix to all numbers on site Redmond".


### Example 2
```
Set-CsVoiceNormalizationRule -Identity global/SeattleFourDigit -Description "Translate an internal four-digit extension" -Translation '+1206556$1'
```

This example modifies the voice normalization rule with the Identity global/SeattleFourDigit.
A new Description has been specified to reflect the modifications to the rule.
In addition, a Translation value has been specified that modifies the rule to translate any number matching the existing pattern of this rule to the same number but with the prefix +1206556.
For example, if the existing pattern matched any four-digit number and the number 1234 were entered, this rule would translate that extension to the number +12065561234.


### Example 3
```
$a = Get-CsVoiceNormalizationRule -Identity global/RedmondFourDigit
$a.name = "RedmondRule"
Set-CsVoiceNormalizationRule -Instance $a
```

Example 3 applies to Skype For Business Server only and changes the name of the normalization rule.
Keep in mind that changing the name also changes the name portion of the Identity.
The `Set-CsVoiceNormalizationRule` cmdlet doesn't have a Name parameter, so in order to change the name we first call the `Get-CsVoiceNormalizationRule` cmdlet to retrieve the rule with the Identity global/RedmondFourDigit and assign the returned object to the variable $a.
We then assign the string RedmondRule to the Name property of the object.
Next, we pass the variable to the Instance parameter of the `Set-CsVoiceNormalizationRule` cmdlet to make the change permanent.


## PARAMETERS

### -Description

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A friendly description of the normalization rule.

Maximum string length: 512 characters.


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

A unique identifier for the rule.
The Identity specified must include the scope followed by a slash followed by the name; for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type NormalizationRule and can be retrieved by calling the `Get-CsVoiceNormalizationRule` cmdlet.


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

### -IsInternalExtension

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

If True, the result of applying this rule will be a number internal to the enterprise.
If False, applying the rule results in an external number.
This value is ignored if the value of the OptimizeDeviceDialing property of the associated dial plan is set to False.


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

### -Pattern

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

A regular expression that the dialed number must match in order for this rule to be applied.


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

### -Priority

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The order in which rules are applied.
A number might match more than one rule.
This parameter sets the order in which the rules are tested against the number.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -Translation

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The regular expression pattern that will be applied to the number to convert it to E.164 format.


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

The `Set-CsVoiceNormalizationRule` cmdlet accepts pipelined input of voice normalization rule objects.

## OUTPUTS

### None
The `Set-CsVoiceNormalizationRule` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.

## NOTES

## RELATED LINKS

[New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md)

[Remove-CsVoiceNormalizationRule](Remove-CsVoiceNormalizationRule.md)

[Get-CsVoiceNormalizationRule](Get-CsVoiceNormalizationRule.md)

[Test-CsVoiceNormalizationRule](Test-CsVoiceNormalizationRule.md)

[Set-CsDialPlan](Set-CsDialPlan.md)

[Get-CsDialPlan](Get-CsDialPlan.md)
