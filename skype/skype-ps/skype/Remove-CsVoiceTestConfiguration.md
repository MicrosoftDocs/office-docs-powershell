---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsVoiceTestConfiguration
schema: 2.0.0
---

# Remove-CsVoiceTestConfiguration

## SYNOPSIS
Removes a voice test configuration that was used to test phone numbers against specified routes and rules.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsVoiceTestConfiguration [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
When you're done with those tests and won't need them again, use this cmdlet to remove them.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsVoiceTestConfiguration -Identity TestConfig1
```

This example removes the voice test configuration settings with the Identity TestConfig1.


### -------------------------- Example 2 --------------------------
```
Get-CsVoiceTestConfiguration -Filter *test* | Remove-CsVoiceTestConfiguration
```

This example removes all voice test configuration settings for any configuration with an Identity containing the string test.
The command first calls the `Get-CsVoiceTestConfiguration` cmdlet with the Filter parameter to retrieve all voice test configurations that have an Identity with the string "test" anywhere in its value.
The resulting set of configurations is then piped to the `Remove-CsVoiceTestConfiguration` cmdlet and removed.


## PARAMETERS

### -Identity
A string uniquely identifying the test configuration you want to remove.

```yaml
Type: XdsGlobalRelativeIdentity
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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration object.
Accepts pipelined input of voice test configuration objects.

## OUTPUTS

###  
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration.

## NOTES

## RELATED LINKS

[New-CsVoiceTestConfiguration](New-CsVoiceTestConfiguration.md)

[Set-CsVoiceTestConfiguration](Set-CsVoiceTestConfiguration.md)

[Get-CsVoiceTestConfiguration](Get-CsVoiceTestConfiguration.md)

[Test-CsVoiceTestConfiguration](Test-CsVoiceTestConfiguration.md)
