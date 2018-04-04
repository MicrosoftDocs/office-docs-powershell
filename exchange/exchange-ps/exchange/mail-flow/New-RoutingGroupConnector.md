---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010
title: New-RoutingGroupConnector
schema: 2.0.0
---

# New-RoutingGroupConnector

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-RoutingGroupConnector cmdlet to establish a connection between a Microsoft Exchange Server 2010 routing group and an Exchange Server 2003 routing group when the organization is running more than one version of Exchange.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-RoutingGroupConnector [-Name] <String> -SourceTransportServers <MultiValuedProperty>
 -TargetTransportServers <MultiValuedProperty> [-BiDirectional <$true | $false>] [-Confirm] [-Cost <Int32>]
 [-DomainController <Fqdn>] [-PublicFolderReferralsEnabled <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-RoutingGroupConnector cmdlet creates a new routing group connector between the Exchange 2010 routing group and Exchange Server 2003 routing groups. A routing group connector is used to send and receive messages between computers that have the Exchange 2010 Hub Transport server role installed and Exchange 2003 bridgehead servers. The Exchange 2003 source servers specified in this cmdlet are automatically added to the ExchangeLegacyInterop universal security group. By default, the Exchange 2010 system grants Send to and Receive from permissions on the Hub Transport servers to the members of this group.

To create the routing group connector, you must specify the source servers from the originating routing group and the target servers in the destination routing group. The routing group connector is created in the routing group of which the source server is a member. By using the Bidirectional parameter, you can specify whether the connector is used for one-way or two-way mail flow. If you specify a two-way connector, a reciprocal connector is created in the target routing group. The source and target servers must be Exchange 2010 Hub Transport servers or Exchange 2003 bridgehead servers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-RoutingGroupConnector -Name "Interop RGC" -SourceTransportServers "Hub2010.contoso.com" -TargetTransportServers "Bridgehead2003.contoso.com" -Cost 100 -Bidirectional $true
```

This example creates the routing group connector Interop RGC with the following properties:


The Exchange 2010 server is Hub2010.contoso.com.

The Exchange 2003 bridgehead server is Bridghead2003.contoso.com.

The routing group connector is a two-way connector between the Exchange 2010 routing group and the routing group associated with the specified Exchange 2003 server.

The cost is 100.

## PARAMETERS

### -Name
The Name parameter specifies the name to assign to the routing group connector.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceTransportServers
The SourceTransportServers parameter specifies the host name or fully qualified domain name (FQDN) of the transport servers used to send messages to the target transport servers. You can specify more than one server by separating each entry with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetTransportServers
The TargetTransportServers parameter specifies the host name or FQDN of the transport servers that receive messages from the source transport servers. You can specify more than one server by separating each entry with a comma.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BiDirectional
The BiDirectional parameter specifies whether this is a one-way or two-way connector. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Cost
The Cost parameter specifies a cost to the connector. Transport servers use the connector cost to determine the least cost routing path from a source server to the destination server for message delivery. The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderReferralsEnabled
The PublicFolderReferralsEnabled parameter specifies whether users can use this routing group connector to access a public folder replica located in the routing group of the target servers when an instance of that public folder isn't available in the same routing group as the user's mailbox. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/6297510c-7022-4702-83e6-a213a93d46e1.aspx)

