---
title: "Get-DlpComplianceRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 3/24/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: fd3d6c2f-618b-4a01-9d52-344f7a89daac
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-DlpComplianceRule

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-DlpComplianceRule** to view Data Loss Prevention (DLP) rules in the Security &amp; Compliance Center. DLP rules identify and protect sensitive information.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-DlpComplianceRule [-Identity <ComplianceRuleIdParameter>] [-DomainController <Fqdn>] [-Policy <PolicyIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays summary information for all DLP rules in the Security &amp; Compliance Center.
  
```
Get-DlpComplianceRule
```

### Example 2

This example displays detailed information for the DLP rule named "PII SS# Custom".
  
```
Get-DlpComplianceRule -Identity "PII SS# Custom" | Format-List
```

### Example 3

This example lists all the rules included in the DLP compliance policy named "PII Limited".
  
```
Get-DlpComplianceRule -Policy "PII Limited"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_ parameter specifies the DLP rule that you want to view. You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Id <br/> |
| _Policy_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Policy_ parameter specifies the DLP policy that contains the rules. Using this parameter returns all rules that are assigned to the specified policy. Valid input for this parameter is any value that uniquely identifies the policy. For example <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Id <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

