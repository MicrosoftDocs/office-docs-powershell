---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsUser
schema: 2.0.0
---

# Get-CsUser

## SYNOPSIS
Returns information about all the users in your organization who have been enabled for Skype for Business Server 2015 or a previous version of the software.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsUser [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-OnOfficeCommunicationServer] [-OnLyncServer] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [-LdapFilter <String>]
 [-UnAssignedUser] [-OnModernServer] [<CommonParameters>]
```

## DESCRIPTION
Used together, the Get-CsAdUser cmdlet and the Get-CsUser cmdlet enable you to return detailed information about all of your Active Directory user accounts.
The Get-CsAdUser cmdlet returns information about all your user accounts, including users who have been enabled for Skype for Business Server and users who have not been enabled for Skype for Business Server.
This differs from the Get-CsUser cmdlet, which returns information only for users whose accounts have been enabled for Skype for Business Server.

Although there is some overlap between the two, the Get-CsUser cmdlet and the Get-CsAdUser cmdlet differ in the type of information they return.
In general, the Get-CsUser cmdlet returns values for Active Directory attributes specifically related to Skype for Business Server.
For example, the Get-CsUser cmdlet returns information such as the Skype for Business Server policies that have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and details about whether the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Skype for Business Server.

By contrast, the Get-CsAdUser cmdlet returns generic Active Directory attribute values: attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Skype for Business Server.
For example, the Get-CsAdUser cmdlet returns information such as the department and organization the user works for in addition to the user's job title, and the user's telephone number and office address.

To see a complete list of the attribute values returned by the Get-CsUser cmdlet, type this command at the Windows PowerShell command prompt:

'Get-CsUser | Get-Member'

The Get-CsUser cmdlet provides numerous ways for you to filter the collection of users actually returned when you run the cmdlet.
For example, if you don't want to return all your Skype for Business Server user accounts you can apply the optional parameters Filter or LdapFilter.
(These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice-versa.) The Filter parameter enables you to limit the returned data to users who meet the specified Skype for Business Server criteria; for example, you might decide to return only users with accounts on the specified Registrar pool, or only users who have been enabled for Enterprise Voice.
The LdapFilter parameter enables you to limit the returned data to users who fit other Active Directory-based criteria; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.



## EXAMPLES
### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser
```

In the preceding example, the Get-CsUser cmdlet is called without any parameters in order to return a collection of all the domain users who have been enabled for Skype for Business Server 2015.

### -------------------------- EXAMPLE --------------------------
```
Get-CsUser | Format-Table -Property DisplayName, SipAddress, EnterpriseVoiceEnabled -AutoSize
```

In Example 2, the Get-CsUser cmdlet returns a collection of all the domain users who have been enabled for Skype for Business Server 2015.
By default, the Get-CsUser cmdlet returns a very large number of properties and property values, many of which will be of minimal interest in a given situation.
Therefore, in this example the retrieved data is piped to the Format-Table cmdlet.
The Format-Table cmdlet then uses the Property parameter to select the properties DisplayName, SipAddress, and EnterpriseVoiceEnabled, and display those properties and their values in a table.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -Identity "Pilar Ackerman"
```

In Example 3, the Identity parameter is used to limit the returned data to the user account with the Identity (in this case, the display name) Pilar Ackerman.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -Identity "Pilar*"
```

In Example 4, the wildcard character (*) is used when specifying the user's Identity.
That causes the Get-CsUser cmdlet to return all the users who have an Identity that begins with the string value "Pilar".

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -Filter {VoicePolicy -ne $Null}
```

The command shown in Example 5 returns a collection of users who do not have a per-user voice policy assigned to them.
To do this, the command uses the Filter parameter followed by the filter VoicePolicy -eq "$Null.
When constructing filters for use with the Get-CsUser cmdlet, you need to specify the property name (VoicePolicy) followed by the comparison operator (in this case, "eq", the comparison operator that means " equal to").
Immediately following the comparison operator is the value you are testing for.
In this example that value is $Null, a Windows PowerShell command-line interface variable that represents a null value.

To return a collection of users who do have a voice policy assigned to them, use this command:

Get-CsUser -Filter {VoicePolicy -eq $Null}

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -LdapFilter "Department=Finance"
```

Example 6 uses the LdapFilter parameter to limit the returned data to users who work in the Finance department.
This is done by using the LDAP filter value "Department=Finance".

### -------------------------- EXAMPLE --------------------------
```
Get-CsUser -LdapFilter "&(Department=Finance)(Title=Manager)"
```

Example 7 demonstrates the use of an AND query in conjunction with the LdapFilter parameter.
This query (which uses the ampersand character "&" to indicate an AND query) specifies two conditions: "Department=Finance" and "Title=Manager".
For a user account to be returned by this query, both conditions must be true: a user must work in the Finance department, and he or she must be a Manager.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -LdapFilter "|(Title=Supervisor)(Title=Manager)"
```

In the command shown in Example 8, an OR query (indicated by the pipe symbol "|") is used with the LdapFilter parameter.
In the AND query shown in Example 7, both conditions had to be true in order for a user account to be returned.
With an OR query, only one condition must be true for the account to be returned.
In this case, a user account will be returned if the user is a Supervisor or if the user is a Manager.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com"
```

Example 9 returns user account information for all the users with accounts in the Finance OU.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -UnassignedUser
```

Example 10 returns a collection of all the users who have been enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.

## PARAMETERS

### -Identity
Indicates the Identity of the user account to be retrieved.
User Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Enables you to run the Get-CsUser cmdlet under alternate credentials.
This might be required if the account you used to log on to the Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve user information.
To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on Skype for Business Server 2015-specific attributes.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnOfficeCommunicationServer
Returns a collection of users homed on Office Communications Server 2007.
Users with accounts on the current version of the software will not be returned when you use this parameter.



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

### -OnLyncServer
Returns a collection of users homed on Lync Server.
Users with accounts on previous versions of the software will not be returned when you use this parameter.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Enables you to return information about user accounts in a specific organizational unit (OU) or container.
The OU parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs--AccountsPayable and AccountsReceivable--users will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example: -OU "OU=Finance,dc=litwareinc,dc=com".
To return user accounts from the Users container, use this syntax:

-OU "cn=Users,dc=litwareinc,dc=com"



```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven users (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven users will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three users in your forest, the command will return those three users, and then complete without error.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnAssignedUser
Enables you to return a collection of all the users who have been enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.
Users are not allowed to log on to Skype for Business Server 2015 unless they are assigned to a Registrar pool.



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

### -UnAssignedUser
Enables you to return a collection of all the users who have been enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.
Users are not allowed to log on to Skype for Business Server 2015 unless they are assigned to a Registrar pool.



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

### -OnModernServer
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: OnLyncServer
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
String.
The Get-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server.

## OUTPUTS

###  
The Get-CsUser cmdlet returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Disable-CsUser](Disable-CsUser.md)

[Enable-CsUser](Enable-CsUser.md)

[Get-CsAdUser](Get-CsAdUser.md)

[Move-CsUser](Move-CsUser.md)

[Set-CsUser](Set-CsUser.md)

