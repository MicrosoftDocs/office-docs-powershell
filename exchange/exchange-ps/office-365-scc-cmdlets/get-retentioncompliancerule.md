---
title: "Get-RetentionComplianceRule"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 9eabf25a-8519-4c40-8977-b1d46e6acb3e
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-RetentionComplianceRule

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **Get-RetentionComplianceRule** to view retention rules in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-RetentionComplianceRule [-Identity <ComplianceRuleIdParameter>] [-Policy <PolicyIdParameter>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays summary information for all retention rules in your organization.
  
```
Get-RetentionComplianceRule
```

### Example 2

This example displays detailed information for the retention rule named "30 Day Rule".
  
```
Get-RetentionComplianceRule -Identity "30DayRule" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

This list describes the properties that are displayed by default in the summary information.
  
- **Name**: The unique name of the rule.
    
- **Disabled**: The enabled or disabled status of the rule.
    
- **Mode**: The current operating mode of the rule (for example, `Enforce`).
    
- **Comment**: An administrative comment.
    
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_ parameter specifies the retention rule you want to view. You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Policy_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Policy_ parameter filters the retention rule results by the associated retention policy. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You can use this parameter with the _Identity_ parameter in the same command. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

