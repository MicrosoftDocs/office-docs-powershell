---
title: "Get-RMSTemplate"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 4a5066e8-b770-4aa2-b464-0d2190914f71
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-RMSTemplate

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-RMSTemplate** cmdlet to retrieve the current list of active rights policy templates from the Active Directory Rights Management Services (AD RMS) deployment for the organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RMSTemplate [-DomainController <Fqdn>] [-Identity <RmsTemplateIdParameter>] [-ResultSize <Unlimited>] [-TrustedPublishingDomain <RmsTrustedPublishingDomainIdParameter>] [-Type <Archived | Distributed | All>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves all RMS templates available from the RMS deployment.
  
```
Get-RMSTemplate -ResultSize unlimited
```

### Example 2

This example retrieves the Company Confidential RMS template.
  
```
Get-RMSTemplate -Identity "Company Confidential"
```

## Detailed Description
<a name="DetailedDescription"> </a>

> [!NOTE]
> The **Get-RMSTemplate** cmdlet doesn't return any active rights policy templates if internal licensing isn't enabled. Use the[Get-IRMConfiguration](get-irmconfiguration.md) cmdlet to check the _InternalLicensingEnabled_ parameter.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTemplateIdParameter  <br/> |The _Identity_ parameter specifies the name of the RMS template. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _TrustedPublishingDomain_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RmsTrustedPublishingDomainIdParameter  <br/> | This parameter is available only in the cloud-based service. <br/>  The _TrustedPublishingDomain_ parameter specifies the trusted publishing domain you want to search for RMS templates. You can use any value that uniquely identifies the trusted publishing domain, for example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Type_ <br/> |Optional  <br/> |Microsoft.Exchange.Security.RightsManagement.RmsTemplateType  <br/> | This parameter is available only in the cloud-based service. <br/>  The _Type_ parameter specifies the type of RMS template. Use one of the following values: <br/>  `All` <br/>  `Archived` <br/>  `Distributed` <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

