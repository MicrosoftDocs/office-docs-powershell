---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsVoiceTestConfiguration
schema: 2.0.0
---

# Test-CsVoiceTestConfiguration

## SYNOPSIS
Runs test voice configurations to ensure voice routing and policies work as expected.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### AdhocTest
```
Test-CsVoiceTestConfiguration -DialedNumber <PhoneNumber> -Dialplan <LocationProfile>
 -VoicePolicy <VoicePolicy> [-RouteSettings <PstnRoutingSettings>] [-Force] [<CommonParameters>]
```

### StoredTest
```
Test-CsVoiceTestConfiguration [-Dialplan <LocationProfile>] -TestCaseInputObject <TestConfiguration>
 [-VoicePolicy <VoicePolicy>] [-RouteSettings <PstnRoutingSettings>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
Running this cmdlet with the appropriate parameter settings allows you to run these tests.

This cmdlet tests a phone number against a voice route, usage, dial plan, and voice policy to enable you to verify intended outcomes or to compare the actual outcome to the expected outcome.
The voice configurations to be tested can be defined by entering the appropriate parameters individually, or by using the `New-CsVoiceTestConfiguration` cmdlet.

If you enter values for DialedNumber, DialPlan, and VoicePolicy, the output will include the translated number, the normalization rule used to create that translation, the route that was used, and the PSTN usage.
If instead you enter a value for the TestCaseInputObject parameter, you can also retrieve status on whether the results matched expected results that you supplied to the test object when you created it with the `New-CsVoiceTestConfiguration` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsVoiceTestConfiguration -Identity TestConfig1 | Test-CsVoiceTestConfiguration
```

This example runs a voice configuration test against configuration TestConfig1.
First the `Get-CsVoiceTestConfiguration` cmdlet is run to retrieve the configuration with the Identity TestConfig1.
That configuration object is then piped to the `Test-CsVoiceTestConfiguration` cmdlet.


### -------------------------- Example 2 --------------------------
```
$a = Get-CsVoiceTestConfiguration -Identity TestConfig1

Test-CsVoiceTestConfiguration -TestCaseInputObject $a
```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the Test cmdlet, the object is first stored in the variable $a, and then is passed as the value to the parameter TestCaseInputObject to be used as the test configuration.


### -------------------------- Example 3 --------------------------
```
$dp = Get-CsDialPlan -Identity Global

$vp = Get-CsVoicePolicy -Identity Global

Test-CsVoiceTestConfiguration -DialedNumber 4255551212 -Dialplan $dp -VoicePolicy $vp
```

This example runs a test configuration without first having to define it with the `New-CsVoiceTestConfiguration` cmdlet.
Instead of passing a TestConfiguration object created ahead of time, this example shows how to set up a test as you go by specifying the dialed number to test, and the dial plan and voice policy against which to perform the test.

The first line in this example calls the `Get-CsDialPlan` cmdlet to retrieve the Global dial plan.
The dial plan object retrieved is assigned to the variable $dp.
In the second line, we do the same thing with the voice policy by calling the `Get-CsVoicePolicy` cmdlet to retrieve the Global voice policy, and then assigning that policy to the variable $vp.

Finally, we're ready to run the test.
We call the `Test-CsVoiceTestConfiguration` cmdlet, passing the phone number to test to the DialedNumber parameter, the dial plan we retrieved in line 1 (stored in $dp) to the Dialplan parameter, and the voice policy we retrieved in line 2 (stored in $vp) to the VoicePolicy parameter.

Note that the output for Example 3 will not include status for expected results.
If you want to test the results against expectations you must define those expectations by using the `New-CsVoiceTestConfiguration` cmdlet and call the `Test-CsVoiceTestConfiguration` cmdlet as shown in Examples 1 and 2.


## PARAMETERS

### -DialedNumber
The phone number to run the test against.
Based on the dial plan, route, and policy, this number will be normalized and displayed as output.

This parameter is required unless the TestCaseInputObject parameter is supplied with a value.
You cannot supply a DialedNumber and a TestCaseInputObject.
(The TestCaseInputObject already contains a DialedNumber within that object.)

```yaml
Type: PhoneNumber
Parameter Sets: AdhocTest
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Dialplan
A reference to a dial plan object of the dial plan to use when running the test.
Dial plan objects can be retrieved by calling the `Get-CsDialPlan` cmdlet.

This parameter is required if you've also specified the DialedNumber parameter.
Do not use this parameter if you are using the TestCaseInputObject parameter.
If you do, the object in this parameter must match the dial plan specified in the TestCaseInputObject, making the use of this parameter redundant.

```yaml
Type: LocationProfile
Parameter Sets: AdhocTest
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: LocationProfile
Parameter Sets: StoredTest
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestCaseInputObject
An object containing a reference to the voice configuration to test.
This object reference can be retrieved by calling the `Get-CsVoiceTestConfiguration` cmdlet.

If you call the cmdlet with this parameter, you cannot specify a DialedNumber.
You should also not specify a Dialplan or VoicePolicy, as those would be redundant with the values in the voice test configuration object.

```yaml
Type: TestConfiguration
Parameter Sets: StoredTest
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -VoicePolicy
A reference to a voice policy object of the voice policy to use when running the test.
Voice policy objects can be retrieved by calling the `Get-CsVoicePolicy` cmdlet.

This parameter is required if you've also specified the DialedNumber parameter.
Do not use this parameter if you are using the TestCaseInputObject parameter.
If you do, the object in this parameter must match the voice policy specified in the TestCaseInputObject, making the use of this parameter redundant.

```yaml
Type: VoicePolicy
Parameter Sets: AdhocTest
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: VoicePolicy
Parameter Sets: StoredTest
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteSettings
A reference to an object containing all the voice routes available on the Skype for Business Server installation.
You can retrieve this object by calling the `Get-CsRoutingConfiguration` cmdlet.

You can use this parameter with either the DialedNumber parameter or with the TestCaseInputObject parameter.


```yaml
Type: PstnRoutingSettings
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration object.
Accepts pipelined input of a voice test configuration object.

## OUTPUTS

###  
This cmdlet returns an object of type Microsoft.Rtc.Management.Voice.OcsVoiceTestResult.

## NOTES

## RELATED LINKS

[New-CsVoiceTestConfiguration](New-CsVoiceTestConfiguration.md)

[Remove-CsVoiceTestConfiguration](Remove-CsVoiceTestConfiguration.md)

[Set-CsVoiceTestConfiguration](Set-CsVoiceTestConfiguration.md)

[Get-CsVoiceTestConfiguration](Get-CsVoiceTestConfiguration.md)

[Get-CsDialPlan](Get-CsDialPlan.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)

[Get-CsRoutingConfiguration](Get-CsRoutingConfiguration.md)

