---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsUserDatabaseState

## SYNOPSIS
Enables or disables one or more Skype for Business Server user databases.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsUserDatabaseState [-Identity] <String> [-Online] <Boolean> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### RegistrarPool
```
Set-CsUserDatabaseState [-Online] <Boolean> -RegistrarPool <Fqdn> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server employs the user database (also known as the user store) to maintain presence and routing information for Skype for Business Server users.
The `Set-CsUserDatabaseState` cmdlet provides a way for you change the state of one or more user databases: you can use the cmdlet to take a database offline or to bring a disabled database back online.

Note that, by default, the firewall exceptions for SQL Server Express are not enabled when you install the Standard Edition of Skype for Business Server.
In turn, that means that you will not be able to run the `Set-CsUserDatabaseState` cmdlet from a remote instance of Windows PowerShell.
That's because your command will not be able to traverse the firewall and access the SQL Server Express database.
You can still run the cmdlet locally (that is, on the Standard Edition server itself).
However, to run the `Set-CsUserDatabaseState` cmdlet remotely you will need to manually enable the firewall exceptions for SQL Server Express.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsUserDatabaseState -Identity "UserDatabase:atl-sql-001.litwareinc.com" -Online $False
```

The command shown in Example 1 takes the user database UserDatabase:atl-sql-001.litwareinc.com offline.
This is done by setting the Online property to $False.


### -------------------------- Example 2 ------------------------
```
Set-CsUserDatabaseState -RegistrarPool atl-cs-001.litwareinc.com -Online $False
```

In Example 2, all the user databases on the Registrar pool `atl-cs-001.litwareinc.com` are taken offline.


### -------------------------- Example 3 ------------------------
```
Get-CsUserDatabaseState | Where-Object {$_.Online -eq $False} | ForEach-Object {Set-CsUserDatabaseState -Identity $_.Identity -Online $True}
```

Example 3 locates all the user databases that are currently offline and then brings them back online.
To do this, the command first calls the `Get-CsUserDatabaseState` cmdlet without any parameters in order to return a collection of all the user databases in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those databases where the Online property is equal to False.
The filtered collection is then piped to the `ForEach-Object` cmdlet, which takes each database in the collection and sets the Online property to True.
Note that the collection of offline databases must be piped to the `ForEach-Object` cmdlet rather than the `Set-CsUserDatabaseState` cmdlet.
That is because the latter cmdlet cannot directly accept pipelined information.


## PARAMETERS

### -Identity
Unique identifier of the user database whose online status is to be modified.
For example:

`-Identity "UserDatabase:atl-sql-001.litwareinc.com"`

You cannot use both Identity and RegistrarPool in the same command, nor can you use wildcards with either parameter.


```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Online
When set to True ($True), makes a database available online.
When set to False ($False), takes a database offline.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPool
Fully qualified domain name (FQDN) of the Registrar pool hosting the user databases whose online status is to be modified.
For example:

`-RegistrarPool atl-cs-001.litwareinc.com`

You cannot use both -Identity and -RegistrarPool in the same command, nor can you use wildcards with either parameter.


```yaml
Type: Fqdn
Parameter Sets: RegistrarPool
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
String.
The `Set-CsUserDatabaseState` cmdlet accepts a string value representing the Identity of the user database to be updated.

## OUTPUTS

###  
None.
Instead, the `Set-CsUserDatabaseState` cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.UserStoreState object.

## NOTES

## RELATED LINKS

[Get-CsUserDatabaseState]()

[Update-CsUserDatabase]()
