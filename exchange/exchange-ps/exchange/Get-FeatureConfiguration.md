---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-featureconfiguration
applicable: Security & Compliance
title: Get-FeatureConfiguration
schema: 2.0.0
---

# Get-FeatureConfiguration

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

> [!NOTE]
> This cmdlet is currently available in Public Preview, isn't available in all organizations, and is subject to change.

Use the Get-FeatureConfiguration cmdlet to view Microsoft Purview feature configurations within your organization, including:

- Collection policies.
- Endpoint DLP trust container.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-FeatureConfiguration [[-Identity] <PolicyIdParameter>] [-FeatureScenario] <PolicyScenario>
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

This example returns a summary list of all collection policies in the organization.

### Example 2
```powershell
Get-FeatureConfiguration -FeatureScenario KnowYourData -Identity "Engineering Group"
```

This example returns detailed information about the specified collection policy.

## PARAMETERS

### -Identity
The Identity policy specifies the feature configuration that you want to view. You can use any value that uniquely identifies the configuration. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -FeatureScenario
The FeatureScenario parameter specifies the scenario for the feature configuration. Currently, the only valid values are:
- `KnowYourData` for collection policies
- `TrustContainer` for Endpoint DLP trust container

```yaml
Type: PolicyScenario
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
