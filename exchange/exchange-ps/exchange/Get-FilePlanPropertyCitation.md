---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-fileplanpropertycitation
applicable: Security & Compliance Center
title: Get-FilePlanPropertyCitation
schema: 2.0.0
---

# Get-FilePlanPropertyCitation

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-FilePlanPropertyCitation cmdlet to view file plan property citations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FilePlanPropertyCitation [[-Identity] <ComplianceRuleIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance Center PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-FilePlanPropertyCitation | Format-Table Name,Workload,Policy
```

This example returns a summary list of all file plan property authorities.

### Example 2
```powershell
Get-FilePlanPropertyCitation -Identity "Contoso Citation"
```

This example returns detailed information about the custom file plan property citation named Contoso Citation.

## PARAMETERS

### -Identity
The Identity parameter specifies the custom file plan property citation that you want to view. You can use any value that uniquely identifies the citation. For example:

- Name
- Distinguished name (DN)
- Id

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance Center

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
