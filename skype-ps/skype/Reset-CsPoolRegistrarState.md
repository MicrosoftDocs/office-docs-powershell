---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Reset-CsPoolRegistrarState

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Resets the Registrar and Windows fabric services for the specified Registrar pool.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Resets the Registrar and Windows fabric services for the specified Registrar pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Reset-CsPoolRegistrarState -PoolFqdn <Fqdn> [-Confirm] [-Force] [-MachineFqdn <Fqdn>] [-NoReStart]
 [-ResetLocalDatabases] [-ResetType <PoolResetType>] [-WhatIf] [-ServicesStopDelayMins <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Reset-CsPoolRegistrarState cmdlet enables you to reset the Windows Fabric service (FabricHostSvc) and the Lync Server Registrar service (RtcSrv) for a Registrar pool; this might be required if the pool has become non-responsive or fails to start.
(Typically that means that the Registrar service will remain stuck in the Start Pending state.) Running this cmdlet will, by default, stop and then restart all the relevant services on the pool.
However, you can use the NoReStart parameter to cause Reset-CsPooRegistrarState to stop those the services without restarting them.
You can then choose to manually restart all (or some) of those services.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Reset-CsPoolRegistrarState"}

Lync Server Control Panel: The functions carried out by the Reset-CsPoolRegistrarState cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Reset-CsPoolRegistrarState cmdlet enables you to reset the Windows Fabric service (FabricHostSvc) and the Skype for Business Server 2015 Registrar service (RtcSrv) for a Registrar pool; this might be required if the pool has become non-responsive or fails to start.
(Typically that means that the Registrar service will remain stuck in the Start Pending state.) Running this cmdlet will, by default, stop and then restart all the relevant services on the pool.
However, you can use the NoReStart parameter to cause the Reset-CsPooRegistrarState cmdlet to stop those the services without restarting them.
You can then choose to manually restart all (or some) of those services.

Skype for Business Server Control Panel: The functions carried out by the Reset-CsPoolRegistrarState cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 performs a service reset for the Registrar pool atl-cs-001.litwareinc.com.
Note that, after issuing this command, you will be prompted as to whether or not you want to proceed with the service reset.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType ServiceReset

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 performs a service reset for the Registrar pool atl-cs-001.litwareinc.com.
Note that, after issuing this command, you will be prompted as to whether or not you want to proceed with the service reset.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType ServiceReset

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also performs a service reset for the Registrar pool atl-cs-001.litwareinc.com.
In this case, however, the Confirm parameter has been included along with the parameter value $False (-Confirm:$False).
This causes the confirmation prompt which generally appears when you call Reset-CsPoolRegistrarState to be suppressed.
As a result, you will not be prompted as to whether or not you want to proceed with the service reset.
Instead, the command will run as soon as you press ENTER.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType ServiceReset -Confirm:$False

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also performs a service reset for the Registrar pool atl-cs-001.litwareinc.com.
In this case, however, the Confirm parameter has been included along with the parameter value $False (-Confirm:$False).
This causes the confirmation prompt which generally appears when you call the Reset-CsPoolRegistrarState cmdlet to be suppressed.
As a result, you will not be prompted as to whether or not you want to proceed with the service reset.
Instead, the command will run as soon as you press ENTER.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType ServiceReset -Confirm:$False

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, a quorum loss recovery reset is carried on the pool atl-cs-001.litwareinc.com.
A quorum loss recovery is reset is typically used when the number of active Front End servers in a pool falls below the quorum state (that is, when fewer than 85% of the Front End servers in a pool are currently active).
Note that only those services that are in a quorum loss will have to reload user data from the backup store.
Other services will be unaffected by this command/

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType QuorumLossRecovery

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, a quorum loss recovery reset is carried on the pool atl-cs-001.litwareinc.com.
A quorum loss recovery is reset is typically used when the number of active Front End servers in a pool falls below the quorum state (that is, when fewer than 85% of the Front End servers in a pool are currently active).
Note that only those services that are in a quorum loss will have to reload user data from the backup store.
Other services will be unaffected by this command/

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType QuorumLossRecovery

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, a full reset is done for the pool atl-cs-001.litwareinc.com.
In a full reset, the Front End and Windows Fabric services are stopped and a set of items (including the files LyncServer-MachineSet.xml and Settings.xml) are removed.
After these items have been removed, the Front End and Windows Fabric services are restarted.
The FullReset option is typically used after topology changes or it unrecoverable errors occur when a pool is started.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType FullReset

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, a full reset is done for the pool atl-cs-001.litwareinc.com.
In a full reset, the Front End and Windows Fabric services are stopped and a set of items (including the files LyncServer-MachineSet.xml and Settings.xml) are removed.
After these items have been removed, the Front End and Windows Fabric services are restarted.

Note that using the FullReset option when attempting to restart a pool will sometimes result in failure, and the pool will not actually restart.
Because of that, it is recommended that you first try to restart the pool using one of the other ResetType options.
If that fails, please consult Microsoft support personnel before using the FullReset option.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType FullReset

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

Example 5 is a variation of the command shown in Example 4.
In this case, however, the NoReStart parameter is included; this prevents Reset-CsPoolRegistrarState from restarting the services (such as the Windows Fabric service) that are stopped when the pool is reset.
It will be up to administrators to manually restart these services.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType FullReset -NoReStart

### -------------------------- Example 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 is a variation of the command shown in Example 4.
In this case, however, the NoReStart parameter is included; this prevents the Reset-CsPoolRegistrarState cmdlet from restarting the services (such as the Windows Fabric service) that are stopped when the pool is reset.
It will be up to administrators to manually restart these services.

Note that using the FullReset option when attempting to restart a pool will sometimes result in failure, and the pool will not actually restart.
Because of that, it is recommended that you first try to restart the pool using one of the other ResetType options.
If that fails, please consult Microsoft support personnel before using the FullReset option.

Reset-CsPoolRegistrarState -PoolFqdn "atl-cs-001.litwareinc.com" -ResetType FullReset -NoReStart

## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the Registrar pool being reset.
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

### -MachineFqdn
Fully qualified domain name of the computer to be removed from the pool.
This parameter is only used when performing a MachineStateRemoved reset.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoReStart
When specified, services (such as RtcSrv and FabricHostSvc) that are stopped when the cmdlet runs are not restarted.

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

### -ResetLocalDatabases
**Below Content Applies To:** Lync Server 2013

When specified, stops and restarts the local Lync Server databases in addition to the local Lync Server services.



**Below Content Applies To:** Skype for Business Server 2015

When specified, stops and restarts the local Skype for Business Server 2015 databases in addition to the local Skype for Business Server 2015 services.



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

### -ResetType
**Below Content Applies To:** Lync Server 2013

Type of reset to be performed.
Allowed values are:

* ServiceReset - The RtcSrv and fabricHostSvc services are stopped and restarted. A service reset will be performed if the ResetType is not specified.
* QuorumLossRecovery - Reloads user data from the backup store for any routing groups currently in quorum loss. (A quorum loss occurs when neither a database nor its replicas are available.) Data not yet written to the database could be lost when you do this type of reset.
* FullReset - performs the same type of reset as QuorumLossRecovery but, in addition, rebuilds the local Lync Server databases. This type of reset can be potentially long and resource-intensive.
* MachineStateRemoved -- Removes the specified server from the pool. This type of reset should be used only when the server in question (or its databases) have been permanently lost.



**Below Content Applies To:** Skype for Business Server 2015

Type of reset to be performed.
Allowed values are:

ServiceReset - The RtcSrv and FabricHostSvc services are stopped and restarted.
A service reset will be performed if the ResetType is not specified.

QuorumLossRecovery - Reloads user data from the backup store for any routing groups currently in quorum loss.
(A quorum loss occurs when neither a database nor its replicas are available.) Data not yet written to the database could be lost when you do this type of reset.

FullReset - performs the same type of reset as QuorumLossRecovery but, in addition, rebuilds the local Skype for Business Server 2015 databases.
This type of reset can be potentially long and resource-intensive.

Using the FullReset value can cause previously disabled nodes to be reenabled.
For example, if you use the FullReset value while one of the Front End Servers in the pool is disabled, that Front End Server will be brought back online.

Using the FullReset value when attempting to restart a pool will sometimes result in failure, and the pool will not actually restart.
Because of that, it is recommended that you first try to restart the pool using one of the other ResetType options.
If that fails, please consult Microsoft support personnel before using the FullReset option.
Typically FullReset is only used when changing a topology from a pool with a single Front End server to a pool with multiple Front End servers.

MachineStateRemoved -- Removes the specified server from the pool.
This type of reset should be used only when the server in question (or its databases) have been permanently lost.



```yaml
Type: PoolResetType
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

### -ServicesStopDelayMins
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Reset-CsPoolRegistrarState does not accept pipelined input.

###  
None.
The Reset-CsPoolRegistrarState cmdlet does not accept pipelined input.

## OUTPUTS

###  
String values.
Reset-CsPoolRegistrarState does not return objects.

###  
String values.
The Reset-CsPoolRegistrarState cmdlet does not return objects.

## NOTES

## RELATED LINKS

[Get-CsPoolFabricState]()

[Online Version](http://technet.microsoft.com/EN-US/library/1bdbd5d7-cc72-46c5-ac20-ddc0d5723fe0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1bdbd5d7-cc72-46c5-ac20-ddc0d5723fe0(OCS.16).aspx)

