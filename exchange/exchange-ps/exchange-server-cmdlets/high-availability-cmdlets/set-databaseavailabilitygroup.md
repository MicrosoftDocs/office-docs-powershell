---
title: "Set-DatabaseAvailabilityGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4353c3ab-75b7-485e-89ae-d4b09b44b646
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-DatabaseAvailabilityGroup

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-DatabaseAvailabilityGroup** cmdlet to configure properties of a database availability group (DAG).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-DatabaseAvailabilityGroup -Identity <DatabaseAvailabilityGroupIdParameter> [-ActivityState <NewDeployment | DotBuildUpgrade | Decom | PendingDotBuildUpgrade | DecomRemoveMailboxes | DecomNoUpgrades | Discovered | Allocated | ReadyForAllocation | Spare>] [-AllowCrossSiteRpcClientAccess <SwitchParameter>] [-AlternateWitnessDirectory <NonRootLocalLongFullPath>] [-AlternateWitnessServer <FileShareWitnessServerName>] [-AutoDagAllServersInstalled <$true | $false>] [-AutoDagAutoRedistributeEnabled <$true | $false>] [-AutoDagAutoReseedEnabled <$true | $false>] [-AutoDagBitlockerEnabled <$true | $false>] [-AutoDagDatabaseCopiesPerDatabase <Int32>] [-AutoDagDatabaseCopiesPerVolume <Int32>] [-AutoDagDatabasesRootFolderPath <NonRootLocalLongFullPath>] [-AutoDagDiskReclaimerEnabled <$true | $false>] [-AutoDagFIPSCompliant <$true | $false>] [-AutoDagSIPEnabled <$true | $false>] [-AutoDagTotalNumberOfDatabases <Int32>] [-AutoDagTotalNumberOfServers <Int32>] [-AutoDagVolumesRootFolderPath <NonRootLocalLongFullPath>] [-Confirm [<SwitchParameter>]] [-DagConfiguration <DatabaseAvailabilityGroupConfigurationIdParameter>] [-DatabaseAvailabilityGroupIpAddresses <IPAddress[]>] [-DatacenterActivationMode <Off | DagOnly>] [-DiscoverNetworks <SwitchParameter>] [-DistributedStoreMembershipConfigOverride <String>] [-DomainController <Fqdn>] [-DxStoreSpareServers <String>] [-DxStoreWitnessServers <String>] [-FileSystem <NTFS | ReFS>] [-ForceSyncDistributedStoreSettings <SwitchParameter>] [-IgnoreClusterErrors <SwitchParameter>] [-MailboxLoadBalanceComputeCapacity <Int32>] [-MailboxLoadBalanceEnabled <$true | $false>] [-MailboxLoadBalanceOverloadedThreshold <Int32>] [-MailboxLoadBalanceRelativeLoadCapacity <Int32>] [-MailboxLoadBalanceSellableStorage <ByteQuantifiedSize>] [-MailboxLoadBalanceUnderloadedThreshold <Int32>] [-ManualDagNetworkConfiguration <$true | $false>] [-MetaCacheDatabaseVolumesPerServer <Int32>] [-NetworkCompression <Disabled | Enabled | InterSubnetOnly | SeedOnly>] [-NetworkEncryption <Disabled | Enabled | InterSubnetOnly | SeedOnly>] [-PreferenceMoveFrequency <TimeSpan>] [-ReplayLagManagerEnabled <$true | $false>] [-ReplicationPort <UInt16>] [-RequestedDistributedStoreConfig <String>] [-SiloName <String>] [-SkipDagValidation <SwitchParameter>] [-WhatIf [<SwitchParameter>]] [-WitnessDirectory <NonRootLocalLongFullPath>] [-WitnessServer <FileShareWitnessServerName>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the witness directory to C:\DAG1DIR for the DAG DAG1.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -WitnessDirectory C:\DAG1DIR
```

### Example 2

This example preconfigures an alternate witness server of CAS3 and an alternate witness directory of C:\DAGFileShareWitnesses\DAG1.contoso.com for the DAG DAG1.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -AlternateWitnessDirectory C:\DAGFileShareWitnesses\DAG1.contoso.com -AlternateWitnessServer CAS3
```

### Example 3

This example configures the DAG DAG1 to use DHCP to obtain an IP address.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 0.0.0.0
```

### Example 4

This example configures the DAG DAG1 to use a static IP address of 10.0.0.8.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8
```

### Example 5

This example configures the multi-subnet DAG DAG1 with multiple static IP addresses.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8,10.0.1.8
```

### Example 6

This example configures TCP port 63132 as the port used by replication for the DAG DAG1.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -ReplicationPort 63132
```

> [!NOTE]
> After changing the default replication port for a DAG, you must manually modify the Windows Firewall exceptions on each member of the DAG to allow communication to occur over the specified port. 
  
### Example 7

This example configures the DAG DAG1 for DAC mode.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatacenterActivationMode DagOnly
```

### Example 8

This example configures the DAG DAG1 for AutoReseed using custom mount point paths and 4 databases per volume.
  
```
Set-DatabaseAvailabilityGroup -Identity DAG1 -AutoDagVolumesRootFolderPath C:\ExchVols -AutoDagDatabasesRootFolderPath C:\ExchDBs -AutoDagDatabaseCopiesPerVolume 4
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-DatabaseAvailabilityGroup** cmdlet enables you to manage DAG properties that can't be managed from the Exchange admin center (EAC), such as configuring network discovery, selecting the TCP port used for replication, and enabling datacenter activation coordination (DAC) mode.
  
DAG property values are stored in both Active Directory and the cluster database. Because some properties are stored in the cluster database, the underlying cluster for the DAG must have quorum to set the properties for:
  
- ReplicationPort
    
- NetworkCompression
    
- NetworkEncryption
    
- DiscoverNetworks
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupIdParameter  <br/> |The _Identity_ parameter specifies the name of the DAG that you want to modify. <br/> |
| _ActivityState_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseAvailabilityGroup+ActivityStateOption  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AllowCrossSiteRpcClientAccess_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AlternateWitnessDirectory_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _AlternateWitnessDirectory_ parameter specifies the name of an alternate directory that's used to store file share witness data. The specified directory must not be in use by any other DAGs or used for any other purpose. This parameter is used only as part of a datacenter switchover process. If the DAG is extended across multiple datacenters in a site resilience configuration, we recommend preconfiguring the alternate witness server and directory. <br/> |
| _AlternateWitnessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.FileShareWitnessServerName  <br/> |The _AlternateWitnessServer_ parameter specifies the name of an alternate server that's used to store file share witness data. The specified server must not be a member of the DAG that's configured to use it. This parameter is used only as part of a datacenter switchover process. If the DAG is extended across multiple datacenters in a site resilience configuration, we recommend preconfiguring the alternate witness server and directory. <br/> |
| _AutoDagAllServersInstalled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagAutoRedistributeEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AutoDagAutoRedistributeEnabled_parameter specifies whether automatic DAG redistribution is enabled or disabled during AutoReseed. The default value is  `$true` (enabled). <br/> |
| _AutoDagAutoReseedEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AutoDagAutoReseedEnabled_ is used to enable or disable Autoreseed. The default value is `$true` (enabled). <br/> |
| _AutoDagBitlockerEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagDatabaseCopiesPerDatabase_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagDatabaseCopiesPerVolume_ <br/> |Optional  <br/> |System.Int32  <br/> |The _AutoDagDatabaseCopiesPerVolume_ parameter is used to specify the configured number of database copies per volume. This parameter is used only with AutoReseed. <br/> |
| _AutoDagDatabasesRootFolderPath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _AutoDagDatabasesRootFolderPath_ parameter specifies the directory containing the database mount points when using AutoReseed. This parameter is required when using AutoReseed. AutoReseed uses a default path of C:\ExchangeDatabases. <br/> |
| _AutoDagDiskReclaimerEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AutoDagDiskReclaimerEnabled_ is used to enable or disable the volume formatting functions used by Autoreseed. The default value is `$true` (enabled). If you set this to `$false`, you will need to manually format the volume before the database(s) can be reseeded.  <br/> |
| _AutoDagFIPSCompliant_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagSIPEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagTotalNumberOfDatabases_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagTotalNumberOfServers_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AutoDagVolumesRootFolderPath_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _AutoDagVolumesRootFolderPath_ parameter specifies the volume containing the mount points for all disks, including spare disks, when using the AutoReseed feature of the DAG. This parameter is required when using AutoReseed. AutoReseed uses a default path of C:\ExchangeVolumes. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DagConfiguration_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupConfigurationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DatabaseAvailabilityGroupIpAddresses_ <br/> |Optional  <br/> |System.Net.IPAddress[]  <br/> |The _DatabaseAvailabilityGroupIpAddresses_ parameter specifies one or more static IP addresses to the DAG when a Mailbox server is added to a DAG. If you omit the _DatabaseAvailabilityGroupIpAddresses_ parameter when creating a DAG, the system attempts to lease one or more IP addresses from a Dynamic Host Configuration Protocol (DHCP) server in your organization to assign to the DAG. You must specify this parameter each time an additional IP address is added to the DAG, such as in the case of multi-subnet DAGs. You must also specify all IP addresses previously assigned to the DAG each time the _DatabaseAvailabilityGroupIpAddresses_ parameter is used. Setting the _DatabaseAvailabilityGroupIpAddresses_ parameter to a value of `0.0.0.0` automatically configures the DAG to use DHCP. <br/> |
| _DatacenterActivationMode_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatacenterActivationModeOption  <br/> | The _DatacenterActivationMode_ parameter specifies the datacenter activation mode for the DAG. Valid values are: <br/>  `Off`: Datacenter activation mode is disabled.  <br/>  `DagOnly`: Datacenter activation mode is enabled.  <br/> |
| _DiscoverNetworks_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DiscoverNetworks_switch specifies whether to force a rediscovery of the network and network interfaces. You don't need to specify a value with this switch.  <br/> By default, internal network heartbeats are sent between DAG members on the same subnet. If there's no response to the heartbeats, network discovery is performed automatically by the system. If you add or remove networks or change DAG network subnets, you can force rediscovery of all DAG networks by using the _DiscoverNetworks_switch.  <br/> |
| _DistributedStoreMembershipConfigOverride_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _DxStoreSpareServers_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DxStoreWitnessServers_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _FileSystem_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseAvailabilityGroup+FileSystemMode  <br/> | The _FileSystem_ parameter specifies the file system that's used for the DAG. Valid values are: <br/>  `NTFS` <br/>  `ReFS` <br/> |
| _ForceSyncDistributedStoreSettings_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IgnoreClusterErrors_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxLoadBalanceComputeCapacity_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxLoadBalanceEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxLoadBalanceOverloadedThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxLoadBalanceRelativeLoadCapacity_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxLoadBalanceSellableStorage_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ByteQuantifiedSize  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _MailboxLoadBalanceUnderloadedThreshold_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ManualDagNetworkConfiguration_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ManualDagNetworkConfiguration_ parameter specifies whether DAG networks should be automatically configured. If this parameter is set to `$false`, DAG networks are automatically configured. If this parameter is set to  `$true`, you must manually configure DAG networks.  <br/> |
| _MetaCacheDatabaseVolumesPerServer_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _NetworkCompression_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseAvailabilityGroup+NetworkOption  <br/> | The _NetworkCompression_ parameter specifies the network compression option for the DAG. Valid values are: <br/>  `Disabled`: Network compression is disabled on all networks.  <br/>  `Enabled`: Network compression is enabled on all networks.  <br/>  `InterSubnetOnly`: Network compression is enabled only for inter-subnet communication.  <br/>  `SeedOnly`: Network compression is enabled only for seeding.  <br/> |
| _NetworkEncryption_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseAvailabilityGroup+NetworkOption  <br/> | The _NetworkEncryption_ parameter specifies the network encryption option for the DAG. Valid values are: <br/>  `Disabled`: Network encryption is disabled on all networks.  <br/>  `Enabled`: Network encryption is enabled on all networks.  <br/>  `InterSubnetOnly`: Network encryption is enabled only for inter-subnet communication.  <br/>  `SeedOnly`: Network encryption is enabled only for seeding.  <br/> |
| _PreferenceMoveFrequency_ <br/> |Optional  <br/> |System.TimeSpan  <br/> |The _PreferenceMoveFrequency_ parameter specifies how frequently the Microsoft Exchange Replication service inspects and automatically rebalances the database copies. If the most preferred database copy ( **ActivationPreference** value of 1) isn't the active copy, the most preferred database copy is activated by performing a lossless switchover. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> The default value is  `01:00:00` (1 hour). To disable this feature, specify the value `([System.Threading.Timeout]::InfiniteTimeSpan)`.  <br/> |
| _ReplayLagManagerEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _ReplayLagManagerEnabled_ parameter specifies whether to disable the automatic playdown of log files for a lagged database copy. <br/> |
| _ReplicationPort_ <br/> |Optional  <br/> |System.UInt16  <br/> |The _ReplicationPort_ parameter specifies a Transmission Control Protocol (TCP) port for replication (log shipping and seeding) activity. If this parameter isn't specified, the default port for replication is TCP 64327. <br/> |
| _RequestedDistributedStoreConfig_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SiloName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SkipDagValidation_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _SkipDagValidation_ switch specifies whether to bypass the validation of the DAG's quorum model and the health check on the DAG's witness when configuring the DAG. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WitnessDirectory_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _WitnessDirectory_ parameter specifies the name of the directory on the server that's used to store file share witness data. The specified directory must not be in use by any other DAGs. <br/> |
| _WitnessServer_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.FileShareWitnessServerName  <br/> |The _WitnessServer_ parameter specifies the name of a server that will act as a witness for the DAG. The server specified can't be a member of the DAG. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

