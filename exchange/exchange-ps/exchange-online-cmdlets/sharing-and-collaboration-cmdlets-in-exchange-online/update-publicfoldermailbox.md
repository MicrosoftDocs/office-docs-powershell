---
title: "Update-PublicFolderMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 36a24f50-89d9-4976-884d-f46eacd0f4d4
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Update-PublicFolderMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Update-PublicFolderMailbox** cmdlet to update the hierarchy for public folders.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-PublicFolderMailbox -Identity <MailboxIdParameter> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example updates the public folder hierarchy on the public folder mailbox PF_marketing and suppresses the command's output.
  
```
Update-PublicFolderMailbox -Identity PF_marketing -SuppressStatus
```

### Example 2

This example updates all public folder mailboxes and suppresses the command's output.
  
```
Get-Mailbox -PublicFolder | Update-PublicFolderMailbox -SuppressStatus
```

## Detailed Description
<a name="DetailedDescription"> </a>

This cmdlet only needs to be used if you want to manually invoke the hierarchy synchronizer and the mailbox assistant. Both these are invoked at least once every 24 hours for each public folder mailbox in the organization. The hierarchy synchronizer is invoked every 15 minutes if any users are logged on to a secondary mailbox through Outlook or a Exchange Web Services client.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _FolderId_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.PublicFolderIdParameter  <br/> |The  _FolderId_ parameter specifies the GUID or name of the public folder that you want to synchronize. You can also include the path using the format `\TopLevelPublicFolder\PublicFolder`.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the identity of the public folder mailbox. This parameter accepts the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/>  _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/> |
| _InvokeSynchronizer_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _InvokeSynchronizer_ switch can only be used on secondary hierarchy public folder mailboxes and triggers hierarchy synchronization from the primary public folder mailbox to the specified secondary public folder mailbox. <br/> This switch should only be used for troubleshooting purposes.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _CreateAssociatedDumpster_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _CreateAssociatedDumpster_ switch specifies whether to create the associated dumpster before synchronizing the folder. You don't need to specify a value with this switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _ForceOnlineSync_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ForceOnlineSync_ switch specifies whether to force the secondary public folder mailbox to synchronize with the primary public folder mailbox. You don't need to specify a value with this switch. <br/> |
| _FullSync_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _FullSync_ switch specifies that you want to perform a full synchronization of the public folder mailbox. <br/> |
| _ReconcileFolders_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _ReconcileFolders_ switch specifies whether to look closely for differences in the folder hierarchy between the primary public folder mailbox and the secondary public folder mailbox. Folders that exist in the primary public folder mailbox and not in the secondary will be recreated. Folders that exist in the secondary public folder mailbox and not in the primary will be deleted. <br/> This switch should only be used for repair or troubleshooting purposes to look for differences in the public folder hierarchy that aren't detected by a regular synchronization. These undetected differences may occur in database failover or disaster recovery scenarios. You must use this switch with the  _InvokeSynchronizer_ switch. <br/> |
| _SuppressStatus_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _SuppressStatus_ switch specifies that the output of this cmdlet is suppressed and that the command will run asynchronously in the background from the Exchange Management Shell. If you don't use this switch in the command, the output will display status messages every 3 seconds for up to one minute. Until the minute passes, you can't use that instance of the Shell. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

