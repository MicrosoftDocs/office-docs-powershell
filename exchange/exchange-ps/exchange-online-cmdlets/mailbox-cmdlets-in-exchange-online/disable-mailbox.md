---
title: "Disable-Mailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 33be55a3-1880-437d-a631-c1cca1736421

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Disable-Mailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Disable-Mailbox** cmdlet to disable the mailbox of existing users who already have mailboxes. For this cmdlet, a user could also be a public folder mailbox or an **InetOrgPerson** object. The user account that's associated with the mailbox remains, but it's no longer associated with a mailbox.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Disable-Mailbox <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disables the mailbox of the user named John Woods and removes all mailbox attributes from John's user account..
  
```
Disable-Mailbox -Identity "John Woods"
```

### Example 2

This example disables the remote archive for the on-premises user named John Woods.
  
```
Disable-Mailbox -Identity "John Woods" -RemoteArchive
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Disable-Mailbox** cmdlet removes the mailbox's Exchange attributes from Active Directory. The mailbox isn't deleted and can be reconnected to its user at a later date by using the **Connect-Mailbox** cmdlet.
  
The **Disable-Mailbox** cmdlet also performs the clean-up task on the individual mailbox, so the mailbox is disconnected immediately after this task completes.
  
Under normal circumstances, a mailbox is marked as disconnected immediately after the **Disable-Mailbox** or **Remove-Mailbox** command completes. However, if the mailbox was disabled or removed while the Exchange Information Store service was stopped, or if it was disabled or removed by an external means other than Exchange management interfaces, the status of the mailbox object in the Exchange mailbox database won't be marked as disconnected.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the mailbox that you want to mailbox-disable. You can use any value that uniquely identifies the mailbox. For example: <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _Arbitration_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Arbitration_ parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval. <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Archive_ switch specifies whether to disconnect the archive mailbox from the associated user. You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisableArbitrationMailboxWithOABsAllowed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DisableArbitrationMailboxWithOABsAllowed_ switch specifies whether to bypass the checks for offline address books (OABs) within the specified arbitration mailbox that is being mail-disabled. When you use this switch, the arbitration mailbox is disabled even if OABs are present in the mailbox. You don't need to specify a value with this switch. <br/> |
| _DisableLastArbitrationMailboxAllowed_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DisableLastArbitrationMailboxAllowed_ switch specifies whether to disable the specified mailbox, even if it's the last arbitration mailbox in the organization. If you disable the last arbitration mailbox in the organization, you can't have user-created distribution groups or moderated recipients. You don't need to specify a value with this switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _IgnoreLegalHold_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IgnoreLegalHold_ switch specifies whether to ignore the legal hold status of the user. When you disable or remove the user, the user's cloud-based mailbox that's on legal hold is also disabled or removed. You don't need to specify a value with this switch. <br/> > [!CAUTION]> After you disable or remove a mailbox, you can't include it in a discovery search. When you disable a mailbox, the mailbox is disconnected from the user account. Disconnected mailboxes and removed mailboxes are permanently deleted from the mailbox database after the deleted mailbox retention period expires. However, you can also remove a mailbox and purge it immediately from the mailbox database. Check with your organization's legal or Human Resources department before you disable or remove a mailbox that's on legal hold.           |
| _PermanentlyDisable_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _PermanentlyDisable_ switch specifies whether to permanently disable the mailbox. You don't need to specify a value with this switch. <br/> You can only use this switch on user mailboxes that aren't licensed and aren't on hold.  <br/> |
| _PublicFolder_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _PublicFolder_switch specifies that the mailbox to mailbox-disable is a public folder mailbox. You need to use this switch to mailbox-disable a public folder mailbox. You don't need to specify a value with this switch.  <br/> Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.  <br/> |
| _RemoteArchive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _RemoteArchive_switch specifies whether to disconnect the remote archive for this mailbox. A remote archive exists in the cloud-based service. When you use this switch, the **RemoteRecipientType** property for the mailbox is reset to specify that this mailbox doesn't have a remote archive. You don't need to specify a value with this switch. <br/> You can't use this switch with the  _Archive_ switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

