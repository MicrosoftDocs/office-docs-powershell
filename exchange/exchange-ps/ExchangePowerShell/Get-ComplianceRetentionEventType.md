---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-complianceretentioneventtype
schema: 2.0.0
title: Get-ComplianceRetentionEventType
---

# Get-ComplianceRetentionEventType

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceRetentionEventType cmdlet to view retention event types in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceRetentionEventType [-Identity <ComplianceRuleIdParameter>]
 [-LoadTag]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceRetentionEventType | Format-Table Name,Priority
```

This example returns a summary list of all retention event types

### Example 2
```powershell
Get-ComplianceRetentionEventType -Identity "Fabrikam Project" -LoadTag
```

This example returns detailed information for the retention event type named Fabrikam Project, including the associated compliance tags.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the retention event type that you want to view. You can use any value that uniquely identifies the retention event type. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LoadTag

> Applicable: Security & Compliance

The LoadTag switch specifies whether to show the compliance tags that are associated with the retention event types. You don't need to specify a value with this switch.

If you don't use this switch, the ComplianceTag property always appears empty in the results.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
