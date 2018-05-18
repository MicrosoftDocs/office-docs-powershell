---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsVoiceRoute
schema: 2.0.0
---

# Get-CsVoiceRoute

## SYNOPSIS
Returns information about the voice routes configured for use in an organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoiceRoute [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoiceRoute [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to retrieve one or more existing voice routes.
Voices routes contain instructions that tell Skype for Business Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

This cmdlet can be used to retrieve voice route information such as which PSTN gateways the route is associated with (if any), which PSTN usages are associated with the route, the pattern (in the form of a regular expression) that identifies the phone numbers to which the route applies, and caller ID settings.
The PSTN usage associates the voice route to a voice policy.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Get-CsVoiceRoute
```

Retrieves the properties for all voice routes defined within the organization.


### -------------------------- Example 2 -------------------------- 
```
Get-CsVoiceRoute -Identity Route1
```

Retrieves the properties for the Route1 voice route.


### -------------------------- Example 3 --------------------------
```
Get-CsVoiceRoute -Filter *test*
```

This command displays voice route settings where the Identity contains the string "test" anywhere within the value.
To find the string test only at the end of the Identity, use the value *test.
Similarly, to find the string test only if it occurs at the beginning of the Identity, specify the value test*.

### -------------------------- Example 4 --------------------------
```
Get-CsVoiceRoute | Where-Object {$_.PstnGatewayList.Count -eq 0}
```

This command retrieves all voice routes that have not had any PSTN gateways assigned.
First all voice routes are retrieved using the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to the Where-Object cmdlet.
The Where-Object cmdlet narrows down the results of the Get operation.
In this case we look at each voice route (that's what the $_ represents) and check the Count property of the PstnGatewayList property.
If the count of PSTN gateways is 0, the list is empty and no gateways have been defined for the route.


## PARAMETERS

### -Identity
A string that uniquely identifies the voice route.
If no identity is provided, all voice routes for the organization are returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter filters the results of the Get operation based on the wildcard value passed to this parameter.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the voice route from the local replica of the Central Management store, rather than the Central Management store itself.

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
None.

## OUTPUTS

###  
This cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.

## NOTES

## RELATED LINKS


[New-CsVoiceRoute](New-CsVoiceRoute.md)

[Remove-CsVoiceRoute](Remove-CsVoiceRoute.md)

[Set-CsVoiceRoute](Set-CsVoiceRoute.md)

[Test-CsVoiceRoute](Test-CsVoiceRoute.md)

