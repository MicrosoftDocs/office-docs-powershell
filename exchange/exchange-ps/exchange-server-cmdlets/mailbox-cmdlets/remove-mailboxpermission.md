---
title: "Remove-MailboxPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: eda30705-6070-413a-88c5-db262fbad8d3
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-MailboxPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Remove-MailboxPermission** cmdlet to remove permissions from a user's mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-MailboxPermission -AccessRights <MailboxRights[]> -Identity <MailboxIdParameter> -User <SecurityPrincipalIdParameter> [-Deny <SwitchParameter>] [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes user Test2's full access rights to Test1's mailbox.
  
```
Remove-MailboxPermission -Identity Test1 -User Test2 -AccessRights FullAccess -InheritanceType All
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Remove-MailboxPermission** cmdlet allows you to remove permissions from a user's mailbox, for example, removing full access to another user's mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessRights_ <br/> |Required  <br/> |Microsoft.Exchange.Management.RecipientTasks.MailboxRights[]  <br/> | The _AccessRights_ parameter specifies the rights required to perform the operation. You can use the following values: <br/>  `FullAccess` <br/>  `SendAs` <br/>  `ExternalAccount` <br/>  `DeleteItem` <br/>  `ReadPermission` <br/>  `ChangePermission` <br/>  `ChangeOwner` <br/> |
| _ClearAutoMapping_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The _ClearAutoMapping_ switch specifies that the mailbox is automatically mapped (auto-mapped) by Autodiscover only into the mailbox owner's Outlook profile. The mailbox isn't auto-mapped to other users who have `FullAccess` permission to the mailbox. <br/> To re-add auto-mapping capability on the mailbox for other users, run the command:  `Add-MailboxPermission -Identity <Mailbox> -AccessRights FullAccess -AutoMapping $true`.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox where you are removing permissions. You can use any value that uniquely identifies the mailbox: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Instance_ <br/> |Required  <br/> |Microsoft.Exchange.Management.RecipientTasks.MailboxAcePresentationObject  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Instance_ parameter enables you to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command. <br/> |
| _ResetDefault_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in the cloud-based service. <br/>  The _ResetDefault_ switch resets the default security descriptor of the mailbox. Permissions on the mailbox are reset so only the mailbox owner has `FullAccess` permission to the mailbox. The following types of permissions are not affected: <br/>  Recipient permissions (for example, `SendAs`,  `SendOnBehalf` and delegates). <br/>  Mailbox folder permissions assigned using the **MailboxFolderPermission** cmdlets. <br/>  Mailbox folder permissions assigned using Outlook or other MAPI clients. <br/>  Also, because this switch removes `FullAccess` permission from other users on the mailbox, the mailbox is no longer auto-mapped by Autodiscover into the Outlook profiles of other users. <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> |The _User_ parameter specifies the user mailbox that will get permissions removed. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Deny_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Deny_ parameter denies permissions to the user on the Active Directory object. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _InheritanceType_ <br/> |Optional  <br/> |System.DirectoryServices.ActiveDirectorySecurityInheritance  <br/> |The _InheritanceType_ parameter specifies whether permissions are inherited to folders within the mailbox. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

