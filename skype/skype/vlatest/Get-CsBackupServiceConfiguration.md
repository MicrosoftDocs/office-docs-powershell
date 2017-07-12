---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsBackupServiceConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Retrieves the backup service configuration settings for Microsoft Lync Server 2013 Preview.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service, as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Retrieves the backup service configuration settings for Skype for Business Server 2015.
These settings include information about the maximum number of simultaneous Windows Communication Framework calls that can be made to the backup service, as well as the backup service synchronization interval.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsBackupServiceConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsBackupServiceConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The backup service configuration settings are used to manage pool backups in Microsoft Lync Server 2013 Preview.
Note that Lync Server allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule, and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D, and E.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsBackupServiceConfiguration"}

Lync Server Control Panel: The functions carried out by the Get-CsBackupServiceConfiguration cmdlet are not available in the Lync Server Control Panell.

**Below Content Applies To:** Skype for Business Server 2015

The backup service configuration settings are used to manage pool backups in Skype for Business Server 2015.
Note that Skype for Business Server 2015 allows only for a single, global collection of backup configuration settings.
Among other things, that means that all your pools must be backed up using the same synchronization schedule, and that users and groups authorized to backup Pool A are also allowed to backup Pools B, C, D, and E.

Get-CsBackupServiceConfiguration can be run from any computer running a Skype for Business Server 2015 server role or from a remote instance of Windows PowerShell.

Skype for Business Server Control Panel: The functions carried out by the Get-CsBackupServiceConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 retrieves the backup service configuration information for Lync Server 2013 Preview.
Because there is only a single, global set of backup service configuration settings you do not need to include the Identity parameter when running this command.

Get-CsBackupServiceConfiguration

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 retrieves the backup service configuration information for Skype for Business Server 2015.
Because there is only a single, global set of backup service configuration settings you do not need to include the Identity parameter when running this command.

Get-CsBackupServiceConfiguration

## PARAMETERS

### -Filter
Enables you to use wildcard values when referencing a collection of backup service configuration settings.
Because you can only have a single, global instance of these settings there is no reason to use the Filter parameter.
However, if you prefer you can use the following syntax to reference the global settings:

-Filter "g*"

The preceding syntax returns all the conference backup service configuration settings that have an Identity that begins with the letter "g".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique Identity of the backup service configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling Get-CsBackupServiceConfiguration.
You can, however, use the following syntax to reference the global settings:

-Identity global



**Below Content Applies To:** Skype for Business Server 2015

Unique Identity of the backup service configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsBackupServiceConfiguration cmdlet.
You can, however, use the following syntax to reference the global settings:

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

### -LocalStore
Retrieves the backup service configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsBackupServiceConfiguration does not accept pipelined input.

###  
None.
The Get-CsBackupServiceConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsBackupServiceConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

###  
The Get-CsBackupServiceConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.BackupService.BackupServiceConfiguration object.

## NOTES

## RELATED LINKS

[Remove-CsBackupServiceConfiguration]()

[Set-CsBackupServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/8e81a76c-4019-490d-9cd5-895cc2cc0863(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8e81a76c-4019-490d-9cd5-895cc2cc0863(OCS.16).aspx)

