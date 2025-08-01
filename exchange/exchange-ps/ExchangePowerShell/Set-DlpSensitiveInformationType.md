---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpsensitiveinformationtype
schema: 2.0.0
title: Set-DlpSensitiveInformationType
---

# Set-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-DlpSensitiveInformationType cmdlet to modify sensitive information type rules that use document fingerprints.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-DlpSensitiveInformationType [-Identity] <SensitiveInformationTypeIdParameter>
 [-Confirm]
 [-Description <String>]
 [-FileData <Byte[]>]
 [-Fingerprints <MultiValuedProperty>]
 [-IsExact <Boolean>]
 [-Locale <CultureInfo>]
 [-Name <String>]
 [-Threshold <UInt32>]
 [-ThresholdConfig <PswsHashtable>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-DlpSensitiveInformationType "Contoso Confidential" -Locale fr -Name "Contoso Confidentiel" -Description "Ce message contient des informations confidentielles." -IsDefault
```

This example adds a French translation to the existing sensitive information type rule named "Contoso Confidential", and sets this French translation as the default.

### Example 2
```powershell
Set-DlpSensitiveInformationType "Contoso Confidential" -Locale es -Name $null -Description $null
```

This example removes the existing Spanish translation from the sensitive information type rule named "Contoso Confidential".

### Example 3
```powershell
$Benefits_Template = [System.IO.File]::ReadAllBytes('C:\My Documents\Contoso Benefits Template.docx')

$Benefits_Fingerprint = New-DlpFingerprint -FileData $Benefits_Template -Description "Contoso Benefits Template"

$Contoso_Confidential = Get-DlpSensitiveInformationType "Contoso Confidential"

$Array = [System.Collections.ArrayList]($Contoso_Confidential.Fingerprints)

$Array.Add($Benefits_FingerPrint[0])

Set-DlpSensitiveInformationType $Contoso_Confidential.Identity -FingerPrints $Array
```

This example modifies the existing sensitive information type rule named "Contoso Confidential" by adding a new document fingerprint for the file C:\\My Documents\\Contoso Benefits Template.docx without affecting any existing document fingerprints that are already defined.

### Example 4
```powershell
$cc = Get-DlpSensitiveInformationType "Contoso Confidential"

$a = [System.Collections.ArrayList]($cc.Fingerprints)

$a

$a.RemoveAt(0)

Set-DlpSensitiveInformationType $cc.Identity -FingerPrints $a
```

This example modifies the sensitive information type rule named "Contoso Confidential" by removing an existing document fingerprint without affecting other document fingerprints that are already defined.

The first three commands return the list of document fingerprints in the sensitive information type. The first document fingerprint in the list has the index number 0, the second has the index number 1, and so on. You use the index number to specify the document fingerprint that you want to remove. The last two commands remove the first document fingerprint that's displayed in the list.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the sensitive information type rule that you want to modify. You can use any value that uniquely identifies the sensitive information type rule. For example:

- Name
- LocalizedName
- Identity GUID value

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

This cmdlet has a built-in pause, so use `-Confirm:$false` to skip the confirmation.

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

The Description parameter specifies a description for the sensitive information type rule. You use the Description parameter with the Locale and Name parameters to specify descriptions for the sensitive information type rule in different languages. The localized values of Description appear in the AllLocalizedDescriptions property of the sensitive information type rule.

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

### -FileData

> Applicable: Security & Compliance

{{ Fill FileData Description }}

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

### -Fingerprints

> Applicable: Security & Compliance

The Fingerprints parameter specifies the byte-encoded document files that are used as fingerprints by the sensitive information type rule. For instructions on how to import documents to use as templates for fingerprints, see [New-DlpFingerprint](https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpfingerprint) or the Examples section. For instructions on how to add and remove document fingerprints from an existing sensitive information type rule, see the Examples section.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExact

> Applicable: Security & Compliance

{{ Fill IsExact Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale

> Applicable: Security & Compliance

The Locale parameter adds or removes languages that are associated with the sensitive information type rule.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

Typically, you use the Locale parameter with the Name and Description parameters to add or remove translated names and descriptions for the sensitive information type rule. You can also use the Locale parameter with the IsDefault switch to designate an existing translated name and description as the default. Before you can remove the default translation, you need to set another translation as the default.

```yaml
Type: CultureInfo
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

The Name parameter specifies a name for the sensitive information type rule. The value must be less than 256 characters.

You use the Name parameter with the Locale and Description parameters to specify names for the sensitive information type rule in different languages. The localized values of Name appear in the AllLocalizedNames property of the sensitive information type rule.

The value of the Name parameter is used in the Policy Tip that's presented to users in Outlook on the web. When a translated value of the Name parameter matches the client's language, the Policy Tip is displayed in the client's language. If no translated values of the Name parameter match the client's language, the default translation that's specified by the IsDefault parameter is used for the Policy Tip.

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

### -Threshold

> Applicable: Security & Compliance

{{ Fill Threshold Description }}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThresholdConfig

> Applicable: Security & Compliance

{{ Fill ThresholdConfig Description }}

```yaml
Type: PswsHashtable
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
