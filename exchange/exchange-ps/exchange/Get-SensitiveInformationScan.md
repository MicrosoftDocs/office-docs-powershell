---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-sensitiveinformationscan
applicable: Security & Compliance
title: Get-SensitiveInformationScan
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-SensitiveInformationScan

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-SensitiveInformationScan cmdlet to view sensitive information scans.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-SensitiveInformationScan [[-Identity] <PolicyIdParameter>]
 [-IncludeImpactAssessment <Boolean>]
 [-IncludeProgressForAllActiveScans <Boolean>]
 [-IncludeScanProgress <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-SensitiveInformationScan | Format-Table Name,ParentPolicyName
```

This example returns a summary list of all sensitive information scans in the organization.

### Example 2
```powershell
Get-SensitiveInformationScan -Identity "HR Department Scan"
```

This example returns detailed information for the specified scan.

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information scan that you want to view. You can use any value that uniquely identifies the scan. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -IncludeImpactAssessment
The IncludeImpactAssessment parameter specifies whether to ???. Valid values are:

- $true: ???
- $false: ???

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeProgressForAllActiveScans
The IncludeProgressForAllActiveScans parameter specifies whether to ???. Valid values are:

- $true: ???
- $false: ???

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeScanProgress
The IncludeScanProgress parameter specifies whether to ???. Valid values are:

- $true: ???
- $false: ???

```yaml
Type: Boolean
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
