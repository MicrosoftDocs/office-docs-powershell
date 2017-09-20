---
external help file: 
applicable: Lync Server 2010
schema: 2.0.0
---

# Test-CsClientAuth

## SYNOPSIS
Determines whether or not a user can log on to Microsoft Lync Server 2010 by using a certificate downloaded from the certificate provisioning service.

## SYNTAX

```
Test-CsClientAuth [[-TargetFqdn] <String>] -UserCredential <PSCredential> -UserSipAddress <String>
 [-RegistrarPort <Int32>] [-TargetUri <String>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Client certificates provide an alternate way for users to be authenticated by Lync Server 2010.
In order to determine whether or not a user can log on to the system by using a client certificate, you can run the `Test-CsClientAuth` cmdlet.
When you run this `Test-CsClientAuth` you must specify the Registrar pool and SIP address of the user account being tested; you must also be able to supply the user's logon name and password.
After calling `Test-CsClientAuth`, the cmdlet will contact the certificate provisioning service and download a copy of any client certificates for the specified user.
If a client certificate can be found and downloaded, `Test-CsClientAuth` will then attempt to log on using that certificate.
If logon succeeds, `Test-CsClientAuth` will log off and report that the test succeeded.

If a certificate cannot be found or downloaded, or if the cmdlet is unable to logon using that certificate, then `Test-CsClientAuth` will report that the test failed.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsClientAuth"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsClientAuth -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1
```

The commands shown in Example 1 test the ability of the user litwareinc\kenmyer to log on to the Registrar pool atl-cs-001.litwareinc.com by using a client certificate.
To carry out this task, the first command in the example uses `Get-Credential` to create credential object for the user in question.
The resulting credential object (which requires you to enter the password for the user) is stored in a variable named $cred1.

The second command then calls `Test-CsClientAuth`, specifying the FQDN of the Registrar pool (TargetFqdn), the user's SIP address (UserSipAddress) and the credential object created in the initial command (UserCredential).

## PARAMETERS

### -UserCredential
User credential object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: uc
Applicable: Lync Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address of the user to be used in the test.
For example: `-UserSipAddress sip:kenmyer@litwareinc.com`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ua
Applicable: Lync Server 2010

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
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
URL of the certificate provisioning service.
If this parameter is not included then the `Test-CsClientAuth` will use the certificate provisioning service configured for the Registrar pool.

```yaml
Type: String
Parameter Sets: (All)
Aliases: tu
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name (FQDN) of the Registrar pool where client authentication is to be tested.
For example: `-TargetFqdn "atl-cs-001.litwareinc.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: t
Applicable: Lync Server 2010

Required: False
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
Applicable: Lync Server 2010

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
{{Fill OutVerboseVariable Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2010

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
`Test-CsClientAuth` returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS
