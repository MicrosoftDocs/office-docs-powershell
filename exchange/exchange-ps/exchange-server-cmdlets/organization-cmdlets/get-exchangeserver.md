---
title: "Get-ExchangeServer"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 96543903-10fa-46fe-9ea0-90570ca0ad2e
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ExchangeServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ExchangeServer** cmdlet to view the properties of Exchange servers.
  
> [!NOTE]
> When you run the **Get-ExchangeServer** cmdlet with no parameters, it returns the attributes of all the servers in the Exchange organization. To return specific server properties (including domain controller information) where the **Get-ExchangeServer** cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the _Status_ parameter.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ExchangeServer [-Identity <ServerIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all the Exchange servers in the organization.
  
```
Get-ExchangeServer | Format-List
```

### Example 2

This example returns detailed information about the Exchange server named Mailbox01.
  
```
Get-ExchangeServer -Identity Mailbox01 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **ExchangeVersion** attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Exchange displayed in the Exchange admin center when you select **Server Configuration**.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Domain_ <br/> |Required  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _Domain_ parameter filters the results by the fully qualified domain name (FQDN) of the domain (for example, contoso.com). <br/> You can't use this parameter with the _Identity_ parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Identity_ parameter specifies the Exchange server that you want to view. You can use any value that uniquely identifies the Exchange server. For example: <br/>  Name <br/>  GUID <br/>  Distinguished name (DN) <br/> **ExchangeLegacyDN** <br/>  You can't use this parameter with the _Domain_ parameter. <br/> |
| _Status_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Status_ switch specifies whether to include additional property values in the results, for example, the Watson state, **StaticDomainControllers**, and runtime domain controller usage. You don't need to specify a value with this switch. <br/> To see the additional values, you need to pipe the output to a formatting cmdlet, for example, the **Format-List** cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

