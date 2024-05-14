---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-compliancetagstorage
applicable: Exchange Online, Security & Compliance
title: Get-ComplianceTagStorage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ComplianceTagStorage

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceTagStorage cmdlet to confirm that you've created the retention label policy by using the Enable-ComplianceTagStorage cmdlet. Retention labels apply retention settings to content.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceTagStorage [[-Identity] <PolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceTagStorage
```

This example confirms that you've created the label policy in your organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the label policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name (GUID value)
- Distinguished name (DN)
- GUID (a different value than Name)

However, there can be only one label policy in your organization.

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
