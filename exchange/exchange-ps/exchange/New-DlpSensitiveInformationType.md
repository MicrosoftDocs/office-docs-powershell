---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-dlpsensitiveinformationtype
applicable: Security & Compliance
title: New-DlpSensitiveInformationType
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-DlpSensitiveInformationType cmdlet to create sensitive information type rules that use document fingerprints.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-DlpSensitiveInformationType [[-Name] <String>]
 [-Fingerprints <MultiValuedProperty>]
 [-Confirm]
 [-Description <String>]
 [-FileData <Byte[]>]
 [-IsExact <Boolean>]
 [-Locale <CultureInfo>]
 [-ThresholdConfig <PswsHashtable>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
$Employee_Template = [System.IO.File]::ReadAllBytes('C:\My Documents\Contoso Employee Template.docx')

$Employee_Fingerprint = New-DlpFingerprint -FileData $Employee_Template -Description "Contoso Employee Template"

$Customer_Template = [System.IO.File]::ReadAllBytes('D:\Data\Contoso Customer Template.docx')

$Customer_Fingerprint = New-DlpFingerprint -FileData $Customer_Template -Description "Contoso Customer Template"

New-DlpSensitiveInformationType -Name "Contoso Employee-Customer Confidential" -Fingerprints $Employee_Fingerprint[0],$Customer_Fingerprint[0] -Description "Message contains Contoso employee or customer information."
```

This example creates a new sensitive information type rule named "Contoso Employee-Customer Confidential" that uses the document fingerprints of the files C:\\My Documents\\Contoso Employee Template.docx and D:\\Data\\Contoso Customer Template.docx.

## PARAMETERS

### -Name
The Name parameter specifies a name for the sensitive information type rule. The value must be less than 256 characters.

The value of this parameter is used in the Policy Tip that's presented to users in Outlook on the web.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fingerprints
The Fingerprints parameter specifies the byte-encoded files to use as document fingerprints. You can use multiple document fingerprints separated by commas. For instructions on how to import documents to use as templates for fingerprints, see [New-Fingerprint](https://learn.microsoft.com/powershell/module/exchange/new-fingerprint) or the Examples section.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a description for the sensitive information type rule.

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

### -FileData
{{ Fill FileData Description }}

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -IsExact
{{ Fill IsExact Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale
The Locale parameter specifies the language that's associated with the sensitive information type rule.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

You can add additional language translations to the sensitive information type rule by using the Set-DlpSensitiveInformationType cmdlet.

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThresholdConfig
{{ Fill ThresholdConfig Description }}

```yaml
Type: PswsHashtable
Parameter Sets: (All)
Aliases:
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
