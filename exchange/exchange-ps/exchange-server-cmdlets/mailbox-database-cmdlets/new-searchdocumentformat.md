---
title: "New-SearchDocumentFormat"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 0a00f1e7-15d2-4a3e-a6a6-0d1f8661ebcb
description: "This cmdlet is available only in on-premises Exchange."
---

# New-SearchDocumentFormat

This cmdlet is available only in on-premises Exchange. 
  
Use the **New-SearchDocumentFormat** cmdlet to add a format-specific filter to those used by Exchange search.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-SearchDocumentFormat -Extension <String> -Identity <SearchDocumentFormatId> -MimeType <String> -Name <String> [-Confirm [<SwitchParameter>]] [-Enabled <$true | $false>] [-Server <ServerIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new search document format with an extension of .sct and a MIME type of text/scriptlet.
  
```
New-SearchDocumentFormat -Name "Proprietary SCT Formats" -MimeType text/scriptlet -Extension .sct -Identity ProprietarySCT1
```

## Detailed Description
<a name="DetailedDescription"> </a>

After running the **New-SearchDocumentFormat** cmdlet, your must run the following cmdlet to restart the search service. There will be a brief search outage.
  
```
Restart-Service HostControllerService
```

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Extension_ <br/> |Required  <br/> |System.String  <br/> |The _Extension_ parameter specifies the file type to be processed by the filter, and is designated by the common file extension associated with the file type. Examples include .MP3, .JPG, and .PNG. Note the leading period. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Search.SearchDocumentFormatId  <br/> |The _Identity_ parameter uniquely identifies the new search document format. For example, an identity of "PropSCT" might specify a proprietary document format which is supported by a custom **IFilter**. The _Identity_ parameter must be unique within the search document formats. <br/> |
| _MimeType_ <br/> |Required  <br/> |System.String  <br/> |The _MimeType_ parameter specifies the MIME type of the format. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ specifies a friendly name for the format, but does not need to be unique. For example, you might have several different formats (supported by custom **IFilters** ) that are used to index output from a proprietary system called "My Business Output". You could use the _Name_ parameter to create a category of formats called "My Business Output Formats", and uniquely identify each format within that group using the _Identity_ parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the new format is enabled at creation. <br/> Valid input for this parameter is  `$true` or `$false`. The default is  `$true`.  <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

