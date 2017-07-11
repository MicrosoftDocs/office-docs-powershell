---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Backup-CsPool

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a backup copy of the specified Microsoft Lync Server 2013 Preview pool.

Below Content Applies To: Skype for Business Server 2015

Creates a backup copy of the specified Skype for Business Server 2015 pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Backup-CsPool -PoolFqdn <Fqdn> [-Category <BackupCategory>] [-Confirm] [-FailedOverPoolOnly] [-Force]
 [-FullBackup] [-LocalStore] [-Report <String>] [-RetryCount <Int32>] [-SteadyState] [-WaitTime <TimeSpan>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Backup-CsPool cmdlet enables administrators to copy user data and conference data for a Registrar pool to a specified backup pool.
If the primary pool should fail or otherwise become unavailable, users homed on that primary pool can then be "failed over" to the backup pool.
Those users can then log on to Lync Server via the backup pool, and continue to use that pool until their home pool has been restored.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Backup-CsPool"}

Lync Server Control Panel: The functions carried out by the Backup-CsPool cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The Backup-CsPool cmdlet enables administrators to copy user data and conference data for a Registrar pool to a specified backup pool.
If the primary pool should fail or otherwise become unavailable, users homed on that primary pool can then be "failed over" to the backup pool.
Those users can then log on to Skype for Business Server 2015 via the backup pool, and continue to use that pool until their home pool has been restored.

Skype for Business Server Control Panel: The functions carried out by the Backup-CsPool cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 backs up the pool atl-cs-001.litwareinc.com.

Backup-CsPool -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 backs up the pool atl-cs-001.litwareinc.com.

Backup-CsPool -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, a "steady state" backup is done for the pool atl-cs-001.litwareinc.com.

Backup-CsPool -PoolFqdn "atl-cs-001.litwareinc.com" -SteadyState

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, a "steady state" backup is done for the pool atl-cs-001.litwareinc.com.

Backup-CsPool -PoolFqdn "atl-cs-001.litwareinc.com" -SteadyState

## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool being backed up.
For example:

-SourcePoolFqdn "atl-cs-001.litwareinc.com"

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

### -Category
Below Content Applies To: Lync Server 2013

Enables you to select the Lync Server modules that will be backed up; if this parameter is not present then all the modules will be backed up.
Allowed values are:

* CMS
* UserData



Below Content Applies To: Skype for Business Server 2015

Enables you to select the Skype for Business Server 2015 modules that will be backed up; if this parameter is not present then all the modules will be backed up.
Allowed values are:

CMS

UserData



```yaml
Type: BackupCategory
Parameter Sets: (All)
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

### -FailedOverPoolOnly
When specified, backup will take place only if the pool is in a failed over state.
If you use this parameter then you must also use the FullBackup parameter.

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

### -FullBackup
When present, backup will not begin until the backup service has reached its final state.
You cannot use both the FullBackup parameter and the SteadyState parameter in the same command.

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

### -LocalStore
Retrieves the topology information from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -Report
File path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\BackupPool.html"

If this file already exists, it will be overwritten when you run the cmdlet.

By default, reports are written to the AppData\Local\Temp folder in your user profile.

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

### -RetryCount
Maximum number of times Backup-CsPool will try to call the backup service before failing.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SteadyState
When present, backup will not begin until the backup service has reached a steady state.
A "steady state" occurs when the pool switches to read-only or failover/failback mode, and no longer produces any new data that needs to be backed up.

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

### -WaitTime
Amount of time (in seconds) that the cmdlet will wait before checking to see if the backup service is in either the full state or the steady state.

```yaml
Type: TimeSpan
Parameter Sets: (All)
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
Backup-CsPool does not accept pipelined data.

###  
None.
The Backup-CsPool cmdlet does not accept pipelined data.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceConfiguration]()

[Get-CsBackupServiceStatus]()

[Get-CsPoolBackupRelationship]()

[Online Version](http://technet.microsoft.com/EN-US/library/66ec46de-e1e7-4e33-961d-7ef785059c48(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/66ec46de-e1e7-4e33-961d-7ef785059c48(OCS.16).aspx)

