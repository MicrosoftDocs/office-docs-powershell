---
title: "Get-PopSubscription"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 961266ab-21f2-4410-896b-9ede09ba20cd
description: "This cmdlet is available only in the cloud-based service."
---

# Get-PopSubscription

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-PopSubscription** cmdlet to view information about POP subscriptions configured in cloud-based mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-PopSubscription [-Identity <AggregationSubscriptionIdParameter>] [-IncludeReport <SwitchParameter>] [-Mailbox <MailboxIdParameter>] [-AggregationType <Aggregation | Mirrored | Migration | PeopleConnection | All>] [-Confirm [<SwitchParameter>]] [-ResultSize <Unlimited>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows detailed information for all the POP subscriptions configured in the mailbox of the user Kim Akers.
  
```
Get-PopSubscription -Mailbox "Kim Akers" | Format-List
```

### Example 2

This example returns additional information about the POP subscriptions configured in the mailbox of the user Kim Akers and exports the results to a .csv file.
  
```
Get-PopSubscription -Mailbox "Kim Akers" -IncludeReport | Export-CSV C:\KimAkersPopReport
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can view the properties of the POP subscription, such as the POP server, authentication method, connection status, and the last time a successful synchronization occurred.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AggregationType_ <br/> |Optional  <br/> |Microsoft.Exchange.Transport.Sync.Common.Subscription.Pim.AggregationType  <br/> | The _AggregationType_ parameter filters the results by type. The acceptable values for this parameter are: <br/>  `All` <br/>  `Aggregation` <br/>  `Migration` <br/>  `Mirrored` <br/>  `PeopleConnection` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AggregationSubscriptionIdParameter  <br/> | The _Identity_ parameter specifies the POP subscription. You can identify the subscription by using one of the following methods: <br/>  Specify the globally unique identifier of the subscription, which is its canonical name (CN). <br/>  Use the _Mailbox_ parameter to specify the mailbox that contains the subscription, and then specify the name of the subscription. <br/>  You can find the identifying values for a POP subscription, such as _Identity_ and _Name_, by running this command:  `Get-PopSubscription -Mailbox <mailbox>`.  <br/> |
| _IncludeReport_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeReport_ switch specifies whether to return additional details, which can be used for troubleshooting. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the cloud-based mailbox that contains the POP subscription. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the total number of subscriptions to return. If no value is specified, the parameter returns all results that match the filter. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

