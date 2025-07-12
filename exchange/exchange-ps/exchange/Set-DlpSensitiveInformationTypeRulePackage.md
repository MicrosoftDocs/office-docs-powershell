---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-dlpsensitiveinformationtyperulepackage
applicable: Security & Compliance
title: Set-DlpSensitiveInformationTypeRulePackage
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-DlpSensitiveInformationTypeRulePackage

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-DlpSensitiveInformationTypeRulePackage cmdlet to update existing data loss prevention (DLP) sensitive information type rule packages in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DlpSensitiveInformationTypeRulePackage [-FileData] <Byte[]>
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
Set-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('C:\My Documents\External Sensitive Info Type Rule Collection.xml'))
```

This example imports the sensitive information type rule package C:\\My Documents\\External Sensitive Info Type Rule Collection.xml.

## PARAMETERS

### -FileData
The FileData parameter specifies the sensitive information type rule package that you want to import.

A valid value for this parameter requires you to read the file to a byte-encoded object using the following syntax: `([System.IO.File]::ReadAllBytes('<Path>\<FileName>'))`. You can use this command as the parameter value, or you can write the output to a variable (`$data = [System.IO.File]::ReadAllBytes('<Path>\<FileName>')`) and use the variable as the parameter value (`$data`).

```yaml
Type: Byte[]
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

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

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
