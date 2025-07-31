---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-dlpkeyworddictionary
schema: 2.0.0
title: New-DlpKeywordDictionary
---

# New-DlpKeywordDictionary

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-DlpKeywordDictionary cmdlet to create data loss prevention (DLP) keyword dictionaries in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DlpKeywordDictionary -Name <String>
 [-Confirm]
 [-Description <String>]
 [-DoNotPersistKeywords]
 [-FileData <Byte[]>]
 [-Organization <OrganizationIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you create a custom sensitive information type that specifies the identity (GUID value) of the DLP keyword dictionary, the dictionary will appear in your list of sensitive information types, and you can use it in policies.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
$Keywords = @("Aarskog's syndrome","Abandonment","Abasia","Abderhalden-Kaufmann-Lignac","Abdominalgia","Abduction contracture","Abetalipo proteinemia","Abiotrophy","Ablatio","ablation","Ablepharia","Abocclusion","Abolition","Aborter","Abortion","Abortus","Aboulomania","Abrami's disease","Abramo")

$EncodedKeywords = $Keywords | ForEach-Object {[System.Text.Encoding]::Unicode.GetBytes($_+"`r`n")}

New-DlpKeywordDictionary -Name "Diseases" -Description "Names of diseases and injuries from ICD-10-CM lexicon" -FileData $EncodedKeywords
```

This example creates a DLP keyword dictionary named Diseases by using the specified values.

### Example 2
```powershell
$Keywords = Get-Content "C:\My Documents\InappropriateTerms.txt"

$EncodedKeywords = $Keywords | ForEach-Object {[System.Text.Encoding]::Unicode.GetBytes($_+"`r`n")}

New-DlpKeywordDictionary -Name "Inappropriate Language" -Description "Unprofessional and inappropriate terminology" -FileData $EncodedKeywords
```

This example creates a DLP keyword dictionary named Inappropriate Language from the file C:\\My Documents\\InappropriateTerms.txt. The file contains one term on each line.

## PARAMETERS

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the DLP keyword dictionary. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

### -Description

> Applicable: Security & Compliance

The Description parameter specifies descriptive text for the DLP keyword dictionary. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotPersistKeywords

> Applicable: Security & Compliance

{{ Fill DoNotPersistKeywords Description }}

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

### -FileData

> Applicable: Security & Compliance

The FileData parameter specifies the terms that are used in the DLP keyword dictionary. This parameter requires a comma-separated list of values that's binary encoded in UTF-16. For more information, see the examples in this topic.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Security & Compliance

{{ Fill Organization Description }}

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:

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
