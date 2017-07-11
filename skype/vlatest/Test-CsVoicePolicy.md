---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsVoicePolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Tests a telephone number against a voice policy and determines which voice route would be used against that policy for that number.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Tests a telephone number against a voice policy and determines which voice route would be used against that policy for that number.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsVoicePolicy -TargetNumber <PhoneNumber> -VoicePolicy <VoicePolicy>
 [-RouteSettings <PstnRoutingSettings>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Voice policies are tied to voice routes through public switched telephone network (PSTN) usages.
A call from a user who has been assigned a particular voice policy can only be sent through a route that has a PSTN usage matching a usage on the policy as well as a number pattern that matches the number dialed.
Call the Test-CsVoicePolicy cmdlet to determine which (if any) route will be used to route a call from a user with a particular voice policy, as well as what phone usage ties the policy to the route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Test-CsVoicePolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsVoicePolicy"}

Below Content Applies To: Lync Server 2013

Voice policies are tied to voice routes through public switched telephone network (PSTN) usages.
A call from a user who has been assigned a particular voice policy can only be sent through a route that has a PSTN usage matching a usage on the policy and also a number pattern that matches the number dialed.
Call the Test-CsVoicePolicy cmdlet to determine which (if any) route will be used to route a call from a user with a particular voice policy, and also what phone usage ties the policy to the route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Test-CsVoicePolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsVoicePolicy"}

Below Content Applies To: Skype for Business Server 2015

Voice policies are tied to voice routes through public switched telephone network (PSTN) usages.
A call from a user who has been assigned a particular voice policy can only be sent through a route that has a PSTN usage matching a usage on the policy and also a number pattern that matches the number dialed.
Call the Test-CsVoicePolicy cmdlet to determine which (if any) route will be used to route a call from a user with a particular voice policy, and also what phone usage ties the policy to the route.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsVoicePolicy -Identity site:Redmond | Test-CsVoicePolicy -TargetNumber "+14255559999"
```

This example runs a voice policy test against the voice policy with the Identity site:Redmond.
First the Get-CsVoicePolicy cmdlet is run to retrieve the policy with the Identity site:Redmond.
That policy object is then piped to the Test-CsVoicePolicy cmdlet, where the policy is tested against the telephone number +14255559999.
The output will be the first voice route (based on the Priority property of the route) that has a number pattern matching the TargetNumber value and a phone usage matching a phone usage in the policy.
If no matching route is found (for example, if the number pattern matches the pattern for an 11-digit number and you supply a 7-digit number) a null value will be returned.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example runs a voice policy test against the voice policy with the Identity site:Redmond.
First the Get-CsVoicePolicy cmdlet is run to retrieve the policy with the Identity site:Redmond.
That policy object is then piped to the Test-CsVoicePolicy cmdlet, where the policy is tested against the telephone number +14255559999.
The output will be the first voice route (based on the Priority property of the route) that has a number pattern matching the TargetNumber value and a phone usage matching a phone usage in the policy.
If no matching route is found (for example, if the number pattern matches the pattern for an 11-digit number and you supply a 7-digit number) a null value will be returned.

Get-CsVoicePolicy -Identity site:Redmond | Test-CsVoicePolicy -TargetNumber "+14255559999"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example runs a voice policy test against the voice policy with the Identity site:Redmond.
First the Get-CsVoicePolicy cmdlet is run to retrieve the policy with the Identity site:Redmond.
That policy object is then piped to the Test-CsVoicePolicy cmdlet, where the policy is tested against the telephone number +14255559999.
The output will be the first voice route (based on the Priority property of the route) that has a number pattern matching the TargetNumber value and a phone usage matching a phone usage in the policy.
If no matching route is found (for example, if the number pattern matches the pattern for an 11-digit number and you supply a 7-digit number) a null value will be returned.

Get-CsVoicePolicy -Identity site:Redmond | Test-CsVoicePolicy -TargetNumber "+14255559999"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$a = Get-CsVoicePolicy -Identity site:Redmond
Test-CsVoicePolicy -TargetNumber "+14255559999" -VoicePolicy $a
```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the Test cmdlet, the object is first stored in the variable $a and then is passed as the value to the parameter VoicePolicy to be used as the policy against which the test will run.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the Test cmdlet, the object is first stored in the variable $a and then is passed as the value to the parameter VoicePolicy to be used as the policy against which the test will run.

$a = Get-CsVoicePolicy -Identity site:Redmond

Test-CsVoicePolicy -TargetNumber "+14255559999" -VoicePolicy $a

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the Test-CsVoicePolicy cmdlet, the object is first stored in the variable $a and then is passed as the value to the parameter VoicePolicy to be used as the policy against which the test will run.

$a = Get-CsVoicePolicy -Identity site:Redmond

Test-CsVoicePolicy -TargetNumber "+14255559999" -VoicePolicy $a

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsVoicePolicy | Test-CsVoicePolicy -TargetNumber "+12065559999"
```

This example runs a voice policy test against all voice policies defined within the Lync Server 2010 deployment.
First the Get-CsVoicePolicy cmdlet is run (with no parameters) to retrieve all the voice policies.
The collection of policies that is returned is then piped to the Test-CsVoicePolicy cmdlet, where each policy in the collection is checked for a matching route based on the target phone number provided (+12065559999) and phone usages.
The output will be a list of matching routes along with the phone usages that were matched.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example runs a voice policy test against all voice policies defined within the Lync Server deployment.
First the Get-CsVoicePolicy cmdlet is run (with no parameters) to retrieve all the voice policies.
The collection of policies that is returned is then piped to the Test-CsVoicePolicy cmdlet, where each policy in the collection is checked for a matching route based on the target phone number provided (+12065559999) and phone usages.
The output will be a list of matching routes along with the phone usages that were matched.

Get-CsVoicePolicy | Test-CsVoicePolicy -TargetNumber "+12065559999"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example runs a voice policy test against all voice policies defined within the Skype for Business Server 2015 deployment.
First the Get-CsVoicePolicy cmdlet is run (with no parameters) to retrieve all the voice policies.
The collection of policies that is returned is then piped to the Test-CsVoicePolicy cmdlet, where each policy in the collection is checked for a matching route based on the target phone number provided (+12065559999) and phone usages.
The output will be a list of matching routes along with the phone usages that were matched.

Get-CsVoicePolicy | Test-CsVoicePolicy -TargetNumber "+12065559999"

## PARAMETERS

### -TargetNumber
Below Content Applies To: Lync Server 2010, Lync Server 2013

The phone number against which to run the test.
This number should be in E.164 format (such as +14255551212).

Full data type: Microsoft.Rtc.Management.Voice.PhoneNumber



Below Content Applies To: Skype for Business Server 2015

The phone number against which to run the test.
This number should be in E.164 format (such as +14255551212).



```yaml
Type: PhoneNumber
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoicePolicy
Below Content Applies To: Lync Server 2010, Lync Server 2013

A reference to the voice policy object against which to run the test.
Voice policy objects can be retrieved by calling the Get-CsVoicePolicy cmdlet.

Full data type: Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy



Below Content Applies To: Skype for Business Server 2015

A reference to the voice policy object against which to run the test.
Voice policy objects can be retrieved by calling the Get-CsVoicePolicy cmdlet.



```yaml
Type: VoicePolicy
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RouteSettings
Below Content Applies To: Lync Server 2010, Lync Server 2013

Route settings against which to run the test.
The route settings can be retrieved with a call to the Get-CsRoutingConfiguration cmdlet.

Full data type: Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnRoutingSettings



Below Content Applies To: Skype for Business Server 2015

Route settings against which to run the test.
The route settings can be retrieved with a call to the Get-CsRoutingConfiguration cmdlet.



```yaml
Type: PstnRoutingSettings
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010

{{Fill Force Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.



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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoicePolicy object.
Accepts pipelined input of voice policy objects.

## OUTPUTS

###  
Returns an object of type Microsoft.Rtc.Management.Voice.VoicePolicyTestResult.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/4d631e36-3a9d-4ca2-913f-8c9f4e93183d(OCS.14).aspx)

[New-CsVoicePolicy]()

[Remove-CsVoicePolicy]()

[Set-CsVoicePolicy]()

[Get-CsVoicePolicy]()

[Grant-CsVoicePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/4d631e36-3a9d-4ca2-913f-8c9f4e93183d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4d631e36-3a9d-4ca2-913f-8c9f4e93183d(OCS.16).aspx)

