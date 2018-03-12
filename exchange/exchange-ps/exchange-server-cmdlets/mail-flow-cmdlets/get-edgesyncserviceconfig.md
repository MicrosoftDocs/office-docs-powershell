---
title: "Get-EdgeSyncServiceConfig"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0864f701-484d-4a57-9291-ea63e25c1f1b
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-EdgeSyncServiceConfig

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-EdgeSyncServiceConfig** cmdlet to retrieve the edge synchronization services settings that control the general synchronization behavior shared by all Microsoft Exchange EdgeSync services.
  
```
Get-EdgeSyncServiceConfig [-Identity <EdgeSyncServiceConfigIdParameter>] [-DomainController <Fqdn>] [-Site <AdSiteIdParameter>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example reads the configuration of the Microsoft Exchange EdgeSync service settings named Primary EdgeSync Settings from Active Directory and displays all its properties in a list format.
  
```
Get-EdgeSyncServiceConfig "Primary EdgeSync Settings" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.EdgeSyncServiceConfigIdParameter  <br/> |The _Identity_ parameter specifies the name of the Microsoft Exchange EdgeSync service configuration you want to view. <br/> |
| _Site_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AdSiteIdParameter  <br/> |The _Site_ parameter specifies the Active Directory site that EdgeSync connects to for synchronizing configuration and recipient data. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

