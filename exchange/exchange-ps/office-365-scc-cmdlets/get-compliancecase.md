---
title: "Get-ComplianceCase"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 11/1/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 899cba6c-7709-4861-8f5f-e1c9d614d5c5
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-ComplianceCase

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Get-ComplianceCase** cmdlet to view eDiscovery cases in the Security &amp; Compliance Center. You use eDiscovery cases to control who can create, access, and manage compliance searches in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ComplianceCase [-Identity <ComplianceCaseIdParameter>] [-DomainController <Fqdn>] [-RoleGroup <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all eDiscovery cases in the organization.
  
```
Get-ComplianceCase
```

### Example 2

This example returns detailed information for the eDiscovery case named Contoso Legal.
  
```
Get-ComplianceCase -Identity "Contoso Legal" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.ComplianceCase.Tasks.ComplianceCaseIdParameter  <br/> | The _Identity_parameter specifies the eDiscovery case that you want to view. You can use any value that uniquely identifies the eDiscovery case. For example:  <br/>  Name <br/>  Identity (GUID value) <br/> |
| _RoleGroup_ <br/> |Optional  <br/> |System.String  <br/> |PARAMVALUE: String  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

