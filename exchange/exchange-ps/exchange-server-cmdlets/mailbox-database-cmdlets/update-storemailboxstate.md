---
title: "Update-StoreMailboxState"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5e24a849-4961-4a7b-840e-0aede87a2bf1
description: "This cmdlet is available only in on-premises Exchange."
---

# Update-StoreMailboxState

This cmdlet is available only in on-premises Exchange. 
  
Use the **Update-StoreMailboxState** cmdlet to synchronize the mailbox state for a mailbox in the Exchange mailbox store with the state of the corresponding Active Directory user account.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-StoreMailboxState -Database <DatabaseIdParameter> -Identity <StoreMailboxIdParameter> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example updates the mailbox state for a mailbox located on the mailbox database MDB01 and whose GUID is 4a830e3f-fd07-4629-baa1-8bce16b86d88.
  
```
Update-StoreMailboxState -Database MDB01 -Identity 4a830e3f-fd07-4629-baa1-8bce16b86d88
```

### Example 2

This example updates the mailbox state for all mailboxes on the mailbox database MDB02.
  
```
Get-MailboxStatistics -Database MDB02 | ForEach { Update-StoreMailboxState -Database $_.Database -Identity $_.MailboxGuid -Confirm:$false }
```

### Example 3

This example updates the mailbox state for all disconnected mailboxes on the mailbox database MDB03.
  
```
Get-MailboxStatistics -Database MDB03 | Where { $_.DisconnectReason -ne $null } | ForEach { Update-StoreMailboxState -Database $_.Database -Identity $_.MailboxGuid -Confirm:$false }
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Update-StoreMailboxState** cmdlet forces the mailbox store state in the Exchange store to be synchronized with Active Directory. In some cases, it's possible that the store state for a mailbox to become out-of-sync with the state of the corresponding Active Directory user account. This can result from Active Directory replication latency. For example, if a mailbox-enabled user account is disabled in Active Directory but isn't marked as disabled in the Exchange mailbox store. In this case, running the **Update-StoreMailboxState** will synchronize the mailbox store state with the state of the Active Directory user account and mark the mailbox as disabled in the mailbox store. You can use this command to troubleshoot issues that may be a result when the store state for a mailbox is unexpected or if you suspect that the store state is different than the state for the corresponding Active Directory account.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the identity of the mailbox database that contains the mailbox that you want to update the store state for. This parameter accepts the following values: <br/>  Database name <br/>  GUID <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> |The _Identity_ parameter specifies the identity of the mailbox that you want to update the store state for. Use the mailbox GUID as the value for this parameter. <br/> Run the following command to obtain the mailbox GUID and other information for all mailboxes in your organization:  `Get-MailboxDatabase | Get-MailboxStatistics | Format-List DisplayName,MailboxGuid,Database,DisconnectReason,DisconnectDate`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

