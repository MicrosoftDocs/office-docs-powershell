---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAdUser

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about all the user accounts in Active Directory Domain Services (AD DS).
This includes user accounts that have been enabled for Microsoft Lync Server 2010 as well as accounts that have not been enabled for Lync Server 2010.

Below Content Applies To: Lync Server 2013

Returns information about all the user accounts in Active Directory Domain Services (AD DS).
This includes user accounts that have been enabled for Lync Server as well as accounts that have not been enabled for Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about all the user accounts in Active Directory Domain Services.
This includes user accounts that have been enabled for Skype for Business Server 2015 as well as accounts that have not been enabled for Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsAdUser [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [-LDAPFilter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Get-CsAdUser returns information about all the user accounts in Active Directory, including user accounts that have been enabled for as well as user accounts that have not enabled for Lync Server.
This differs from Get-CsUser, which returns information only for users whose accounts have been enabled for Lync Server or an earlier version of the software (such as Microsoft Office Communications Server 2007 R2).

Although there is some overlap between the cmdlets, Get-CsAdUser and Get-CsUser also differ in the type of information they return.
In general, Get-CsUser returns values for Active Directory attributes specifically related to Lync Server.
For example, Get-CsUser can tell you which Lync Server policies have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and indicate whether or not the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Lync Server.

By contrast, Get-CsAdUser returns generic Active Directory attribute values; that is, it returns information about attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Lync Server.
For example, Get-CsAdUser returns information such as which department and organization the user works for along with the user's job title, telephone number, and office address.
To see a complete list of the attribute values returned by Get-CsAdUser, type this command at the Windows PowerShell prompt:

Get-CsAdUser | Get-Member

Get-CsAdUser provides several ways to filter the collection of users returned when you run the cmdlet.
For example, if you don't want to return all of your Active Directory users accounts, you can apply the optional parameters Filter or LdapFilter.
These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice versa.
The Filter parameter enables you to limit the returned data to users who meet the specified criteria for Lync Server-specific attributes.
For example, you can use the Filter parameter to return a collection of users who either have or have not been enabled for Lync Server.
The LdapFilter parameter enables you to limit the returned data for users who fit other criteria based on generic Active Directory attributes; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAdUser cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsAdUser"}

Below Content Applies To: Lync Server 2013

Get-CsAdUser returns information about all the user accounts in Active Directory, including user accounts that have been enabled for as well as user accounts that have not enabled for Lync Server.
This differs from Get-CsUser, which returns information only for users whose accounts have been enabled for Lync Server or an earlier version of the software (such as Microsoft Office Communications Server 2007 R2).

Although there is some overlap between the cmdlets, Get-CsAdUser and Get-CsUser also differ in the type of information they return.
In general, Get-CsUser returns values for Active Directory attributes specifically related to Lync Server.
For example, Get-CsUser can tell you which Lync Server policies have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and indicate whether or not the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Lync Server.

By contrast, Get-CsAdUser returns generic Active Directory attribute values; that is, it returns information about attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Lync Server.
For example, Get-CsAdUser returns information such as which department and organization the user works for along with the user's job title, telephone number, and office address.
To see a complete list of the attribute values returned by Get-CsAdUser, type this command at the Windows PowerShell prompt:

Get-CsAdUser | Get-Member

Get-CsAdUser provides several ways to filter the collection of users returned when you run the cmdlet.
For example, if you don't want to return all of your Active Directory user accounts, you can apply the optional parameters Filter or LdapFilter.
These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice versa.
The Filter parameter enables you to limit the returned data to users who meet the specified criteria for Lync Server-specific attributes.
For example, you can use the Filter parameter to return a collection of users who either have or have not been enabled for Lync Server.
The LdapFilter parameter enables you to limit the returned data for users who fit other criteria based on generic Active Directory attributes; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.

One important thing to note about the Get-CsAdUser cmdlet is this: although the Enabled attribute, which determines whether or not a user has been enabled for Lync Server, is a Boolean value, this property actually has three valid values:

True.
The user has been enabled for Lync Server

False.
The user has temporarily had their Lync Server account disabled.
This is typically carried out by using the Set-CsUser cmdlet and setting the Enabled parameter to $False.

Null.
The user has not been enabled for Lync Server.

What that means is that, if you want to return a list of users who are not enabled for Lync Server then you must use a command that returns all the users where the Enabled attribute is null:

Get-CsAdUser -Filter {Enabled -eq $Null}

By contrast, the following command returns only those user who have Lync Server accounts that have temporarily been disabled:

Get-CsAdUser -Filter {Enabled -eq $False}

Users who have not been enabled for Lync Server will not be returned when you run the preceding command.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAdUser cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdUser"}

Below Content Applies To: Skype for Business Server 2015

The Get-CsAdUser cmdlet returns information about all the user accounts in Active Directory, including user accounts that have been enabled for as well as user accounts that have not enabled for Skype for Business Server 2015.
This differs from the Get-CsUser cmdlet, which returns information only for users whose accounts have been enabled for Skype for Business Server 2015 or an earlier version of the software.

Although there is some overlap between the cmdlets, the Get-CsAdUser cmdlet and the Get-CsUser cmdlet also differ in the type of information they return.
In general, the Get-CsUser cmdlet returns values for Active Directory attributes specifically related to Skype for Business Server 2015.
For example, the Get-CsUser cmdlet can tell you which Skype for Business Server 2015 policies have been assigned to a user; the line Uniform Resource Identifier (URI) assigned to that user; and indicate whether or not the user has been enabled for Enterprise Voice.
These attributes will not be part of a user account unless that user has been enabled for Skype for Business Server 2015.

By contrast, the Get-CsAdUser cmdlet returns generic Active Directory attribute values; that is, it returns information about attributes that are part of the basic Active Directory user account and are present whether or not a user has been enabled for Skype for Business Server 2015.
For example, the Get-CsAdUser cmdlet returns information such as which department and organization the user works for along with the user's job title, telephone number, and office address.
To see a complete list of the attribute values returned by the Get-CsAdUser cmdlet, type this command at the Windows PowerShell prompt:

Get-CsAdUser | Get-Member

The Get-CsAdUser cmdlet provides several ways to filter the collection of users returned when you run the cmdlet.
For example, if you don't want to return all of your Active Directory user accounts, you can apply the optional parameters Filter or LdapFilter.
These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice versa.
The Filter parameter enables you to limit the returned data to users who meet the specified criteria for Skype for Business Server 2015-specific attributes.
For example, you can use the Filter parameter to return a collection of users who either have or have not been enabled for Skype for Business Server 2015.
The LdapFilter parameter enables you to limit the returned data for users who fit other criteria based on generic Active Directory attributes; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.

One important thing to note about the Get-CsAdUser cmdlet is this: although the Enabled attribute, which determines whether or not a user has been enabled for Skype for Business Server 2015, is a Boolean value, this property actually has three valid values:

True.
The user has been enabled for Skype for Business Server 2015.

False.
The user has temporarily had their Skype for Business Server 2015 account disabled.
This is typically carried out by using the Set-CsUser cmdlet and setting the Enabled parameter to $False.

Null.
The user has not been enabled for Skype for Business Server 2015.

What that means is that, if you want to return a list of users who are not enabled for Skype for Business Server 2015 then you must use a command that returns all the users where the Enabled attribute is null:

Get-CsAdUser -Filter {Enabled -eq $Null}

By contrast, the following command returns only those user who have Skype for Business Server 2015 accounts that have temporarily been disabled:

Get-CsAdUser -Filter {Enabled -eq $False}

Users who have not been enabled for Skype for Business Server 2015 will not be returned when you run the preceding command.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsAdUser
```

The command shown in Example 1 returns a collection of all the user accounts in your Active Directory domain.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the user accounts in your Active Directory domain.

Get-CsAdUser

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the user accounts in your Active Directory domain.

Get-CsAdUser

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsAdUser -Identity "Pilar Ackerman"
```

In Example 2, Get-CsAdUser returns user account information for Pilar Ackerman.
In this example, the user's display name is used to specify her Identity.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, Get-CsAdUser returns user account information for Pilar Ackerman.
In this example, the user's display name is used to specify her Identity.

Get-CsAdUser -Identity "Pilar Ackerman"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Get-CsAdUser cmdlet returns user account information for Pilar Ackerman.
In this example, the user's display name is used to specify her Identity.

Get-CsAdUser -Identity "Pilar Ackerman"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsAdUser -OU "ou=Finance,dc=litwareinc,dc=com"
```

Example 3 returns user account information for all the users in the Finance organizational unit.
To do this, the DN of the OU must be passed to the OU parameter.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns user account information for all the users in the Finance organizational unit.
To do this, the DN of the OU must be passed to the OU parameter.

Get-CsAdUser -OU "ou=Finance,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns user account information for all the users in the Finance organizational unit.
To do this, the DN of the OU must be passed to the OU parameter.

Get-CsAdUser -OU "ou=Finance,dc=litwareinc,dc=com"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsAdUser -Filter {Enabled -ne $True} | Select-Object DisplayName
```

In the preceding command, all the users who have not been enabled for Lync Server 2010 or Office Communications Server are returned.
To do this, the Filter parameter is used with Get-CsAdUser to restrict the returned data to user accounts where the Enabled property is not equal to True.
This filter tells Get-CsAdUser to return only those user accounts that have not been enabled for use with Lync Server or Office Communications Server.
After the data has been retrieved, the information is piped to the Select-Object cmdlet, which then identifies the only property (in this case, DisplayName) that will actually be displayed on the screen.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, all the users who have not been enabled for Lync Server or Office Communications Server are returned.
To do this, the Filter parameter is used with Get-CsAdUser to restrict the returned data to user accounts where the Enabled property is not equal to True.
This filter tells Get-CsAdUser to return only those user accounts that have not been enabled for use with Lync Server or Office Communications Server.
After the data has been retrieved, the information is piped to the Select-Object cmdlet, which then identifies the only property (in this case, DisplayName) that will actually be displayed on the screen.

Get-CsAdUser -Filter {Enabled -ne $True} | Select-Object DisplayName

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, all the users who have not been enabled for Skype for Business Server 2015 are returned.
To do this, the Filter parameter is used with the Get-CsAdUser cmdlet to restrict the returned data to user accounts where the Enabled property is not equal to True.
This filter tells the Get-CsAdUser cmdlet to return only those user accounts that have not been enabled for use with Skype for Business Server 2015.
After the data has been retrieved, the information is piped to the Select-Object cmdlet, which then identifies the only property (in this case, DisplayName) that will actually be displayed on the screen.

Get-CsAdUser -Filter {Enabled -ne $True} | Select-Object DisplayName

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsAdUser -LdapFilter "Department=Finance"
```

In Example 5 the LdapFilter parameter is used to limit the returned data to users who work in the Finance department.
The is done by using the LDAP filter value "Department=Finance".

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5 the LdapFilter parameter is used to limit the returned data to users who work in the Finance department.
The is done by using the LDAP filter value "Department=Finance".

Get-CsAdUser -LdapFilter "Department=Finance"

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5 the LdapFilter parameter is used to limit the returned data to users who work in the Finance department.
This is done by using the LDAP filter value "Department=Finance".

Get-CsAdUser -LdapFilter "Department=Finance"

## PARAMETERS

### -Identity
Indicates the Identity of the user account to be retrieved.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to run the Get-CsAdUser cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential Help topic.



Below Content Applies To: Skype for Business Server 2015

Enables you to run the Get-CsAdUser cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

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
To connect to a particular domain controller, include the DomainController parameter followed by fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com).

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
Below Content Applies To: Lync Server 2010

Enables you to limit the returned data by filtering on attributes specific to Lync Server.

The Filter parameter uses the same Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only users who are not enabled for Lync Server would look like this:  {Enabled -ne $True}, with Enabled representing the Active Directory attribute, -ne representing the comparison operator (not equal to), and $True (a built-in Windows PowerShell variable) representing the value True.



Below Content Applies To: Lync Server 2013

Enables you to limit the returned data by filtering on attributes specific to Lync Server.

The Filter parameter uses the same Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only users who are not enabled for Lync Server would look like this: {Enabled -ne $True}, with Enabled representing the Active Directory attribute, -ne representing the comparison operator (not equal to), and $True (a built-in Windows PowerShell variable) representing the value True.



Below Content Applies To: Skype for Business Server 2015

Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server 2015.

The Filter parameter uses the same Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only users who are not enabled for Skype for Business Server 2015 would look like this: {Enabled -ne $True}, with Enabled representing the Active Directory attribute, -ne representing the comparison operator (not equal to), and $True (a built-in Windows PowerShell variable) representing the value True.



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

### -OU
Enables you to return users from a specific Active Directory organizational unit (OU) or container.
This parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable -- users will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example: OU=Finance,dc=litwareinc,dc=com.
To return users from the Users container, use this syntax: cn=Users,dc=litwareinc,dc=com.

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
For example, to return seven users (regardless of the number of users in your forest) include the ResultSize parameter and set the parameter value to 7.
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

### -LDAPFilter
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Lync Server).
For example, you can limit returned data to users who work in a specific department or users who have a specific manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only users who work in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.



Below Content Applies To: Skype for Business Server 2015

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
For example, you can limit returned data to users who work in a specific department or users who have a specific manager or job title.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
String.
Get-CsAdUser accepts a pipelined string value representing the Identity of an Active Directory user account.

###  
String.
The Get-CsAdUser cmdlet accepts a pipelined string value representing the Identity of an Active Directory user account.

## OUTPUTS

###  
Get-CsAdUser returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.CSADUser object.

###  
The Get-CsAdUser cmdlet returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.CSADUser object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/787f0ccf-3ac3-4a2b-8407-cff5e988b9b4(OCS.14).aspx)

[Get-CsUser]()

[Online Version](http://technet.microsoft.com/EN-US/library/787f0ccf-3ac3-4a2b-8407-cff5e988b9b4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/787f0ccf-3ac3-4a2b-8407-cff5e988b9b4(OCS.16).aspx)

