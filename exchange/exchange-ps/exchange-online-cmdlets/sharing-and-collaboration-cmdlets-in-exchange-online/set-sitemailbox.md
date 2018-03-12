---
title: "Set-SiteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7e4482c0-8ff6-40ab-a315-c460a6f7eeec
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-SiteMailbox

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-SiteMailbox** cmdlet to change a site mailbox's settings, such as the Microsoft SharePoint URL. This cmdlet is primarily used by the SharePoint and Microsoft Exchange user interfaces, such as the SharePoint URL. This cmdlet should only be used for diagnostic and troubleshooting purposes.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-SiteMailbox <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the SharePoint URL for the MarketingEvents 2013 site mailbox.
  
```
Set-SiteMailbox -Identity "MarketingEvents 2013" -SharePointUrl "https://myserver/teams/marketing"
```

### Example 2

This example disables the duplication of email messages in the site mailbox SMO_ContosoSales.
  
```
Set-SiteMailbox -Identity SMO_ContosoSales -RemoveDuplicateMessages $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the identity of the site mailbox. You can use any of the following values: <br/>  Distinguished name (DN) <br/>  GUID <br/>  Name <br/>  Display name <br/>  Alias <br/>  Primary SMTP address <br/> |
| _Active_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _Active_ parameter specifies whether to change the site mailbox's lifecycle status. This parameter accepts `$true` or `$false`. This parameter is intended for use only by the user interface. We recommend that you don't use this parameter in the Exchange Management Shell.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DisplayName_ <br/> |Optional  <br/> |System.String  <br/> |The  _DisplayName_ parameter specifies the display name of the site mailbox. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Members_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> |The  _Members_ parameter specifies the members of the site mailbox. You can add or remove members using this parameter. This is a multivalued parameter and multiple recipients should be separated by a comma. This parameter is intended for use only by the user interface. We recommend that you don't use this parameter in the Shell. <br/> |
| _Owners_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter[]  <br/> |The  _Owners_ parameter specifies the site mailbox's owners. This is a multivalued field and multiple recipients should be separated by commas. This parameter is intended for use only by the user interface. We recommend that you don't use this parameter in the Shell. <br/> |
| _RemoveDuplicateMessages_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _RemoveDuplicateMessages_ parameter specifies that when users post messages to a site mailbox, duplicate messages will be deleted. This parameter accepts the values of `$true` or `$false`. The default value is  `$false`.  <br/> |
| _SharePointUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _SharePointUrl_ parameter specifies the URL of the SharePoint site, for example, `"https://myserver/teams/edu"`.  <br/> |
| _ShowInMyClient_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _ShowInMyClient_ parameter specifies that the site mailbox folder will show in your email client. This parameter is intended for use only by the user interface. We recommend that you don't use this parameter in the Shell. <br/> |
| _SyncEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _SyncEnabled_ parameter specifies whether to enable or disable synchronization for the site mailbox. Valid values are: <br/>  `$true`: Synchronization is enabled.  <br/>  `$true`: Synchronization is disabled.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

