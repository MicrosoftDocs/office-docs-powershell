---
title: "Remove-StoreMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d5cb00f2-f475-45cf-b72e-0962e5eed070
description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-StoreMailbox

This cmdlet is available only in on-premises Exchange. 
  
Use the **Remove-StoreMailbox** cmdlet to purge the mailbox and all of its message content from the mailbox database. This results in permanent data loss for the mailbox being purged. You can only run this cmdlet against disconnected or soft-deleted mailboxes. Running this command against an active mailbox fails, and you receive an error.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-StoreMailbox -Database <DatabaseIdParameter> -Identity <StoreMailboxIdParameter> -MailboxState <Disabled | SoftDeleted> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example purges the soft-deleted mailbox for Ayla Kol from mailbox database MBD01.
  
```
Remove-StoreMailbox -Database MBD01 -Identity Ayla -MailboxState SoftDeleted
```

### Example 2

This example permanently purges the disconnected mailbox with the GUID 2ab32ce3-fae1-4402-9489-c67e3ae173d3 from mailbox database MBD01.
  
```
Remove-StoreMailbox -Database MBD01 -Identity "2ab32ce3-fae1-4402-9489-c67e3ae173d3" -MailboxState Disabled
```

### Example 3

This example permanently purges all soft-deleted mailboxes from mailbox database MBD01.
  
```
Get-MailboxStatistics -Database MBD01 | where {$_.DisconnectReason -eq "SoftDeleted"} | foreach {Remove-StoreMailbox -Database $_.database -Identity $_.mailboxguid -MailboxState SoftDeleted}
```

## Detailed Description
<a name="DetailedDescription"> </a>

When mailboxes are moved between databases, Exchange doesn't fully delete the mailbox from the source database immediately upon completion of the move. Instead, the mailbox in the source mailbox database is switched to a soft-deleted state, which allows mailbox data to be accessed during a mailbox restore operation by using the new **MailboxRestoreRequest** cmdlet set. The soft-deleted mailboxes are retained in the source database until the deleted mailbox retention period expires.
  
To view soft-deleted mailboxes, run the [Get-MailboxStatistics](../../exchange-server-cmdlets/mailbox-cmdlets/get-mailboxstatistics.md) cmdlet against a database using the property **DisconnectReason** with a value of `SoftDeleted`.
  
A mailbox is marked as Disabled immediately after the **Disable-Mailbox** or **Remove-Mailbox** command completes. Exchange retains disabled mailboxes in the mailbox database based on the deleted mailbox retention settings configured for that mailbox database. After the specified period of time, the mailbox is permanently deleted.
  
To view disabled mailboxes, run the **Get-MailboxStatistics** cmdlet against a database using the property **DisconnectReason** with a value of `Disabled`.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the identity of the mailbox database on which the mailbox that you want to remove resides. This parameter accepts the following values: <br/>  Database name <br/>  GUID <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> | The _Identity_ parameter specifies the identity of the mailbox that you want to remove. This parameter accepts the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/> _Domain\Account Name_ <br/>  SMTP address <br/> |
| _MailboxState_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxStateParameter  <br/> | The _MailboxState_ parameter specifies the mailbox state on the source mailbox database. This parameter accepts the following values: <br/>  `Disabled` <br/>  `SoftDeleted` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

