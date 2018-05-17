---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsUserDatabaseState
schema: 2.0.0
---

# Get-CsUserDatabaseState

## SYNOPSIS
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
Skype for Business Server employs the user database (also known as the user store) to maintain presence and routing information for Skype for Business Server users.
The Get-CsUserDatabaseState cmdlet provides a way to verify the current status (either online or offline) for any of the user databases currently in use in your organization.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server.
In turn, that means that you will not be able to run the Get-CsUserDatabaseState cmdlet from a remote instance of Windows PowerShell.
That's because your command will not be able to traverse the firewall and access the SQL Server Express database.
You can still run the cmdlet locally (that is, on the Standard Edition server itself).
However, to run the Get-CsUserDatabaseState cmdlet remotely you will need to manually enable the firewall exceptions for SQL Server Express.



## EXAMPLES
### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUserDatabaseState
```
The command shown in Example 1 returns the online status of each user database configured for use in your organization.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUserDatabaseState -Identity "UserDatabase:atl-sql-001.litwareinc.com"
```

The command shown in Example 2 returns the online status of a single user database: the database with the Identity UserDatabase:atl-sql-001.litwareinc.com.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUserDatabaseState -RegistrarPool "atl-cs-001.litwareinc.com"\
```

In Example 3, status information is returned for all the user databases located in the Registrar pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE --------------------------
```
Get-CsUserDatabaseState | Where-Object {$_.Online -eq $True}
```

In Example 4, information is returned for all the user databases that are currently online.
To do this, the command first calls the Get-CsUserDatabaseState cmdlet without any parameters.
That returns a collection of all the user databases in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those databases where the Online property is equal to True.

## PARAMETERS

### -Identity
Unique identifier of the user database whose online status is to be returned.
For example:

-Identity "UserDatabase:atl-sql-001.litwareinc.com"

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.
If both parameters are omitted the Get-CsUserDatabaseState cmdlet returns information about all the user databases currently in use.



```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPool
Fully qualified domain name of the Registrar pool hosting the user databases whose online status is to be returned.
For example:

-RegistrarPool "atl-cs-001.litwareinc.com"

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.
If both parameters are omitted the Get-CsUserDatabaseState cmdlet returns information about all of the user databases currently in use.



```yaml
Type: Fqdn
Parameter Sets: RegistrarPool
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The Get-CsUserDatabaseState cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsUserDatabaseState cmdlet returns instances of the Microsoft.Rtc.Management.Xds.UserStoreState object.

## NOTES

## RELATED LINKS

[Set-CsUserDatabaseState](Set-CsUserDatabaseState.md)

[Update-CsUserDatabase](Update-CsUserDatabase.md)



