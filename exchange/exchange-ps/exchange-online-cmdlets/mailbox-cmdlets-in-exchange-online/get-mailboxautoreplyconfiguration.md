---
title: "Get-MailboxAutoReplyConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 0963eab0-8bc8-4f06-b6f7-7dd88b1559f5

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxAutoReplyConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxAutoReplyConfiguration** cmdlet to retrieve Automatic Replies settings for a specific mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxAutoReplyConfiguration -Identity <MailboxIdParameter> [-Credential <PSCredential>] [-DomainController <Fqdn>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns Automatic Replies settings for all mailboxes in the Exchange organization.
  
```
Get-Mailbox | Get-MailboxAutoReplyConfiguration
```

### Example 2

This example retrieves Automatic Replies settings for Tony's mailbox at contoso.com.
  
```
Get-MailboxAutoReplyConfiguration -Identity 'contoso.com/Users/Tony Smith'
```

### Example 3

This example retrieves all Automatic Replies settings for all mailboxes in the Exchange organization.
  
```
Get-Mailbox | Get-MailboxAutoReplyConfiguration -ResultSize unlimited
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can use the **Get-MailboxAutoReplyConfiguration** cmdlet to retrieve all the mailboxes enabled for Automatic Replies. When run, the cmdlet returns Automatic Replies settings for the specified mailbox that include the following:
  
- Mailbox identity value
    
- Whether Automatic Replies is enabled, scheduled, or disabled for the mailbox
    
- Start and end date, time during which Automatic Replies will be sent
    
- Whether external senders receive Automatic Replies (none, known senders, or all)
    
- Automatic Replies message to be sent to internal and external senders
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies a unique identifier associated with a mailbox. Accepted values for the mailbox are as follows: <br/>  GUID <br/>  ADObjectID <br/>  Distinguished name (DN) <br/>  _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SmtpAddress <br/>  Alias <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter requires you to create a credentials object by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReadFromDomainController_ parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest, and if you don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your servers that run Microsoft Exchange.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of settings to return. If you want to return all settings that match the command, use `unlimited` for the value of this parameter. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

