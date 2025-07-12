---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-supervisoryreviewrule
applicable: Exchange Online, Security & Compliance
title: Get-SupervisoryReviewRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-SupervisoryReviewRule

## SYNOPSIS
This cmdlet is functional only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-SupervisoryReviewRule cmdlet to modify supervisory review rules in the Microsoft Purview compliance portal. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SupervisoryReviewRule [[-Identity] <ComplianceRuleIdParameter>]
 [-IncludeRuleXml]
 [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SupervisoryReviewRule
```

This example returns a summary list of all supervisory review rules.

### Example 2
```powershell
Get-SupervisoryReviewRule -Identity "EU Brokers Rule" | Format-List
```

This example returns detailed information for the supervisory review rule named EU Brokers Rule.

### Example 3
```powershell
Get-SupervisoryReviewRule -Policy "EU Brokers Policy"
```

This example returns the rule that assigned to the supervisory review policy named EU Brokers Policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the supervisory review rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeRuleXml
{{ Fill IncludeRuleXml Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Policy
The Policy parameter filters the results by supervisory review policy that's assigned to the rule. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

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
