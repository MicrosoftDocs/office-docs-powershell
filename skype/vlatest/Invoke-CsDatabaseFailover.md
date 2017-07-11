---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Invoke-CsDatabaseFailover

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Invokes the process in which a Lync Server 2013 Preview database fails over to its mirror database.
After failover has been completed, the mirror database will become the principal database and will handle all new database requests.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Invokes the process in which a Skype for Business Server 2015 database fails over to its mirror database.
After failover has been completed, the mirror database will become the principal database and will handle all new database requests.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Invoke-CsDatabaseFailover -DatabaseType <DatabaseNameType> -NewPrincipal <MirrorRole> -PoolFqdn <Fqdn>
 [-Confirm] [-ExcludeDatabaseList <String[]>] [-Force] [-LocalStore] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Invoke-CsDatabaseFailover cmdlet provides a way for administrators to "failover" one or more Microsoft Lync Server 2013 Preview databases.
For example, suppose you need to temporarily take down the primary database, perhaps to perform a hardware upgrade.
In that case, you can use Invoke-CsDatabaseFailover to failover from the primary database to the mirror database; when you do that, all requests for the database in question will be routed to the mirror database.
Later, when the hardware upgrade is complete, you can use this same cmdlet to failback to the primary database.

Note that any commands using Invoke-CsDatabaseFailover will fail if you have not configured both a primary database and a mirror database for the database in question.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Invoke-CsDatabaseFailover"}

Lync Server Control Panel: The functions carried out by the Invoke-CsDatabaseFailover cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Invoke-CsDatabaseFailover cmdlet provides a way for administrators to "failover" one or more Skype for Business Server 2015 databases.
For example, suppose you need to temporarily take down the primary database, perhaps to perform a hardware upgrade.
In that case, you can use the Invoke-CsDatabaseFailover cmdlet to failover from the primary database to the mirror database; when you do that, all requests for the database in question will be routed to the mirror database.
Later, when the hardware upgrade is complete, you can use this same cmdlet to failback to the primary database.

Note that any commands using the Invoke-CsDatabaseFailover cmdlet will fail if you have not configured both a primary database and a mirror database for the database in question.

Skype for Business Server Control Panel: The functions carried out by the Invoke-CsDatabaseFailover cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 invokes failover for the User database found on the pool atl-cs-001.litwareinc.com.
The command causes the User database to failover to a previously-assigned mirror database.

Invoke-CsDatabaseFailover -PoolFqdn atl-cs-001.litwareinc.com -DatabaseType "User" -NewPrincipal "Mirror"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 invokes failover for the User database found on the pool atl-cs-001.litwareinc.com.
The command causes the User database to failover to a previously-assigned mirror database.

Invoke-CsDatabaseFailover -PoolFqdn atl-cs-001.litwareinc.com -DatabaseType "User" -NewPrincipal "Mirror"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all databases on the pool atl-cs-001.litwareinc.com are failed over except for the LcsCDR and LcsLog databases.
These databases are exempted from failover by using the ExcludeDatabaseList parameter.

Invoke-CsDatabaseFailover -PoolFqdn atl-cs-001.litwareinc.com -ExcludeDatabase -NewPrincipal "Mirror" -ExcludeDatabaseList "LcsCDR", "LcsLog"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all databases on the pool atl-cs-001.litwareinc.com are failed over except for the LcsCDR and LcsLog databases.
These databases are exempted from failover by using the ExcludeDatabaseList parameter.

Invoke-CsDatabaseFailover -PoolFqdn atl-cs-001.litwareinc.com -ExcludeDatabase -NewPrincipal "Mirror" -ExcludeDatabaseList "LcsCDR", "LcsLog"

## PARAMETERS

### -DatabaseType
**Below Content Applies To:** Lync Server 2013

Type of database being failed over.
Valid values are:

* Application
* Archiving
* CentralAdmin
* CentralMgmt
* Cls
* Edge
* Lyss
* Monitoring
* PersistentChat
* PersistentChatCompliance
* Provision
* Registrar
* User



**Below Content Applies To:** Skype for Business Server 2015

Type of database being failed over.
Valid values are:

ActiveMonitoring

Application

Archiving

CentralMgmt

Edge

Lyss

Monitoring

PersistentChat

PersistentChatCompliance

Provision

Registrar

SigninTelemetry

User



```yaml
Type: DatabaseNameType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewPrincipal
**Below Content Applies To:** Lync Server 2013

Specifies whether failover will be to the primary database or to the mirror database.
Valid values are:

* * Mirror

Primary



**Below Content Applies To:** Skype for Business Server 2015

Specifies whether failover will be to the primary database or to the mirror database.
Valid values are:

Mirror

Primary



```yaml
Type: MirrorRole
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name of the pool containing the database to be failed over.

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

### -ExcludeDatabaseList
List of databases that should not be failed over.
For example:

-ExcludeDatabaseList "LcsCDR"

To prevent multiple databases from being failed over, separate the database names using commas:

-ExcludeDatabaseList "LcsCDR", "LcsLog"

```yaml
Type: String[]
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
Suppresses the display of any non-fatal error message that might occur when running the command.
The Force parameter is also used if the current database is not accessible.

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
Retrieves topology information from the local replica of the Central Management store rather than from the Central Management store itself.

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

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\DatabaseFailover.html"

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
Invoke-CsDatabaseFailover does not accept pipelined input.

###  
None.
The Invoke-CsDatabaseFailover cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsDatabaseMirrorState]()

[Install-CsMirrorDatabase]()

[Online Version](http://technet.microsoft.com/EN-US/library/24b73e8e-948c-4e9c-bf4e-04ec0a229ffa(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/24b73e8e-948c-4e9c-bf4e-04ec0a229ffa(OCS.16).aspx)

