---
title: "Set-MailboxSpellingConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 63447637-44f7-4857-9606-f9c71287ca49
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MailboxSpellingConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MailboxSpellingConfiguration** cmdlet to modify Outlook on the web spelling checker options for a specified user. For example, you can set the dictionary language and configure the spelling checker to ignore mixed digits or words in all uppercase.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxSpellingConfiguration -Identity <MailboxIdParameter> [-CheckBeforeSend <$true | $false>] [-Confirm [<SwitchParameter>]] [-DictionaryLanguage <Spanish | Arabic | Danish | Dutch | EnglishAustralia | EnglishCanada | EnglishUnitedKingdom | EnglishUnitedStates | Finnish | French | GermanPostReform | GermanPreReform | Hebrew | Italian | Korean | NorwegianBokmal | NorwegianNynorsk | PortuguesePortugal | PortugueseBrasil | Swedish | Catalan>] [-DomainController <Fqdn>] [-IgnoreMixedDigits <$true | $false>] [-IgnoreUppercase <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets the spelling checker of user Peter to ignore words in all uppercase letters.
  
```
Set-MailboxSpellingConfiguration -Identity Peter -IgnoreUppercase $true
```

### Example 2

This example sets the spelling checker to ignore words that contain only uppercase letters for messages sent from Kai's mailbox.
  
```
Set-MailboxSpellingConfiguration -Identity kai -IgnoreUppercase $true
```

### Example 3

This example sets the spelling checker to ignore words containing numbers for messages sent from Kai's mailbox.
  
```
Set-MailboxSpellingConfiguration -IgnoreMixedDigits $true -Identity kai
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _CheckBeforeSend_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _CheckBeforeSend_ parameter specifies whether Outlook on the web checks the spelling for every message when the user clicks **Send** in the new message form. Valid values are `$true` or `$false`. The default value is  `$false`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DictionaryLanguage_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.SpellcheckerSupportedLanguage  <br/> | The _DictionaryLanguage_ parameter specifies the dictionary language to use when the spelling checker checks the spelling in messages. Valid values are: <br/>  `Arabic` <br/>  `Catalan` <br/>  `Danish` <br/>  `Dutch` <br/>  `EnglishAustralia` <br/>  `EnglishCanada` <br/>  `EnglishUnitedKingdom` <br/>  `EnglishUnitedStates` <br/>  `Finnish` <br/>  `French` <br/>  `GermanPreReform` <br/>  `GermanPostReform` <br/>  `Hebrew` <br/>  `Italian` <br/>  `Korean` <br/>  `NorwegianBokMal` <br/>  `NorwegianNyorsk` <br/>  `PortuguesePortugal` <br/>  `PortugueseBrasil` <br/>  `Spanish` <br/>  `Swedish` <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreMixedDigits_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IgnoreMixedDigits_ parameter specifies whether the spelling checker ignores words that contain numbers. Valid values are `$true` or `$false`. The default value is  `$false`.  <br/> |
| _IgnoreUppercase_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _IgnoreUppercase_ parameter specifies whether the spelling checker ignores words that contain only uppercase letters, for example, acronyms. <br/> Valid values are  `$true` or `$false`. The default value is  `$false`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

