---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-retentioncompliancepolicy
applicable: Security & Compliance
title: Get-RetentionCompliancePolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-RetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-RetentionCompliancePolicy to view existing retention policies in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-RetentionCompliancePolicy [[-Identity] <PolicyIdParameter>]
 [-DistributionDetail]
 [-ErrorPolicyOnly]
 [-ExcludeTeamsPolicy]
 [-IncludeTestModeResults]
 [-PriorityCleanup]
 [-RetentionRuleTypes]
 [-TeamsPolicyOnly]
 [<CommonParameters>]
```

## DESCRIPTION
This list describes the properties that are displayed by default.

- Name: The unique name of the policy.
- Workload: At the moment, it will show all workloads (Exchange, SharePoint, OneDriveForBusiness, Skype, ModernGroup) and it will not show the actual workload on which the policy is applied.
- Enabled: The value True means the policy is enabled.
- Mode: The current operating mode of the policy. The possible values are Test (the content is tested, but no rules are enforced), AuditAndNotify (when content matches the conditions specified by the policy, the rule is not enforced, but notification emails are sent) or Enforce (all aspects of the policy are enabled and enforced).

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-RetentionCompliancePolicy
```

This example displays summary information for all retention policies in your organization.

### Example 2
```powershell
Get-RetentionCompliancePolicy -Identity "Regulation 123 Compliance" -DistributionDetail | Format-List
```

This example displays detailed information for the policy named "Regulation 123 Compliance", including accurate values for the DistributionStatus and \*Location properties.

## PARAMETERS

### -Identity
The Identity parameter specifies the retention policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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
Accept pipeline input: True
Accept wildcard characters: False
```

### -DistributionDetail
The DistributionDetail switch returns detailed policy distribution information in the DistributionResults property. You don't need to specify a value with this switch.

If you don't use this switch, the values of the DistributionStatus and \*Location property values will be inaccurate.

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

### -ErrorPolicyOnly
The ErrorPolicyOnly switch specifies whether to show only policies that have distribution errors in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeTeamsPolicy
The ExcludeTeamsPolicy switch specifies whether to exclude Teams policies from the results. You don't need to specify a value with this switch.

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

### -IncludeTestModeResults
The IncludeTestModeResults switch specifies whether to include the status of test mode in the policy details. You don't need to specify a value with this switch.

For more information about simulation mode, see [Learn about simulation mode](https://learn.microsoft.com/purview/apply-retention-labels-automatically#learn-about-simulation-mo).

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

### -RetentionRuleTypes
The RetentionRuleTypes switch specifies whether to return the value of the RetentionRuleTypes and HasRules properties in the results. You don't need to specify a value with this switch.

To see the RetentionRuleTypes property, you need to pipe the command to a formatting cmdlet. For example, `Get-RetentionCompliancePolicy -RetentionRuleTypes | Format-Table -Auto Name,RetentionRuleTypes`. If you don't use the RetentionRuleTypes switch, the values RetentionRuleTypes appears blank and HasRules appears False.

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

### -TeamsPolicyOnly
The TeamsPolicyOnly switch specifies whether to show only Teams policies in the results. You don't need to specify a value with this switch.

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
