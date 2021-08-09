---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-configanalyzerpolicyrecommendation
applicable: Exchange Online, Exchange Online Protection
title: Get-ConfigAnalyzerPolicyRecommendation
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ConfigAnalyzerPolicyRecommendation

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ConfigAnalyzerPolicyRecommendation cmdlet to compare the settings in your existing protection policies to the recommended Standard or Strict levels.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ConfigAnalyzerPolicyRecommendation [[-Identity] <ConfigAnalyzerPolicyRecommendationIdParameter>] -RecommendedPolicyType <RecommendedPolicyType>
 [-IsAppliedToDisabled]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
{{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -Identity
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
The RecommendedPolicyType parameter specifies the preset security policy that you want to use as a baseline for comparison. Valid values are:

- Standard
- Strict
- Custom

```yaml
Type: RecommendedPolicyType
Parameter Sets: (All)
Aliases:
Accepted values: Custom, Standard, Strict

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAppliedToDisabled
The IsAppliedToDisabled switch

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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
