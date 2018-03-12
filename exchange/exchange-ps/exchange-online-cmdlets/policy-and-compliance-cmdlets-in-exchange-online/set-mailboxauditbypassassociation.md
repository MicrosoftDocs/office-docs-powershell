---
title: "Set-MailboxAuditBypassAssociation"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: c925a5ef-ed07-4c31-b074-7ac04aa709f6
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-MailboxAuditBypassAssociation

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-MailboxAuditBypassAssociation** cmdlet to configure mailbox audit logging bypass for user or computer accounts such as service accounts for applications that access mailboxes frequently.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-MailboxAuditBypassAssociation -Identity <MailboxAuditBypassAssociationIdParameter> -AuditBypassEnabled <$true | $false> [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example bypasses the Svc-MyApplication account from mailbox audit logging.
  
```
Set-MailboxAuditBypassAssociation -Identity "Svc-MyApplication" -AuditBypassEnabled $true
```

### Example 2

This example removes the bypass association for the Svc-MyApplication account.
  
```
Set-MailboxAuditBypassAssociation -Identity "Svc-MyApplication" -AuditBypassEnabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you configure a user or computer account to bypass mailbox audit logging, access or actions taken by the user or computer account to any mailbox isn't logged. By bypassing trusted user or computer accounts that need to access mailboxes frequently, you can reduce the noise in mailbox audit logs.
  
> [!CAUTION]
> If you use mailbox audit logging to audit mailbox access and actions, you must monitor mailbox audit bypass associations at regular intervals. If a mailbox audit bypass association is added for an account, the account can access any mailbox in the organization to which it has been assigned access permissions, without any mailbox audit logging entries being generated for such access, or any actions taken such as message deletions. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AuditBypassEnabled_ <br/> |Required  <br/> |System.Boolean  <br/> | The _AuditBypassEnabled_ parameter specifies whether audit bypass is enabled for the user or computer. Valid values include the following: <br/>  `$true`: Enables mailbox audit logging bypass  <br/>  `$false`: Disables mailbox audit logging bypass  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxAuditBypassAssociationIdParameter  <br/> |The  _Identity_ parameter specifies a user or computer account to be bypassed from mailbox audit logging. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

