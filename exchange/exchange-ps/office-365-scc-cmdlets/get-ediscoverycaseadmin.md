---
title: "Get-eDiscoveryCaseAdmin"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 5/23/2016
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 08a3674b-9f9d-4633-82bf-9b78d2a18ae6
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Get-eDiscoveryCaseAdmin

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **Get-eDiscoveryCaseAdmin** cmdlet to view eDiscovery Administrators in the Security &amp; Compliance Center. An eDiscovery Administrator is member of the eDiscovery Manager role group who can also view and access all eDiscovery cases in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-eDiscoveryCaseAdmin [-DomainController <Fqdn>] [-ResultSize <Unlimited>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all eDiscovery Administrators.
  
```
Get-eDiscoveryCaseAdmin
```

## Detailed Description
<a name="DetailedDescription"> </a>

To add or remove individual eDiscovery Administrators, use the **Add-eDiscoveryCaseAdmin** and **Remove-eDiscoveryCaseAdmin** cmdlets. To replace all existing eDiscovery Administrators, use the **Update-eDiscoveryCaseAdmin** cmdlet.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

