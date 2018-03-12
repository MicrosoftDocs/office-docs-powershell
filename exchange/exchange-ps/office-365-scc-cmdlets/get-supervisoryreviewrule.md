---
title: "Get-SupervisoryReviewRule"
ms.author: chrisda
author: chrisda
ms.date: 3/4/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: ea53db29-829e-4a5d-9874-a0e135a26720
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-SupervisoryReviewRule

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **Get-SupervisoryReviewRule** cmdlet to modify supervisory review rules in the Office 365 Security &amp; Compliance Center. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-SupervisoryReviewRule [-Identity <ComplianceRuleIdParameter>] [-Policy <PolicyIdParameter>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all supervisory review rules.
  
```
Get-SupervisoryReviewRule
```

### Example 2

This example returns detailed information for the supervisory review rule named EU Brokers Rule.
  
```
Get-SupervisoryReviewRule -Identity "EU Brokers Rule" | Format-List
```

### Example 3

This example returns the rule that assigned to the supervisory review policy named EU Brokers Policy.
  
```
Get-SupervisoryReviewRule -Policy "EU Brokers Policy"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_parameter specifies the supervisory review rule that you want to view. You can use any value that uniquely identifies the rule. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Policy_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Policy_parameter filters the results by supervisory review policy that's assigned to the rule. You can use any value that uniquely identifies the policy. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

