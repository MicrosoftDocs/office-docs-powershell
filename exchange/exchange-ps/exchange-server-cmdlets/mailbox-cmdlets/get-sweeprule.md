---
title: "Get-SweepRule"
ms.author: chrisda
author: chrisda
ms.date: 1/9/2018
ms.audience: Developer
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3893ff38-931d-49f8-b34d-d7666b629d54
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-SweepRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-SweepRule** cmdlet to view Sweep rules in mailboxes. Sweep rules run a regular intervals to help keep your Inbox clean.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SweepRule [-Identity <SweepRuleIdParameter>] [-BypassScopeCheck <SwitchParameter>] [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>] [-Provider <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all Sweep rules.
  
```
Get-SweepRule
```

### Example 2

This example returns a summary list of all Sweep rules in the specified mailbox.
  
```
Get-SweepRule -Mailbox julia@contoso.com
```

### Example 3

This example returns detailed information for the Sweep rule with the specified **RuleId** property value.
  
```
Get-SweepRule -Identity "x2hlsdpGmUifjFgxxGIOJw=="
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BypassScopeCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _BypassScopeCheck_ switch specifies whether to bypass the scope check for the user that's running the command. You don't need to specify a value with this switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.SweepRuleIdParameter  <br/> | The _Identity_ parameter specifies the Sweep rule that you want to view. You can use any value that uniquely identifies the rule. For example: <br/> **RuleId** property (for example, `x2hlsdpGmUifjFgxxGIOJw==`).  <br/>  Exchange Online: `<mailbox alias>\<RuleId>` (for example, `rzaher\x2hlsdpGmUifjFgxxGIOJw==`.  <br/>  On-premises Exchange: `<mailbox canonical name>\<RuleId>` (for example, `contoso.com/Users/Rick Zaher\x2hlsdpGmUifjFgxxGIOJw==`.  <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter filters the results by the specified mailbox. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Provider_ <br/> |Optional  <br/> |System.String  <br/> |The _Provider_ parameter filters the results by the specified provider. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

