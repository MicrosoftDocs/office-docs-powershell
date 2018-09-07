---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010
title: Set-RoutingGroupConnector
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Set-RoutingGroupConnector

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Set-RoutingGroupConnector cmdlet to modify the properties of an existing routing group connector between a Microsoft Exchange Server 2010 routing group and an Exchange Server 2003 routing group. You can also use this cmdlet to configure the maximum message size that can pass across a routing group connector.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-RoutingGroupConnector [-Identity] <RoutingGroupConnectorIdParameter> [-Confirm] [-Cost <Int32>]
 [-DomainController <Fqdn>] [-MaxMessageSize <Unlimited>] [-Name <String>]
 [-PublicFolderReferralsEnabled <$true | $false>] [-SourceTransportServers <MultiValuedProperty>]
 [-TargetTransportServers <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-RoutingGroupConnector cmdlet modifies the properties of an existing routing group connector. A routing group connector is used to send and receive messages between computers running Exchange 2010 that have the Hub Transport server role installed and Exchange 2003 bridgehead servers when the organization is running more than one version of Exchange.

The Exchange 2003 source servers specified in this cmdlet are automatically added to the ExchangeLegacyInterop universal security group. By default, the Exchange 2010 system grants Send to and Receive from permissions on the Hub Transport servers to members of this group. The source and target servers must be computers that have the Exchange 2010 Hub Transport server role installed, or Exchange 2003 bridgehead servers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-RoutingGroupConnector -Identity "Exchange Administrative Group (FYDIBOHF23SPDLT)\Exchange Routing Group (DWBGZMFD01QNBJR)\Ex2010 to Ex2003 RGC" -Cost 70 -MaxMessageSize 10MB -SourceTransportServers 2010Hub1.contoso.com -TargetTransportServers 2003BH1.contoso.com
```

This example makes the following configuration changes to the routing group connector Ex2010 to Ex2003 RGC:

- Sets the cost to 70.

- Sets a maximum message size limit of 10 MB.

- Specifies new source and target servers for the connector.

## PARAMETERS

### -Identity
The Identity parameter specifies the name or GUID of the routing group connector that you want to modify. A valid name value uses the syntax AdministrativeGroupName\RoutingGroupName\RoutingGroupConnectorName, where AdministrativeGroupName\ and RoutingGroupName\ are optional. You can use the wildcard character (*) as part of the administrative group name or routing group name.

```yaml
Type: RoutingGroupConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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
The Cost parameter specifies a cost to the connector. Transport servers use the connector cost to determine the least cost routing path from a source server to the destination server for message delivery.

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

### -MaxMessageSize
The MaxMessageSize parameter specifies the maximum size of a message that can pass through a routing group connector. The default value is unlimited. When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

Unqualified values are treated as bytes. The valid input range for this parameter is from 64KB through Int64. To remove the message size limit on a Send connector, enter a value of unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the routing group connector.

```yaml
Type: String
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

### -SourceTransportServers
The SourceTransportServers parameter specifies the host name or FQDN of the transport servers that are used to send messages to the target transport servers. You can specify more than one server by separating each entry with a comma. For more information about how to add or remove values from multivalued properties, see Modifying Multivalued Properties.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetTransportServers
The TargetTransportServers parameter specifies the host name or FQDN of the transport servers that receive messages from the source transport servers. You can specify more than one server by separating each entry with a comma. For more information about how to add or remove values from multivalued properties, see Modifying Multivalued Properties.

```yaml
Type: MultiValuedProperty
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

[Online Version](https://technet.microsoft.com/library/63311a62-c2b6-46a3-91ba-c9fa9af16573.aspx)
