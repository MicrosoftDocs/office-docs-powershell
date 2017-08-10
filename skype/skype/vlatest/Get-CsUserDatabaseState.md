---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUserDatabaseState

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the online status (True or False) of one or more Microsoft Lync Server 2010 user databases.

**Below Content Applies To:** Lync Server 2013

Returns information about the online status (True or False) of one or more Lync Server user databases.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the online status (True or False) of one or more Skype for Business Server 2015 user databases.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsUserDatabaseState [[-Identity] <String>] [<CommonParameters>]
```

### RegistrarPool
```
Get-CsUserDatabaseState [-RegistrarPool <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 employs the user database (also known as the user store) to maintain presence and routing information for Lync Server users.
The Get-CsUserDatabaseState cmdlet provides a way to verify the current status (either online or offline) for any of the user databases currently in use in your organization.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Lync Server 2010.
In turn, that means that you will not be able to run Get-CsUserDatabaseState from a remote instance of Windows PowerShell.
That's because your command will not be able to traverse the firewall and access the SQL Server Express database.
You can still run the cmdlet locally (that is, on the Standard Edition server itself).
However, to run Get-CsUserDatabaseState remotely you will need to manually enable the firewall exceptions for SQL Server Express.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserDatabaseState cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsUserDatabaseState"}

**Below Content Applies To:** Lync Server 2013

Lync Server employs the user database (also known as the user store) to maintain presence and routing information for Lync Server users.
The Get-CsUserDatabaseState cmdlet provides a way to verify the current status (either online or offline) for any of the user databases currently in use in your organization.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Lync Server.
In turn, that means that you will not be able to run Get-CsUserDatabaseState from a remote instance of Windows PowerShell.
That's because your command will not be able to traverse the firewall and access the SQL Server Express database.
You can still run the cmdlet locally (that is, on the Standard Edition server itself).
However, to run Get-CsUserDatabaseState remotely you will need to manually enable the firewall exceptions for SQL Server Express.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUserDatabaseState cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUserDatabaseState"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 employs the user database (also known as the user store) to maintain presence and routing information for Skype for Business Server 2015 users.
The Get-CsUserDatabaseState cmdlet provides a way to verify the current status (either online or offline) for any of the user databases currently in use in your organization.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server 2015.
In turn, that means that you will not be able to run the Get-CsUserDatabaseState cmdlet from a remote instance of Windows PowerShell.
That's because your command will not be able to traverse the firewall and access the SQL Server Express database.
You can still run the cmdlet locally (that is, on the Standard Edition server itself).
However, to run the Get-CsUserDatabaseState cmdlet remotely you will need to manually enable the firewall exceptions for SQL Server Express.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsUserDatabaseState
```

The command shown in Example 1 returns the online status of each user database configured for use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns the online status of each user database configured for use in your organization.

Get-CsUserDatabaseState

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns the online status of each user database configured for use in your organization.

Get-CsUserDatabaseState

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsUserDatabaseState -Identity "UserDatabase:atl-sql-001.litwareinc.com"
```

The command shown in Example 2 returns the online status of a single user database: the database with the Identity UserDatabase:atl-sql-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns the online status of a single user database: the database with the Identity UserDatabase:atl-sql-001.litwareinc.com.

Get-CsUserDatabaseState -Identity "UserDatabase:atl-sql-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns the online status of a single user database: the database with the Identity UserDatabase:atl-sql-001.litwareinc.com.

Get-CsUserDatabaseState -Identity "UserDatabase:atl-sql-001.litwareinc.com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsUserDatabaseState -RegistrarPool "atl-cs-001.litwareinc.com"
```

In Example 3, status information is returned for all the user databases located in the Registrar pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, status information is returned for all the user databases located in the Registrar pool atl-cs-001.litwareinc.com.

Get-CsUserDatabaseState -RegistrarPool "atl-cs-001.litwareinc.com"\

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, status information is returned for all the user databases located in the Registrar pool atl-cs-001.litwareinc.com.

Get-CsUserDatabaseState -RegistrarPool "atl-cs-001.litwareinc.com"\

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsUserDatabaseState | Where-Object {$_.Online -eq $True}
```

In the preceding example, information is returned for all the user databases that are currently online.
To do this, the command first calls Get-CsUserDatabaseState without any parameters.
That returns a collection of all the user databases in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those databases where the Online property is equal to True.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, information is returned for all the user databases that are currently online.
To do this, the command first calls Get-CsUserDatabaseState without any parameters.
That returns a collection of all the user databases in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those databases where the Online property is equal to True.

Get-CsUserDatabaseState | Where-Object {$_.Online -eq $True}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, information is returned for all the user databases that are currently online.
To do this, the command first calls the Get-CsUserDatabaseState cmdlet without any parameters.
That returns a collection of all the user databases in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those databases where the Online property is equal to True.

Get-CsUserDatabaseState | Where-Object {$_.Online -eq $True}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier of the user database whose online status is to be returned.
For example: -Identity "UserDatabase:atl-sql-001.litwareinc.com".

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.
If both parameters are omitted Get-CsUserDatabaseState returns information about all the user databases currently in use.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier of the user database whose online status is to be returned.
For example:

-Identity "UserDatabase:atl-sql-001.litwareinc.com"

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.
If both parameters are omitted the Get-CsUserDatabaseState cmdlet returns information about all the user databases currently in use.



```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPool
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name of the Registrar pool hosting the user databases whose online status is to be returned.
For example: -RegistrarPool "atl-cs-001.litwareinc.com".

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.
If both parameters are omitted Get-CsUserDatabaseState returns information about all of the user databases currently in use.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name of the Registrar pool hosting the user databases whose online status is to be returned.
For example:

-RegistrarPool "atl-cs-001.litwareinc.com"

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.
If both parameters are omitted the Get-CsUserDatabaseState cmdlet returns information about all of the user databases currently in use.



```yaml
Type: Fqdn
Parameter Sets: RegistrarPool
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
None.
Get-CsUserDatabaseState does not accept pipelined input.

###  
None.
The Get-CsUserDatabaseState cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsUserDatabaseState returns instances of the Microsoft.Rtc.Management.Xds.UserStoreState object.

###  
The Get-CsUserDatabaseState cmdlet returns instances of the Microsoft.Rtc.Management.Xds.UserStoreState object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c90150cd-fdb0-4c79-af58-c9ad884cb043(OCS.14).aspx)

[Set-CsUserDatabaseState]()

[Update-CsUserDatabase]()

[Online Version](http://technet.microsoft.com/EN-US/library/c90150cd-fdb0-4c79-af58-c9ad884cb043(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c90150cd-fdb0-4c79-af58-c9ad884cb043(OCS.16).aspx)

