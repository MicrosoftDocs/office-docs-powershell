---
title: "Set-MailboxRegionalConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: bf47b2e4-2aba-4df5-a444-5b187328482d
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MailboxRegionalConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MailboxRegionalConfiguration** cmdlet to modify the regional settings of a mailbox. You can modify the date format, time format, time zone, and language of the mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxRegionalConfiguration -Identity <MailboxIdParameter> [-Confirm [<SwitchParameter>]] [-DateFormat <String>] [-DomainController <Fqdn>] [-Language <CultureInfo>] [-LocalizeDefaultFolderName <SwitchParameter>] [-TimeFormat <String>] [-TimeZone <ExTimeZoneValue>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example sets Marcelo Teixeira's mailbox language to Brazilian Portuguese, and localizes the default folder names in Portuguese.
  
```
Set-MailboxRegionalConfiguration -Identity "Marcelo Teixeira" -Language pt-br -LocalizeDefaultFolderName
```

### Example 2

This example sets the date format for Ella Lack's mailbox.
  
```
Set-MailboxRegionalConfiguration -Identity "Ella Lack's" -DateFormat "d/m/yyyy"
```

### Example 3

This example sets Alice Jakobsen's mailbox language to Danish Denmark, sets the date in the day/month/year format, and localizes the default folder names in Danish.
  
```
Set-MailboxRegionalConfiguration -Identity "Alice Jakobsen" -Language da-dk -DateFormat "dd-mm-yyyy" -LocalizeDefaultFolderName
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DateFormat_ <br/> |Optional  <br/> |System.String  <br/> | The _DateFormat_ parameter specifies the date format based on the current or specified language for the mailbox. For example, if the language is set to `en-US`, valid  _DateFormat_ parameter values include: <br/>  `M/d/yyyy`: This is the default value for  `en-US`.  <br/>  `M/d/yy` <br/>  `MM/dd/yy` <br/>  `MM/dd/yyyy` <br/>  `yy/MM/dd` <br/>  `yyyy-MM-dd` <br/>  `dd-MMM-yy` <br/>  For more information about the date format strings, see[Standard Date and Time Format Strings](https://go.microsoft.com/fwlink/p/?LinkId=784852).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Language_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _Language_ parameter specifies the language for the mailbox. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _LocalizeDefaultFolderName_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _LocalizeDefaultFolderName_ switch localizes the default folder names of the mailbox in the current or specified language. You don't need to specify a value with this switch. <br/> |
| _TimeFormat_ <br/> |Optional  <br/> |System.String  <br/> | The _TimeFormat_ parameter specifies the time format based on the current or specified language value for the mailbox. For example, if the language is set to `en-us`, valid  _TimeFormat_ parameter values include: <br/>  `h:mm tt`: This is the default value for  `en-US`.  <br/>  `hh:mm tt` <br/>  `H:mm` <br/>  `HH:mm` <br/>  For more information about the time format strings, see[Standard Date and Time Format Strings](https://go.microsoft.com/fwlink/p/?LinkId=784852).  <br/> |
| _TimeZone_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Storage.Management.ExTimeZoneValue  <br/> |The  _TimeZone_ parameter specifies the time zone for the mailbox. <br/> A valid value for this parameter is a supported time zone key name (for example,  `"Pacific Standard Time"`).  <br/> To see the available values, run the following command:  `$TimeZone = Get-ChildItem "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Time zones" | foreach {Get-ItemProperty $_.PSPath}; $TimeZone | sort Display | Format-Table -Auto PSChildname,Display` <br/> If the value contains spaces, enclose the value in quotation marks ("). The default value is the time zone setting of the Exchange server.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

