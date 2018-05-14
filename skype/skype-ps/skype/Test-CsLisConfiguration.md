---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsLisConfiguration
schema: 2.0.0
---

# Test-CsLisConfiguration

## SYNOPSIS
Tests the Location Information Server (LIS) configuration.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ServerPlatform
```
Test-CsLisConfiguration [-TargetFqdn] <String> [-UserSipAddress <String>] [-BssId <String>]
 [-ChassisId <String>] [-External] [-Mac <String>] [-PortId <String>] [-PortIdSubType <PortIDSubType>]
 [-RegistrarPort <Int32>] [-Subnet <String>] [-Force] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsLisConfiguration [[-TargetFqdn] <String>] -UserCredential <PSCredential> -UserSipAddress <String>
 [-BssId <String>] [-ChassisId <String>] [-External] [-Mac <String>] [-PortId <String>]
 [-PortIdSubType <PortIDSubType>] [-RegistrarPort <Int32>] [-Subnet <String>] [-Force]
 [-OutVerboseVariable <String>] [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>]
 [<CommonParameters>]
```

### TargetUri
```
Test-CsLisConfiguration -TargetUri <String> -UserSipAddress <String> [-BssId <String>] [-ChassisId <String>]
 [-Mac <String>] [-PortId <String>] [-PortIdSubType <PortIDSubType>] [-Subnet <String>]
 [-WebCredential <PSCredential>] [-Force] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet determines whether the Location Information Server (LIS) web service can be contacted based on the information in the supplied parameters.
If the web service can be contacted and a location is found that corresponds to any of the supplied parameters, the test is considered to have passed and the location will be displayed.
Even if the location is not found, if the web service can be contacted the test will return a pass, but with no location information.
In addition, if you call this cmdlet without supplying any of the optional parameters, the test will still pass as long as the web service can be contacted; however, again, no location information will be returned.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsLisConfiguration -TargetFqdn atl-cs-001.litwareinc.com -Subnet 192.168.0.0
```

This example tests the LIS configuration at the FQDN atl-cs-001.litwareinc.com.
The test will be successful if a connection can be made with the current user credentials to the LIS web service at that FQDN.
If a location can be found that maps to the subnet IP address 192.168.0.0, then that location address will be returned.

For this command to succeed, a health monitoring configuration containing synthetic transaction users must exist.
To see if a health monitoring configuration exists, run the `Get-CsHealthMonitoringConfiguration` cmdlet.
To create a new health monitoring configuration, run the `New-CsHealthMonitoringConfiguration` cmdlet.


### -------------------------- Example 2 --------------------------
```
Test-CsLisConfiguration -TargetFqdn atl-cs-001.litwareinc.com -Subnet 192.168.0.0 -UserSipAddress sip:kmyer@litwareinc.com
```

This example is identical to Example 1 but with the addition of the UserSipAddress parameter.
Use this command when no synthetic transaction users have been set up, but where the computer on which the command is running has a server certificate.


### -------------------------- Example 3 --------------------------
```
$cred = Get-Credential

Test-CsLisConfiguration -TargetFqdn atl-cs-001.litwareinc.com -Subnet 192.168.0.0 -UserSipAddress sip:kmyer@litwareinc.com -UserCredential $cred
```

The first line of this example calls a Windows PowerShell cmdlet, the `Get-Credential` cmdlet, which prompts the user for a user ID and password.
This information is stored in an encrypted fashion in the variable $cred.

The second line is identical to the command in Example 2 but with the addition of the UserSipAddress parameter.
Use this command when no synthetic transaction users have been set up, and where the computer on which the command is running does not have a server certificate.


### -------------------------- Example 4 --------------------------
```
$cred = Get-Credential

Test-CsLisConfiguration -TargetUri https://atl-cs-001.litwareinc.com/locationinformation/lisservice.svc -UserSipAddress sip:kmyer@litwareinc.com -WebCredential $cred -Subnet 192.168.0.0 -Mac 0A-23-00-00-00-AA -PortId 4500 -ChassisId 0A-23-00-00-00-AA
```

The first line of this example calls the `Get-Credential` cmdlet, which prompts the user for a user ID and password.
This information is stored in an encrypted fashion in the variable $cred.

Line 2 tests the LIS configuration by making a call to the web service URI (https://atl-cs-001.litwareinc.com/locationinformation/lisservice.svc) based on the SIP address of the remote user (sip:kmyer@litwareinc.com), and using the credentials we obtained in line 1 by passing them to the WebCredential parameter.
The test will be successful if a connection can be made with the given user credentials to the LIS web service at that URI.
If a location can be found that maps to the subnet IP address 192.168.0.0, the MAC address 0A-23-00-00-00-AA or the Port ID 4500 and ChassisId 0A-23-00-00-00-AA, that location address will be returned.

Use this command when the computer on which the command is running does not have a server certificate.


### -------------------------- Example 5 --------------------------
```
Test-CsLisConfiguration -TargetUri https://atl-cs-001.litwareinc.com/locationinformation/lisservice.svc -UserSipAddress sip:kmyer@litwareinc.com -Subnet 192.168.0.0 -Mac 0A-23-00-00-00-AA -PortId 4500 -ChassisId 0A-23-00-00-00-AA
```

This example is identical to Example 4, except that the command does not use the WebCredential parameter (and therefore also does not call the `Get-Credential` cmdlet).
Use this command when the computer on which the command is running has a server certificate.


## PARAMETERS

### -TargetFqdn
The fully qualified domain name (FQDN) (in the form server.litwareinc.com) of the server against which you want to run the test.

This parameter is required unless you specify the TargetUri parameter, in which case you cannot specify a TargetFqdn.

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

### -TargetUri
The Uniform Resource Identifier (URI) of the Location Information service.
You can retrieve the URI of the Location Information service by running the following command: `Get-CsService -WebServer | Select-Object LisServiceInternalUri`

If you specify a value for this parameter, the UserSipAddress parameter is also required.
If the computer you are running the command on does not have a server certificate, you must also specify a value for the WebCredential parameter.

This parameter is required unless you specify the TargetFqdn parameter.


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

### -UserCredential
An object containing user credentials for accessing the Location Information service.
This object can be retrieved by calling the `Get-Credential` cmdlet and supplying the appropriate credentials.

This parameter is required if the TargetFqdn and UserSipAddress parameters are specified, and if the computer from which you're running the cmdlet does not have a server certificate.

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
The SIP address of a remote user.

If you specify a value for this parameter, the TargetFqdn or TargetUri parameter is also required.

This parameter is required when you specify the TargetFqdn parameter only if you have not set up synthetic transactions users.
To see if synthetic transaction users have been set up, run the `Get-CsHealthMonitoringConfiguration` cmdlet.

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

### -BssId
The Basic Service Set Identifier (BSSID) of a wireless access point.
This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases: b
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChassisId
The Media Access Control (MAC) address of a network switch.
This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab, or an IP address.

```yaml
Type: String
Parameter Sets: (All)
Aliases: c
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -External
This parameter is not supported for Location Information Server.

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

### -Mac
The MAC address of the port switch.
This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases: m
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PortId
The ID of the port associated with the location to test.
This can also contain a MAC address or IP address.

```yaml
Type: String
Parameter Sets: (All)
Aliases: p
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PortIdSubType
The subtype of the port.
This value can be entered as a numeric value or a string, but it must be a valid subtype.
Valid subtypes are:

1: InterfaceAlias

5: InterfaceName

7: LocallyAssigned

```yaml
Type: PortIDSubType
Parameter Sets: (All)
Aliases: ps
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPort
The port number of the Registrar service.

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

### -Subnet
The IP address of a subnet.
This value should be entered as an IPv4 address (digits separated by periods, such as 192.0.2.0).

```yaml
Type: String
Parameter Sets: (All)
Aliases: s
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebCredential
An object containing user credentials for accessing the Location Information service.
This object can be retrieved by calling the `Get-Credential` cmdlet and supplying the appropriate credentials.

This parameter is required if the TargetUri and UserSipAddress parameters are specified, and the computer on which the command is run does not have a server certificate.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

`-OutVerboseVariable TestOutput`

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
The `Test-CsLisConfiguration` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Debug-CsLisConfiguration](Debug-CsLisConfiguration.md)

[Publish-CsLisConfiguration](Publish-CsLisConfiguration.md)

[Unpublish-CsLisConfiguration](Unpublish-CsLisConfiguration.md)

[Import-CsLisConfiguration](Import-CsLisConfiguration.md)

[Export-CsLisConfiguration](Export-CsLisConfiguration.md)
