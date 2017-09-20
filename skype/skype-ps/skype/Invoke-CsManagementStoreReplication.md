---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Invoke-CsManagementStoreReplication
schema: 2.0.0
---

# Invoke-CsManagementStoreReplication

## SYNOPSIS

Forces Skype for Business Server replication services to send complete configuration data to the specified computers.
This is done by deleting the replication status of the computers from the Central Management store.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Invoke-CsManagementStoreReplication [[-ReplicaFqdn] <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION

When an administrator makes a change to Skype for Business Server (for example, when an administrator creates a new voice policy or changes the Address Book server configuration settings) that change is recorded in the Central Management store.
In turn, the change must then be replicated to all the computers running Skype for Business Server services or server roles.

In order to replicate data, the Master Replicator (running on the Central Management Server) creates a snapshot of the modified configuration data; a copy of this snapshot is then sent to each computer running Skype for Business Server services or server roles.
On those computers, a replication agent receives the snapshot and uploads the modified data; the agent then sends the Master Replicator a message reporting the latest replication status.

Replication typically requires no human intervention; in fact, it's usually best to let the Master Replicator handle the replication process.
However, there might be occasions when you need to forcibly initiate replication on a computer (or a group of computers) without waiting for the standard replication cycle to run its course.
Should such an occasion arise, you can forcibly replicate information to a computer by using the Invoke-CsManagementStoreReplication cmdlet.

Typically, replication works on an incremental basis: when data is replicated, only the changes are replicated, not the complete set of configuration data.
However, when you call the Invoke-CsManagementStoreReplication cmdlet, you force a complete replication of all the data rather than the more typical replication of changes only.
Note that replication will not necessarily take place immediately when you call the Invoke-CsManagementStoreReplication cmdlet.
Instead, there could be a two to three minute delay as changes are processed by the Master Replicator.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Invoke-CsManagementStoreReplication
```

In Example 1, the Invoke-CsManagementStoreReplication cmdlet is called without any parameters.
This forces replication to take place on all Skype for Business Server computers.

### -------------------------- EXAMPLE 2 -------------------------- 
```

Invoke-CsManagementStoreReplication -ReplicaFqdn atl-cs-001.litwareinc.com
```

In Example 2, the ReplicaFqdn parameter is used when calling the Invoke-CsManagementStoreReplication cmdlet.
That causes replication to take place only on the computer atl-cs-001.litwareinc.com.


## PARAMETERS

### -ReplicaFqdn

Fully qualified domain name (FQDN) of the computer where replication should be initiated.
For example: `-ReplicaFqdn "atl-cs-001.litwareinc.com".`

If this parameter is not included, then replication will be initiated on all your Skype for Business Server computers.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Invoke-CsManagementStoreReplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Invoke-CsManagementStoreReplication cmdlet does not return any objects.

## NOTES

## RELATED LINKS

[Get-CsManagementStoreReplicationStatus]()

