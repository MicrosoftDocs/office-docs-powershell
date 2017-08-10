---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsDatabaseMirrorState

## SYNOPSIS
Returns information about whether database mirroring has been implemented for a specified database on a specified pool.
Database mirroring enables you to simultaneously maintain two copies of a database, with each copy residing on a different server.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Get-CsDatabaseMirrorState -PoolFqdn <Fqdn> [-DatabaseType <DatabaseNameType>] [-LocalStore] [-Report <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-CsDatabaseMirrorState cmdlet returns information about the mirror databases configured for a pool; this includes information about the mirror databases that might (or might not) have been configured for the Front End server database, the Location Information Service database, the call detail recording and Quality of Experience databases, and so on.
For each database the cmdlet will report back the synchronization status for both the primary database and the mirror database.
In some cases you will see output similar to this, including the property value DatabaseInaccessibleOrMirroringNotEnabled:

DatabaseName : lcscdr

StateOnPrimary : DatabaseInaccessibleOrMirroringNotEnabled

StateOnMirror : DatabaseInaccessibleOrMirroringNotEnabled

MirroringStatusOnPrimary :

MirroringStatusOnSecondary :

That typically means that no mirror database has been assigned to the primary database (in this case, the database lcscdr, used for maintaining call detail data).

The functions carried out by the Get-CsDatabaseMirrorState cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDatabaseMirrorState -PoolFqdn "atl-cs-001.litwareinc.com" -DatabaseType Monitoring
```

The command shown in Example 1 returns the state of the database mirror assigned to the monitoring database for the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool whose database mirroring state is being checked.
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

### -DatabaseType
Type of database whose mirror state is being checked.

Allowed values for Lync Server 2013 are:
- App
- Archiving
- CMS
- Monitoring
- Provision
- User


Allowed values for Skype for Business Server 2015 are:
- ActiveMonitoring
- Application
- Archiving
- CentralMgmt
- Edge
- Lyss
- Monitoring
- PersistentChat
- PersistentChatCompliance
- Provision
- Registrar
- SigninTelemetry
- User

```yaml
Type: DatabaseNameType
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
Retrieves the backup mirror state from the local replica of the Central Management store rather than from the Central Management store itself.

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
For example:

`-Report "C:\Logs\DatabaseMirrorState.html"`

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Deployment.DatabaseMirrorState


## NOTES


## RELATED LINKS

[Install-CsMirrorDatabase]()

[Uninstall-CsMirrorDatabase]()