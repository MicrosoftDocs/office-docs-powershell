---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/uninstall-csmirrordatabase
schema: 2.0.0
title: Uninstall-CsMirrorDatabase
---

# Uninstall-CsMirrorDatabase

## SYNOPSIS
Uninstalls a Skype for Business Server mirror database.
A database mirror enables you to simultaneously maintain two copies of a database, each copy residing on a different server.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Uninstall-CsMirrorDatabase -DatabaseType <DatabaseNameType> -SqlServerFqdn <Fqdn> [-Confirm]
 [-DropExistingDatabasesOnMirror] [-Report <String>] [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Mirror databases enable you to simultaneously maintain two copies of a database: when data is written to Database A, a copy of that data is also written to its mirror database.
This provides the ability to instantly replace Database A should that database become unavailable: you can "failover" to the mirror database with minimal disruption to your users and with minimal data loss.

Mirror databases can be installed and configured by using the `Install-CsMirrorDatabase` cmdlet.
If you ever need to remove a mirror database, you can do so by using the `Uninstall-CsMirrorDatabase` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Uninstall-CsMirrorDatabase` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Uninstall-CsMirrorDatabase -SqlServerFqdn "atl-mirror-001.litwareinc.com" -SqlInstanceName "RTC" -DatabaseType "User" -DropExistingDatabasesOnMirror
```

The command shown in Example 1 uninstalls the user database from the SQL Server instance RTC on the computer atl-mirror-001.litwareinc.com.
Because the DropExistingDatabaseOnMirror parameter was included, the command will also delete the actual User database mirror.


## PARAMETERS

### -DatabaseType

> Applicable: Lync Server 2013, Skype for Business Server 2015

Type of mirror database to be installed.
Allowed values are:

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
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DropExistingDatabasesOnMirror

> Applicable: Lync Server 2013, Skype for Business Server 2015

When present, deletes any existing copies of the mirrored databases from the mirror server.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report

> Applicable: Lync Server 2013, Skype for Business Server 2015

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\UnInstallDatabaseMirror.html"`


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

> Applicable: Lync Server 2013, Skype for Business Server 2015

Name of the database instance where the database is to be installed.
A database instance is simply a set of running processes that provides access to database files.
If this parameter is omitted, the `Uninstall-CsMirrorDatabase` cmdlet will use the default SQL Server instance.


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

### -SqlServerFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015

Fully qualified domain name (FQDN) of the computer containing the database is to be uninstalled.
For example:

`-SqlServerFqdn atl-sql-001.litwareinc.com`

This should be the FQDN of the primary SQL Server computer.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015

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

> Applicable: Lync Server 2013, Skype for Business Server 2015

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
The `Uninstall-CsMirrorDatabase` cmdlet does not accept pipelined input.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsDatabaseMirrorState](Get-CsDatabaseMirrorState.md)

[Install-CsMirrorDatabase](Install-CsMirrorDatabase.md)
