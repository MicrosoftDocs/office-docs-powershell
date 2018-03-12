---
title: "Get-RMSTrustedPublishingDomain"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 3/31/2016
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 69499195-f08f-41bd-b0ed-443688410b12
description: "This cmdlet is available only in the cloud-based service."
---

# Get-RMSTrustedPublishingDomain

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-RMSTrustedPublishingDomain** cmdlet to view the settings of an existing trusted publishing domain (TPD) in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RMSTrustedPublishingDomain [-Default <SwitchParameter>] [-DomainController <Fqdn>] [-Identity <RmsTrustedPublishingDomainIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all the trusted publishing domains that are configured in your organization and shows detailed information for each trusted publishing domain.
  
```
Get-RMSTrustedPublishingDomain | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

A trusted publishing domain contains the settings needed to use RMS features in your organization. For example, users can apply RMS templates to email messages.
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Default_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Default_ switch filters the results by the default trusted publishing domain. The default trusted publishing domain displays RMS templates and provides rights protection to all new content. There can be only one default trusted publishing domain in an organization. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTrustedPublishingDomainIdParameter  <br/> | The _Identity_ parameter specifies the trusted publishing domain. You can use any value that uniquely identifies the trusted publishing domain, for example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

