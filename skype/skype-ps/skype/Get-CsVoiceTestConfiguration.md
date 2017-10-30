---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsVoiceTestConfiguration
schema: 2.0.0
---

# Get-CsVoiceTestConfiguration

## SYNOPSIS
Retrieves a test scenario you can use to test phone numbers against specified routes and rules.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoiceTestConfiguration [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoiceTestConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves the voice route, usage, dial plan, and voice policy against which to test a specified phone number.
Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
You can do this testing by retrieving a test configuration with this cmdlet, and then running that scenario with the Test-CsVoiceConfiguration cmdlet.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsVoiceTestConfiguration
```

Retrieves all the voice test configuration settings.


### -------------------------- Example 2 --------------------------
```
Get-CsVoiceTestConfiguration | Select-Object Identity, DialedNumber, ExpectedTranslatedNumber
```

This example retrieves all the voice test configuration settings, displaying only the Identity, DialedNumber, and ExpectedTranslatedNumber parameter of each.
The settings returned by the Get-CsVoiceTestConfiguration cmdlet are piped to the Select-Object cmdlet, where the output is narrowed down to the Identity, DialedNumber, and ExpectedTranslatedNumber properties.


### -------------------------- Example 3 --------------------------
```
Get-CsVoiceTestConfiguration -Filter *test*
```

This example uses the Filter parameter to retrieve all the voice test configuration settings with Identities that contain the string "test".
The wildcard characters (*) at the beginning and end of the filter value indicate that the string "test" can be located anywhere within the Identity, with any characters before or after that string.
For example, this command would return voice test configurations with names such as TestConfig, VoiceNumberTest, and VoiceTest1.



## PARAMETERS

### -Identity
A string uniquely identifying the test configuration you want to retrieve.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter provides a way to do a wildcard search of the defined voice test configurations.
(For details, see the examples in this topic.)

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the voice test configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Returns one of more objects of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration.

## NOTES

## RELATED LINKS


[New-CsVoiceTestConfiguration](New-CsVoiceTestConfiguration.md)

[Remove-CsVoiceTestConfiguration](Remove-CsVoiceTestConfiguration.md)

[Set-CsVoiceTestConfiguration](Set-CsVoiceTestConfiguration.md)

[Test-CsVoiceTestConfiguration](Test-CsVoiceTestConfiguration.md)
