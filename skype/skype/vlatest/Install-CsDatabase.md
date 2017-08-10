---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Install-CsDatabase

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Installs one or more Microsoft Lync Server 2010 databases.

**Below Content Applies To:** Lync Server 2013

Installs one or more Lync Server databases.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Installs one or more Skype for Business Server 2015 databases.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ByCMS
```
Install-CsDatabase [-CentralManagementDatabase] [-Clean] [-Collocated] [-DatabasePaths <String[]>]
 [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-SkipPrepareCheck]
 [-SqlInstanceName <String>] -SqlServerFqdn <Fqdn> [-Update] [-UseDefaultSqlPaths] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [-Backup] [-DatabasePathMap <Hashtable>] [-NoReindex] [<CommonParameters>]
```

### ByDatabase
```
Install-CsDatabase [-Clean] [-Collocated] [-DatabasePaths <String[]>] -DatabaseType <DatabaseNameType>
 [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-SkipPrepareCheck]
 [-SqlInstanceName <String>] -SqlServerFqdn <Fqdn> [-Update] [-UseDefaultSqlPaths] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [-DatabasePathMap <Hashtable>] [-NoReindex] [<CommonParameters>]
```

### ByConfigured
```
Install-CsDatabase [-Clean] [-ConfiguredDatabases] [-DatabasePaths <String[]>] [-ExcludeCollocatedStores]
 [-ForDefaultInstance] [-ForInstance <String>] [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>]
 [-SkipPrepareCheck] -SqlServerFqdn <Fqdn> [-Update] [-UseDefaultSqlPaths] [-Force] [-Report <String>]
 [-WhatIf] [-Confirm] [-DatabasePathMap <Hashtable>] [-NoReindex] [<CommonParameters>]
```

### ByLocal
```
Install-CsDatabase [-Clean] [-DatabasePaths <String[]>] [-ForDefaultInstance] [-ForInstance <String>]
 [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-LocalDatabases] [-SkipPrepareCheck]
 [-Update] [-UseDefaultSqlPaths] [-Force] [-Report <String>] [-WhatIf] [-Confirm]
 [-DatabasePathMap <Hashtable>] [-NoReindex] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 makes extensive use of SQL Server databases, ranging from the Central Management store to the Archiving database.
As a general rule, these databases are set up at the same time you install Lync Server 2010 or at the same time you install a Lync Server 2010 role (such as Monitoring Server) that requires a database back end.
After installation has taken place these databases typically will not need to be reinstalled or moved to new locations.

On rare occasions, however, you might need to manually install a Lync Server 2010 database; this could be because you need to move a database to another server, or because a setup-related problem failed to install the database for you.
The Install-CsDatabase cmdlet provides a way for you to install any of the SQL Server databases used by Lync Server 2010.

When running Install-CsDatabase there are basically three different ways to handle the configuration of the database being installed:

Option 1 -- Run the cmdlet without including a parameter that specifies the database paths.
When Install-CsDatabase is run without the DatabasePath or the UseDefaultSqlPath parameter the cmdlet uses a built-on algorithm to choose the storage location for the database logs and data files.
Note that this built-in algorithm works with a standalone SQL server, it will not work with a SQL cluster.
To install a database on a SQL cluster your command must include either the DatabasePath or the UseDefaultSqlPath parameter

Option 2 -- Run the cmdlet along with the DatabasePath parameter.
When Install-CsDatabase is run with the DatabasePath parameter the built-in algorithm is not used to choose the storage location for the database logs and data files.
Instead, administrators can select the location for these logs and data files.
To install both data files and SQL logs in the same location, simply specify the path to the folder where this data should be stored.
For example:

-DatabasePath C:\SqlData

To store data files in one location and log files in a second location, specify the path to each folder, separating the two locations by using a comma (be careful not to put a blank space before or after the comma):

-DatabasePath C:\SqlLogs,D:\SqlData

The log files will always be stored on the first location specified, while data files will be stored in the second location.

In a pool backend, certain log files might be stored on a drive all by themselves.
If you have a pool backend with a single drive, files will be distributed like this:

Drive 1 - Rtcdyn log; Rtc log; other logs; other data.

If you have two drives, files will be distributed like this:

Drive 1 - Rtcdyn log; Rtc log.

Drive 2 - Other logs; other data.

With three drives:

Drive 1 - Rtcdyn log.

Drive 2 - Rtc log.

Drive 3 - Other logs; other data.

And with four drives:

Drive 1 - Rtcdyn log.

Drive 2 - Rtc log.

Drive 3 - Other logs.

Drive 4 - Other data.

For more information, and for additional installation scenarios, see the Lync Server 2010 Enterprise Edition Deployment Guide.

Option 3 -- Run the cmdlet along with the UseDefaultSqlPaths parameter.
When Install-CsDatabase is run using the UseDefaultSqlPaths parameter, the built-in algorithm is not used to choose the storage locations for the database logs and data files.
Instead, log and data files are stored in the locations specified by the SQL Server defaults path (these paths must be configured in advanced by a SQL administrator).
Data files will be stored in the default SQL data file location while log files will be stored in the default SQL log file location.

Before running Install-CsDatabase you should make sure that the RTCUniversalServerAdmins groups has not been assigned as the database owner.
If that group is listed as the owner the group could possibly be deleted when you call Install-CsDatabase.

Who can run this cmdlet: You must be a member of the domain, a member of the RTCUniversalReadOnlyAdmins group, a SQL Server administrator, and a local administrator on the computer where SQL Server is installed in order to run the Install-CsDatabase cmdlet locally.
(Note that members of the RTCUniversalServerAdmins group are automatically granted the required SQL Server administrator permissions.) To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Install-CsDatabase"}

**Below Content Applies To:** Lync Server 2013

Lync Server makes extensive use of SQL Server databases, ranging from the Central Management store to the Archiving database.
As a general rule, these databases are set up at the same time you install Lync Server or at the same time you install a Lync Server role (such as Monitoring Server) that requires a database back end.
After installation has taken place these databases typically will not need to be reinstalled or moved to new locations.

On rare occasions, however, you might need to manually install a Lync Server database; this could be because you need to move a database to another server, or because a setup-related problem failed to install the database for you.
The Install-CsDatabase cmdlet provides a way for you to install any of the SQL Server databases used by Lync Server.

When running Install-CsDatabase there are basically three different ways to handle the configuration of the database being installed:

Option 1 -- Run the cmdlet without including a parameter that specifies the database paths.
When Install-CsDatabase is run without the DatabasePath or the UseDefaultSqlPath parameter the cmdlet uses a built-on algorithm to choose the storage location for the database logs and data files.
Note that this built-in algorithm works with a stand-alone SQL Server, it will not work with a SQL Server cluster.
To install a database on a SQL Server cluster your command must include either the DatabasePath or the UseDefaultSqlPath parameter

Option 2 -- Run the cmdlet along with the DatabasePath parameter.
When Install-CsDatabase is run with the DatabasePath parameter the built-in algorithm is not used to choose the storage location for the database logs and data files.
Instead, administrators can select the location for these logs and data files.
To install both data files and SQL Server logs in the same location, simply specify the path to the folder where this data should be stored.
For example:

-DatabasePath C:\SqlData

To store data files in one location and log files in a second location, specify the path to each folder, separating the two locations by using a comma (be careful not to put a blank space before or after the comma):

-DatabasePath C:\SqlLogs,D:\SqlData

The log files will always be stored on the first location specified, while data files will be stored in the second location.

In a pool backend, certain log files might be stored on a drive all by themselves.
If you have a pool backend with a single drive, files will be distributed like this:

Drive 1 - Rtcdyn log; Rtc log; other logs; other data.

If you have two drives, files will be distributed like this:

Drive 1 - Rtcdyn log; Rtc log.

Drive 2 - Other logs; other data.

With three drives:

Drive 1 - Rtcdyn log.

Drive 2 - Rtc log.

Drive 3 - Other logs; other data.

And with four drives:

Drive 1 - Rtcdyn log.

Drive 2 - Rtc log.

Drive 3 - Other logs.

Drive 4 - Other data.

Option 3 -- Run the cmdlet along with the UseDefaultSqlPaths parameter.
When Install-CsDatabase is run using the UseDefaultSqlPaths parameter, the built-in algorithm is not used to choose the storage locations for the database logs and data files.
Instead, log and data files are stored in the locations specified by the SQL Server defaults path (these paths must be configured in advanced by a SQL Server administrator).
Data files will be stored in the default SQL Server data file location while log files will be stored in the default SQL Server log file location.

Before running Install-CsDatabase you should make sure that the RTCUniversalServerAdmins groups has not been assigned as the database owner.
If that group is listed as the owner the group could possibly be deleted when you call Install-CsDatabase.

Who can run this cmdlet: You must be a member of the domain, a member of the RTCUniversalReadOnlyAdmins group, a SQL Server administrator, and a local administrator on the computer where SQL Server is installed in order to run the Install-CsDatabase cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Install-CsDatabase"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 makes extensive use of SQL Server databases, ranging from the Central Management store to the Archiving database.
As a general rule, these databases are set up at the same time you Skype for Business Server 2015 or at the same time you install a Skype for Business Server 2015 role (such as Monitoring Server) that requires a database back end.
After installation has taken place these databases typically will not need to be reinstalled or moved to new locations.

On rare occasions, however, you might need to manually install a Skype for Business Server 2015 database; this could be because you need to move a database to another server, or because a setup-related problem failed to install the database for you.
The Install-CsDatabase cmdlet provides a way for you to install any of the SQL Server databases used by Skype for Business Server 2015.

When running the Install-CsDatabase cmdlet there are basically three different ways to handle the configuration of the database being installed:

Option 1 -- Run the cmdlet without including a parameter that specifies the database paths.
When the Install-CsDatabase cmdlet is run without the DatabasePath or the UseDefaultSqlPath parameter the cmdlet uses a built-on algorithm to choose the storage location for the database logs and data files.
Note that this built-in algorithm works with a stand-alone SQL Server, it will not work with a SQL Server cluster.
To install a database on a SQL Server cluster your command must include either the DatabasePath or the UseDefaultSqlPath parameter

Option 2 -- Run the cmdlet along with the DatabasePath parameter.
When the Install-CsDatabase is cmdlet run with the DatabasePath parameter the built-in algorithm is not used to choose the storage location for the database logs and data files.
Instead, administrators can select the location for these logs and data files.
To install both data files and SQL Server logs in the same location, simply specify the path to the folder where this data should be stored.
For example:

-DatabasePath C:\SqlData

To store data files in one location and log files in a second location, specify the path to each folder, separating the two locations by using a comma (be careful not to put a blank space before or after the comma):

-DatabasePath C:\SqlLogs,D:\SqlData

The log files will always be stored on the first location specified, while data files will be stored in the second location.

In a pool backend, certain log files might be stored on a drive all by themselves.
If you have a pool backend with a single drive, files will be distributed like this:

Drive 1 - Rtcdyn log; Rtc log; other logs; other data.

If you have two drives, files will be distributed like this:

Drive 1 - Rtcdyn log; Rtc log.

Drive 2 - Other logs; other data.

With three drives:

Drive 1 - Rtcdyn log.

Drive 2 - Rtc log.

Drive 3 - Other logs; other data.

And with four drives:

Drive 1 - Rtcdyn log.

Drive 2 - Rtc log.

Drive 3 - Other logs.

Drive 4 - Other data.

Option 3 -- Run the cmdlet along with the UseDefaultSqlPaths parameter.
When the Install-CsDatabase cmdlet is run using the UseDefaultSqlPaths parameter, the built-in algorithm is not used to choose the storage locations for the database logs and data files.
Instead, log and data files are stored in the locations specified by the SQL Server defaults path (these paths must be configured in advanced by a SQL Server administrator).
Data files will be stored in the default SQL Server data file location while log files will be stored in the default SQL Server log file location.

Before running the Install-CsDatabase cmdlet you should make sure that the RTCUniversalServerAdmins groups has not been assigned as the database owner.
If that group is listed as the owner the group could possibly be deleted when you call the Install-CsDatabase cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Install-CsDatabase -ConfiguredDatabases -SqlServerFqdn atl-sql-001.litwareinc.com -DatabasePaths "E:\CSLog","F:\CSLog","G:\CSDB"
```

In Example 1, Install-CsDatabase reads in the Lync Server 2010 topology, and then installs any required databases on the pool atl-sql-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Install-CsDatabase reads in the Lync Server topology, and then installs any required databases on the pool atl-sql-001.litwareinc.com.

Install-CsDatabase -ConfiguredDatabases -SqlServerFqdn atl-sql-001.litwareinc.com -DatabasePaths "E:\CSLog","F:\CSLog","G:\CSDB"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Install-CsDatabase cmdlet reads in the Skype for Business Server 2015 topology, and then installs any required databases on the pool atl-sql-001.litwareinc.com.

Install-CsDatabase -ConfiguredDatabases -SqlServerFqdn atl-sql-001.litwareinc.com -DatabasePaths "E:\CSLog","F:\CSLog","G:\CSDB"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Install-CSDatabase -CentralManagementDatabase -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName rtc -DatabasePaths "G:\CSDB"
```

The command shown in Example 2 installs the Central Management store on the pool atl-sql-001.litwareinc.com.
The database will be installed in the rtc instance, and make use of the folder G:\CSDB.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 installs the Central Management store on the pool atl-sql-001.litwareinc.com.
The database will be installed in the rtc instance, and make use of the folder G:\CSDB.

Install-CsDatabase -CentralManagementDatabase -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName rtc -DatabasePaths "G:\CSDB"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 installs the Central Management store on the pool atl-sql-001.litwareinc.com.
The database will be installed in the rtc instance, and make use of the folder G:\CSDB.

Install-CsDatabase -CentralManagementDatabase -SqlServerFqdn atl-sql-001.litwareinc.com -SqlInstanceName rtc -DatabasePaths "G:\CSDB"

## PARAMETERS

### -CentralManagementDatabase
**Below Content Applies To:** Lync Server 2010

If this parameter is included, Install-CsDatabase will use the SqlServerFqdn parameter to install the Central Management store on the specified computer.
This parameter is typically used only by  Topology Builder, and is generally called just once, during initial setup.



**Below Content Applies To:** Lync Server 2013

If this parameter is included, Install-CsDatabase will use the SqlServerFqdn parameter to install the Central Management store on the specified computer.
This parameter is typically used only by Topology Builder, and is generally called just once, during initial setup.



**Below Content Applies To:** Skype for Business Server 2015

If this parameter is included, the Install-CsDatabase cmdlet will use the SqlServerFqdn parameter to install the Central Management store on the specified computer.
This parameter is typically used only by Topology Builder, and is generally called just once, during initial setup.



```yaml
Type: SwitchParameter
Parameter Sets: ByCMS
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Clean
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

If this parameter is included, Install-CsDatabase will delete and reinstall databases as needed.
If this parameter is not included, Install-CsDatabase will not overwrite any existing databases.
You cannot use both Clean and Update in the same command.



**Below Content Applies To:** Skype for Business Server 2015

If this parameter is included, the Install-CsDatabase cmdlet will delete and reinstall databases as needed.
If this parameter is not included, the Install-CsDatabase cmdlet will not overwrite any existing databases.
You cannot use both Clean and Update in the same command.



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

### -Collocated
If present, additional database roles will be collocated with the Central Management store.

```yaml
Type: SwitchParameter
Parameter Sets: ByCMS, ByDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfiguredDatabases
**Below Content Applies To:** Lync Server 2010

Reads information from the Lync Server 2010 topology, and installs the required databases on the specified SQL Server computer or SQL Server cluster.
Administrators who need to call Install-CsDatabase will almost always use this parameter when specifying the databases to be installed.



**Below Content Applies To:** Lync Server 2013

Reads information from the Lync Server topology, and installs the required databases on the specified SQL Server computer or SQL Server cluster.
Administrators who need to call Install-CsDatabase will almost always use this parameter when specifying the databases to be installed.



**Below Content Applies To:** Skype for Business Server 2015

Reads information from the Skype for Business Server 2015 topology, and installs the required databases on the specified SQL Server computer or SQL Server cluster.
Administrators who need to call the Install-CsDatabase cmdlet will almost always use this parameter when specifying the databases to be installed.



```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabasePaths
Specifies the drives and folders where data and log files can be stored; for example: -DatabasePaths "D:\Logs","E:\Data".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseType
**Below Content Applies To:** Lync Server 2010

Enables you to install a specific database on a specific SQL Server computer or SQL Server cluster.
As a general rule, administrators should not run Install-CsDatabase with the DatabaseType parameter unless instructed otherwise by Microsoft support personnel.
Instead, administrators should typically use the ConfiguredDatabases parameter. 
The DatabaseType parameter requires you to know the exact type and location for every database used in your topology, and is only required if the Install-CsDatabase command fails to run using the ConfiguredDatabases parameter.

Valid values for DatabaseType are:

Application

Archiving

Monitoring

Provision

User



**Below Content Applies To:** Lync Server 2013

Enables you to install a specific database on a specific SQL Server computer or SQL Server cluster.
As a general rule, administrators should not run Install-CsDatabase with the DatabaseType parameter unless instructed otherwise by Microsoft support personnel.
Instead, administrators should typically use the ConfiguredDatabases parameter.
The DatabaseType parameter requires you to know the exact type and location for every database used in your topology, and is only required if the Install-CsDatabase command fails to run using the ConfiguredDatabases parameter.

Valid values for DatabaseType are:

Application

Archiving

CentralAdmin

Edge

Lyss

Monitoring

PersistentChat

PersistentChatCompliance

Provision

Registrar

User



**Below Content Applies To:** Skype for Business Server 2015

Enables you to install a specific database on a specific SQL Server computer or SQL Server cluster.
As a general rule, administrators should not run the Install-CsDatabase cmdlet with the DatabaseType parameter unless instructed otherwise by Microsoft support personnel.
Instead, administrators should typically use the ConfiguredDatabases parameter.
The DatabaseType parameter requires you to know the exact type and location for every database used in your topology, and is only required if the Install-CsDatabase cmdlet command fails to run using the ConfiguredDatabases parameter.

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeCollocatedStores
When present, suppresses a warning message telling you that any collocated database stores must be installed on the local computer.

```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForDefaultInstance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

When specified, instructs Install-CsDatabase to only act against the default SQL Server instance.
You cannot use both ForDefaultInstance and ForInstance in the same command.



**Below Content Applies To:** Skype for Business Server 2015

When specified, instructs the Install-CsDatabase cmdlet to only act against the default SQL Server instance.
You cannot use both ForDefaultInstance and ForInstance in the same command.



```yaml
Type: SwitchParameter
Parameter Sets: ByConfigured, ByLocal
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForInstance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

When specified, instructs Install-CsDatabase to only act against the specified SQL Server instance.
You cannot use both ForInstance and ForDefaultInstance in the same command.



**Below Content Applies To:** Skype for Business Server 2015

When specified, instructs the Install-CsDatabase cmdlet to only act against the specified SQL Server instance.
You cannot use both ForInstance and ForDefaultInstance in the same command.



```yaml
Type: String
Parameter Sets: ByConfigured, ByLocal
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Install-CsDatabase on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Install-CsDatabase cmdlet on a computer with an account in your domain.



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

### -GlobalSettingsDomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services (AD DS), then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of a domain controller where global settings are stored.
If global settings are stored in the System container in Active Directory Domain Services, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.



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

### -LocalDatabases
**Below Content Applies To:** Lync Server 2010

If this parameter is included, Install-CsDatabase will read in the Lync Server 2010 topology and install databases and stores as needed on the local computer.



**Below Content Applies To:** Lync Server 2013

If this parameter is included, Install-CsDatabase will read in the Lync Server topology and install databases and stores as needed on the local computer.



**Below Content Applies To:** Skype for Business Server 2015

If this parameter is included, the Install-CsDatabase cmdlet will read in the Skype for Business Server 2015 topology and install databases and stores as needed on the local computer.



```yaml
Type: SwitchParameter
Parameter Sets: ByLocal
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipPrepareCheck
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

When present, causes Install-CsDatabase to forego its initial preparation checks.



**Below Content Applies To:** Skype for Business Server 2015

When present, causes the Install-CsDatabase cmdlet to forego its initial preparation checks.



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

### -SqlInstanceName
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the database instance where the database is to be installed.
A database instance is simply a set of running processes that provides access to database files.
If this parameter is omitted, Install-CsDatabase will use the default SQL Server instance.



**Below Content Applies To:** Skype for Business Server 2015

Name of the database instance where the database is to be installed.
A database instance is simply a set of running processes that provides access to database files.
If this parameter is omitted, the Install-CsDatabase cmdlet will use the default SQL Server instance.



```yaml
Type: String
Parameter Sets: ByCMS, ByDatabase
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerFqdn
Fully qualified domain name (FQDN) of the computer where the database is to be installed.
For example: -SqlServerFqdn atl-sql-001.litwareinc.com.

```yaml
Type: Fqdn
Parameter Sets: ByCMS, ByDatabase, ByConfigured
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Update
**Below Content Applies To:** Lync Server 2010

When present, updates the existing database.
You cannot use Update and Clean in the same command.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When present, updates the existing database.
You cannot use Update and Clean in the same command.

Note that the Update parameter cannot be used against mirrored databases; the command will fail because the mirror databases cannot be dropped and recreated.
To use the Update parameter with mirrored databases you must first use the Uninstall-CsMirrorDatabase cmdlet to disassociate the mirrored databases.
At that point you can then run Install-CsDatabase and the Update parameter.



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

### -UseDefaultSqlPaths
When specified, instructs SQL Server to select the drive where data and log files will be stored.

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

### -Force
When present, forces the installation of the new database even if an existing database of that type is currently in use.

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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\InstallDatabases.html"

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

### -Backup
When used, backs up the existing Central Management server database to the specified SQL Server instance.

```yaml
Type: SwitchParameter
Parameter Sets: ByCMS
Aliases: 
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

### -NoReindex
Prevents the index files from being rebuilt when a database is being updated.
This parameter can only be used along with the Update parameter.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Install-CsDatabase does not accept pipelined input.

###  
None.
The Install-CsDatabase cmdlet does not accept pipelined input.

## OUTPUTS

###  
Install-CsDatabase does not return any values or objects.

###  
The Install-CsDatabase cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e91c1800-35f6-40ef-840d-7a518bddcae6(OCS.14).aspx)

[Uninstall-CsDatabase]()

[Online Version](http://technet.microsoft.com/EN-US/library/e91c1800-35f6-40ef-840d-7a518bddcae6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e91c1800-35f6-40ef-840d-7a518bddcae6(OCS.16).aspx)

