---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsBackupServiceConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Retrieves the backup service configuration settings for Microsoft Lync Server 2013 Preview.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Retrieves the backup service configuration settings for Skype for Business Server 2015.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsBackupServiceConfiguration [[-Identity] <XdsIdentity>] [-AuthorizedLocalAccounts <String>]
 [-AuthorizedUniversalGroups <String>] [-Confirm] [-Force] [-MaxBatchesPerCmsSync <Int32>]
 [-MaxBatchesPerUserStoreSync <Int32>] [-MaxConcurrentCalls <Int32>] [-MaxDataConfPackageSizeKB <Int32>]
 [-SyncInterval <TimeSpan>] [-WhatIf] [-MaxHighPriQueuePercentagePerUserStoreSync <Int32>] [<CommonParameters>]
```

### Instance
```
Set-CsBackupServiceConfiguration [-AuthorizedLocalAccounts <String>] [-AuthorizedUniversalGroups <String>]
 [-Confirm] [-Force] [-Instance <PSObject>] [-MaxBatchesPerCmsSync <Int32>]
 [-MaxBatchesPerUserStoreSync <Int32>] [-MaxConcurrentCalls <Int32>] [-MaxDataConfPackageSizeKB <Int32>]
 [-SyncInterval <TimeSpan>] [-WhatIf] [-MaxHighPriQueuePercentagePerUserStoreSync <Int32>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The backup service configuration settings are used to manage pool backups in Microsoft Lync Server 2013 Preview.
Note that Lync Server allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule, and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D, and E.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsBackupServiceConfiguration"}

Lync Server Control Panel: The functions carried out by the Set-CsBackupServiceConfiguration cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The backup service configuration settings are used to manage pool backups in Skype for Business Server 2015.
Note that Skype for Business Server 2015 allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule, and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D, and E.

Skype for Business Server Control Panel: The functions carried out by the Set-CsBackupServiceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 assigns the Active Directory security group Schema Admins to the AuthorizedUniversalGroup property for the global collection of backup service settings.

Set-CsBackupServiceConfiguration -Identity "global" -AuthorizedUniversalGroup "Schema Admins"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 assigns the Active Directory security group Schema Admins to the AuthorizedUniversalGroups property for the global collection of backup service settings.

Set-CsBackupServiceConfiguration -Identity "global" -AuthorizedUniversalGroups "Schema Admins"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the MaxConcurrentCalls property of the global collection of backup service settings is set to 12.

Set-CsBackupServiceConfiguration -Identity "global" -MaxConcurrentCalls 12

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the MaxConcurrentCalls property of the global collection of backup service settings is set to 12.

Set-CsBackupServiceConfiguration -Identity "global" -MaxConcurrentCalls 12

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 modifies the SyncInterval property of the global collection of backup service settings.
In this example, SyncInterval is set to 10 minutes: 00 hours : 10 minutes : 00 seconds.

Set-CsBackupServiceConfiguration -Identity "global" -SyncInterval "00:10:00"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 modifies the SyncInterval property of the global collection of backup service settings.
In this example, SyncInterval is set to 10 minutes: 00 hours : 10 minutes : 00 seconds.

Set-CsBackupServiceConfiguration -Identity "global" -SyncInterval "00:10:00"

## PARAMETERS

### -AuthorizedLocalAccounts
Names of the local users/local groups that are authorized to run the backup service.
The default value is Network Service.

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

### -AuthorizedUniversalGroups
Names of the universal groups authorized to run the backup service.
The default value is Schema admins.

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

### -Identity
Below Content Applies To: Lync Server 2013

Unique identifier for the backup service configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling Set-CsBackupServiceConfiguration.
If you prefer, however, you can use the following syntax to reference the global settings:

-Identity global



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the backup service configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Set-CsBackupServiceConfiguration cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

-Identity global



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxBatchesPerCmsSync
Maximum number of batches that the CMS backup module will export during each export cycle.
The default value is 500.

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

### -MaxBatchesPerUserStoreSync
Maximum number of batches that the User Store backup module will export during each export cycle.
The default value is 500.

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

### -MaxConcurrentCalls
The maximum number of Windows Communication Foundation (WCF) calls that can be made to the backup service at the same time.
The default value is 10.

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

### -MaxDataConfPackageSizeKB
Maximum size of the data package (in kilobytes) that the Data Conference module will export during each export cycle.
The default value is 102400.

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

### -SyncInterval
Below Content Applies To: Lync Server 2013

Specifies the amount of time that the service waits before synchronizing a pool with its backup pool.
The default value is 30 seconds (00:00:30, or 00 hours, 00 minutes, 30 seconds).
The SyncInterval can be configured to any value between 5 seconds (00:00:05) and 3 hours (03:00:00), inclusive.



Below Content Applies To: Skype for Business Server 2015

Specifies the amount of time that the service waits before synchronizing a pool with its backup pool.
The default value is 2 minutes (00:02:00, or 00 hours, 02 minutes, 00 seconds).
The SyncInterval can be configured to any value between 5 seconds (00:00:05) and 3 hours (03:00:00), inclusive.



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

### -MaxHighPriQueuePercentagePerUserStoreSync
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Set-CsBackupServiceConfiguration accepts piped instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

###  
The Set-CsBackupServiceConfiguration cmdlet accepts piped instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## OUTPUTS

###  
None.
Instead, Set-CsBackupServiceConfiguration modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

###  
None.
Instead, the Set-CsBackupServiceConfiguration cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceConfiguration]()

[Remove-CsBackupServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/72ed064e-5f67-481f-802a-74846cecb189(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/72ed064e-5f67-481f-802a-74846cecb189(OCS.16).aspx)

