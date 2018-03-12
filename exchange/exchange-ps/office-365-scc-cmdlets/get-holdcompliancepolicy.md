---
title: "Get-HoldCompliancePolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: e408a718-5b70-43e2-bca4-7645df4bc83a
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-HoldCompliancePolicy

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-HoldCompliancePolicy** to view existing preservation policies in the Security &amp; Compliance Center.
  
> [!NOTE]
> The **Get-HoldCompliancePolicy** cmdlet has been replaced by the **Get-RetentionCompliancePolicy** cmdlet. If you have any scripts that use the **Get-HoldCompliancePolicy** cmdlet, update them to use the **Get-RetentionCompliancePolicy** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-HoldCompliancePolicy [-Identity <PolicyIdParameter>] [-DistributionDetail <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays summary information for all preservation policies in your organization.
  
```
Get-HoldCompliancePolicy
```

### Example 2

This example displays detailed information for the policy named "Regulation 123 Compliance".
  
```
Get-HoldCompliancePolicy -Identity "Regulation 123 Compliance" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

This list describes the properties displayed by default.
  
- **Name**: The unique name of the policy.
    
- **Workload**: Where the policy is applied. For example, SharePoint or Exchange.
    
- **Enabled**: The value `True` means the policy is enabled.
    
- **Mode**: The current operating mode of the policy. The possible values are `Test` (the content is tested, but no rules are enforced), `AuditandNotify` (when content matches the conditions specified by the policy, the rule is not enforced, but notification emails are sent) or `Enforce` (all aspects of the policy are enabled and enforced).
    
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DistributionDetail_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _DistributionDetail_ switch returns detailed policy distribution information in the **DistributionResults** property. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_ parameter specifies the preservation policy that you want to view. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

