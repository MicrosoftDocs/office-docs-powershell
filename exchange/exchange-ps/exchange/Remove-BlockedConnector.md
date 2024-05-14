---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-blockedconnector
applicable: Exchange Online, Exchange Online Protection
title: Remove-BlockedConnector
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-BlockedConnector

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-BlockedConnector cmdlet to unblock inbound connectors that have been detected as potentially compromised. Blocked connectors are prevented from sending email.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-BlockedConnector -ConnectorId <Guid> [-Reason <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-BlockedConnector -ConnectorId 159eb7c4-75d7-43e2-95fe-ced44b3e0a56
```

This unblocks the specified blocked connector.

## PARAMETERS

### -ConnectorId
The ConnectorId parameter specifies the blocked connector that you want to unblock. The value is a GUID (for example, 159eb7c4-75d7-43e2-95fe-ced44b3e0a56). You can find this value from the output of the Get-BlockedConnector command.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reason
The Reason parameter specifies comments about why you're unblocking the blocked connector. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [About CommonParameters](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
