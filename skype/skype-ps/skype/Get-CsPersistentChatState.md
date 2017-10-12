---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Get-CsPersistentChatState
schema: 2.0.0
---

# Get-CsPersistentChatState

## SYNOPSIS
Returns the state of one or more Persistent Chat service pools.
Persistent Chat pools can be in one of two states: Normal, in which the pool uses its primary databases; or FailedOver, in which the pool uses the backup databases defined in the topology.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsPersistentChatState [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsPersistentChatState [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsPersistentChatState cmdlet returns the state of one or more Persistent Chat pools.
Persistent Chat pools can be in either the Normal state (in which the pool uses its primary databases) or in a FailedOver state, in which the pool uses its backup databases.
You can use the Set-CsPersistentChatState cmdlet to change the state of a Persistent Chat pool; when you change the state of the pool, Skype for Business Server 2015 will automatically change the state of each individual server in the pool.

The functions carried out by the Get-CsPersistentChatState cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatState
```

The command shown in Example 1 returns the state of all the Persistent Chat servers configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatState -Identity "PersistentChatServer:atl-gc-001.litwareinc.com"
```

{Enter description for Example 2}

### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatState -Filter "*.litwareinc.com"
```

Example 3 returns state information for all Persistent Chat servers in the domain litwareinc.com.
To do this, the Filter parameter is included along with the filter value "*.litwareinc.com".
That filter value causes the Get-CsPersistentChatState cmdlet to return information for all the Persistent Chat servers that have an Identity that ends with the string value ".litwareinc.com".

### -------------------------- Example 4 --------------------------
```
Get-CsPersistentChatState | Where-Object {$_.PoolState -eq "FailedOver"}
```

The command shown in Example 4 returns state information for all the Persistent Chat servers that are currently failed over.
To carry out this task, the command first calls the Get-CsPersistentChatState cmdlet without any parameters; that returns a collection of all the Persistent Chat servers in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those servers where the PoolState property is equal to (-eq) "FailedOver".


## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more Persistent Chat states.
For example, to return all the Persistent Chat states for the domain litwareinc.com, use this syntax:

`-Filter "*.litwareinc.com"`

You cannot use both the Filter parameter and the Identity parameter in the same command.

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
Unique identifier for the Persistent Chat pool.
For example:

`-Identity "PersistentChatServer:atl-gc-001.litwareinc.com"`

If this parameter is omitted then the Get-CsPersistentChatState cmdlet returns information for all your Persistent Chat states.

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
Retrieves the Persistent Chat state data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatState


## NOTES


## RELATED LINKS

[Set-CsPersistentChatState](Set-CsPersistentChatState.md)
