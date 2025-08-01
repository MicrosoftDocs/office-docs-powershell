---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpkeyworddictionary
schema: 2.0.0
title: Set-DlpKeywordDictionary
---

# Set-DlpKeywordDictionary

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-DlpKeywordDictionary cmdlet to modify data loss prevention (DLP) keyword dictionaries in the Microsoft Purview compliance portal.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DlpKeywordDictionary [-Identity] <SensitiveInformationTypeIdParameter>
 [-Confirm]
 [-Description <String>]
 [-DoNotPersistKeywords]
 [-FileData <Byte[]>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
$Keywords = "Aarskog's syndrome, Abandonment, Abasia, Abderhalden-Kaufmann-Lignac, Abdominalgia, Abduction contracture, Abetalipo proteinemia, Abiotrophy, Ablatio, ablation, Ablepharia, Abocclusion, Abolition, Aborter, Abortion, Abortus, Aboulomania, Abrami's disease, Abramo"

$EncodedKeywords = [System.Text.Encoding]::Unicode.GetBytes($keywords)

Set-DlpKeywordDictionary -Identity "Diseases" -FileData $EncodedKeywords
```

This example replaces the existing terms in the DLP keyword dictionary named Diseases with the specified values.

### Example 2
```powershell
$Dictionary = Get-DlpKeywordDictionary -Name "Diseases"

$Terms = $Dictionary.KeywordDictionary.split(',').trim()

$Terms += "Achylia","Acidemia","Acidocytopenia","Acidocytosis","Acidopenia","Acidosis","Aciduria","Acladiosis","Aclasis"

$Keywords = $Terms -Join ", "

$EncodedKeywords = [System.Text.Encoding]::Unicode.GetBytes($Keywords)

Set-DlpKeywordDictionary -Identity "Diseases" -FileData $EncodedKeywords
```

This example adds the specified terms to the DLP keyword dictionary named Diseases without affecting other existing terms.

### Example 3
```powershell
$Dictionary = Get-DlpKeywordDictionary -Name "Diseases"

$Terms = $Dictionary.KeywordDictionary.split(',').trim()

$TermsToRemove = @('abandonment', 'ablatio')

$UpdatedTerms = $Terms | Where-Object {$_ -NotIn $TermsToRemove}

$Keywords = $UpdatedTerms -Join ", "

$EncodedKeywords = [System.Text.Encoding]::Unicode.GetBytes($Keywords)

Set-DlpKeywordDictionary -Identity "Diseases" -FileData $EncodedKeywords
```

This example removes the specified terms from the DLP keyword dictionary named Diseases without affecting other existing terms.

### Example 4
```powershell
$Dictionary = Get-DlpKeywordDictionary -Name "Inappropriate Language"

$Terms = $Dictionary.KeywordDictionary.split(',').trim()

Set-Content $Terms -Path "C:\My Documents\InappropriateTerms.txt"

$UpdatedTerms = Get-Content -Path "C:\My Documents\InappropriateTerms.txt"

$Keywords = $UpdatedTerms -Join ", "

$EncodedKeywords = [System.Text.Encoding]::Unicode.GetBytes($Keywords)

Set-DlpKeywordDictionary -Identity "Inappropriate Language" -FileData $EncodedKeywords
```

The first three commands export the terms from the existing keyword dictionary named Inappropriate Language to the file C:\\My Documents\\InappropriateTerms.txt, where each term is on a separate line.

After you use Notepad to modify the terms and save the file, the last four commands use the file to replace the terms in the keyword dictionary.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the name of the DLP keyword dictionary that you want to modify. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: SensitiveInformationTypeIdParameter
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

The maximum file size is up to 1 MB of terms after compression. The organization limit for all dictionaries is also 1 MB after compression.

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

### -Name

> Applicable: Security & Compliance

The Name parameter specifies a unique name for the DLP keyword dictionary. If the value contains spaces, enclose the value in quotation marks.

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
