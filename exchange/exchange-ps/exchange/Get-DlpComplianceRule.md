---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-dlpcompliancerule
applicable: Office 365 Security & Compliance Center
title: Get-DlpComplianceRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-DlpComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpComplianceRule to view Data Loss Prevention (DLP) rules in the Security & Compliance Center. DLP rules identify and protect sensitive information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpComplianceRule [[-Identity] <ComplianceRuleIdParameter>]
 [-IncludeExecutionRuleGuids Boolean]
 [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
Get-DlpComplianceRule
```

This example displays summary information for all DLP rules in the Security & Compliance Center.

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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeExecutionRuleGuids
{{ Fill IncludeExecutionRuleGuids Description }}

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

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
