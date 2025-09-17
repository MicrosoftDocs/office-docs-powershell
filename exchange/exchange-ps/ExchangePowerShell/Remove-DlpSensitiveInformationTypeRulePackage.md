---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-dlpsensitiveinformationtyperulepackage
schema: 2.0.0
title: Remove-DlpSensitiveInformationTypeRulePackage
---

# Remove-DlpSensitiveInformationTypeRulePackage

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Remove-DlpSensitiveInformationTypeConfig cmdlet to remove data loss prevention (DLP) sensitive information type rule packages from the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-DlpSensitiveInformationTypeRulePackage [-Identity] <SensitiveInformationTypeRuleCollectionIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by DLP to detect sensitive content. The default sensitive information type rule package is named Microsoft Rule Package.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
$Rule = Get-DlpSensitiveInformationTypeRulePackage -Identity "Contoso Rule Pack"

$Rule | Remove-DlpSensitiveInformationTypeRulePackage
```

This example removes the non-Microsoft sensitive information type rule package named Contoso Rule Pack. The first command stores the identity of the rule package in a variable. The second command pipes the variable to the Remove-DlpSensitiveInformationTypeRulePackage cmdlet.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the sensitive information type rule package that you want to remove. You can use any value that uniquely identifies the rule package. For example:

- RuleCollectionName
- LocalizedName
- GUID (from the Identity value)

```yaml
Type: SensitiveInformationTypeRuleCollectionIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Security & Compliance

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Security & Compliance

The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
