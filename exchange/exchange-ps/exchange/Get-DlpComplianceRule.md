---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dlpcompliancerule
applicable: Security & Compliance
title: Get-DlpComplianceRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-DlpComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpComplianceRule to view data loss prevention (DLP) rules in the Microsoft Purview compliance portal. DLP rules identify and protect sensitive information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpComplianceRule [[-Identity] <ComplianceRuleIdParameter>]
 [-DisplayName <String>]
 [-IncludeExecutionRuleGuids <Boolean>]
 [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DlpComplianceRule
```

This example displays summary information for all DLP rules in the Microsoft Purview compliance portal.

### Example 2
```powershell
Get-DlpComplianceRule -Identity "PII SS# Custom" | Format-List
```

This example displays detailed information for the DLP rule named "PII SS# Custom".

### Example 3
```powershell
Get-DlpComplianceRule -Policy "PII Limited"
```

This example lists all the rules included in the DLP compliance policy named "PII Limited".

## PARAMETERS

### -Identity
The Identity parameter specifies the DLP rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID
- Id

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DisplayName
{{ Fill DisplayName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeExecutionRuleGuids
{{ Fill IncludeExecutionRuleGuids Description }}

```yaml
Type: Boolean
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
The Policy parameter specifies the DLP policy that contains the rules. Using this parameter returns all rules that are assigned to the specified policy. Valid input for this parameter is any value that uniquely identifies the policy. For example

- Name
- Distinguished name (DN)
- GUID
- Id

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

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
