---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-autosensitivitylabelpolicy
applicable: Security & Compliance
title: Get-AutoSensitivityLabelPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-AutoSensitivityLabelPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-AutoSensitivityLabelPolicy cmdlet to view auto-labeling policies in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AutoSensitivityLabelPolicy [[-Identity] <PolicyIdParameter>]
 [-DistributionDetail]
 [-ForceValidate <Boolean>]
 [-IncludeProgressFeedback]
 [-IncludeTestModeResults <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AutoSensitivityLabelPolicy -Identity "Employee Numbers" -IncludeTestModeResults $true
```

This example returns detailed information about the autosensitivity label policy named Employee Numbers. The IncludeTestModeResults parameter and value allows you to see the status of test mode.

## PARAMETERS

### -Identity
The Identity parameter specifies the auto-labeling policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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

### -DistributionDetail
The DistributionDetail switch returns detailed policy distribution information in the DistributionResults property. You don't need to specify a value with this switch.

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
The ForceValidate parameter specifies whether to include details related to the AdminUnits of users, groups, or sites in the policy. Valid values are:

- $true: Various properties in the policy include details of the AdminUnits that are associated with current set of selected users, groups, or sites.
- $false: The output doesn't contain the information. This is the default value.

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

### -IncludeProgressFeedback
IncludeProgressFeedback specifies whether to include the labeling progress of files in SharePoint Online or OneDrive for Business. You don't need to specify a value with this switch.

If you use this switch, the command shows the progress of files to be labeled, files labeled in the last 7 days, and total files labeled for enabled auto-labeling policies.

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
The IncludeTestModeResults parameter specifies whether to include the status of test mode in the policy details. Valid values are:

- $true: Include the status of test mode in the policy details.
- $false: Don't include the status of test mode in the policy details.

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
