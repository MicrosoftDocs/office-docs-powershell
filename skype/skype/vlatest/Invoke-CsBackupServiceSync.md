---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsBackupServiceSync

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Manually invokes backup synchronization between a Microsoft Lync Server 2013 Preview pool and its designated backup pool.
This allows administrators to synchronize data without waiting for Lync Server replication.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Manually invokes backup synchronization between a Skype for Business Server 2015 pool and its designated backup pool.
This allows administrators to synchronize data without waiting for Skype for Business Server 2015 replication.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Invoke-CsBackupServiceSync -PoolFqdn <Fqdn> [-BackupModule <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Invoke-CsBackupServiceSync cmdlet enables administrators to synchronize the data between a Registrar pool and its backup pool.
Invoke-CsBackupServiceSync will only copy as much data as needed in order to bring the two pools into sync.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Invoke-CsBackupServiceSync"}

Lync Server Control Panel: The functions carried out by the Invoke-CsBackupServiceSync cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Invoke-CsBackupServiceSync cmdlet enables administrators to synchronize the data between a Registrar pool and its backup pool.
The Invoke-CsBackupServiceSync cmdlet will only copy as much data as needed in order to bring the two pools into sync.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsBackupServiceSync cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 synchronizes the backup services for the pool atl-cs-001.litwareinc.com.

Invoke-CsBackupServiceSync -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 synchronizes the backup services for the pool atl-cs-001.litwareinc.com.

Invoke-CsBackupServiceSync -PoolFqdn "atl-cs-001.litwareinc.com"

## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool where backup service synchronization is being invoked.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BackupModule
**Below Content Applies To:** Lync Server 2013

Indicates the type of data to be synchronized.
Valid values are:

* UserServices.PresenceFocus
* ConfServices.DataConf
* CentralMgmt.CMSMaster



**Below Content Applies To:** Skype for Business Server 2015

Indicates the type of data to be synchronized.
Valid values are:

UserServices.PresenceFocus

ConfServices.DataConf

CentralMgmt.CMSMaster



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
String value.
Invoke-CsBackupServiceSync can accept a pipelined string value representing the fully qualified domain name of a Lync Server 2013 Preview pool.

###  
String value.
The Invoke-CsBackupServiceSync cmdlet can accept a pipelined string value representing the fully qualified domain name of a Skype for Business Server 2015 pool.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Backup-CsPool]()

[Online Version](http://technet.microsoft.com/EN-US/library/f3de25c2-a1ef-4781-8b33-74f5dc1e6f8d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f3de25c2-a1ef-4781-8b33-74f5dc1e6f8d(OCS.16).aspx)

