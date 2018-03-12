---
title: "Get-ThrottlingPolicyAssociation"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 45e1248f-89c2-467c-8d5d-de1367111e08
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ThrottlingPolicyAssociation

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ThrottlingPolicyAssociation** cmdlet to view existing throttling policy associations in your organization. Throttling policies can be associated with mailboxes, user accounts, mail contacts, mail users, and Exchange server computer accounts.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ThrottlingPolicyAssociation [-Identity <ThrottlingPolicyAssociationIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a summary list of all throttling policy associations in your organization.
  
```
Get-ThrottlingPolicyAssociation -ResultSize unlimited
```

### Example 2

This example returns detailed information for the throttling policy association named Courtney Sweet that's associated with the user's mailbox.
  
```
Get-Group -Identity "Courtney Sweet" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

For more information about how to control the resources consumed by individual users, see [Exchange Workload Management](https://technet.microsoft.com/library/276740c4-bdb7-49f1-9470-ae6f2bfd65aa.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ThrottlingPolicyAssociationIdParameter  <br/> | The _Identity_ parameter specifies the throttling policy association that you want to view. You can use any value that uniquely identifies the throttling policy association. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ThrottlingPolicy_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ThrottlingPolicyIdParameter  <br/> | The _ThrottlingPolicy_ parameter filters the results by throttling policy. You can use any value that uniquely identifies the throttling policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

