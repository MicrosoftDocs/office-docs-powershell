---
title: "Get-Subscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: a9c74996-557b-4437-9aeb-658449d4d012
description: "This cmdlet is available only in the cloud-based service."
---

# Get-Subscription

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-Subscription** cmdlet to view the properties of an existing subscription configured in a user's cloud-based mailbox. This cmdlet is used by Microsoft Outlook on the web Options to display the list of email subscriptions that the end user has, such as POP, IMAP, Facebook, and LinkedIn.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-Subscription [-Identity <AggregationSubscriptionIdParameter>] [-IncludeReport <SwitchParameter>] [-Mailbox <MailboxIdParameter>] [-AggregationType <Aggregation | Mirrored | Migration | PeopleConnection | All>] [-Confirm [<SwitchParameter>]] [-ResultSize <Unlimited>] [-SubscriptionType <Unknown | Pop | DeltaSyncMail | IMAP | AllEMail | Facebook | LinkedIn | SinaWeibo | Google | Yahoo | Twitter | Skype | AbchType | AllThatSupportSendAs | AllThatSupportPolicyInducedDeletion | AllThatSupportSendAsAndPeopleConnect | All>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all the subscriptions configured in the mailbox of the user Ayla Kol.
  
```
Get-Subscription -Mailbox "Ayla Kol"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can view the properties of the subscription, such as the remote server, authentication method, connection status, and the last time a successful synchronization occurred.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AggregationType_ <br/> |Optional  <br/> |Microsoft.Exchange.Transport.Sync.Common.Subscription.Pim.AggregationType  <br/> | The _AggregationType_ parameter filters the results by type. The acceptable values for this parameter are: <br/>  `All` <br/>  `Aggregation` <br/>  `Migration` <br/>  `Mirrored` <br/>  `PeopleConnection` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AggregationSubscriptionIdParameter  <br/> | The _Identity_ parameter specifies the subscription. You can identify the subscription by using one of the following methods: <br/>  Specify the globally unique identifier of the subscription, which is its canonical name (CN). <br/>  Use the _Mailbox_ parameter to specify the mailbox that contains the subscription, and then specify the name of the subscription. <br/>  You can find the identifying values for a subscription, such as _Identity_ and _Name_, by running this command:  `Get-Subscription -Mailbox <mailbox>`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the cloud-based mailbox that contains the subscription. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SubscriptionType_ <br/> |Optional  <br/> |Microsoft.Exchange.Transport.Sync.Common.Subscription.AggregationSubscriptionType  <br/> | The _SubscriptionType_ parameter filters the results based on the type of subscription. Valid values for this parameter are: <br/>  `All` <br/>  `AllEmail` <br/>  `AllThatSupportPolicyInducedDeletion` <br/>  `AllThatSupportSendAs` <br/>  `AllThatSupportSendAsAndPeopleConnect` <br/>  `DeltaSyncMail` <br/>  `Facebook` <br/>  `IMAP` <br/>  `LinkedIn` <br/>  `Pop` <br/>  `Unknown` <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

