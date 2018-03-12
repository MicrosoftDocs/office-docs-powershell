---
title: "Set-SearchDocumentFormat"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: d4aa8525-32de-4816-82d5-dfa3396d5006
description: "This cmdlet is available only in on-premises Exchange."
---

# Set-SearchDocumentFormat

This cmdlet is available only in on-premises Exchange. 
  
Use the **Set-SearchDocumentFormat** cmdlet to enable or disable the file format for Exchange Search.
  
> [!IMPORTANT]
> When you disable a file format for content indexing by Exchange Search, contents of the file become unsearchable by Exchange Search clients such as Outlook on the web, Microsoft Outlook in online mode, and In-Place eDiscovery. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SearchDocumentFormat -Enabled <$true | $false> -Identity <SearchDocumentFormatId> [-Confirm [<SwitchParameter>]] [-Server <ServerIdParameter>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This command disables the Zip file format for indexing by Exchange Search.
  
```
Set-SearchDocumentFormat ZIP -Enabled $false
```

## Detailed Description
<a name="DetailedDescription"> </a>

Exchange Search includes built-in support for indexing many file formats. If you disable indexing for a supported file format, items containing an attachment of that file type aren't considered unsearchable. When you perform an [In-Place eDiscovery](https://technet.microsoft.com/library/6377cb7a-3416-4e15-8571-c45d2160fc6f.aspx) search, and you select the option to include unsearchable items, only items that are actually unsearchable are returned. Items that weren't searched because the associated file format is set as unsearchable aren't returned.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Enabled_ <br/> |Required  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the file format is enabled. Set the parameter to `$false` to disable the format for content indexing. <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.Search.SearchDocumentFormatId  <br/> |The _Identity_ parameter specifies the identity of the file format. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Server_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.ServerIdParameter  <br/> | The _Server_ parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example: <br/>  Name <br/>  FQDN <br/>  Distinguished name (DN) <br/>  Exchange Legacy DN <br/>  If you don't use this parameter, the command is run on the local server. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

