---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUser

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about all the users in your organization who have been enabled for Microsoft Lync Server 2010 or a previous version of the software (such as Microsoft Office Communications Server 2007 R2).

**Below Content Applies To:** Lync Server 2013

Returns information about all the users in your organization who have been enabled for Lync Server or a previous version of the software (such as Microsoft Office Communications Server 2007 R2).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

Used together, the cmdlets Get-CsAdUser and Get-CsUser enable you to return detailed information about all of your Active Directory user accounts.
Get-CsAdUser returns information about all your user accounts, including users who have been enabled for Lync Server 2010 or Office Communications Server and users who have not been enabled for Lync Server or Office Communications Server.
This differs from Get-CsUser, which returns information only for users whose accounts have been enabled for Lync Server or Office Communications Server.

Although there is some overlap between the two, Get-CsUser and Get-CsAdUser differ in the type of information they return.
In general, Get-CsUser returns values for Active Directory attributes specifically related to Lync Server.
For example, Get-CsUser returns information such as the Lync Server policies that have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and details about whether the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Lync Server.

By contrast, Get-CsAdUser returns generic Active Directory attribute values: attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Lync Server.
For example, Get-CsAdUser returns information such as the department and organization the user works for in addition to the user's job title, and the user's telephone number and office address.

To see a complete list of the attribute values returned by Get-CsUser, type this command at the Windows PowerShell command prompt:

Get-CsUser | Get-Member

Get-CsUser provides numerous ways for you to filter the collection of users actually returned when you run the cmdlet.
For example, if you don't want to return all your Lync Server user accounts you can apply the optional parameters Filter or LDAPFilter.
(These parameters are mutually exclusive: if you use Filter in a command you cannot use LDAPFilter in that same command, and vice-versa.) The Filter parameter enables you to limit the returned data to users who meet the specified Lync Server criteria; for example, you might decide to return only users with accounts on the specified Registrar pool, or only users who have been enabled for Enterprise Voice.
The LDAPFilter parameter enables you to limit the returned data to users who fit other Active Directory-based criteria; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUser cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsUser\b"}

**Below Content Applies To:** Lync Server 2013

Used together, the cmdlets Get-CsAdUser and Get-CsUser enable you to return detailed information about all of your Active Directory user accounts.
Get-CsAdUser returns information about all your user accounts, including users who have been enabled for Lync Server or Office Communications Server and users who have not been enabled for Lync Server or Office Communications Server.
This differs from Get-CsUser, which returns information only for users whose accounts have been enabled for Lync Server or Office Communications Server.

Although there is some overlap between the two, Get-CsUser and Get-CsAdUser differ in the type of information they return.
In general, Get-CsUser returns values for Active Directory attributes specifically related to Lync Server.
For example, Get-CsUser returns information such as the Lync Server policies that have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and details about whether the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Lync Server.

By contrast, Get-CsAdUser returns generic Active Directory attribute values: attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Lync Server.
For example, Get-CsAdUser returns information such as the department and organization the user works for in addition to the user's job title, and the user's telephone number and office address.

To see a complete list of the attribute values returned by Get-CsUser, type this command at the Windows PowerShell command prompt:

Get-CsUser | Get-Member

Get-CsUser provides numerous ways for you to filter the collection of users actually returned when you run the cmdlet.
For example, if you don't want to return all your Lync Server user accounts you can apply the optional parameters Filter or LdapFilter.
(These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice-versa.) The Filter parameter enables you to limit the returned data to users who meet the specified Lync Server criteria; for example, you might decide to return only users with accounts on the specified Registrar pool, or only users who have been enabled for Enterprise Voice.
The LdapFilter parameter enables you to limit the returned data to users who fit other Active Directory-based criteria; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUser cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUser\b"}

**Below Content Applies To:** Skype for Business Server 2015

Used together, the Get-CsAdUser cmdlet and the Get-CsUser cmdlet enable you to return detailed information about all of your Active Directory user accounts.
The Get-CsAdUser cmdlet returns information about all your user accounts, including users who have been enabled for Skype for Business Server 2015 and users who have not been enabled for Skype for Business Server 2015.
This differs from the Get-CsUser cmdlet, which returns information only for users whose accounts have been enabled for Skype for Business Server 2015.

Although there is some overlap between the two, the Get-CsUser cmdlet and the Get-CsAdUser cmdlet differ in the type of information they return.
In general, the Get-CsUser cmdlet returns values for Active Directory attributes specifically related to Skype for Business Server 2015.
For example, the Get-CsUser cmdlet returns information such as the Skype for Business Server 2015 policies that have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and details about whether the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Skype for Business Server 2015.

By contrast, the Get-CsAdUser cmdlet returns generic Active Directory attribute values: attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Skype for Business Server 2015.
For example, the Get-CsAdUser cmdlet returns information such as the department and organization the user works for in addition to the user's job title, and the user's telephone number and office address.

To see a complete list of the attribute values returned by the Get-CsUser cmdlet, type this command at the Windows PowerShell command prompt:

Get-CsUser | Get-Member

The Get-CsUser cmdlet provides numerous ways for you to filter the collection of users actually returned when you run the cmdlet.
For example, if you don't want to return all your Skype for Business Server 2015 user accounts you can apply the optional parameters Filter or LdapFilter.
(These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice-versa.) The Filter parameter enables you to limit the returned data to users who meet the specified Skype for Business Server 2015 criteria; for example, you might decide to return only users with accounts on the specified Registrar pool, or only users who have been enabled for Enterprise Voice.
The LdapFilter parameter enables you to limit the returned data to users who fit other Active Directory-based criteria; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsUser
```

In the preceding example, Get-CsUser is called without any parameters in order to return a collection of all the domain users who have been enabled for Lync Server or Office Communications Server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In the preceding example, Get-CsUser is called without any parameters in order to return a collection of all the domain users who have been enabled for Lync Server or Office Communications Server.

Get-CsUser

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In the preceding example, the Get-CsUser cmdlet is called without any parameters in order to return a collection of all the domain users who have been enabled for Skype for Business Server 2015.

Get-CsUser

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUser | Format-Table -Property DisplayName, SipAddress, EnterpriseVoiceEnabled -AutoSize
```

In Example 2, Get-CsUser returns a collection of all the domain users who have been enabled for Lync Server or Office Communications Server.
By default, Get-CsUser returns a very large number of properties and property values, many of which will be of minimal interest in a given situation.
Therefore, in this example the retrieved data is piped to the Format-Table cmdlet.
Format-Table then uses the Property parameter to select the properties DisplayName, SipAddress, and EnterpriseVoiceEnabled, and display those properties and their values in a table.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, Get-CsUser returns a collection of all the domain users who have been enabled for Lync Server or Office Communications Server.
By default, Get-CsUser returns a very large number of properties and property values, many of which will be of minimal interest in a given situation.
Therefore, in this example the retrieved data is piped to the Format-Table cmdlet.
Format-Table then uses the Property parameter to select the properties DisplayName, SipAddress, and EnterpriseVoiceEnabled, and display those properties and their values in a table.

Get-CsUser | Format-Table -Property DisplayName, SipAddress, EnterpriseVoiceEnabled -AutoSize

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Get-CsUser cmdlet returns a collection of all the domain users who have been enabled for Skype for Business Server 2015.
By default, the Get-CsUser cmdlet returns a very large number of properties and property values, many of which will be of minimal interest in a given situation.
Therefore, in this example the retrieved data is piped to the Format-Table cmdlet.
The Format-Table cmdlet then uses the Property parameter to select the properties DisplayName, SipAddress, and EnterpriseVoiceEnabled, and display those properties and their values in a table.

Get-CsUser | Format-Table -Property DisplayName, SipAddress, EnterpriseVoiceEnabled -AutoSize

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUser -Identity "Pilar Ackerman"
```

In Example 3, the Identity parameter is used to limit the returned data to the user account with the Identity (in this case, the display name) Pilar Ackerman.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Identity parameter is used to limit the returned data to the user account with the Identity (in this case, the display name) Pilar Ackerman.

Get-CsUser -Identity "Pilar Ackerman"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Identity parameter is used to limit the returned data to the user account with the Identity (in this case, the display name) Pilar Ackerman.

Get-CsUser -Identity "Pilar Ackerman"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUser -Identity "Pilar*"
```

In Example 4, the wildcard character (*) is used when specifying the user's Identity.
That causes Get-CsUser to return all the users who have an Identity that begins with the string value "Pilar".

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the wildcard character (*) is used when specifying the user's Identity.
That causes Get-CsUser to return all the users who have an Identity that begins with the string value "Pilar".

Get-CsUser -Identity "Pilar*"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the wildcard character (*) is used when specifying the user's Identity.
That causes the Get-CsUser cmdlet to return all the users who have an Identity that begins with the string value "Pilar".

Get-CsUser -Identity "Pilar*"

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsUser -Filter {VoicePolicy -eq $Null}
```

The command shown in Example 5 returns a collection of users who do not have a per-user voice policy assigned to them.
To do this, the command uses the Filter parameter followed by the filter VoicePolicy -eq "$Null.
When constructing filters for use with Get-CsUser, you need to specify the property name (VoicePolicy) followed by the comparison operator (in this case,  "eq", the comparison operator that means " equal to").
Immediately following the comparison operator is the value you are testing for.
In this example that value is $Null, a Windows PowerShell variable that represents a null value.

To return a collection of users who do have a voice policy assigned to them, use this command:

Get-CsUser -Filter {VoicePolicy -ne $Null}

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns a collection of users who do not have a per-user voice policy assigned to them.
To do this, the command uses the Filter parameter followed by the filter VoicePolicy -eq "$Null.
When constructing filters for use with Get-CsUser, you need to specify the property name (VoicePolicy) followed by the comparison operator (in this case, "eq", the comparison operator that means " equal to").
Immediately following the comparison operator is the value you are testing for.
In this example that value is $Null, a Windows PowerShell variable that represents a null value.

To return a collection of users who do have a voice policy assigned to them, use this command:

Get-CsUser -Filter {VoicePolicy -ne $Null}

Get-CsUser -Filter {VoicePolicy -eq $Null}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns a collection of users who do not have a per-user voice policy assigned to them.
To do this, the command uses the Filter parameter followed by the filter VoicePolicy -eq "$Null.
When constructing filters for use with the Get-CsUser cmdlet, you need to specify the property name (VoicePolicy) followed by the comparison operator (in this case, "eq", the comparison operator that means " equal to").
Immediately following the comparison operator is the value you are testing for.
In this example that value is $Null, a Windows PowerShell command-line interface variable that represents a null value.

To return a collection of users who do have a voice policy assigned to them, use this command:

Get-CsUser -Filter {VoicePolicy -ne $Null}

Get-CsUser -Filter {VoicePolicy -eq $Null}

### -------------------------- Example 6 -------------------------- (Lync Server 2010)
```
Get-CsUser -LDAPFilter "Department=Finance"
```

The preceding command uses the LDAPFilter parameter to limit the returned data to users who work in the Finance department.
This is done by using the LDAP filter value "Department=Finance".

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 uses the LdapFilter parameter to limit the returned data to users who work in the Finance department.
This is done by using the LDAP filter value "Department=Finance".

Get-CsUser -LdapFilter "Department=Finance"

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 uses the LdapFilter parameter to limit the returned data to users who work in the Finance department.
This is done by using the LDAP filter value "Department=Finance".

Get-CsUser -LdapFilter "Department=Finance"

### -------------------------- Example 7 -------------------------- (Lync Server 2010)
```
Get-CsUser -LDAPFilter "&(Department=Finance)(Title=Manager)"
```

Example 7 demonstrates the use of an AND query in conjunction with the LDAPFilter parameter.
This query (which uses the ampersand character "&" to indicate an AND query) specifies two conditions: "Department=Finance" and "Title=Manager".
For a user account to be returned by this query, both conditions must be true: a user must work in the Finance department, and he or she must be a Manager.

### -------------------------- EXAMPLE 7 -------------------------- (Lync Server 2013)
```

```

Example 7 demonstrates the use of an AND query in conjunction with the LdapFilter parameter.
This query (which uses the ampersand character "&" to indicate an AND query) specifies two conditions: "Department=Finance" and "Title=Manager".
For a user account to be returned by this query, both conditions must be true: a user must work in the Finance department, and he or she must be a Manager.

Get-CsUser -LdapFilter "&(Department=Finance)(Title=Manager)"

### -------------------------- EXAMPLE 7 -------------------------- (Skype for Business Server 2015)
```

```

Example 7 demonstrates the use of an AND query in conjunction with the LdapFilter parameter.
This query (which uses the ampersand character "&" to indicate an AND query) specifies two conditions: "Department=Finance" and "Title=Manager".
For a user account to be returned by this query, both conditions must be true: a user must work in the Finance department, and he or she must be a Manager.

Get-CsUser -LdapFilter "&(Department=Finance)(Title=Manager)"

### -------------------------- Example 8 -------------------------- (Lync Server 2010)
```
Get-CsUser -LdapFilter "|(Title=Supervisor)(Title=Manager)"
```

In the command shown in Example 8, an OR query (indicated by the pipe symbol "|") is used with the LDAPFilter parameter.
In the AND query shown in Example 7, both conditions had to be true in order for a user account to be returned.
With an OR query, only one condition must be true for the account to be returned.
In this case, a user account will be returned if the user is a Supervisor or if the user is a Manager.

### -------------------------- EXAMPLE 8 -------------------------- (Lync Server 2013)
```

```

In the command shown in Example 8, an OR query (indicated by the pipe symbol "|") is used with the LdapFilter parameter.
In the AND query shown in Example 7, both conditions had to be true in order for a user account to be returned.
With an OR query, only one condition must be true for the account to be returned.
In this case, a user account will be returned if the user is a Supervisor or if the user is a Manager.

Get-CsUser -LdapFilter "|(Title=Supervisor)(Title=Manager)"

### -------------------------- EXAMPLE 8 -------------------------- (Skype for Business Server 2015)
```

```

In the command shown in Example 8, an OR query (indicated by the pipe symbol "|") is used with the LdapFilter parameter.
In the AND query shown in Example 7, both conditions had to be true in order for a user account to be returned.
With an OR query, only one condition must be true for the account to be returned.
In this case, a user account will be returned if the user is a Supervisor or if the user is a Manager.

Get-CsUser -LdapFilter "|(Title=Supervisor)(Title=Manager)"

### -------------------------- Example 9 -------------------------- (Lync Server 2010)
```
Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com"
```

Example 9 returns user account information for all the users with accounts in the Finance OU.

### -------------------------- EXAMPLE 9 -------------------------- (Lync Server 2013)
```

```

Example 9 returns user account information for all the users with accounts in the Finance OU.

Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 9 -------------------------- (Skype for Business Server 2015)
```

```

Example 9 returns user account information for all the users with accounts in the Finance OU.

Get-CsUser -OU "ou=Finance,ou=North America,dc=litwareinc,dc=com"

### -------------------------- Example 10 -------------------------- (Lync Server 2010)
```
Get-CsUser -UnassignedUser
```

The preceding command returns a collection of all the users who have been enabled for Lync Server or Office Communications Server but are not currently assigned to a Registrar pool.

### -------------------------- EXAMPLE 10 -------------------------- (Lync Server 2013)
```

```

Example 10 returns a collection of all the users who have been enabled for Lync Server or Office Communications Server but are not currently assigned to a Registrar pool.

Get-CsUser -UnassignedUser

### -------------------------- EXAMPLE 10 -------------------------- (Skype for Business Server 2015)
```

```

Example 10 returns a collection of all the users who have been enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.

Get-CsUser -UnassignedUser

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to run the Get-CsUser cmdlet under alternate credentials.
This might be required if the account you used to log on to the Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet Help topic.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to run the Get-CsUser cmdlet under alternate credentials.
This might be required if the account you used to log on to the Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
**Below Content Applies To:** Lync Server 2010

Enables you to limit the returned data by filtering on Lync Server-specific attributes.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell  variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



**Below Content Applies To:** Lync Server 2013

Enables you to limit the returned data by filtering on Lync Server-specific attributes.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to limit the returned data by filtering on Skype for Business Server 2015-specific attributes.
For example, you can limit returned data to users who have been assigned a specific voice policy, or users who have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only users who have been enabled for Enterprise Voice would look like this, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

{EnterpriseVoiceEnabled -eq $True}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnOfficeCommunicationServer
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Returns a collection of users homed on a previous version of Lync Server (for example, Office Communications Server 2007 R2).
Users with accounts on the current version of the software will not be returned when you use this parameter.



**Below Content Applies To:** Skype for Business Server 2015

Returns a collection of users homed on Office Communications Server 2007.
Users with accounts on the current version of the software will not be returned when you use this parameter.



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

### -OnLyncServer
**Below Content Applies To:** Lync Server 2010

Returns a collection of users homed on Lync Server 2010.
Users with accounts on previous versions of the software will not be returned when you use this parameter.



**Below Content Applies To:** Lync Server 2013

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to return information about user accounts in a specific organizational unit (OU) or container.
The OU parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable -- users will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example: -OU "OU=Finance,dc=litwareinc,dc=com".
To return user accounts from the Users container, use this syntax: -OU "cn=Users,dc=litwareinc,dc=com".



**Below Content Applies To:** Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LdapFilter
**Below Content Applies To:** Lync Server 2010

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Lync Server).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LDAPFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



**Below Content Applies To:** Lync Server 2013

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Lync Server).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
For example, you can limit returned data to users who work in a specific department, or users who have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnAssignedUser
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to return a collection of all the users who have been enabled for Lync Server but are not currently assigned to a Registrar pool.
Users are not allowed to log on to Lync Server unless they are assigned to a Registrar pool.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to return a collection of all the users who have been enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.
Users are not allowed to log on to Skype for Business Server 2015 unless they are assigned to a Registrar pool.



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

### -UnAssignedUser
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to return a collection of all the users who have been enabled for Lync Server but are not currently assigned to a Registrar pool.
Users are not allowed to log on to Lync Server unless they are assigned to a Registrar pool.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to return a collection of all the users who have been enabled for Skype for Business Server 2015 but are not currently assigned to a Registrar pool.
Users are not allowed to log on to Skype for Business Server 2015 unless they are assigned to a Registrar pool.



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

### -OnModernServer
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: OnLyncServer
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
String.
Get-CsUser accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server 2010.

###  
String.
Get-CsUser accepts a pipelined string value representing the Identity of a user account that has been enabled for Lync Server.

###  
String.
The Get-CsUser cmdlet accepts a pipelined string value representing the Identity of a user account that has been enabled for Skype for Business Server 2015.

## OUTPUTS

###  
Get-CsUser returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

###  
The Get-CsUser cmdlet returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/06f36c53-3a5e-4e79-b4f2-8c1aa7e6bf71(OCS.14).aspx)

[Disable-CsUser]()

[Enable-CsUser]()

[Get-CsAdUser]()

[Move-CsUser]()

[Set-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/06f36c53-3a5e-4e79-b4f2-8c1aa7e6bf71(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/06f36c53-3a5e-4e79-b4f2-8c1aa7e6bf71(OCS.16).aspx)

