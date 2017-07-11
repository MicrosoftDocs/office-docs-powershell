---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsWebApp

## SYNOPSIS
Below Content Applies To: Lync Server 2010

{{Fill in the Synopsis}}

Below Content Applies To: Lync Server 2013

Verifies that authenticated users can use the Microsoft Lync Web App to join a Lync Server conference.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Verifies that authenticated users can use Skype for Business Web App to join a Skype for Business Server 2015 conference.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ServerPlatform
```
Test-CsWebApp [-TargetFqdn] <String> [-External] [-Force] [-OutVerboseVariable <String>]
 [-RegistrarPort <Int32>] [-UserSipAddress <String>] [-Authentication <AuthenticationMechanism>]
 [-OutLoggerVariable <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsWebApp [[-TargetFqdn] <String>] [-External] [-Force] [-OutVerboseVariable <String>]
 [-RegistrarPort <Int32>] -User2Credential <PSCredential> -User2SipAddress <String>
 -UserCredential <PSCredential> -UserSipAddress <String> [-Authentication <AuthenticationMechanism>]
 [-OutLoggerVariable <String>] [<CommonParameters>]
```

### TargetUri
```
Test-CsWebApp [-Force] [-OutVerboseVariable <String>] -TargetUri <String> -UserSipAddress <String>
 [-WebCredential <PSCredential>] [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

{{Fill in the Description}}

Below Content Applies To: Lync Server 2013

The Test-CsWebApp cmdlet enables administrators to verify that authenticated users can employ the Lync Web App in order to join conferences.
When you run Test-CsWebApp, the cmdlet attempts to obtain web tickets for a pair of test users by using the Web Ticket service.
If the tickets can be obtained, and the test users authenticated, Test-CsWebApp will then try to connect to Lync Server by using the Lync Web App.
If the connection is made, the cmdlet will then attempt to establish separate conferences for instant messaging, application sharing, and data collaboration.

Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users represent a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) If test users are configured for a pool, administrators can run Test-CsWebApp against that pool without having to specify the identity of (and supply the credentials for) the user account involved in the test.

Alternatively, administrators can run Test-CsWebApp using actual user accounts.
If you decide to conduct the test using actual user accounts you will need to supply the logon name and password for each account.

Below Content Applies To: Skype for Business Server 2015

The Test-CsWebApp cmdlet enables administrators to verify that authenticated users can employ Skype for Business Web App in order to join conferences.
When you run the Test-CsWebApp cmdlet, the cmdlet attempts to obtain web tickets for a pair of test users by using the Web Ticket service.
If the tickets can be obtained, and the test users authenticated, the Test-CsWebApp cmdlet will then try to connect to Skype for Business Server 2015 by using Skype for Business Web App.
If the connection is made, the cmdlet will then attempt to establish separate conferences for instant messaging, application sharing, and data collaboration.

Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users represent a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) If test users are configured for a pool, administrators can run the Test-CsWebApp cmdlet against that pool without having to specify the identity of (and supply the credentials for) the user account involved in the test.

Alternatively, administrators can run the Test-CsWebApp cmdlet using actual user accounts.
If you decide to conduct the test using actual user accounts you will need to supply the logon name and password for each account.



## EXAMPLES

### Example 1 (Lync Server 2010)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 verifies whether or not a pair of test users configured for the pool atl-cs-001.litwareinc.com can use Lync Web App to join a conference.
This command will only succeed if you have configured test users for the pool by using the CsHealthMonitoringConfiguration cmdlets.

Test-CsWebApp -TargetFqdn atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 verifies whether or not a pair of test users configured for the pool atl-cs-001.litwareinc.com can use Skype for Business Web App to join a conference.
This command will only succeed if you have configured test users for the pool by using the CsHealthMonitoringConfiguration cmdlets.

Test-CsWebApp -TargetFqdn atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 verify whether or not the users Ken Myer and Pilar Ackerman can use Lync Web App to join a conference.
To use actual user accounts, the first two commands in the example use the Get-Credential cmdlet to create a Windows PowerShell credentials objects for the two users (litwareinc\kenmyer and litwareinc\pilar).
Those credentials objects (stored in the variables $cred1 and $cred2) are then used as parameter values for the UserCredential and User2Credential parameters in the final command in the example.
In addition to the user credential parameters, the UserSipAddress and User2SipAddress parameters are included, along with the SIP addresses of the two user accounts being employed in the test.

$cred1 = Get-Credential "litwareinc\kenmyer"

$cred2 = Get-Credential "litwareinc\pilar"

Test-CsWebApp -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1 -User2SipAddress "sip:pilar@litwareinc.com" -User2Credential $cred2

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 verify whether or not the users Ken Myer and Pilar Ackerman can use Skype for Business Web App to join a conference.
To use actual user accounts, the first two commands in the example use the Get-Credential cmdlet to create a Windows PowerShell command-line interface credentials objects for the two users (litwareinc\kenmyer and litwareinc\pilar).
Those credentials objects (stored in the variables $cred1 and $cred2) are then used as parameter values for the UserCredential and User2Credential parameters in the final command in the example.
In addition to the user credential parameters, the UserSipAddress and User2SipAddress parameters are included, along with the SIP addresses of the two user accounts being employed in the test.

$cred1 = Get-Credential "litwareinc\kenmyer"

$cred2 = Get-Credential "litwareinc\pilar"

Test-CsWebApp -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1 -User2SipAddress "sip:pilar@litwareinc.com" -User2Credential $cred2

## PARAMETERS

### -External
Below Content Applies To: Lync Server 2010

{{Fill External Description}}



Below Content Applies To: Lync Server 2013

When present, causes Test-CsWebApp to test the Reach server's external web relay.
If this parameter is not present, the cmdlet will test the internal web relay.
The web relay serves as an intermediary between the internal network and the Internet.



Below Content Applies To: Skype for Business Server 2015

When present, causes the Test-CsWebApp cmdlet to test the Reach server's external web relay.
If this parameter is not present, the cmdlet will test the internal web relay.
The web relay serves as an intermediary between the internal network and the Internet.



```yaml
Type: SwitchParameter
Parameter Sets: ServerPlatform, ClientPlatform
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010

{{Fill Force Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

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

### -OutVerboseVariable
Below Content Applies To: Lync Server 2010

{{Fill OutVerboseVariable Description}}



Below Content Applies To: Lync Server 2013

When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax

-OutVerboseVariable TestOutput

Do not prepend a $ character when specifying the variable name.



Below Content Applies To: Skype for Business Server 2015

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

### -RegistrarPort
Below Content Applies To: Lync Server 2010

{{Fill RegistrarPort Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

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

### -TargetFqdn
Below Content Applies To: Lync Server 2010

{{Fill TargetFqdn Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Fully qualified domain name (FQDN) of the pool to be tested.
For example:

-TargetFqdn atl-cs-001.litwareinc.com



```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
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
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
Below Content Applies To: Lync Server 2010

{{Fill TargetUri Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Uniform Resource Identifier (URI) of the Reach server.
For example:

-TargetUri "https://atl-cs-001.litwareinc.com/reach"

You cannot use both the TargetUri parameter and the TargetFqdn parameter in the same command.



```yaml
Type: String
Parameter Sets: TargetUri
Aliases: twsu
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User2Credential
Below Content Applies To: Lync Server 2010

{{Fill User2Credential Description}}



Below Content Applies To: Lync Server 2013

User credential object for the second of the two user accounts to be tested.
The value passed to Use2rCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $y:

$y = Get-Credential "litwareinc\kenmyer"

You need to supply the user password when running this command.



Below Content Applies To: Skype for Business Server 2015

User credential object for the second of the two user accounts to be tested.
The value passed to User2Credential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $y:

$y = Get-Credential "litwareinc\kenmyer"

You need to supply the user password when running this command.



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

### -User2SipAddress
Below Content Applies To: Lync Server 2010

{{Fill User2SipAddress Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

SIP address for the second of the two user accounts to be tested.
For example:

-User2SipAddress "sip:pilar@litwareinc.com"

This parameter is not required if you are running the test by using test users configured via the CsHealthMonitoringConfiguration cmdlets.



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

### -UserCredential
Below Content Applies To: Lync Server 2010

{{Fill UserCredential Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

User credentials object for the first of the two user accounts to be tested.
The value passed to UserCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $x:

$x = Get-Credential "litwareinc\pilar"

You need to supply the user password when running this command.



```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: uc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
Below Content Applies To: Lync Server 2010

{{Fill UserSipAddress Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

SIP address for the first of the two user accounts to be tested.
For example:

-UserSipAddress "sip:kenmyer@litwareinc.com"

This parameter is not required if you are running the test by using test users configured via the CsHealthMonitoringConfiguration cmdlets.



```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ua
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClientPlatform, TargetUri
Aliases: ua
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebCredential
Below Content Applies To: Lync Server 2010

{{Fill WebCredential Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

User credential object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

$x = Get-Credential "litwareinc\kenmyer"

This parameter is required if either the TargetUri parameter or the UserSipAddress/User2SipAddress parameters are specified and the computer on which the command is run does not have a server certificate.



```yaml
Type: PSCredential
Parameter Sets: TargetUri
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
Below Content Applies To: Lync Server 2013

Type of authentication used when running the test.
Allowed values are:

* TrustedServer
* Negotiate
* ClientCertificate
* LiveID



Below Content Applies To: Skype for Business Server 2015

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

###  
None.

## OUTPUTS

### System.Object

###  
Test-CsWebApp returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsWebApp cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0333a4a5-9bd5-4a45-aea8-e7af1a394ec3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0333a4a5-9bd5-4a45-aea8-e7af1a394ec3(OCS.16).aspx)

