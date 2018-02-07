---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-DataClassification

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-DataClassification cmdlet to modify data classification rules that use document fingerprints.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-DataClassification [-Identity] <DataClassificationIdParameter> [-Confirm] [-Description <String>]
 [-DomainController <Fqdn>] [-Fingerprints <MultiValuedProperty>] [-IsDefault] [-Locale <CultureInfo>]
 [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Data loss prevention (DLP)" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-DataClassification "Contoso Confidential" -Locale fr -Name "Contoso Confidentiel" -Description "Ce message contient des informations confidentielles." -IsDefault
```

This example adds a French translation to the existing data classification rule named "Contoso Confidential", and sets this French translation as the default.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-DataClassification "Contoso Confidential" -Locale fr -Name "Contoso Confidentiel" -Description "Ce message contient des informations confidentielles." -IsDefault
```

This example adds a French translation to the existing data classification rule named "Contoso Confidential", and sets this French translation as the default.

### Example 1 -------------------------- (Exchange Online)
```
Set-DataClassification "Contoso Confidential" -Locale fr -Name "Contoso Confidentiel" -Description "Ce message contient des informations confidentielles." -IsDefault
```

This example adds a French translation to the existing data classification rule named "Contoso Confidential", and sets this French translation as the default.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-DataClassification "Contoso Confidential" -Locale es -Name $null -Description $null
```

This example removes the existing Spanish translation from the data classification rule named "Contoso Confidential".

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-DataClassification "Contoso Confidential" -Locale es -Name $null -Description $null
```

This example removes the existing Spanish translation from the data classification rule named "Contoso Confidential".

### Example 2 -------------------------- (Exchange Online)
```
Set-DataClassification "Contoso Confidential" -Locale es -Name $null -Description $null
```

This example removes the existing Spanish translation from the data classification rule named "Contoso Confidential".

### Example 3 -------------------------- (Exchange Server 2013)
```
$Benefits_Template = Get-Content "C:\My Documents\Contoso Benefits Template.docx" -Encoding byte; $Benefits_Fingerprint = New-Fingerprint -FileData $Benefits_Template -Description "Contoso Benefits Template"; $Contoso_Confidential = Get-DataClassification "Contoso Confidential"; $Array = [System.Collections.ArrayList]($Contoso_Confidential.Fingerprints); $Array.Add($Benefits_FingerPrint); Set-DataClassification $Contoso_Confidential.Identity -FingerPrints $Array
```

This example modifies the existing data classification rule named "Contoso Confidential" by adding a new document fingerprint for the file C:\\My Documents\\Contoso Benefits Template.docx without affecting any existing document fingerprints that are already defined.

### Example 3 -------------------------- (Exchange Server 2016)
```
$Benefits_Template = Get-Content "C:\My Documents\Contoso Benefits Template.docx" -Encoding byte; $Benefits_Fingerprint = New-Fingerprint -FileData $Benefits_Template -Description "Contoso Benefits Template"; $Contoso_Confidential = Get-DataClassification "Contoso Confidential"; $Array = [System.Collections.ArrayList]($Contoso_Confidential.Fingerprints); $Array.Add($Benefits_FingerPrint); Set-DataClassification $Contoso_Confidential.Identity -FingerPrints $Array
```

This example modifies the existing data classification rule named "Contoso Confidential" by adding a new document fingerprint for the file C:\\My Documents\\Contoso Benefits Template.docx without affecting any existing document fingerprints that are already defined.

### Example 3 -------------------------- (Exchange Online)
```
$Benefits_Template = Get-Content "C:\My Documents\Contoso Benefits Template.docx" -Encoding byte; $Benefits_Fingerprint = New-Fingerprint -FileData $Benefits_Template -Description "Contoso Benefits Template"; $Contoso_Confidential = Get-DataClassification "Contoso Confidential"; $Array = [System.Collections.ArrayList]($Contoso_Confidential.Fingerprints); $Array.Add($Benefits_FingerPrint); Set-DataClassification $Contoso_Confidential.Identity -FingerPrints $Array
```

This example modifies the existing data classification rule named "Contoso Confidential" by adding a new document fingerprint for the file C:\\My Documents\\Contoso Benefits Template.docx without affecting any existing document fingerprints that are already defined.

### Example 4 -------------------------- (Exchange Server 2013)
```
$cc = Get-DataClassification "Contoso Confidential"; $a = [System.Collections.ArrayList]($cc.Fingerprints); $a; $a.RemoveAt(0); Set-DataClassification $cc.Identity -FingerPrints $Array
```

This example modifies the data classification rule named "Contoso Confidential" by removing an existing document fingerprint without affecting other document fingerprints that are already defined.


The first three commands return the list of document fingerprints in the data classification rule. The first document fingerprint in the list has the index number 0, the second has the index number 1, and so on. You use the index number to specify the document fingerprint that you want to remove. The last two commands remove the first document fingerprint that's displayed in the list.

### Example 4 -------------------------- (Exchange Server 2016)
```
$cc = Get-DataClassification "Contoso Confidential"; $a = [System.Collections.ArrayList]($cc.Fingerprints); $a; $a.RemoveAt(0); Set-DataClassification $cc.Identity -FingerPrints $a
```

This example modifies the data classification rule named "Contoso Confidential" by removing an existing document fingerprint without affecting other document fingerprints that are already defined.


The first three commands return the list of document fingerprints in the data classification. The first document fingerprint in the list has the index number 0, the second has the index number 1, and so on. You use the index number to specify the document fingerprint that you want to remove. The last two commands remove the first document fingerprint that's displayed in the list.

### Example 4 -------------------------- (Exchange Online)
```
$cc = Get-DataClassification "Contoso Confidential"; $a = [System.Collections.ArrayList]($cc.Fingerprints); $a; $a.RemoveAt(0); Set-DataClassification $cc.Identity -FingerPrints $a
```

This example modifies the data classification rule named "Contoso Confidential" by removing an existing document fingerprint without affecting other document fingerprints that are already defined.


The first three commands return the list of document fingerprints in the data classification. The first document fingerprint in the list has the index number 0, the second has the index number 1, and so on. You use the index number to specify the document fingerprint that you want to remove. The last two commands remove the first document fingerprint that's displayed in the list.

## PARAMETERS

### -Identity
The Identity parameter specifies the data classification rule that you want to modify. You can use any value that uniquely identifies the data classification rule. For example:

- Name

- LocalizedName

- Identity GUID value

```yaml
Type: DataClassificationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a description for the data classification rule. You use the Description parameter with the Locale and Name parameters to specify descriptions for the data classification rule in different languages. The localized values of Description appear in the AllLocalizedDescriptions property of the data classification rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fingerprints
The Fingerprints parameter specifies the byte-encoded document files that are used as fingerprints by the data classification rule. For instructions on how to import documents to use as templates for fingerprints, see New-Fingerprint or the section. For instructions on how to add and remove document fingerprints from an existing data classification rule, see the section.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault
The IsDefault switch is used with the Locale parameter to specify the default language for the data classification rule. The default Locale value is stored in the DefaultCulture property.

When you change the default Locale value, the Name value of the data classification rule changes to match the Name value that's associated with the new default locale. The original Name value when the rule was created is permanently stored the LocalizedName property.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale
!!! Exchange Server 2013

The Locale parameter adds or removes languages that are associated with the data classification rule. Valid input for this parameter is a Microsoft .NET Framework CultureInfo class culture code value. For example, en for English or fr for French.

Typically, you use the Locale parameter with the Name and Description parameters to add or remove translated names and descriptions for the data classification rule. You can also use the Locale parameter with the IsDefault switch to designate an existing translated name and description as the default. Before you can remove the default translation, you need to set another translation as the default.



!!! Exchange Server 2016, Exchange Online

The Locale parameter adds or removes languages that are associated with the data classification rule.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

Typically, you use the Locale parameter with the Name and Description parameters to add or remove translated names and descriptions for the data classification rule. You can also use the Locale parameter with the IsDefault switch to designate an existing translated name and description as the default. Before you can remove the default translation, you need to set another translation as the default.



```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2013

The Name parameter specifies a name for the data classification rule. The value must be less than 256 characters.

You use the Name parameter with the Locale and Description parameters to specify names for the data classification rule in different languages. The localized values of Name appear in the AllLocalizedNames property of the data classification rule.

The value of the Name parameter is used in the Policy Tip that's presented to users in Outlook Web App. When a translated value of the Name parameter matches the client's language, the Policy Tip is displayed in the client's language. If no translated values of the Name parameter match the client's language, the default translation that's specified by the IsDefault parameter is used for the Policy Tip.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies a name for the data classification rule. The value must be less than 256 characters.

You use the Name parameter with the Locale and Description parameters to specify names for the data classification rule in different languages. The localized values of Name appear in the AllLocalizedNames property of the data classification rule.

The value of the Name parameter is used in the Policy Tip that's presented to users in Outlook on the web. When a translated value of the Name parameter matches the client's language, the Policy Tip is displayed in the client's language. If no translated values of the Name parameter match the client's language, the default translation that's specified by the IsDefault parameter is used for the Policy Tip.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

