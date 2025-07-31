---
applicable: Security & Compliance
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchange/get-fileplanpropertyreferenceid
schema: 2.0.0
title: Get-FilePlanPropertyReferenceId
---

# Get-FilePlanPropertyReferenceId

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-FilePlanPropertyReferenceId cmdlet to view file plan property reference IDs.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FilePlanPropertyReferenceId [[-Identity] <ComplianceRuleIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-FilePlanPropertyReferenceId | Format-Table Name,Workload,Policy
```

This example returns a summary list of all file plan property reference IDs.

### Example 2
```powershell
Get-FilePlanPropertyReferenceId -Identity "Contoso-0001"
```

This example returns detailed information about the custom file plan property reference ID named Contoso-0001.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the custom file plan property reference ID that you want to view. You can use any value that uniquely identifies the reference ID. For example:

- Name
- Distinguished name (DN)
- Id

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:

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
