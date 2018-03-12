---
title: "Get-DlpSensitiveInformationTypeRulePackage"
ms.author: chrisda
author: chrisda
ms.date: 6/30/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 18453823-70f8-409d-a165-0581b796895c
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-DlpSensitiveInformationTypeRulePackage

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **Get-DlpSensitiveInformationTypeConfig** cmdlet to view data loss prevention (DLP) sensitive information type rule packages in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DlpSensitiveInformationTypeRulePackage [-Identity <SensitiveInformationTypeRuleCollectionIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all sensitive information type rule packages in the organization.
  
```
Get-DlpSensitiveInformationTypeRulePackage
```

### Example 2

This example returns detailed information for the sensitive information type rule package named Microsoft Rule Package.
  
```
Get-DlpSensitiveInformationTypeRulePackage - Identity "Microsoft Rule Package" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Sensitive information type rule packages are used by DLP to detect sensitive content. The default sensitive information type rule package is named Microsoft Rule Package.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.SensitiveInformationTypeRuleCollectionIdParameter  <br/> | The _Identity_parameter specifies the sensitive information type rule package that you want to view. You can use any value that uniquely identifies the rule package. For example:  <br/> **RuleCollectionName** <br/> **LocalizedName** <br/>  GUID (from the **Identity** value) <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

