---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsOutboundTranslationRule
schema: 2.0.0
---

# Set-CsOutboundTranslationRule

## SYNOPSIS
Modifies an existing outbound translation rule.
An outbound translation rule converts phone numbers to the local dialing format for interaction with private branch exchange (PBX) systems.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsOutboundTranslationRule [[-Identity] <XdsIdentity>] [-Description <String>] [-Pattern <String>]
 [-Priority <Int32>] [-Translation <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsOutboundTranslationRule [-Instance <PSObject>] [-Description <String>] [-Pattern <String>]
 [-Priority <Int32>] [-Translation <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server normalizes phone numbers to E.164 format.
However, many private branch exchange (PBX) systems aren't able to work with this format.
Outbound translations rules translate the number to the local dialing format prior to sending the number to the Mediation Server or gateway.
Call this cmdlet to modify an existing outbound translation rule.

Each outbound translation rule is associated with a trunk configuration.
That means that using this cmdlet to modify a rule will impact the corresponding trunk configuration.
More than one outbound translation rule can be associated with each configuration.
Therefore, the Identity for each rule consists of a scope along with a name that is unique within the scope (in the format scope/name, for example site:Redmond/OBR1).
The rule is automatically associated with the trunk configuration with the same scope.
Calling the `Set-CsOutboundTranslationRule` cmdlet is the recommended way of changing outbound translation rules in a trunk configuration.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOutboundTranslationRule -Identity "site:Redmond/Prefix Redmond" -Description "Convert to seven digits" -Pattern '^\+1425(\d{7})$' -Translation '$1'
```

This example modifies the global outbound translation rule with the Identity site:Redmond/Prefix Redmond.
We've included a Description explaining that this rule is for translating numbers from E.164 format to a seven-digit phone number.
In addition, Pattern and Translation values have been specified, which will modify the existing values for these properties.
These values translate an E.164 number (in this case 12 digits beginning with +1425), specified by the regular expression in the Pattern, to a seven-digit number by removing the first five digits.
For example, the number +14255551212 would be translated to the number 5551212.


### -------------------------- Example 2 --------------------------
```
$a = Get-CsOutboundTranslationRule -Identity "site:Redmond/OBR1"

$a.Name = "Outbound Rule 1"

Set-CsOutboundTranslationRule -Instance $a
```

This example modifies the Name property of an outbound translation rule.
Note that this results in changing the Identity of this rule.
The first command in this example is a call to the `Get-CsOutboundTranslationRule` cmdlet.
We specify an Identity of site:Redmond\OBR1, which will return one translation rule, the rule with the Identity given.
Rather than display this rule, we assign it to the variable $a.
Line 2 of this example assigns the string "Outbound Rule 1" to the Name property of variable $a, the variable containing a reference to rule site:Redmond/OBR1.
In the last line of this example we call the `Set-CsOutboundTranslationRule` cmdlet, specifying the Instance parameter and passing it the variable $a.
If we now call the `Get-CsOutboundTranslationRule` cmdlet with an Identity value of site:Redmond/OBR1, nothing will be returned.
That's because the rule with that Identity no longer exists, it's been replaced by the same rule but with the Identity site:Redmond/Outbound Rule 1.


## PARAMETERS

### -Identity
The unique identifier of the outbound translation rule you want to modify.
The Identity consists of the scope followed by a unique name within each scope.
For example, site:Redmond/OutboundRule1.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
An object reference to an outbound translation rule.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule, which can be retrieved by calling the `Get-CsOutboundTranslationRule` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
A friendly description of the outbound translation rule.
This description can be used to help administrators clearly identify the purpose of the rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
A regular expression representing the number pattern to which the Translation will be applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
If a number matches the Pattern of more than one outbound translation rule, rules are applied in priority order.
Use this parameter to assign a priority to the rule.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Translation
A regular expression that will be applied to the number matching the Pattern to prepare that number for outbound routing.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule object.
Accepts pipelined input of outbound translation rule objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule.

## NOTES

## RELATED LINKS

[New-CsOutboundTranslationRule](New-CsOutboundTranslationRule.md)

[Remove-CsOutboundTranslationRule](Remove-CsOutboundTranslationRule.md)

[Get-CsOutboundTranslationRule](Get-CsOutboundTranslationRule.md)

