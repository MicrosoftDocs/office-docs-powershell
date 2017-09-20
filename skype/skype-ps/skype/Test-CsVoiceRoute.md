---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsVoiceRoute
schema: 2.0.0
---

# Test-CsVoiceRoute

## SYNOPSIS
Tests a telephone number against a voice route number pattern and returns a Boolean (true/false) value stating whether the supplied number matches the number pattern for the route.
Number pattern is just one of the properties used by voice routes to tell Skype for Business Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsVoiceRoute -Route <Route> -TargetNumber <PhoneNumber> [-Force] [<CommonParameters>]
```

## DESCRIPTION
A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.
This cmdlet verifies whether or not a given telephone number will be routed through a specified voice route based on the number pattern of the route (the NumberPattern property).
You can use this cmdlet to troubleshoot routing issues or to simply try out phone numbers against specific routes to ensure the results are what you expect.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$vr = Get-CsVoiceRoute -Identity testroute

Test-CsVoiceRoute -TargetNumber "+14255551212" -Route $vr
```

This command determines whether a given number matches the pattern for the specified route.
We first use the `Get-CsVoiceRoute` cmdlet to retrieve the voice route testroute.
We use that route as the value for the Route parameter of the `Test-CsVoiceRoute` cmdlet.
We also include the number we want to test in the TargetNumber parameter.
The output is a Boolean value stating whether the target number matches the pattern for that route.


### -------------------------- Example 2 --------------------------
```
Get-CsVoiceRoute -Identity testroute | Test-CsVoiceRoute -TargetNumber "+14255551212"
```

Example 2 performs the same action as Example 1.
However, in this example the action is performed in a single command.
We first call the `Get-CsVoiceRoute` cmdlet to retrieve the voice route with the Identity testroute.
We pipe that voice route to the `Test-CsVoiceRoute` cmdlet and test the route against the number supplied in the TargetNumber parameter.
Note that we do not need to supply the Route parameter because the route was piped in to the cmdlet.


### -------------------------- Example 3 --------------------------
```
Get-CsVoiceRoute | Test-CsVoiceRoute -TargetNumber "+14255551212"
```

This example retrieves a collection of all the voice routes defined within a Skype for Business Server deployment and tests the number patterns of each route against the TargetNumber supplied in the call to the `Test-CsVoiceRoute` cmdlet.
The output will be a True or False value for each route tested.


### -------------------------- Example 4 --------------------------
```
$z = Get-CsVoiceRoute

foreach ($x in $z){$x.Identity; Test-CsVoiceRoute -TargetNumber "+14255551212" -Route $x}
```

This example is similar to Example 3 in that it retrieves the results of a voice route test against multiple routes.
However, the output of Example 3 will simply be a list of True/False values, with no clear indication of which route the test results apply to.
This example solves that problem.
(There are things that can be done to make the output nicer, but this short example at least accomplishes the task.)

We begin by calling the `Get-CsVoiceRoute` cmdlet to retrieve all voice routes and assign the collection to the variable $z.
In the next line we begin a foreach loop.
This loop will take each member of the collection one at a time and assign it to the variable $x.
The first thing we do with $x, which contains a reference to a single voice route, is display the Identity of that route: $x.Identity.
The next part of the command is a call to the `Test-CsVoiceRoute` cmdlet, where we test route $x against the target number.
The final output will be a (not very nicely formatted) list of voice route identities followed by a true/false indicator of whether the target number matched the number pattern in the route with that identity.


## PARAMETERS

### -Route
An object containing a reference to the voice route against which you want to test the number specified in the TargetNumber parameter.
You can retrieve a voice route object by calling the `Get-CsVoiceRoute` cmdlet.

Full Data Type: Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route

```yaml
Type: Route
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -TargetNumber
The phone number against which you want to test the voice route specified in the Route parameter.
This number should be in E.164 format (such as +14255551212).

Full Data Type: Microsoft.Rtc.Management.Voice.PhoneNumber

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

### -Force
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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.
Accepts pipelined input of a voice route object.

## OUTPUTS

###  
Returns an object of type Microsoft.Rtc.Management.Voice.VoiceRouteTestResult.

## NOTES

## RELATED LINKS

[New-CsVoiceRoute]()

[Remove-CsVoiceRoute]()

[Set-CsVoiceRoute]()

[Get-CsVoiceRoute]()
