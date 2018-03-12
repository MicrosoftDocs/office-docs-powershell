---
title: "Get-CASMailboxPlan"
ms.author: chrisda
author: chrisda
ms.date: 3/28/2017
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: c8df374b-db7c-4dbc-b6d5-3ffcbbe4274b
description: "This cmdlet is available only in the cloud-based service."
---

# Get-CASMailboxPlan

This cmdlet is available only in the cloud-based service.
  
Use the **Get-CASMailboxPlan** cmdlet to view Client Access services (CAS) mailbox plans in the cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-CASMailboxPlan [-Identity <MailboxPlanIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope <SwitchParameter>] [-ReadFromDomainController <SwitchParameter>] [-ResultSize <Unlimited>] [-SortBy <String>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all CAS mailbox plans in the organization.
  
```
Get-CASMailboxPlan | Format-Table -Auto DisplayName,ActiveSyncEnabled,ImapEnabled,PopEnabled,OwaMailboxPolicy
```

### Example 2

This example returns detailed information about the CAS mailbox plan named  `ExchangeOnlineEnterprise`.
  
```
Get-CASMailboxPlan -Identity ExchangeOnlineEnterprise
```

## Detailed Description
<a name="DetailedDescription"> </a>

CAS mailbox plans control client access settings for all mailboxes that have the plans assigned to them (for example, Exchange ActiveSync, POP, IMAP, and Outlook on the web settings).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The  _Filter_ parameter indicates the OPath filter used to filter recipients. <br/> For more information about the filterable properties, see [Filterable properties for the -Filter parameter](https://technet.microsoft.com/library/bb738155.aspx).  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPlanIdParameter  <br/> | The _Identity_ parameter specifies the CAS mailbox plan that you want to view. You can use any value that uniquely identifies the CAS mailbox plan. For example: <br/>  Name <br/>  Display Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Typically, the name of the CAS mailbox plan is the same as the corresponding mailbox plan (for example, `ExchangeOnlineEnterprise`).  <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following attributes: <br/>  Display name <br/>  Name <br/>  The results are sorted in ascending order. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

