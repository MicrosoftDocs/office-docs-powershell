---
title: "Get-ServerComponentState"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: da7214fe-c641-4c6a-a479-df95a4136929
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ServerComponentState

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ServerComponentState** cmdlet to retrieve configuration settings for Microsoft Exchange components and endpoints.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ServerComponentState -Identity <ServerIdParameter> [-Component <String>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all component and endpoint states on the server named Mailbox01.
  
```
Get-ServerComponentState -Identity Mailbox01
```

### Example 2

This example returns detailed information for the component state of the Unified Messaging component on the server named Mailbox01.
  
```
Get-ServerComponentState -Identity Mailbox01 -Component UnifiedMessaging | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Identity_ parameter specifies the Exchange server where you want to view the configuration settings. You can use the following values: <br/>  Name <br/>  Distinguished name (DN) <br/>  FQDN <br/> |
| _Component_ <br/> |Optional  <br/> |System.String  <br/> |The _Component_ parameter specifies the component or endpoint for which you want to retrieve the state. To see the available values, run the following command: `Get-ServerComponentState <ServerName>`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

