---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/test-csdatabase
schema: 2.0.0
title: Test-CsDatabase
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

### Example 1
```
Test-CsDatabase -CentralManagementDatabase
```

The command shown in Example 1 verifies the configuration of the Central Management database.


### Example 2
```
Test-CsDatabase -ConfiguredDatabases -SqlServerFqdn "atl-sql-001.litwareinc.com"
```

Example 2 verifies all the Skype for Business Server databases installed on the computer atl-sql-001.litwareinc.com.


### Example 3
```
Test-CsDatabase -DatabaseType "Archiving" -SqlServerFqdn "atl-sql-001.litwareinc.com" -SqlInstanceName "archinst"
```

In Example 3, verification is performed only for the Archiving database installed on the computer atl-sql-001.litwareinc.com.
Note that the SqlInstanceName parameter is included to specify the SQL Server instance (Archinst) where the Archiving database is located.


### Example 4
```
Test-CsDatabase -LocalService
```

The command shown in Example 4 verifies the databases installed on the local computer.


## PARAMETERS

### -CentralManagementDatabase

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Tests the configuration of the Central Management database.
This parameter cannot be used in conjunction with the ConfiguredDatabases parameter or the DatabaseType parameter.

```yaml
Type: SwitchParameter
Parameter Sets: ByCMS
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfiguredDatabases

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Tests the configuration of all the Skype for Business Server databases installed on the specified computer.
You must include the SqlServerFqdn parameter when using the ConfiguredDatabases parameter.
In addition, this parameter cannot be used in the same command as the CentralManagementDatabase or the DatabaseType parameters.


```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseType

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalService

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Validates all the databases used by any of the Skype for Business Server services that are installed on the local computer.
This includes not only locally-installed databases but also databases installed on remote computers, provided those databases are used by one or more local services.


```yaml
Type: SwitchParameter
Parameter Sets: ByLocal
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\TestDatabases.html"`

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlInstanceName

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

SQL Server instance where the databases to be validated are installed.
For example:

`-SqlInstanceName "rtc"`

```yaml
Type: String
Parameter Sets: ByCMS, ByDatabase
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the computer whether the databases to be validated are installed.

```yaml
Type: Fqdn
Parameter Sets: ByCMS, ByConfigured, ByDatabase
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The `Test-CsDatabase` cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.SyntheticTransactions.TaskOutput
The `Test-CsDatabase` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsDatabaseMirrorState](Get-CsDatabaseMirrorState.md)

[Get-CsService](Get-CsService.md)

[Get-CsUserDatabaseState](Get-CsUserDatabaseState.md)
