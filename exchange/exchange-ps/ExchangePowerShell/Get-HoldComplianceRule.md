---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-holdcompliancerule
schema: 2.0.0
title: Get-HoldComplianceRule
---

# Get-HoldComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-HoldComplianceRule to view preservation rules in the Microsoft Purview compliance portal.

**Note**: The Get-HoldComplianceRule cmdlet has been replaced by the Get-RetentionComplianceRule cmdlet. If you have scripts that use Get-HoldComplianceRule, update them to use Get-RetentionComplianceRule.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HoldComplianceRule [[-Identity] <ComplianceRuleIdParameter>]
 [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
This list describes the properties that are displayed by default in the summary information.

- Name: The unique name of the rule.
- Disabled: The enabled or disabled status of the rule.
- Mode: The current operating mode of the rule (for example, Enforce).
- Comment: An administrative comment.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-HoldComplianceRule
```

This example displays summary information for all preservation rules in your organization.

### Example 2
```powershell
Get-HoldComplianceRule -Identity "30DayRule" | Format-List
```

This example displays detailed information for the preservation rule named "30 Day Rule".

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the preservation rule you want to view. You can use any value that uniquely identifies the rule. For example:

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

### -Policy

> Applicable: Security & Compliance

The Policy parameter filters the preservation rule results by the associated preservation policy. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can use this parameter with the Identity parameter in the same command.

```yaml
Type: PolicyIdParameter
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
