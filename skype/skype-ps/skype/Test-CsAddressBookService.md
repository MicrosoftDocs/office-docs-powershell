---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsAddressBookService
schema: 2.0.0
---

# Test-CsAddressBookService

## SYNOPSIS
Tests the ability of a user to access the server that hosts the Address Book Download Web service.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ClientPlatform
```
Test-CsAddressBookService [[-TargetFqdn] <String>] -UserCredential <PSCredential> -UserSipAddress <String>
 [-External] [-RegistrarPort <Int32>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

### ServerPlatform
```
Test-CsAddressBookService [-TargetFqdn] <String> [-UserSipAddress <String>] [-External]
 [-RegistrarPort <Int32>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [<CommonParameters>]
```

### TargetUri
```
Test-CsAddressBookService -UserSipAddress <String> -TargetUri <String> [-Force] [-Verbose]
 [-OutVerboseVariable <String>] [-WebCredential <PSCredential>] [-Authentication <AuthenticationMechanism>]
 [-OutLoggerVariable <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsAddressBookService` cmdlet is an example of a "synthetic transaction". Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction by using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using those two user accounts (as opposed to a pair of test accounts), and then try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts, you will need to supply the logon names and passwords for each user.

The `Test-CsAddressBookService` cmdlet provides a way for you to verify that a user can connect to the Address Book Download Web service.
When run, the `Test-CsAddressBookService` cmdlet connects to the Address Book Download Web service on the specified pool and requests the location of the Address Book files.
If the Address Book Download Web service supplies that location, the test is considered successful.
If the request is denied, then the test is considered a failure.

You can test the Address Book Download Web service in two different ways: by testing the service itself or by testing the associated Web service.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsAddressBookService -TargetFqdn atl-cs-001.litwareinc.com
```

Example 1 tests the Address Book Download Web service for the pool `atl-cs-001.litwareinc.com`.
This command tests the Address Book Download Web service by using test users preconfigured for the pool `atl-cs-001.litwareinc.com`.


### -------------------------- Example 2 --------------------------
```
$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsAddressBookService -TargetFqdn atl-cs-001.litwareinc.com -UserCredential $cred1 -UserSipAddress "sip:kenmyer@litwareinc.com"
```

The commands shown in Example 2 also test the availability of the server that runs the Address Book Download Web service; in this case, however, the commands are running under the credentials for the user Ken Myer (litwareinc\kenmyer).
To do this, the first command uses the `Get-Credential` cmdlet to create a Windows PowerShell credential object containing the name and password of the user Ken Myer.
(Because the logon name -- litwareinc\kenmyer -- has been included as a parameter, the Windows PowerShell Credential Request dialog box only requires the administrator to enter the password for the Ken Myer account.) The resulting credential object is then stored in a variable named $cred1.

In the second command, the `Test-CsAddressBookService` cmdlet is used to test the Address Book Download Web service for the pool `atl-cs-001.litwareinc.com`.
To run this command under Ken Myer's user credentials, the UserCredential parameter is included, along with the parameter value $cred1.
In addition, Ken's SIP address must be supplied using the UserSipAddress parameter.


### -------------------------- Example 3 --------------------------
```
Test-CsAddressBookService -TargetUri https://atl-cs-001.litwareinc.com/abs/handler -UserSipAddress "sip:kenmyer@litwareinc.com"
```

Example 3 shows how you can test the Address Book Download Web service for `atl-cs-001.litwareinc.com`.
To do this, the `Test-CsAddressBookService` cmdlet is called along with two parameters: TargetUri, which specifies the URI of the Address Book Download Web service and UserSipAddress, which contains the Windows PowerShell SIP address for the user account being used in the test.


## PARAMETERS

### -UserCredential
User credential object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

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
SIP address of the user to be used in the test.
If this parameter is not specified then `Test-CsAddressBookService` will conduct its checks by using the account of the logged-in user.

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

### -External
Enables you to verify that external users can use the Address Book Download Web service.

```yaml
Type: SwitchParameter
Parameter Sets: ClientPlatform, ServerPlatform
Aliases: 
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
Parameter Sets: ClientPlatform, ServerPlatform
Aliases: rp
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name (FQDN) of the Registrar pool where the Address Book Download Web service is to be tested.
For example: `-TargetFqdn "atl-cs-001.litwareinc.com"`.

You cannot use both the TargetUri parameter and the TargetFqdn parameter in the same command.

```yaml
Type: String
Parameter Sets: ClientPlatform
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
Uniform Resource Identifier (URI) of the Address Book Web Query service.
For example: `-TargetUri "https://atl-cs-001.litwareinc.com/abs/handler"`.

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

### -WebCredential
An object containing user credentials for accessing the Location Information service.
This object can be retrieved by calling the `Get-Credential` cmdlet and supplying the appropriate credentials.

This parameter is required if the TargetUri and UserSipAddress parameters are specified, and the computer on which the command is run does not have a server certificate.


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

Note: Do not use prepend a $ character when specifying the variable name. To save the information stored in the logger variable to an HTML file, use a command similar to this:

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
The `Test-CsAddressBookService` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsAddressBookService` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsAddressBookWebQuery](Test-CsAddressBookWebQuery.md)

[Update-CsAddressBook](Update-CsAddressBook.md)

