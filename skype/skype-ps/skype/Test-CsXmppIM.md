---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsXmppIM
schema: 2.0.0
---

# Test-CsXmppIM

## SYNOPSIS
Verifies whether or not an instant message can be sent across an XMPP gateway.
XMPP gateways enable Skype for Business Server users to exchange instant message and presence information with users belonging to IM and presence providers that employ the extensible Messaging and Presence Protocol (XMPP).
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ServerPlatform
```
Test-CsXmppIM [-TargetFqdn] <String> -Receiver <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-RegistrarPort <Int32>]
 [-UserSipAddress <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsXmppIM [[-TargetFqdn] <String>] -Receiver <String> -UserCredential <PSCredential>
 [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-RegistrarPort <Int32>] -UserSipAddress <String> [<CommonParameters>]
```

## DESCRIPTION
The Extensible Messaging and Presence Protocol (XMPP) is a standard communications protocol (based on XML) used for sending messages across the Internet.
XMPP was originally named Jabber, and is supported by a number of Internet messaging and communication applications, including Google Talk and Facebook Chat.
The `Test-CsXmppIM` cmdlet verifies that a user can exchange instant messages with a user on an XMPP network.
Note that, for this test to succeed, you must have a valid SIP address for the XMPP user, and that SIP address must be on a network that has been configured as an allowed XMPP partner.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsXmppIM` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsXmppIM -TargetFqdn "atl-cs-001.litwareinc.com" -Receiver "adelany@contoso.com"
```

The preceding example verifies the XMPP instant messaging capabilities for the pool atl-cs-001.litwareinc.com.
This command will work only if test users have been defined for the pool atl-cs-001.litwareinc.com.
If they have, then the command will determine whether or not the first test user is able to send an XMPP instant message to a user with the SIP address adelaney@contoso.com.

If test users have not been defined, then the command will fail because it will not know which user to log on as.
If you have not defined test users for a pool, then you must include the UserSipAddress parameter and the credentials of the user that the command should use when trying to log on.


### -------------------------- Example 2 --------------------------
```
$credential = Get-Credential "litwareinc\kenmyer"

Test-CsXmppIM -TargetFqdn "atl-cs-001.litwareinc.com" -Receiver "adelany@contoso.com" -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $credential
```

The commands shown in Example 2 test the ability of a specific user (litwareinc\pilar) to log on to send an XMPP instant message to the user adelaney@contoso.com.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell command-line interface credential object containing the name and password of the user Pilar Ackerman.
(Because the logon name litwareinc\pilar has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Pilar Ackerman account.) The resulting credential object is then stored in a variable named $cred1.

The second command then checks to see if this user can log on to the pool atl-cs-001.litwareinc.com and send the XMPP instant message.
To carry out this task, the `Test-CsXmppIm` cmdlet is called, along with four parameters: TargetFqdn (the FQDN of the Registrar pool); Receiver (the SIP address of the user the message is being addressed to); UserCredential (the Windows PowerShell object containing Pilar Ackerman's user credentials); and UserSipAddress (the SIP address corresponding to the supplied user credentials).


## PARAMETERS

### -Receiver
SIP address of the user who the test message is addressed to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name of the pool being tested.

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
User credential object for the user account to be tested.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named `$x:$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

This parameter is not required if you are conducting the test using the health monitoring configuration settings.

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
User credential object for the account to be tested.
The value passed to UserCredential must be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credential object for the user litwareinc\kenmyer and stores that object in a variable named

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.
This parameter is not required if you are conducting the test under the health monitoring configuration settings for the pool.

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
Suppresses the display of any non-fatal error message that might arise when running the command.

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
This parameter is not required if the Registrar uses the default port 5061

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
SIP address for user account to be tested; for example:

`-UserSipAddress "sip:kenmyer@litwareinc.com"`

The UserSipAddress parameter must reference the same user account as UserCredential.
This parameter is not required if you are conducting the test under the health monitoring configuration settings for the pool.

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
The `Test-CsXmppIM` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsXmppIM` cmdlet returns instances of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Set-CsXmppGatewayConfiguration](Set-CsXmppGatewayConfiguration.md)
