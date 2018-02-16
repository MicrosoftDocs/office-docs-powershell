---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-ReceiveConnector

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ReceiveConnector cmdlet to view the configuration information for a Receive connector on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-ReceiveConnector cmdlet to view the configuration information for a Receive connector.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-ReceiveConnector cmdlet to view Receive connectors on Mailbox servers and Edge Transport servers. Receive connectors listen for inbound SMTP connections on the Exchange server.

## SYNTAX

### Set1
```
Get-ReceiveConnector [[-Identity] <ReceiveConnectorIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Set2
```
Get-ReceiveConnector [-DomainController <Fqdn>] [-Server <ServerIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Receive connectors" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Receive connectors" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You can view Receive connectors on Mailbox servers and Edge Transport servers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ReceiveConnector "Receive Connector for Contoso.com" | Format-List
```

This example displays detailed configuration information for the Receive connector Receive Connector for Contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ReceiveConnector "Receive Connector for Contoso.com" | Format-List
```

This example displays detailed configuration information for the Receive Connector for Contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ReceiveConnector -Server Exchange01
```

This example returns a summary list of all Receive connectors on the server named Exchange01.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-ReceiveConnector -Server Hub1
```

This example lists all the Receive connectors configured on server Hub1.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-ReceiveConnector -Server Hub1
```

This example lists all the Receive connectors on Hub1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ReceiveConnector -Identity "Receive Connector for Contoso.com" | Format-List
```

This example displays detailed information for the Receive connector named Receive Connector for Contoso.com on the local server.

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

The Identity parameter specifies the GUID or connector name that represents a specific Receive connector. You can also include the server name using the format ServerName\\ConnectorName.

You can omit the parameter label so that only the connector name or GUID is supplied.



!!! Exchange Server 2013

Specifies the GUID or connector name that represents a specific Receive connector. You can also include the server name using the format ServerName\\ConnectorName.

You can omit the parameter label so that only the connector name or GUID is supplied.



!!! Exchange Server 2016

The Identity parameter specifies the Receive connector that you want to view. You can use any value that uniquely identifies the Receive connector. For example:

- Name

- Distinguished name (DN)

- GUID

- \<ServerName\>\\\<Name\>

You can't use this parameter with the Server parameter.



```yaml
Type: ReceiveConnectorIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
!!! Exchange Server 2010

The Server parameter specifies the name of the server to query when the command is run. Only the Receive connectors configured on the server that you specify are displayed.



!!! Exchange Server 2013

Specifies the name of the server to query when the command is run. Only Receive connectors configured on the server you specify are displayed.



!!! Exchange Server 2016

The Server parameter filters the results by the specified Mailbox server or Edge Transport server. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

You can't use this parameter with the Identity parameter.



```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
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

[Online Version](https://technet.microsoft.com/library/6801411c-6faf-449f-aa8b-f4c105791d89.aspx)

