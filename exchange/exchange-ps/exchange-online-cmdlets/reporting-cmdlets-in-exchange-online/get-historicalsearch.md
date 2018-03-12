---
title: "Get-HistoricalSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 70f2ec73-2733-4f87-ac89-1665d575a4dc
description: "This cmdlet is available only in the cloud-based service."
---

# Get-HistoricalSearch

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-HistoricalSearch** cmdlet to view information about historical searches that have been performed within the last ten days.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-HistoricalSearch [-JobId <Guid>]

```

## Examples
<a name="Examples"> </a>

### Example 1

The example returns a summary list of all historical searches that have been performed in the last ten days.
  
```
Get-HistoricalSearch
```

### Example 2

This example returns detailed information about the historical search that's in progress that has the identity value f9c66f83-b5c8-4a0c-91f4-a38376f74182.
  
```
Get-HistoricalSearch -JobId f9c66f83-b5c8-4a0c-91f4-a38376f74182 | Format-List
```

## Detailed Description
<a name="DetailedDescription"> </a>

A historical search provides message trace and report details in a comma-separated value (CSV) file for messages that are between seven and ninety days old.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _JobId_ <br/> |Optional  <br/> |System.Guid  <br/> |The  _JobId_ parameter specifies the GUID identifier of the historical search that you want to view. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

