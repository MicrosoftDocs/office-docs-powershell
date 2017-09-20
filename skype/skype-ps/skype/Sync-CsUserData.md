---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Sync-CsUserData
schema: 2.0.0
---

# Sync-CsUserData

## SYNOPSIS
Synchronizes user data between a pair of Skype for Business Server pools.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Sync-CsUserData -PoolFqdn <Fqdn> [-LocalStore] [-RoutingGroup <String>] [-Target] [<CommonParameters>]
```

## DESCRIPTION
The `Sync-CsUserData` cmdlet synchronizes user data between a Registrar pool and its assigned backup pool.
Note that any call to this cmdlet will fail if the backup service has not been activated the pool in question.

Skype for Business Server Control Panel: The functions carried out by the `Sync-CsUserData` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Sync-CsUserData -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 1 syncs the pool `atl-cs-001.litwareinc.com` with its designated backup pool.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the primary Skype for Business Server pool.
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

### -LocalStore
Retrieves the user data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -RoutingGroup
Enables you to synchronize data only for the specified routing groups.
Routing groups are used to indicate the Front End server that users register with.

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

### -Target
Synchronizes data with the preassigned backup pool.

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
The `Sync-CsUserData` cmdlet does not accept pipelined output.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Convert-CsUserData]()

[Export-CsUserData]()

[Import-CsUserData]()

[Update-CsUserData]()
