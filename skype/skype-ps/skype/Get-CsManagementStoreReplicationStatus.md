---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsManagementStoreReplicationStatus
schema: 2.0.0
---

# Get-CsManagementStoreReplicationStatus

## SYNOPSIS
Returns information about the Skype for Business Server replication process; this includes information on whether replication is currently up to date for your Skype for Business Server computers.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsManagementStoreReplicationStatus [[-ReplicaFqdn] <String>] [-CentralManagementStoreStatus]
 [<CommonParameters>]
```

## DESCRIPTION
When an administrator makes a change of some kind to Skype for Business Server (for example, when an administrator creates a new voice policy or changes the Address Book Server configuration settings) that change is recorded in the Central Management store.
In turn, the change must then be replicated to all the computers running Skype for Business Server services or server roles.

In order to replicate data, the Master Replicator (running on the Central Management Server) creates a snapshot of the modified configuration data; a copy of this snapshot is then sent to each computer running Skype for Business Server services or server roles.
On those computers, a replication agent receives the snapshot and uploads the modified data; the agent then sends the Master Replicator a message reporting the latest replication status.

The Get-CsManagementStoreReplicationStatus cmdlet enables you to verify the replication status for any (or all) of the Skype for Business Server computers in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsManagementStoreReplicationStatus
```

In Example 1, the Get-CsManagementStoreReplicationStatus cmdlet is called without any parameters; that returns the replication status (up to date or not up to date) for all Skype for Business Server computers.

### -------------------------- Example 2 --------------------------
```
Get-CsManagementStoreReplicationStatus | Where-Object {$_.UpToDate -eq $False}
```

Example 2 returns a collection of all the computers where replication is not up to date.
This is done by first using the Get-CsManagementStoreReplicationStatus cmdlet to retrieve a collection containing the replication status for all the servers.
This collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to computers where the UpToDate property is equal to False.

### -------------------------- Example 3 --------------------------
```
Get-CsManagementStoreReplicationStatus -ReplicaFqdn atl-cs-001.litwareinc.com
```

In Example 3, returned data is limited to a single computer: atl-cs-001.litwareinc.com/

### -------------------------- Example 4 --------------------------
```
Get-CsManagementStoreReplicationStatus | Where-Object {$_.LastUpdateCreation -lt "8/11/2018 8:00 PM"}
```

Example 4 returns information about the computers that were last replicated prior to 8:00 P.M.
on August 11, 2018.
To do this, the Get-CsManagementStoreReplicationStatus cmdlet is first called to return replication information for all your Skype for Business Server computers.
This information is then piped to the Where-Object cmdlet, which selects only those computers where the LastUpdateCreation property is less than 8:00 P.M.
on August 11, 2018 (8/11/2018 8:00 P.M.).
To return information about computers that were last replicated after 8:00 P.M.
on August 11, 2018, use the -gt (greater than) operator:

`Where-Object {$_.LastUpdateCreation -gt "8/11/2018 8:00 PM"}`

The dates specified in this example use the U.S.
English format for date-time values.
Dates should be specified using a format compatible with your Regional and Language Options.

### -------------------------- Example 5 --------------------------
```
Get-CsManagementStoreReplicationStatus -CentralManagementStoreStatus
```

The command shown in Example 5 uses the CentralManagementStoreStatus parameter to return detailed information about the current status of the Central Management store.
This includes the fully qualified domains names of the Active Master and the File Transfer Agent services as well as the date and time of the last heartbeat detected for each of those services.


## PARAMETERS

### -ReplicaFqdn
Fully qualified domain name (FQDN) of the computer for which the replication status is to be checked.
For example: -ReplicaFqdn "atl-cs-001.litwareinc.com".

If this parameter is not included, then replication status information for all your Skype for Business Server computers will be returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -CentralManagementStoreStatus
Returns additional information about the current status of the Central Management store, including a list of active replicas and deleted replicas, as well as the location of the Active Master and the File Transfer Agent services.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Xds.ReplicaState  or  Microsoft.Rtc.Management.Xds.CentralManagementStoreStatusResult
By default, the Get-CsManagementStoreReplicationStatus cmdlet returns instances of the Microsoft.Rtc.Management.Xds.ReplicaState object.
If the CentralManagementStoreStatus parameter is used, then the cmdlet returns instances of the Microsoft.Rtc.Management.Xds.CentralManagementStoreStatusResult object.


## NOTES


## RELATED LINKS

[Invoke-CsManagementStoreReplication](Invoke-CsManagementStoreReplication.md)

