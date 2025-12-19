---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-blockedconnector
schema: 2.0.0
title: Get-BlockedConnector
---

# Get-BlockedConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-BlockedConnector cmdlet to view inbound connectors that have been detected as potentially compromised. Blocked connectors are prevented from sending email.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-BlockedConnector [-ConnectorId <Guid>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-BlockedConnector
```

This example returns a summary list of all blocked connectors.

### Example 2
```powershell
Get-BlockedConnector -ConnectorId 159eb7c4-75d7-43e2-95fe-ced44b3e0a56 | Format-List
```

This example returns detailed information for the specified blocked connector.

## PARAMETERS

### -ConnectorId

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The ConnectorId parameter specifies the blocked connector that you want to view. The value is a GUID (for example, 159eb7c4-75d7-43e2-95fe-ced44b3e0a56).

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [About CommonParameters](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
