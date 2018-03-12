---
title: "Get-DlpSensitiveInformationType"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 8/31/2015
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 2ac12437-1463-45e1-9da5-f306ae07e1af
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-DlpSensitiveInformationType

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-DlpSensitiveInformationType** cmdlet to list the sensitive information types that are defined for your organization in the Security &amp; Compliance Center. Sensitive information types are used by Data Loss Prevention (DLP) rules to check for sensitive information such as social security, passport, or credit card numbers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DlpSensitiveInformationType [-Identity <SensitiveInformationTypeIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all the sensitive information types defined for your organization.
  
```
Get-DlpSensitiveInformationType
```

### Example 2

This example lists all the properties of the sensitive information type named "Credit Card Number".
  
```
Get-DlpSensitiveInformationType -Identity "Credit Card Number" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **RecommendedConfidence** property of the returned objects contains a value that represents the default (or recommended) confidence level that should be used with the corresponding sensitive information type.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.SensitiveInformationTypeIdParameter  <br/> | The _Identity_ parameter specifies the sensitive information type that you want to view. Valid values are: <br/>  Name <br/>  Id (GUID value) <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

