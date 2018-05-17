---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsWebAppAnonymous
schema: 2.0.0
---

# Test-CsWebAppAnonymous

## SYNOPSIS
Verifies that anonymous users can use the Skype for Business Web App to join a Skype for Business Server conference.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ServerPlatform
```
Test-CsWebAppAnonymous [-TargetFqdn] <String> [-External] [-Force] [-OutVerboseVariable <String>]
 [-RegistrarPort <Int32>] [-UserSipAddress <String>] [-Authentication <AuthenticationMechanism>]
 [-OutLoggerVariable <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsWebAppAnonymous [[-TargetFqdn] <String>] [-External] [-Force] [-OutVerboseVariable <String>]
 [-RegistrarPort <Int32>] -UserCredential <PSCredential> -UserSipAddress <String>
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

### TargetUri
```
Test-CsWebAppAnonymous [-Force] [-OutVerboseVariable <String>] -TargetUri <String> -UserSipAddress <String>
 [-WebCredential <PSCredential>] [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsWebAppAnonymous` cmdlet enables administrators to verify that anonymous users can employ Skype for Business Web App in order to join conferences.
When you run the `Test-CsWebAppAnonymous` cmdlet, the cmdlet attempts to obtain an anonymous web ticket by using the Web Ticket service.
If the ticket can be obtained, the `Test-CsWebAppAnonymous` cmdlet will then try to connect to by Skype for Business Server using Skype for Business Web App.
If the connection is made, the cmdlet will then attempt to establish separate conferences for instant messaging, application sharing, and data collaboration.

Many administrators will use the `CsHealthMonitoringConfiguration` cmdlets to set up test users for each of their Registrar pools.
These test users represent a pair of user accounts that have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) If test users are configured for a pool, administrators can run the `Test-CsWebAppAnonymous` cmdlet against that pool without having to specify the identity of (and supply the credentials for) the user account involved in the test.

Alternatively, administrators can run the `Test-CsWebAppAnonymous` cmdlet using an actual user account.
If you decide to conduct the test using an actual user account you will need to supply the logon name and password for that account.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsWebAppAnonymous -TargetFqdn atl-cs-001.litwareinc.com
```

The command shown in Example 1 verifies whether or not a test user configured for the pool atl-cs-001.litwareinc.com can use Skype for Business Web App to anonymously join a conference.
This command will only succeed if you have configured a test user for the pool by using the `CsHealthMonitoringConfiguration` cmdlets.


### -------------------------- Example 2 --------------------------
```
$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsWebAppAnonymous -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1
```

The commands shown in Example 2 verify whether or not the user Ken Myer can use Skype for Business Web App to anonymously join a conference.
To use an actual user account, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell credentials object for the user litwareinc\kenmyer.
That credentials object (stored in a variable named $cred1) is then passed to the UserCredential parameter in the second command in the example.
In addition to the UserCredential parameter, the UserSipAddress parameter is also included, along with Ken Myer's SIP address.


## PARAMETERS

### -External
When present, causes the `Test-CsWebAppAnonymous` cmdlet to test the Reach server's external web relay.
If this parameter is not present, the cmdlet will test the internal web relay.
The web relay serves as an intermediary between the internal network and the Internet.


```yaml
Type: SwitchParameter
Parameter Sets: ServerPlatform, ClientPlatform
Aliases: 
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

### -RegistrarPort
SIP port used by the Registrar service.
This parameter is not required if the Registrar uses the default port 5061.


```yaml
Type: Int32
Parameter Sets: ServerPlatform, ClientPlatform
Aliases: rp
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.
For example:

`-TargetFqdn atl-cs-001.litwareinc.com`


```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
Uniform Resource Identifier (URI) of the Reach server.
For example:

`-TargetUri "https://atl-cs-001.litwareinc.com/reach"`

You cannot use both the TargetUri parameter and the TargetFqdn parameter in the same command.


```yaml
Type: String
Parameter Sets: TargetUri
Aliases: twsu
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCredential
User credentials object for the first of the two user accounts to be tested.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\pilar"`

You need to supply the user password when running this command.

This parameter is not required if you are running the test by using test users configured via the `CsHealthMonitoringConfiguration` cmdlets.


```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: uc
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address for the first of the two user accounts to be tested.
For example:

`-UserSipAddress "sip:kenmyer@litwareinc.com"`

This parameter is not required if you are running the test by using test users configured via the `CsHealthMonitoringConfiguration` cmdlets.


```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ua
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebCredential
User credential object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

This parameter is required if either the TargetUri parameter or the UserSipAddress parameters are specified and the computer on which the command is run does not have a server certificate.


```yaml
Type: PSCredential
Parameter Sets: TargetUri
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

### System.Object

###  
The `Test-CsWebAppAnonymous` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

