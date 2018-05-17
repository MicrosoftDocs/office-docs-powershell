---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsUnifiedContactStore
schema: 2.0.0
---

# Test-CsUnifiedContactStore

## SYNOPSIS
Verifies whether or not a user's contacts can be accessed through the Unified Contact Store.
The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Outlook, and/or Outlook Web App.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ServerPlatform
```
Test-CsUnifiedContactStore [-TargetFqdn] <String> [-Authentication <AuthenticationMechanism>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [-RegistrarPort <Int32>]
 [-UserSipAddress <String>] [-Setup] [-SetupAndRun] [<CommonParameters>]
```

### ClientPlatform
```
Test-CsUnifiedContactStore [[-TargetFqdn] <String>] -UserCredential <PSCredential>
 [-Authentication <AuthenticationMechanism>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-RegistrarPort <Int32>] -UserSipAddress <String> [-Setup] [-SetupAndRun]
 [<CommonParameters>]
```

## DESCRIPTION
The unified contact store introduced in Lync Server 2013 gives administrators the option of storing a user's contacts in Exchange instead of in Skype for Business Server; in turn that allows the user to access the same set of contacts in Outlook and Outlook Web Access as well as in Skype for Business.
(Alternatively, you can continue to store contacts in Skype for Business Server.
In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web App, and one for use with Skype for Business.)

You can verify whether or not a user's contacts have been moved to the unified contact store by running the `Test-CsUnifiedContactStore` cmdlet.
The `Test-CsUnifiedContactStore` cmdlet will take the specified user account, connect to the unified contact store, and attempt to retrieve a contact for the user.
If no contacts can be retrieved then the command will fail along with the message "No contacts were received for the user.
Verify that contacts exist for the user."

Note that the `Test-CsUnifiedContactStore` cmdlet will fail if the user has successfully migrated to the unified contact store but does not have any contacts on his or her Contacts list.
The specified user must have at least one contact in order for the `Test-CsUnifiedContactStore` cmdlet to complete successfully.

Lync Server Control Panel: The functions carried out by the `Test-csUnifiedContactStore` cmdlet are not available in the Lync Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$credential = Get-Credential "litwareinc\kenmyer"

Test-CsUnifiedContactStore -TargetFqdn "atl-cs-001.litwareinc.com" -UserSipAddress "sip:kenmyer@litwareinc.com" -UserCredential $credential
```

The commands shown in Example 2 verify whether or not contacts for the user litwareinc\kenmyer can be found in the unified contact store.
To do this, the first command in the example uses the `Get-Credential` cmdlet to create a Windows PowerShell command-line interface credentials object for the user litwareinc\kenmyer.
Note that you must supply the password for this account in order to create a valid credentials object and to ensure that the `Test-CsUnifiedContactStore` cmdlet can carry out its check.

The second command in the example uses the supplied credentials object ($x) and the SIP address of the user litwareinc\kenmyer in order to determine whether or not his contacts can be found in the unified contact store.


## PARAMETERS

### -TargetFqdn
Fully qualified domain name (FQDN) of the pool to be tested.


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

### -UserCredential
User credentials object for the user account to be used in the test.
The value passed to UserCredential should be an object reference obtained by using the `Get-Credential` cmdlet.
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You need to supply the user password when running this command.

This parameter is not required if you are running the test by using test users configured via the `CsHealthMonitoringConfiguration` cmdlets

```yaml
Type: PSCredential
Parameter Sets: ClientPlatform
Aliases: uc
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
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
Suppresses the display of any non-fatal error message that might arise when running the command.

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

Note: Do not prepend a $ character when specifying the variable name.

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

### -UserSipAddress
SIP address of the user to be used in the test.
For example:

`-UserSipAddress "sip:kenmyer@litwareinc.com"`

This parameter is not required if you are running the test by using test users configured via the `CsHealthMonitoringConfiguration` cmdlets.

```yaml
Type: String
Parameter Sets: ServerPlatform
Aliases: ua
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Setup
{{Fill Setup Description}}

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

### -SetupAndRun
{{Fill SetupAndRun Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `Test-CsUnifiedContactStore` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsUnifiedContactStore` cmdlet returns instances of the Microsoft.Rtc.SyntheticTransactions.WebTaskOutput object.

## NOTES

## RELATED LINKS

[New-CsUserServicesPolicy](New-CsUserServicesPolicy.md)

[Set-CsUserServicesPolicy](Set-CsUserServicesPolicy.md)

