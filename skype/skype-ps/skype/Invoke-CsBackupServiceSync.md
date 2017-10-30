---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Invoke-CsBackupServiceSync
schema: 2.0.0
---

# Invoke-CsBackupServiceSync

## SYNOPSIS

Manually invokes backup synchronization between a Skype for Business Server pool and its designated backup pool.
This allows administrators to synchronize data without waiting for Skype for Business Server replication.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Invoke-CsBackupServiceSync -PoolFqdn <Fqdn> [-BackupModule <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION

The Invoke-CsBackupServiceSync cmdlet enables administrators to synchronize the data between a Registrar pool and its backup pool.
The Invoke-CsBackupServiceSync cmdlet will only copy as much data as needed in order to bring the two pools into sync.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsBackupServiceSync cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

Invoke-CsBackupServiceSync -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 synchronizes the backup services for the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool where backup service synchronization is being invoked.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String value.
The Invoke-CsBackupServiceSync cmdlet can accept a pipelined string value representing the fully qualified domain name of a Skype for Business Server pool.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Backup-CsPool](Backup-CsPool.md)
