---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Test-CsExUMConnectivity
schema: 2.0.0
---

# Test-CsExUMConnectivity

## SYNOPSIS
Verifies that a test user can connect to Exchange Unified Messaging.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ServerPlatform
```
Test-CsExUMConnectivity [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-RegistrarPort <Int32>]
 [-UserSipAddress <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsExUMConnectivity [[-TargetFqdn] <String>] -UserCredential <PSCredential>
 [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-RegistrarPort <Int32>] -UserSipAddress <String> [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsExUMConnectivity` cmdlet verifies that the specified user can connect to the Exchange unified messaging service.
Note that this cmdlet only verifies that a connection can be made to the service; it does not test the service itself.
To test the unified messaging service (by running a synthetic transaction cmdlet that actually leaves a voice mail message in a user's mailbox) use the `Test-CsExUMVoiceMail` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsExUMConnectivity` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsExUMConnectivity -TargetFqdn "atl-cs-001.litwareinc.com"
```

The preceding example tests Exchange Unified Messaging connectivity for the pool atl-cs-001.litwareinc.com.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether or not the first test user is able to connect to Unified Messaging.
If test users have not been configured for the pool then the command will fail.


### -------------------------- Example 2 --------------------------
```
$credential = Get-Credential "litwareinc\kenmyer"

Test-CsExUMConnectivity -TargetFqdn "atl-cs-001.litwareinc.com" -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $credential
```

The commands shown in Example 2 test Exchange Unified Messaging connectivity for the user litwareinc\kenmyer.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell command-line interface credentials object for the user litwareinc\kenmyer.
Note that you must supply the password for this account in order to create a valid credentials object and to ensure that the `Test-CsExUMConnectivity` cmdlet can carry out its check.

The second command in the example uses the supplied credentials object ($x) and the SIP address of the user litwareinc\kenmyer in order to determine whether or this user can connect to Exchange Unified Messaging.


### -------------------------- Example 3 --------------------------
```
$credential = Get-Credential "litwareinc\kenmyer"

Test-CsExUMConnectivity -TargetFqdn "atl-cs-001.litwareinc.com" -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $credential -OutLoggerVariable ExumTest

$ExumTest.ToXML() | Out-File C:\Logs\ExumTest.xml
```

The command shown in Example 3 is a variation of the command shown in Example 2; in this case, however, the OutLoggerVariable parameter is included in order to generate a detailed log of every step undertaken by the `Test-CsExUMConnectivity` cmdlet, as well as the success or failure of each of those steps.
To do this, the OutLoggerVariable parameter is added along with the parameter value ExumText; that causes detailed logging information to be stored in a variable named $ExumTest.
In the final command in the example, the ToXML() method is used to convert the log information to XML format.
That XML data is then written to a file named C:\Logs\ExumTest.xml by using the `Out-File` cmdlet.


## PARAMETERS

### -TargetFqdn
Fully qualified domain name of the pool being tested for Exchange Unified Messaging connectivity.

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

### -UserCredential
User credentials object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

This parameter is not required if you are running the test by using test users configured via the `CsHealthMonitoringConfiguration` cmdlets.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: uc
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
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

`-OutLoggerVariable TestOutput`

Note: Do not use prepend a $ character when specifying the variable name.

To save the information stored in the logger variable to an HTML file, use a command similar to this:

`$TestOutput.ToHTML() \> C:\Logs\TestOutput.html`

To save the information stored in the logger variable to an XML file, use a command similar to this:

`$TestOutput.ToXML() \> C:\Logs\TestOutput.xml`

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

`-OutVerboseVariable TestOutput`

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

### -UserSipAddress
SIP address of the user to be used in the test.
For example:

`-UserSipAddress "sip:kenmyer@litwareinc.com"`

This parameter is not required if you are running the test by using test users configured via the `CsHealthMonitoringConfiguration` cmdlets.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ua
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: ua
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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
The `Test-CsExUMConnectivity` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsExUMConnectivity` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsExUMVoiceMail](Test-CsExUMVoiceMail.md)
