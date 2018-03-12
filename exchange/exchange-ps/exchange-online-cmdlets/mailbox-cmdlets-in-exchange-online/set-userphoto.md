---
title: "Set-UserPhoto"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/25/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b4990d83-79c1-4b75-9271-4fa69757195e
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-UserPhoto

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Set-UserPhoto** cmdlet to configure the user photos feature that allows users to associate a picture with their account. User photos appear in on-premises and cloud-based client applications, such as Outlook on the web, Lync, Skype for Business, and SharePoint.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Set-UserPhoto -Identity <MailboxIdParameter> -PictureData <Byte[]> <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example uploads and saves a photo to Paul Cannon's user account using a single command.
  
```
Set-UserPhoto -Identity "Paul Cannon" -PictureData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\PaulCannon.jpg"))
```

### Example 2

This example shows how to use two commands to upload and save a preview photo to Ann Beebe's user account. The first command uploads a preview photo to Ann Beebe's user account, and the second command saves the uploaded photo as the preview photo.
  
```
Set-UserPhoto -Identity "Ann Beebe" -PictureData ([System.IO.File]::ReadAllBytes("C:\Users\Administrator\Desktop\AnnBeebe.jpg")) -Preview; Set-UserPhoto "Ann Beebe" -Save
```

### Example 3

This example deletes the preview photo that was uploaded in the previous example.
  
```
Set-UserPhoto -Identity "Ann Beebe" -Cancel
```

## Detailed Description
<a name="DetailedDescription"> </a>

The user photos feature allows users to associate a picture with their account. User photos are stored in the user's Active Directory account and in the root directory of the user's Exchange mailbox. Administrators use the **Set-UserPhoto** cmdlet to configure user photos. Users can upload, preview, and save a user photo to their account by using the Outlook on the web Options page. When a user uploads a photo, a preview of the photo is displayed on the Outlook on the web Options page. This is the preview state, and creates the same result as running the **Set-UserPhoto** cmdlet using the _Preview_ parameter. If the user clicks **Save**, the preview photo is saved as the user's photo. This is the same result as running the  `Set-UserPhoto -Save` command or running both the `Set-UserPhoto -Preview` and `Set-UserPhoto -Save` commands. If the user cancels the preview photo on the Outlook on the web Options page, then the `Set-UserPhoto -Cancel` command is called.
  
A user photo must be set for a user before you can run the **Get-UserPhoto** cmdlet to view information about the user's photo. Otherwise, you'll get an error message saying the user photo doesn't exist for the specified user. Alternatively, you can run the `Get-UserPhoto -Preview` command to view information about a preview photo.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Cancel_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Cancel_switch parameter deletes the photo that's currently uploaded as the preview photo. You don't need to specify a value with this switch.  <br/> To delete the photo that's currently associated with a user's account, use the **Remove-UserPhoto** cmdlet. The _Cancel_switch only deletes the preview photo.  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the identity of the user. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _PictureData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The  _PictureData_ parameter specifies the photo file that will be uploaded to the user's account. <br/> This parameter uses the syntax  `([System.IO.File]::ReadAllBytes("<`file name and path `>"))`. The following is an example.  `([System.IO.File]::ReadAllBytes("C:\Documents\Pictures\MyPhoto.jpg"))`.  <br/> |
| _PictureStream_ <br/> |Required  <br/> |System.IO.Stream  <br/> |The  _PictureStream_ parameter specifies the photo that will be uploaded to the user's account. This parameter is used by client applications such as Outlook on the web when users add a photo. To upload a photo using PowerShell, use the _PictureData_ parameter to specify the photo file. <br/> |
| _Preview_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Preview_switch uploads a preview photo for the user account. You don't need to specify a value with this switch.  <br/> A preview photo is the photo object that is uploaded to the user's account, but isn't saved. For example, if a user uploads a photo in Outlook on the web Options to preview before saving it. If you use the  _Preview_switch to upload a preview photo, you need to run the command  `Set-UserPhoto -Save` to save it as the user's photo. <br/> |
| _Save_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Save_switch specifies that the photo that's uploaded to the user's account will be saved as the user's photo. You don't need to specify a value with this switch.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _GroupMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _GroupMailbox_ switch indicates the specified user is an Office 365 Group. You don't need to specify a value with this switch. <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _PhotoType_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

