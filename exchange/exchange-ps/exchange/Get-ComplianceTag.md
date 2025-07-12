---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-compliancetag
applicable: Exchange Online, Security & Compliance
title: Get-ComplianceTag
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-ComplianceTag

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-ComplianceTag cmdlet to view retention labels in the Microsoft Purview compliance portal. Retention labels apply retention settings to content.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ComplianceTag [[-Identity] <ComplianceRuleIdParameter>]
 [-IncludingLabelState]
 [-PriorityCleanup]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ComplianceTag | Format-Table -Auto Name,Priority,RetentionAction,RetentionDuration,Workload
```

This example returns a summary list of all labels.

### Example 2
```powershell
Get-ComplianceTag -Identity "HR Content"
```

This example returns detailed information about the label named HR Content.

## PARAMETERS

### -Identity
The Identity parameter specifies the label that you want to view. You can use any value that uniquely identifies the tag. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ComplianceRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludingLabelState
{{ Fill IncludingLabelState Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PriorityCleanup
{{ Fill PriorityCleanup Description }}

```yaml
Type: SwitchParameter
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
