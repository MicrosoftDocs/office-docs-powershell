---
title: "Get-AuthRedirect"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 531fc365-3b67-4fd8-abd2-d9795c82decb
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-AuthRedirect

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-AuthRedirect** cmdlet to view OAuth redirection objects that are used for legacy Microsoft Exchange 2010 Client Access servers in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-AuthRedirect [-Identity <AuthRedirectIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows a summary list of all the OAuth redirection objects.
  
```
Get-AuthRedirect
```

### Example 2

This example shows detailed information about the OAuth redirection object named  `AuthRedirect-Bearer-C0B7AC3F-FE64-4B4B-A907-9226F8027CCE`
  
```
Get-AuthRedirect AuthRedirect-Bearer-C0B7AC3F-FE64-4B4B-A907-9226F8027CCE | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

Exchange 2010 Client Access servers don't support OAuth authentication requests. OAuth redirection objects redirect OAuth authentication requests to Exchange servers that are running later versions of Exchange. This cmdlet is only useful if your organization has Exchange 2010 Client Access servers.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AuthRedirectIdParameter  <br/> |The _Identity_ parameter specifies the existing OAuth redirection object that you want to view. The object name uses the syntax `AuthRedirect-Bearer-<GUID>`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

