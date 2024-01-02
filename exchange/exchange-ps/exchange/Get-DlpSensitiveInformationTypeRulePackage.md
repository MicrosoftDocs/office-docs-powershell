---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dlpsensitiveinformationtyperulepackage
applicable: Exchange Online, Security & Compliance
title: Get-DlpSensitiveInformationTypeRulePackage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-DlpSensitiveInformationTypeRulePackage

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-DlpSensitiveInformationTypeRulePackage cmdlet to view data loss prevention (DLP) sensitive information type rule packages in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-DlpSensitiveInformationTypeRulePackage [[-Identity] <SensitiveInformationTypeRuleCollectionIdParameter>]
 [-Capability <ClassificationCapabilityType>]
 [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by DLP to detect sensitive content. The default sensitive information type rule package is named Microsoft Rule Package.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DlpSensitiveInformationTypeRulePackage
```

This example returns a summary list of all sensitive information type rule packages in the organization.

### Example 2
```powershell
Get-DlpSensitiveInformationTypeRulePackage -Identity "Microsoft Rule Package" | Format-List
```

This example returns detailed information for the sensitive information type rule package named Microsoft Rule Package.

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information type rule package that you want to view. You can use any value that uniquely identifies the rule package. For example:

- RuleCollectionName
- LocalizedName
- GUID (from the Identity value)

```yaml
Type: SensitiveInformationTypeRuleCollectionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Capability
{{ Fill Capability Description }}

```yaml
Type: ClassificationCapabilityType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance

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
