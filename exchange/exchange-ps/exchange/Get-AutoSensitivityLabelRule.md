---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-autosensitivitylabelrule
applicable: Security & Compliance
title: Get-AutoSensitivityLabelRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-AutoSensitivityLabelRule

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-AutoSensitivityLabelPolicy cmdlet to view auto-labeling policy rules in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AutoSensitivityLabelRule [[-Identity] <ComplianceRuleIdParameter>]
 [-Confirm]
 [-ForceValidate]
 [-IncludeExecutionRuleGuids <Boolean>]
 [-IncludeExecutionRuleInformation <Boolean>]
 [-Policy <PolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AutoSensitivityLabelRule
```

This example displays summary information for all autolabeling rules in the Microsoft Purview compliance portal.

## PARAMETERS

### -Identity
The Identity parameter specifies the auto-labeling policy rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name
- Distinguished name (DN)
- GUID

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

### -Confirm
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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

### -IncludeExecutionRuleGuids
The IncludeExecutionRuleGuids parameter specifies whether to include the execution rule GUID in the rule details. Valid values are:

- $true: Include the execution rule GUID in the rule details.
- $false: Don't include the execution rule GUID in the rule details. This is the default value.

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

### -IncludeExecutionRuleInformation
The IncludeExecutionRuleInformation parameter specifies whether to include the execution rule information in the rule details. Valid values are:

- $true: Include the execution rule information in the rule details.
- $false: Don't include the execution rule information in the rule details. This is the default value.

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

### -Policy
The Policy parameter filters the auto-labeling policy rule results by the associated auto-labeling policy. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
