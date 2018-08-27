---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsDialInConferencing
schema: 2.0.0
---

# Test-CsDialInConferencing

## SYNOPSIS
The `Test-CsDialInConferencing` cmdlet checks to see if a user can take part in a dial-in conferencing session.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ServerPlatform
```
Test-CsDialInConferencing [-TargetFqdn] <String> [-UserSipAddress <String>] [-RegistrarPort <Int32>] [-Verbose]
 [-Force] [-OutVerboseVariable <String>] [-Authentication <AuthenticationMechanism>]
 [-OutLoggerVariable <String>] [-TargetPstnPhoneNumber <String>] [-VerifyConferenceJoin <Boolean>]
 [<CommonParameters>]
```

### ClientPlatform
```
Test-CsDialInConferencing [[-TargetFqdn] <String>] -UserCredential <PSCredential> -UserSipAddress <String>
 [-RegistrarPort <Int32>] [-Verbose] [-Force] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-TargetPstnPhoneNumber <String>]
 [-VerifyConferenceJoin <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsDialInConferencing` cmdlet is an example of a Skype for Business Server "synthetic transaction." Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the `CsHealthMonitoringConfiguration` cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts, you will need to supply the logon names and passwords for each user.

The `Test-CsDialInConferencing` cmdlet works by attempting to log a test user onto the system.
(If you are using test users, the `Test-CsDialInConferencing` cmdlet will use the first test account configured for that pool.) If logon succeeds, the cmdlet will then use the user's credentials and permissions to try the available dial-in conferencing access numbers.
The success or failure of each dial-in attempt will be noted, then the test user will be logged off from Skype for Business Server.

The `Test-CsDialInConferencing` cmdlet only verifies that the appropriate connections can be made.
The cmdlet does not actually make any phone calls or create any dial-in conferences that other users can join.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsDialInConferencing -TargetFqdn atl-cs-001.litwareinc.com
```

Example 1 verifies that a preconfigured test user can take part in dial-in conferencing on the pool atl-cs-001.litwareinc.com.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether or not the first test user is able to log on to Skype for Business Server.

If test users have not been defined, then the command will fail because it will not know which user to log on as.
If you have not defined test users for a pool, then you must include the UserCredential parameter and the credentials of the user that the command should employ when trying to log on.


### -------------------------- Example 2 --------------------------
```
$cred1 = Get-Credential "litwareinc\pilar"

Test-CsDialInConferencing -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:pilar@litwareinc.com" -UserCredential $cred1
```

The commands shown in Example 2 test the ability of a specific user (litwareinc\pilar) to take part in dial-in conferencing on the pool atl-cs-001.litwareinc.com.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name -litwareinc\pilar -- has been included as a parameter, the administrator only has to enter the password for the Pilar Ackerman account in the Windows PowerShell Credential Request dialog box.) The resulting credentials object is then stored in a variable named $cred1.

The second command then checks to see if the user Pilar Ackerman can log on to the pool atl-cs-001.litwareinc.com and take part in a dial-in conference.
To carry out this task, the `Test-CsDialInConferencing` cmdlet is called, along with three parameters: TargetFqdn (the FQDN of the Registrar pool); UserCredential (the Windows PowerShell object containing Pilar Ackerman's user credentials); and UserSipAddress (the SIP address corresponding to the supplied user credentials).


## PARAMETERS

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCredential
User credential object for the user account to be tested.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.
This parameter is not required if you are conducting the test using the health monitoring configuration settings.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: cc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address for user account to be tested.
For example: -UserSipAddress "sip:kenmyer@litwareinc.com".
The UserSipAddress parameter must reference the same user account as UserCredential.
This parameter is not required if you are conducting the test using the health monitoring configuration settings.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ca
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: ca
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -OutVerboseVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

`-OutVerboseVariable TestOutput`

Do not prepend a $ character when specifying the variable name.


```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
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

Note: Do not use prepend a $ character when specifying the variable name. To save the information stored in the logger variable to an HTML file, use a command similar to this:

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

### -TargetPstnPhoneNumber
Phone number for a PSTN telephone that will be used to verify that PSTN users can join the dial-in conference.
For example:

`-TargetPstnPhoneNumber "+12065551219"`

Note that TargetPstnPhoneNumber should only be included when you are using the VerifyConferenceJoinType parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: rpn
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerifyConferenceJoin
When set to True, verifies that the dial-in conference can joined by using a PSTN telephone.
When performing this test you can optionally include the TargetPstnPhoneNumber.
If you do that, TargetPstnPhoneNumber must specify the PSTN phone to be used for joining the conference.
If TargetPstnPhoneNumber is not included then the `Test-CsDialInConferencing` cmdlet will use dial-in phone numbers preassigned to the appropriate dial-in conferencing region.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: vcj
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
The `Test-CsDialInConferencing` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsDialInConferencing` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsAVConference](Test-CsAVConference.md)

