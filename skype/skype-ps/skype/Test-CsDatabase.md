---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsDatabase
schema: 2.0.0
---

# Test-CsDatabase

## SYNOPSIS
Tests the configuration of the Skype for Business Server databases.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ByCMS
```
Test-CsDatabase [-CentralManagementDatabase] [-SqlServerFqdn <Fqdn>] [-Confirm] [-Report <String>]
 [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

### ByConfigured
```
Test-CsDatabase [-ConfiguredDatabases] -SqlServerFqdn <Fqdn> [-Confirm] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

### ByDatabase
```
Test-CsDatabase -DatabaseType <DatabaseNameType> -SqlServerFqdn <Fqdn> [-Confirm] [-Report <String>]
 [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

### ByLocal
```
Test-CsDatabase [-LocalService] [-Confirm] [-Report <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsDatabase` cmdlet verifies connectivity to one or more Skype for Business Server databases.
When run, the `Test-CsDatabase` cmdlet reads the Skype for Business Server topology, attempts to connect each of the relevant databases, and then reports back the success or failure of each attempt.
If a connection can be made, the cmdlet will also report back such information as the database name, SQL Server version information, and the location of any installed mirror databases.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsDatabase` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsDatabase -CentralManagementDatabase
```

The command shown in Example 1 verifies the configuration of the Central Management database.


### -------------------------- Example 2 --------------------------
```
Test-CsDatabase -ConfiguredDatabases -SqlServerFqdn "atl-sql-001.litwareinc.com"
```

Example 2 verifies all the Skype for Business Server databases installed on the computer atl-sql-001.litwareinc.com.


### -------------------------- Example 3 --------------------------
```
Test-CsDatabase -DatabaseType "Archiving" -SqlServerFqdn "atl-sql-001.litwareinc.com" -SqlInstanceName "archinst"
```

In Example 3, verification is performed only for the Archiving database installed on the computer atl-sql-001.litwareinc.com.
Note that the SqlInstanceName parameter is included to specify the SQL Server instance (Archinst) where the Archiving database is located.


### -------------------------- Example 4 --------------------------
```
Test-CsDatabase -LocalService
```

The command shown in Example 4 verifies the databases installed on the local computer.


## PARAMETERS

### -CentralManagementDatabase
Tests the configuration of the Central Management database.
This parameter cannot be used in conjunction with the ConfiguredDatabases parameter or the DatabaseType parameter.

```yaml
Type: SwitchParameter
Parameter Sets: ByCMS
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfiguredDatabases
Tests the configuration of all the Skype for Business Server databases installed on the specified computer.
You must include the SqlServerFqdn parameter when using the ConfiguredDatabases parameter.
In addition, this parameter cannot be used in the same command as the CentralManagementDatabase or the DatabaseType parameters.


```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseType
Type of database to be validated.
Allowed values are:

Valid values for DatabaseType are:

ActiveMonitoring

Application

Archiving

CentralMgmt

Edge

Lyss

Monitoring

PersistentChat

PersistentChatCompliance

Provision

Registrar

SigninTelemetry

User


```yaml
Type: DatabaseNameType
Parameter Sets: ByDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalService
Validates all the databases used by any of the Skype for Business Server services that are installed on the local computer.
This includes not only locally-installed databases but also databases installed on remote computers, provided those databases are used by one or more local services.


```yaml
Type: SwitchParameter
Parameter Sets: ByLocal
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerFqdn
Fully qualified domain name of the computer whether the databases to be validated are installed.

```yaml
Type: Fqdn
Parameter Sets: ByCMS
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Fqdn
Parameter Sets: ByConfigured, ByDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\TestDatabases.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlInstanceName
SQL Server instance where the databases to be validated are installed.
For example:

`-SqlInstanceName "rtc"`

```yaml
Type: String
Parameter Sets: ByCMS, ByDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Test-CsDatabase` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsDatabase` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsDatabaseMirrorState](Get-CsDatabaseMirrorState.md)

[Get-CsService](Get-CsService.md)

[Get-CsUserDatabaseState](Get-CsUserDatabaseState.md)

