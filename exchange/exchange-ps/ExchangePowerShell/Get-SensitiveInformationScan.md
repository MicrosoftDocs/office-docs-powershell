---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-sensitiveinformationscan
schema: 2.0.0
title: Get-SensitiveInformationScan
---

# Get-SensitiveInformationScan

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-SensitiveInformationScan cmdlet to view the properties of sensitive information scans.

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

> Applicable: Security & Compliance

The Identity parameter specifies the sensitive information scan that you want to view. You can use any value that uniquely identifies the scan. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -IncludeImpactAssessment

> Applicable: Security & Compliance

The IncludeImpactAssessment parameter specifies whether to refresh latest scan status during estimation stage. Valid values are:

- $true: Get latest estimation status
- $false: Returns last updated scan status

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeProgressForAllActiveScans

> Applicable: Security & Compliance

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeScanProgress

> Applicable: Security & Compliance

The IncludeScanProgress parameter specifies whether to refresh latest scan status during classification phase. Valid values are:

- $true: Get latest classification status
- $false: Returns last updated scan status

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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
