---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-databaseavailabilitygroup
schema: 2.0.0
title: Set-DatabaseAvailabilityGroup
---

# Set-DatabaseAvailabilityGroup

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-DatabaseAvailabilityGroup cmdlet to configure properties of a database availability group (DAG).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DatabaseAvailabilityGroup [-Identity] <DatabaseAvailabilityGroupIdParameter>
 [-ActivityState <ActivityStateOption>]
 [-AllowCrossSiteRpcClientAccess]
 [-AlternateWitnessDirectory <NonRootLocalLongFullPath>]
 [-AlternateWitnessServer <FileShareWitnessServerName>]
 [-AutoDagAllServersInstalled <Boolean>]
 [-AutoDagAutoRedistributeEnabled <Boolean>]
 [-AutoDagAutoReseedEnabled <Boolean>]
 [-AutoDagBitlockerEnabled <Boolean>]
 [-AutoDagDatabaseCopiesPerDatabase <Int32>]
 [-AutoDagDatabaseCopiesPerVolume <Int32>]
 [-AutoDagDatabasesRootFolderPath <NonRootLocalLongFullPath>]
 [-AutoDagDiskReclaimerEnabled <Boolean>]
 [-AutoDagTotalNumberOfDatabases <Int32>]
 [-AutoDagTotalNumberOfServers <Int32>]
 [-AutoDagVolumesRootFolderPath <NonRootLocalLongFullPath>]
 [-Confirm]
 [-DagConfiguration <DatabaseAvailabilityGroupConfigurationIdParameter>]
 [-DatabaseAvailabilityGroupIpAddresses <IPAddress[]>]
 [-DatacenterActivationMode <DatacenterActivationModeOption>]
 [-DiscoverNetworks]
 [-DomainController <Fqdn>]
 [-FileSystem <FileSystemMode>]
 [-ManualDagNetworkConfiguration <Boolean>]
 [-MetaCacheDatabaseVolumesPerServer <Int32>]
 [-NetworkCompression <NetworkOption>]
 [-NetworkEncryption <NetworkOption>]
 [-PreferenceMoveFrequency <TimeSpan>]
 [-ReplayLagManagerEnabled <Boolean>]
 [-ReplicationPort <UInt16>]
 [-SkipDagValidation]
 [-WhatIf]
 [-WitnessDirectory <NonRootLocalLongFullPath>]
 [-WitnessServer <FileShareWitnessServerName>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-DatabaseAvailabilityGroup cmdlet enables you to manage DAG properties that can't be managed from the Exchange admin center (EAC), such as configuring network discovery, selecting the TCP port used for replication and enabling datacenter activation coordination (DAC) mode.

DAG property values are stored in both Active Directory and the cluster database. Because some properties are stored in the cluster database, the underlying cluster for the DAG must have quorum to set the properties for:

- ReplicationPort
- NetworkCompression
- NetworkEncryption
- DiscoverNetworks

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -WitnessDirectory C:\DAG1DIR
```

This example sets the witness directory to C:\\DAG1DIR for the DAG DAG1.

### Example 2
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -AlternateWitnessDirectory C:\DAGFileShareWitnesses\DAG1.contoso.com -AlternateWitnessServer CAS3
```

This example preconfigures an alternate witness server of CAS3 and an alternate witness directory of C:\\DAGFileShareWitnesses\\DAG1.contoso.com for the DAG DAG1.

### Example 3
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 0.0.0.0
```

This example configures the DAG DAG1 to use DHCP to obtain an IP address.

### Example 4
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8
```

This example configures the DAG DAG1 to use a static IP address of 10.0.0.8.

### Example 5
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8,10.0.1.8
```

This example configures the multi-subnet DAG DAG1 with multiple static IP addresses.

### Example 6
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -ReplicationPort 63132
```

This example configures TCP port 63132 as the port used by replication for the DAG DAG1.

After changing the default replication port for a DAG, you must manually modify the Windows Firewall exceptions on each member of the DAG to allow communication to occur over the specified port.

### Example 7
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -DatacenterActivationMode DagOnly
```

This example configures the DAG DAG1 for DAC mode.

### Example 8
```powershell
Set-DatabaseAvailabilityGroup -Identity DAG1 -AutoDagVolumesRootFolderPath C:\ExchVols -AutoDagDatabasesRootFolderPath C:\ExchDBs -AutoDagDatabaseCopiesPerVolume 4
```

This example configures the DAG DAG1 for AutoReseed using custom mount point paths and 4 databases per volume.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the name of the DAG that you want to modify.

```yaml
Type: DatabaseAvailabilityGroupIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActivityState

> Applicable: Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: ActivityStateOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCrossSiteRpcClientAccess

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateWitnessDirectory

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AlternateWitnessDirectory parameter specifies the name of an alternate directory that's used to store file share witness data. The specified directory must not be in use by any other DAGs or used for any other purpose. This parameter is used only as part of a datacenter switchover process. If the DAG is extended across multiple datacenters in a site resilience configuration, we recommend preconfiguring the alternate witness server and directory.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlternateWitnessServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AlternateWitnessServer parameter specifies the name of an alternate server that's used to store file share witness data. The specified server must not be a member of the DAG that's configured to use it. This parameter is used only as part of a datacenter switchover process. If the DAG is extended across multiple datacenters in a site resilience configuration, we recommend preconfiguring the alternate witness server and directory.

```yaml
Type: FileShareWitnessServerName
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagAllServersInstalled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagAutoRedistributeEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019

The AutoDagAutoRedistributeEnabled parameter specifies whether automatic DAG redistribution is enabled or disabled during AutoReseed. The default value is $true (enabled).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagAutoReseedEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagAutoReseedEnabled is used to enable or disable Autoreseed. The default value is $true (enabled).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagBitlockerEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagBitlockerEnabled parameter ensures that Disk Reclaimer handles spare disks correctly and encrypts them with BitLocker. If Bitlocker is used to encrypt database disks, set the value of this parameter to $true on all Mailbox servers in the DAG after they are all running Exchange 2013 CU13 or later, or Exchange 2016 CU2 or later.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDatabaseCopiesPerDatabase

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDatabaseCopiesPerVolume

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagDatabaseCopiesPerVolume parameter is used to specify the configured number of database copies per volume. This parameter is used only with AutoReseed.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDatabasesRootFolderPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagDatabasesRootFolderPath parameter specifies the directory containing the database mount points when using AutoReseed. This parameter is required when using AutoReseed. AutoReseed uses a default path of C:\\ExchangeDatabases.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagDiskReclaimerEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagDiskReclaimerEnabled is used to enable or disable the volume formatting functions used by Autoreseed. The default value is $true (enabled). If you set this to $false, you will need to manually format the volume before the database(s) can be reseeded.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagTotalNumberOfDatabases

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagTotalNumberOfServers

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDagVolumesRootFolderPath

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDagVolumesRootFolderPath parameter specifies the volume containing the mount points for all disks, including spare disks, when using the AutoReseed feature of the DAG. This parameter is required when using AutoReseed. AutoReseed uses a default path of C:\\ExchangeVolumes.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DagConfiguration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: DatabaseAvailabilityGroupConfigurationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseAvailabilityGroupIpAddresses

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DatabaseAvailabilityGroupIpAddresses parameter specifies one or more static IP addresses to the DAG when a Mailbox server is added to a DAG. If you omit the DatabaseAvailabilityGroupIpAddresses parameter when creating a DAG, the system attempts to lease one or more IP addresses from a Dynamic Host Configuration Protocol (DHCP) server in your organization to assign to the DAG. You must specify this parameter each time an additional IP address is added to the DAG, such as in the case of multi-subnet DAGs. You must also specify all IP addresses previously assigned to the DAG each time the DatabaseAvailabilityGroupIpAddresses parameter is used. Setting the DatabaseAvailabilityGroupIpAddresses parameter to a value of 0.0.0.0 automatically configures the DAG to use DHCP.

```yaml
Type: IPAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatacenterActivationMode

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DatacenterActivationMode parameter specifies the datacenter activation mode for the DAG. Valid values are:

- Off: Datacenter activation mode is disabled.
- DagOnly: Datacenter activation mode is enabled.

```yaml
Type: DatacenterActivationModeOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoverNetworks

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DiscoverNetworks switch specifies whether to force a rediscovery of the network and network interfaces. You don't need to specify a value with this switch.

By default, internal network heartbeats are sent between DAG members on the same subnet. If there's no response to the heartbeats, network discovery is performed automatically by the system. If you add or remove networks or change DAG network subnets, you can force rediscovery of all DAG networks by using the DiscoverNetworks switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileSystem

> Applicable: Exchange Server 2016, Exchange Server 2019

The FileSystem parameter specifies the file system that's used for the DAG. Valid values are:

- NTFS
- ReFS

```yaml
Type: FileSystemMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManualDagNetworkConfiguration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ManualDagNetworkConfiguration parameter specifies whether DAG networks should be automatically configured. If this parameter is set to $false, DAG networks are automatically configured. If this parameter is set to $true, you must manually configure DAG networks.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetaCacheDatabaseVolumesPerServer

> Applicable: Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkCompression

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The NetworkCompression parameter specifies the network compression option for the DAG. Valid values are:

- Disabled: Network compression is disabled on all networks.
- Enabled: Network compression is enabled on all networks.
- InterSubnetOnly: Network compression is enabled only for inter-subnet communication.
- SeedOnly: Network compression is enabled only for seeding.

```yaml
Type: NetworkOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkEncryption

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The NetworkEncryption parameter specifies the network encryption option for the DAG. Valid values are:

- Disabled: Network encryption is disabled on all networks.
- Enabled: Network encryption is enabled on all networks.
- InterSubnetOnly: Network encryption is enabled only for inter-subnet communication.
- SeedOnly: Network encryption is enabled only for seeding.

```yaml
Type: NetworkOption
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferenceMoveFrequency

> Applicable: Exchange Server 2016, Exchange Server 2019

The PreferenceMoveFrequency parameter specifies how frequently the Microsoft Exchange Replication service inspects and automatically rebalances the database copies. If the most preferred database copy (ActivationPreference value of 1) isn't the active copy, the most preferred database copy is activated by performing a lossless switchover.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

The default value is 01:00:00 (1 hour). To disable this feature, specify the value `([System.Threading.Timeout]::InfiniteTimeSpan)`.

**Important**: Don't specify a value larger than 49.7 days. A larger value will crash MSExchangeRepl.exe with an ArgumentOutOfRangeException error on all DAG members.

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplayLagManagerEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ReplayLagManagerEnabled parameter specifies whether to disable the automatic playdown of log files for a lagged database copy.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationPort

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ReplicationPort parameter specifies a Transmission Control Protocol (TCP) port for replication (log shipping and seeding) activity. If this parameter isn't specified, the default port for replication is TCP 64327.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipDagValidation

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SkipDagValidation switch specifies whether to bypass the validation of the DAG's quorum model and the health check on the DAG's witness when configuring the DAG. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WitnessDirectory

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WitnessDirectory parameter specifies the name of the directory on the server that's used to store file share witness data. The specified directory must not be in use by any other DAGs.

```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WitnessServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WitnessServer parameter specifies the name of a server that will act as a witness for the DAG. The server specified can't be a member of the DAG.

```yaml
Type: FileShareWitnessServerName
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
