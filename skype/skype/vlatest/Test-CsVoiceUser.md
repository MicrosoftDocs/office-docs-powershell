---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsVoiceUser

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Identifies the route that a phone call from a given user would take to be completed based on voice rules, routes, and policies.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Identifies the route that a phone call from a given user would take to be completed based on voice rules, routes, and policies.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsVoiceUser -DialedNumber <PhoneNumber> -SipUri <UserIdParameter> [-Force] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

When a user makes a phone call, the route the call takes to reach its destination depends on the policies and dial plans assigned to that user.
Given a user's SIP address and a phone number, this cmdlet returns the number translated to E.164 format (based on the user's dial plan), the normalization rule that supplied that translation, the first route (based on route Priority) with a number pattern matching that phone number, and the phone usage that would link the voice policy of that user to the voice route.

This cmdlet can be used to determine whether a specific phone number will route and translate as expect based on user settings, and can help troubleshoot issues experienced by individual users.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Test-CsVoiceUser cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsVoiceUser"}

**Below Content Applies To:** Skype for Business Server 2015

When a user makes a phone call, the route the call takes to reach its destination depends on the policies and dial plans assigned to that user.
Given a user's SIP address and a phone number, this cmdlet returns the number translated to E.164 format (based on the user's dial plan), the normalization rule that supplied that translation, the first route (based on route Priority) with a number pattern matching that phone number, and the phone usage that would link the voice policy of that user to the voice route.

This cmdlet can be used to determine whether a specific phone number will route and translate as expect based on user settings, and can help troubleshoot issues experienced by individual users.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Test-CsVoiceUser -DialedNumber "+14255559999" -SipUri "sip:kmyer@litwareinc.com" -Verbose
```

This example runs a voice user test against the user with the SIP address sip:kmyer@litwareinc.com.
The test is performed against the phone number provided by the DialedNumber parameter ("+14255559999").
If no matching rules or routes are identified this cmdlet returns a null value.
Notice that we've also included the Verbose parameter.
Verbose is a common  Windows PowerShell parameter that will display additional information as the test is being conducted, such as which dial plan and voice policy are being loaded for the test.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example runs a voice user test against the user with the SIP address sip:kmyer@litwareinc.com.
The test is performed against the phone number provided by the DialedNumber parameter ("+14255559999").
If no matching rules or routes are identified this cmdlet returns a null value.
Notice that we've also included the Verbose parameter.
Verbose is a common Windows PowerShell parameter that will display additional information as the test is being conducted, such as which dial plan and voice policy are being loaded for the test.

Test-CsVoiceUser -DialedNumber "+14255559999" -SipUri "sip:kmyer@litwareinc.com" -Verbose

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example runs a voice user test against the user with the SIP address sip:kmyer@litwareinc.com.
The test is performed against the phone number provided by the DialedNumber parameter ("+14255559999").
If no matching rules or routes are identified this cmdlet returns a null value.
Notice that we've also included the Verbose parameter.
Verbose is a common Windows PowerShell parameter that will display additional information as the test is being conducted, such as which dial plan and voice policy are being loaded for the test.

Test-CsVoiceUser -DialedNumber "+14255559999" -SipUri "sip:kmyer@litwareinc.com" -Verbose

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser | ForEach-Object {$_.DisplayName; Test-CsVoiceUser -DialedNumber "+14255559999" -SipUri $_.SipAddress} | Format-List
```

This example does a voice routing test for all users enabled for Lync Server 2010 or Office Communications Server.
The command starts with a call to Get-CsUser, which returns a collection of all users enabled for Lync Server 2010 or Office Communications Server.
This example then pipes the collection of users to the ForEach-Object cmdlet.
This cmdlet will look at each individual user object and perform the actions we've specified within curly braces ({}).

The first action is to output the display name of the current user.
(The current user is represented by the $_ characters; thus the display name is in the DisplayName property of $_.) We now can see which user account we're testing.
Next we call the Test-CsVoiceUser cmdlet, passing it the DialedNumber ("+14255559999") and the SipUri of the current user.
In this example we're using the user's SIP address ($_.SipAddress).

Finally, because the output by default is in table format and can get cut off to fit the screen width, we pipe the test results to the Format-List cmdlet so we'll see each user's display name followed by one line for each output field.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example does a voice routing test for all users enabled for Lync Server or Office Communications Server.
The command starts with a call to Get-CsUser, which returns a collection of all users enabled for Lync Server or Office Communications Server.
This example then pipes the collection of users to the ForEach-Object cmdlet.
This cmdlet will look at each individual user object and perform the actions we've specified within curly braces ({}).

The first action is to output the display name of the current user.
(The current user is represented by the $_ characters; thus the display name is in the DisplayName property of $_.) We now can see which user account we're testing.
Next we call the Test-CsVoiceUser cmdlet, passing it the DialedNumber ("+14255559999") and the SipUri of the current user.
In this example we're using the user's SIP address ($_.SipAddress).

Finally, because the output by default is in table format and can get cut off to fit the screen width, we pipe the test results to the Format-List cmdlet so we'll see each user's display name followed by one line for each output field.

Get-CsUser | ForEach-Object {$_.DisplayName; Test-CsVoiceUser -DialedNumber "+14255559999" -SipUri $_.SipAddress} | Format-List

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example does a voice routing test for all users enabled for Skype for Business Server 2015.
The command starts with a call to the Get-CsUser cmdlet, which returns a collection of all users enabled for Skype for Business Server 2015.
This example then pipes the collection of users to the ForEach-Object cmdlet.
This cmdlet will look at each individual user object and perform the actions we've specified within curly braces ({}).

The first action is to output the display name of the current user.
(The current user is represented by the $_ characters; thus the display name is in the DisplayName property of $_.) We now can see which user account we're testing.
Next we call the Test-CsVoiceUser cmdlet, passing it the DialedNumber ("+14255559999") and the SipUri of the current user.
In this example we're using the user's SIP address ($_.SipAddress).

Finally, because the output by default is in table format and can get cut off to fit the screen width, we pipe the test results to the Format-List cmdlet so we'll see each user's display name followed by one line for each output field.

Get-CsUser | ForEach-Object {$_.DisplayName; Test-CsVoiceUser -DialedNumber "+14255559999" -SipUri $_.SipAddress} | Format-List

## PARAMETERS

### -DialedNumber
The phone number to test.

Full data type: Microsoft.Rtc.Management.Voice.PhoneNumber

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

### -SipUri
**Below Content Applies To:** Lync Server 2010

The SIP URI of the user against which the test is taking place.
This is the Identity of the user as used in the CsUser cmdlets.
You can specify a user's identity using one of four formats: 1) The user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
Note that the SAMAccountName cannot be used as an identity.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

The SIP URI of the user against which the test is taking place.
This is the Identity of the user as used in the CsUser cmdlets.
You can specify a user's identity using one of four formats: 1) The user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
Note that the SamAccountName cannot be used as an identity.



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010

{{Fill Force Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
None.

## OUTPUTS

###  
Returns an object of type Microsoft.Rtc.Management.Voice.OcsVoiceUserTestResult.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f29c3b43-d315-4964-ab5c-9fb14612db34(OCS.14).aspx)

[Get-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/f29c3b43-d315-4964-ab5c-9fb14612db34(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f29c3b43-d315-4964-ab5c-9fb14612db34(OCS.16).aspx)

