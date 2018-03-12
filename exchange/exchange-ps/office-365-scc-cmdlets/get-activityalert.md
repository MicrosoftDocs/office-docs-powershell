---
title: "Get-ActivityAlert"
ms.author: chrisda
author: chrisda
ms.date: 8/10/2016
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 3ae133df-cd0e-4782-b41a-973ca9578776
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-ActivityAlert

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **Get-ActivityAlert** cmdlet to view activity alerts in the Security &amp; Compliance Center. Activity alerts send you email notifications when users perform specific activities in Office 365.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-ActivityAlert [-Identity <ComplianceRuleIdParameter>] [-DomainController <Fqdn>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all activity alerts.
  
```
Get-ActivityAlert | Format-List Disabled,Name,Description,Operation,UserId,NotifyUser
```

### Example 2

This example returns detailed information about the activity alert named All Mailbox Activities.
  
```
Get-ActivityAlert -Identity "All Mailbox Activities"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_ parameter specifies the activity alert that you want to view. You can use any value that uniquely identifies the activity alert. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

