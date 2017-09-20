---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Test-CsAVEdgeConnectivity
schema: 2.0.0
---

# Test-CsAVEdgeConnectivity

## SYNOPSIS
Verifies connectivity through the A/V Edge server.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ServerPlatform
```
Test-CsAVEdgeConnectivity [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-RegistrarPort <Int32>]
 [-UserSipAddress <String>] [-AVEdgeAddress <String>] [-AVEdgeTCPPort <UInt16>] [-AVEdgeUDPPort <UInt16>]
 [<CommonParameters>]
```

### ClientPlatform
```
Test-CsAVEdgeConnectivity [[-TargetFqdn] <String>] -UserCredential <PSCredential>
 [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-RegistrarPort <Int32>] -UserSipAddress <String> [-AVEdgeAddress <String>]
 [-AVEdgeTCPPort <UInt16>] [-AVEdgeUDPPort <UInt16>] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsAVEdgeConnectivity` cmdlet verifies that a user can connect to the AV Edge Server assigned to a Registrar pool.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsAVEdgeConnectivity` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsAVEdgeConnectivity -TargetFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 verifies that a preconfigured test user can connect to the A/V Edge server configured for the pool atl-cs-001.litwareinc.com Note that this command will fail if you have not defined at least one health monitoring test user for atl-cs-001.litwareinc.com.


### -------------------------- Example 2 --------------------------
```
$cred = Get-Credential "litwareinc\kenmyer"

Test-CsAVEdgeConnectivity -TargetFqdn "atl-cs-001.litwareinc.com" -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred
```

In Example 2, the `Test-CsAVEdgeConnectivity` cmdlet verifies that the user with the SIP address sip:kenmyer@litwareinc.com is able to connect to the AV Edge server.
To do this, the first command in the example uses the `Get-Credential` cmdlet to retrieve a Windows PowerShell credentials object for the user litwareinc\kenmyer; note that you supply the password for this account when obtaining this object.
After the credentials object has been obtained, the second command uses the `Test-CsAVEdgeConnectivity` cmdlet to verify that the user can connect to the AV Edge server.


## PARAMETERS

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.

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
User credentials object for the account to be tested.
The value passed to UserCredential must be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credential object for the user litwareinc\kenmyer and stores that object in a variable named

`$x: $x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.
This parameter is not required if you are conducting the test under the health monitoring configuration settings for the pool.

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

Note: Do not use prepend a $ character when specifying the variable name. To save the information stored in the logger variable to an HTML file, use a command similar to this:

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

Do not use prepend a $ character when specifying the variable name.

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
SIP address for user account to be tested; for example: `-UserSipAddress "sip:kenmyer@litwareinc.com"`.
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

### -AVEdgeAddress
IP address of the Edge server being tested.
Specifying the IP address enables you to test the internal side of the Edge server; in turn, this allows you to verify the connection between the test client and the internal Edge server.
Note that the internal side often has multiple IP addresses.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AVEdgeTCPPort
Transmission Control Protocol (TCP) of the Edge server being tested.

The default value is 443.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AVEdgeUDPPort
User Datagram Protocol (UDP) port of the Edge server being tested.

The default value is 3478.

```yaml
Type: UInt16
Parameter Sets: (All)
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
The `Test-CsAVEdgeConnectivity` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsAVEdgeConnectivity` cmdlet returns instances of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsAVEdgeConfiguration]()
