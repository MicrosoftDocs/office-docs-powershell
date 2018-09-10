---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Office 365 Security & Compliance Center
title: New-DlpSensitiveInformationType
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# New-DlpSensitiveInformationType

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the New-DlpSensitiveInformationType cmdlet to create sensitive information type rules that use document fingerprints.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-DlpSensitiveInformationType [-Name] <String> -Description <String> -Fingerprints <MultiValuedProperty>
 [-SensitiveInformationTypeRuleCollectionIdentity <SensitiveInformationTypeRuleCollectionIdParameter>] [-Confirm]
 [-Locale <CultureInfo>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Sensitive information type rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Employee_Template = Get-Content "C:\My Documents\Contoso Employee Template.docx" -Encoding byte -ReadCount 0; $Employee_Fingerprint = New-DlpFingerprint -FileData $Employee_Template -Description "Contoso Employee Template"; $Customer_Template = Get-Content "D:\Data\Contoso Customer Template.docx" -Encoding byte; $Customer_Fingerprint = New-DlpFingerprint -FileData $Customer_Template -Description "Contoso Customer Template"; New-DlpSensitiveInformationType -Name "Contoso Employee-Customer Confidential" -Fingerprints $Employee_Fingerprint[0],$Customer_Fingerprint[0] -Description "Message contains Contoso employee or customer information."
```

This example creates a new sensitive information type rule named "Contoso Employee-Customer Confidential" that uses the document fingerprints of the files C:\\My Documents\\Contoso Employee Template.docx and D:\\Data\\Contoso Customer Template.docx.

## PARAMETERS

### -Description
The Description parameter specifies a description for the sensitive information type rule.

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

### -Fingerprints
The Fingerprints parameter specifies the byte-encoded files to use as document fingerprints. You can use multiple document fingerprints separated by commas. For instructions on how to import documents to use as templates for fingerprints, see New-DlpFingerprint or the Examples section.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a name for the sensitive information type rule. The value must be less than 256 characters.

The value of this parameter is used in the Policy Tip that's presented to users in Outlook on the web.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SensitiveInformationTypeRuleCollectionIdentity
The SensitiveInformationTypeRuleCollectionIdentity parameter is reserved for future use.

New sensitive information type rules that you create are automatically added to the rule collection named Fingerprint Classification Collection.

```yaml
Type: ClassificationRuleCollectionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
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

### -Locale
The Locale parameter specifies the language that's associated with the sensitive information type rule.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

You can add additional language translations to the sensitive information type rule by using the Set-DlpSensitiveInformationType cmdlet.

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

[Online Version](https://technet.microsoft.com/library/3c1e90e7-cf49-4a8b-a0c4-c189ab8ab166.aspx)
