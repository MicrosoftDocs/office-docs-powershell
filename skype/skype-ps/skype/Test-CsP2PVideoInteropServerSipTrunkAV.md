---
external help file: 
applicable: Skype for Business Server 2015
title: Test-CsP2PVideoInteropServerSipTrunkAV
schema: 2.0.0
---

# Test-CsP2PVideoInteropServerSipTrunkAV

## SYNOPSIS
Use the `Test-CsP2PVideoInteropServerSipTrunkAV` cmdlet to test the ability of a video gateway to conduct a peer-to-peer audio/video (A/V) call to a Skype for Business user via a Video Interop Server (VIS) pool.

## SYNTAX

### ServerPlatform
```
Test-CsP2PVideoInteropServerSipTrunkAV [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>]
 [-Force] [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-RegistrarPort <Int32>]
 [-UserSipAddress <String>] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsP2PVideoInteropServerSipTrunkAV [[-TargetFqdn] <String>] -UserCredential <PSCredential>
 [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-RegistrarPort <Int32>] -UserSipAddress <String> [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsP2PVideoInteropServerSipTrunkAV` cmdlet is an example of a Skype for Business Server "synthetic transaction." Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as System Center Operations Manager.

Synthetic transactions can be run against a pool, or specific users.

Administrators will generally use the `CsHealthMonitoringConfiguration` cmdlets to set up test users for each of their Registrar pools.
The test users are pre-configured for use with synthetic transactions.
With test users configured for a pool, administrators can run a synthetic transaction against that pool without having to provide specific users and credentials.

Administrators can also run a synthetic transaction using actual Skype for Business user accounts.
For example, if one user is reporting audio or video issues, you could use the `Test-CsP2PVideoInteropServerSipTrunkAV` cmdlet to test that user's connection to the VIS pool and that connection's support of audio and video streams.
The cmdlet accepts one actual user per run.
If you test VIS using actual user accounts you need to supply the logon names and passwords for each user via a credential object created by the `Get-Credential` cmdlet.
See Example 1 for more information.

Cmdlet pre-requisites

The following are pre-requisites for running the `Test-CsP2PVideoInteropServerSipTrunkAV` cmdlet.

\<WatcherNode Fqdn="watchernode.contoso.com" Port="5555" CertThumbPrint="80182fdbb901ef061b57bf65e5a0907ff876e02e" /\>

\</VISPools\>

Configure the VIS Pools to trust the watcher node by using the `New-CsVideoInteropServerSyntheticTransactionConfiguration` or `Set-CsVideoInteropServerSyntheticTransactionConfiguration` cmdlets.
Please see the Related Topics section for more information

When you call `Test-CsCsP2PVideoInteropServerSipTrunkAV` the cmdlet will first attempt to log the synthetic or actual user on to Skype for Business Server.
Assuming that the logon succeeds, the cmdlet will simulate a video gateway and attempt to call the test user over the Video Trunk setup with the VIS Pool specified in the configuration file.
The `Test-CsP2PVideoInteropServerSipTrunkAV` cmdlet verifies the connection by making an audio-video call to the test user via the target VIS pool.
That call also transmits audio-video streams across the network to determine whether media can be sent over the connection.
The call is answered by the cmdlet itself, and no manual termination of the call is necessary (no one needs to answer or hang up the call.)

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$cred1 = Get-Credential "contoso\user1"

Test-CsP2PVideoInteropServerSipTrunkAV -UserSipAddress "sip:user1@contoso.com" -UserCredential $cred1 -TargetFqdn "atl-cs-001.contoso.com"
```

This example creates a credential variable and passes the credential and SIP address of a specific user for testing against the "atl-cs-001.contoso.com" VIS pool.


## PARAMETERS

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: t
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCredential
User credentials object for the account to be tested.
The value passed to UserCredential must be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credential object for the user litwareinc\kenmyer and stores that object in a variable named `$x: $x = Get-Credential "litwareinc\kenmyer"`.
You need to supply the user password when running `Get-Credential`.

This parameter is not required if you are conducting the test under the health monitoring configuration settings for the pool.

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: uc
Applicable: Skype for Business Server 2015

Required: True
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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutLoggerVariable
When present, the transaction log for the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

`-OutLoggerVariable TestOutput`

Do not prepend a $ character when specifying the variable name.

To save the information stored in the logger variable to an HTML file, use a command similar to this:

`$TestOutput.ToHTML() \> C:\Logs\TestOutput.html`

To save the information stored in the logger variable to an XML file, use a command similar to this:

`$TestOutput.ToXML() \> C:\Logs\TestOutput.xml`

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address for user account to be tested; for example: `-UserSipAddress "sip:kenmyer@contoso.com"`.

The UserSipAddress parameter must reference the same user account as UserCredential.
This parameter is not required if you are conducting the test under the health monitoring configuration settings for the pool.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ua
Applicable: Skype for Business Server 2015

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
Applicable: Skype for Business Server 2015

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
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS

[Get-CsVideoInteropServerSyntheticTransactionConfiguration]()

[Set-CsVideoInteropServerSyntheticTransactionConfiguration]()

[New-CsVideoInteropServerSyntheticTransactionConfiguration]()

[Remove-CsVideoInteropServerSyntheticTransactionConfiguration]()
