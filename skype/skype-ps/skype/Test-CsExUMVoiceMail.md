---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsExUMVoiceMail
schema: 2.0.0
---

# Test-CsExUMVoiceMail

## SYNOPSIS
Verifies that a user can connect to Exchange Unified Messaging and leave a voice mail message for another user.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ClientPlatform
```
Test-CsExUMVoiceMail [[-TargetFqdn] <String>] -SenderCredential <PSCredential>
 [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] -ReceiverSipAddress <String> [-RegistrarPort <Int32>]
 -SenderSipAddress <String> [-WaveFile <String>] [<CommonParameters>]
```

### ServerPlatform
```
Test-CsExUMVoiceMail [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-ReceiverSipAddress <String>]
 [-RegistrarPort <Int32>] [-SenderSipAddress <String>] [-WaveFile <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsExUMVoiceMail` cmdlet enables administrators to verify that a user can access, and make use of, the Exchange unified messaging service.
To do this, the cmdlet connects to the unified messaging service and leaves a voice mail in the specified mailbox.
This can be a system-supplied voice mail, or it can be a custom .WAV file that you have recorded yourself.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsExUMVoiceMail` cmdlet are not available in the Skype for Business Server.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsExUMVoiceMail -TargetFqdn "atl-cs-001.litwareinc.com" -ReceiverSipAddress "sip:kenmyer@litwareinc.com"
```

The preceding example tests Exchange Unified Messaging voice mail connectivity for the pool atl-cs-001.litwareinc.com.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether or not the first test user is able to use Unified Messaging voice mail.
If test users have not been configured for the pool then the command will fail.


### -------------------------- Example 2 --------------------------
```
$credential = Get-Credential "litwareinc\pilar"

Test-CsExUMVoiceMail -TargetFqdn "atl-cs-001.litwareinc.com" -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -SenderSipAddress "sip:pilar@litwareinc.com" -SenderCredential $credential
```

The commands shown in Example 2 test Exchange Unified Messaging voice mail connectivity for the user litwareinc\kenmyer.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell command-line interface credentials object for the user litwareinc\kenmyer.
Note that you must supply the password for this account in order to create a valid credentials object and to ensure that the `Test-CsExUMVoiceMail` cmdlet can carry out its check.

The second command in the example uses the supplied credentials object ($x) and the SIP address of the user litwareinc\kenmyer in order to determine whether or this user can connect to Exchange Unified Messaging voice mail.


### -------------------------- Example 3 --------------------------
```
Test-CsExUMVoiceMail -TargetFqdn "atl-cs-001.litwareinc.com" -ReceiverSipAddress "sip:kenmyer@litwareinc.com" -OutLoggerVariable VoicemailTest

$VoicemailTest.ToXML() | Out-File C:\Logs\VoicemailTest.xml
```

The command shown in Example 3 is a variation of the command shown in Example 1; in this case, however, the OutLoggerVariable parameter is included in order to generate a detailed log of every step undertaken by the `Test-CsExUMVoiceMail` cmdlet, as well as the success or failure of each of those steps.
To do this, the OutLoggerVariable parameter is added along with the parameter value ExumText; that causes detailed logging information to be stored in a variable named $ExumTest.
In the final command in the example, the ToXML() method is used to convert the log information to XML format.
That XML data is then written to a file named C:\Logs\VoicemailTest.xml by using the `Out-File` cmdlet.


## PARAMETERS

### -SenderCredential
User credential object for the user account that will be leaving the voicemail message.
The value passed to SenderCredential must be an object reference obtained by using the `Get-Credential` cmdlet.
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
Fully qualified domain name (FQDN) of the pool to be tested.
For example:

`-TargetFqdn atl-cs-001.litwareinc.com`

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
SIP address for the user account that should receive the test voice mail (this must be a different SIP address than the SIP address used for the sender).
For example:

`-ReceiverSipAddress "sip:pilar@litwareinc.com"`

You do not have to include credentials for the voicemail recipient.

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
SIP address for the user account that will be leaving the voicemail message (this must be a different SIP address than the SIP address used for the receiver).
For example:

`-SenderSipAddress "sip:kenmyer@litwareinc.com"`

The SenderSIPAddress parameter must reference the same user account as SenderCredential.

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

### -WaveFile
Path to .WAV audio file that can be used when testing the voice mail service.
If this parameter is included, the `Test-CsExUMVoiceMail` cmdlet will play the specified .WAV file when connecting to Exchange voicemail.
If this parameter is not included, a default audio file will be played instead.


```yaml
Type: String
Parameter Sets: (All)
Aliases: wf
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
The `Test-CsExUMVoiceMail` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsExUMVoiceMail` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsExUMConnectivity](Test-CsExUMConnectivity.md)

