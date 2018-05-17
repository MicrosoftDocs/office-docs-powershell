---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsVoicePolicy
schema: 2.0.0
---

# Test-CsVoicePolicy

## SYNOPSIS
Tests a telephone number against a voice policy and determines which voice route would be used against that policy for that number.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsVoicePolicy -TargetNumber <PhoneNumber> -VoicePolicy <VoicePolicy>
 [-RouteSettings <PstnRoutingSettings>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Voice policies are tied to voice routes through public switched telephone network (PSTN) usages.
A call from a user who has been assigned a particular voice policy can only be sent through a route that has a PSTN usage matching a usage on the policy and also a number pattern that matches the number dialed.
Call the `Test-CsVoicePolicy` cmdlet to determine which (if any) route will be used to route a call from a user with a particular voice policy, and also what phone usage ties the policy to the route.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsVoicePolicy -Identity site:Redmond | Test-CsVoicePolicy -TargetNumber "+14255559999"
```

This example runs a voice policy test against the voice policy with the Identity site:Redmond.
First the `Get-CsVoicePolicy` cmdlet is run to retrieve the policy with the Identity site:Redmond.
That policy object is then piped to the `Test-CsVoicePolicy` cmdlet, where the policy is tested against the telephone number +14255559999.
The output will be the first voice route (based on the Priority property of the route) that has a number pattern matching the TargetNumber value and a phone usage matching a phone usage in the policy.
If no matching route is found (for example, if the number pattern matches the pattern for an 11-digit number and you supply a 7-digit number) a null value will be returned.


### -------------------------- Example 2 --------------------------
```
$a = Get-CsVoicePolicy -Identity site:Redmond

Test-CsVoicePolicy -TargetNumber "+14255559999" -VoicePolicy $a
```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the `Test-CsVoicePolicy` cmdlet, the object is first stored in the variable $a and then is passed as the value to the parameter VoicePolicy to be used as the policy against which the test will run.


### -------------------------- Example 3 --------------------------
```
Get-CsVoicePolicy | Test-CsVoicePolicy -TargetNumber "+12065559999"
```

This example runs a voice policy test against all voice policies defined within the Skype for Business Server deployment.
First the `Get-CsVoicePolicy` cmdlet is run (with no parameters) to retrieve all the voice policies.
The collection of policies that is returned is then piped to the `Test-CsVoicePolicy` cmdlet, where each policy in the collection is checked for a matching route based on the target phone number provided (+12065559999) and phone usages.
The output will be a list of matching routes along with the phone usages that were matched.


## PARAMETERS

### -TargetNumber
The phone number against which to run the test.
This number should be in E.164 format (such as +14255551212).


```yaml
Type: PhoneNumber
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoicePolicy
A reference to the voice policy object against which to run the test.
Voice policy objects can be retrieved by calling the `Get-CsVoicePolicy` cmdlet.


```yaml
Type: VoicePolicy
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RouteSettings
Route settings against which to run the test.
The route settings can be retrieved with a call to the `Get-CsRoutingConfiguration` cmdlet.


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
Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.


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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.
Accepts pipelined input of voice policy objects.

## OUTPUTS

###  
Returns an object of type Microsoft.Rtc.Management.Voice.VoicePolicyTestResult.

## NOTES

## RELATED LINKS

[New-CsVoicePolicy](New-CsVoicePolicy.md)

[Remove-CsVoicePolicy](Remove-CsVoicePolicy.md)

[Set-CsVoicePolicy](Set-CsVoicePolicy.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)

[Grant-CsVoicePolicy](Grant-CsVoicePolicy.md)

