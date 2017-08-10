---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsBackupServiceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Resets the properties in the backup service configuration settings for Microsoft Lync Server 2013 Preview to their default values.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Resets the properties in the backup service configuration settings for Skype for Business Server 2015 to their default values.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsBackupServiceConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The backup service configuration settings are used to manage pool backups in Microsoft Lync Server 2013 Preview.
Note that Lync Server allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule, and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D, and E.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsBackupServiceConfiguration"}

Lync Server Control Panel: The functions carried out by the Remove-CsBackupServiceConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The backup service configuration settings are used to manage pool backups in Skype for Business Server 2015.
Note that Skype for Business Server 2015 allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule, and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D, and E.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsBackupServiceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 resets the backup service configuration settings for Lync Server 2013 Preview.
Note that even though Lync Server 2013 Preview only uses a single, global collection of backup settings you must still include the Identity parameter: if you do not, Remove-CsBackupServiceConfiguration will prompt you for the Identity before continuing.

Remove-CsBackupServiceConfiguration -Identity "global"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 resets the backup service configuration settings for Skype for Business Server 2015.
Note that even though Skype for Business Server 2015 only uses a single, global collection of backup settings you must still include the Identity parameter: if you do not, the Remove-CsBackupServiceConfiguration cmdlet will prompt you for the Identity before continuing.

Remove-CsBackupServiceConfiguration -Identity "global"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique Identity of the backup service configuration settings.
Although you can only have a single, global instance of these settings, you still need to specify an Identity when calling Get-CsBackupServiceConfiguration:

-Identity global



**Below Content Applies To:** Skype for Business Server 2015

Unique Identity of the backup service configuration settings.
Although you can only have a single, global instance of these settings, you still need to specify an Identity when calling the Remove-CsBackupServiceConfiguration cmdlet:

-Identity global



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsBackupServiceConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

###  
The Remove-CsBackupServiceConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## OUTPUTS

###  
None.
Instead, Remove-CsBackupServiceConfiguration deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

###  
None.
Instead, the Remove-CsBackupServiceConfiguration cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceConfiguration]()

[Set-CsBackupServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/56bbf0a2-20cf-4f1e-b305-3521659eb909(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/56bbf0a2-20cf-4f1e-b305-3521659eb909(OCS.16).aspx)

