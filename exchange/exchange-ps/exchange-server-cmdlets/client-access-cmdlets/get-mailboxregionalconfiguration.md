---
title: "Get-MailboxRegionalConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/1/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2a50a165-5830-4771-8968-a13ab057532a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxRegionalConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxRegionalConfiguration** cmdlet to view the regional settings of a mailbox. You can view the date format, time format, time zone, and language of the mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxRegionalConfiguration -Identity <MailboxIdParameter> [-DomainController <Fqdn>] [-VerifyDefaultFolderNameLanguage <SwitchParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the regional settings for Marcelo Teixeira's mailbox.
  
```
Get-MailboxRegionalConfiguration -Identity "Marcelo Teixeira"
```

### Example 2

In on-premises Exchange, this example returns the regional settings for Ella Lack's mailbox by using the specified domain controller.
  
```
Get-MailboxRegionalConfiguration -Identity "Ella Lack" -DomainController dc01.contoso.com
```

### Example 3

This example returns the regional settings for Alice Jakobsen's mailbox, and also indicates whether the default folder names of the mailbox are localized in the locale that's specified for the mailbox. The important properties are **Language** and **DefaultFolderNameMatchingUserLanguage**.
  
```
Get-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -VerifyDefaultFolderNameLanguage | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _VerifyDefaultFolderNameLanguage_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _VerifyDefaultFolderNameLanguage_ switch verifies that the default folder names are localized in the language that's specified for the mailbox (the **Language** property value). You don't need to specify a value with this switch. <br/>  The results are displayed in the **DefaultFolderNameMatchingUserLanguage** property. To see this property, you need to pipeline the results of the command to the **Format-List** or **Format-Table** cmdlets. For example: <br/>  `Get-MailboxRegionalConfiguration -Identity <MailboxIdentity> -VerifyDefaultFolderNameLanguage | Format-List` <br/>  Or <br/>  `Get-MailboxRegionalConfiguration -Identity <MailboxIdentity> -VerifyDefaultFolderNameLanguage | Format-Table Language,DefaultFolderNameMatchingUserLanguage` <br/>  If you view the **DefaultFolderNameMatchingUserLanguage** property without using the _VerifyDefaultFolderNameLanguage_ switch, the value is always `$false`, even if the default folder names are localized in the language that's specified for the mailbox.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

