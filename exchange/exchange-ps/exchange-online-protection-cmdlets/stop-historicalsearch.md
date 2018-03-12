---
title: "Stop-HistoricalSearch"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 8868372f-842b-417d-acb2-8c08a914a779
description: "This cmdlet is available only in the cloud-based service."
---

# Stop-HistoricalSearch

This cmdlet is available only in the cloud-based service. 
  
Use the **Stop-HistoricalSearch** cmdlet to stop an existing historical search that has a status value of `NotStarted`.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Stop-HistoricalSearch -JobId <Guid>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example stops the historical search that has the  _JobId_ value `f9c66f83-b5c8-4a0c-91f4-a38376f74182`.
  
```
Stop-HistoricalSearch -JobId f9c66f83-b5c8-4a0c-91f4-a38376f74182
```

## Detailed Description
<a name="DetailedDescription"> </a>

A historical search provides message trace and report details in a comma-separated value (CSV) file for messages that are between seven and ninety days old.
  
After you start a historical search by using the **Start-HistoricalSearch** cmdlet, the search is queued, but not actually running. While the search is queued and has the status value of `NotStarted`, you can use the **Stop-HistoricalSearch** cmdlet to stop it. After the search is actively running, and has a status value of `InProgress`, you can't stop it. When you stop a historical search, it's given a status value of  `Cancelled`.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _JobId_ <br/> |Required  <br/> |System.Guid  <br/> |The  _JobId_ parameter specifies the identity GUID value of the historical search that you want to stop. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

