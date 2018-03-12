---
title: "Get-TransportRule"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/12/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 63a14c30-331d-458b-91d1-71d28a6e3d5a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-TransportRule

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Get-TransportRule** cmdlet to view transport rules (mail flow rules) in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Get-TransportRule [-Identity <RuleIdParameter>] [-DlpPolicy <String>] [-DomainController <Fqdn>] [-Filter <String>] [-ResultSize <Unlimited>] [-State <Enabled | Disabled>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all rules in your organization.
  
```
Get-TransportRule
```

### Example 2

This example returns detailed information for the rule named "Ethical Wall - Sales and Brokerage Departments".
  
```
Get-TransportRule "Ethical Wall - Sales and Brokerage Departments" | Format-List
```

For more information about pipelining, see [Pipelining](http://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx). For more information about how to work with the output of a command, see [Manipulating Command Output](http://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
### Example 3

This example returns a summary list of the rules that enforce the DLP policy named PII (U.S.) in your organization.
  
```
Get-TransportRule -DlpPolicy "PII (U.S.)"
```

### Example 4

This example returns a summary list of all rules that enforce DLP policies in your organization.
  
```
Get-TransportRule | Where {$_.DlpPolicy -ne $null}
```

## Detailed Description
<a name="DetailedDescription"> </a>

On Mailbox servers, this cmdlet returns all rules in the Exchange organization that are stored in Active Directory. On an Edge Transport server, this cmdlet only returns rules that are configured on the local sever.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DlpPolicy_ <br/> |Optional  <br/> |System.String  <br/> |The  _DlpPolicy_ parameter filters the results by the named of the specified data loss prevention (DLP) policy. If the value contains spaces, enclose the value in quotation marks ("). <br/> DLP policies in your organization allow you to prevent unintentional disclosure of sensitive information. Each DLP policy is enforced using a set of transport rules.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The  _Filter_ parameter filters the results by using an OPath. This parameter searches the **Description** property, which includes the conditions, exceptions, actions and the associated values of a transport rule. <br/> This parameter uses the syntax  `-Filter "Description -like '*<text>*'"`. For example,  `-Filter "Description -like *192.168.1.1*'"`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.Tasks.RuleIdParameter  <br/> | The _Identity_ parameter specifies the rule that you want to view. You can use any value that uniquely identifies the rule. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _State_ <br/> |Optional  <br/> |Microsoft.Exchange.MessagingPolicies.Rules.RuleState  <br/> | The _State_ parameter specifies filters the results by enabled or disabled rules. Valid values are: <br/>  `Enabled`: Only enabled rules are returned in the results.  <br/>  `Disabled`: Only disabled rules are returned in the results.  <br/>  If you don't use this parameter, the command returns all rules, both enabled and disabled. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

