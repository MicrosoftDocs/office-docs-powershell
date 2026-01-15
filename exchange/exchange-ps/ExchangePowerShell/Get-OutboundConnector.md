---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-outboundconnector
schema: 2.0.0
title: Get-OutboundConnector
---

# Get-OutboundConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-OutboundConnector cmdlet to view the configuration information for an Outbound connector in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-OutboundConnector [[-Identity] <OutboundConnectorIdParameter>]
 [-IncludeTestModeConnectors <Boolean>]
 [-IsTransportRuleScoped <Boolean>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Outbound connectors send email messages to remote domains that require specific configuration options.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-OutboundConnector "Contoso Outbound Connector" | Format-List
```

This example displays detailed information about the Outbound connector named Contoso Outbound Connector.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the Outbound connector that you want to view. You can use any value that uniquely identifies the connector. For example:

- Name
- Distinguished name (DN)
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: OutboundConnectorIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeTestModeConnectors

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeTestModeConnectors parameter filters the results by Outbound connectors that are in test mode. Valid values are:

- $true: Only Outbound connectors that are in test mode are returned in the results.
- $false: All Outbound connectors that aren't in test mode are returned in the results. This value is the default.

You configure an Outbound connector in test mode by using the TestMode parameter on the New-OutboundConnector or Set-OutboundConnector cmdlets.

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

### -IsTransportRuleScoped

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IsTransportRuleScoped parameter filters the results by Outbound connectors that are scoped to transport rules (also known as mail flow rules). Valid values are:

- $true: Only Outbound connectors that are scoped to transport rules are returned in the results.
- $false: All Outbound connectors that aren't scoped to transport rules are returned in the results. This value is the default.

You scope a transport rule to a specific Outbound connector by using the RouteMessageOutboundConnector parameter on the New-TransportRule or Set-TransportRule cmdlets.

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

### -ResultSize

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
