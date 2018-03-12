---
title: "New-DataClassification"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3c1e90e7-cf49-4a8b-a0c4-c189ab8ab166
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-DataClassification

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-DataClassification** cmdlet to create data classification rules that use document fingerprints.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-DataClassification -Description <String> -Fingerprints <MultiValuedProperty> -Name <String> [-ClassificationRuleCollectionIdentity <ClassificationRuleCollectionIdParameter>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Locale <CultureInfo>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new data classification rule named "Contoso Employee-Customer Confidential" that uses the document fingerprints of the files C:\My Documents\Contoso Employee Template.docx and D:\Data\Contoso Customer Template.docx.
  
```
$Employee_Template = Get-Content "C:\My Documents\Contoso Employee Template.docx" -Encoding byte; $Employee_Fingerprint = New-Fingerprint -FileData $Employee_Template -Description "Contoso Employee Template"; $Customer_Template = Get-Content "D:\Data\Contoso Customer Template.docx" -Encoding byte; $Customer_Fingerprint = New-Fingerprint -FileData $Customer_Template -Description "Contoso Customer Template"; New-DataClassification -Name "Contoso Employee-Customer Confidential" -Fingerprints $Employee_Fingerprint,$Customer_Fingerprint -Description "Message contains Contoso employee or customer information."
```

## Detailed Description
<a name="DetailedDescription"> </a>

Classification rule packages are used by data loss prevention (DLP) to detect sensitive content in messages.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Description_ <br/> |Required  <br/> |System.String  <br/> |The  _Description_ parameter specifies a description for the data classification rule. <br/> |
| _Fingerprints_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Fingerprints_ parameter specifies the byte-encoded files to use as document fingerprints. You can use multiple document fingerprints separated by commas. For instructions on how to import documents to use as templates for fingerprints, see[New-Fingerprint](new-fingerprint.md) or the[Examples](new-dataclassification.md#Examples) section. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies a name for the data classification rule. The value must be less than 256 characters. <br/> The value of this parameter is used in the Policy Tip that's presented to users in Outlook on the web.  <br/> |
| _ClassificationRuleCollectionIdentity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.ClassificationDefinitions.ClassificationRuleCollectionIdParameter  <br/> |The  _ClassificationRuleCollectionIdentity_ parameter is reserved for future use. <br/> New data classification rules that you create are automatically added to the classification rule collection named Fingerprint Classification Collection.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Locale_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _Locale_ parameter specifies the language that's associated with the data classification rule. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> You can add additional language translations to the data classification rule by using the **Set-DataClassification** cmdlet. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

