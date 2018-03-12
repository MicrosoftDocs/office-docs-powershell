---
title: "New-DataEncryptionPolicy"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: b6965214-8df9-4024-98bf-0ae92c676950
description: "This cmdlet is available only in the cloud-based service."
---

# New-DataEncryptionPolicy

This cmdlet is available only in the cloud-based service.
  
Use the **New-DataEncryptionPolicy** cmdlet to create data encryption policies in Exchange Online.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-DataEncryptionPolicy -AzureKeyIDs <MultiValuedProperty> -Name <String> [-Confirm [<SwitchParameter>]] [-Description <String>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a data encryption policy named US Mailboxes with the specified Azure Key Vault keys and description.
  
```
New-DataEncryptionPolicy -Name "US Mailboxes" -AzureKeyIDs "https://contosoWestUSvault01.vault.azure.net/keys/USA_Key_01","https://contosoEastUSvault01.vault.azure.net/keys/USA_Key_02" -Description "Root key for mailboxes located in US territories"
```

## Detailed Description
<a name="DetailedDescription"> </a>

Data encryption policy cmdlets are the Exchange Online part of service encryption with Customer Key in Office 365. For more information, see [Controlling your data in Office 365 using Customer Key](https://aka.ms/customerkey).
  
You can assign a data encryption policy to a mailbox by using the  _DataEncryptionPolicy_ parameter on the **Set-Mailbox** cmdlet in Exchange Online PowerShell.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AzureKeyIDs_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AzureKeyIDs_parameter specifies the URI values of the Azure Key Vault keys to associate with the data encryption policy. You need to specify at least two Azure Key Vault keys separated by commas. For example,  `"https://contosoWestUSvault01.vault.azure.net/keys/USA_Key_01","https://contosoEastUSvault01.vault.azure.net/keys/USA_Key_02"` <br/> To find the URI value for an Azure Key Vault, replace  _\<ValutName\>_ with the name of the vault, and run this command in Azure Rights Management PowerShell: `Get-AzureKeyVaultKey -VaultName <VaultName>).id`. For more information, see [Get started with Azure Key Vault](https://go.microsoft.com/fwlink/p/?linkid=521402).  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name for the data encryption policy. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies an optional description for the data encryption policy. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_parameter enables or disable the data encryption policy. Valid values are:  <br/>  `$true`: The policy is enabled. This is the default value.  <br/>  `$false`: The policy is disabled.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

