---
title: "Get-MailboxServer"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 838bc72a-e3bb-4583-934f-d93a7c93252c
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-MailboxServer

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-MailboxServer** cmdlet to view information about Mailbox servers in your organization.
  
```
Get-MailboxServer [-Identity <MailboxServerIdParameter>] [-DomainController <Fqdn>] [-Status <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all the Mailbox servers in the organization.
  
```
Get-MailboxServer
```

### Example 2

This example returns detailed information about the Mailbox server named Server1.
  
```
Get-MailboxServer -Identity Server1 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **ExchangeVersion** attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange admin center when you select **Server Configuration**.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxServerIdParameter  <br/> | The _Identity_ parameter specifies the Mailbox server that you want to view. You can use any value that uniquely identifies the Mailbox server. For example: <br/>  Name <br/>  GUID <br/>  Distinguished name (DN) <br/> |
| _Status_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Status_ switch specifies whether to include additional property values in the results, for example, the **Locale** value. You don't need to specify a value with this switch. <br/> To see the additional values, you need to pipe the output to a formatting cmdlet, for example, the **Format-List** cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

