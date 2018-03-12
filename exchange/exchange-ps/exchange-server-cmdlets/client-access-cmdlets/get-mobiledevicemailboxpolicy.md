---
title: "Get-MobileDeviceMailboxPolicy"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5f0564eb-0219-4b4e-a400-8a771fb3f002
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MobileDeviceMailboxPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MobileDeviceMailboxPolicy** cmdlet to retrieve the Mobile Device mailbox policy settings for a specific Mobile Device mailbox policy.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MobileDeviceMailboxPolicy [-Identity <MailboxPolicyIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the policy settings for the Mobile Device mailbox policy SalesPolicy.
  
```
Get-MobileDeviceMailboxPolicy -Identity "SalesPolicy"
```

### Example 2

This example returns the policy settings for the Mobile Device mailbox policy Default.
  
```
Get-MobileDeviceMailboxPolicy -Identity "Default"
```

## Detailed Description
<a name="DetailedDescription"> </a>

A Mobile Device mailbox policy is a group of settings that specifies how mobile devices enabled for Exchange ActiveSync connect to the computer running Exchange. Exchange supports multiple Mobile Device mailbox policies. The **Get-MobileDeviceMailboxPolicy** cmdlet displays all the policy settings for the specified policy. These settings include password settings, file access settings, and attachment settings.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The _Identity_ parameter specifies the policy name. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

