---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-NetworkConnectionInfo

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-NetworkConnectionInfo cmdlet to view the network configuration information for all network adapters configured on the local server.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-NetworkConnectionInfo cmdlet to view the network configuration information for all network adapters configured on the local server.

## SYNTAX

```
Get-NetworkConnectionInfo [[-Identity] <ServerIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

This cmdlet retrieves the following configuration information for each network adapter configured on a computer running Microsoft Exchange Server 2010:

- Name This field displays the name of the network adapter. This name indicates the manufacturer and model of the network adapter, or the administrator-specified name of the network adapter.

- DnsServers This field displays the Domain Name System (DNS) servers used by the network adapter. The server names are separated by commas.

- IPAddresses This field displays the IP addresses used by the network adapter. The IP addresses are separated by commas.

- AdapterGuid This field displays the GUID assigned to the network adapter by Windows.

- MacAddress This field displays the media access control (MAC) address of the network adapter.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Hub server" and "Edge server" entries in the Transport Permissions topic.

!!! Exchange Server 2013

This cmdlet retrieves the following configuration information for each network adapter configured on the server:

- Name: This field displays the name of the network adapter. This name indicates the manufacturer and model of the network adapter, or the administrator-specified name of the network adapter.

- DnsServers: This field displays the DNS servers used by the network adapter. The server names are separated by commas.

- IPAddresses: This field displays the IP addresses used by the network adapter. The IP addresses are separated by commas.

- AdapterGuid: This field displays the GUID assigned to the network adapter by Windows.

- MacAddress: This field displays the media access control (MAC) address of the network adapter.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport service" and "Edge Transport server" entries in the Mail flow permissions topic.

!!! Exchange Server 2016

This cmdlet retrieves the following configuration information for each network adapter configured on the server:

- Name: This field displays the name of the network adapter. This name indicates the manufacturer and model of the network adapter, or the administrator-specified name of the network adapter.

- DnsServers: This field displays the DNS servers used by the network adapter. The server names are separated by commas.

- IPAddresses: This field displays the IP addresses used by the network adapter. The IP addresses are separated by commas.

- AdapterGuid: This field displays the GUID assigned to the network adapter by Windows.

- MacAddress: This field displays the media access control (MAC) address of the network adapter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-NetworkConnectionInfo -Identity Hub01
```

This example retrieves network configuration information for all network adapters on the server Hub01.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-NetworkConnectionInfo Mailbox01
```

This example retrieves network configuration information for all network adapters on the server named Mailbox01.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-NetworkConnectionInfo Mailbox01
```

This example retrieves network configuration information for all network adapters on the server named Mailbox01.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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
!!! Exchange Server 2010

Use the Server parameter to specify the name of the server to query when the command is run.



!!! Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the server you want to query. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use the Identity parameter, the command is run on the local server.



```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/72b8e608-1c1a-4e6f-a2db-27a812f185f3.aspx)

