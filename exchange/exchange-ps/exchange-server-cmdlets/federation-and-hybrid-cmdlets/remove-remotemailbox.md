---
title: "Remove-RemoteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 1fce0235-9a87-44ba-a3c1-7305bd73626a

description: "This cmdlet is available only in on-premises Exchange."
---

# Remove-RemoteMailbox

This cmdlet is available only in on-premises Exchange. 
  
Use the **Remove-RemoteMailbox** cmdlet to remove a mail-enabled user in the on-premises Active Directory and the associated mailbox in the cloud-based service.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Remove-RemoteMailbox -Identity <RemoteMailboxIdParameter> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-IgnoreDefaultScope <SwitchParameter>] [-IgnoreLegalHold <SwitchParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the on-premises mail-enabled user Kim Akers and the associated mailbox from the service. This example assumes directory synchronization has been configured.
  
```
Remove-RemoteMailbox "Kim Akers"
```

## Detailed Description
<a name="DetailedDescription"> </a>

With the **Remove-RemoteMailbox** cmdlet, you can remove an on-premises mail-enabled user and the mailbox from the service. If you only want to remove the mailbox from the service and keep the associated on-premises user, use the[Disable-RemoteMailbox](disable-remotemailbox.md) cmdlet.
  
Directory synchronization must be configured correctly for a mailbox to be removed from the service. Removal of the mailbox from the service isn't immediate and depends on the directory synchronization schedule.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RemoteMailboxIdParameter  <br/> | The _Identity_ parameter identifies the mail-enabled user and the associated mailbox in the service that you want to remove. You can use one of the following values: <br/>  ADObjectID <br/>  Distinguished name (DN) <br/>  Legacy DN <br/>  GUID <br/> _Domain_\ _Account name_ <br/>  User principal name (UPN) <br/>  Email address <br/>  Alias <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _IgnoreLegalHold_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _IgnoreLegalHold_ switch ignores the legal hold status of the mailbox user and allows you to remove the cloud-based mailbox on legal hold. <br/> > [!CAUTION]> After you remove a mailbox, you can't include it in a discovery search. Depending on the command parameters you use, removed mailboxes are either purged immediately or when the deleted mailbox retention period expires. Check with your organization's legal or Human Resources department before disabling a mailbox that's on legal hold.           |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

