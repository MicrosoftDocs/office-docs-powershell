---
title: "Get-ResubmitRequest"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0233fee8-f61b-4ccd-9793-ecf6743abc3e
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ResubmitRequest

This cmdlet is available only in on-premises Exchange.
  
Use the **Get-ResubmitRequest** cmdlet to view requests to replay redundant copies of messages from Safety Net after a mailbox database recovery.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-ResubmitRequest [-Identity <ResubmitRequestIdentityParameter>] [-Server <ServerIdParameter>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the details of all resubmit requests.
  
```
Get-ResubmitRequest
```

### Example 2

This example returns details about the resubmit request with the identity 1.
  
```
Get-ResubmitRequest 1
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ResubmitRequestIdentityParameter  <br/> |The _Identity_ parameter specifies the resubmit request you want to view. Each resubmit request is identified by an incremented integer value. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  

