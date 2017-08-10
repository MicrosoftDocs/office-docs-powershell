---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsASConference

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Tests the ability of a pair of users to take part in an application sharing conference.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Tests the ability of a pair of users to take part in an application sharing conference.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### ClientPlatform
```
Test-CsASConference [[-TargetFqdn] <String>] -ReceiverCredential <PSCredential>
 -SenderCredential <PSCredential> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] -ReceiverSipAddress <String>
 [-RegistrarPort <Int32>] -SenderSipAddress <String> [-TestJoinLauncher] [<CommonParameters>]
```

### ServerPlatform
```
Test-CsASConference [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-ReceiverSipAddress <String>]
 [-RegistrarPort <Int32>] [-SenderSipAddress <String>] [-TestJoinLauncher] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Test-CsASConference cmdlet verifies that a pair of test users can participate in an online conference that includes application sharing.
To do this, the cmdlet registers the two users with Microsoft Lync Server 2013 Preview, and then it uses one of the user accounts to create a new conference that includes applications sharing.
The cmdlet then verifies that the second user is able to join that conference.

Note that this command will fail if the test users have been assigned a conferencing policy that prevents them from using application sharing.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsASConference"}

Lync Server Control Panel: The functions carried out by the Test-CsASConference cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Test-CsASConference cmdlet verifies that a pair of test users can participate in an online conference that includes application sharing.
To do this, the cmdlet registers the two users with Skype for Business Server 2015, and then it uses one of the user accounts to create a new conference that includes applications sharing.
The cmdlet then verifies that the second user is able to join that conference.

Note that this command will fail if the test users have been assigned a conferencing policy that prevents them from using application sharing.

Skype for Business Server 2015: The functions carried out by the Test-CsASConference cmdlet are not available in the Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 verifies that an Application Sharing conference can be conducted on the pool atl-cs-001.litwareinc.com.
This command assumes that you have configured a pair of test users for the specified pool.
If no such test users exist, the command will fail.

Test-CsASConference -TargetFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 verifies that an Application Sharing conference can be conducted on the pool atl-cs-001.litwareinc.com.
This command assumes that you have configured a pair of test users for the specified pool.
If no such test users exist, the command will fail.

Test-CsASConference -TargetFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 tests the ability of the Join Launcher service to participate in an Application Sharing conference on the pool atl-cs-001.litwareinc.com.
Note that this command tests only the service itself; you do not need any mobile devices in order to run the command.

Test-CsASConference -TargetFqdn "atl-cs-001.litwareinc.com" -TestJoinLauncher

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 tests the ability of the Join Launcher service to participate in an Application Sharing conference on the pool atl-cs-001.litwareinc.com.
Note that this command tests only the service itself; you do not need any mobile devices in order to run the command.

Test-CsASConference -TargetFqdn "atl-cs-001.litwareinc.com" -TestJoinLauncher

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Lync Server 2013 Preview and then conduct an Application Sharing conference.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name, litwareinc\pilar, has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credential object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the credential objects in hand, the third command determines whether or not these two users can log on to Lync Server 2013 Preview and conduct an Application Sharing conference.
To carry out this task, Test-CsASConference is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SenderSipAddress (the SIP address for the first test user); SenderCredential (the Windows PowerShell object containing the credentials for this same user); ReceiverSipAddress (the SIP address for the other test user); and ReceiverCredential (the Windows PowerShell object containing the credentials for the other test user).

$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsASConference -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:pilar@litwareinc.com" -SenderCredential $cred1 -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -ReceiverCredential $cred2

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Skype for Business Server 2015 and then conduct an Application Sharing conference.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell command-line interface credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name, litwareinc\pilar, has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credential object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the credential objects in hand, the third command determines whether or not these two users can log on to Skype for Business Server 2015 and conduct an Application Sharing conference.
To carry out this task, the Test-CsASConference cmdlet is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SenderSipAddress (the SIP address for the first test user); SenderCredential (the Windows PowerShell object containing the credentials for this same user); ReceiverSipAddress (the SIP address for the other test user); and ReceiverCredential (the Windows PowerShell object containing the credentials for the other test user).

$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsASConference -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:pilar@litwareinc.com" -SenderCredential $cred1 -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -ReceiverCredential $cred2

## PARAMETERS

### -ReceiverCredential
User credential object for the first of the two user accounts to be tested.
The value passed to ReceiverCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $y:

$y = Get-Credential "litwareinc\pilar"

You need to supply the user password when running this command.

The receiver credential is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: rc
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderCredential
User credential object for the second of the two user accounts to be tested.
The value passed to SenderCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

$x = Get-Credential "litwareinc\kenmyer"

You need to supply the user password when running this command.

The sender credential is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: sc
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
Parameter Sets: ClientPlatform
Aliases: t
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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

Note: Do not prepend a $ character when specifying the variable name.

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
For example, to store output in a variable named $TestOutput use the following syntax:

-OutVerboseVariable TestOutput

Do not prepend a $ character when specifying the variable name.

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

### -ReceiverSipAddress
SIP address for the first of the two user accounts to be tested.
For example: -ReceiverSipAddress "sip:pilar@litwareinc.com".
The ReceiverSIPAddress parameter must reference the same user account as ReceiverCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: ra
Applicable: Lync Server 2013, Skype for Business Server 2015

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

### -SenderSipAddress
SIP address for the second of the two user accounts to be tested.
For example: -SenderSipAddress "sip:kenmyer@litwareinc.com".
The SenderSipAddress parameter must reference the same user account as SenderCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: sa
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Test-CsASConference does not accept pipelined input.

###  
None.
The Test-CsASConference cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsASConference returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsASConference cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsConferencingPolicy]()

[Test-CsDataConference]()

[Online Version](http://technet.microsoft.com/EN-US/library/bf926005-1146-484c-90fa-246a9c082774(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/bf926005-1146-484c-90fa-246a9c082774(OCS.16).aspx)

