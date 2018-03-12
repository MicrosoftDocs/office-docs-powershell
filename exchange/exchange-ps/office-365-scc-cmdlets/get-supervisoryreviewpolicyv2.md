---
title: "Get-SupervisoryReviewPolicyV2"
ms.author: chrisda
author: chrisda
ms.date: 3/4/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: ce966c7e-a0ba-4c7b-afc7-d9a0a7f3f831
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-SupervisoryReviewPolicyV2

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **Get-SupervisoryReviewPolicyV2** cmdlet to view supervisory review policies in the Office 365 Security &amp; Compliance Center. Supervisory review lets you define policies that capture communications in your organization so they can be examined by internal or external reviewers.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-SupervisoryReviewPolicyV2 [-Identity <PolicyIdParameter>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all supervisory review policies.
  
```
Get-SupervisoryReviewPolicyV2
```

### Example 2

This example returns detailed information for the supervisory review policy named EU Brokers Policy.
  
```
Get-SupervisoryReviewPolicyV2 -Identity "EU Brokers Policy" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_parameter specifies the supervisory review policy that you want to view. You can use any value that uniquely identifies the policy. For example:  <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

