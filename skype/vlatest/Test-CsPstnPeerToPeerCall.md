---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsPstnPeerToPeerCall

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Tests the ability a pair of users to conduct a peer-to-peer call over the public switched telephone network (PSTN) gateway.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Tests the ability a pair of users to conduct a peer-to-peer call over the public switched telephone network (PSTN) gateway.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ServerPlatform
```
Test-CsPstnPeerToPeerCall [-TargetFqdn] <String> [-ReceiverSipAddress <String>] [-RegistrarPort <Int32>]
 [-SenderSipAddress <String>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsPstnPeerToPeerCall [[-TargetFqdn] <String>] -ReceiverCredential <PSCredential>
 -ReceiverSipAddress <String> [-RegistrarPort <Int32>] -SenderCredential <PSCredential>
 -SenderSipAddress <String> [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Test-CsPstnPeerToPeerCall is an example of a Microsoft Lync Server 2010 "synthetic transaction." Synthetic transactions are used in Lync Server 2010 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts you will need to supply the logon names and passwords for each user.

Test-CsPstnPeerToPeerCall can also be used in server platform mode.
In that case you only need to specify the SIP address of the users and Lync Server 2010 will use certificates to authenticate those users.

When you call Test-CsPstnPeerToPeerCall the cmdlet will first attempt to log the two test users on to Lync Server.
Assuming that the logons succeed, the cmdlet will then have user 1 attempt to call user 2 over the PSTN gateway; Test-CsPstnPeerToPeerCall will make this call using the dial plan, voice policy, and other policy and configurations settings assigned to the test user.
If the test goes as planned, the cmdlet will verify that user 2 was able to answer the call, and then log both test accounts off of the system.

Test-CsPstnPeerToPeerCall makes an actual phone call, one that verifies that a connection can be made and that also transmits dual-tone multifrequency (DTMF) codes across the network to determine whether media can be sent over the connection. 
However, the call is answered by the cmdlet itself, and no manual termination of the call is necessary.
(That is, no one needs to answer and then hang up the phone that was called.)

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsPstnPeerToPeerCall"}

Below Content Applies To: Lync Server 2013

Test-CsPstnPeerToPeerCall is an example of a Lync Server "synthetic transaction." Synthetic transactions are used in Lync Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts you will need to supply the logon names and passwords for each user.

Test-CsPstnPeerToPeerCall can also be used in server platform mode.
In that case you only need to specify the SIP address of the users and Lync Server will use certificates to authenticate those users.

When you call Test-CsPstnPeerToPeerCall the cmdlet will first attempt to log the two test users on to Lync Server.
Assuming that the logons succeed, the cmdlet will then have user 1 attempt to call user 2 over the PSTN gateway; Test-CsPstnPeerToPeerCall will make this call using the dial plan, voice policy, and other policy and configurations settings assigned to the test user.
If the test goes as planned, the cmdlet will verify that user 2 was able to answer the call, and then log both test accounts off of the system.

Test-CsPstnPeerToPeerCall makes an actual phone call, one that verifies that a connection can be made and that also transmits dual-tone multifrequency (DTMF) codes across the network to determine whether media can be sent over the connection.
However, the call is answered by the cmdlet itself, and no manual termination of the call is necessary.
(That is, no one needs to answer and then hang up the phone that was called.)

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsPstnPeerToPeerCall"}

Below Content Applies To: Skype for Business Server 2015

The Test-CsPstnPeerToPeerCall cmdlet is an example of a Skype for Business Server 2015 "synthetic transaction." Synthetic transactions are used in Skype for Business Server 2015 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts you will need to supply the logon names and passwords for each user.

The Test-CsPstnPeerToPeerCall cmdlet can also be used in server platform mode.
In that case you only need to specify the SIP address of the users and Skype for Business Server 2015 will use certificates to authenticate those users.

When you call Test-CsPstnPeerToPeerCall the cmdlet will first attempt to log the two test users on to Skype for Business Server 2015.
Assuming that the logons succeed, the cmdlet will then have user 1 attempt to call user 2 over the PSTN gateway; the Test-CsPstnPeerToPeerCall cmdlet will make this call using the dial plan, voice policy, and other policy and configurations settings assigned to the test user.
If the test goes as planned, the cmdlet will verify that user 2 was able to answer the call, and then log both test accounts off of the system.

The Test-CsPstnPeerToPeerCall cmdlet makes an actual phone call, one that verifies that a connection can be made and that also transmits dual-tone multifrequency (DTMF) codes across the network to determine whether media can be sent over the connection.
However, the call is answered by the cmdlet itself, and no manual termination of the call is necessary.
(That is, no one needs to answer and then hang up the phone that was called.)



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com
```

The preceding example checks to see if a pair of preconfigured test users can log on to the pool atl-cs-001.litwareinc.com; after the test users are logged on, Test-CsPstnPeerToPeerCall then checks to see if the two users can conduct a peer-to-peer call over the PSTN gateway.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system, then check to see if this user can call the second user defined for the pool.

If a test users have not been defined, then the command will fail because it will not know which users to employ when doing the test.
If you have not defined test users for a pool, and if you are not running in server platform mode, then you must include the SenderSipAddress and ReceiverSipAddress parameters and the corresponding credentials for the users serving as the test accounts.
Test-CsPstnPeerToPeerCall will then conduct its checks using the two specified users.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 checks to see if a pair of preconfigured test users can log on to the pool atl-cs-001.litwareinc.com; after the test users are logged on, Test-CsPstnPeerToPeerCall then checks to see if the two users can conduct a peer-to-peer call over the PSTN gateway.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system, then check to see if this user can call the second user defined for the pool.

If test users have not been defined, then the command will fail because it will not know which users to employ when doing the test.
If you have not defined test users for a pool, and if you are not running in server platform mode, then you must include the SenderSipAddress and ReceiverSipAddress parameters and the corresponding credentials for the users serving as the test accounts.
Test-CsPstnPeerToPeerCall will then conduct its checks using the two specified users.

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 checks to see if a pair of preconfigured test users can log on to the pool atl-cs-001.litwareinc.com; after the test users are logged on, the Test-CsPstnPeerToPeerCall cmdlet then checks to see if the two users can conduct a peer-to-peer call over the PSTN gateway.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system, then check to see if this user can call the second user defined for the pool.

If test users have not been defined, then the command will fail because it will not know which users to employ when doing the test.
If you have not defined test users for a pool, and if you are not running in server platform mode, then you must include the SenderSipAddress and ReceiverSipAddress parameters and the corresponding credentials for the users serving as the test accounts.
The Test-CsPstnPeerToPeerCall cmdlet will then conduct its checks using the two specified users.

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$cred1 = Get-Credential "litwareinc\pilar"
$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:jhaas@litwareinc.com" -SenderCredential $cred1 -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -ReceiverCredential $cred2
```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Lync Server, and then conduct a peer-to-peer call over the PSTN gateway.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credential object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can log on to Lync Server, and then conduct a peer-to-peer call over the PSTN gateway.
To carry out this task, Test-CsPstnPeerToPeerCall is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SenderSipAddress (the SIP address for the first test user); SenderCredential (the Windows PowerShell object containing the credentials for this same user); ReceiverSipAddress (the SIP address for the other test user); and ReceiverCredential (the Windows PowerShell object containing the credentials for the other user).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Lync Server, and then conduct a peer-to-peer call over the PSTN gateway.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credentials object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can log on to Lync Server, and then conduct a peer-to-peer call over the PSTN gateway.
To carry out this task, Test-CsPstnPeerToPeerCall is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SenderSipAddress (the SIP address for the first test user); SenderCredential (the Windows PowerShell object containing the credentials for this same user); ReceiverSipAddress (the SIP address for the other test user); and ReceiverCredential (the Windows PowerShell object containing the credentials for the other user).

$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:jhaas@litwareinc.com" -SenderCredential $cred1 -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -ReceiverCredential $cred2

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Skype for Business Server 2015, and then conduct a peer-to-peer call over the PSTN gateway.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credentials object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can log on to Skype for Business Server 2015, and then conduct a peer-to-peer call over the PSTN gateway.
To carry out this task, the Test-CsPstnPeerToPeerCall cmdlet is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SenderSipAddress (the SIP address for the first test user); SenderCredential (the Windows PowerShell object containing the credentials for this same user); ReceiverSipAddress (the SIP address for the other test user); and ReceiverCredential (the Windows PowerShell object containing the credentials for the other user).

$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:jhaas@litwareinc.com" -SenderCredential $cred1 -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -ReceiverCredential $cred2

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:jhaas@litwareinc.com" -ReceiverSipAddress "sip:kenmyer@litwareinc.com"
```

Example 3 shows how Test-CsPstnPeerToPeerCall can be used in server platform mode.
In this mode, the test users' SIP addresses are specified, but the user credentials are not included.
When run like this, Lync Server 2010 uses certificates to authenticate the two test users.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how Test-CsPstnPeerToPeerCall can be used in server platform mode.
In this mode, the test users' SIP addresses are specified, but the user credentials are not included.
When run like this, Lync Server uses certificates to authenticate the two test users.

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:jhaas@litwareinc.com" -ReceiverSipAddress "sip:kenmyer@litwareinc.com"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how the Test-CsPstnPeerToPeerCall cmdlet can be used in server platform mode.
In this mode, the test users' SIP addresses are specified, but the user credentials are not included.
When run like this, Skype for Business Server 2015 uses certificates to authenticate the two test users.

Test-CsPstnPeerToPeerCall -TargetFqdn atl-cs-001.litwareinc.com -SenderSipAddress "sip:jhaas@litwareinc.com" -ReceiverSipAddress "sip:kenmyer@litwareinc.com"

## PARAMETERS

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiverCredential
User credential object for the first of the two user accounts to be tested.
The value passed to ReceiverCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $y:

$y = Get-Credential "litwareinc\pilar"

You need to supply the user password when running this command.

The receiver credential is not required if you are running the test under the health monitoring configuration settings for the pool, or if you are running in server platform mode.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: rc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiverSipAddress
Below Content Applies To: Lync Server 2010

SIP address for the first of the two user accounts to be tested.
For example: -ReceiverSipAddress "sip:pilar@litwareinc.com".
The ReceiverSIPAddress parameter must reference the same user account as ReceiverCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



Below Content Applies To: Lync Server 2013

SIP address for the first of the two user accounts to be tested.
For example: -ReceiverSipAddress "sip:pilar@litwareinc.com".
The ReceiverSipAddress parameter must reference the same user account as ReceiverCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



Below Content Applies To: Skype for Business Server 2015

SIP address for the first of the two user accounts to be tested.
For example:

-ReceiverSipAddress "sip:pilar@litwareinc.com"

The ReceiverSipAddress parameter must reference the same user account as ReceiverCredential

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ra
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: ra
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
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

The sender credential is not required if you are running the test under the health monitoring configuration settings for the pool, or if you are running in server platform mode.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: sc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderSipAddress
Below Content Applies To: Lync Server 2010

SIP address for the second of the two user accounts to be tested.
For example: -SenderSipAddress "sip:kenmyer@litwareinc.com".
The SenderSIPAddress parameter must reference the same user account as SenderCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



Below Content Applies To: Lync Server 2013

SIP address for the second of the two user accounts to be tested.
For example: -SenderSipAddress "sip:kenmyer@litwareinc.com".
The SenderSipAddress parameter must reference the same user account as SenderCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



Below Content Applies To: Skype for Business Server 2015

SIP address for the second of the two user accounts to be tested.
For example:

-SenderSipAddress "sip:kenmyer@litwareinc.com"

The SenderSipAddress parameter must reference the same user account as SenderCredential

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: sa
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: sa
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
Below Content Applies To: Lync Server 2010

{{Fill OutVerboseVariable Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

-OutVerboseVariable TestOutput

Do not prepend a $ character when specifying the variable name.



```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
Below Content Applies To: Lync Server 2013

Type of authentication used in the test.
Allowed values are:

* TrustedServer
* Negotiate
* ClientCertificate
* LiveID



Below Content Applies To: Skype for Business Server 2015

Type of authentication used in the test.
Allowed values are:

TrustedServer

Negotiate

ClientCertificate

LiveID



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

### -OutLoggerVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

-OutLoggerVariable TestOutput

Note: Do not use prepend a $ character when specifying the variable name.To save the information stored in the logger variable to an HTML file, use a command similar to this:

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Test-CsPstnPeerToPeerCall does not accept pipelined input.

###  
None.
The Test-CsPstnPeerToPeerCall cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsPstnPeerToPeerCall returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsPstnPeerToPeerCall cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/839cf83f-b667-4cbe-b1ab-28f54a8a9d0b(OCS.14).aspx)

[Test-CsPstnOutboundCall]()

[Online Version](http://technet.microsoft.com/EN-US/library/839cf83f-b667-4cbe-b1ab-28f54a8a9d0b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/839cf83f-b667-4cbe-b1ab-28f54a8a9d0b(OCS.16).aspx)

