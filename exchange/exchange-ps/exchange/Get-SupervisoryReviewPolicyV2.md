---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-supervisoryreviewpolicyv2
applicable: Exchange Online, Security & Compliance
title: Get-SupervisoryReviewPolicyV2
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-SupervisoryReviewPolicyV2

## SYNOPSIS
This cmdlet is functional only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-SupervisoryReviewPolicyV2 cmdlet to view supervisory review policies in the Microsoft Purview compliance portal. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SupervisoryReviewPolicyV2 [[-Identity] <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SupervisoryReviewPolicyV2
```

This example returns a summary list of all supervisory review policies.

### Example 2
```powershell
Get-SupervisoryReviewPolicyV2 -Identity "EU Brokers Policy" | Format-List
```

This example returns detailed information for the supervisory review policy named EU Brokers Policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the supervisory review policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
