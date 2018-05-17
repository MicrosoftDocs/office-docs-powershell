---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsBackupServiceConfiguration
schema: 2.0.0
---

# Remove-CsBackupServiceConfiguration

## SYNOPSIS
Resets the properties in the backup service configuration settings for Skype for Business Server to their default values.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsBackupServiceConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The backup service configuration settings are used to manage pool backups in Skype for Business Server.
Note that Skype for Business Server allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D and E.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsBackupServiceConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsBackupServiceConfiguration -Identity "global"
```

Example 1 resets the backup service configuration settings for Skype for Business Server.
Note that even though Skype for Business Server only uses a single, global collection of backup settings you must still include the Identity parameter: if you do not, the `Remove-CsBackupServiceConfiguration` cmdlet will prompt you for the Identity before continuing.


## PARAMETERS

### -Identity
Unique Identity of the backup service configuration settings.
Although you can only have a single, global instance of these settings, you still need to specify an Identity when calling the `Remove-CsBackupServiceConfiguration` cmdlet:

`-Identity global`


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsBackupServiceConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsBackupServiceConfiguration` cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceConfiguration](Get-CsBackupServiceConfiguration.md)

[Set-CsBackupServiceConfiguration](Set-CsBackupServiceConfiguration.md)

