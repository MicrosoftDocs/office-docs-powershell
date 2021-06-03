---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-fileplanpropertyreferenceid
applicable: Security & Compliance Center
title: Get-FilePlanPropertyReferenceId
schema: 2.0.0
---

# Get-FilePlanPropertyReferenceId

## SYNOPSIS
This cmdlet is available only in the Security & Compliance Center. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc-powershell).

Use the Get-FilePlanPropertyReferenceId cmdlet to view file plan property reference IDs.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FilePlanPropertyReferenceId [[-Identity] <ComplianceRuleIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

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
The Identity parameter specifies the custom file plan property reference ID that you want to view. You can use any value that uniquely identifies the reference ID. For example:

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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
