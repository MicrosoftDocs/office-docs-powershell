---
title: "Get-ActiveSyncDeviceAutoblockThreshold"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1dc9974b-de67-47d2-a177-c358c9fe366b
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ActiveSyncDeviceAutoblockThreshold

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ActiveSyncDeviceAutoblockThreshold** cmdlet to obtain the Autoblock settings for Microsoft Exchange ActiveSync mobile devices..
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ActiveSyncDeviceAutoblockThreshold [-Identity <ActiveSyncDeviceAutoblockThresholdIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the threshold settings for the Autoblock threshold rule for UserAgentChanges.
  
```
Get-ActiveSyncDeviceAutoblockThreshold -Identity "UserAgentChanges"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Microsoft Exchange and Exchange ActiveSync have the capability to block Exchange ActiveSync mobile devices if these devices display any of a defined list of behaviors that have the capability to cause issues with the server. The **Get-ActiveSyncDeviceAutoblockThreshold** cmdlet returns the settings for the requested threshold rule.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ActiveSyncDeviceAutoblockThresholdIdParameter  <br/> |The _Identity_ parameter specifies the name of the Autoblock threshold rule. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

