---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsAddressBookWebQuery
schema: 2.0.0
---

# Test-CsAddressBookWebQuery

## SYNOPSIS
Tests the ability of a user to search for and return, information from the Address Book by using the Address Book Web Query service.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ServerPlatform
```
Test-CsAddressBookWebQuery [-TargetFqdn] <String> [-TargetSipAddress <String>] [-UserSipAddress <String>]
 [-External] [-RegistrarPort <Int32>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-SkypeSearchQuery <String>]
 [<CommonParameters>]
```

### ClientPlatform
```
Test-CsAddressBookWebQuery [[-TargetFqdn] <String>] [-TargetSipAddress <String>] -UserCredential <PSCredential>
 -UserSipAddress <String> [-External] [-RegistrarPort <Int32>] [-Force] [-Verbose]
 [-OutVerboseVariable <String>] [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>]
 [-SkypeSearchQuery <String>] [<CommonParameters>]
```

### TargetUri
```
Test-CsAddressBookWebQuery [-TargetSipAddress <String>] -TargetUri <String> -UserSipAddress <String> [-Force]
 [-Verbose] [-OutVerboseVariable <String>] [-WebCredential <PSCredential>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-SkypeSearchQuery <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsAddressBookWebQuery` cmdlet is an example of a "synthetic transaction". Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Synthetic transactions are typically conducted in two different ways.
Many administrators will use the CsHealthMonitoringConfiguration cmdlets to set up test users for each of their Registrar pools.
These test users are a pair of users who have been preconfigured for use with synthetic transactions.
(Typically these are test accounts and not accounts that belong to actual users.) With test users configured for a pool, administrators can run a synthetic transaction against that pool without having to specify the identities of (and supply the credentials for) the user accounts involved in the test.

Alternatively, administrators can run a synthetic transaction by using actual user accounts.
For example, if two users are unable to exchange instant messages, an administrator could run a synthetic transaction using those two user accounts (as opposed to a pair of test accounts), and then try to diagnose and resolve the problem.
If you decide to conduct a synthetic transaction using actual user accounts, you will need to supply the logon names and passwords for each user.

The `Test-CsAddressBookWebQuery` cmdlet provides a way for administrators to verify that users can use the Address Book Web Query service to search for a specific contact.
When run, the `Test-CsAddressBookWebQuery` cmdlet will first connect to the Web Ticket service in order to be authenticated.
If authentication is successful, the cmdlet will then connect to the Address Book Web Query service and search for the specified contact.
If that contact is found, the cmdlet will attempt to return that information to the local computer.
The test will be marked a success only if all of those steps can be completed.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Test-CsAddressBookWebQuery -TargetFqdn atl-cs-001.litwareinc.com -TargetSipAddress "sip:kenmyer@litwareinc.com"
```

Example 1 tests the Address Book Web Query service for the pool `atl-cs-001.litwareinc.com` by searching for the contact with the SIP Address sip:kenmyer@litwareinc.com.
This command will work only if test users have been defined for the pool `atl-cs-001.litwareinc.com`.
If it has, then the command will run under the credentials of the first test user in the defined for the pool.

If test users have not been defined, then the command will fail.
If you have not defined test users for a pool then you must include the UserSipAddress parameter and the credentials of the user under which the command should be run.


### -------------------------- Example 2 ------------------------
```
$cred1 = Get-Credential "litwareinc\kenmyer"

Test-CsAddressBookWebQuery -TargetFqdn atl-cs-001.litwareinc.com -UserCredential $cred1 -UserSipAddress "sip:kenmyer@litwareinc.com" -TargetSipAddress "sip:kenmyer@litwareinc.com"
```

The commands shown in Example 2 also test the availability of the Address Book Web Query service; in this case, however, the commands are running under the credentials of the user Ken Myer (litwareinc\kenmyer).
To do this, the first command uses the `Get-Credential` cmdlet to create a Windows PowerShell credential object containing the name and password of the user Ken Myer.
(Because the logon name, litwareinc\kenmyer, has been included as a parameter, the Windows PowerShell Credential Request dialog box will only require the administrator to enter the password for the Ken Myer account.) The resulting credential object is then stored in a variable named $cred1.

In the second command, the `Test-CsAddressBookWebQuery` cmdlet is used to test the Address Book Web Query service for the pool `atl-cs-001.litwareinc.com`.
To run this command under Ken Myer's user credentials, the UserCredential parameter is included, along with the parameter value $cred1.
The command also uses the TargetSipAddress to specify that the cmdlet should search the Address Book for the contact with the SIP Address sip:kenmyer@litwareinc.com.


### -------------------------- Example 3 ------------------------
```
Test-CsAddressBookWebQuery -TargetUri https://atl-cs-001.litwareinc.com/groupexpansion -UserSipAddress "sip:packerman@litwareinc.com" -TargetSipAddress "sip:kenmyer@litwareinc.com"
```

Example 3 shows how you can test the Address Book Web Query service for `atl-cs-001.litwareinc.com`.
To do this, the `Test-CsAddressBookWebQuery` cmdlet is called along with three parameters: TargetUri, which specifies the URI of the Address Book Web Query service; UserSipAddress, which contains the Windows PowerShell SIP address of the user account being used in the test and TargetSipAddress, which contains the SIP address of the user account being searched for.


## PARAMETERS

### -TargetFqdn
Fully qualified domain name (FQDN) of the Registrar pool where the Address Book Web Query service is to be tested.
For example: `-TargetFqdn "atl-cs-001.litwareinc.com"`.

Note that you cannot use both the TargetUri parameter and the TargetFqdn parameter in the same command.

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

### -TargetSipAddress
SIP address of the contact expected to be returned by the Address Book Web Query service.
For example: `-TargetSipAddress "sip:kenmyer@litwareinc.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: sip
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
Uniform Resource Identifier (URI) of the Address Book Web Query service.
For example: `-TargetUri "https://atl-cs-001.litwareinc.com/groupexpansion"`.

Note that you cannot use both the TargetUri parameter and the TargetFqdn parameter in the same command.

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
User credential object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named

`$x: $x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

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
SIP address of the user to be used in the test.
If this parameter is not specified then the `Test-CsAddressBookWebQuery` cmdlet will conduct its checks by using health monitoring configuration settings for the pool being tested.


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

### -External
Enables you to verify that external users can use the Address Book Web Query service.

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

### -RegistrarPort
SIP port used by the Registrar service.
This parameter is not required if the Registrar uses the default port 5061.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

This parameter is required if the TargetUri and UserSipAddress parameters are specified and the computer on which the command is run does not have a server certificate.


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

### -SkypeSearchQuery
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: skype
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
The `Test-CsAddressBookWebQuery` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsAddressBookWebQuery` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsAddressBookService](Test-CsAddressBookService.md)

[Update-CsAddressBook](Update-CsAddressBook.md)
