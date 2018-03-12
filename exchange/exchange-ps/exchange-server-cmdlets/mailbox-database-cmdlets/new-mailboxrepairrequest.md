---
title: "New-MailboxRepairRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 5fd53ecb-1445-489d-91ac-1e771f41eb01
description: "This cmdlet is available only in on-premises Exchange."
---

# New-MailboxRepairRequest

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-MailboxRepairRequest** cmdlet to detect and fix mailbox corruptions. You can run this command against a specific mailbox or against a database. While this task is running, mailbox access is disrupted only for the mailbox being repaired. If you're running this command against a database, only the mailbox being repaired is disrupted. All other mailboxes on the database remain operational.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!NOTE]
> After you begin the repair request, it can't be stopped unless you dismount the database. 
  
```
New-MailboxRepairRequest -Mailbox <GeneralMailboxOrMailUserIdParameter> [-Archive <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example detects and repairs all folder views for the mailbox tony@contoso.com.
  
```
New-MailboxRepairRequest -Mailbox tony@contoso.com -CorruptionType FolderView
```

### Example 2

This example only detects and reports on  `ProvisionedFolder` and `SearchFolder` corruption issues to Ayla Kol's mailbox. This command doesn't repair the mailbox.
  
```
New-MailboxRepairRequest -Mailbox ayla -CorruptionType ProvisionedFolder,SearchFolder -DetectOnly
```

### Example 3

This example detects and repairs  `AggregateCounts` for all mailboxes on mailbox database MBX-DB01.
  
```
New-MailboxRepairRequest -Database MBX-DB01 -CorruptionType AggregateCounts
```

### Example 4

This example detects and repairs all corruption types for Ayla Kol's mailbox and archive.
  
```
New-MailboxRepairRequest -Mailbox ayla -CorruptionType ProvisionedFolder,SearchFolder,AggregateCounts,Folderview -Archive
```

### Example 5

This example creates a variable that identifies Ann Beebe's mailbox and then uses the variable to specify the values for the _Database_ and _StoreMailbox_ parameters to create a request to detect and repair all corruption types.
  
```
$Mailbox = Get-MailboxStatistics annb; New-MailboxRepairRequest -Database $Mailbox.Database -StoreMailbox $Mailbox.MailboxGuid -CorruptionType ProvisionedFolder,SearchFolder,AggregateCounts,Folderview
```

## Detailed Description
<a name="DetailedDescription"> </a>

To avoid any performance problems, there are limits placed on the number of simultaneous repair requests that can be submitted per server. Only one request can be active for a database-level repair, or up to 100 requests can be active for a mailbox-level repair per server.
  
The **New-MailboxRepairRequest** cmdlet detects and fixes the following types of mailbox corruptions:
  
- Search folder corruptions ( `SearchFolder`)
    
- Aggregate counts on folders that aren't reflecting correct values ( `AggregateCounts`)
    
- Views on folders that aren't returning correct contents ( `FolderView`)
    
- Provisioned folders that are incorrectly pointing into parent folders that aren't provisioned ( `ProvisionedFolder`)
    
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CorruptionType_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Tasks.MailboxCorruptionType[]  <br/> | The _CorruptionType_ parameter specifies the type of corruption that you want to detect and repair. You can use the following values: <br/>  `SearchFolder` <br/>  `AggregateCounts` <br/>  `ProvisionedFolder` <br/>  `FolderView` <br/>  You can search for multiple corruption types at a time. Separate multiple types with a comma, for example, `SearchFolder,AggregateCounts`.  <br/> |
| _Database_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | The _Database_ parameter specifies the database on which you run this command. If you use this parameter, all mailboxes on the database are searched for corruptions. To avoid performance issues, you're limited to one active database repair request at a time. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter in conjunction with the _Mailbox_ parameter. <br/> |
| _Mailbox_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.GeneralMailboxOrMailUserIdParameter  <br/> | The _Mailbox_ parameter specifies the mailbox on which you run this command. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  LegacyExchangeDN <br/>  SMTP address <br/>  Alias <br/>  You can't use this parameter in conjunction with the _Database_ parameter. <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ parameter specifies whether to detect corruptions or repair the archive mailbox associated with the specified mailbox. If you don't specify this parameter, only the primary mailbox is repaired. <br/> You can't use this parameter in conjunction with the _Database_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DetectOnly_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _DetectOnly_ parameter specifies that you want this command to report errors, but not fix them. You don't have to specify a value with this parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies that the cmdlet should run immediately and not wait to be dispatched by workload management. <br/> |
| _StoreMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.StoreMailboxIdParameter  <br/> |The _StoreMailbox_ parameter specifies the mailbox GUID of the mailbox you want to repair. Use this parameter with the _Database_ parameter. <br/> Run the [Get-MailboxStatistics](../../exchange-server-cmdlets/mailbox-cmdlets/get-mailboxstatistics.md) cmdlet to find the mailbox GUID for a mailbox. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

