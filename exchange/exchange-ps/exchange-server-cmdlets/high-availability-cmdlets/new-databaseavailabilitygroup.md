---
title: "New-DatabaseAvailabilityGroup"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c0cd98a9-eaaa-4cfb-845d-213e5d606d3b
description: "This cmdlet is available only in on-premises Exchange."
---

# New-DatabaseAvailabilityGroup

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-DatabaseAvailabilityGroup** cmdlet to create a database availability group (DAG).
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-DatabaseAvailabilityGroup -Name <String> -WitnessServer <FileShareWitnessServerName> [-ActivityState <NewDeployment | DotBuildUpgrade | Decom | PendingDotBuildUpgrade | DecomRemoveMailboxes | DecomNoUpgrades | Discovered | Allocated | ReadyForAllocation | Spare>] [-Confirm [<SwitchParameter>]] [-DagConfiguration <DatabaseAvailabilityGroupConfigurationIdParameter>] [-DatabaseAvailabilityGroupIpAddresses <IPAddress[]>] [-DomainController <Fqdn>] [-FileSystem <NTFS | ReFS>] [-ThirdPartyReplication <Disabled | Enabled>] [-WhatIf [<SwitchParameter>]] [-WitnessDirectory <NonRootLocalLongFullPath>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a DAG named DAG1 that's configured to use a witness server of SERVER1, and a local directory of C:\DAG1. This example requires Windows Server 2012 R2 or later.
  
```
New-DatabaseAvailabilityGroup -Name DAG1 -WitnessServer SERVER1 -WitnessDirectory C:\DAG1
```

### Example 2

This example creates the DAG named DAG2 with a witness server named SERVER2. The system automatically selects an Exchange server in the same site as the DAG to use as the witness server. DAG2 is configured to use DHCP for the DAG's IP address.
  
```
New-DatabaseAvailabilityGroup -Name DAG2 -WitnessServer SERVER2 -DatabaseAvailabilityGroupIpAddresses ([System.Net.IPAddress])::Any
```

### Example 3

This example creates a DAG named DAG3. DAG3 is configured to use SERVER1 for the witness server, and a witness directory on SERVER1 of C:\DAG3. DAG3 is assigned multiple static IP addresses because the MAPI network for the DAG contains or will contain multiple subnets (10.0.0.x and 192.168.0.x).
  
```
New-DatabaseAvailabilityGroup -Name DAG3 -WitnessServer SERVER1 -WitnessDirectory C:\DAG3 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8,192.168.0.8
```

## Detailed Description
<a name="DetailedDescription"> </a>

When creating a DAG, you need to specify a valid computer name for the DAG no longer than 15 characters that's unique within the Active Directory forest. In addition, each DAG is configured with a witness server and witness directory. The witness server and its directory are used only for quorum purposes where there's an even number of members in the DAG. You don't need to create the witness directory in advance. Exchange automatically creates and secures the directory for you on the witness server. The directory shouldn't be used for any purpose other than for the DAG witness server.
  
The requirements for the witness server are as follows:
  
- The witness server can't be a member of the DAG.
    
- The witness server must be running the Windows Server 2008 operating system or later.
    
- A single server can serve as a witness for multiple DAGs; however, each DAG requires its own witness directory.
    
The following combinations of options and behaviors are available:
  
- You can specify a name for the DAG, the witness server that you want to use, and the directory you want created and shared on the witness server.
    
- You can specify a name for the DAG and the witness server that you want to use. In this scenario, the task creates the default directory on the specified witness server.
    
> [!IMPORTANT]
> If the witness server that you specify isn't an Exchange server, you need to add the Exchange Trusted Subsystem universal security group (USG) to the local Administrators group on the witness server. If the witness server is a directory server, you need to add the Exchange Trusted Subsystem USG to the Builtin\Administrators group. These security permissions are necessary to ensure that Exchange can create a directory and share on the witness server as needed. 
  
In Windows Server 2012 R2 or later, a DAG is created without a cluster administrative access point by default. In this scenario, you don't need to provide any IP addresses to the DAG. However, in all supported versions of Windows, you have the option of assigning static IP addresses to the DAG by using the _DatabaseAvailabilityGroupIpAddresses_ parameter. If you specify **Any** or **0.0.0.0**, the task attempts to use Dynamic Host Configuration Protocol (DHCP) to obtain IP addresses. If you omit this parameter or configure the parameter with a value of **None** or **255.255.255.255**, the DAG will not have a cluster administrative access point.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a unique name for the new DAG of up to 15 characters. The name you use must not conflict with any computer name in the organization. <br/> |
| _WitnessServer_ <br/> |Required  <br/> |Microsoft.Exchange.Data.FileShareWitnessServerName  <br/> |The _WitnessServer_ parameter specifies the name of a server used as a quorum witness when the DAG contains an even number of members. The specified server can't be a member of the DAG that's configured to use it. A stand-alone Mailbox server, or a Mailbox server in another DAG is recommended. <br/> |
| _ActivityState_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseAvailabilityGroup+ActivityStateOption  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DagConfiguration_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseAvailabilityGroupConfigurationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DatabaseAvailabilityGroupIpAddresses_ <br/> |Optional  <br/> |System.Net.IPAddress[]  <br/> |The _DatabaseAvailabilityGroupIpAddresses_ parameter specifies one or more static IPv4 addresses to the DAG when a Mailbox server is added to a DAG. If you specify the value `Any` or `0.0.0.0`, the system attempts to lease one or more IPv4 addresses from a DHCP server to assign to the DAG. If you don't use this parameter, or if you specify the value  `255.255.255.255` or `None`, the DAG is created without a cluster administrative access point.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FileSystem_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.DatabaseAvailabilityGroup+FileSystemMode  <br/> | The _FileSystem_ parameter specifies the file system that's used for the DAG. Valid values are: <br/>  `NTFS` <br/>  `ReFS` <br/> |
| _ThirdPartyReplication_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.ThirdPartyReplicationMode  <br/> |The _ThirdPartyReplication_ parameter specifies to configure and enable a DAG to use third-party replication that leverages the Exchange Third Party Replication API instead of the built-in continuous replication. Valid values are `Enabled` and `Disabled`. After this mode is enabled, it can't be changed.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WitnessDirectory_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.NonRootLocalLongFullPath  <br/> |The _WitnessDirectory_ parameter specifies the name of the directory on the witness server used to store file share witness data. The directory and share should be hosted on an Exchange server other than any of the Mailbox servers in the DAG. This allows an Exchange administrator to maintain operational control over the directory. The specified directory can't be used by any other DAGs, or used for any purpose other than for the witness server. If you don't use this parameter, the default witness directory is used. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

