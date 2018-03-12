---
title: "Remove-MailboxFolderPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/23/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: da9b68c7-0261-4a41-b64d-d9f279c853e7
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-MailboxFolderPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-MailboxFolderPermission** cmdlet to remove folder-level permissions for users in mailboxes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-MailboxFolderPermission -Identity <MailboxFolderIdParameter> -User <MailboxFolderUserIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-SendNotificationToUser <$true | $false>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes John's permissions to the Training folder in Kim's mailbox.
  
```
Remove-MailboxFolderPermission -Identity kim@contoso.com:\Training -User john@contoso.com
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can't use this cmdlet to selectively remove permissions from a user on a mailbox folder. The cmdlet removes all permissions that are assigned to the user on the specified folder. To modify the permissions that are assigned to the user on a mailbox folder, use the **Set-MailboxFolderPermission** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxFolderIdParameter  <br/> | The _Identity_ parameter specifies the target mailbox and folder. The syntax is `<Mailbox>:\<Folder>`. For the value of  `<Mailbox>`, you can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  Example values for the _Identity_ parameter are `john@contoso.com:\Calendar` or `John:\Marketing\Reports`.  <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Management.StoreTasks.MailboxFolderUserIdParameter  <br/> | The _User_ parameter specifies the mailbox, mail user, or mail-enabled security group (security principal) that's granted permission to the mailbox folder. You can use any value that uniquely identifies the user or group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _SendNotificationToUser_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _SendNotificationToUser_ parameter specifies whether to send a notification to the user when you remove their calendar permissions. Valid values are: <br/>  `$true`: A notification is sent.  <br/>  `$false`: No notification is sent. This is the default value.  <br/>  This parameter only applies to calendar folders. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

