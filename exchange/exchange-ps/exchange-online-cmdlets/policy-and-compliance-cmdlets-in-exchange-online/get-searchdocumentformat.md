---
title: "Get-SearchDocumentFormat"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7e966dba-82ea-416f-b859-1ffb7bd7c713
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-SearchDocumentFormat

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-SearchDocumentFormat** cmdlet to retrieve details of file formats supported by Exchange Search.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-SearchDocumentFormat [-Identity <SearchDocumentFormatId>] [-Server <ServerIdParameter>]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves a list of all file formats supported by Exchange Search.
  
```
Get-SearchDocumentFormat
```

### Example 2

This example retrieves all properties of the docx file format.
  
```
Get-SearchDocumentFormat docx | Format-List *
```

## Detailed Description
<a name="DetailedDescription"> </a>

Exchange Search includes built-in support for indexing many file formats. Output from the **Get-SearchDocumentFormat** cmdlet includes details about each supported file format, including whether content indexing is enabled for the file format, the format handler, and the file extension (such as .docx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Search.SearchDocumentFormatId  <br/> |The  _Identity_ parameter specifies the identity of a file format. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Server_ parameter specifies the name of the server against which the command is executed. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

