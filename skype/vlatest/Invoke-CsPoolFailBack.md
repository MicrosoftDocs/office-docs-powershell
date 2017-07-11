---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsPoolFailBack

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Invokes the failback process for a Microsoft Lync Server 2013 Preview pool.
Failback is used after a pool has failed over and the users of that pool have been "failed over" to a backup pool.
(That simply means users who were signed on to the failed pool are automatically signed on to the backup pool.) When the failed pool has been restored, the fail back process signs the failed-over users back to their original pool.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Invokes the failback process for a Skype for Business Server 2015 pool.
Failback is used after a pool has failed over and the users of that pool have been "failed over" to a backup pool.
(That simply means users who were signed on to the failed pool are automatically signed on to the backup pool.) When the failed pool has been restored, the fail back process signs the failed-over users back to their original pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Invoke-CsPoolFailBack -PoolFqdn <Fqdn> [-Confirm] [-DisasterMode] [-Force] [-WaitTime <TimeSpan>] [-WhatIf]
 [-DatabaseCommandTimeoutInSeconds <Int32>] [-SkipDataVerification] [<CommonParameters>]
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

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Invoke-CsPoolFailback"}

Lync Server Control Panel: The functions carried out by the Invoke-CsPoolFailback cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The pool failover process provides a way for administrators to quickly restore service to users if the Registrar pool they have logged on to should suddenly become unavailable.
If a pool fails, users will automatically be signed off from Skype for Business Server 2015; if they immediately try to log back on, they will be redirected to their specified backup pool.

To restore service to these users, administrators can run the Invoke-CsPoolFailOver cmdlet against the pool that is not currently available.
Doing this will allow users to sign on to Skype for Business Server 2015 using the designated backup pool, and give these users access to all Skype for Business Server 2015 services and functionality.
Note that users will not be rehomed on the backup pool; they will simply be allowed to log on and make use of that pool until their home pool has been restored.
For example, if Pool A fails, users will be able to log on to Pool B (with complete functionality) until Pool A has been restored.

When the failed pool is once more up and running, administrators can then run the Invoke-CsPoolFailBack cmdlet in order to "fail back" users of that pool.
If a user is currently logged on to the backup pool then he or she will be redirected back to their home pool after service has been restored.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsPoolFailback cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, failback is invoked for the pool atl-cs-001.litwareinc.com.

Invoke-CsPoolFailback -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, failback is invoked for the pool atl-cs-001.litwareinc.com.

Invoke-CsPoolFailback -PoolFqdn "atl-cs-001.litwareinc.com"

## PARAMETERS

### -PoolFqdn
Below Content Applies To: Lync Server 2013

Fully qualified domain name of the pool being failed back.
For example:-PoolFqdn "atl-cs-001.litwareinc.com"

The pool FQDN used during failback should be the same FQDN used during failover.



Below Content Applies To: Skype for Business Server 2015

Fully qualified domain name of the pool being failed back.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"

The pool FQDN used during failback must be the same FQDN used during failover.



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

Enables administrators to invoke pool failback even if the backup pool is currently unavailable.



Below Content Applies To: Skype for Business Server 2015

Enables administrators to invoke pool failback even if the backup pool is currently unavailable.
When you use this parameter, data generated by the failed-over users on the backup pool will be lost.



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
Specifies the maximum amount of time the cmdlet should wait before synching data.
Time values must be express using the format hours:minutes:seconds; for example, the following syntax sets the wait time to 1 minute and 30 seconds (00 hours:01:minutes:30 seconds):

00:01:30

The default value is 15 seconds.

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
The amount of time, in seconds, to wait for database commands to time out.

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
When included in a command, Invoke-CsPoolFailover will proceed with the failover operation without first verifying data integrity.

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
Invoke-CsPoolFailBack does not accept pipelined input.

###  
None.
The Invoke-CsPoolFailBack cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Invoke-CsPoolFailOver]()

[Online Version](http://technet.microsoft.com/EN-US/library/4e58d0b5-4353-4de8-b242-2a4553c3371e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/4e58d0b5-4353-4de8-b242-2a4553c3371e(OCS.16).aspx)

