---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/set-csbackupserviceconfiguration
schema: 2.0.0
title: Set-CsBackupServiceConfiguration
---

# Set-CsBackupServiceConfiguration

## SYNOPSIS
Retrieves the backup service configuration settings for Skype for Business Server.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsBackupServiceConfiguration [[-Identity] <XdsIdentity>] [-AuthorizedLocalAccounts <String>]
 [-AuthorizedUniversalGroups <String>] [-Confirm] [-Force] [-MaxBatchesPerCmsSync <Int32>]
 [-MaxBatchesPerUserStoreSync <Int32>] [-MaxConcurrentCalls <Int32>] [-MaxDataConfPackageSizeKB <Int32>]
 [-SyncInterval <TimeSpan>] [-WhatIf] [-MaxHighPriQueuePercentagePerUserStoreSync <Int32>] [-EnableRgsBackupService <Boolean>]  [<CommonParameters>]
```

### Instance
```
Set-CsBackupServiceConfiguration [-AuthorizedLocalAccounts <String>] [-AuthorizedUniversalGroups <String>]
 [-Confirm] [-Force] [-Instance <PSObject>] [-MaxBatchesPerCmsSync <Int32>]
 [-MaxBatchesPerUserStoreSync <Int32>] [-MaxConcurrentCalls <Int32>] [-MaxDataConfPackageSizeKB <Int32>]
 [-SyncInterval <TimeSpan>] [-WhatIf] [-MaxHighPriQueuePercentagePerUserStoreSync <Int32>] [-EnableRgsBackupService <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
The backup service configuration settings are used to manage pool backups in Skype for Business Server.
Note that Skype for Business Server allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D and E.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsBackupServiceConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Set-CsBackupServiceConfiguration -Identity "global" -AuthorizedUniversalGroups "Schema Admins"
```

The command shown in Example 1 assigns the Active Directory security group Schema Admins to the AuthorizedUniversalGroups property for the global collection of backup service settings.


### Example 2
```
Set-CsBackupServiceConfiguration -Identity "global" -MaxConcurrentCalls 12
```

In Example 2, the MaxConcurrentCalls property of the global collection of backup service settings is set to 12.


### Example 3
```
Set-CsBackupServiceConfiguration -Identity "global" -SyncInterval "00:10:00"
```

Example 3 modifies the SyncInterval property of the global collection of backup service settings.
In this example, SyncInterval is set to 10 minutes: 00 hours : 10 minutes : 00 seconds.


## PARAMETERS

### -AuthorizedLocalAccounts

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Names of the local users/local groups that are authorized to run the backup service.
The default value is Network Service.

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

### -AuthorizedUniversalGroups

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Names of the universal groups authorized to run the backup service.
The default value is Schema admins.

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

### -EnableRgsBackupService

> Applicable: Skype for Business Server 2019

Indicates whether the backup service for RGS has been enabled or not. If it is set to true RGSBackupService will start syncing RGS data on paired pools

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier for the backup service configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the `Set-CsBackupServiceConfiguration` cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

`-Identity global`


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxBatchesPerCmsSync

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Maximum number of batches that the CMS backup module will export during each export cycle.
The default value is 500.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxBatchesPerUserStoreSync

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Maximum number of batches that the User Store backup module will export during each export cycle.
The default value is 500.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentCalls

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The maximum number of Windows Communication Foundation (WCF) calls that can be made to the backup service at the same time.
The default value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDataConfPackageSizeKB

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Maximum size of the data package (in kilobytes) that the Data Conference module will export during each export cycle.
The default value is 102400.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxHighPriQueuePercentagePerUserStoreSync

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncInterval

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Specifies the amount of time that the service waits before synchronizing a pool with its backup pool.
The default value is 2 minutes (00:02:00, or 00 hours, 02 minutes, 00 seconds).
The SyncInterval can be configured to any value between 5 seconds (00:00:05) and 3 hours (03:00:00), inclusive.


```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration
The `Set-CsBackupServiceConfiguration` cmdlet accepts piped instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## OUTPUTS

### None
Instead, the `Set-CsBackupServiceConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceConfiguration](Get-CsBackupServiceConfiguration.md)

[Remove-CsBackupServiceConfiguration](Remove-CsBackupServiceConfiguration.md)
