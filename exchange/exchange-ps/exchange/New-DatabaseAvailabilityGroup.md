---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-DatabaseAvailabilityGroup

## SYNOPSIS
!!! Exchange Server 2010

Use the New-DatabaseAvailabilityGroup cmdlet to create a database availability group (DAG). A DAG is a set of Mailbox servers that provide automatic database-level recovery from database, server, and network failures. When a Mailbox server is added to a DAG, it works with the other servers in the DAG to provide automatic, database-level recovery from failures.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the New-DatabaseAvailabilityGroup cmdlet to create a database availability group (DAG).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DatabaseAvailabilityGroup [-Name] <String> [-Confirm] [-DatabaseAvailabilityGroupIpAddresses <IPAddress[]>]
 [-DomainController <Fqdn>] [-ThirdPartyReplication <Disabled | Enabled>] [-WhatIf]
 [-WitnessDirectory <NonRootLocalLongFullPath>] [-WitnessServer <FileShareWitnessServerName>]
 [-DagConfiguration <DatabaseAvailabilityGroupConfigurationIdParameter>]
 [-ActivityState <NewDeployment | DotBuildUpgrade | Decom | PendingDotBuildUpgrade | DecomRemoveMailboxes | DecomNoUpgrades | Discovered | Allocated | ReadyForAllocation | Spare>]
 [-FileSystem <NTFS | ReFS>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

When creating a DAG, you need to specify a valid computer name for the DAG no longer than 15 characters that is unique within the Active Directory forest. In addition, each DAG is configured with a witness server and witness directory. The witness server and its directory are used only for quorum purposes where there's an even number of members in the DAG. You don't need to create the witness directory in advance. Exchange will automatically create and secure the directory for you on the witness server. The directory shouldn't be used for any purpose other than for the DAG witness server.

The requirements for the witness server are as follows:

- The witness server can't be a member of the DAG.

- The witness server must be in the same Active Directory forest as the DAG.

- The witness server must be running the Windows Server 2008 R2, Windows Server 2008, Windows Server 2003 R2, or Windows Server 2003 operating system.

- A single server can serve as a witness for multiple DAGs; however, each DAG requires its own witness directory.

We recommend that you use a Hub Transport server running on Microsoft Exchange Server 2010 in the Active Directory site containing the DAG. This allows the witness server and directory to remain under the control of an Exchange administrator.

The following combinations of options and behaviors are available:

- You can specify only a name for the DAG. In this scenario, the task will search for a Hub Transport server that doesn't have the Mailbox server role installed, and it will automatically create the default directory and share on that server and use that Hub Transport server as the witness server.

- You can specify a name for the DAG, the witness server that you want to use, and the directory you want created and shared on the witness server.

- You can specify a name for the DAG and the witness server that you want to use. In this scenario, the task will create the default directory on the specified witness server.

- You can specify a name for the DAG and specify the directory you want created and shared on the witness server. In this scenario, the task will search for a Hub Transport server in the local Active Directory site that doesn't have the Mailbox server role installed, and it will automatically create the specified directory on that server, share the directory, and use that Hub Transport server as the witness server.

If the witness server you specify isn't an Exchange 2010 server, you must add the Exchange Trusted Subsystem USG to the local Administrators group on the witness server. If the witness server is a directory server, you must add the Exchange Trusted Subsystem USG to the Builtin\\Administrators group. These security permissions are necessary to ensure that Exchange can create a directory and share on the witness server as needed.

In addition to providing a name for the DAG, one or more IP addresses must also be assigned to the DAG. You can assign static IP addresses to the DAG by using the DatabaseAvailabilityGroupIpAddresses parameter. If you omit this parameter, the task will attempt to use Dynamic Host Configuration Protocol (DHCP) to obtain the necessary IP addresses.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the"Database availability groups" entry in the High Availability Permissions topic.

!!! Exchange Server 2013

When creating a DAG, you need to specify a valid computer name for the DAG no longer than 15 characters that's unique within the Active Directory forest. In addition, each DAG is configured with a witness server and witness directory. The witness server and its directory are used only for quorum purposes where there's an even number of members in the DAG. You don't need to create the witness directory in advance. Exchange automatically creates and secures the directory for you on the witness server. The directory shouldn't be used for any purpose other than for the DAG witness server.

The requirements for the witness server are as follows:

- The witness server can't be a member of the DAG.

- The witness server must be in the same Active Directory forest as the DAG.

- The witness server must be running the Windows Server 2012 R2, Windows Server 2012, Windows Server 2008 R2, Windows Server 2008, Windows Server 2003 R2, or Windows Server 2003 operating system.

- A single server can serve as a witness for multiple DAGs; however, each DAG requires its own witness directory.

We recommend that you use a Client Access server running on Microsoft Exchange Server 2013 in the Active Directory site containing the DAG. This allows the witness server and directory to remain under the control of an Exchange administrator.

The following combinations of options and behaviors are available:

- You can specify only a name for the DAG. In this scenario, the task searches for a Client Access server in the local Active Directory site that doesn't have the Mailbox server role installed, and it automatically creates the default directory and share on that server and uses that Client Access server as the witness server.

- You can specify a name for the DAG, the witness server that you want to use, and the directory you want created and shared on the witness server.

- You can specify a name for the DAG and the witness server that you want to use. In this scenario, the task creates the default directory on the specified witness server.

- You can specify a name for the DAG and specify the directory you want created and shared on the witness server. In this scenario, the task searches for a Client Access server in the local Active Directory site that doesn't have the Mailbox server role installed, and it automatically creates the specified directory on that server, shares the directory, and uses that Client Access server as the witness server.

If the witness server you specify isn't an Exchange 2013 server, you must add the Exchange Trusted Subsystem universal security group (USG) to the local Administrators group on the witness server. If the witness server is a directory server, you must add the Exchange Trusted Subsystem USG to the Builtin\\Administrators group. These security permissions are necessary to ensure that Exchange can create a directory and share on the witness server as needed.

In addition to providing a name for the DAG, one or more IP addresses must also be assigned to the DAG, unless you are creating a DAG without a cluster administrative access point, which can be done only with DAG members running Windows Server 2012 R2. You can assign static IP addresses to the DAG by using the DatabaseAvailabilityGroupIpAddresses parameter. If you omit this parameter or configure the parameter with a value of 0.0.0.0, the task attempts to use Dynamic Host Configuration Protocol (DHCP) to obtain the necessary IP addresses. If you configure the parameter with a value of 255.255.255.255, the task attempts to create a DAG without a cluster administrative access point.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Database availability groups" entry in the High availability and site resilience permissions topic.

!!! Exchange Server 2016

When creating a DAG, you need to specify a valid computer name for the DAG no longer than 15 characters that's unique within the Active Directory forest. In addition, each DAG is configured with a witness server and witness directory. The witness server and its directory are used only for quorum purposes where there's an even number of members in the DAG. You don't need to create the witness directory in advance. Exchange automatically creates and secures the directory for you on the witness server. The directory shouldn't be used for any purpose other than for the DAG witness server.

The requirements for the witness server are as follows:

- The witness server can't be a member of the DAG.

- The witness server must be running the Windows Server 2008 operating system or later.

- A single server can serve as a witness for multiple DAGs; however, each DAG requires its own witness directory.

The following combinations of options and behaviors are available:

- You can specify a name for the DAG, the witness server that you want to use, and the directory you want created and shared on the witness server.

- You can specify a name for the DAG and the witness server that you want to use. In this scenario, the task creates the default directory on the specified witness server.

If the witness server that you specify isn't an Exchange server, you need to add the Exchange Trusted Subsystem universal security group (USG) to the local Administrators group on the witness server. If the witness server is a directory server, you need to add the Exchange Trusted Subsystem USG to the Builtin\\Administrators group. These security permissions are necessary to ensure that Exchange can create a directory and share on the witness server as needed.

In Windows Server 2012 R2 or later, a DAG is created without a cluster administrative access point by default. In this scenario, you don't need to provide any IP addresses to the DAG. However, in all supported versions of Windows, you have the option of assigning static IP addresses to the DAG by using the DatabaseAvailabilityGroupIpAddresses parameter. If you specify Any or 0.0.0.0, the task attempts to use Dynamic Host Configuration Protocol (DHCP) to obtain IP addresses. If you omit this parameter or configure the parameter with a value of None or 255.255.255.255, the DAG will not have a cluster administrative access point.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-DatabaseAvailabilityGroup -Name DAG1 -WitnessServer EXHUB1 -WitnessDirectory C:\DAG1
```

This example creates a new DAG named DAG1 that's configured to use a witness server of EXHUB1, and a local directory of C:\\DAG1. DAG1 is also configured to use DHCP for the DAG's IP addresses.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-DatabaseAvailabilityGroup -Name DAG1 -WitnessServer CAS1 -WitnessDirectory C:\DAG1
```

This example creates a DAG named DAG1 that's configured to use a witness server of CAS1, and a local directory of C:\\DAG1. DAG1 is also configured to use DHCP for the DAG's IP addresses.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-DatabaseAvailabilityGroup -Name DAG1 -WitnessServer SERVER1 -WitnessDirectory C:\DAG1
```

This example creates a DAG named DAG1 that's configured to use a witness server of SERVER1, and a local directory of C:\\DAG1. This example requires Windows Server 2012 R2 or later.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-DatabaseAvailabilityGroup -Name DAG2 -DatabaseAvailabilityGroupIPAddresses 10.0.0.8
```

This example creates a new DAG named DAG2. The system will automatically select a Hub Transport server without the Mailbox server role in the same site as the DAG to use as the witness server. DAG2 is assigned a single static IP address because all members are on the same subnet.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-DatabaseAvailabilityGroup -Name DAG2 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8
```

This example creates the DAG named DAG2. The system automatically selects a Client Access server without the Mailbox server role in the same site as the DAG to use as the witness server. DAG2 is assigned a single static IP address because the MAPI network for DAG2 contains or will contain a single subnet (10.0.0.x).

### Example 2 -------------------------- (Exchange Server 2016)
```
New-DatabaseAvailabilityGroup -Name DAG2 -WitnessServer SERVER2 -DatabaseAvailabilityGroupIpAddresses ([])::Any
```

This example creates the DAG named DAG2 with a witness server named SERVER2. The system automatically selects an Exchange server in the same site as the DAG to use as the witness server. DAG2 is configured to use DHCP for the DAG's IP address.

### Example 3 -------------------------- (Exchange Server 2010)
```
New-DatabaseAvailabilityGroup -Name DAG3 -WitnessServer EXHUB2 -WitnessDirectory C:\DAG3 -DatabaseAvailabilityGroupIPAddresses 10.0.0.8,192.168.0.8
```

This example creates a new DAG named DAG3. DAG3 is configured to use a witness server of EXHUB2, and a local directory of C:\\DAG3. DAG3 is assigned multiple static IP addresses because its members are or will be on different subnets.

### Example 3 -------------------------- (Exchange Server 2013)
```
New-DatabaseAvailabilityGroup -Name DAG3 -WitnessServer CAS1 -WitnessDirectory C:\DAG3 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8,192.168.0.8
```

This example creates a DAG named DAG3. DAG3 is configured to use CAS1 for the witness server, and a witness directory on CAS1 of C:\\DAG3. DAG3 is assigned multiple static IP addresses because the MAPI network for the DAG contains or will contain multiple subnets (10.0.0.x and 192.168.0.x).

### Example 3 -------------------------- (Exchange Server 2016)
```
New-DatabaseAvailabilityGroup -Name DAG3 -WitnessServer SERVER1 -WitnessDirectory C:\DAG3 -DatabaseAvailabilityGroupIpAddresses 10.0.0.8,192.168.0.8
```

This example creates a DAG named DAG3. DAG3 is configured to use SERVER1 for the witness server, and a witness directory on SERVER1 of C:\\DAG3. DAG3 is assigned multiple static IP addresses because the MAPI network for the DAG contains or will contain multiple subnets (10.0.0.x and 192.168.0.x).

### Example 4 -------------------------- (Exchange Server 2010)
```
New-DatabaseAvailabilityGroup -Name DAG4
```

This example creates a new DAG named DAG4 that is configured to use DHCP. In addition, the witness server will be automatically selected by the system and the default witness directory will be created.

### Example 4 -------------------------- (Exchange Server 2013)
```
New-DatabaseAvailabilityGroup -Name DAG4
```

This example creates the DAG named DAG4 configured to use DHCP. In addition, the witness server is automatically selected by the system and the default witness directory is created.

### Example 5 -------------------------- (Exchange Server 2013)
```
New-DatabaseAvailabilityGroup -Name DAG5 -WitnessServer CAS1 -WitnessDirectory C:\DAG5 -DatabaseAvailabilityGroupIpAddresses ([System.Net.IPAddress])::None
```

This example creates the DAG named DAG5 without a cluster administrative access point (Windows Server 2012 R2 and later DAG members only). DAG5 is configured to use CAS1 for the witness server, and a witness directory on CAS1 of C:\\DAG5.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the new DAG of up to 15 characters. The name you use must not conflict with any computer name in the organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseAvailabilityGroupIpAddresses
!!! Exchange Server 2010

The DatabaseAvailabilityGroupIpAddresses parameter specifies one or more static IP addresses to the DAG when a Mailbox server is added to a DAG. If you omit the DatabaseAvailabilityGroupIpAddresses parameter when creating a DAG, the system attempts to lease one or more IP addresses from a DHCP server in your organization to assign to the DAG. Setting the DatabaseAvailabilityGroupIpAddresses parameter to a value of 0.0.0.0 configures the DAG to use DHCP.



!!! Exchange Server 2013

The DatabaseAvailabilityGroupIpAddresses parameter specifies one or more static IPv4 addresses to the DAG when a Mailbox server is added to a DAG. If you omit the DatabaseAvailabilityGroupIpAddresses parameter when creating a DAG, the system attempts to lease one or more IPv4 addresses from a DHCP server in your organization to assign to the DAG. Setting the DatabaseAvailabilityGroupIpAddresses parameter to a value of 0.0.0.0 also configures the DAG to use DHCP. Setting the DatabaseAvailabilityGroupIpAddresses parameter to a value of 255.255.255.255 creates a DAG without a cluster administrative access point.



!!! Exchange Server 2016

The DatabaseAvailabilityGroupIpAddresses parameter specifies one or more static IPv4 addresses to the DAG when a Mailbox server is added to a DAG. If you specify the value Any or 0.0.0.0, the system attempts to lease one or more IPv4 addresses from a DHCP server to assign to the DAG. If you don't use this parameter, or if you specify the value 255.255.255.255 or None, the DAG is created without a cluster administrative access point.



```yaml
Type: IPAddress[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThirdPartyReplication
!!! Exchange Server 2010

The ThirdPartyReplication parameter is used to configure and enable a DAG to use third-party replication that leverages the Exchange Third Party Replication API instead of the built-in continuous replication. After this mode is enabled, it can't be changed.



!!! Exchange Server 2013

The ThirdPartyReplication parameter specifies to configure and enable a DAG to use third-party replication that leverages the Exchange Third Party Replication API instead of the built-in continuous replication. After this mode is enabled, it can't be changed.



!!! Exchange Server 2016

The ThirdPartyReplication parameter specifies to configure and enable a DAG to use third-party replication that leverages the Exchange Third Party Replication API instead of the built-in continuous replication. Valid values are Enabled and Disabled. After this mode is enabled, it can't be changed.



```yaml
Type: Disabled | Enabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WitnessDirectory
!!! Exchange Server 2010

The WitnessDirectory parameter specifies the name of the directory on the witness server that's used to store file share witness data. The directory and share should be hosted on an Exchange server other than any of the Mailbox servers that are in the DAG. This allows an Exchange administrator to maintain operational control over the directory. The specified directory must not be in use by any other DAGs or used for any purpose other than for the witness server. If you omit this option, the default witness directory will be used.



!!! Exchange Server 2013

The WitnessDirectory parameter specifies the name of the directory on the witness server used to store file share witness data. The directory and share should be hosted on an Exchange server other than any of the Mailbox servers in the DAG. This allows an Exchange administrator to maintain operational control over the directory. The specified directory must not be in use by any other DAGs or used for any purpose other than for the witness server. If you omit this option, the default witness directory is used.



!!! Exchange Server 2016

The WitnessDirectory parameter specifies the name of the directory on the witness server used to store file share witness data. The directory and share should be hosted on an Exchange server other than any of the Mailbox servers in the DAG. This allows an Exchange administrator to maintain operational control over the directory. The specified directory can't be used by any other DAGs, or used for any purpose other than for the witness server. If you don't use this parameter, the default witness directory is used.



```yaml
Type: NonRootLocalLongFullPath
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WitnessServer
!!! Exchange Server 2010

The WitnessServer parameter specifies the name of a server that will be used as a quorum witness when there is an even number of members in the DAG. The selected server must not be a member of the DAG that's configured to use it. If you omit the WitnessServer parameter, the task will try to automatically select a Hub Transport server without the Mailbox server role in the same Active Directory site as the DAG to use as the witness server.



!!! Exchange Server 2013

The WitnessServer parameter specifies the name of a server used as a quorum witness when the DAG contains an even number of members. The selected server must not be a member of the DAG that's configured to use it. If you omit the WitnessServer parameter, the task tries to automatically select a Client Access server without the Mailbox server role in the same Active Directory site as the DAG to use as the witness server.



!!! Exchange Server 2016

The WitnessServer parameter specifies the name of a server used as a quorum witness when the DAG contains an even number of members. The specified server can't be a member of the DAG that's configured to use it. A stand-alone Mailbox server, or a Mailbox server in another DAG is recommended.



```yaml
Type: FileShareWitnessServerName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2016

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
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/c0cd98a9-eaaa-4cfb-845d-213e5d606d3b.aspx)

