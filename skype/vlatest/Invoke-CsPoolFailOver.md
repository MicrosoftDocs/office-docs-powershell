---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsPoolFailOver

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Invokes the failover process for a Microsoft Lync Server 2013 Preview pool.
Failover refers to the process that occurs when a pool fails and the current users of that pool are then signed on to a backup pool.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Invokes the failover process for a Skype for Business Server 2015 pool.
Failover refers to the process that occurs when a pool fails and the current users of that pool are then signed on to a backup pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Invoke-CsPoolFailOver -PoolFqdn <Fqdn> [-Confirm] [-DisasterMode] [-FlushStorageService] [-Force]
 [-WaitTime <TimeSpan>] [-WhatIf] [-DatabaseCommandTimeoutInSeconds <Int32>] [-ServicesStopDelayMins <Int32>]
 [-SkipDataVerification] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The pool failover process provides a way for administrators to quickly restore service to users if the Registrar pool they have logged on to should suddenly become unavailable.
If a pool fails, users will automatically be signed off from Microsoft Lync Server 2013 Preview; if they immediately try to log back on, that logon will be rejected if their home pool is still unavailable.

To restore service to these users, administrators can run the Invoke-CsPoolFailOver cmdlet against the pool that is not currently available.
Doing this will allow users to sign on to Lync Server using the designated backup pool.
Note that users will not be rehomed on the backup pool; they will simply be allowed to log on and make use of that pool until their home pool has been restored.
For example, if Pool A fails, users will be able to log on to Pool B until Pool A has been restored.

When the failed pool is once more up and running, administrators can then run the Invoke-CsPoolFailBack cmdlet in order to "fail back" users of that pool.
If a user is currently logged on to the backup pool then he or she will be redirected back to their home pool after service has been restored.

Pool failover can only be invoked if you have assigned a backup pool to the failed pool.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Invoke-CsPoolFailover"}

Lync Server Control Panel: The functions carried out by the Invoke-CsPoolFailover cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The pool failover process provides a way for administrators to quickly restore service to users if the Registrar pool they have logged on to should suddenly become unavailable.
If a pool fails, users will automatically be signed off from Skype for Business Server 2015; if they immediately try to log back on, they will be redirected to their specified backup pool.

To restore service to these users, administrators can run the Invoke-CsPoolFailOver cmdlet against the pool that is not currently available.
Doing this will allow users to sign on to Skype for Business Server 2015 using the designated backup pool, and give these users access to all Skype for Business Server 2015 services and functionality.
Note that users will not be rehomed on the backup pool; they will simply be allowed to log on and make use of that pool until their home pool has been restored.
For example, if Pool A fails, users will be able to log on to Pool B (with complete functionality) until Pool A has been restored.

When the failed pool is once more up and running, administrators can then run the Invoke-CsPoolFailBack cmdlet in order to "fail back" users of that pool.
If a user is currently logged on to the backup pool then he or she will be redirected back to their home pool after service has been restored.

Pool failover can only be invoked if you have assigned a backup pool to the failed pool.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsPoolFailOver cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 invokes pool failover for the pool atl-cs-001.litwareinc.com.

Invoke-CsPoolFailover -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 invokes pool failover for the pool atl-cs-001.litwareinc.com.

Invoke-CsPoolFailOver -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 invokes disaster mode failover for the pool atl-cs-001.litwareinc.com.

Invoke-CsPoolFailover -PoolFqdn "atl-cs-001.litwareinc.com" -DisasterMode

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 invokes disaster mode failover for the pool atl-cs-001.litwareinc.com.

Invoke-CsPoolFailOver -PoolFqdn "atl-cs-001.litwareinc.com" -DisasterMode

## PARAMETERS

### -PoolFqdn
Below Content Applies To: Lync Server 2013

Fully qualified domain name of the pool being failed over.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"



Below Content Applies To: Skype for Business Server 2015

Fully qualified domain name of the pool being failed over from.
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

### -DisasterMode
Below Content Applies To: Lync Server 2013

When present, indicates that failover is being performed in "disaster mode." Disaster mode indicates that the pool is no longer accessible and that the failover occurred unexpectedly, typically because of a hardware failure.
If this parameter is not present that means that the pool is still up and running and that failover occurred by administrator choice; for example, the pool might temporarily be failed over in order to do hardware or software upgrades on the server.



Below Content Applies To: Skype for Business Server 2015

When present, indicates that failover is being performed in "disaster mode." If a pool is no longer accessible the only way to restore full functionality to users in that pool is to fail over the pool by using the DisasterMode parameter.

If this parameter is not present that means that the pool is still up and running and that failover occurred by administrator choice; for example, the pool might temporarily be failed over in order to do hardware or software upgrades on the server.



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

### -FlushStorageService
Below Content Applies To: Lync Server 2013

When specified, Invoke-CsPoolFailover will both fail over all the users in the pool, and call the Invoke-CsStorageServiceFlush cmdlet to flush the storage service database on each Front End server in the pool.
Flushing a database involves writing all the queued data to disk, and then clearing the database cache.



Below Content Applies To: Skype for Business Server 2015

When specified, the Invoke-CsPoolFailOver cmdlet will both fail over all the users in the pool, and call the Invoke-CsStorageServiceFlush cmdlet to flush the storage service database on each Front End server in the pool.
Flushing a database involves writing all the queued data to disk, and then clearing the database cache.



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

### -WaitTime
Specifies the amount of time (in seconds) that the cmdlet will wait before assuming that the data has been synced from the failed-over pool to the backup pool.

```yaml
Type: TimeSpan
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

### -DatabaseCommandTimeoutInSeconds
The amount of time to wait, in seconds, for database commands to time out.

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

### -ServicesStopDelayMins
Specifies a number of minutes to wait for the services to stop.

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

### -SkipDataVerification
When included in a command, Invoke-CsPoolFailback will proceed with the failback operation without first verifying data integrity.

```yaml
Type: SwitchParameter
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
Invoke-CsPoolFailover does not accept pipelined input.

###  
None.
The Invoke-CsPoolFailOver cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Invoke-CsPoolFailBack]()

[Online Version](http://technet.microsoft.com/EN-US/library/b5c30438-0553-41f4-b856-68c1ec0deff7(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b5c30438-0553-41f4-b856-68c1ec0deff7(OCS.16).aspx)

