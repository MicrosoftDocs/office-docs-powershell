---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-DlpSensitiveInformationType
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-DlpSensitiveInformationType cmdlet to modify sensitive information type rules that use document fingerprints.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-DlpSensitiveInformationType [-Identity] <SensitiveInformationTypeIdParameter> [-Confirm] [-Description <String>]
 [-DomainController <Fqdn>] [-Fingerprints <MultiValuedProperty>] [-IsDefault] [-Locale <CultureInfo>]
 [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-DlpSensitiveInformationType "Contoso Confidential" -Locale fr -Name "Contoso Confidentiel" -Description "Ce message contient des informations confidentielles." -IsDefault
```

This example adds a French translation to the existing sensitive information type rule named "Contoso Confidential", and sets this French translation as the default.

### -------------------------- Example 2 --------------------------
```
Set-DlpSensitiveInformationType "Contoso Confidential" -Locale es -Name $null -Description $null
```

This example removes the existing Spanish translation from the sensitive information type rule named "Contoso Confidential".

### -------------------------- Example 3 --------------------------
```
$Benefits_Template = Get-Content "C:\My Documents\Contoso Benefits Template.docx" -Encoding byte -ReadCount 0; $Benefits_Fingerprint = New-DlpFingerprint -FileData $Benefits_Template -Description "Contoso Benefits Template"; $Contoso_Confidential = Get-DlpSensitiveInformationType "Contoso Confidential"; $Array = [System.Collections.ArrayList]($Contoso_Confidential.Fingerprints); $Array.Add($Benefits_FingerPrint[0]); Set-DlpSensitiveInformationType $Contoso_Confidential.Identity -FingerPrints $Array
```

This example modifies the existing sensitive information type rule named "Contoso Confidential" by adding a new document fingerprint for the file C:\My Documents\Contoso Benefits Template.docx without affecting any existing document fingerprints that are already defined.

### -------------------------- Example 4 --------------------------
```
$cc = Get-DlpSensitiveInformationType "Contoso Confidential"; $a = [System.Collections.ArrayList]($cc.Fingerprints); $a; $a.RemoveAt(0); Set-DlpSensitiveInformationType $cc.Identity -FingerPrints $a
```

This example modifies the sensitive information type rule named "Contoso Confidential" by removing an existing document fingerprint without affecting other document fingerprints that are already defined.

The first three commands return the list of document fingerprints in the sensitive information type. The first document fingerprint in the list has the index number 0, the second has the index number 1, and so on. You use the index number to specify the document fingerprint that you want to remove. The last two commands remove the first document fingerprint that's displayed in the list.

## PARAMETERS

### -Identity
The Identity parameter specifies the sensitive information type rule that you want to modify. You can use any value that uniquely identifies the sensitive information type rule. For example:

- Name

- LocalizedName

- Identity GUID value

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

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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
The Description parameter specifies a description for the sensitive information type rule. You use the Description parameter with the Locale and Name parameters to specify descriptions for the sensitive information type rule in different languages. The localized values of Description appear in the AllLocalizedDescriptions property of the sensitive information type rule.

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
### -Fingerprints
The Fingerprints parameter specifies the byte-encoded document files that are used as fingerprints by the sensitive information type rule. For instructions on how to import documents to use as templates for fingerprints, see New-DlpFingerprint or the Examples section. For instructions on how to add and remove document fingerprints from an existing sensitive information type rule, see the Examples section.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
The IsDefault switch is used with the Locale parameter to specify the default language for the sensitive information type rule. The default Locale value is stored in the DefaultCulture property.

When you change the default Locale value, the Name value of the sensitive information type rule changes to match the Name value that's associated with the new default locale. The original Name value when the rule was created is permanently stored the LocalizedName property.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale
The Locale parameter adds or removes languages that are associated with the sensitive information type rule.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

Typically, you use the Locale parameter with the Name and Description parameters to add or remove translated names and descriptions for the sensitive information type rule. You can also use the Locale parameter with the IsDefault switch to designate an existing translated name and description as the default. Before you can remove the default translation, you need to set another translation as the default.

```yaml
Type: CultureInfo
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
The Name parameter specifies a name for the sensitive information type rule. The value must be less than 256 characters.

You use the Name parameter with the Locale and Description parameters to specify names for the sensitive information type rule in different languages. The localized values of Name appear in the AllLocalizedNames property of the sensitive information type rule.

The value of the Name parameter is used in the Policy Tip that's presented to users in Outlook on the web. When a translated value of the Name parameter matches the client's language, the Policy Tip is displayed in the client's language. If no translated values of the Name parameter match the client's language, the default translation that's specified by the IsDefault parameter is used for the Policy Tip.

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

[Online Version](https://technet.microsoft.com/library/6d40df36-18c7-46f5-b373-69c840a5599b.aspx)
