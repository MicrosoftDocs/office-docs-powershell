---
title: "New-DlpCompliancePolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 4/21/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 4a1d614a-08cf-4495-83c0-d0ed797d202a
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# New-DlpCompliancePolicy

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **New-DlpCompliancePolicy** cmdlet to create Data Loss Prevention (DLP) policies in the Security &amp; Compliance Center. DLP policies contain DLP rules that identify, monitor, and protect sensitive information.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-DlpCompliancePolicy -Name <String> [-Comment <String>] [-Confirm [<SwitchParameter>]] [-ExchangeLocation <MultiValuedProperty>] [-ExchangeOnPremisesLocation <MultiValuedProperty>] [-Force <SwitchParameter>] [-Mode <Enable | TestWithNotifications | TestWithoutNotifications | Disable | PendingDeletion>] [-OneDriveLocation <MultiValuedProperty>] [-OneDriveLocationException <MultiValuedProperty>] [-SharePointLocation <MultiValuedProperty>] [-SharePointLocationException <MultiValuedProperty>] [-SharePointOnPremisesLocationException <MultiValuedProperty>] [-SharePointServerLocation <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a DLP policy named GlobalPolicy that will be enforced across all SharePoint Online locations.
  
```
New-DlpCompliancePolicy -Name "GlobalPolicy" -SharePointLocation All
```

### Example 2

This example creates a DLP policy named GlobalPolicy for the specified SharePoint Online and OneDrive for Business locations. The new policy has a descriptive comment and will be enabled on creation.
  
```
New-DlpCompliancePolicy -Name "GlobalPolicy" -Comment "Primary policy" -SharePointLocation "https://my.url","https://my.url2" -OneDriveLocation "https://my.url3","https://my.url4" -Mode Enable
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the DLP policy. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ExchangeLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _ExchangeLocation_ parameter specifies Exchange Online mailboxes to include in the DLP policy. You can only use the value `All` for this parameter to include all mailboxes. <br/> |
| _ExchangeOnPremisesLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Mode_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyMode  <br/> | The _Mode_ parameter specifies the action and notification level of the DLP policy. Valid values are: <br/>  `Enable`: The policy is enabled for actions and notifications. This is the default value.  <br/>  `Disable`: The policy is disabled.  <br/>  `TestWithNotifications`: No actions are taken, but notifications are sent.  <br/>  `TestWithoutNotifications`: An audit mode where no actions are taken, and no notifications are sent.  <br/> |
| _OneDriveLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _OneDriveLocation_ parameter specifies the OneDrive for Business sites to include. You identify the site by its URL value, or you can use the value `All` to include all sites. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _OneDriveLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter specifies the OneDrive for Business sites to exclude when you use the value  `All` for the _OneDriveLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _SharePointLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SharePointLocation_ parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value `All` to include all sites. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`. SharePoint Online sites can't be added to a policy until they have been indexed.  <br/> |
| _SharePointLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter specifies the SharePoint Online sites to exclude when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _SharePointOnPremisesLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SharePointServerLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

