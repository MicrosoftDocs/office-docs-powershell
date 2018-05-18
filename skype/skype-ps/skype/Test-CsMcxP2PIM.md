---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsMcxP2PIM
schema: 2.0.0
---

# Test-CsMcxP2PIM

## SYNOPSIS
Tests the ability of a pair of users to exchange instant messages by using the Skype for Business Server Mobility Service.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider; and take advantage of Skype for Business Server capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.


## SYNTAX

```
Test-CsMcxP2PIM [-TargetFqdn] <String> -Authentication <AuthenticationMechanism>
 -ReceiverCredential <PSCredential> -ReceiverSipAddress <String> -SenderCredential <PSCredential>
 -SenderSipAddress <String> [-Force] [-OutLoggerVariable <String>] [-OutVerboseVariable <String>]
 [-RegistrarPort <Int32>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server Mobility Service extends many of the capabilities of Skype for Business Server to mobile devices such as Apple iPhones, Windows Phone, Android phones, and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information, and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service), users with iPhones or Windows Phones can receive these notifications even if Skype for Business is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and make it appear as though the call originated from their work phone; for example, Caller ID systems will display the user's work number instead of his or her mobile phone number.

The `Test-CsMcxP2PIM` cmdlet is used to determine whether or not a pair of users is able to exchange instant messages by using the Mobility Service.
Note that running this cmdlet does not require the use of mobile phones nor does it actually send any instant messages.
Instead, the cmdlet verifies that the two users are able to log on to Skype for Business Server and that the Mobility Service is able to make the connections required to exchange instant messages between the two users.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$credential1 = Get-Credential "litwareinc\kenmyer"

$credential2 = Get-Credential "litwareinc\pilar"

Test-CsMcxP2PIM -TargetFqdn "atl-cs-001.litwareinc.com" -Authentication Negotiate -SenderSipAddres "sip:kenmyer@litwareinc.com" -SenderCredential $credential1 -ReceiverSipAddress "sip:packerman@litwareinc.com" -ReceiverCredential $credential2
```

The commands shown in Example 1 test to see whether or not a pair of users - Ken Myer and Pilar Ackerman - are able to exchange instant messages by using the Mobility Service.
To do this, the first two commands in the example use the `Get-Credential` cmdlet to create credentials objects for the two users; the credentials for Ken Myer are stored in a variable named $credential1 and the credentials for Pilar Ackerman are stored in a variable named $credential2.

After the credential objects have been created, the final command calls the `Test-CsMcxP2PIM` cmdlet, making sure to specify the target Registrar pool (atl-cs-001.litwareinc,com), the authentication type (Negotiate), and the SIP addresses and credentials of the two users.


## PARAMETERS

### -Authentication
Allowed values are: TrustedServer; Negotiate; ClientCertificate; and LiveID.

```yaml
Type: AuthenticationMechanism
Parameter Sets: (All)
Aliases: Ath
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiverCredential
User credentials object for the first of the two user accounts to be tested.
The value passed to ReceiverCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\pilar and stores that object in a variable named $y:

`$y = Get-Credential "litwareinc\pilar"`

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: rc
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceiverSipAddress
SIP address for the first of the two user accounts to be tested.
For example:

`-ReceiverSipAddress "sip:pilar@litwareinc.com"`

The ReceiverSipAddress parameter must reference the same user account as the ReceiverCredential parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ra
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderCredential
User credentials object for the second of the two user accounts to be tested.
The value passed to SenderCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: sc
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderSipAddress
SIP address for the second of the two user accounts to be tested.
For example:

`-SenderSipAddress "sip:kenmyer@litwareinc.com"`

The SenderSipAddress parameter must reference the same user account as the SenderCredential parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: sa
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Parameter Sets: (All)
Aliases: t
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
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

Do not use prepend a $ character when specifying the variable name.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Test-CsMcxP2PIM` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsMcxP2PIM` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

