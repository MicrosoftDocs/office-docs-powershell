---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-featureconfiguration
applicable: Security & Compliance
title: Set-FeatureConfiguration
schema: 2.0.0
---

# Set-FeatureConfiguration

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-FeatureConfiguration cmdlet to modify Discovery policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter> [-Locations <String>] [-Comment <String>]
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### AdaptiveScopeLocation
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter> [-Comment <String>]
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### TeamLocation
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter> [-Comment <String>]
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### OrganizationSegmentsDefault
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter>
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### InformationBarrierDefault
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter>
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### DisableRestrictiveRetentionParameterSet
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter>
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### RetryDistributionParameterSet
```
Set-FeatureConfiguration [-Identity] <Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter>
 [-Confirm]
 [-Mode <Microsoft.Office.CompliancePolicy.Tasks.PolicyMode>]
 [-Scenario <Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
The Identity policy specifies the Discovery policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: Identity, AdaptiveScopeLocation, TeamLocation
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Locations
{{ Fill Locations Description }}

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
The Mode parameter specifies the action and notification level of the Discovery policy. Valid values are:

- Enable: The policy is enabled for actions and notifications. This is the default value.
- Disable: The policy is disabled.
- TestWithNotifications: Simulation mode where no actions are taken, but notifications **are** sent.
- TestWithoutNotifications: Simulation mode where no actions are taken, and no notifications are sent.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.PolicyMode
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scenario
The Scenario parameter specifies the scenario for the Discovery policy. Currently, the only valid value is KnowYourData.

```yaml
Type: Microsoft.Office.CompliancePolicy.Tasks.FeatureConfigurationScenario
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScenarioConfig
{{ Fill ScenarioConfig Description }}

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
