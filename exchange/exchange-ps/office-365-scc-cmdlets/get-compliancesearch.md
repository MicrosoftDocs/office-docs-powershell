---
title: "Get-ComplianceSearch"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 9/26/2016
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 3bf7edeb-7674-464e-abad-4b1b8858114d
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ComplianceSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ComplianceSearch** cmdlet to view estimate compliance searches in Exchange Server 2016 and in the Office 365 Security &amp; Compliance Center. After you use the **New-ComplianceSearchAction** cmdlet to define a preview action for the compliance search, use the **Get-ComplianceSearchAction** cmdlet to view the results of the compliance search.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ComplianceSearch [-Identity <ComplianceSearchIdParameter>] [-Case <String>] [-DomainController <Fqdn>] [-ResultSize <Unlimited>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example shows a summary list of all compliance searches.
  
```
Get-ComplianceSearch
```

### Example 2

This examples show details of the compliance search named Case 1234.
  
```
Get-ComplianceSearch -Identity "Case 1234" | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group. 
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Case_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Office.ComplianceJob.Tasks.ComplianceSearchIdParameter  <br/> | The _Identity_ parameter specifies the compliance search that you want to view. <br/>  You can use any value that uniquely identifies the compliance search. For example: <br/>  Name <br/>  `JobRunId` (GUID) <br/>  You can find these values by running the command `Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status` <br/>  To improve the performance of this cmdlet, some compliance search properties aren't returned if you don't specify the identity of the compliance search. These properties are: <br/> **Items** <br/> **Size** <br/> **SuccessResults** <br/> **NumBindings** <br/> **ExchangeLocation** <br/> **SharePointLocation** <br/> **OneDriveLocation** <br/>  To view these properties, you need to use the _Identity_ parameter in the command. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

