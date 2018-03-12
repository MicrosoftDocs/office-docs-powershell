---
title: "Get-UserPrincipalNamesSuffix"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 7d7ce148-4924-49e9-a57d-06bdc2d9f365
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-UserPrincipalNamesSuffix

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-UserPrincipalNamesSuffix** cmdlet to view the user principal name (UPN) suffixes in the Active Directory forest. The UPN suffixes are created in Active Directory Domains and Trusts.
  
```
Get-UserPrincipalNamesSuffix [-OrganizationalUnit <ExtendedOrganizationalUnitIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns all UPN suffixes for the Active Directory forest.
  
```
Get-UserPrincipalNamesSuffix
```

## Detailed Description
<a name="DetailedDescription"> </a>

UPN suffixes assigned to an organizational unit are stored in the **upnSuffixes** attribute in the **Organizational Unit** object.
  
The default UPN is contained in the **Canonical Name** attribute on the **Partitions container** object in the configuration naming context. The default UPN suffix identifies the domain in which the user account is contained. When you create a user account in Active Directory, the default UPN suffix is the DNS name of the first domain in your domain tree.
  
If you create user accounts by using Active Directory Users and Computers, every user must have a UPN.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ExtendedOrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

