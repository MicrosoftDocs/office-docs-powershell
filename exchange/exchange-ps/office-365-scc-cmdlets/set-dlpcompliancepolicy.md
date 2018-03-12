---
title: "Set-DlpCompliancePolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: d62d4466-5a16-4206-8105-aed442b6fa9e
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-DlpCompliancePolicy

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-DlpCompliancePolicy** cmdlet to modify Data Loss Prevention (DLP) policies in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-DlpCompliancePolicy -Identity <PolicyIdParameter> [-AddExchangeLocation <MultiValuedProperty>] [-AddOneDriveLocation <MultiValuedProperty>] [-AddSharePointLocation <MultiValuedProperty>] [-Comment <String>] [-Force <SwitchParameter>] [-Mode <Enable | TestWithNotifications | TestWithoutNotifications | Disable | PendingDeletion>] [-NewName <String>] [-RemoveExchangeLocation <MultiValuedProperty>] [-RemoveOneDriveLocation <MultiValuedProperty>] [-RemoveSharePointLocation <MultiValuedProperty>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the specified URLs to the SharePoint Online and OneDrive for Business locations for the DLP policy named Main PII without affecting the existing URL values.
  
```
Set-DlpCompliancePolicy -Identity "Main PII" -AddSharePointLocation "https://my.url1","https://my.url2" -AddOneDriveLocation "https://my.url3","https://my.url4"
```

### Example 2

This example disables the "MainPII" policy.
  
```
Set-DlpCompliancePolicy -Identity MainPII -Mode Disable
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyIdParameter  <br/> | The _Identity_ parameter specifies the DLP policy that you want to modify. You can use any value that uniquely identifies the policy. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/>  Id <br/> |
| _RetryDistribution_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _RetryDistribution_ switch redistributes the policy to all OneDrive for Business and SharePoint Online locations. Locations whose initial distributions succeeded aren't included in the retry. Policy distribution errors are reported when you use this switch. <br/> |
| _AddExchangeLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AddOneDriveLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AddOneDriveLocation_ parameter specifies the OneDrive for Business sites to add to the list of included sites when you aren't using the value `All` for the _OneDriveLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AddOneDriveLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter specifies the OneDrive for Business sites to add to the list of excluded sites when you use the value  `All` for the _OneDriveLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AddSharePointLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AddSharePointLocation_ parameter specifies the SharePoint Online sites to add to the list of included sites when you aren't using the value `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> SharePoint Online sites can't be added to the policy until they have been indexed.  <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AddSharePointLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter specifies the SharePoint Online sites to add to the list of excluded sites when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Mode_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.Tasks.PolicyMode  <br/> | The _Mode_ parameter specifies the action and notification level of the DLP policy. Valid values are: <br/>  `Enable`: The policy is enabled for actions and notifications. This is the default value.  <br/>  `Disable`: The policy is disabled.  <br/>  `TestWithNotifications`: No actions are taken, but notifications are sent.  <br/>  `TestWithoutNotifications`: An audit mode where no actions are taken, and no notifications are sent.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _NewName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoveExchangeLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoveOneDriveLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _RemoveOneDriveLocation_ parameter specifies the OneDrive for Business sites to remove from the list of included sites when you aren't using the value `All` for the _OneDriveLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _RemoveOneDriveLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter specifies the OneDrive for Business sites to remove from the list of excluded sites when you use the value  `All` for the _OneDriveLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _RemoveSharePointLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _RemoveSharePointLocation_ parameter specifies the SharePoint Online sites to remove from the list of included sites when you aren't using the value `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _RemoveSharePointLocationException_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter specifies the SharePoint Online sites to remove from the list of excluded sites when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

