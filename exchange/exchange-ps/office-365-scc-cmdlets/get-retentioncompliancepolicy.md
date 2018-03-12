---
title: "Get-RetentionCompliancePolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: e9f861b8-481a-49e0-884d-6617ff9852a1
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-RetentionCompliancePolicy

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-RetentionCompliancePolicy** to view existing retention policies in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RetentionCompliancePolicy [-Identity <PolicyIdParameter>] [-DistributionDetail <SwitchParameter>] [-RetentionRuleTypes <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays summary information for all retention policies in your organization.
  
```
Get-RetentionCompliancePolicy
```

### Example 2

This example displays detailed information for the policy named "Regulation 123 Compliance", including accurate values for the **DistributionStatus** and **\*Location** properties.
  
```
Get-RetentionCompliancePolicy -Identity "Regulation 123 Compliance" -DistributionDetail | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

This list describes the properties that are displayed by default.
  
- **Name**: The unique name of the policy.
    
- **Workload**: Where the policy is applied. For example, SharePoint or Exchange.
    
- **Enabled**: The value `True` means the policy is enabled.
    
- **Mode**: The current operating mode of the policy. The possible values are `Test` (the content is tested, but no rules are enforced), `AuditandNotify` (when content matches the conditions specified by the policy, the rule is not enforced, but notification emails are sent) or `Enforce` (all aspects of the policy are enabled and enforced).
    
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DistributionDetail_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _DistributionDetail_ switch returns detailed policy distribution information in the **DistributionResults** property. You don't need to specify a value with this switch. <br/> If you don't use this switch, the values of the **DistributionStatus** and **\*Location** property values will be inaccurate. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_ parameter specifies the retention policy that you want to view. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _RetentionRuleTypes_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _RetentionRuleTypes_switch specifies whether to return the value of the **RetentionRuleTypes** property in the results. You don't need to specify a value with this switch. <br/> To see the **RetentionRuleTypes** property, you need to pipe the command to a formatting cmdlet. For example, `Get-RetentionCompliancePolicy -RetentionRuleTypes | Format-Table -Auto Name,RetentionRuleTypes`. If you don't use the  _RetentionRuleTypes_ switch, the value appears blank. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

