---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsClientPinInfo

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves information about the personal identification number (PIN) assigned to a user.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves information about the personal identification number (PIN) assigned to a user.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsClientPinInfo [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Lync Server 2010 enables users to connect to the system or to join public switched telephone network (PSTN) conferences by using a telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password.
However, entering a user name and password can be an issue if you are using a phone that does not have an alphanumeric keypad.
Because of that, Lync Server 2010 enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Administrators can retrieve the PIN settings for a user, or a group of users, by running the Get-CsClientPinInfo cmdlet.
Note that there is no way for an administrator to retrieve the PIN that has been assigned to a user.
If a user forgets his or her PIN, that user will not be able to use PIN authentication to access the system until an administrator has assigned them a new PIN or the user has obtained a new PIN from the Dial-In Conferencing Web page.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Lync Server 2010.
That means that you will not be able to run Get-CsClientPinInfo from a remote instance of Windows PowerShell; that's because your command will not be able to traverse the firewall and access the SQL Server Express database.
(However, you can still run the cmdlet locally on  Standard Edition server.) To run Get-CsClientPinInfo remotely against a Standard Edition server you will need to manually enable the firewall exceptions for SQL Server Express.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsClientPinInfo cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsClientPinInfo"}

Below Content Applies To: Lync Server 2013

Lync Server enables users to connect to the system or to join public switched telephone network (PSTN) conferences by using a telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password.
However, entering a user name and password can be an issue if you are using a phone that does not have an alphanumeric keypad.
Because of that, Lync Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Administrators can retrieve the PIN settings for a user, or a group of users, by running the Get-CsClientPinInfo cmdlet.
Note that there is no way for an administrator to retrieve the PIN that has been assigned to a user.
If a user forgets his or her PIN, that user will not be able to use PIN authentication to access the system until an administrator has assigned them a new PIN or the user has obtained a new PIN from the Dial-In Conferencing webpage.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Lync Server.
That means that you will not be able to run Get-CsClientPinInfo from a remote instance of Windows PowerShell; that's because your command will not be able to traverse the firewall and access the SQL Server Express database.
(However, you can still run the cmdlet locally on Standard Edition server.) To run Get-CsClientPinInfo remotely against a Standard Edition server you will need to manually enable the firewall exceptions for SQL Server Express.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsClientPinInfo cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsClientPinInfo"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 enables users to connect to the system or to join public switched telephone network (PSTN) conferences by using a telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password.
However, entering a user name and password can be an issue if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server 2015 enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Administrators can retrieve the PIN settings for a user, or a group of users, by running the Get-CsClientPinInfo cmdlet.
Note that there is no way for an administrator to retrieve the PIN that has been assigned to a user.
If a user forgets his or her PIN, that user will not be able to use PIN authentication to access the system until an administrator has assigned them a new PIN or the user has obtained a new PIN from the Dial-In Conferencing webpage.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server 2015.
That means that you will not be able to run the Get-CsClientPinInfo cmdlet from a remote instance of Windows PowerShell; that's because your command will not be able to traverse the firewall and access the SQL Server Express database.
(However, you can still run the cmdlet locally on Standard Edition server.) To run the Get-CsClientPinInfo cmdlet remotely against a Standard Edition server you will need to manually enable the firewall exceptions for SQL Server Express.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsUser | Get-CsClientPinInfo
```

The preceding command returns PIN information for all the users who have been enabled for Lync Server 2010.
To do this, the command first calls Get-CsUser to return all users who have been enabled for Lync Server 2010.
That collection is piped to Get-CsClientPinInfo, which displays PIN information for each user in the collection.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns PIN information for all the users who have been enabled for Lync Server.
To do this, the command first calls Get-CsUser to return all users who have been enabled for Lync Server.
That collection is piped to Get-CsClientPinInfo, which displays PIN information for each user in the collection.

Get-CsUser | Get-CsClientPinInfo

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns PIN information for all the users who have been enabled for Skype for Business Server 2015.
To do this, the command first calls the Get-CsUser cmdlet to return all users who have been enabled for Skype for Business Server 2015.
That collection is piped to the Get-CsClientPinInfo cmdlet, which displays PIN information for each user in the collection.

Get-CsUser | Get-CsClientPinInfo

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsClientPinInfo -Identity "litwareinc\kenmyer"
```

In Example 2, Get-CsClientPinInfo is used to display PIN information for a single user: the user with the Identity litwareinc\kenmyer.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, Get-CsClientPinInfo is used to display PIN information for a single user: the user with the Identity litwareinc\kenmyer.

Get-CsClientPinInfo -Identity "litwareinc\kenmyer"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Get-CsClientPinInfo cmdlet is used to display PIN information for a single user: the user with the Identity litwareinc\kenmyer.

Get-CsClientPinInfo -Identity "litwareinc\kenmyer"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsUser -OU "OU=Finance,DC=litwareinc,DC=com" | Get-CsClientPinInfo
```

Example 3 returns PIN information for all the users with accounts in the Finance organizational unit (OU).
To do this, Get-CsUser and the OU parameter are used to return a collection of all the users in the Finance OU.
That collection is then piped to Get-CsClientPinInfo, which displays PIN information for each user in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns PIN information for all the users with accounts in the Finance organizational unit (OU).
To do this, Get-CsUser and the OU parameter are used to return a collection of all the users in the Finance OU.
That collection is then piped to Get-CsClientPinInfo, which displays PIN information for each user in the collection.

Get-CsUser -OU "OU=Finance,DC=litwareinc,DC=com" | Get-CsClientPinInfo

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns PIN information for all the users with accounts in the Finance organizational unit (OU).
To do this, the Get-CsUser cmdlet and the OU parameter are used to return a collection of all the users in the Finance OU.
That collection is then piped to the Get-CsClientPinInfo cmdlet, which displays PIN information for each user in the collection.

Get-CsUser -OU "OU=Finance,DC=litwareinc,DC=com" | Get-CsClientPinInfo

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsUser -LdapFilter "Title=Manager" | Get-CsClientPinInfo
```

The command shown in Example 4 displays PIN information for all the Managers in the organization.
To retrieve a collection of all the Managers, the command uses Get-CsUser and the LdapFilter parameter; the filter value "Title=Manager" limits the returned collection to users who have "Manager" as their job title.
Get-CsClientPinInfo is then used to display PIN information for each of these users.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 displays PIN information for all the Managers in the organization.
To retrieve a collection of all the Managers, the command uses Get-CsUser and the LdapFilter parameter; the filter value "Title=Manager" limits the returned collection to users who have "Manager" as their job title.
Get-CsClientPinInfo is then used to display PIN information for each of these users.

Get-CsUser -LdapFilter "Title=Manager" | Get-CsClientPinInfo

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 displays PIN information for all the Managers in the organization.
To retrieve a collection of all the Managers, the command uses the Get-CsUser cmdlet and the LdapFilter parameter; the filter value "Title=Manager" limits the returned collection to users who have "Manager" as their job title.
The Get-CsClientPinInfo cmdlet is then used to display PIN information for each of these users.

Get-CsUser -LdapFilter "Title=Manager" | Get-CsClientPinInfo

## PARAMETERS

### -Identity
Indicates the Identity of the user account for which the PIN should be locked.
User Identities can be specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Get-CsClientPinInfo accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

###  
String value or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Get-CsClientPinInfo cmdlet accepts pipelined input of string values representing the Identity of a user account.
The cmdlet also accepts pipelined input of user objects.

## OUTPUTS

###  
Get-CsClientPinInfo returns one or more instances of the Microsoft.Rtc.Management.UserPinService.PinInfoDetails object.

###  
The Get-CsClientPinInfo cmdlet returns one or more instances of the Microsoft.Rtc.Management.UserPinService.PinInfoDetails object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/45feaa2c-f284-4374-a8a6-d3ff3c87d660(OCS.14).aspx)

[Get-CsPinPolicy]()

[Lock-CsClientPin]()

[Set-CsClientPin]()

[Unlock-CsClientPin]()

[Online Version](http://technet.microsoft.com/EN-US/library/45feaa2c-f284-4374-a8a6-d3ff3c87d660(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/45feaa2c-f284-4374-a8a6-d3ff3c87d660(OCS.16).aspx)

