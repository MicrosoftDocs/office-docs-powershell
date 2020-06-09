---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-retentioncompliancerule
applicable: Office 365 Security & Compliance Center
title: Get-RetentionComplianceRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-RetentionComplianceRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-RetentionComplianceRule to view retention rules in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-RetentionComplianceRule [[-Identity] <ComplianceRuleIdParameter>] [-Policy <PolicyIdParameter>]
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
Get-RetentionComplianceRule
```

This example displays summary information for all retention rules in your organization.

### Example 2
```powershell
Get-RetentionComplianceRule -Identity "30 Day Rule" | Format-List
```

This example displays detailed information for the retention rule named "30 Day Rule".

## PARAMETERS

### -Identity
The Identity parameter specifies the retention rule you want to view. You can use any value that uniquely identifies the rule. For example:

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
The Policy parameter filters the retention rule results by the associated retention policy. You can use any value that uniquely identifies the policy. For example:

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
