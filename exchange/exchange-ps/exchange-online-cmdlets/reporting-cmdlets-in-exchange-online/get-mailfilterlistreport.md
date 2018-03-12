---
title: "Get-MailFilterListReport"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: e295ac9a-3ecf-405a-b81c-c77e3067126a
description: "This cmdlet is available only in the cloud-based service."
---

# Get-MailFilterListReport

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-MailFilterListReport** cmdlet to obtain values for various parameters that can be supplied to other reporting cmdlets.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-MailFilterListReport [-Domain <MultiValuedProperty>] [-Expression <Expression>] [-ProbeTag <String>] [-SelectionTarget <MultiValuedProperty>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uses the **Get-MailFilterListReport** cmdlet to return information about transport rules.
  
```
Get-MailFilterListReport -SelectionTarget TransportRule
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Domain_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Domain_ parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value `All`.  <br/> |
| _Expression_ <br/> |Optional  <br/> |System.Linq.Expressions.Expression  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ProbeTag_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SelectionTarget_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SelectionTarget_ parameter filters the report information by object type. Valid values for this parameter are: `Actions`,  `DlpPolicy`,  `DlpRule`,  `Domain`,  `EventTypes`,  `FindOnPremConnector`, or  `TransportRule`.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

