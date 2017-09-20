---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsCdrDatabasePurge

## SYNOPSIS

Manually purges records from the Call Detail records (CDR) database.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Invoke-CsCdrDatabasePurge [-Identity] <XdsIdentity> [-PurgeCallDetailDataOlderThanDays] <Int32>
 [-PurgeDiagnosticDataOlderThanDays] <Int32> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### SqlServer
```
Invoke-CsCdrDatabasePurge [-PurgeCallDetailDataOlderThanDays] <Int32>
 [-PurgeDiagnosticDataOlderThanDays] <Int32> -SqlServerFqdn <String> [-Confirm] [-Force]
 [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

Call detail recording (CDR) provides a way for you to track usage of Skype for Business Server capabilities such as Voice over IP (VoIP) phone calls; instant messaging (IM); file transfers; audio/video (A/V) conferencing; and application sharing sessions.
CDR keeps usage information: it logs information such as the parties involved in the call; the length of the call; and whether or not any files were transferred.
However, CDR does not make a recording of the call itself.

CDR also keeps track of call error information: detailed diagnostic data for both peer-to-peer sessions and for conferencing calls.

Call detail records are stored in the SQL Server database LcsCDR.
Over time, this database has the potential to grow extremely large.
Because of that, Skype for Business Server provides two ways for administrators to purge older records from the database: 1) you can configure Skype for Business Server to automatically delete older CDR records each day; and/or, 2) you can use the Invoke-CsCdrDatabasePurge cmdlet at any time to delete CDR records from the LcsCDR database.
(The Invoke-CsCdrDatabasePurge cmdlet does this by calling the SQL Server stored procedure RtcCleanupDB.)

When you call the Invoke-CsCdrDatabasePurge cmdlet you must specify the service location of the monitoring database where the CDR records are stored (for example, MonitoringDatabase:atl-sql-001.litwareinc.com); you must also indicate the minimum age (in days) of the call detail and diagnostic data records to be deleted.
For example, if you specify a minimum age of 10 days for call detail records, then all call detail records older than 10 days will be deleted from the database.

Note that these records will be deleted even if the purging has been disabled for the specified database.
(That is, the EnablePurging property in the CDR configuration settings has been set to False.) The EnablePurging property only controls the automated purging of CDR records; it has no effect on the Invoke-CsCdrDatabasePurge cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsCdrDatabasePurge cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Invoke-CsCdrDatabasePurge -Identity "service:MonitoringDatabase:atl-sql-001.litwareinc.com" -PurgeCallDetailDataOlderThanDays 10 -PurgeDiagnosticDataOlderThanDays 10
```

The command shown in Example 1 deletes all the records (both call detail and diagnostic records) from the monitoring database atl-sql-001.litwareinc.com that are more than 10 days old.

### -------------------------- Example 2 -------------------------- 
```

Invoke-CsCdrDatabasePurge -Identity "service:MonitoringDatabase:atl-sql-001.litwareinc.com" -PurgeCallDetailDataOlderThanDays 10 -PurgeDiagnosticDataOlderThanDays 10 -Confirm:$False
```

The command shown in Example 2 is a variation of the command shown in Example 1; in this case, however, the Confirm parameter is added using this syntax:

`-Confirm:$False`

That syntax suppresses the confirmation prompts that would otherwise appear when purging CDR records.


### -------------------------- Example 3 -------------------------- 
```

Get-CsService -MonitoringDatabase | ForEach-Object {Invoke-CsCdrDatabasePurge -Identity $_.Identity -PurgeCallDetailDataOlderThanDays 10 -PurgeDiagnosticDataOlderThanDays 10 -Confirm:$False}
```

Example 3 purges all the records more than 10 days old from all the CDR databases in use in the organization.
To do this, the first command in the example uses the Get-CsService cmdlet and the MonitoringDatabase parameter to return a collection of all the monitoring databases.
This collection is then piped to the ForEach-Object cmdlet.
In turn, the ForEach-Object cmdlet takes each database in the collection and then runs the Invoke-CsCdrDatabasePurge cmdlet against that database, purging all the call detail records more than 10 days old.


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

### -PurgeCallDetailDataOlderThanDays

Specifies the age (in days) of the call detail records to be purged from the database; any records older than this value will be deleted.
Call detail records represent user/session reports.
They differ from diagnostic data reports, which are diagnostic logs uploaded by client applications such as Skype for Business.

PurgeCallDetailDataOlderThanDays can be set to any integer value between 1 and 2147483647, inclusive.



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

### -PurgeDiagnosticDataOlderThanDays

Specifies the age (in days) of the diagnostic data records to be purged from the database; any records older than this value will be deleted.
Diagnostic data reports are diagnostic logs uploaded by client applications such as Skype for Business.

PurgeDiagnosticDataOlderThanHours can be set to any integer value between 1 and 2147483647, inclusive.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerFqdn
Fully qualified domain name of the computer where the CDR database is located.
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
SQL Server instance name for the CDR database.
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
The Invoke-CsCdrDatabasePurge cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.Xds.DisplayMonitoringDatabase#Decorated class.

## OUTPUTS


###  
The Invoke-CsCdrDatabasePurge cmdlet returns instances of the Microsoft.Rtc.Management.Purge.CdrDataPurgeStatistics class.

## NOTES

## RELATED LINKS

[New-CsCdrConfiguration]()

[Set-CsCdrConfiguration]()
