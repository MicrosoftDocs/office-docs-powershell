---
title: "Set-DataClassification"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/27/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6d40df36-18c7-46f5-b373-69c840a5599b
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-DataClassification

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-DataClassification** cmdlet to modify data classification rules that use document fingerprints.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-DataClassification -Identity <DataClassificationIdParameter> [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-Fingerprints <MultiValuedProperty>] [-IsDefault <SwitchParameter>] [-Locale <CultureInfo>] [-Name <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds a French translation to the existing data classification rule named "Contoso Confidential", and sets this French translation as the default.
  
```
Set-DataClassification "Contoso Confidential" -Locale fr -Name "Contoso Confidentiel" -Description "Ce message contient des informations confidentielles." -IsDefault
```

### Example 2

This example removes the existing Spanish translation from the data classification rule named "Contoso Confidential".
  
```
Set-DataClassification "Contoso Confidential" -Locale es -Name $null -Description $null
```

### Example 3

This example modifies the existing data classification rule named "Contoso Confidential" by adding a new document fingerprint for the file C:\My Documents\Contoso Benefits Template.docx without affecting any existing document fingerprints that are already defined.
  
```
$Benefits_Template = Get-Content "C:\My Documents\Contoso Benefits Template.docx" -Encoding byte; $Benefits_Fingerprint = New-Fingerprint -FileData $Benefits_Template -Description "Contoso Benefits Template"; $Contoso_Confidential = Get-DataClassification "Contoso Confidential"; $Array = [System.Collections.ArrayList]($Contoso_Confidential.Fingerprints); $Array.Add($Benefits_FingerPrint); Set-DataClassification $Contoso_Confidential.Identity -FingerPrints $Array
```

### Example 4

This example modifies the data classification rule named "Contoso Confidential" by removing an existing document fingerprint without affecting other document fingerprints that are already defined.
  
The first three commands return the list of document fingerprints in the data classification. The first document fingerprint in the list has the index number 0, the second has the index number 1, and so on. You use the index number to specify the document fingerprint that you want to remove. The last two commands remove the first document fingerprint that's displayed in the list.
  
```
$cc = Get-DataClassification "Contoso Confidential"; $a = [System.Collections.ArrayList]($cc.Fingerprints); $a; $a.RemoveAt(0); Set-DataClassification $cc.Identity -FingerPrints $a
```

## Detailed Description
<a name="DetailedDescription"> </a>

Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.ClassificationDefinitions.DataClassificationIdParameter  <br/> | The _Identity_ parameter specifies the data classification rule that you want to modify. You can use any value that uniquely identifies the data classification rule. For example: <br/>  Name <br/> **LocalizedName** <br/> **Identity** GUID value <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The _Description_ parameter specifies a description for the data classification rule. You use the _Description_ parameter with the _Locale_ and _Name_ parameters to specify descriptions for the data classification rule in different languages. The localized values of _Description_ appear in the **AllLocalizedDescriptions** property of the data classification rule. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Fingerprints_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The _Fingerprints_ parameter specifies the byte-encoded document files that are used as fingerprints by the data classification rule. For instructions on how to import documents to use as templates for fingerprints, see[New-Fingerprint](new-fingerprint.md) or the[Examples](new-dataclassification.md#Examples) section. For instructions on how to add and remove document fingerprints from an existing data classification rule, see the[Examples](new-dataclassification.md#Examples) section. <br/> |
| _IsDefault_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IsDefault_ switch is used with the _Locale_ parameter to specify the default language for the data classification rule. The default _Locale_ value is stored in the **DefaultCulture** property. <br/> When you change the default _Locale_ value, the _Name_ value of the data classification rule changes to match the _Name_ value that's associated with the new default locale. The original _Name_ value when the rule was created is permanently stored the **LocalizedName** property. <br/> |
| _Locale_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The _Locale_ parameter adds or removes languages that are associated with the data classification rule. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> Typically, you use the _Locale_ parameter with the _Name_ and _Description_ parameters to add or remove translated names and descriptions for the data classification rule. You can also use the _Locale_ parameter with the _IsDefault_ switch to designate an existing translated name and description as the default. Before you can remove the default translation, you need to set another translation as the default. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the data classification rule. The value must be less than 256 characters. <br/> You use the _Name_ parameter with the _Locale_ and _Description_ parameters to specify names for the data classification rule in different languages. The localized values of _Name_ appear in the **AllLocalizedNames** property of the data classification rule. <br/> The value of the _Name_ parameter is used in the Policy Tip that's presented to users in Outlook on the web. When a translated value of the _Name_ parameter matches the client's language, the Policy Tip is displayed in the client's language. If no translated values of the _Name_ parameter match the client's language, the default translation that's specified by the _IsDefault_ parameter is used for the Policy Tip. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

