---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsUcwaConference
schema: 2.0.0
---

# Test-CsUcwaConference

## SYNOPSIS
Tests the ability of a pair of users to schedule, join, and then conduct an online conference using the Unified Communications Web API (UCWA).
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ClientPlatform
```
Test-CsUcwaConference [[-TargetFqdn] <String>] -OrganizerCredential <PSCredential>
 -ParticipantCredential <PSCredential> [-Authentication <AuthenticationMechanism>] [-Force]
 -OrganizerSipAddress <String> [-OutLoggerVariable <String>] [-OutVerboseVariable <String>]
 -ParticipantSipAddress <String> [-RegistrarPort <Int32>] [<CommonParameters>]
```

### ServerPlatform
```
Test-CsUcwaConference [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OrganizerSipAddress <String>] [-OutLoggerVariable <String>] [-OutVerboseVariable <String>]
 [-ParticipantSipAddress <String>] [-RegistrarPort <Int32>] [<CommonParameters>]
```

### TargetUri
```
Test-CsUcwaConference [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-ParticipantSipAddress <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsUcwaConference` cmdlet verifies that a pair of test users can schedule, join, and then conduct an online conference using the Unified Communications Web API (UCWA).
To do this, the cmdlet uses the Skype for Business Server web ticket service to authenticate the two test users and register them with Skype for Business Server.
The cmdlet then starts a conference using the organizer credentials and invites the participant to join the meeting.
After the meeting has been joined, the `Test-CsUcwaConference` cmdlet verifies that the users can do such things as exchange instant message and conduct pools, then terminates the conference and unregisters the two test users.
The scheduled conference will also be deleted when the test is finished.

The `Test-CsUcwaConference` cmdlet can also be used to determine whether or not anonymous users can join online conferences.

Note that the `Test-CsUcwaConference` cmdlet should not be run against a Skype for Business Server pool unless UCWA has been installed on that pool.
If UCWA has not been installed then the call to the `Test-CsUcwaConference` cmdlet will fail.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsUcwaConference` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsUcwaConference -TargetFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 verifies that a pair of test users can participate in an UCWA conference on the pool atl-cs-001.litwareinc.com.
Note that this command will fail if you have not predefined a pair of health monitoring configuration test users for atl-cs-001.litwareinc.com.


### -------------------------- Example 2 --------------------------
```
$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsUcwaConference -TargetFqdn atl-cs-001.litwareinc.com -OrganizerSipAddress "sip:pilar@litwareinc.com" -OrganizerCredential $cred1 -ParticipantSipAddress "sip:kenmyer@litwareinc.com" -ParticipantCredential $cred2
```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to participate in an UCWA conference.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell command-line interface credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name, litwareinc\pilar, has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credentials object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can participate in an UCWA conference.
To carry out this task, the `Test-CsUcwaConference` cmdlet is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); OrganizerSipAddress (the SIP address for the meeting organizer); OrganizerCredential (the Windows PowerShell object containing the credentials for this same user); ParticipantSipAddress (the SIP address for the other test user); and ParticipantCredential (the Windows PowerShell command-line interface object containing the credentials for the other user).


## PARAMETERS

### -OrganizerCredential
User credential object for user account acting as the meeting organizer.
The value passed to OrganizerCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

The organizer credential is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: pc
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParticipantCredential
User credential object for the user account acting as the meeting participant.
The value passed to ParticipantCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $y:

`$y = Get-Credential "litwareinc\pilar"`

You need to supply the user password when running this command.

The participant credential is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: sc
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Parameter Sets: ClientPlatform
Aliases: t
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: t
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
Type of authentication used when running the test.
Allowed values are:

TrustedServer

Negotiate

ClientCertificate

LiveID


```yaml
Type: AuthenticationMechanism
Parameter Sets: (All)
Aliases: Ath
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizerSipAddress
SIP address for the meeting organizer.
For example: `-OrganizerSipAddress "sip:pilar@litwareinc.com"`.
The OrganizerSIPAddress parameter must reference the same user account as OrganizerCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: pa
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: pa
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

`-OutLoggerVariable TestOutput`

Note: Do not prepend a $ character when specifying the variable name.

To save the information stored in the logger variable to an HTML file, use a command similar to this:

`$TestOutput.ToHTML() \> C:\Logs\TestOutput.html`

To save the information stored in the logger variable to an XML file, use a command similar to this:

`$TestOutput.ToXML() \> C:\Logs\TestOutput.xml`

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

`-OutVerboseVariable TestOutput`

Do not prepend a $ character when specifying the variable name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParticipantSipAddress
SIP address for the meeting participant.
For example: `-ParticipantSipAddress "sip:kenmyer@litwareinc.com"`.
The ParticipantSipAddress parameter must reference the same user account as ParticipantCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.


```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: sa
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ServerPlatform, TargetUri
Aliases: sa
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Parameter Sets: ClientPlatform, ServerPlatform
Aliases: rp
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Test-CsUcwaConference` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsUcwaConference` cmdlet returns instances of the Microsoft.Rtc.SyntheticTransactions.WebTaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsASConference](Test-CsASConference.md)

[Test-CsDataConference](Test-CsDataConference.md)

[Test-CsAVConference](Test-CsAVConference.md)

