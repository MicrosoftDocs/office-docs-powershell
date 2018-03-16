---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-DatabaseAvailabilityGroupNetwork

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-DatabaseAvailabilityGroupNetwork cmdlet to display configuration and state information for a database availability group (DAG) network.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DatabaseAvailabilityGroupNetwork [[-Identity] <DatabaseAvailabilityGroupNetworkIdParameter>]
 [-DomainController <Fqdn>] [-Server <ServerIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
State information is returned for subnets and for network interfaces, as described in the following lists.

Valid states for Internet Protocol version 4 (IPv4) subnets

- Up: All defined network interfaces in the DAG are functional and available for communication. This is the expected and normal operational state.

- Down: All defined network interfaces in the DAG are nonfunctional and have lost communication with each other and all external hosts. All connected network interfaces are in a Failed or Unreachable state.

- Partitioned: One or more network interfaces in the DAG are in an Unreachable state, but at least two interfaces can communicate with each other or an external host.

- Misconfigured: All subnets for a specified DAG network must have the same values for ReplicationEnabled and IgnoreNetwork. If any one of the subnets isn't configured with the same values for these parameters as all other subnets on the network, all subnets are in a Misconfigured state.

- Unavailable: The network isn't enabled for replication or use by the DAG, or all DAG members attached to the network are inactive or unavailable.

- Unknown: The system was unable to determine the state of the subnet.

Valid states for network interfaces

- Up: The network interface is functional and can communicate with all other network interfaces. This is the expected and normal operational state.

- Failed: The network interface is unable to communicate with other network interfaces or external hosts, although other network interfaces on the local area network (LAN) are able to communicate with each other and external hosts.

- Unreachable: The system was unable to communicate with at least one network interface whose state is Up.

- Unavailable: The network interface isn't enabled for replication or use by the DAG, or the DAG member associated with this network interface is inactive or unavailable.The network interface isn't enabled for replication or use by the DAG, or the DAG member associated with this network interface is inactive or unavailable.

- Unknown: The system was unable to determine the state of the network interface.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-DatabaseAvailabilityGroupNetwork -Identity DAG1
```

This example gets basic configuration and status information for all networks in the DAG DAG1.

### Example 2
```
Get-DatabaseAvailabilityGroupNetwork -Identity DAG1 | Format-List
```

This example gets complete configuration and status information for all networks in the DAG DAG1.

### Example 3
```
Get-DatabaseAvailabilityGroupNetwork -Identity DAG2\DAGNetwork02 -Server MBX1 | Format-List
```

This example gets complete configuration and status information for the network DAGNetwork02 in the DAG DAG2 from the Mailbox server MBX1.

## PARAMETERS

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

### -Identity
The Identity parameter specifies the name of a DAG or a DAG network.

```yaml
Type: DatabaseAvailabilityGroupNetworkIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies health information for the DAG network from a specific Mailbox server in the DAG.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/43f57126-a685-4208-ac63-4e3aba4a3e00.aspx)
