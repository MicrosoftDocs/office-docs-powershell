---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsUserStoreBackupData
schema: 2.0.0
---

# Remove-CsUserStoreBackupData

## SYNOPSIS
Removes outdated information from the specified user store.
"Outdated information" refers user data from a Registrar pool no longer paired with the specified user store.
For example, suppose Pools A and B were once paired; now, however, that association has been changed and Pools A and C are paired.
When run against Pool A, the `Remove-CsUserStoreBackupData` cmdlet will remove information about users from Pool B.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsUserStoreBackupData -PoolFqdn <Fqdn> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables you to associate a pair of pools.
When you do this, each pool maintains two sets of user information: information about the users homed on the pool in question and information about the users homed on the associated pool.
Maintaining both sets of user information allows Pool B to register and service the users from Pool A should Pool A need to be failed over.

If you later change the association between these two pools, the "extra" user data is not automatically deleted from the two pools; for example, Pool A will continue to store user data for Pool B.
(However, this data will no longer be updated and replicated.) The `Remove-CsUserStoreBackupData` cmdlet enables you to delete the data from Pool B that is no longer needed on Pool A.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsUserStoreBackupData` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsUserStoreBackupData -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 removes outdated user store information stored by the pool `atl-cs-001.litwareinc.com` and its associated backup pool.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool where "outdated" user information should be removed.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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
None.
The `Remove-CsUserStoreBackupData` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceStatus](Get-CsBackupServiceStatus.md)

