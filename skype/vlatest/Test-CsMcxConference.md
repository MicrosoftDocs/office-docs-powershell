---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsMcxConference

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Tests the ability of three users to participate in a Microsoft Lync Server 2013 Preview Mobility Service conference.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider; and take advantage of Lync Server capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

**Below Content Applies To:** Skype for Business Server 2015

Tests the ability of three users to participate in a Skype for Business Server 2015 Mobility Service conference.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider; and take advantage of Skype for Business Server 2015 capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
Test-CsMcxConference [-TargetFqdn] <String> -Authentication <AuthenticationMechanism>
 -OrganizerCredential <PSCredential> -OrganizerSipAddress <String> -User2Credential <PSCredential>
 -User2SipAddress <String> -UserCredential <PSCredential> -UserSipAddress <String> [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-RegistrarPort <Int32>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Mobility Service extends many of the capabilities of Lync Server to mobile devices such as Apple iPhones, Windows Phone, Android phones, and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information, and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service, users who have iPhones or Windows Phones can receive these notifications even if Lync is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and make it appear as though the call originated from their work phone; for example, Caller ID systems will see the user's work number instead of his or her mobile phone number.

The Test-CsMcxConference cmdlet is used to determine whether or not a set of three users are able to participate in a conference by using the Mobility Service.
Note that running this cmdlet does not require the use of mobile phones nor does it actually create a real conference.
Instead, the cmdlet verifies that the three users are able to log on to Lync Server and that the Mobility Service is able to make the connections required to conduct and conference.
The cmdlet also verifies that the conference organizer is able to send an instant message to the other two conference participants.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Test-CsMcxConference cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsMcxConference"}

**Below Content Applies To:** Skype for Business Server 2015

The Mobility Service extends many of the capabilities of Skype for Business Server 2015 to mobile devices such as Apple iPhones, Windows Phone, Android phones, and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information, and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service, users who have iPhones or Windows Phones can receive these notifications even if Skype for Business is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and make it appear as though the call originated from their work phone; for example, Caller ID systems will see the user's work number instead of his or her mobile phone number.

The Test-CsMcxConference cmdlet is used to determine whether or not a set of three users are able to participate in a conference by using the Mobility Service.
Note that running this cmdlet does not require the use of mobile phones nor does it actually create a real conference.
Instead, the cmdlet verifies that the three users are able to log on to Skype for Business Server 2015 and that the Mobility Service is able to make the connections required to conduct and conference.
The cmdlet also verifies that the conference organizer is able to send an instant message to the other two conference participants.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 verify whether a Mobility Service conference can be conducted using three user accounts: Ken Myer (the meeting organizer), Pilar Ackerman, and Aidan Delaney.
In order to run this test, the first thing that must be done is to create credentials objects for each user account.
Those objects are created in the first three lines of code, and stored in the variables $organizerCred (Ken Myer), $user1Cred (Pilar Ackerman), and $user2Cred (Aidan Delaney).

After the credentials objects have been created, you can then call the Test-CsMcxConference cmdlet, making sure to specify the target Registrar pool (atl-cs-001.litwareinc,com), the authentication type (Negotiate), and the SIP addresses and credentials of the three user accounts acting as conference participants.

$organizerCred = Get-Credential "litwareinc\kenmyer"

$user1Cred = Get-Credential "litwareinc\packerman"

$user2Cred = Get-Credential "litwareinc\adelaney"

Test-CsMcxConference -TargetFqdn "atl-cs-001.litwareinc.com" -Authentication Negotiate -OrganizerSipAddress "sip:kenmyer@litwareinc.com" -OrganizerCredential $organizerCred -UserSipAddress "sip:pilar@litwareinc.com" -UserCredential $user1Cred -User2SipAddress "sip:adelaney@litwareinc.com" -User2Credential $user2Cred

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 verify whether a Mobility Service conference can be conducted using three user accounts: Ken Myer (the meeting organizer), Pilar Ackerman, and Aidan Delaney.
In order to run this test, the first thing that must be done is to create credentials objects for each user account.
Those objects are created in the first three lines of code, and stored in the variables $organizerCred (Ken Myer), $user1Cred (Pilar Ackerman), and $user2Cred (Aidan Delaney).

After the credentials objects have been created, you can then call the Test-CsMcxConference cmdlet, making sure to specify the target Registrar pool (atl-cs-001.litwareinc,com), the authentication type (Negotiate), and the SIP addresses and credentials of the three user accounts acting as conference participants.

$organizerCred = Get-Credential "litwareinc\kenmyer"

$user1Cred = Get-Credential "litwareinc\packerman"

$user2Cred = Get-Credential "litwareinc\adelaney"

Test-CsMcxConference -TargetFqdn "atl-cs-001.litwareinc.com" -Authentication Negotiate -OrganizerSipAddress "sip:kenmyer@litwareinc.com" -OrganizerCredential $organizerCred -UserSipAddress "sip:pilar@litwareinc.com" -UserCredential $user1Cred -User2SipAddress "sip:adelaney@litwareinc.com" -User2Credential $user2Cred

## PARAMETERS

### -Authentication
Allowed values are: TrustedServer; Negotiate; ClientCertificate; and LiveID.

```yaml
Type: AuthenticationMechanism
Parameter Sets: (All)
Aliases: Ath
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizerCredential
User credential object for the user account acting as the meeting organizer.
The value passed to OrganizerCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\adelaney and stores that object in a variable named $z:

$z = Get-Credential "litwareinc\adelaney"

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: oc
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizerSipAddress
SIP address for the user account acting as the meeting organizer.
For example:

-OrganizerSipAddress "sip:adelaney@litwareinc.com"

The OrganizerSipAddress parameter must reference the same user account as the OrganizerCredential parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: oa
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.

```yaml
Type: String
Parameter Sets: (All)
Aliases: t
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User2Credential
User credential object for the second of the two user accounts to be tested.
The value passed to Use2rCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $y:

$y = Get-Credential "litwareinc\kenmyer"

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: spc
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User2SipAddress
SIP address for the second of the two user accounts to be tested.
For example:

-User2SipAddress "sip:pilar@litwareinc.com"

The User2SipAddress parameter must reference the same user account as the User2Credential parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: spa
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCredential
User credentials object for the first of the two user accounts to be tested.
The value passed to UserCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $x:

$x = Get-Credential "litwareinc\pilar"

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: fpc
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address for the first of the two user accounts to be tested.
For example:

-UserSipAddress "sip:kenmyer@litwareinc.com"

The UserSipAddress parameter must reference the same user account as the UserCredential parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: fpa
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutLoggerVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

-OutLoggerVariable TestOutput

Note: Do not use prepend a $ character when specifying the variable name.

To save the information stored in the logger variable to an HTML file, use a command similar to this:

$TestOutput.ToHTML() \> C:\Logs\TestOutput.html

To save the information stored in the logger variable to an XML file, use a command similar to this:

$TestOutput.ToXML() \> C:\Logs\TestOutput.xml

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax

-OutVerboseVariable TestOutput

Do not use prepend a $ character when specifying the variable name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPort
SIP port used by the Registrar service.
This parameter is not required if the Registrar uses the default port 5061.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: rp
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Test-CsMcxConference does not accept pipelined input.

###  
None.
The Test-CsMcxConference cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsMcxConference returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsMcxConference cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c6ca9019-1535-489d-a42e-1a50070b2f67(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c6ca9019-1535-489d-a42e-1a50070b2f67(OCS.16).aspx)

