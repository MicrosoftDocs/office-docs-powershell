---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-configanalyzerpolicyrecommendation
schema: 2.0.0
title: Get-ConfigAnalyzerPolicyRecommendation
---

# Get-ConfigAnalyzerPolicyRecommendation

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ConfigAnalyzerPolicyRecommendation cmdlet to compare the settings in your existing security policies to the settings that are used in the Standard or Strict preset security policies. Settings that are below the recommend value are returned in the results.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ConfigAnalyzerPolicyRecommendation -RecommendedPolicyType <RecommendedPolicyType>
 [[-Identity] <ConfigAnalyzerPolicyRecommendationIdParameter>]
 [-IsAppliedToDisabled]
 [<CommonParameters>]
```

## DESCRIPTION
For information about the policies and their recommended Standard and Strict values, see [Recommended settings for EOP and Microsoft Defender for Office 365 security](https://learn.microsoft.com/defender-office-365/recommended-settings-for-eop-and-office365).

The output of this cmdlet only returns settings that fall below the value that you've specified as a baseline (Standard or Strict).

The output contains the following information for each setting:

- PolicyGroup: The type of policy. The value is Anti-Spam, Anti-Phishing, Anti-Malware, ATP Safe Links, or ATP Safe Attachments
- SettingName: The name of the setting in the policy.
- SettingNameDescription: A description of the setting.
- Policy: The name of the policy.
- AppliedTo: The number of users or domains that the policy applies to. If the policy isn't applied to anyone (for example, it's disabled), this value is blank.
- CurrentConfiguration: The current value of the setting.
- LastModified: When the policy was last modified.
- Recommendation: The recommended Standard or Strict value for the setting.
- SettingType: For example, Boolean, String, or Integer.

If a setting is configured at or better than the Standard or Strict protection profile that you're comparing to, those settings/policies aren't returned in the results

This cmdlet returns the following output for each setting in each policy that falls below the recommended value.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ConfigAnalyzerPolicyRecommendation -RecommendedPolicyType Strict
```

This example runs a comparison using the Strict preset security policy settings as a baseline.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: ConfigAnalyzerPolicyRecommendationIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RecommendedPolicyType

> Applicable: Exchange Online

The RecommendedPolicyType parameter specifies the preset security policy that you want to use as a baseline. Valid values are:

- Standard
- Strict

```yaml
Type: RecommendedPolicyType
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAppliedToDisabled

> Applicable: Exchange Online

The IsAppliedToDisabled switch filters the results by policies that aren't applied to anyone (the AppliedTo property is blank). You don't need to specify a value with this switch.

If you don't use this switch, the results include policies that are applied to users and policies that aren't applied to anyone.

```yaml
Type: SwitchParameter
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
