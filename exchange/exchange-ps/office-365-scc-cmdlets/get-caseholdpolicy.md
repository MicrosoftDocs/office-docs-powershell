---
title: "Get-CaseHoldPolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 11/1/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: ea8d4be5-bb31-4db3-a49e-08861561f402
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-CaseHoldPolicy

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-CaseHoldPolicy** to view existing case hold policies in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-CaseHoldPolicy [-Identity <PolicyIdParameter>] [-Case <String>] [-DistributionDetail <SwitchParameter>] [-IncludeBindings <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays detailed information for the policy that's associated with the eDiscovery case named Contoso Legal.
  
```
Get-CaseHoldPolicy -Case "Contoso Legal"
```

### Example 2

This example displays detailed information for the policy named "Regulation 123 Compliance".
  
```
Get-CaseHoldPolicy -Identity "Regulation 123 Compliance"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Case_ <br/> |Optional  <br/> |System.String  <br/> | The _Case_ parameter specifies the case hold policy that you want to view by using the eDiscovery case that's associated with the policy. You can use the following values to identify the eDiscovery case: <br/>  Name <br/>  Identity (GUID value). <br/>  You can find these values by running the command: `Get-ComplianceCase | Format-Table -Auto Name,Status,Identity`.  <br/> |
| _DistributionDetail_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _DistributionDetail_ switch returns detailed policy distribution information in the **DistributionResults** property. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_ parameter specifies the case hold policy that you want to view. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _IncludeBindings_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |PARAMVALUE: SwitchParameter  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

