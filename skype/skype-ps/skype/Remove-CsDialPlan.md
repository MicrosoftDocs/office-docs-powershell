---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsDialPlan
schema: 2.0.0
---

# Remove-CsDialPlan

## SYNOPSIS
Removes the specified dial plan.
This cmdlet can also be used to remove the global dial plan.
If you remove the global dial plan, however, the dial plan will not actually be removed; instead, the settings will simply be reset to their default values.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsDialPlan [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing dial plan (also known as a location profile).
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Dial plans are also used by the Conferencing Attendant application for dial-in conferencing.
A dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Note: Removing a dial plan will also remove any associated normalization rules.
If the global dial plan is removed, any associated normalization rules will also be removed, but a default global normalization rule will be created.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsDialPlan -Identity RedmondDialPlan
```

Example 1 uses the `Remove-CsDialPlan` cmdlet to delete the per-user dial plan with the Identity RedmondDialPlan.
Note that when you delete a dial plan, you do not necessarily have to assign a new plan to users who were assigned the now-deleted plan.
Instead, those users will use the dial plan assigned to their service or site, or the global plan.


### -------------------------- Example 2 --------------------------
```
Get-CsDialPlan | Where-Object {$_.Description -match "Redmond"} | Remove-CsDialPlan
```

In Example 2 all the dial plans that include the word Redmond in their description are deleted.
To do this, the command first calls the `Get-CsDialPlan` cmdlet to return a collection of all the dial plans configured for use within the organization.
That collection is then piped to the `Where-Object` cmdlet, which applies a filter that limits the returned data to profiles that include the word Redmond in their description.
After that's done, the filtered collection is passed to the `Remove-CsDialPlan` cmdlet, which removes all the dial plans in the collection.


## PARAMETERS

### -Identity
The unique identifier of the dial plan you want to remove.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.
The `Remove-CsDialPlan` cmdlet accepts pipelined input of dial plan objects.

## OUTPUTS

###  
This cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.

## NOTES

## RELATED LINKS

[New-CsDialPlan](New-CsDialPlan.md)

[Set-CsDialPlan](Set-CsDialPlan.md)

[Get-CsDialPlan](Get-CsDialPlan.md)

[Grant-CsDialPlan](Grant-CsDialPlan.md)

[Test-CsDialPlan](Test-CsDialPlan.md)

[Remove-CsVoiceNormalizationRule](Remove-CsVoiceNormalizationRule.md)

[Get-CsVoiceNormalizationRule](Get-CsVoiceNormalizationRule.md)

