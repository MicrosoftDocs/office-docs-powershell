---
title: "Disable-MailboxQuarantine"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5e990971-e24a-4977-9408-fbab1289ea7e
description: "This cmdlet is available only in on-premises Exchange."
---

# Disable-MailboxQuarantine

This cmdlet is available only in on-premises Exchange. 
  
Use the **Disable-MailboxQuarantine** cmdlet to release quarantined mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Disable-MailboxQuarantine -Identity <GeneralMailboxOrMailUserIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example releases the mailbox for the user Brian Johnson from quarantine.
  
```
Disable-MailboxQuarantine "Brian Johnson"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Mailboxes are quarantined when they affect the availability of the mailbox database. Typically a software fix from Microsoft is required before releasing a mailbox from quarantine. If a fix isn't deployed before releasing the mailbox, the quarantine on the mailbox will be re-enabled if the condition recurs. The default quarantine duration is 24 hours.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the database that contains the mailboxes you want to release from quarantine. You can use any value that uniquely identifies the database. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  You identify the mailboxes by using the _IncludeAllMailboxes_ switch or the _StoreMailboxIdentity_ parameter. <br/>  You can't use this parameter with the _Identity_ or _Server_ parameters. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to release from quarantine. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  You can't use this parameter with the _Database_ or _Server_ parameters. <br/> |
| _IncludeAllDatabases_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeAllDatabases_ switch specifies that you want to release all quarantined mailboxes in all databases on the server you specify with the _Server_ parameter. You don't need to specify a value with this switch. <br/> You can only use this switch with the _Identity_ or _Database_ parameters. <br/> |
| _IncludeAllMailboxes_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludeAllMailboxes_switch specifies that you want to release all mailboxes from quarantine in the database you specify with the _Database_ parameter. You don't need to specify a value with this switch. <br/> You can't use this switch with the _StoreMailboxIdentity_ parameter. <br/> |
| _Server_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the server that contains the mailboxes that you want to release from quarantine by using the _IncludeAllDatabases_ switch. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished Name (DN) <br/>  Exchange Legacy DN <br/>  You can't use this parameter with the _Identity_ or _Database_ parameters. <br/> |
| _StoreMailboxIdentity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> |The _StoreMailboxIdentity_ parameter specifies the mailbox that you want to release from quarantine when you use the _Database_ parameter. <br/> You identify the mailbox by its GUID value. You can find the GUID value by using the **Get-Mailbox** or **Get-MailboxStatistics** cmdlets. <br/> You can't use this switch with the _IncludeAllMailboxes_ switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _IncludePassive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IncludePassive_ switch specifies that you also want to release inactive copies of the mailbox from quarantine. You don't need to specify a value with this switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

