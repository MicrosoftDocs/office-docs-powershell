---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsManagementServerFailover

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Invokes the process by which the Microsoft Lync Server 2013 Preview Central Management store is failed over.
When the Central Management store is failed over the primary database will be replaced by either a pre-assigned mirror database or a specified backup database.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Invokes the process by which the Skype for Business Server 2015 Central Management Store (CMS) is failed over to another pool.
When the Central Management store is failed over the primary database will be replaced by either a preassigned database or a specified backup database.
To run this cmdlet, you need to use an account that is a member of the RTCUniversalServerAdmins group.
This cmdlet should be run on a server in the pool to which you want to failerover the CMS.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### DisasterRecovery
```
Invoke-CsManagementServerFailover -BackupSqlServerFqdn <Fqdn> [-Force] [-BackupMirrorSqlInstanceName <String>]
 [-BackupMirrorSqlServerFqdn <Fqdn>] [-BackupSqlInstanceName <String>] [-Confirm] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

### Normal
```
Invoke-CsManagementServerFailover [-Confirm] [-Report <String>] [-Restore] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Invoke-CsManagementServerFailover cmdlet enables administrators to "failover" the Central Managament Server (CMS).
Invoke-CsManagementServerFailover provides two different methodsfor failing over the CMS: 1) you can failover to a specified backup instance of SQL Server, or, 2) you can failover to a preassigned mirror database.
To failover to a specified backup instance, use the BackupSqlServerFqdn and BackupSqlInstanceName parameters.
To failover to the mirror database, use the BackupMirrorSqlServerFqdn and BackupMirrorSqlInstanceName parameters.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Invoke-CsManagementServerFailover"}

Lync Server Control Panel: The functions carried out by the Invoke-CsManagementServerFailover cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Invoke-CsManagementServerFailover cmdlet enables administrators to "failover" the Central Management Server (CMS).
You can only invoke the failover to the database defined in the Topology Builder.
The Invoke-CsManagementServerFailover cmdlet provides two methods for failing over the CMS:

Failover when the CMS is available by running the cmdlet without any target database parameters as in Example 1.

Failover when the CMS is unavailable (in disaster recovery mode) by specifying the BackupSqlServerFqdn parameter and the corresponding BackupSqlInstanceName parameter as in Example 2.
If the database defined in the Topology Builder is mirrored, add the BackupMirrorSqlServerFqdn and BackupMirrorSqlInstanceName parameters.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsManagementServerFailover cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 fails over the Central Management store for Lync Server 2013 Preview.
In this case, the existing management store will be replaced by the RTC database instance found on the computer redmond-cs-001.litwareinc.com.

Invoke-CsManagementServerFailover -BackupSqlServerFqdn "redmond-cs-001.litwareinc.com" - BackupSqlInstanceName "RTC" -Force

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 fails over the Central Management store for Skype for Business Server 2015.
In this case, the existing management store will be replaced by the preassigned database specified in the topology.

Invoke-CsManagementServerFailover

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 fails over the Central Management store for Skype for Business Server 2015.
In this case, the existing management store will be replaced by the RTC database instance found on the computer redmond-cs-001.litwareinc.com.

Invoke-CsManagementServerFailover -BackupSqlServerFqdn "redmond-cs-001.litwareinc.com" - BackupSqlInstanceName "RTC" -Force

## PARAMETERS

### -BackupSqlServerFqdn
**Below Content Applies To:** Lync Server 2013

Fully qualified domain name of the computer hosting the SQL Server backup database.
This parameter is required if you are running Invoke-CsManagementServerFailover in disaster recovery mode.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name of the computer hosting the SQL Server backup database.
This parameter is required if you are running the Invoke-CsManagementServerFailover cmdlet in disaster recovery mode.



```yaml
Type: Fqdn
Parameter Sets: DisasterRecovery
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2013

Suppresses the display of any non-fatal error message that might occur when running the command.
This parameter is required if you are running Invoke-CsManagementServerFailover in disaster recovery mode.



**Below Content Applies To:** Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.
This parameter is required if you are running the Invoke-CsManagementServerFailover cmdlet in disaster recovery mode.

You should not use the Force parameter if you are running the cmdlet for purposes other than disaster recovery, as it will not account for replication during the failover.
When the parameter is not used, the cmdlet will first make sure all replications are done, then set the source DB to read-only mode.



```yaml
Type: SwitchParameter
Parameter Sets: DisasterRecovery
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupMirrorSqlInstanceName
SQL Server instance for the mirror database.

```yaml
Type: String
Parameter Sets: DisasterRecovery
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupMirrorSqlServerFqdn
Fully qualified domain name of the computer hosting the SQL Server mirror database.

```yaml
Type: Fqdn
Parameter Sets: DisasterRecovery
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupSqlInstanceName
SQL Server instance for the backup database.

```yaml
Type: String
Parameter Sets: DisasterRecovery
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\CMSFailover.html"

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

### -Restore
When specified, restores the existing Central Management Server database.

```yaml
Type: SwitchParameter
Parameter Sets: Normal
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
Invoke-CsManagementServerFailover does not accept pipelined input.

###  
None.
The Invoke-CsManagementServerFailover cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Invoke-CsDatabaseFailover]()

[Online Version](http://technet.microsoft.com/EN-US/library/060ab02a-1267-4b35-bc2b-6a4a35616be0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/060ab02a-1267-4b35-bc2b-6a4a35616be0(OCS.16).aspx)

