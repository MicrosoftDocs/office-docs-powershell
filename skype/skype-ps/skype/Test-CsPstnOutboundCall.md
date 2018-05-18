---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsPstnOutboundCall
schema: 2.0.0
---

# Test-CsPstnOutboundCall

## SYNOPSIS
Tests the ability of a user to make a call to a phone number located on the public switched telephone network (PSTN).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ServerPlatform
```
Test-CsPstnOutboundCall [-TargetFqdn] <String> -TargetPstnPhoneNumber <String> [-UserSipAddress <String>]
 [-RegistrarPort <Int32>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsPstnOutboundCall [[-TargetFqdn] <String>] -TargetPstnPhoneNumber <String> -UserCredential <PSCredential>
 -UserSipAddress <String> [-RegistrarPort <Int32>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsPstnOutboundCall` cmdlet is an example of a Skype for Business Server "synthetic transaction." Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the `CsHealthMonitoringConfiguration` cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can simply run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using the two user accounts in question (as opposed to a pair of test accounts) and try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts you will need to supply the logon names and passwords for each user.

`Test-CsPstnOutboundCall` can also be used in server platform mode.
In that case you only need to specify the SIP address of a user, and Skype for Business Server will use certificates to authenticate that user.

When you run the `Test-CsPstnOutboundCall` cmdlet, the cmdlet first attempts to log the test user on to Skype for Business Server.
If the logon succeeds, the cmdlet will then attempt to make a phone call across the PSTN gateway.
This phone call will be placed using the dial plan, voice policy, and other policies and settings assigned to the test account.
When the call is answered, the cmdlet sends dual-tone multi-frequency (DTMF) codes across the network in order to verify media connectivity.

When conducting its test, the `Test-CsPstnOutboundCall` cmdlet will make an actual phone call: the target phone will ring and must be answered for the test to succeed.
This call must also be manually ended by the administrator.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsPstnOutboundCall -TargetFqdn atl-cs-001.litwareinc.com -TargetPstnPhoneNumber "+15551234567"
```

Example 1 checks to see if a preconfigured test user can log on to the pool atl-cs-001.litwareinc.com and then make a phone call across the PSTN gateway.
This command will work only if test users been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether the first test user can log on to the system and, if so, make a phone call to a phone located on the PSTN network.

If test users have not been defined then the command will fail because it will not know which user to employ when doing the test.
If you have not defined test users for a pool, then you must include the UserSipAddress parameter as well as the corresponding credentials for the user account involved in the test.
The `Test-CsPstnOutboundCall` cmdlet will then conduct its checks using the specified user.


### -------------------------- Example 2 --------------------------
```
$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsPstnOutboundCall -TargetFqdn atl-cs-001.litwareinc.com -TargetPstnPhoneNumber "+15551234567" -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1
```

The commands shown in Example 2 test the ability of a test user (litwareinc\kenmyer) to log on to Skype for Business Server and then make a phone call over the PSTN gateway.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell credential object containing the name and password of the user Ken Myer.
(Because the logon name litwareinc\kenmyer has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Ken Myer account.) The resulting credentials object is then stored in a variable named $cred1.

With the credential object in hand, the second command in the example determines whether or not the test user can log on Skype for Business Server, and then make a phone call to the target phone number (+15551234567).
To carry out this task, the `Test-CsPstnOutboundCall` cmdlet is called, along with the following parameters: TargetFqdn (the FQDN of the Registrar pool); UserSipAddress (the SIP address for the user making the call); UserCredential (the Windows PowerShell object containing the credentials for the test user); and TargetPstnPhoneNumber (the phone number being called).


### -------------------------- Example 3 --------------------------
```
Test-CsPstnOutboundCall -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress sip:kenmyer@litwareinc.com -TargetPstnPhoneNumber "+15551234567"
```

Example 3 shows how the `Test-CsPstnOutboundCall` cmdlet can be used in server platform mode.
In this mode, the user's SIP address is specified, but the user credentials are not included.
When run like this, Skype for Business Server uses certificates to authenticate the test user.


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

### -TargetPstnPhoneNumber
PSTN telephone number to be called when conducting the test.
The target phone number is best specified using the E.164 format, which means that the number will look something like this "+14255551298", with that number containing a plus sign (+) followed by the country/region calling code (1), the area code (425) and the phone number (5551298).
Do not use dashes, parentheses, or any other characters when specifying the phone number.

If you do not use the E.164 format the dial plan of the test user will be appended to the number.
Skype for Business Server will then use that dial plan to normalize the number to the E.164 format.
If the number cannot be normalized then the call cannot be placed and the test will fail.


```yaml
Type: String
Parameter Sets: (All)
Aliases: rpn
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCredential
User credentials object for the account to be tested.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

This parameter is not needed if the command is using test users configured by using the `CsHealthMonitoringConfiguration` cmdlets.
You also do not need to specify this parameter if the test is being conducted in server platform mode.
In that case, Skype for Business Server will attempt to authenticate the user by using certificates.


```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: sc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address for the user account to be tested.
For example:

`-SenderSipAddress "sip:kenmyer@litwareinc.com"`

The UserSipAddress parameter must reference the same user account as UserCredential

This parameter is not needed if the command is using test users configured by using the `CsHealthMonitoringConfiguration` cmdlets.


```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: sa
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
Aliases: sa
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Test-CsPstnOutboundCall` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsPstnOutboundCall` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsPstnPeerToPeerCall](Test-CsPstnPeerToPeerCall.md)

