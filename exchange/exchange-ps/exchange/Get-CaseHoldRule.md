---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-caseholdrule
applicable: Security & Compliance
title: Get-CaseHoldRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-CaseHoldRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-CaseHoldRule to view case hold rules in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CaseHoldRule [[-Identity] <ComplianceRuleIdParameter>]
 [-Policy <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
In large environments, running this cmdlet without any parameters results in a timeout. As a workaround, you can run the following command:

`Get-ComplianceCase | foreach {Get-CaseHoldPolicy -Case $_.Identity | foreach {Get-CaseHoldRule -Policy $_.Guid}}`

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-CaseHoldRule -Identity "30 Day Rule"
```

This example displays detailed information for the case hold rule named "30 Day Rule".

## PARAMETERS

### -Identity
The Identity parameter specifies the case hold rule you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

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

### -Policy
The Policy parameter filters the case hold rule results by the associated case hold policy. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can use this parameter with the Identity parameter in the same command.

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
