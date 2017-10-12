---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsGroupExpansion
schema: 2.0.0
---

# Test-CsGroupExpansion

## SYNOPSIS
Tests the ability of a user to employ group expansion.
Skype for Business Server enables users to configure an Active Directory distribution group as a contact.
When you "expand" a group you will see the name and presence information for each member of the group.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ServerPlatform
```
Test-CsGroupExpansion [-TargetFqdn] <String> -GroupEmailAddress <String> [-External] [-RegistrarPort <Int32>]
 [-UserSipAddress <String>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-DomainController <String>]
 [<CommonParameters>]
```

### ClientPlatform
```
Test-CsGroupExpansion [[-TargetFqdn] <String>] -GroupEmailAddress <String> [-External] [-RegistrarPort <Int32>]
 -UserCredential <PSCredential> -UserSipAddress <String> [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-DomainController <String>]
 [<CommonParameters>]
```

### TargetUri
```
Test-CsGroupExpansion -GroupEmailAddress <String> -TargetUri <String> -UserSipAddress <String> [-Force]
 [-Verbose] [-OutVerboseVariable <String>] [-WebCredential <PSCredential>]
 [-Authentication <AuthenticationMechanism>] [-OutLoggerVariable <String>] [-DomainController <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Users sometimes need to communicate on a regular basis with all the members of an Active Directory distribution group; for example, that group might comprise all the members of a team or all the people assigned to a particular project.
In recognition of this, Skype for Business Server allows you to configure a distribution group as a contact.
If you do this, you can then send the same instant message to all the group members simply by addressing the message to the group rather than each individual member of that group.

There might also be times when you need to communicate with (or check the presence of) certain individuals in the group.
Group expansion enables you to quickly and easily view all the group members and their current status.
In addition to that, you can also select one or more group members, and then send an instant message just to those users rather than to all the members of the group.

Group expansion is enabled and disabled by using the `Set-CsWebServiceConfiguration` cmdlet.
If group expansion is enabled, you can determine whether the feature is working by running the `Test-CsGroupExpansion` cmdlet.
With this cmdlet, you specify an Active Directory distribution group by using the group's email address.
The `Test-CsGroupExpansion` cmdlet then uses group expansion to retrieve the group membership and compare the retrieved list with the membership of the group email address that you supplied.
If the two lists match, then group expansion is working correctly.

Note that you can test group expansion in two different ways: by testing the service itself or by testing the associated web service.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsGroupExpansion -TargetFqdn atl-cs-001.litwareinc.com -GroupEmailAddress FinanceGroup@litwareinc.com
```

The command shown in Example 1 connects to the Registrar pool atl-cs-001.litwareinc.com in order to verify group expansion.
To run the test, the command uses the group FinanceGroup@litwareinc.com.


## PARAMETERS

### -GroupEmailAddress
Email address of the targeted distribution group.
For example: `-GroupEmailAddress "FinanceGroup@litwareinc.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: g
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -External
Enables you to verify that external users can use group expansion.

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

### -TargetFqdn
Fully qualified domain name (FQDN) of the Registrar pool where group expansion is to be tested.
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

### -TargetUri
Uniform Resource Identifier (URI) of the Group Expansion Web service.
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
For example, this code returns a credentials object for the user litwareinc\kenmyer and stores that object in a variable named $x:

`$x = Get-Credential "litwareinc\kenmyer"`

You will need to supply the user password when running this command.

The user credential is not required if you are running the test under the credentials of the logged-on user and using the TargetFqdn parameter.
The user credential is required if you are using the TargetUri parameter.

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
If this parameter is not specified, then the `Test-CsGroupExpansion` cmdlet will conduct its checks using the account of the logged-on user.


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

### -DomainController
Enables you to connect to the specified domain controller in order to test group expansion.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases: DC
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
The `Test-CsGroupExpansion` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsGroupExpansion` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsAddressBookService](Test-CsAddressBookService.md)

[Test-CsAddressBookWebQuery](Test-CsAddressBookWebQuery.md)
