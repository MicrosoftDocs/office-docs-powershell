---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dlpcompliancepolicy
applicable: Security & Compliance
title: Get-DlpCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-DlpCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpCompliancePolicy to view data loss prevention (DLP) policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpCompliancePolicy [[-Identity] <PolicyIdParameter>]
 [-DisplayName <String>]
 [-DistributionDetail]
 [-ForceValidate <Boolean>]
 [-IncludeExtendedProperties <Boolean>]
 [-IncludeRulesMetadata <Boolean>]
 [-IncludeSimulationResults <Boolean>]
 [-IRMUserRiskConfiguredAnyRule]
 [-Summary]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DlpCompliancePolicy
```

This example displays summary information for all DLP policies in the Microsoft Purview compliance portal.

### Example 2
```powershell
Get-DlpCompliancePolicy -Identity "PII Limited" | Format-List
```

This example displays detailed information for the DLP policy named "PII Limited".

### Example 3
```powershell
Get-DlpCompliancePolicy -Identity "PII Limited" -DistributionDetail | Format-List DistributionStatus
```

This example displays distribution details for a DLP policy.

### Example 4
```powershell
$dlp = Get-DlpCompliancePolicy; ForEach ($d in $dlp){Get-DlpCompliancePolicy -DistributionDetail $d.name | Format-List Name,DistributionStatus}
```

This example gets all of the DLP policies in an environment and displays the distribution status for each.

## PARAMETERS

### -Identity
The Identity parameter specifies the DLP policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID
- Id

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DisplayName
{{ Fill DisplayName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionDetail
The DistributionDetail switch returns detailed policy distribution information in the DistributionResults property. You don't need to specify a value with this switch. This is an unreliable field and is prone to errors. 

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

### -ForceValidate
{{ Fill ForceValidate Description }}

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

### -IncludeExtendedProperties
{{ Fill IncludeExtendedProperties Description }}

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

### -IncludeRulesMetadata
{{ Fill IncludeRulesMetadata Description }}

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

### -IRMUserRiskConfiguredAnyRule
{{ Fill IRMUserRiskConfiguredAnyRule Description }}

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

### -IncludeSimulationResults
{{ Fill IncludeSimulationResults Description }}

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

### -Summary
{{ Fill Summary Description }}

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
