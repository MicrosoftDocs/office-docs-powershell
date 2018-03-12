---
title: "Get-RoleAssignmentPolicy"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: da0ecaa3-ce67-4ea2-aca3-56e056555900
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-RoleAssignmentPolicy

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-RoleAssignmentPolicy** cmdlet to view existing management role assignment policies in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RoleAssignmentPolicy [-Identity <MailboxPolicyIdParameter>] [-DomainController <Fqdn>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a list of all the existing role assignment policies.
  
```
Get-RoleAssignmentPolicy
```

### Example 2

This example returns the details of the specified assignment policy. The output of the **Get-RoleAssignmentPolicy** cmdlet is piped to the **Format-List** cmdlet.
  
```
Get-RoleAssignmentPolicy "End User Policy" | Format-List
```

For more information about pipelining and the **Format-List** cmdlet, see[Pipelining](http://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
### Example 3

This example returns the default assignment policy.
  
The output of the **Get-RoleAssignmentPolicy** cmdlet is piped to the **Where** cmdlet. The **Where** cmdlet filters out all of the policies except the policy that has the _IsDefault_ property set to `$True`.
  
```
Get-RoleAssignmentPolicy | Where { $_.IsDefault -eq $True }
```

For more information about pipelining and the **Format-List** cmdlet, see[Pipelining](http://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

For more information about assignment policies, see [Understanding End User Role Assignment and Policies](http://technet.microsoft.com/library/25913e43-326a-4371-90b5-021a35f100fe.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxPolicyIdParameter  <br/> |The  _Identity_ parameter specifies the name of the assignment policy to view. If the name contains spaces, enclose the name in quotation marks ("). <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

