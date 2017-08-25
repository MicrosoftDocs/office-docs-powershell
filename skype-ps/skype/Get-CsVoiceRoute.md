---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVoiceRoute

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the voice routes configured for use in an organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

Use this cmdlet to retrieve one or more existing voice routes.
Voices routes contain instructions that tell Microsoft Lync Server 2010 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

This cmdlet can be used to retrieve voice route information such as which PSTN gateways the route is associated with (if any), which PSTN usages are associated with the route, the pattern (in the form of a regular expression) that identifies the phone numbers to which the route applies, and caller ID settings.
The PSTN usage associates the voice route to a voice policy.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoiceRoute cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoiceRoute"}

**Below Content Applies To:** Lync Server 2013

Use this cmdlet to retrieve one or more existing voice routes.
Voices routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

This cmdlet can be used to retrieve voice route information such as which PSTN gateways the route is associated with (if any), which PSTN usages are associated with the route, the pattern (in the form of a regular expression) that identifies the phone numbers to which the route applies, and caller ID settings.
The PSTN usage associates the voice route to a voice policy.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoiceRoute cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoiceRoute"}

**Below Content Applies To:** Skype for Business Server 2015

Use this cmdlet to retrieve one or more existing voice routes.
Voices routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

This cmdlet can be used to retrieve voice route information such as which PSTN gateways the route is associated with (if any), which PSTN usages are associated with the route, the pattern (in the form of a regular expression) that identifies the phone numbers to which the route applies, and caller ID settings.
The PSTN usage associates the voice route to a voice policy.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsVoiceRoute
```

Retrieves the properties for all voice routes defined within the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Retrieves the properties for all voice routes defined within the organization.

Get-CsVoiceRoute

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Retrieves the properties for all voice routes defined within the organization.

Get-CsVoiceRoute

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoiceRoute -Identity Route1
```

Retrieves the properties for the Route1 voice route.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Retrieves the properties for the Route1 voice route.

Get-CsVoiceRoute -Identity Route1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Retrieves the properties for the Route1 voice route.

Get-CsVoiceRoute -Identity Route1

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsVoiceRoute -Filter *test*
```

This command displays voice route settings where the Identity contains the string "test" anywhere within the value.
To find the string test only at the end of the Identity, use the value *test.
Similarly, to find the string test only if it occurs at the beginning of the Identity, specify the value test*.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This command displays voice route settings where the Identity contains the string "test" anywhere within the value.
To find the string test only at the end of the Identity, use the value *test.
Similarly, to find the string test only if it occurs at the beginning of the Identity, specify the value test*.

Get-CsVoiceRoute -Filter *test*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This command displays voice route settings where the Identity contains the string "test" anywhere within the value.
To find the string test only at the end of the Identity, use the value *test.
Similarly, to find the string test only if it occurs at the beginning of the Identity, specify the value test*.

Get-CsVoiceRoute -Filter *test*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsVoiceRoute | Where-Object {$_.PstnGatewayList.Count -eq 0}
```

This command retrieves all voice routes that have not had any PSTN gateways assigned.
First all voice routes are retrieved using the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to the Where-Object cmdlet.
Where-Object narrows down the results of the Get operation.
In this case we look at each voice route (that's what the $_ represents) and check the Count property of the PstnGatewayList property.
If the count of PSTN gateways is 0, the list is empty and no gateways have been defined for the route.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

This command retrieves all voice routes that have not had any PSTN gateways assigned.
First all voice routes are retrieved using the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to the Where-Object cmdlet.
Where-Object narrows down the results of the Get operation.
In this case we look at each voice route (that's what the $_ represents) and check the Count property of the PstnGatewayList property.
If the count of PSTN gateways is 0, the list is empty and no gateways have been defined for the route.

Get-CsVoiceRoute | Where-Object {$_.PstnGatewayList.Count -eq 0}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

This command retrieves all voice routes that have not had any PSTN gateways assigned.
First all voice routes are retrieved using the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to the Where-Object cmdlet.
The Where-Object cmdlet narrows down the results of the Get operation.
In this case we look at each voice route (that's what the $_ represents) and check the Count property of the PstnGatewayList property.
If the count of PSTN gateways is 0, the list is empty and no gateways have been defined for the route.

Get-CsVoiceRoute | Where-Object {$_.PstnGatewayList.Count -eq 0}

## PARAMETERS

### -Identity
A string that uniquely identifies the voice route.
If no identity is provided, all voice routes for the organization are returned.

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
This parameter filters the results of the Get operation based on the wildcard value passed to this parameter.

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
Retrieves the voice route from the local replica of the Central Management store, rather than the Central Management store itself.

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
This cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/422abb2d-bff3-4b9a-b18c-d8202b01f69b(OCS.14).aspx)

[New-CsVoiceRoute]()

[Remove-CsVoiceRoute]()

[Set-CsVoiceRoute]()

[Test-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/422abb2d-bff3-4b9a-b18c-d8202b01f69b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/422abb2d-bff3-4b9a-b18c-d8202b01f69b(OCS.16).aspx)

