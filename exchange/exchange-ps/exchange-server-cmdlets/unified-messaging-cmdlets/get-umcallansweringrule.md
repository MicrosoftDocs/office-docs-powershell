---
title: "Get-UMCallAnsweringRule"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a6e08530-97b8-4a27-b84f-d362f274ce37
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UMCallAnsweringRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UMCallAnsweringRule** cmdlet to view the properties of a Unified Messaging (UM) call answering rule that has been created within a UM-enabled mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UMCallAnsweringRule [-Identity <UMCallAnsweringRuleIdParameter>] [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a formatted list of call answering rules in a user's UM-enabled mailbox.
  
```
Get-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith | Format-List
```

### Example 2

This example displays the properties of the call answering rule MyUMCallAnsweringRule.
  
```
Get-UMCallAnsweringRule -Identity MyUMCallAnsweringRule
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-UMCallAnsweringRule** cmdlet enables you to view the properties of a call answering rule that has been created in a UM-enabled user's mailbox. It allows you to retrieve the properties for a single call answering rule or a list of call answering rules in a UM-enabled user's mailbox.
  
After this task is completed, the cmdlet returns the parameters and the values specified.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UMCallAnsweringRuleIdParameter  <br/> |The _Identity_ parameter specifies the identifier for a call answering rule being viewed. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The _Mailbox_ parameter specifies the UM-enabled mailbox that contains the UM call answering rule. The default is the user's mailbox running the cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

