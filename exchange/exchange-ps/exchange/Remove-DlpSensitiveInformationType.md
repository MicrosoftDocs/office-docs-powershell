---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/remove-dlpsensitiveinformationtype
applicable: Security & Compliance
title: Remove-DlpSensitiveInformationType
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Remove-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Remove-DlpSensitiveInformationType cmdlet to remove sensitive information type rules that use document fingerprints. You can't use this cmdlet to remove built-in sensitive information type rules.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-DlpSensitiveInformationType [-Identity] <DataClassificationIdParameter>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

**Note**: A "ManagementObjectNotFoundException" error means there was a synchronization problem between the Microsoft Purview compliance portal and Exchange Online. This happens when you try to remove data classifications that are being used in mail flow rules (also known as transport rules). You can remove the mail flow rule, wait for synchronization to finish, and then add the rule back.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-DlpSensitiveInformationType "Contoso Confidential"
```

This example removes the sensitive information type rule named "Contoso Confidential".

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information type rule that you want to remove. You can use any value that uniquely identifies the sensitive information type rule. For example:

- Name
- LocalizedName
- Identity GUID value

```yaml
Type: DataClassificationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

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
