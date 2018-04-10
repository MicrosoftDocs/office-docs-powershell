---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-DlpKeywordDictionary
schema: 2.0.0
---

# New-DlpKeywordDictionary

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-DlpKeywordDictionary cmdlet to create data loss prevention (DLP) keyword dictionaries in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DlpKeywordDictionary -Name <String> [-Confirm] [-Description <String>] [-FileData <Byte[]>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you create a custom sensitive information type that specifies the identity (GUID value) of the DLP keyword dictionary, the dictionary will appear in your list of sensitive information types, and you can use it in policies.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Keywords = "Aarskog's syndrome, Abandonment, Abasia, Abderhalden-Kaufmann-Lignac, Abdominalgia, Abduction contracture, Abetalipo proteinemia, Abiotrophy, Ablatio, ablation, Ablepharia, Abocclusion, Abolition, Aborter, Abortion, Abortus, Aboulomania, Abrami's disease, Abramo"; $EncodedKeywords = [system.Text.Encoding]::UTF8.GetBytes($Keywords); New-DlpKeywordDictionary -Name "Diseases" -Description "Names of diseases and injuries from ICD-10-CM lexicon" -FileData $EncodedKeywords
```

This example creates a DLP keyword dictionary named Diseases by using the specified values.

### -------------------------- Example 2 --------------------------
```
$Terms = Get-Content "C:\My Documents\InappropriateTerms.txt"; $Keywords = $Terms -Join ", "; $EncodedKeywords = [system.Text.Encoding]::UTF8.GetBytes($Keywords); New-DlpKeywordDictionary -Name "Inappropriate Language" -Description "Unprofessional and inappropriate terminology" -FileData $EncodedKeywords
```

This example creates a DLP keyword dictionary named Inappropriate Language from the file C:\\My Documents\\InappropriateTerms.txt. The file contains one term on each line.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the DLP keyword dictionary. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

[Online Version](https://technet.microsoft.com/library/0d9a4cd6-f140-4ddb-90c8-bee1db2148e2.aspx)
