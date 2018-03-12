---
title: "Get-MailboxSpellingConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7695cde3-71d2-4523-8300-ada77cb8e7d4
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxSpellingConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxSpellingConfiguration** cmdlet to retrieve the Outlook on the web spelling checker settings of a specified user. For example, users can set their dictionary language and configure the spelling checker to ignore mixed digits and words in all uppercase.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxSpellingConfiguration -Identity <MailboxIdParameter> [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves the Outlook on the web options of user Tony.
  
```
Get-MailboxSpellingConfiguration -Identity Tony
```

### Example 2

This example returns the Outlook on the web spelling checker options for Tony's mailbox by specifying domain controller DC1 to get the information from Active Directory.
  
```
Get-MailboxSpellingConfiguration -Identity Tony -DomainController DC1
```

### Example 3

This example returns the Outlook on the web spelling checker options for Tony's mailbox by specifying the identity of the mailbox in the format _domain\account_.
  
```
Get-MailboxSpellingConfiguration -Identity contoso\tony
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-MailboxSpellingConfiguration** cmdlet is primarily used to populate the spelling checker settings for end users in Outlook on the web. Administrators can also view users' settings by running this cmdlet. The following spelling checker settings are retrieved by the cmdlet for the specified mailbox:
  
- **Identity**: This setting specifies the mailbox identity.
    
- **CheckBeforeSend**: This setting specifies whether Outlook on the web checks the spelling of every message when the user clicks **Send** in the new message form.
    
- **DictionaryLanguage**: This setting specifies the dictionary language used when the spelling checker checks the spelling in messages.
    
- **IgnoreMixedDigits**: This setting specifies whether the spelling checker ignores words that contain numbers.
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

