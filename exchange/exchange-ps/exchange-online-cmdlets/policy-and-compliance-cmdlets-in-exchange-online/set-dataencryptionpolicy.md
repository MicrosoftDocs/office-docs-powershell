---
title: "Set-DataEncryptionPolicy"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 55c089cd-1497-4660-94ed-847561e89734
description: "This cmdlet is available only in the cloud-based service."
---

# Set-DataEncryptionPolicy

This cmdlet is available only in the cloud-based service. 
  
Use the **Set-DataEncryptionPolicy** cmdlet to modify data encryption policies in Exchange Online.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-DataEncryptionPolicy <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example disabled the data encryption policy named US Mailboxes.
  
```
Set-DataEncryptionPolicy -Identity "US Mailboxes" -Enabled $false
```

### Example 2

This example updates the data encryption policy named Europe Mailboxes after one of the associated keys has been rotated in the Azure Key Vault.
  
```
Set-DataEncryptionPolicy -Identity "Europe Mailboxes" -Refresh
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.DataEncryptionPolicyIdParameter  <br/> | The _Identity_ parameter specifies the data encryption policy that you want to modify. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _PermanentDataPurgeContact_ <br/> |Required  <br/> |System.String  <br/> |The  _PermanentDataPurgeContact_ parameter specifies a contact for the purge of all data that's encrypted by the data encryption policy. If the value contains spaces, enclose the value in quotation marks. <br/> You need to use this parameter with the  _PermanentDataPurgeRequested_ and _PermanentDataPurgeReason_ parameters. <br/> |
| _PermanentDataPurgeReason_ <br/> |Required  <br/> |System.String  <br/> |The  _PermanentDataPurgeReason_parameter specifies a descriptive reason for the purge of all data that's encrypted by the data encryption policy. If the value contains spaces, enclose the value in quotation marks.  <br/> You need to use this parameter with the  _PermanentDataPurgeRequested_ and _PermanentDataPurgeContact_ parameters. <br/> |
| _PermanentDataPurgeRequested_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PermanentDataPurgeRequested_switch specifies whether to initiate the deletion of all data that's encrypted by the data encryption policy. You don't need to specify a value with this switch.  <br/> You need to use this switch with the  _PermanentDataPurgeReason_ and _PermanentDataPurgeContact_ parameters. <br/> After you use this switch, you can't assign the data encryption policy to other mailboxes.  <br/> |
| _Refresh_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |Use the  _Refresh_ switch to update the data encryption policy in Exchange Online after you rotate any of the associated keys in the Azure Key Vault. You don't need to specify a value with this switch. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies an optional description for the data encryption policy. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_parameter enables or disable the data encryption policy. Valid values are:  <br/>  `$true`: The policy is enabled.  <br/>  `$false`: The policy is disabled.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |Use the  _Force_switch when you're trying to initiate the deletion of all data that's encrypted by the data encryption policy (the  _PermanentDataPurgeRequested_ switch), but the associated Azure Key Vault has also been deleted. You don't need to specify a value with this switch. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name for the data encryption policy. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

