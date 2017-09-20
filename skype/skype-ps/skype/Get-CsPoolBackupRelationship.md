---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Get-CsPoolBackupRelationship
schema: 2.0.0
---

# Get-CsPoolBackupRelationship

## SYNOPSIS
Returns information about the backup pool associated with a Skype for Business Server pool.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Get-CsPoolBackupRelationship -PoolFqdn <Fqdn> [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsPoolBackupRelationship cmdlet returns the fully qualified domain name of the backup pool associated with a Registrar pool.
Note that this is read-only information: there is no corresponding Set-CsPoolBackupRelationship cmdlet that lets you use the Windows PowerShell command-line interface to create a backup association.
Instead, backup pools must be assigned using Skype for Business Server Topology Builder.

The functions carried out by the Get-CsPoolBackupRelationship cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPoolBackupRelationship -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example returns information about the backup relationship assigned to the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool whose backup relationship is being checked.
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

### -LocalStore
Retrieves the backup relationship data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hadr.BackupService.BackupRelation


## NOTES


## RELATED LINKS