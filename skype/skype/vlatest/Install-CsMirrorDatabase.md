---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Install-CsMirrorDatabase

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Associates a mirror database with a Microsoft Lync Server 2013 Preview database.
A database mirror enables you to simultaneously maintain two copies of a database, each copy residing on a different server.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Associates a mirror database with a Skype for Business Server 2015 database.
A database mirror enables you to simultaneously maintain two copies of a database, each copy residing on a different server.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### ByConfigured
```
Install-CsMirrorDatabase [-ConfiguredDatabases] -FileShare <String> -SqlServerFqdn <Fqdn> [-Confirm]
 [-DatabasePathMap <Hashtable>] [-DropExistingDatabasesOnMirror] [-ExcludeDatabaseList <String[]>]
 [-ForDefaultInstance] [-ForInstance <String>] [-Report <String>] [-WhatIf] [<CommonParameters>]
```

### ByDatabase
```
Install-CsMirrorDatabase -DatabaseType <DatabaseNameType> -FileShare <String> -SqlServerFqdn <Fqdn> [-Confirm]
 [-DatabasePathMap <Hashtable>] [-DropExistingDatabasesOnMirror] [-ExcludeDatabaseList <String[]>]
 [-Report <String>] [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Mirror databases enable you to simultaneously maintain two copies of a database: when data is written to Database A a copy of that data is also written to its mirror database.
This provides the ability to instantly replace Database A should that database become unavailable: you can "failover" to the mirror database with minimal disruption to your users and with minimal data loss.
After you have installed your primary databases you can then install and configure mirror databases by using the Install-CsMirrorDatabase cmdlet.

By default, Install-CsMirrorDatabase installs and configures mirror databases for all the Lync Server databases housed on the specified server.
However, you can use the DatabaseType or the ExcludeDatabaseList parameters to specify exactly which mirror databases should or should not be installed.
DatabaseType enables you to specify only the databases that should be installed; ExcludeDatabaseList lets you specify the databases that should not be installed.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Install-CsMirrorDatabase"}

Lync Server Control Panel: The functions carried out by the Install-CsMirrorDatabase cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

Mirror databases enable you to simultaneously maintain two copies of a database: when data is written to Database A, a copy of that data is also written to its mirror database.
This provides the ability to instantly replace Database A should that database become unavailable: you can "failover" to the mirror database with minimal disruption to your users and with minimal data loss.
After you have installed your primary databases you can then install and configure mirror databases by using the Install-CsMirrorDatabase cmdlet.

By default, the Install-CsMirrorDatabase cmdlet installs and configures mirror databases for all the Skype for Business Server 2015 databases housed on the specified server.
However, you can use the DatabaseType or the ExcludeDatabaseList parameters to specify exactly which mirror databases should or should not be installed.
DatabaseType enables you to specify only the databases that should be installed; ExcludeDatabaseList lets you specify the databases that should not be installed.

Skype for Business Server Control Panel: The functions carried out by the Install-CsMirrorDatabase cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 installs any predefined database mirrors on the computer atl-mirror-001.litwareinc.com.
The ConfiguredDatabases parameter causes Install-CsMirrorDatabase to use the current topology to determine which databases should be mirrored on atl-mirror-001.litwareinc.com.

Install-CsMirrorDatabase -ConfiguredDatabases -FileShare "\\\\atl-sql-001\DbBackup" -SqlServerFqdn "atl-mirror-001.litwareinc.com" -DropExisitingDatabasesOnMirror

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 installs any predefined database.
The ConfiguredDatabases parameter causes the Install-CsMirrorDatabase cmdlet to use the current topology to determine which databases should be.

Install-CsMirrorDatabase -ConfiguredDatabases -FileShare "\\\\atl-fs-001\DbBackup" -SqlServerFqdn "atl-primary-001.litwareinc.com" -DropExisitingDatabasesOnMirror

## PARAMETERS

### -ConfiguredDatabases
**Below Content Applies To:** Lync Server 2013

Reads information from the Lync Server topology, and installs the required mirror databases on the specified SQL Server computer or SQL Server cluster.



**Below Content Applies To:** Skype for Business Server 2015

Reads information from the Skype for Business Server 2015 topology, and installs the required mirror databases on the specified SQL Server computer or SQL Server cluster.



```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseType
**Below Content Applies To:** Lync Server 2013

Type of mirror database to be installed.
Allowed values are:

Application

Archiving

Monitoring

User

Provision

CentralAdmin

Lyss

Registrar

Edge

PersistentChat

PersistentChatCompliance

CentralMgmt



**Below Content Applies To:** Skype for Business Server 2015

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
Parameter Sets: ByDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileShare
**Below Content Applies To:** Lync Server 2013

UNC path to the shared folder on the "witness" server.
A database witness (which must be installed using SQL Server Management Studio) makes failover automatic any time the principal SQL store fails.



**Below Content Applies To:** Skype for Business Server 2015

UNC path to the database shared folder.
The file share is used to export of databases from the primary SQL Server and import those databases onto the mirror.

The shared folder and its contents can be deleted after mirroring is established.
The folder should also be deleted if you decide to disable mirroring.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerFqdn
Fully qualified domain name (FQDN) of the primary SQL Server computer.
For example:

-SqlServerFqdn atl-sql-001.litwareinc.com

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabasePathMap
Enables you to specify custom folder paths for data files and log files; multiple paths should be separated by using a semicolon (;).
For example:

-DatabasePathMap @{"Archiving:DbPath"="\\\\atl-sql-001.litwareinc.com\db";"Archiving:LogPath"="\\\\atl-sql-002.litwareinc.com\logs"}

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DropExistingDatabasesOnMirror
When present, deletes any existing copies of the mirrored databases from the server acting as the mirror before new data is copied to that server.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDatabaseList
List of databases that should not be included in the mirror database; multiple databases can be specified by separating those databases using commas.
For example:

-ExcludeDatabaseList "RTCCAB","RTCPROV"

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForDefaultInstance
**Below Content Applies To:** Lync Server 2013

When specified, instructs Install-CsMirrorDatabase to only act against the default SQL Server instance.
You cannot use both ForDefaultInstance and ForInstance in the same command.



**Below Content Applies To:** Skype for Business Server 2015

When specified, instructs the Install-CsMirrorDatabase cmdlet to only act against the default SQL Server instance.
You cannot use both ForDefaultInstance and ForInstance in the same command.



```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForInstance
**Below Content Applies To:** Lync Server 2013

When specified, instructs Install-CsMirrorDatabase to only act against the specified SQL Server instance.
You cannot use both ForInstance and ForDefaultInstance in the same command.



**Below Content Applies To:** Skype for Business Server 2015

When specified, instructs the Install-CsMirrorDatabase cmdlet to only act against the specified SQL Server instance.
You cannot use both ForInstance and ForDefaultInstance in the same command.



```yaml
Type: String
Parameter Sets: ByConfigured
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
**Below Content Applies To:** Lync Server 2013

Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -

Report "C:\Logs\InstallDatabaseMirror.html"



**Below Content Applies To:** Skype for Business Server 2015

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\InstallDatabaseMirror.html"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlInstanceName
**Below Content Applies To:** Lync Server 2013

Name of the database instance where the database is to be installed.
A database instance is simply a set of running processes that provides access to database files.
If this parameter is omitted, Install-CsMirrorDatabase will use the default SQL Server instance.



**Below Content Applies To:** Skype for Business Server 2015

Name of the database instance where the database is to be installed.
A database instance is simply a set of running processes that provides access to database files.
If this parameter is omitted, the Install-CsMirrorDatabase cmdlet will use the default SQL Server instance.



```yaml
Type: String
Parameter Sets: ByDatabase
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Install-CsMirrorDatabase does not accept pipelined input.

###  
None.
The Install-CsMirrorDatabase cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsDatabaseMirrorState]()

[Uninstall-CsMirrorDatabase]()

[Online Version](http://technet.microsoft.com/EN-US/library/6e3acdfb-39da-4aa4-b125-1ea542971da3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6e3acdfb-39da-4aa4-b125-1ea542971da3(OCS.16).aspx)

