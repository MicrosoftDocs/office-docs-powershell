---
title: "Get-MailboxAuditBypassAssociation"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 2e3d8264-0636-419d-8677-2be456c3551b
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-MailboxAuditBypassAssociation

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-MailboxAuditBypassAssociation** cmdlet to retrieve user or computer accounts configured to bypass mailbox audit logging.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailboxAuditBypassAssociation [-Identity <MailboxAuditBypassAssociationIdParameter>] [-DomainController <Fqdn>] [-ResultSize <Unlimited>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves all user or computer accounts configured for mailbox audit logging bypass.
  
```
Get-MailboxAuditBypassAssociation -ResultSize unlimited
```

### Example 2

This example retrieves the mailbox audit bypass association for the Svc-MyApplication account.
  
```
Get-MailboxAuditBypassAssociation -Identity "Svc-MyApplication"
```

## Detailed Description
<a name="DetailedDescription"> </a>

When you configure a user or computer account to bypass mailbox audit logging, access or actions taken by the user or computer account to any mailbox isn't logged. By bypassing trusted user or computer accounts that need to access mailboxes frequently, you can reduce the noise in mailbox audit logs.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxAuditBypassAssociationIdParameter  <br/> |The _Identity_ parameter specifies a user or computer account to retrieve audit logging bypass association for. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

