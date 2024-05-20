---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-featureconfiguration
applicable: Security & Compliance
title: Get-FeatureConfiguration
schema: 2.0.0
---

# Get-FeatureConfiguration

## SYNOPSIS
**Note**: Currently, this cmdlet is available only in Private Preview.

This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-FeatureConfiguration cmdlet to view Discovery policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FeatureConfiguration  [-FeatureScenario] <Microsoft.Office.CompliancePolicy.PolicyConfiguration.PolicyScenario>
 [[-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Get-FeatureConfiguration -FeatureScenario KnowYourData | Format-Table Name,Mode
```

This example returns a summary list of all Discovery policies in the organization.

### Example 2
```powershell
Get-FeatureConfiguration -FeatureScenario KnowYourData -Identity "Engineering Group"
```

This example returns detailed information about the specified Discovery policy.

## PARAMETERS

### -FeatureScenario
The Feature Scenario identifies the type of the Discovery policy that you want to view. 

```yaml
Type: Microsoft.Office.CompliancePolicy.PolicyConfiguration.PolicyScenario
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity policy specifies the Discovery policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
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
