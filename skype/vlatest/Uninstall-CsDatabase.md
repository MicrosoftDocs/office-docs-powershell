---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Uninstall-CsDatabase

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Deletes the specified Microsoft Lync Server 2010 database.

Below Content Applies To: Lync Server 2013

Deletes the specified Lync Server database.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Deletes the specified Skype for Business Server 2015 database.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### ByCMS
```
Uninstall-CsDatabase -SqlServerFqdn <Fqdn> [-CentralManagementDatabase] [-Detach] [-SqlInstanceName <String>]
 [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ByDatabase
```
Uninstall-CsDatabase -SqlServerFqdn <Fqdn> -DatabaseType <DatabaseNameType> [-Detach]
 [-SqlInstanceName <String>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Lync Server 2010 makes extensive use of SQL Server databases such as the Central Management store and the Archiving database.
These databases are set up at the same time you install Lync Server 2010 or at the same time you install a Lync Server 2010 role (such as Monitoring Server) that requires a database back end.
After the databases have been installed, you will rarely need to uninstall them.

However, it is possible that you might need to uninstall a Lync Server 2010 database at some point; for example, a hardware failure or an issue with network connectivity might make an existing database unusable.
Regardless of the reason, the Uninstall-CsDatabase cmdlet provides a way for you to remove or detach any of the SQL Server databases used by Lync Server 2010.

Who can run this cmdlet: You must be a member of the domain, a SQL Server administrator, and a local administrator on the computer where SQL Server is installed in order to run the Uninstall-CsDatabase cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Uninstall-CsDatabase"}

Below Content Applies To: Lync Server 2013

Lync Server makes extensive use of SQL Server databases such as the Central Management store and the Archiving database.
These databases are set up at the same time you install Lync Server or at the same time you install a Lync Server role that requires a database back end.
After the databases have been installed, you will rarely need to uninstall them.

However, it is possible that you might need to uninstall a Lync Server database at some point; for example, a hardware failure or an issue with network connectivity might make an existing database unusable.
Regardless of the reason, the Uninstall-CsDatabase cmdlet provides a way for you to remove or detach any of the SQL Server databases used by Lync Server.

Who can run this cmdlet: You must be a member of the domain, a SQL Server administrator, and a local administrator on the computer where SQL Server is installed in order to run the Uninstall-CsDatabase cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Uninstall-CsDatabase"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 makes extensive use of SQL Server databases such as the Central Management store and the Archiving database.
These databases are set up at the same time you install Skype for Business Server 2015 or at the same time you install a Skype for Business Server 2015 role that requires a database back end.
After the databases have been installed, you will rarely need to uninstall them.

However, it is possible that you might need to uninstall a Skype for Business Server 2015 database at some point; for example, a hardware failure or an issue with network connectivity might make an existing database unusable.
Regardless of the reason, the Uninstall-CsDatabase cmdlet provides a way for you to remove or detach any of the SQL Server databases used by Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Uninstall-CsDatabase -CentralManagementDatabase -SqlServerFqdn atl-sql-001.litwareinc.com
```

The command shown in Example 1 deletes the Central Management store from the computer atl-sql-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the Central Management store from the computer atl-sql-001.litwareinc.com.

Uninstall-CsDatabase -CentralManagementDatabase -SqlServerFqdn atl-sql-001.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the Central Management store from the computer atl-sql-001.litwareinc.com.

Uninstall-CsDatabase -CentralManagementDatabase -SqlServerFqdn atl-sql-001.litwareinc.com

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Uninstall-CsDatabase -DatabaseType User -SqlServerFqdn atl-sql-001.litwareinc.com
```

In Example 2, the User database is deleted from the computer atl-sql-001.litwareinc.com.
When you use the DatabaseType parameter, all stores related to the specified database are deleted.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the User database is deleted from the computer atl-sql-001.litwareinc.com.
When you use the DatabaseType parameter, all stores related to the specified database are deleted.

Uninstall-CsDatabase -DatabaseType User -SqlServerFqdn atl-sql-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the User database is deleted from the computer atl-sql-001.litwareinc.com.
When you use the DatabaseType parameter, all stores related to the specified database are deleted.

Uninstall-CsDatabase -DatabaseType User -SqlServerFqdn atl-sql-001.litwareinc.com

## PARAMETERS

### -SqlServerFqdn
Fully qualified domain name (FQDN) of the computer or SQL Server cluster where the database is located.
For example: -SqlServer atl-sql-001.litwareinc.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CentralManagementDatabase
If present, uninstalls the Central Management store.
You cannot use both CentralManagementDatabase and DatabaseType in the same command.

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

### -DatabaseType
Below Content Applies To: Lync Server 2010

Database to be deleted.
Valid values are:

Application

Archiving

Monitoring

Provision

User

To delete the Central Management store, use the CentralManagementDatabase parameter.



Below Content Applies To: Lync Server 2013

Database to be deleted.
Valid values are:

Application

Archiving

CentralAdmin

Edge

Lyss

Monitoring

PersistentChat

PersistentChatCompliace

Provision

Registrar

User

To delete the Central Management store, use the CentralManagementDatabase parameter.



Below Content Applies To: Skype for Business Server 2015

Database to be deleted.
Valid values are:

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

To delete the Central Management store, use the CentralManagementDatabase parameter.



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

### -Detach
If present, detaches the specified database.
When a database is detached, all the file locks imposed by SQL Server are removed.
This enables you to directly access the database files in order to do such things as copy those files to another computer.

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
Name of the database instance containing the database to be removed.
A database instance is a set of running processes that provides access to database files.

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

### -Force
If present, forces removal of the database even if that database is currently in use.

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
For example: -Report "C:\Logs\UninstallDatabase.html"

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Uninstall-CsDatabase does not accept pipelined input.

###  
None.
The Uninstall-CsDatabase cmdlet does not accept pipelined input.

## OUTPUTS

###  
Uninstall-CsDatabase does not return any values or objects.

###  
The Uninstall-CsDatabase cmdlet does not return any values or objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/bd08ac1c-cfcd-4cf8-b082-7d2e83a2837e(OCS.14).aspx)

[Install-CsDatabase]()

[Online Version](http://technet.microsoft.com/EN-US/library/bd08ac1c-cfcd-4cf8-b082-7d2e83a2837e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/bd08ac1c-cfcd-4cf8-b082-7d2e83a2837e(OCS.16).aspx)

