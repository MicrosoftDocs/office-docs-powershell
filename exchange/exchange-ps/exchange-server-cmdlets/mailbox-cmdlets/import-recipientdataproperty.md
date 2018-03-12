---
title: "Import-RecipientDataProperty"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: f3baf354-3d7d-4909-b4fa-754d1e44bf1f
description: "This cmdlet is available only in on-premises Exchange."
---

# Import-RecipientDataProperty

This cmdlet is available only in on-premises Exchange. 
  
Use the **Import-RecipientDataProperty** cmdlet to add a picture or an audio file of a spoken name to a mailbox or contact. The picture and audio files display on the **Global Address List** property dialog box, contact card, reading pane, and meeting requests in Microsoft Outlook and Outlook on the web.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Import-RecipientDataProperty [-Picture <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports the audio file for Tony Smith's spoken name.
  
```
Import-RecipientDataProperty -Identity "Tony Smith" -SpokenName -FileData ([Byte[]]$(Get-Content -Path "M:\AudioFiles\TonySmith.wma" -Encoding Byte -ReadCount 0))
```

### Example 2

This example imports the picture file for Ayla Kol.
  
```
Import-RecipientDataProperty -Identity Ayla -Picture -FileData ([Byte[]]$(Get-Content -Path "M:\Employee Photos\AylaKol.jpg" -Encoding Byte -ReadCount 0))
```

## Detailed Description
<a name="DetailedDescription"> </a>

Importing and exporting files require a specific syntax because importing and exporting use Remote PowerShell.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _FileData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The _FileData_ parameter specifies the location and file name of the picture or audio file. <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxUserContactIdParameter  <br/> | The _Identity_ parameter specifies the mailbox or contact that you're adding the picture or spoken name file to. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Picture_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Picture_ switch specifies that the file you're importing is a picture file. You don't need to specify a value with this switch. <br/> The picture must be a JPEG file and shouldn't be larger than 10 kilobytes (KB). You can't use this switch with the _SpokenName_ switch. You can only import one file type at a time. <br/> |
| _SpokenName_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _SpokenName_ switch specifies that the file you're importing is an audio file. You don't need to specify a value with this switch. <br/>  The maximum file size should be less than 32 KB. You can use one of the following formats: <br/>  WMA 9-voice <br/>  PCM 8-KHz, 16-bits, mono format <br/>  You can't use this switch with the _Picture_ switch. You can only import one file type at a time. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

