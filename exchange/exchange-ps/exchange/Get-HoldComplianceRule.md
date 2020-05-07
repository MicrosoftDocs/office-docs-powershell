---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/policy-and-compliance-retention/get-holdcompliancerule
applicable: Office 365 Security & Compliance Center
title: Get-HoldComplianceRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-HoldComplianceRule

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-HoldComplianceRule to view preservation rules in the Security & Compliance Center.

Note: The Get-HoldComplianceRule cmdlet has been replaced by the Get-RetentionComplianceRule cmdlet. If you have scripts that use Get-HoldComplianceRule, update them to use Get-RetentionComplianceRule.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-HoldComplianceRule [[-Identity] <ComplianceRuleIdParameter>] [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
This list describes the properties that are displayed by default in the summary information.

- Name: The unique name of the rule.

- Disabled: The enabled or disabled status of the rule.

- Mode: The current operating mode of the rule (for example, Enforce).

- Comment: An administrative comment.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

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
The Identity parameter specifies the preservation rule you want to view. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Policy
The Policy parameter filters the preservation rule results by the associated preservation policy. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

You can use this parameter with the Identity parameter in the same command.

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
