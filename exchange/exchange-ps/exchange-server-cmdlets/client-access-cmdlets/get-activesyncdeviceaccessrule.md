---
title: "Get-ActiveSyncDeviceAccessRule"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f9bcb8d8-1239-43b8-9885-b655cbe8b4bc
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ActiveSyncDeviceAccessRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ActiveSyncDeviceAccessRule** cmdlet to retrieve an access group of Exchange mobile devices along with their access level.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ActiveSyncDeviceAccessRule [-Identity <ActiveSyncDeviceAccessRuleIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all the rules currently blocking mobile phones.
  
```
Get-ActiveSyncDeviceAccessRule | where {$_.AccessLevel -eq 'Block'}
```

### Example 2

This example lists all device access rules set up on the server.
  
```
Get-ActiveSyncDeviceAccessRule | Format-List Characteristic, QueryString, AccessLevel
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can create multiple groups of devices: allowed devices, blocked devices, and quarantined devices with the **New-ActiveSyncDeviceAccessRule** cmdlet. The **Get-ActiveSyncDeviceAccessRule** cmdlet retrieves the settings for any existing group.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ActiveSyncDeviceAccessRuleIdParameter  <br/> |The _Identity_ parameter specifies the unique identifier for the device access rule. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

