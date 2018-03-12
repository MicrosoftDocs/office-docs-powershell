---
title: "Add-MailboxPermission"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/27/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a9aacbf5-5e6c-47ef-95d6-e24547e95d01
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Add-MailboxPermission

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Add-MailboxPermission** cmdlet to add permissions to a mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Add-MailboxPermission -AccessRights <MailboxRights[]> -Identity <MailboxIdParameter> -User <SecurityPrincipalIdParameter> [-AutoMapping <$true | $false>] [-Deny <SwitchParameter>] [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example assigns the user Kevin Kelly Full Access permission to Terry Adams's mailbox.
  
```
Add-MailboxPermission -Identity "Terry Adams" -User "Kevin Kelly" -AccessRights FullAccess -InheritanceType All
```

### Example 2

This example sets the user Tony Smith as the owner of the resource mailbox named Room 222.
  
```
Add-MailboxPermission -Identity "Room 222" -Owner "Tony Smith"
```

### Example 3

This example assigns the user Mark Steele Full Access permission to Jeroen Cool's mailbox, prevents Outlook from opening Jeroen Cool's mailbox when Mark Steele opens Outlook.
  
```
Add-MailboxPermission -Identity "Jeroen Cool" -User "Mark Steele" -AccessRights FullAccess -InheritanceType All -AutoMapping $false
```

### Example 4

In Office 365, this example assigns the administrator account admin@contoso.com Full Access permission to all user mailboxes in the contoso.com Office 365 organization.
  
```
Get-Mailbox -ResultSize unlimited -Filter {(RecipientTypeDetails -eq 'UserMailbox') -and (Alias -ne 'Admin')} | Add-MailboxPermission -User admin@contoso.com -AccessRights FullAccess -InheritanceType All
```

## Detailed Description
<a name="DetailedDescription"> </a>

This cmdlet updates the mailbox object that's specified by the _Identity_ parameter.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccessRights_ <br/> |Required  <br/> |Microsoft.Exchange.Management.RecipientTasks.MailboxRights[]  <br/> | The _AccessRights_ parameter specifies the permission that you want to assign to the user on the mailbox. Valid values are: <br/>  `ChangeOwner` <br/>  `ChangePermission` <br/>  `DeleteItem` <br/>  `ExternalAccount` <br/>  `FullAccess` <br/>  `ReadPermission` <br/>  You can specify multiple values separated by commas. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox where you want to assign permissions to the user. You can use any value that uniquely identifies the mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Instance_ <br/> |Required  <br/> |Microsoft.Exchange.Management.RecipientTasks.MailboxAcePresentationObject  <br/> |The _Instance_ parameter is no longer used and will be deprecated. <br/> |
| _Owner_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> | The _Owner_ parameter specifies the owner of the mailbox object. The default mailbox owner is `NT AUTHORITY\SELF`.  <br/>  The owner that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the owner. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _User_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.SecurityPrincipalIdParameter  <br/> | The _User_ parameter specifies the user that you're assigning the permission to. <br/>  The user that you specify for this parameter must be a user or security group (a security principal that can have permissions assigned). You can use any value that uniquely identifies the user. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _AutoMapping_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AutoMapping_ parameter specifies whether to enable or disable the auto-mapping feature in Microsoft Outlook that uses Autodiscover to automatically open other mailboxes for the user. Valid values are: <br/>  `$true`: Outlook automatically opens the mailbox where the user is assigned Full Access permission. This is the default value.  <br/>  `$false`: Outlook doesn't automatically open the mailbox where the user is assigned Full Access permission.  <br/>  If you've already assign the user Full Access to the mailbox, and you want to prevent the mailbox from automatically opening in the user's Outlook, you need to remove the user's Full Access permission by using the **Remove-MailboxPermission** cmdlet, and then assign the permission to the user on the mailbox again, but this time include `-AutoMapping $false` in the command. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Deny_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Deny_ switch specifies whether to deny the specified permissions to the user on the mailbox. You don't need to specify a value with this switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _InheritanceType_ <br/> |Optional  <br/> |System.DirectoryServices.ActiveDirectorySecurityInheritance  <br/> | The _InheritanceType_ parameter specifies how permissions are inherited by folders in the mailbox. Valid values are: <br/>  `All` <br/>  `Children` <br/>  `Descendents` *[sic]*  <br/>  `SelfAndChildren` <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

