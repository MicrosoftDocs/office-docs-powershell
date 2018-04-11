---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-OutboundConnector
schema: 2.0.0
monikerRange: "exchonline-ps || eop-ps"
---

# Get-OutboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-OutboundConnector cmdlet to view the configuration information for an Outbound connector in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-OutboundConnector [[-Identity] <OutboundConnectorIdParameter>]
 [-IncludeTestModeConnectors <$true | $false>] [-IsTransportRuleScoped <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
Outbound connectors send email messages to remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-OutboundConnector "Contoso Outbound Connector" | Format-List
```

This example displays detailed information about the Outbound connector named Contoso Outbound Connector.

## PARAMETERS

### -Identity
The Identity parameter specifies the Outbound connector that you want to view. You can use any value that uniquely identifies the connector. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: OutboundConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeTestModeConnectors
The IncludeTestModeConnectors parameter filters the results by Outbound connectors that are in test mode. Valid values are:

- $true: Only Outbound connectors that are in test mode are returned in the results.

- $false: All Outbound connectors that aren't in test mode are returned in the results.. This is the default value.

You configure an Outbound connector in test mode by using the TestMode parameter on the New-OutboundConnector or Set-OutboundConnector cmdlets.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsTransportRuleScoped
The IsTransportRuleScoped parameter filters the results by Outbound connectors that are scoped to transport rules (also known as mail flow rules). Valid values are:

- $true: Only Outbound connectors that are scoped to transport rules are returned in the results.

- $false: All Outbound connectors that aren't scoped to transport rules are returned in the results.. This is the default value.

You scope a transport rule to a specific Outbound connector by using the RouteMessageOutboundConnector parameter on the New-TransportRule or Set-TransportRule cmdlets.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/f9140086-9f74-4446-b1e7-b195300da122.aspx)
