---
title: "Undo-SoftDeletedMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: e12b0c43-06c7-45f9-9890-eaac56745573

description: "This cmdlet is available only in the cloud-based service."
---

# Undo-SoftDeletedMailbox

This cmdlet is available only in the cloud-based service. 
  
Use the **Undo-SoftDeletedMailbox** cmdlet to recover a mailbox that has been deleted. Mailboxes can be recovered within 30 days of being deleted.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Undo-SoftDeletedMailbox -SoftDeletedObject <MailboxIdParameter> [-Name <String>] [-Password <SecureString>] [-WindowsLiveID <WindowsLiveId>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example recovers the deleted mailbox for the user Florence Flipo. When this mailbox was deleted, the associated Windows Live ID was also deleted.
  
```
Undo-SoftDeletedMailbox -SoftDeletedObject florencef
```

### Example 2

This example recovers the deleted mailbox for the user Brian Johnson. When this mailbox was deleted, the associated Microsoft account (formerly known as a Windows Live ID) wasn't deleted. Note that a new Microsoft account and password have to be created to recover this mailbox. In the scenario, the old Microsoft account is retained as a proxy address for the mailbox.
  
```
Undo-SoftDeletedMailbox bjohnson@contoso.edu -WindowsLiveID brianj@contoso.edu -Password (ConvertTo-SecureString -String 'Pa$$word1' -AsPlainText -Force)
```

## Detailed Description
<a name="DetailedDescription"> </a>

Use the **Undo-SoftDeletedMailbox** cmdlet to recover a mailbox that has been deleted. When a mailbox is deleted with the **Remove-Mailbox** cmdlet, it's not actually deleted. It's hidden in Exchange and moved in Active Directory to the organizational unit (OU) Soft Deleted Objects. This enables administrators to recover deleted mailboxes for up to 30 days after deletion.
  
If the Microsoft account (formerly known as a Windows Live ID) wasn't deleted when the mailbox was deleted, you have to specify a new Microsoft account and password when you use the **Undo-SoftDeletedMailbox** cmdlet to recover a mailbox.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _PublicFolder_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PublicFolder_ switch specifies that the deleted mailbox you want to recover is a public folder mailbox. You don't need to specify a value with this switch. <br/> |
| _SoftDeletedObject_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> |The  _SoftDeletedObject_ parameter specifies the identity of the deleted mailbox to recover. You can use the alias or the email address of the deleted mailbox for the value of this parameter. Use the **Get-Mailbox -SoftDeletedMailbox** command to get information for deleted mailboxes. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the new display name for the recovered mailbox. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies a new value for the _Name_ property of the recovered mailbox. Otherwise, the original value is retained when the mailbox is recovered. The new name value is also used in the _DistinguishedName_ property. <br/> |
| _Password_ <br/> |Optional  <br/> |System.Security.SecureString  <br/> |The  _Password_ parameter specifies a new password for the mailbox. <br/> This parameter uses the syntax  `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, to be prompted to enter the password and store it as a variable, run the command  `$password = Read-Host "Enter password" -AsSecureString`, and then use the value  `$password` for this parameter. <br/> > [!IMPORTANT]> You have to include the  _Password_ parameter to recover a deleted mailbox with an existing Microsoft account (formerly known as a Windows Live ID) that wasn't deleted with the mailbox.          |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
| _WindowsLiveID_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.WindowsLiveId  <br/> |The  _WindowsLiveID_ parameter specifies a new Microsoft account (formerly known as a Windows Live ID) and primary SMTP for the mailbox. The previous Microsoft account is retained as a proxy address for the mailbox. <br/> > [!IMPORTANT]> You have to include the  _WindowsLiveID_ parameter to recover a deleted mailbox with an existing Microsoft account (formerly known as a Windows Live ID) that wasn't deleted with the mailbox.          |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

