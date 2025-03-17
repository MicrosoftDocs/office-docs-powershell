---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-caseholdpolicy
applicable: Security & Compliance
title: Get-CaseHoldPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-CaseHoldPolicy

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-CaseHoldPolicy to view existing case hold policies in the Microsoft Purview compliance portal. To get relevant information about how the hold was applied and the affected locations, you need to include the DistributionDetail switch.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CaseHoldPolicy [[-Identity] <PolicyIdParameter>]
 [-Case <String>]
 [-DistributionDetail]
 [-IncludeBindings]
 [-IncludeBindingsOnly]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-CaseHoldPolicy -Case "Contoso Legal"
```

This example displays detailed information for the policy that's associated with the eDiscovery case named Contoso Legal.

### Example 2
```powershell
Get-CaseHoldPolicy -Identity "Regulation 123 Compliance"
```

This example displays detailed information for the policy named "Regulation 123 Compliance".

## PARAMETERS

### -Identity
The Identity parameter specifies the case hold policy that you want to view. You can use any value that uniquely identifies the policy. For example:

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

### -Case
The Case parameter specifies the case hold policy that you want to view by using the eDiscovery case that's associated with the policy. You can use the following values to identify the eDiscovery case:

- Name
- Identity (GUID value).

You can find these values by running the command: Get-ComplianceCase | Format-Table -Auto Name,Status,Identity.

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
The DistributionDetail switch returns detailed policy distribution information on the case hold policy. You don't need to specify a value with this switch.

If you don't use this switch, the command won't return information about the current deployment status, and the DistributionStatus property will only show as "Pending".

The following properties are affected by this switch:

- SharePointLocation
- ExchangeLocation
- PublicFolderLocation
- DistributionStatus
- DistributionResults
- LastStatusUpdateTime

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

### -IncludeBindings
PARAMVALUE: SwitchParameter

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

### -IncludeBindingsOnly
{{ Fill IncludeBindingsOnly Description }}

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
