---
title: "Get-TransportConfig"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 8f54a77c-7a5c-446f-b661-022c7e53f5c0
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-TransportConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-TransportConfig** cmdlet to view organization-wide transport configuration settings.
  
```
Get-TransportConfig [-Identity <OrganizationIdParameter>] [-DomainController <Fqdn>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists the organization-wide transport settings on Mailbox server, or the local transport settings on an Edge Transport server.
  
```
Get-TransportConfig
```

### Example 2

This example lists all delivery status notification-related (DSN) configuration settings for your organization when run on a Mailbox server. When run on an Edge Transport server, it displays the DSN-related settings configured on that Edge Transport server.
  
```
Get-TransportConfig | Format-List *DSN*
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-TransportConfig** cmdlet displays configuration information for global transport settings applied across the organization when the cmdlet is run on a Mailbox server. When this cmdlet is run on an Edge Transport server, only the transportation configuration settings for the local computer are shown.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

