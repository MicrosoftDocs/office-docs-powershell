---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-DlpKeywordDictionary
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-DlpKeywordDictionary

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-DlpKeywordDictionary cmdlet to modify data loss prevention (DLP) keyword dictionaries in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-DlpKeywordDictionary [-Identity] <SensitiveInformationTypeIdParameter> [-Confirm] [-Description <String>]
 [-FileData <Byte[]>] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Keywords = "Aarskog's syndrome, Abandonment, Abasia, Abderhalden-Kaufmann-Lignac, Abdominalgia, Abduction contracture, Abetalipo proteinemia, Abiotrophy, Ablatio, ablation, Ablepharia, Abocclusion, Abolition, Aborter, Abortion, Abortus, Aboulomania, Abrami's disease, Abramo"; $EncodedKeywords = [system.Text.Encoding]::UTF8.GetBytes($keywords); Set-DlpKeywordDictionary -Identity "Diseases" -FileData $EncodedKeywords
```

This example replaces the existing terms in the DLP keyword dictionary named Diseases with the specified values.

### -------------------------- Example 2 --------------------------
```
$Dictionary = Get-DlpKeywordDictionary -Name "Diseases"; $Terms = $Dictionary.KeywordDictionary.split(',').trim(); $Terms += "Achylia","Acidemia","Acidocytopenia","Acidocytosis","Acidopenia","Acidosis","Aciduria","Acladiosis","Aclasis"; $Keywords = $Terms -Join ", "; $EncodedKeywords = [system.Text.Encoding]::UTF8.GetBytes($Keywords); Set-DlpKeywordDictionary -Identity "Diseases" -FileData $EncodedKeywords
```

This example adds the specified terms to the DLP keyword dictionary named Diseases without affecting other existing terms.

### -------------------------- Example 3 --------------------------
```
$Dictionary = Get-DlpKeywordDictionary -Name "Diseases"; $Terms = $Dictionary.KeywordDictionary.split(',').trim(); $TermsToRemove = @('abandonment', 'ablatio'); $UpdatedTerms = $Terms | Where-Object {$_ -NotIn $TermsToRemove}; $Keywords = $UpdatedTerms -Join ", "; $EncodedKeywords = [system.Text.Encoding]::UTF8.GetBytes($Keywords); Set-DlpKeywordDictionary -Identity "Diseases" -FileData $EncodedKeywords
```

This example removes the specified terms from the DLP keyword dictionary named Diseases without affecting other existing terms.

### -------------------------- Example 4 --------------------------
```
$Dictionary = Get-DlpKeywordDictionary -Name "Inappropriate Language"; $Terms = $Dictionary.KeywordDictionary.split(',').trim(); Set-Content $Terms -Path "C:\My Documents\InappropriateTerms.txt"; $UpdatedTerms = Get-Content -Path "C:\My Documents\InappropriateTerms.txt"; $Keywords = $UpdatedTerms -Join ", "; $EncodedKeywords = [system.Text.Encoding]::UTF8.GetBytes($Keywords); Set-DlpKeywordDictionary -Identity "Inappropriate Language" -FileData $EncodedKeywords
```

The first three commands export the terms from the existing keyword dictionary named Inappropriate Language to the file C:\My Documents\InappropriateTerms.txt, where each term is on a separate line.

After you use Notepad to modify the terms and save the file, the last four commands use the file to replace the terms in the keyword dictionary.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the DLP keyword dictionary that you want to modify. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: SensitiveInformationTypeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies descriptive text for the DLP keyword dictionary. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileData
The FileData parameter specifies the terms that are used in the DLP keyword dictionary. This parameter requires a comma-separated list of values that's binary encoded in UTF8. For more information, see the examples in this topic.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the DLP keyword dictionary. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/b1a010ed-ebfe-4300-97b7-5fc55f21169a.aspx)
