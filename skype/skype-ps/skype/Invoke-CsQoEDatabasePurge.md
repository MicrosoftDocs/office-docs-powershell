---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Invoke-CsQoEDatabasePurge
schema: 2.0.0
---

# Invoke-CsQoEDatabasePurge

## SYNOPSIS

Manually purges records from the Quality of Experience (QoE) database.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Invoke-CsQoEDatabasePurge [-Identity] <XdsIdentity> [-PurgeQoEDataOlderThanDays] <Int32> [-Confirm] [-Force]
 [-WhatIf] [<CommonParameters>]
```

### SqlServer
```
Invoke-CsQoEDatabasePurge [-PurgeQoEDataOlderThanDays] <Int32> -SqlServerFqdn <String> [-Confirm] [-Force]
 [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

Quality of Experience (QoE) metrics track the quality of audio and video calls made in your organization, including such things as the number of network packets lost, background noise, and the amount of "jitter" (differences in packet delay).
These metrics are stored in a database apart from other data (such as call detail records), which allows you to enable and disable QoE independent of other data recording.

Quality of Experience records are stored in the SQL Server database LcsQoEMetrics.
Over time, this database has the potential to grow extremely large.
Because of that, Lync Server provides two ways for administrators to purge older records from the database: 1) you can configure Skype for Business Server to automatically delete older QoE records each day; and/or, 2) you can use the Invoke-CsQoEDatabasePurge cmdlet at any time to delete Quality of Experience records from the LcsQoEMetrics database.
(The Invoke-CsQoEDatabasePurge cmdlet does this by calling the SQL Server stored procedure QoePurgeOutdatedReports.)

When you call the Invoke-CsQoEDatabasePurge cmdlet you must specify the service location of the monitoring database where the QoE records are stored (for example, MonitoringDatabase:atl-sql-001.litwareinc.com); you must also indicate the minimum age (in days) of the records to be deleted.
For example, if you specify a minimum age of 10 days then all QoE records older than 10 days will be deleted from the database.

Note that these records will be deleted even if the purging has been disabled for the specified database.
(That is, the EnablePurging property in the QoE configuration settings has been set to False.) The EnablePurging property only controls the automated purging of archiving records; it has no effect on the Invoke-CsQoEDatabasePurge cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsQoEDatabasePurge cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Invoke-CsQoEDatabasePurge -Identity "service:MonitoringDatabase:atl-sql-001.litwareinc.com" -PurgeQoEDataOlderThanDays 10
```

The command shown in Example 1 purges all the QoE records more than 10 days old from the monitoring database on atl-sql-001.litwareinc.com.


### -------------------------- Example 2 -------------------------- 
```

Invoke-CsQoEDatabasePurge -Identity "service:MonitoringDatabase:atl-sql-001.litwareinc.com" -PurgeQoEDataOlderThanDays 10 -Confirm:$False
```

The command shown in Example 2 is a variation of the command shown in Example 1; in this case, however, the Confirm parameter is added using this syntax:

`-Confirm:$False`

That syntax suppresses the confirmation prompts that would otherwise appear when purging QoE records.


### -------------------------- Example 3 -------------------------- 
```
Get-CsService -MonitoringDatabase | Invoke-CsQoEDatabasePurge -PurgeQoEDataOlderThanDays 10 -Confirm:$False
```

Example 3 purges all the QoE records more than 10 days old from all monitoring QoE databases in use in the organization.
To do this, the first command in the example uses the Get-CsService cmdlet and the MonitoringDatabase parameter to return a collection of all the monitoring databases.
This collection is then piped to the ForEach-Object cmdlet.
In turn, the ForEach-Object cmdlet takes each database in the collection and then runs the Invoke-CsQoEDatabasePurge cmdlet against that database, purging all the Quality of Experience records more than 10 days old.


## PARAMETERS

### -Identity
Service Identity of the monitoring database to be purged.
You can retrieve the Identities for your monitoring databases by running this command:

`Get-CsService -MonitoringDatabase`

Note that you cannot use the Identity parameter and the SqlServerFqdn parameter in the same command.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PurgeQoEDataOlderThanDays
Specifies the age (in days) of the QoE records to be purged from the database; any records older than this value will be deleted.

PurgeQoEDataOlderThanHours can be set to any integer value between 1 and 2147483647, inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerFqdn
Fully qualified domain name of the computer where the QoE database is located.
For example:

`-SqlServerFqdn "atl-sql-001.litwareinc.com"`

Note that you cannot use the Identity parameter and the SqlServerFqdn parameter in the same command.

```yaml
Type: String
Parameter Sets: SqlServer
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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -SqlInstanceName
SQL Server instance name for the QoE database.
For example:

`-SqlInstanceName "archinst"`

```yaml
Type: String
Parameter Sets: SqlServer
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
The Invoke-CsQoEDatabasePurge cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.Xds.DisplayMonitoringDatabase#Decorated class.

## OUTPUTS

###  
The Invoke-CsQoEDatabasePurge cmdlet returns instances of the Microsoft.Rtc.Management.Purge.QoEDataPurgeStatistics class.

## NOTES

## RELATED LINKS

[New-CsQoEConfiguration](New-CsQoEConfiguration.md)

[Set-CsQoEConfiguration](Set-CsQoEConfiguration.md)
