---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsClientAuthentication

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Determines whether or not a user can log on to Lync Server by using a certificate downloaded from the certificate provisioning service.
This cmdlet was introduced in Lync Server 2013 Preview.
It replaces the Test-CsClientAuth cmdlet used in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Determines whether or not a user can log on to Skype for Business Server 2015 by using a certificate downloaded from the certificate provisioning service.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Test-CsClientAuthentication [[-TargetFqdn] <String>] -UserCredential <PSCredential> -UserSipAddress <String>
 [-Force] [-LiveIdAuthentication] [-OutLoggerVariable <String>] [-OutVerboseVariable <String>]
 [-RegistrarPort <Int32>] [-TargetUri <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Client certificates provide an alternate way for users to be authenticated by Lync Server.
In order to determine whether or not a user can log on to the system by using a client certificate, you can run the Test-CsClientAuthentication cmdlet.
When you run this Test-CsClientAuthentication you must specify the Registrar pool and SIP address of the user account being tested; you must also be able to supply the user's logon name and password.
After calling Test-CsClientAuthentication, the cmdlet will contact the certificate provisioning service and download a copy of any client certificates for the specified user.
If a client certificate can be found and downloaded, Test-CsClientAuthentication will then attempt to log on using that certificate.
If logon succeeds, Test-CsClientAuthentication will log off and report that the test succeeded.

If a certificate cannot be found or downloaded, or if the cmdlet is unable to logon using that certificate, then Test-CsClientAuthentication will report that the test failed.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsClientAuthentication"}

**Below Content Applies To:** Skype for Business Server 2015

Client certificates provide an alternate way for users to be authenticated by Skype for Business Server 2015.
In order to determine whether or not a user can log on to the system by using a client certificate, you can run the Test-CsClientAuthentication cmdlet.
When you run the Test-CsClientAuthentication cmdlet you must specify the Registrar pool and SIP address of the user account being tested; you must also be able to supply the user's logon name and password.
After calling the Test-CsClientAuthentication cmdlet, the cmdlet will contact the certificate provisioning service and download a copy of any client certificates for the specified user.
If a client certificate can be found and downloaded, the Test-CsClientAuthentication cmdlet will then attempt to log on using that certificate.
If logon succeeds, the Test-CsClientAuthentication cmdlet will log off and report that the test succeeded.

If a certificate cannot be found or downloaded, or if the cmdlet is unable to logon using that certificate, then the Test-CsClientAuthentication cmdlet will report that the test failed.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 test the ability of the user litwareinc\kenmyer to log on to the Registrar pool atl-cs-001.litwareinc.com by using a client certificate.
To carry out this task, the first command in the example uses Get-Credential to create credential object for the user in question.
The resulting credential object (which requires you to enter the password for the user) is stored in a variable named $cred1.

The second command then calls Test-CsClientAuthentication, specifying the FQDN of the Registrar pool (TargetFqdn), the user's SIP address (UserSipAddress) and the credential object created in the initial command (UserCredential).

$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsClientAuthentication -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 test the ability of the user litwareinc\kenmyer to log on to the Registrar pool atl-cs-001.litwareinc.com by using a client certificate.
To carry out this task, the first command in the example uses the Get-Credential cmdlet to create credential object for the user in question.
The resulting credential object (which requires you to enter the password for the user) is stored in a variable named $cred1.

The second command then calls the Test-CsClientAuthentication cmdlet, specifying the FQDN of the Registrar pool (TargetFqdn), the user's SIP address (UserSipAddress) and the credential object created in the initial command (UserCredential).

$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsClientAuthentication -TargetFqdn atl-cs-001.litwareinc.com -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $cred1

## PARAMETERS

### -UserCredential
User credential object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the Get-Credential cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

$x = Get-Credential "litwareinc\kenmyer"

You need to supply the user password when running this command.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: uc
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address of the user to be used in the test.
For example: -UserSipAddress sip:kenmyer@litwareinc.com.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ua
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -LiveIdAuthentication
Verifies the ability of the test user to log on using their OrgId (Business LiveId) credentials.

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

-OutLoggerVariable TestOutput

Note: Do not use prepend a $ character when specifying the variable name.To save the information stored in the logger variable to an HTML file, use a command similar to this:

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

### -OutVerboseVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

-OutVerboseVariable TestOutput

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

### -TargetFqdn
Fully qualified domain name (FQDN) of the Registrar pool where client authentication is to be tested.
For example: -TargetFqdn "atl-cs-001.litwareinc.com".

```yaml
Type: String
Parameter Sets: (All)
Aliases: t
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
**Below Content Applies To:** Lync Server 2013

URL of the certificate provisioning service.
If this parameter is not included then the Test-CsClientAuthentication will use the certificate provisioning service configured for the Registrar pool.



**Below Content Applies To:** Skype for Business Server 2015

URL of the certificate provisioning service.
If this parameter is not included then the Test-CsClientAuthentication cmdlet will use the certificate provisioning service configured for the Registrar pool.



```yaml
Type: String
Parameter Sets: (All)
Aliases: tu
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
Test-CsClientAuthentication returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsClientAuthentication cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsWebServiceConfiguration]()

[Test-CsRegistration]()

[Online Version](http://technet.microsoft.com/EN-US/library/6a25b2c6-0cb2-473c-af92-0be5cead8a19(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6a25b2c6-0cb2-473c-af92-0be5cead8a19(OCS.16).aspx)

