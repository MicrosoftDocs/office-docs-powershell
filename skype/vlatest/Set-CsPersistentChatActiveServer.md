---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPersistentChatActiveServer

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Manages the list of active Persistent Chat servers.
An active server is Persistent Chat server (in a specified Persistent Chat service pool) that is fully operational and can accept new client connections.
Servers in the pool that have not been marked as active servers might be operational, but are currently unable to accept new client connections.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Manages the list of active Persistent Chat servers.
An active server is Persistent Chat server (in a specified Persistent Chat service pool) that is fully operational and can accept new client connections.
Servers in the pool that have not been marked as active servers might be operational, but are currently unable to accept new client connections.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Explicit
```
Set-CsPersistentChatActiveServer [[-Identity] <XdsGlobalRelativeIdentity>]
 -ActiveServers <System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.Deploy.Fqdn]>
 [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### Swap
```
Set-CsPersistentChatActiveServer [[-Identity] <XdsGlobalRelativeIdentity>] [-Swap] [-Confirm] [-Force]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Set-CsPersistentChatActiveServer cmdlet allows administrators to essentially enable or disable the Persistent Chat service on one or more servers in a Persistent Chat pool.
Servers that appear on the active servers list are able to accept new client connections.
Servers that do not appear on the list are not able to accept new client connections.
(However, the server will continue to any client connections that were made before the server was removed from the list.) To enable the Persistent Chat service on a Persistent Chat server, add that server to the active server list.
To disable the service, remove the server from the active server list.

To enable/disable the Persistent Chat service on all the servers in a pool, use the Set-CsPersistentChatState cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPersistentChatActiveServer"}

Lync Server Control Panel: The functions carried out by the Set-CsPersistentChatActiveServer cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The Set-CsPersistentChatActiveServer cmdlet allows administrators to essentially enable or disable the Persistent Chat service on one or more servers in a Persistent Chat pool.
Servers that appear on the active servers list are able to accept new client connections.
Servers that do not appear on the list are not able to accept new client connections.
(However, the server will continue to any client connections that were made before the server was removed from the list.) To enable the Persistent Chat service on a Persistent Chat server, add that server to the active server list.
To disable the service, remove the server from the active server list.

To enable/disable the Persistent Chat service on all the servers in a pool, use the Set-CsPersistentChatState cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Set-CsPersistentChatActiveServer cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 adds the server atl-gc-001.litwareinc.com to the collection of active Persistent Chat servers.

Set-CsPersistentChatActiveServer -Identity "global" -ActiveServers @{Add="atl-gc-001.litwareinc.com"}

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 adds the server atl-gc-001.litwareinc.com to the collection of active Persistent Chat Servers.

First, determine the identity of your server collection by running the Get-CsService cmdlet, which will return the identity of your Persistent Chat collection :

Get-CsService -PersistentChatServer

The cmdlet will return something similar to

Identity : PersistentChatServer:client.vdomain.com

To add the server to the Then run the following cmdlet to add the server, using the :

Set-CsPersistentChatActiveServer -Identity "PChatServerCollection" -ActiveServers @{Add="atl-gc-001.litwareinc.com"}

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes the server atl-gc-001.litwareinc.com from the collection of active Persistent Chat servers.

Set-CsPersistentChatActiveServer -Identity "global" -ActiveServers @{Remove="atl-gc-001.litwareinc.com"}

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes the server atl-gc-001.litwareinc.com from the collection of active Persistent Chat servers.

Set-CsPersistentChatActiveServer -Identity "PChatServerCollection" -ActiveServers @{Remove="atl-gc-001.litwareinc.com"}

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 removes all the active Persistent Chat servers.
Removing all the active servers is typically done in a failback or failover scenario.

Set-CsPersistentChatActiveServer -Identity "global" -ActiveServers $Null

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 removes all the active Persistent Chat servers.
Removing all the active servers is typically done in a failback or failover scenario.

Set-CsPersistentChatActiveServer -Identity "PChatServerCollection" -ActiveServers $Null

## PARAMETERS

### -ActiveServers
Collection of fully-qualified domain names representing the active Persistent Chat servers.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.Deploy.Fqdn]
Parameter Sets: Explicit
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Swap
When specified, swaps the active state for all the Persistent Chat servers in the specified pool: active servers will be marked as inactive, and inactive servers will be marked as active.

```yaml
Type: SwitchParameter
Parameter Sets: Swap
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Below Content Applies To: Lync Server 2013

Unique Identity for the collection of active servers.
Note that you can only have a single, global collection of Persistent Chat servers.



Below Content Applies To: Skype for Business Server 2015

Unique Identity for the collection of active servers.
Note that you can only have a single collection of Persistent Chat servers.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
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
None.
Set-CsPersistentChatActiveServer does not accept pipelined input.

###  
None.
The Set-CsPersistentChatActiveServer cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Set-CsPersistentChatState]()

[Online Version](http://technet.microsoft.com/EN-US/library/88c0af42-cb47-4c34-bf54-9c134dcbb843(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/88c0af42-cb47-4c34-bf54-9c134dcbb843(OCS.16).aspx)

