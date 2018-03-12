---
title: "Get-ReceiveConnector"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 6801411c-6faf-449f-aa8b-f4c105791d89
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ReceiveConnector

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ReceiveConnector** cmdlet to view Receive connectors on Mailbox servers and Edge Transport servers. Receive connectors listen for inbound SMTP connections on the Exchange server.
  
```
Get-ReceiveConnector [-Identity <ReceiveConnectorIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 2

This example returns a summary list of all Receive connectors on the server named Exchange01.
  
```
Get-ReceiveConnector -Server Exchange01
```

### Example 1

This example displays detailed information for the Receive connector named Receive Connector for Contoso.com on the local server.
  
```
Get-ReceiveConnector -Identity "Receive Connector for Contoso.com" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can view Receive connectors on Mailbox servers and Edge Transport servers.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ReceiveConnectorIdParameter  <br/> | The _Identity_ parameter specifies the Receive connector that you want to view. You can use any value that uniquely identifies the Receive connector. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> _\<ServerName\>_\ _\<Name\>_ <br/>  You can't use this parameter with the _Server_ parameter. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_parameter filters the results by the specified Mailbox server or Edge Transport server. You can use any value that uniquely identifies the server. For example:  <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  You can't use this parameter with the _Identity_ parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

