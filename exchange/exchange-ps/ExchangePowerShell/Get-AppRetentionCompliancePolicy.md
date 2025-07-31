---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-appretentioncompliancepolicy
schema: 2.0.0
title: Get-AppRetentionCompliancePolicy
---

# Get-AppRetentionCompliancePolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-AppRetentionCompliancePolicy to view app retention compliance policies. App retention & labeling policies target new ways to scope and manage policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AppRetentionCompliancePolicy [[-Identity] <PolicyIdParameter>]
 [-DistributionDetail]
 [-ErrorPolicyOnly]
 [-RetentionRuleTypes]
 [<CommonParameters>]
```

## DESCRIPTION
\*-AppRetentionCompliance\* cmdlets are used for policies with adaptive policy scopes and all static policies that cover Teams private channels, Viva Engage chats, and Viva Engage community messages. Eventually, you'll use these cmdlets for most retention locations and policy types. The \*-RetentionCompliance\* cmdlets will continue to support Exchange and SharePoint locations primarily. For policies created with the \*-AppRetentionCompliance\* cmdlets, you can only set the list of included or excluded scopes for all included workloads, which means you'll likely need to create one policy per workload.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AppRetentionCompliancePolicy | Format-Table Name,GUID
```

This example returns a summary list of all app retention compliance policies.

### Example 1
```powershell
Get-AppRetentionCompliancePolicy -Identity "Contoso Viva Engage"
```

This example returns detailed information for the app retention compliance policy named Contoso Viva Engage.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the app retention compliance policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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

### -DistributionDetail

> Applicable: Security & Compliance

The DistributionDetail switch returns detailed policy distribution information in the DistributionResults property. You don't need to specify a value with this switch.

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

### -ErrorPolicyOnly

> Applicable: Security & Compliance

{{ Fill ErrorPolicyOnly Description }}

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

### -RetentionRuleTypes

> Applicable: Security & Compliance

The RetentionRuleTypes switch specifies whether to return the value of the RetentionRuleTypes property in the results. You don't need to specify a value with this switch.

To see the RetentionRuleTypes property, you need to pipe the command to a formatting cmdlet. For example, `Get-AppRetentionCompliancePolicy -RetentionRuleTypes | Format-Table -Auto Name,RetentionRuleTypes`. If you don't use the RetentionRuleTypes switch, the value appears blank.

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
