---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010
title: Get-RoutingGroupConnector
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Get-RoutingGroupConnector

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-RoutingGroupConnector cmdlet to view the configuration details of the routing group connectors in a Microsoft Exchange Server 2010 organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RoutingGroupConnector [[-Identity] <RoutingGroupConnectorIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-RoutingGroupConnector cmdlet displays the configuration details of routing group connectors that exist when an organization is running Exchange 2010 and Exchange Server 2003. A routing group connector is used to send and receive messages between Exchange 2010 Hub Transport servers and Exchange 2003 bridgehead servers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-RoutingGroupConnector -Identity "Exchange Administrative Group (FYDIBOHF23SPDLT)\Exchange Routing Group (DWBGZMFD01QNBJR)\Ex2010 to Ex2003 RGC"
```

This example displays detailed configuration information for the routing group connector Ex2010 to Ex2003 RGC.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name or GUID of the routing group connector that you want to view. A valid name value uses the syntax AdministrativeGroupName\RoutingGroupName\RoutingGroupConnectorName, where AdministrativeGroupName\ and RoutingGroupName\ are optional. You can use the wildcard character (`*`) as part of the administrative group name or routing group name.

```yaml
Type: RoutingGroupConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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

[Online Version](https://technet.microsoft.com/library/2d68242a-8aaf-43c8-a1ae-eab561391a72.aspx)
