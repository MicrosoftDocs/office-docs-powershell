---
title: "Set-SweepRule"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: d8c929db-9ec4-4f75-b79d-f5297bf9e8e1
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-SweepRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Set-SweepRule** cmdlet to modify Sweep rules in mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SweepRule -Identity <SweepRuleIdParameter> [-DestinationFolder <MailboxFolderIdParameter>] [-Enabled <$true | $false>] [-ExceptIfFlagged <$true | $false>] [-ExceptIfPinned <$true | $false>] [-KeepForDays <Int32>] [-KeepLatest <Int32>] [-Name <String>] [-Provider <String>] [-Sender <RecipientIdParameter>] [-SourceFolder <MailboxFolderIdParameter>] [-SystemCategory <NotDefined | FromContact | Newsletter | Photo | SocialUpdate | Video | Document | File | MailingList | ShippingNotification | LiveView | DocumentPlus | Important | Family | Bills | Shopping | Travel | Flight | RestaurantReservation | Lodging | RentalCar | Purchase | Event | RetiredPromotion>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example modifies the existing rule that has the rule ID value  `x2hlsdpGmUifjFgxxGIOJw==` with the specified value.
  
```
Set-SweepRule -Identity x2hlsdpGmUifjFgxxGIOJw== -KeepForDays 15 -ExceptIfPinned $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SweepRuleIdParameter  <br/> | The _Identity_ parameter specifies the Sweep rule that you want to modify. You can use any value that uniquely identifies the rule. For example: <br/> **RuleId** property (for example, `x2hlsdpGmUifjFgxxGIOJw==`).  <br/>  Exchange Online: `<mailbox alias>\<RuleId>` (for example, `rzaher\x2hlsdpGmUifjFgxxGIOJw==`.  <br/>  On-premises Exchange: `<mailbox canonical name>\<RuleId>` (for example, `contoso.com/Users/Rick Zaher\x2hlsdpGmUifjFgxxGIOJw==`.  <br/>  You can get these identity values by using the **Get-SweepRule** cmdlet. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DestinationFolder_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> |The  _DestinationFolder_parameter specifies an action for the Sweep rule that moves messages to the specified folder based on the conditions of the rule.  <br/> The default value is  `Deleted Items`.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExceptIfFlagged_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExceptIfFlagged_ parameter specifies an exception for the Sweep rule that looks messages with a message flag applied. Valid values are: <br/>  `$true`: The rule action isn't applied to messages that have a message flag applied.  <br/>  `$false`: The exception isn't used.  <br/>  The typical message flag values are: <br/>  `Any` <br/>  `Call` <br/>  `DoNotForward` <br/>  `FollowUp` <br/>  `ForYourInformation` <br/>  `Forward` <br/>  `NoResponseNecessary` <br/>  `Read` <br/>  `Reply` <br/>  `ReplyToAll` <br/>  `Review` <br/> |
| _ExceptIfPinned_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _PinMessage_ parameter specifies an exception for the Sweep rule that looks for pinned messages. Valid values are: <br/>  `$true`: The rule action isn't applied to messages that are pinned to the top of the Inbox.  <br/>  `$false`: The exception isn't used.  <br/> |
| _KeepForDays_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _KeepForDays_parameter specifies an action for the Sweep rule that specifies the number of days to keep messages that match the conditions of the rule. After the number of days have passed, the messages are moved to the location that's specified by the  _DestinationFolder_ parameter (by default, the Deleted Items folder). <br/> You can't use this parameter with the  _KeepLatest_ parameter, and the Sweep rule must contain a _KeepForDays_ or _KeepLatest_ parameter value. <br/> |
| _KeepLatest_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _KeepLatest_parameter specifies an action for the Sweep rule that specifies the number of messages to keep that match the conditions of the rule. After the number of messages is exceeded, the oldest messages are moved to the location that's specified by the  _DestinationFolder_ parameter (by default, the Deleted Items folder). <br/> You can't use this parameter with the  _KeepForDays_ parameter, and the Sweep rule must contain a _KeepForDays_ or _KeepLatest_ parameter value. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox that contains the rule you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the Sweep rule. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Provider_ <br/> |Optional  <br/> |System.String  <br/> |The  _Provider_parameter specifies the provider for the Sweep rule. If the value contains spaces, enclose the value in quotation marks.  <br/> For Sweep rules that you create in Outlook on the web, the default value is  `Exchange16`.  <br/> |
| _Sender_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Sender_ parameter specifies a condition for the Sweep rule that looks for the specified sender in messages. For internal senders, you can use any value that uniquely identifies the sender. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/>  For external senders, use their email address. <br/> |
| _SourceFolder_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> |The  _SourceFolder_parameter specifies a condition for the Sweep rule that looks for messages in the specified folder.  <br/> The default value is  `Inbox`.  <br/> |
| _SystemCategory_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SystemCategoryType  <br/> | The _SystemCategory_parameter specifies a condition for the sweep rule that looks for messages with the specified system category. System categories are available to all mailboxes in the organization. Valid values are:  <br/>  `NotDefined` <br/>  `Bills` <br/>  `Document` <br/>  `DocumentPlus` <br/>  `Event` <br/>  `Family` <br/>  `File` <br/>  `Flight` <br/>  `FromContact` <br/>  `Important` <br/>  `LiveView` <br/>  `Lodging` <br/>  `MailingList` <br/>  `Newsletter` <br/>  `Photo` <br/>  `Purchase` <br/>  `RentalCar` <br/>  `RestaurantReservation` <br/>  `RetiredPromotion` <br/>  `ShippingNotification` <br/>  `Shopping` <br/>  `SocialUpdate` <br/>  `Travel` <br/>  `Video` <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

