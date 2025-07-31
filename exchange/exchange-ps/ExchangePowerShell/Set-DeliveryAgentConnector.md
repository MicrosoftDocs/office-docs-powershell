---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-deliveryagentconnector
schema: 2.0.0
title: Set-DeliveryAgentConnector
---

# Set-DeliveryAgentConnector

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-DeliveryAgentConnector cmdlet to configure a specific delivery agent connector in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DeliveryAgentConnector [-Identity] <DeliveryAgentConnectorIdParameter>
 [-AddressSpaces <MultiValuedProperty>]
 [-Comment <String>]
 [-Confirm]
 [-DeliveryProtocol <String>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-Force]
 [-IsScopedConnector <Boolean>]
 [-MaxConcurrentConnections <Int32>]
 [-MaxMessageSize <Unlimited>]
 [-MaxMessagesPerConnection <Int32>]
 [-Name <String>]
 [-SourceTransportServers <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Delivery agent connectors are used to route messages addressed to foreign systems that don't use the SMTP protocol. When a message is routed to a delivery agent connector, the associated delivery agent performs the content conversion and message delivery. Delivery agent connectors allow queue management of foreign connectors, thereby eliminating the need for storing messages on the file system in Drop and Pickup directories. For more information, see [Delivery agents and Delivery Agent connectors](https://learn.microsoft.com/exchange/delivery-agents-and-delivery-agent-connectors-exchange-2013-help).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DeliveryAgentConnector "Contoso X.400 Connector" -MaxMessageSize 10MB -MaxMessagesPerConnection 100 -MaxConcurrentConnections 10
```

This example configures restrictions on the delivery agent connector Contoso X.400 Connector. It makes the following configuration changes:

Sets the maximum message size allowed through the connector to 10 MB.

Sets the maximum number of messages allowed per connection to 100.

Sets the maximum concurrent connections to 10.

### Example 2
```powershell
$ConnectorConfig = Get-DeliveryAgentConnector "Contoso X.400 Connector"

$ConnectorConfig.AddressSpaces += "X400:c=US;p=Fabrikam;a=Contoso;o=Sales;1"

$ConnectorConfig.SourceTransportServers += Hub04; Set-DeliveryAgentConnector "Contoso X.400 Connector" -AddressSpaces $ConnectorConfig.AddressSpaces -SourceTransportServers $ConnectorConfig.SourceTransportServers
```

This example uses the temporary variable $ConnectorConfig to add the address space c=US;p=Fabrikam;a=Contoso;o=Sales to the delivery agent connector Contoso X.400 Connector and also adds the server Hub04 to the list of servers that host the connector.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the GUID or name of the delivery agent connector.

```yaml
Type: DeliveryAgentConnectorIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddressSpaces

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AddressSpaces parameter specifies the domain names that the delivery agent connector is responsible for. The complete syntax for entering an address space is: `AddressSpaceType:AddressSpace;AddressSpaceCost`. Enclose each address space in quotation marks (").

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
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

### -DeliveryProtocol

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DeliveryProtocol parameter specifies the communication protocol that determines which delivery agents are responsible for servicing the connector.

```yaml
Type: String
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

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Enabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Enabled parameter specifies whether the delivery agent connector is enabled.

The default value is $true.

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

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -IsScopedConnector

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IsScopedConnector parameter specifies the availability of the connector to other Mailbox servers. If the value of this parameter is $false, the connector can be used by all Mailbox servers in your organization. If the value of this parameter is $true, the connector can only be used by Mailbox servers in the same Active Directory site.

The default value is $false.

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

### -MaxConcurrentConnections

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxConcurrentConnections parameter specifies the maximum number of concurrent connections this connector accepts from a specific IP address.

The default value is 5.

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

### -MaxMessageSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxMessageSize parameter specifies the maximum size of a message that's allowed to pass through this connector. When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are treated as bytes. The valid input range for this parameter is from 65536 through 2147483647 bytes.

The default value is unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxMessagesPerConnection

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MaxMessagesPerConnection parameter specifies the maximum number of messages this connector accepts per connection. The connector terminates the connection after this limit is reached and the sending server has to initiate a new connection to send more messages.

The default value is 20.

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

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Name parameter specifies the name of this delivery agent connector. The value for the Name parameter can't exceed 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceTransportServers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SourceTransportServers parameter specifies the list of Mailbox servers that host this connector. You can specify more than one server by separating their names with commas.

By default, only the local server on which the command is executed is added to this parameter.

```yaml
Type: MultiValuedProperty
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
