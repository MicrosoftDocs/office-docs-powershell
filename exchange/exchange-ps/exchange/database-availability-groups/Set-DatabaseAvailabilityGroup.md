---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-DatabaseAvailabilityGroup
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-DatabaseAvailabilityGroup

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-DatabaseAvailabilityGroup cmdlet to configure properties of a database availability group (DAG).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-DatabaseAvailabilityGroup [-Identity] <DatabaseAvailabilityGroupIdParameter>
 [-AllowCrossSiteRpcClientAccess] [-AlternateWitnessDirectory <NonRootLocalLongFullPath>]
 [-AlternateWitnessServer <FileShareWitnessServerName>] [-Confirm]
 [-DatabaseAvailabilityGroupIpAddresses <IPAddress[]>] [-DatacenterActivationMode <Off | DagOnly>]
 [-DiscoverNetworks] [-DomainController <Fqdn>]
 [-NetworkCompression <Disabled | Enabled | InterSubnetOnly | SeedOnly>]
 [-NetworkEncryption <Disabled | Enabled | InterSubnetOnly | SeedOnly>] [-ReplicationPort <UInt16>] [-WhatIf]
 [-WitnessDirectory <NonRootLocalLongFullPath>] [-WitnessServer <FileShareWitnessServerName>]
 [-AutoDagAllServersInstalled <$true | $false>] [-AutoDagAutoReseedEnabled <$true | $false>]
 [-AutoDagBitlockerEnabled <$true | $false>] [-AutoDagDatabaseCopiesPerDatabase <Int32>]
 [-AutoDagDatabaseCopiesPerVolume <Int32>] [-AutoDagDatabasesRootFolderPath <NonRootLocalLongFullPath>]
 [-AutoDagDiskReclaimerEnabled <$true | $false>] [-AutoDagFIPSCompliant <$true | $false>]
 [-AutoDagTotalNumberOfDatabases <Int32>] [-AutoDagTotalNumberOfServers <Int32>]
 [-AutoDagVolumesRootFolderPath <NonRootLocalLongFullPath>]
 [-DagConfiguration <DatabaseAvailabilityGroupConfigurationIdParameter>]
 [-MailboxLoadBalanceEnabled <$true | $false>] [-MailboxLoadBalanceOverloadedThreshold <Int32>] [-MailboxLoadBalanceRelativeLoadCapacity <Int32>]
 [-MailboxLoadBalanceUnderloadedThreshold <Int32>] [-ManualDagNetworkConfiguration <$true | $false>]
 [-ReplayLagManagerEnabled <$true | $false>] [-SkipDagValidation]
 [-ActivityState <NewDeployment | DotBuildUpgrade | Decom | PendingDotBuildUpgrade | DecomRemoveMailboxes | DecomNoUpgrades | Discovered | Allocated | ReadyForAllocation | Spare>]
 [-AutoDagAutoRedistributeEnabled <$true | $false>] [-AutoDagSIPEnabled <$true | $false>]
 [-DistributedStoreMembershipConfigOverride <String>] [-DxStoreSpareServers <String>]
 [-DxStoreWitnessServers <String>] [-FileSystem <NTFS | ReFS>] [-ForceSyncDistributedStoreSettings]
 [-IgnoreClusterErrors] [-MailboxLoadBalanceComputeCapacity <Int32>]
 [-MailboxLoadBalanceSellableStorage <ByteQuantifiedSize>] [-MetaCacheDatabaseVolumesPerServer <Int32>]
 [-PreferenceMoveFrequency <TimeSpan>] [-RequestedDistributedStoreConfig <String>] [-SiloName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-DatabaseAvailabilityGroup cmdlet enables you to manage DAG properties that can't be managed from the Exchange admin center (EAC), such as configuring network discovery, selecting the TCP port used for replication and enabling datacenter activation coordination (DAC) mode.

DAG property values are stored in both Active Directory and the cluster database. Because some properties are stored in the cluster database, the underlying cluster for the DAG must have quorum to set the properties for:

- ReplicationPort

- NetworkCompression

- NetworkEncryption

- DiscoverNetworks

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -WitnessDirectory C:\DAG1DIR
```

This example sets the witness directory to C:\\DAG1DIR for the DAG DAG1.

### -------------------------- Example 2 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -AlternateWitnessDirectory C:\DAGFileShareWitnesses\DAG1.contoso.com -AlternateWitnessServer CAS3
```

This example preconfigures an alternate witness server of CAS3 and an alternate witness directory of C:\\DAGFileShareWitnesses\\DAG1.contoso.com for the DAG DAG1.

### -------------------------- Example 3 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 0.0.0.0
```

This example configures the DAG DAG1 to use DHCP to obtain an IP address.

### -------------------------- Example 4 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8
```

This example configures the DAG DAG1 to use a static IP address of 10.0.0.8.

### -------------------------- Example 5 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8,10.0.1.8
```

This example configures the multi-subnet DAG DAG1 with multiple static IP addresses.

### -------------------------- Example 6 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -ReplicationPort 63132
```

This example configures TCP port 63132 as the port used by replication for the DAG DAG1.

After changing the default replication port for a DAG, you must manually modify the Windows Firewall exceptions on each member of the DAG to allow communication to occur over the specified port.

### -------------------------- Example 7 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatacenterActivationMode DagOnly
```

This example configures the DAG DAG1 for DAC mode.

### -------------------------- Example 8 --------------------------
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -AutoDagVolumesRootFolderPath C:\ExchVols -AutoDagDatabasesRootFolderPath C:\ExchDBs -AutoDagDatabaseCopiesPerVolume 4
```

This example configures the DAG DAG1 for AutoReseed using custom mount point paths and 4 databases per volume.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the DAG that you want to modify.

```yaml
Type: DatabaseAvailabilityGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowCrossSiteRpcClientAccess
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateWitnessDirectory
The AlternateWitnessDirectory parameter specifies the name of an alternate directory that's used to store file share witness data. The specified directory must not be in use by any other DAGs or used for any other purpose. This parameter is used only as part of a datacenter switchover process. If the DAG is extended across multiple datacenters in a site resilience configuration, we recommend preconfiguring the alternate witness server and directory.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateWitnessServer
The AlternateWitnessServer parameter specifies the name of an alternate server that's used to store file share witness data. The specified server must not be a member of the DAG that's configured to use it. This parameter is used only as part of a datacenter switchover process. If the DAG is extended across multiple datacenters in a site resilience configuration, we recommend preconfiguring the alternate witness server and directory.

```yaml
Type: FileShareWitnessServerName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseAvailabilityGroupIpAddresses
The DatabaseAvailabilityGroupIpAddresses parameter specifies one or more static IP addresses to the DAG when a Mailbox server is added to a DAG. If you omit the DatabaseAvailabilityGroupIpAddresses parameter when creating a DAG, the system attempts to lease one or more IP addresses from a Dynamic Host Configuration Protocol (DHCP) server in your organization to assign to the DAG. You must specify this parameter each time an additional IP address is added to the DAG, such as in the case of multi-subnet DAGs. You must also specify all IP addresses previously assigned to the DAG each time the DatabaseAvailabilityGroupIpAddresses parameter is used. Setting the DatabaseAvailabilityGroupIpAddresses parameter to a value of 0.0.0.0 automatically configures the DAG to use DHCP.

```yaml
Type: IPAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatacenterActivationMode
The DatacenterActivationMode parameter specifies the datacenter activation mode for the DAG. Valid values are:

- Off: Datacenter activation mode is disabled.

- DagOnly: Datacenter activation mode is enabled.

```yaml
Type: Off | DagOnly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoverNetworks
The DiscoverNetworksswitch specifies whether to force a rediscovery of the network and network interfaces. You don't need to specify a value with this switch.

By default, internal network heartbeats are sent between DAG members on the same subnet. If there's no response to the heartbeats, network discovery is performed automatically by the system. If you add or remove networks or change DAG network subnets, you can force rediscovery of all DAG networks by using the DiscoverNetworksswitch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkCompression
The NetworkCompression parameter specifies the network compression option for the DAG. Valid values are:

- Disabled: Network compression is disabled on all networks.

- Enabled: Network compression is enabled on all networks.

- InterSubnetOnly: Network compression is enabled only for inter-subnet communication.

- SeedOnly: Network compression is enabled only for seeding.

```yaml
Type: Disabled | Enabled | InterSubnetOnly | SeedOnly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkEncryption
The NetworkEncryption parameter specifies the network encryption option for the DAG. Valid values are:

- Disabled: Network encryption is disabled on all networks.

- Enabled: Network encryption is enabled on all networks.

- InterSubnetOnly: Network encryption is enabled only for inter-subnet communication.

- SeedOnly: Network encryption is enabled only for seeding.

```yaml
Type: Disabled | Enabled | InterSubnetOnly | SeedOnly
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationPort
The ReplicationPort parameter specifies a Transmission Control Protocol (TCP) port for replication (log shipping and seeding) activity. If this parameter isn't specified, the default port for replication is TCP 64327.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WitnessDirectory
The WitnessDirectory parameter specifies the name of the directory on the server that's used to store file share witness data. The specified directory must not be in use by any other DAGs.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WitnessServer
The WitnessServer parameter specifies the name of a server that will act as a witness for the DAG. The server specified can't be a member of the DAG.

```yaml
Type: FileShareWitnessServerName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagAllServersInstalled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagAutoReseedEnabled
The AutoDagAutoReseedEnabled is used to enable or disable Autoreseed. The default value is $true (enabled).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagBitlockerEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDatabaseCopiesPerDatabase
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDatabaseCopiesPerVolume
The AutoDagDatabaseCopiesPerVolume parameter is used to specify the configured number of database copies per volume. This parameter is used only with AutoReseed.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDatabasesRootFolderPath
The AutoDagDatabasesRootFolderPath parameter specifies the directory containing the database mount points when using AutoReseed. This parameter is required when using AutoReseed. AutoReseed uses a default path of C:\\ExchangeDatabases.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDiskReclaimerEnabled
The AutoDagDiskReclaimerEnabled is used to enable or disable the volume formatting functions used by Autoreseed. The default value is $true (enabled). If you set this to $false, you will need to manually format the volume before the database(s) can be reseeded.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagFIPSCompliant
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagTotalNumberOfDatabases
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagTotalNumberOfServers
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagVolumesRootFolderPath
The AutoDagVolumesRootFolderPath parameter specifies the volume containing the mount points for all disks, including spare disks, when using the AutoReseed feature of the DAG. This parameter is required when using AutoReseed. AutoReseed uses a default path of C:\\ExchangeVolumes.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DagConfiguration
This parameter is reserved for internal Microsoft use.

```yaml
Type: DatabaseAvailabilityGroupConfigurationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceOverloadedThreshold
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceRelativeLoadCapacity
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceUnderloadedThreshold
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManualDagNetworkConfiguration
The ManualDagNetworkConfiguration parameter specifies whether DAG networks should be automatically configured. If this parameter is set to $false, DAG networks are automatically configured. If this parameter is set to $true, you must manually configure DAG networks.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayLagManagerEnabled
The ReplayLagManagerEnabled parameter specifies whether to disable the automatic playdown of log files for a lagged database copy.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDagValidation
The SkipDagValidation switch specifies whether to bypass the validation of the DAG's quorum model and the health check on the DAG's witness when configuring the DAG. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivityState
This parameter is reserved for internal Microsoft use.

```yaml
Type: NewDeployment | DotBuildUpgrade | Decom | PendingDotBuildUpgrade | DecomRemoveMailboxes | DecomNoUpgrades | Discovered | Allocated | ReadyForAllocation | Spare
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagAutoRedistributeEnabled
The AutoDagAutoRedistributeEnabled parameter specifies whether automatic DAG redistribution is enabled or disabled during AutoReseed. The default value is $true (enabled).

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagSIPEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributedStoreMembershipConfigOverride
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DxStoreSpareServers
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DxStoreWitnessServers
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileSystem
The FileSystem parameter specifies the file system that's used for the DAG. Valid values are:

- NTFS

- ReFS

```yaml
Type: NTFS | ReFS
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceSyncDistributedStoreSettings
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreClusterErrors
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceComputeCapacity
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLoadBalanceSellableStorage
This parameter is reserved for internal Microsoft use.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetaCacheDatabaseVolumesPerServer
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferenceMoveFrequency
The PreferenceMoveFrequency parameter specifies how frequently the Microsoft Exchange Replication service inspects and automatically rebalances the database copies. If the most preferred database copy (ActivationPreference value of 1) isn't the active copy, the most preferred database copy is activated by performing a lossless switchover.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

The default value is 01:00:00 (1 hour). To disable this feature, specify the value ([System.Threading.Timeout]::InfiniteTimeSpan).

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestedDistributedStoreConfig
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiloName
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/4353c3ab-75b7-485e-89ae-d4b09b44b646.aspx)
