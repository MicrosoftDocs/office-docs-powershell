---
title: "Get-InboxRule"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b02ad57a-460a-4dc2-a521-788cd893c269
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-InboxRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-InboxRule** cmdlet to view Inbox rule properties. Inbox rules are used to process messages in the Inbox based on conditions specified and take actions such as moving a message to a specified folder or deleting a message.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-InboxRule [-Identity <InboxRuleIdParameter>] [-BypassScopeCheck <SwitchParameter>] [-DescriptionTimeFormat <String>] [-DescriptionTimeZone <ExTimeZoneValue>] [-DomainController <Fqdn>] [-IncludeHidden <SwitchParameter>] [-Mailbox <MailboxIdParameter>] [-SweepRules <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves all Inbox rules for the mailbox Joe@Contoso.com.
  
```
Get-InboxRule -Mailbox Joe@Contoso.com
```

### Example 2

This example retrieves the Inbox rule  `ReceivedLastYear` from the mailbox joe@contoso.com on which the _ReceivedBeforeDate_ parameter was set when the rule was created. The _DescriptionTimeFormat_ and _DescriptionTimeZone_ parameters are used in this example to specify formatting of the time and the time zone used in the rule's **Description** property.
  
```
Get-InboxRule "ReceivedLastYear" -Mailbox joe@contoso.com -DescriptionTimeFormat "mm/dd/yyyy" -DescriptionTimeZone "Pacific Standard Time"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _BypassScopeCheck_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _BypassScopeCheck_ switch specifies whether to bypass the scope check for the user that's running the command. You don't need to specify a value with this switch. <br/> |
| _DescriptionTimeFormat_ <br/> |Optional  <br/> |System.String  <br/> |The  _DescriptionTimeFormat_ parameter specifies the format for time values in the rule description. For example: <br/>  _mm/dd/yyyy_, where  _mm_ is the 2-digit month, _dd_ is the 2-digit day, and _yyyy_ is the 4-digit year. <br/> |
| _DescriptionTimeZone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.ExTimeZoneValue  <br/> |The  _DescriptionTimeZone_ parameter specifies time zone that's used for time values in the rule description. <br/> A valid value for this parameter is a supported time zone key name (for example,  `"Pacific Standard Time"`).  <br/> To see the available values, run the following command:  `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display` <br/> If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.InboxRuleIdParameter  <br/> | The _Identity_ parameter specifies the Inbox rule that you want to view. You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/> **RuleIdentity** property (for example, `16752869479666417665`).  <br/>  Exchange Online: `<mailbox alias>\<RuleIdentity>` (for example, `rzaher\16752869479666417665`.  <br/>  On-premises Exchange: `<mailbox canonical name>\<RuleIdentity>` (for example, `contoso.com/Users/Rick Zaher\16752869479666417665`.  <br/> |
| _IncludeHidden_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _IncludeHidden_ switch specifies whether to include hidden Inbox rules in the results. You don't need to specify a value with this switch. <br/> |
| _Mailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox that contains the Inbox rule. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _SweepRules_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SweepRules_ switch specifies whether to return only Sweep rules in the results. You don't need to specify a value with this switch. <br/> Sweep rules run at regular intervals to help keep your Inbox clean.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

