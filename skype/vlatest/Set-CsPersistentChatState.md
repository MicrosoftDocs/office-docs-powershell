---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPersistentChatState

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Modifies the state of a Persistent Chat service pool.
Persistent Chat pools can be in one of two states: Normal, in which the pool uses its primary databases; or FailedOver, in which the pool uses the backup databases defined in the topology.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Modifies the state of a Persistent Chat service pool.
Persistent Chat pools can be in one of two states: Normal, in which the pool uses its primary databases; or FailedOver, in which the pool uses the backup databases defined in the topology.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsPersistentChatState [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-PoolState <PoolState>] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsPersistentChatState [-Confirm] [-Force] [-Instance <PSObject>] [-PoolState <PoolState>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Get-CsPersistentChatState cmdlet returns the state of one or more Persistent Chat pools.
Persistent Chat pools can be in either the Normal state (in which the pool uses its primary databases) or in a FailedOver state, in which the pool uses its backup databases.
You can use the Set-CsPersistentChatState cmdlet to change the state of a Persistent Chat pool; when you change the state of the pool, Lync Server 2013 Preview will automatically change the state of each individual server in the pool.
To change the state of an individual chat server, use the Set-CsPersistentChatActiveServer cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPersistentChatState"}

Lync Server Control Panel: The functions carried out by the Set-CsPersistentChatState cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The Get-CsPersistentChatState cmdlet returns the state of one or more Persistent Chat pools.
Persistent Chat pools can be in either the Normal state (in which the pool uses its primary databases) or in a FailedOver state, in which the pool uses its backup databases.
You can use the Set-CsPersistentChatState cmdlet to change the state of a Persistent Chat pool; when you change the state of the pool, Skype for Business Server 2015 will automatically change the state of each individual server in the pool.
To change the state of an individual chat server, use the Set-CsPersistentChatActiveServer cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Set-CsPersistentChatState cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 sets the pool state for the Persistent Chat server atl-gc-001.litwareinc.com to FailedOver.

Set-CsPersistentChatState -Identity "PersistentChatServer:atl-gc-001.litwareinc.com" -PoolState "FailedOver"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 sets the pool state for the Persistent Chat server atl-gc-001.litwareinc.com to FailedOver.

Set-CsPersistentChatState -Identity "PersistentChatServer:atl-gc-001.litwareinc.com" -PoolState "FailedOver"

## PARAMETERS

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
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Identity
Service Identity of the Persistent Chat pool where the new service state will be applied.
For example:

-Identity PersistentChatServer:atl-persistentchat-001.litwareinc.com

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PoolState
Current state of the Persistent Chat pool.
Valid values are:

* Normal
* FailedOver

The default value is Normal.

```yaml
Type: PoolState
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
Set-CsPersistentChatState accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatstate object.

###  
The Set-CsPersistentChatState cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatstate object.

## OUTPUTS

###  
None.
Instead, Set-CsPersistentChatState modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatState object.

###  
None.
Instead, the Set-CsPersistentChatState cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.PersistentChat.PersistentChatState object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatState]()

[Set-CsPersistentChatActiveServer]()

[Online Version](http://technet.microsoft.com/EN-US/library/9b82fe41-214d-4376-b026-bb1434d04118(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9b82fe41-214d-4376-b026-bb1434d04118(OCS.16).aspx)

