---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
https://learn.microsoft.com/powershell/module/exchange/get-fileplanpropertycategory
applicable: Security & Compliance
title: Get-FilePlanPropertyCategory
schema: 2.0.0
---

# Get-FilePlanPropertyCategory

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Fet-FilePlanPropertyCategory cmdlet to view file plan property categories.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FilePlanPropertyCategory [[-Identity] <ComplianceRuleIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-FilePlanPropertyCategory | Format-Table Name,Workload,Policy
```

This example returns a summary list of all file plan property authorities.

### Example 2
```powershell
Get-FilePlanPropertyCategory -Identity "Contoso Category"
```

This example returns detailed information about the custom file plan property category named Contoso Category.

## PARAMETERS

### -Identity
The Identity parameter specifies the custom file plan property category that you want to view. You can use any value that uniquely identifies the category. For example:

- Name
- Distinguished name (DN)
- Id

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
