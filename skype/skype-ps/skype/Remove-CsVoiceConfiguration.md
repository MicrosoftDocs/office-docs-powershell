---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoiceConfiguration

## SYNOPSIS
Resets the voice configuration to its default values.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsVoiceConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Voice test configurations are used to test a phone number against a specific voice policy, route and dial plan.
This cmdlet removes the global (and only) voice configuration, which is a container for all voice test configurations defined for a Skype for Business Server deployment.
"Removing" the voice configuration doesn't actually remove it; the global instance is still there.
However, it does set the list of voice test configurations to the default, which is empty.

WARNING: Removing the voice configuration (which sets the list of voice test configurations to empty) deletes all defined voice test configurations for a Skype for Business Server deployment.
After calling this cmdlet, a call to the `Get-CsVoiceTestConfiguration` cmdlet will return no results.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsVoiceConfiguration -Identity Global -Confirm
```

This example resets the Global (and only) voice configuration to the default values.
This action deletes all defined voice test configurations, so we added the Confirm parameter in order to receive a prompt asking whether we really want to perform this action before the removal takes place.


## PARAMETERS

### -Identity
The scope of the voice configuration to remove.
This value must be Global.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration object.
Accepts pipelined input of a voice configuration object.

## OUTPUTS

###  
This cmdlet removes (resets) an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration.

## NOTES

## RELATED LINKS

[Set-CsVoiceConfiguration]()

[Get-CsVoiceConfiguration]()

[Remove-CsVoiceTestConfiguration]()

[Get-CsVoiceTestConfiguration]()
