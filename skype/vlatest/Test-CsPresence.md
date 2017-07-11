---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsPresence

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Tests the ability of a user to log on to Microsoft Lync Server 2010, publish his or her presence information, and then subscribe to the presence information published by a second user.

**Below Content Applies To:** Lync Server 2013

Tests the ability of a user to log on to Lync Server, publish his or her presence information, and then subscribe to the presence information published by a second user.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Tests the ability of a user to log on to Skype for Business Server 2015, publish his or her presence information, and then subscribe to the presence information published by a second user.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ServerPlatform
```
Test-CsPresence [-TargetFqdn] <String> [-PublisherSipAddress <String>] [-SubscriberSipAddress <String>]
 [-RegistrarPort <Int32>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-TimeoutInSeconds <UInt32>]
 [<CommonParameters>]
```

### ClientPlatform
```
Test-CsPresence [[-TargetFqdn] <String>] -PublisherCredential <PSCredential> -PublisherSipAddress <String>
 -SubscriberCredential <PSCredential> -SubscriberSipAddress <String> [-RegistrarPort <Int32>] [-Force]
 [-Verbose] [-OutVerboseVariable <String>] [-Authentication <AuthenticationMechanism>]
 [-OutLoggerVariable <String>] [-TimeoutInSeconds <UInt32>] [<CommonParameters>]
```

### TargetUri
```
Test-CsPresence [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-SubscriberSipAddress <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Test-CsPresence is an example of a Lync Server 2010 synthetic transaction.
Synthetic transactions are used in Lync Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up a test users for each of their Registrar pools.
Typically, these are test accounts and not accounts belonging to actual users.
With these user accounts configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts, you will need to supply the logon names and passwords for each user.

Test-CsPresence is used to determine whether a pair of test users can log on to Lync Server and then exchange presence information.
To do this, the cmdlet first logs the two users on to the system.
If both logons succeed, the first test user then asks to receive presence information from the second user.
The second user publishes this information, and Test-CsPresence verifies that the information was successfully transmitted to the first user.
After the exchange of presence information, the two test users are then logged off from Lync Server.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsPresence"}

**Below Content Applies To:** Lync Server 2013

Test-CsPresence is an example of a Lync Server synthetic transaction.
Synthetic transactions are used in Lync Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
Typically, these are test accounts and not accounts belonging to actual users.
With these user accounts configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts, you will need to supply the logon names and passwords for each user.

Test-CsPresence is used to determine whether a pair of test users can log on to Lync Server and then exchange presence information.
To do this, the cmdlet first logs the two users on to the system.
If both logons succeed, the first test user then asks to receive presence information from the second user.
The second user publishes this information, and Test-CsPresence verifies that the information was successfully transmitted to the first user.
After the exchange of presence information, the two test users are then logged off from Lync Server.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsPresence"}

**Below Content Applies To:** Skype for Business Server 2015

The Test-CsPresence cmdlet is an example of a Skype for Business Server 2015 synthetic transaction.
Synthetic transactions are used in Skype for Business Server 2015 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
Typically, these are test accounts and not accounts belonging to actual users.
With these user accounts configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator can run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts, you will need to supply the logon names and passwords for each user.

The Test-CsPresence cmdlet is used to determine whether a pair of test users can log on to Skype for Business Server 2015 and then exchange presence information.
To do this, the cmdlet first logs the two users on to the system.
If both logons succeed, the first test user then asks to receive presence information from the second user.
The second user publishes this information, and the Test-CsPresence cmdlet verifies that the information was successfully transmitted to the first user.
After the exchange of presence information, the two test users are then logged off from Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Test-CsPresence -TargetFqdn atl-cs-001.litwareinc.com
```

The preceding example checks to see if a pair of preconfigured test users can log on to the pool atl-cs-001.litwareinc.com; after the test users are logged on, Test-CsPresence then checks to see if the two users are able to exchange presence information.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system and then check to see if this user can exchange presence information with the second test user defined for the pool.

If a Registrar has not been defined then the command will fail because it will not know which users to employ when doing the test.
If you have not defined test users for a pool, then you must include the SubscriberSipAddress and PublisherSipAddress parameters as well as the corresponding credentials for the users acting as the presence subscriber and the presence publisher.
Test-CsPresence will then conduct its checks using the two specified users.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 checks to see if a pair of preconfigured test users can log on to the pool atl-cs-001.litwareinc.com; after the test users are logged on, Test-CsPresence then checks to see if the two users are able to exchange presence information.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system and then check to see if this user can exchange presence information with the second test user defined for the pool.

If a Registrar has not been defined then the command will fail because it will not know which users to employ when doing the test.
If you have not defined test users for a pool, then you must include the SubscriberSipAddress and PublisherSipAddress parameters in addition to the corresponding credentials for the users acting as the presence subscriber and the presence publisher.
Test-CsPresence will then conduct its checks using the two specified users.

Test-CsPresence -TargetFqdn atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 checks to see if a pair of preconfigured test users can log on to the pool atl-cs-001.litwareinc.com; after the test users are logged on, the Test-CsPresence cmdlet then checks to see if the two users are able to exchange presence information.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system and then check to see if this user can exchange presence information with the second test user defined for the pool.

If a Registrar has not been defined then the command will fail because it will not know which users to employ when doing the test.
If you have not defined test users for a pool, then you must include the SubscriberSipAddress and PublisherSipAddress parameters in addition to the corresponding credentials for the users acting as the presence subscriber and the presence publisher.
The Test-CsPresence cmdlet will then conduct its checks using the two specified users.

Test-CsPresence -TargetFqdn atl-cs-001.litwareinc.com

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$cred1 = Get-Credential "litwareinc\pilar"
$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsPresence -TargetFqdn atl-cs-001.litwareinc.com -SubscriberSipAddress "sip:pilar@litwareinc.com" -SubscriberCredential $cred1 -PublisherSipAddress "sip:kenmyer@litwareinc.com" -PublisherCredential $cred2
```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Lync Server, and then exchange presence information.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box will only require the administrator to enter the password for the Pilar Ackerman account.) The resulting credential object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can log on to Lync Server and exchange presence information.
To carry out this task, Test-CsPresence is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SubscriberSipAddress (the SIP address for one test user); SubscriberCredential (the Windows PowerShell object containing the credentials for this same user); PublisherSipAddress (the SIP address for the other test user); and PublisherCredential (the Windows PowerShell object containing the credentials for the other user).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Lync Server, and then exchange presence information.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box will only require the administrator to enter the password for the Pilar Ackerman account.) The resulting credentials object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can log on to Lync Server and exchange presence information.
To carry out this task, Test-CsPresence is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SubscriberSipAddress (the SIP address for one test user); SubscriberCredential (the Windows PowerShell object containing the credentials for this same user); PublisherSipAddress (the SIP address for the other test user); and PublisherCredential (the Windows PowerShell object containing the credentials for the other user).

$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsPresence -TargetFqdn atl-cs-001.litwareinc.com -SubscriberSipAddress "sip:pilar@litwareinc.com" -SubscriberCredential $cred1 -PublisherSipAddress "sip:kenmyer@litwareinc.com" -PublisherCredential $cred2

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 test the ability of a pair of users (litwareinc\pilar and litwareinc\kenmyer) to log on to Skype for Business Server 2015, and then exchange presence information.
To do this, the first command in the example uses the Get-Credential cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box will only require the administrator to enter the password for the Pilar Ackerman account.) The resulting credentials object is then stored in a variable named $cred1.
The second command does the same thing, this time returning a credential object for the Ken Myer account.

With the two credential objects in hand, the third command in the example determines whether or not the two users can log on to Skype for Business Server 2015 and exchange presence information.
To carry out this task, the Test-CsPresence cmdlet is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); SubscriberSipAddress (the SIP address for one test user); SubscriberCredential (the Windows PowerShell object containing the credentials for this same user); PublisherSipAddress (the SIP address for the other test user); and PublisherCredential (the Windows PowerShell object containing the credentials for the other user).

$cred1 = Get-Credential "litwareinc\pilar"

$cred2 = Get-Credential "litwareinc\kenmyer"

Test-CsPresence -TargetFqdn atl-cs-001.litwareinc.com -SubscriberSipAddress "sip:pilar@litwareinc.com" -SubscriberCredential $cred1 -PublisherSipAddress "sip:kenmyer@litwareinc.com" -PublisherCredential $cred2

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

### -PublisherCredential
User credential object for the first of the two user accounts to be tested.
The value passed to PublisherCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

$x = Get-Credential "litwareinc\kenmyer"

You need to supply the user password when running this command.

The publisher credential is not required if you are running the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: pc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublisherSipAddress
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

SIP address for the first of the two user accounts to be tested.
For example: -PublisherSipAddress "sip:kenmyer@litwareinc.com".
The PublisherSipAddress parameter must reference the same user account as PublisherCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



**Below Content Applies To:** Skype for Business Server 2015

SIP address for the first of the two user accounts to be tested.
For example:

-PublisherSipAddress "sip:kenmyer@litwareinc.com"

The PublisherSipAddress parameter must reference the same user account as PublisherCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: pa
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
Aliases: pa
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriberCredential
User credential object for the second of the two user accounts to be tested.
The value passed to SubscriberCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $y:

$y = Get-Credential "litwareinc\pilar"

You need to supply the user password when running this command.

The subscriber credential is not required if you are running the test under the health monitoring configuration settings for the pool.

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

### -SubscriberSipAddress
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

SIP address for the second of the two user accounts to be tested.
For example: -SubscriberSipAddress "sip:pilar@litwareinc.com".
The SubscriberSipAddress parameter must reference the same user account as SubscriberCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



**Below Content Applies To:** Skype for Business Server 2015

SIP address for the second of the two user accounts to be tested.
For example:

-SubscriberSipAddress "sip:pilar@litwareinc.com"

The SubscriberSipAddress parameter must reference the same user account as SubscriberCredential.

The SIP address is not required if you are running the test under the health monitoring configuration settings for the pool.



```yaml
Type: String
Parameter Sets: ServerPlatform, TargetUri
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

### -RegistrarPort
SIP port used by the Registrar service.
This parameter is not required if the Registrar uses the default port 5061.

```yaml
Type: Int32
Parameter Sets: ServerPlatform, ClientPlatform
Aliases: rp
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Parameter Sets: ServerPlatform, ClientPlatform
Aliases: vb
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
**Below Content Applies To:** Lync Server 2010

{{Fill OutVerboseVariable Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
Type of authentication used in the test.
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

### -TimeoutInSeconds
PARAMVALUE: UInt32

```yaml
Type: UInt32
Parameter Sets: ServerPlatform, ClientPlatform
Aliases: 
Applicable: Skype for Business Server 2015

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
Test-CsPresence does not accept pipelined input.

###  
None.
The Test-CsPresence cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsPresence returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsPresence cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/09a5faf6-4e80-4a3b-ac84-aec9778ee9b5(OCS.14).aspx)

[Test-CsRegistration]()

[Online Version](http://technet.microsoft.com/EN-US/library/09a5faf6-4e80-4a3b-ac84-aec9778ee9b5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/09a5faf6-4e80-4a3b-ac84-aec9778ee9b5(OCS.16).aspx)

