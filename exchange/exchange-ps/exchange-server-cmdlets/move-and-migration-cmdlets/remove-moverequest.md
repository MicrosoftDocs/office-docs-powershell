---
title: "Remove-MoveRequest"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Remove-MoveRequest

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Remove-MoveRequest** cmdlet to cancel a mailbox move initiated using the **New-MoveRequest** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Remove-MoveRequest -Identity <MoveRequestIdParameter> [-Force <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example removes the mailbox move request for Ayla Kol's mailbox.
  
```
Remove-MoveRequest -Identity 'Ayla@humongousinsurance.com'
```

### Example 2

This example cancels a mailbox move for a mailbox by using the _MailboxGuid_ parameter for a mailbox on MBXDB01.
  
> [!NOTE]
> The _MailboxGuid_ and _MoveRequestQueue_ parameters are for debugging purposes only.
  
```
Remove-MoveRequest -MoveRequestQueue MBXDB01 -MailboxGuid 25e0eaf2-6cc2-4353-b83e-5cb7b72d441f
```

## Detailed Description
<a name="DetailedDescription"> </a>

> [!CAUTION]
> In coexistence environments with Exchange 2010 and newer versions of Exchange, don't run newer versions of **Remove-MoveRequest** to clear completed Exchange 2010 move requests as documented in[Clear or Remove Move Requests](https://technet.microsoft.com/library/dd351276.aspx). If you do, you could delete the mailbox that you just moved. Instead, only use the Exchange 2010 version of **Remove-MoveRequest** to clear completed Exchange 2010 move requests in coexistence environments.> In Exchange 2010, you need to use the **Remove-MoveRequest** cmdlet on completed move requests to clear the **InTransit** flag from the mailbox. This step isn't required for mailbox moves in newer versions of Exchange where the **Remove-MoveRequest** is only used to cancel existing move requests.
  
The _MoveRequestQueue_ and _MailboxGuid_ parameters are for debugging purposes only.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.MailboxReplicationService.MoveRequestIdParameter  <br/> | The _Identity_ parameter specifies the identity of the mailbox or mail user. You can use the following values: <br/>  GUID <br/>  Distinguished name (DN) <br/> _Domain\Account_ <br/>  User principal name (UPN) <br/>  Legacy Exchange DN <br/>  SMTP address <br/>  Alias <br/>  You can't use this parameter in conjunction with the _MailboxGuid_ or _MoveRequestQueue_ parameters. <br/> |
| _MailboxGuid_ <br/> |Required  <br/> |System.Guid  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _MailboxGuid_ parameter specifies the GUID of the mailbox for which you want to remove the move request. If you specify the _MailboxGuid_ parameter, you must also specify the _MoveRequestQueue_ parameter. <br/> You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _MoveRequestQueue_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _MoveRequestQueue_ parameter specifies the database on which the move request is queued. You can use the following values: <br/>  GUID of the database <br/>  Database name <br/>  You can't use this parameter in conjunction with the _Identity_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _ProxyToMailbox_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | This parameter is available only in the cloud-based service. <br/>  The _ProxyToMailbox_ parameter specifies the move destination by the location of the specified mailbox (also known asproxying). You can use any value that uniquely identifies the mailbox.  <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

