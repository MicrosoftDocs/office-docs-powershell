---
title: "New-JournalRule"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: fcad9ef1-b3f2-442d-a1a7-cd1bbe442054
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-JournalRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-JournalRule** cmdlet to create a journal rule in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-Journalrule -JournalEmailAddress <RecipientIdParameter> -Name <String> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-Recipient <SmtpAddress>] [-Scope <Internal | External | Global>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates and enables a journal rule. The rule applies to all email messages that pass through the Transport service and contain at least one recipient or sender who is a member of the brokers@contoso.com distribution list.
  
```
New-JournalRule -Name "Brokerage Communications" -JournalEmailAddress "Brokers Journal Mailbox" -Scope Global -Recipient brokers@contoso.com -Enabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-JournalRule** cmdlet creates a journal rule in your organization.
  
By default, new journal rules are disabled unless the  _Enabled_ parameter is set to `$true`. For more information about how to enable a new journal rule that was created in a disabled state, see [Enable-JournalRule](enable-journalrule.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _JournalEmailAddress_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> |The  _JournalEmailAddress_ parameter specifies a recipient object to which journal reports are sent. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the journal rule. The name of the rule can be up to 64 characters long. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Enabled_ parameter specifies whether the journal rule is enabled or disabled. If the rule is disabled, it isn't applied to any email messages. The default value is `$false`.  <br/> |
| _Recipient_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.SmtpAddress  <br/> |The  _Recipient_ parameter specifies the SMTP address of a mailbox, contact, or distribution group to journal. If you specify a distribution group, all recipients in that distribution group are journaled. All messages sent to or from a recipient are journaled. <br/> |
| _Scope_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Journaling.JournalRuleScope  <br/> | The _Scope_ parameter specifies the scope of email messages to which the journal rule is applied. Valid values for this parameter are as follows: <br/>  `Global`: Global rules process all email messages that pass through a Transport service. This includes email messages that were already processed by the external and internal rules. The default value is  `Global`.  <br/>  `Internal`: Internal rules process email messages sent and received by recipients in your organization.  <br/>  `External`: External rules process email messages sent to recipients or from senders outside your organization.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

