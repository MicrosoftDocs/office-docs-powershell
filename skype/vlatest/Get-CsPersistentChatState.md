---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPersistentChatState

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns the state of one or more Persistent Chat service pools.
Persistent Chat pools can be in one of two states: Normal, in which the pool uses its primary databases; or FailedOver, in which the pool uses the backup databases defined in the topology.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2013

The Get-CsPersistentChatState cmdlet returns the state of one or more Persistent Chat pools.
Persistent Chat pools can be in either the Normal state (in which the pool uses its primary databases) or in a FailedOver state, in which the pool uses its backup databases.
You can use the Set-CsPersistentChatState cmdlet to change the state of a Persistent Chat pool; when you change the state of the pool, Lync Server 2013 Preview will automatically change the state of each individual server in the pool.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPersistentChatState"}

Lync Server Control Panel: The functions carried out by the Get-CsPersistentChatState cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Get-CsPersistentChatState cmdlet returns the state of one or more Persistent Chat pools.
Persistent Chat pools can be in either the Normal state (in which the pool uses its primary databases) or in a FailedOver state, in which the pool uses its backup databases.
You can use the Set-CsPersistentChatState cmdlet to change the state of a Persistent Chat pool; when you change the state of the pool, Skype for Business Server 2015 will automatically change the state of each individual server in the pool.

Skype for Business Server Control Panel: The functions carried out by the Get-CsPersistentChatState cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns the state of all the Persistent Chat servers configured for use in the organization.

Get-CsPersistentChatState

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns the state of all the Persistent Chat servers configured for use in the organization.

Get-CsPersistentChatState

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Get-CsPersistentChatState -Identity "PersistentChatServer:atl-gc-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Get-CsPersistentChatState -Identity "PersistentChatServer:atl-gc-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns state information for all Persistent Chat servers in the domain litwareinc.com.
To do this, the Filter parameter is included along with the filter value "*.litwareinc.com".
That filter value causes Get-CsPersistentChatState to return information for all the Persistent Chat servers that have an Identity that ends with the string value ".litwareinc.com".

Get-CsPersistentChatState -Filter "*.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns state information for all Persistent Chat servers in the domain litwareinc.com.
To do this, the Filter parameter is included along with the filter value "*.litwareinc.com".
That filter value causes the Get-CsPersistentChatState cmdlet to return information for all the Persistent Chat servers that have an Identity that ends with the string value ".litwareinc.com".

Get-CsPersistentChatState -Filter "*.litwareinc.com"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns state information for all the Persistent Chat servers that are currently failed over.
To carry out this task, the command first calls Get-CsPersistentChatState without any parameters; that returns a collection of all the Persistent Chat servers in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those servers where the PoolState property is equal to (-eq) "FailedOver".

Get-CsPersistentChatState | Where-Object {$_.PoolState -eq "FailedOver"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns state information for all the Persistent Chat servers that are currently failed over.
To carry out this task, the command first calls the Get-CsPersistentChatState cmdlet without any parameters; that returns a collection of all the Persistent Chat servers in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those servers where the PoolState property is equal to (-eq) "FailedOver".

Get-CsPersistentChatState | Where-Object {$_.PoolState -eq "FailedOver"}

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more Persistent Chat states.
For example, to return all the Persistent Chat states for the domain litwareinc.com, use this syntax:

-Filter "*.litwareinc.com"

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
**Below Content Applies To:** Lync Server 2013

Unique identifier for the Persistent Chat pool.
For example:

-Identity "PersistentChatServer:atl-gc-001.litwareinc.com"

If this parameter is omitted then Get-CsPersistentChatState returns information for all your Persistent Chat states.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the Persistent Chat pool.
For example:

-Identity "PersistentChatServer:atl-gc-001.litwareinc.com"

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

###  
None.
Get-CsPersistentChatState does not accept pipelined input.

###  
None.
The Get-CsPersistentChatState cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPersistentChatState returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatState object.

###  
The Get-CsPersistentChatState cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatState object.

## NOTES

## RELATED LINKS

[Set-CsPersistentChatState]()

[Online Version](http://technet.microsoft.com/EN-US/library/598086c9-a8c7-4b81-84ba-1807f1183024(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/598086c9-a8c7-4b81-84ba-1807f1183024(OCS.16).aspx)

