---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsArchivingDatabasePurge

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Manually purges records from the Archiving database.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Manually purges records from the Archiving database.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Invoke-CsArchivingDatabasePurge [-Identity] <XdsIdentity> [-PurgeArchivingDataOlderThanHours] <Int32>
 [-PurgeExportedArchivesOnly] <Boolean> [[-MaxArchivingRecordsToDelete] <Int32>] [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

### SqlServer
```
Invoke-CsArchivingDatabasePurge [-PurgeArchivingDataOlderThanHours] <Int32>
 [-PurgeExportedArchivesOnly] <Boolean> [[-MaxArchivingRecordsToDelete] <Int32>] -SqlServerFqdn <String>
 [-Confirm] [-Force] [-SqlInstanceName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Many organizations find it useful to keep a transcript of all the IM sessions carried out by their users (or a selected subset of users).
For other organizations, it's mandatory to keep such transcripts.
For example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

If you have enabled archiving in your organization and if you have chosen to use Lync Server as your archiving backend, then your archiving records will be stored in the SQL Server database LcsLog.
(Alternatively, archiving records can be stored using Microsoft Exchange instead of Lync Server.
See the help topic New-CsArchivingConfiguration for more information.) Over time, the archiving database has the potential to grow extremely large.
Because of that, Lync Server provides two ways for administrators to purge older records from the database: 1) you can configure Lync Server to automatically delete older archiving records each day; and/or, 2) you can use the Invoke-CsArchivingDatabasePurge cmdlet at any time to delete archiving records from the LcsLog database.
(Invoke-CsArchivingDatabasePurge does this by calling the SQL Server stored procedures RtcCleanupTempConference and RtcCleanupDB as well as deleted stored meeting content.)

When you call Invoke-CsArchivingDatabasePurge you must specify the service location of the archiving database where the archiving records are stored (for example, ArchivingDatabase:atl-sql-001.litwareinc.com); you must also indicate the minimum age (in hours) of the archiving records to be deleted.
For example, if you specify a minimum age of 24 hours then all archiving records older than 24 hours will be deleted from the database.

Note that these records will be deleted even if the purging has been disabled for the specified database.
(That is, the EnablePurging property in the archiving configuration settings has been set to False.) The EnablePurging property only controls the automated purging of archiving records; it has no effect on the Invoke-CsArchivingDatabasePurge cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Invoke-CsArchivingDatabasePurge"}

Lync Server Control Panel: The functions carried out by the Invoke-CsArchivingDatabasePurge cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

Many organizations find it useful to keep a transcript of all the IM sessions carried out by their users (or a selected subset of users).
For other organizations, it's mandatory to keep such transcripts.
For example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

If you have enabled archiving in your organization and if you have chosen to use Skype for Business Server 2015 as your archiving backend, then your archiving records will be stored in the SQL Server database LcsLog.
(Alternatively, archiving records can be stored using Microsoft Exchange instead.
See the help topic for the New-CsArchivingConfiguration cmdlet for more information.) Over time, the archiving database has the potential to grow extremely large.
Because of that, Skype for Business Server 2015 provides two ways for administrators to purge older records from the database: 1) you can configure Skype for Business Server 2015 to automatically delete older archiving records each day; and/or, 2) you can use the Invoke-CsArchivingDatabasePurge cmdlet at any time to delete archiving records from the LcsLog database.
(The Invoke-CsArchivingDatabasePurge cmdlet does this by calling the SQL Server stored procedures RtcCleanupTempConference and RtcCleanupDB as well as deleted stored meeting content.)

When you call the Invoke-CsArchivingDatabasePurge cmdlet you must specify the service location of the archiving database where the archiving records are stored (for example, ArchivingDatabase:atl-sql-001.litwareinc.com); you must also indicate the minimum age (in hours) of the archiving records to be deleted.
For example, if you specify a minimum age of 24 hours then all archiving records older than 24 hours will be deleted from the database.

Note that these records will be deleted even if the purging has been disabled for the specified database.
(That is, the EnablePurging property in the archiving configuration settings has been set to False.) The EnablePurging property only controls the automated purging of archiving records; it has no effect on the Invoke-CsArchivingDatabasePurge cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsArchivingDatabasePurge cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 purges all the records more than 24 hours old from the archiving database on atl-sql-001.litwareinc.com.
To ensure that all the records are deleted, including records that have not been exported, the PurgeExportedArchivesOnly parameter is set to False ($False).

Invoke-CsArchivingDatabasePurge -Identity "service:ArchivingDatabase:atl-sql-001.litwareinc.com" -PurgeArchivingDataOlderThanHours 24 -PurgeExportedArchivesOnly $False

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 purges all the records more than 24 hours old from the archiving database on atl-sql-001.litwareinc.com.
To ensure that all the records are deleted, including records that have not been exported, the PurgeExportedArchivesOnly parameter is set to False ($False).

Invoke-CsArchivingDatabasePurge -Identity "service:ArchivingDatabase:atl-sql-001.litwareinc.com" -PurgeArchivingDataOlderThanHours 24 -PurgeExportedArchivesOnly $False

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1; in this case, however, the Confirm parameter is added using this syntax:

-Confirm:$False

That syntax suppresses the confirmation prompts that would otherwise appear when purging archiving records.

Invoke-CsArchivingDatabasePurge -Identity "service:ArchivingDatabase:atl-sql-001.litwareinc.com" -PurgeArchivingDataOlderThanHours 24 -PurgeExportedArchivesOnly $False -Confirm:$False

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1; in this case, however, the Confirm parameter is added using this syntax:

-Confirm:$False

That syntax suppresses the confirmation prompts that would otherwise appear when purging archiving records.

Invoke-CsArchivingDatabasePurge -Identity "service:ArchivingDatabase:atl-sql-001.litwareinc.com" -PurgeArchivingDataOlderThanHours 24 -PurgeExportedArchivesOnly $False -Confirm:$False

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 purges all the records more than 24 hours old from all the Archiving databases in use in the organization.
To do this, the first command in the example uses the Get-CsService cmdlet and the ArchivingDatabase parameter to return a collection of all the archiving databases.
This collection is then piped to the ForEach-Object cmdlet.
In turn, ForEach-Object takes each database in the collection and then runs Invoke-CsArchivingDatabasePurge against that database, purging all the records more than 24 hours old.

Get-CsService -ArchivingDatabase | ForEach-Object {Invoke-CsArchivingDatabasePurge -Identity $_.Identity -PurgeArchivingDataOlderThanHours 24 -PurgeExportedArchivesOnly $False -Confirm:$False}

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 purges all the records more than 24 hours old from all the Archiving databases in use in the organization.
To do this, the first command in the example uses the Get-CsService cmdlet and the ArchivingDatabase parameter to return a collection of all the archiving databases.
This collection is then piped to the ForEach-Object cmdlet.
In turn, the ForEach-Object cmdlet takes each database in the collection and then runs the Invoke-CsArchivingDatabasePurge cmdlet against that database, purging all the records more than 24 hours old.

Get-CsService -ArchivingDatabase | ForEach-Object {Invoke-CsArchivingDatabasePurge -Identity $_.Identity -PurgeArchivingDataOlderThanHours 24 -PurgeExportedArchivesOnly $False -Confirm:$False}

## PARAMETERS

### -Identity
Service Identity of the archiving database to be purged.
You can retrieve the Identities for your archiving databases by running this command:

Get-CsService -ArchivingDatabase

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

### -PurgeArchivingDataOlderThanHours
Specifies the age (in hours) of the archiving records to be purged from the database; any records older than this value will be deleted.
PurgeArchivingDataOlderThanHours can be set to any integer value between 1 and 2147483647, inclusive.

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

### -PurgeExportedArchivesOnly
When present, records will be removed for the archiving database only if those records have been exported (and, as a result, have been marked for deletion).
Records that have not been exported will remain in the database, even if those records are older than the value specified by the PurgeArchivingDataOlderThanHours property.

```yaml
Type: Boolean
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
Fully qualified domain name of the computer where the archiving database is located.
For example:

-SqlServerFqdn "atl-sql-001.litwareinc.com"

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

### -MaxArchivingRecordsToDelete
Specifies the maximum number of archiving records to be purged from the database; if you set this value to 99 and you have 100 records in the database that meet the PurgeArchivingDataOlderThanHours criterion, only the 99 oldest records will be deleted.

MaxArchivingRecordsToDelete can be set to any integer value between 1 and 2147483647, inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlInstanceName
SQL Server instance name for the archiving database.
For example:

-SqlInstanceName "archinst"

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Invoke-CsArchivingDatabasePurge accepts pipelined instances of the Microsoft.Rtc.Management.Xds.DisplayArchivingDatabase#Decorated class.

###  
The Invoke-CsArchivingDatabasePurge cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.Xds.DisplayArchivingDatabase#Decorated class.

## OUTPUTS

###  
Invoke-CsArchivingDatabasePurge returns instances of the Microsoft.Rtc.Management.Purge.ArchDataPurgeStatistics class.

###  
The Invoke-CsArchivingDatabasePurge cmdlet returns instances of the Microsoft.Rtc.Management.Purge.ArchDataPurgeStatistics class.

## NOTES

## RELATED LINKS

[New-CsArchivingConfiguration]()

[Set-CsArchivingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/02310b08-736d-4ce9-91d8-5a6c8f323d7c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/02310b08-736d-4ce9-91d8-5a6c8f323d7c(OCS.16).aspx)

