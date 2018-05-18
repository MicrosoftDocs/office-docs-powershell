---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsDataConference
schema: 2.0.0
---

# Test-CsDataConference

## SYNOPSIS
Verifies whether or not a pair of users can participate in a Skype for Business Server web conference that includes activities such as sharing or viewing PowerPoint slides, whiteboards, or polls.
The cmdlet also verifies that the Skype for Business Server web conferencing service can discover Office Web Apps Server and that a client can upload a PowerPoint file for broadcast by Office Web Apps Server.


## SYNTAX

### ClientPlatform
```
Test-CsDataConference [[-TargetFqdn] <String>] -ReceiverCredential <PSCredential>
 -SenderCredential <PSCredential> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] -ReceiverSipAddress <String>
 [-RegistrarPort <Int32>] -SenderSipAddress <String> [-TestJoinLauncher] [-IPVersion <String>]
 [<CommonParameters>]
```

### ServerPlatform
```
Test-CsDataConference [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-ReceiverSipAddress <String>]
 [-RegistrarPort <Int32>] [-SenderSipAddress <String>] [-TestJoinLauncher] [-IPVersion <String>]
 [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, a data conference is any conference where collaborative activities such as whiteboarding or annotations are used.
The `Test-CsDataConference` cmdlet enables you to verify that a pair of users are able to take part in a data conference.

The ability to conduct a data conference depends on the conferencing policy that has been assigned to the user who organized the conference (in the case of the `Test-CsDataConference` cmdlet, that is the "sender").
If the organizer is not allowed to include collaborative activities in his or her meeting (for example, if his or her conferencing policy has the EnableDataCollaboration property set to False) then the `Test-CsDataConference` cmdlet will fail.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsDataConference` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsDataConference -TargetFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 verifies that a data conference can be conducted on the pool atl-cs-001.litwareinc.com.
This command assumes that you have configured a pair of test users for the specified pool.
If no such test users exist, the command will fail.


### -------------------------- Example 2 --------------------------
```
$credential1 = Get-Credential "litwareinc\pilar"

$credential2 = Get-Credential "litwareinc\kenmyer"

Test-CsDataConference -TargetFqdn "atl-cs-001.litwareinc.com" -SenderSipAddress "sip:pilar@litwareinc.com" -SenderCredential $credential1 -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -ReceiverCredential $credential2
```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Skype for Business Server and then conduct an data conference.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell command-line interface credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name, litwareinc\pilar, has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credential object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the credential objects in hand, the third command determines whether or not these two users can log on to Skype for Business Server and conduct a data conference.
To carry out this task, the `Test-CsDataConference` cmdlet is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SenderSipAddress (the SIP address for the first test user); SenderCredential (the Windows PowerShell object containing the credentials for this same user); ReceiverSipAddress (the SIP address for the other test user); and ReceiverCredential (the Windows PowerShell object containing the credentials for the other test user).


## PARAMETERS

### -ReceiverCredential
User credential object for the first of the two user accounts to be tested.
The value passed to ReceiverCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $y:

`$y = Get-Credential "litwareinc\pilar"`

You need to supply the user password when running this command.

The receiver credential is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: rc
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderCredential
User credential object for the second of the two user accounts to be tested.
The value passed to SenderCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

The sender credential is not required if you are running the test under the health monitoring configuration settings for the pool.

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
Fully qualified domain name (FQDN) of the Persistent Chat pool to be tested.

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

* TrustedServer
* Negotiate
* ClientCertificate
* LiveID

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
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -ReceiverSipAddress
SIP address for the first of the two user accounts to be tested.
For example:

`-ReceiverSipAddress "sip:pilar@litwareinc.com"`

The ReceiverSIPAddress parameter must reference the same user account as ReceiverCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: ra
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
Aliases: ra
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
Parameter Sets: (All)
Aliases: rp
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderSipAddress
SIP address for the second of the two user accounts to be tested.
For example:

`-SenderSipAddress "sip:kenmyer@litwareinc.com"`

The SenderSipAddress parameter must reference the same user account as SenderCredential.

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
Parameter Sets: ServerPlatform
Aliases: sa
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestJoinLauncher
When present, tests the ability of the Join Launcher to participate in a conference.
The Join Launcher is used to help users of mobile devices (and, as a result, users of the Mobility Service) take part in conferences.

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

### -IPVersion
IP addressing type used to connect to the test conference.
Allowed values are:

IPv4

IPv6

Both

Auto

```yaml
Type: String
Parameter Sets: (All)
Aliases: ipv
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `Test-CsDataConference` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsDataConference` cmdlet returns instances of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsASConference](Test-CsASConference.md)

