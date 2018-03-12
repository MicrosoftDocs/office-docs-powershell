---
title: "New-HoldCompliancePolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: c064ff2b-27b3-49ca-a05a-a213db6d6f55
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# New-HoldCompliancePolicy

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx).
  
Use the **New-HoldCompliancePolicy** cmdlet to create new preservation policies in the Security &amp; Compliance Center.
  
> [!NOTE]
> The **New-HoldCompliancePolicy** cmdlet has been replaced by the **New-RetentionCompliancePolicy** cmdlet. If you have any scripts that use the **New-HoldCompliancePolicy** cmdlet, update them to use the **New-RetentionCompliancePolicy** cmdlet.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
New-HoldCompliancePolicy -Name <String> [-Comment <String>] [-Confirm [<SwitchParameter>]] [-Enabled <$true | $false>] [-ExchangeLocation <MultiValuedProperty>] [-Force <SwitchParameter>] [-PublicFolderLocation <MultiValuedProperty>] [-SharePointLocation <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a preservation policy named "Regulation 123 Compliance" for the mailboxes of Kitty Petersen and Scott Nakamura, and the finance SharePoint Online site.
  
```
New-HoldCompliancePolicy -Name "Regulation 123 Compliance" -ExchangeLocation "Kitty Petersen", "Scott Nakamura" -SharePointLocation "http://contoso.sharepoint.com/sites/teams/finance"
```

## Detailed Description
<a name="DetailedDescription"> </a>

New policies are not valid and will not be applied until a preservation rule is added to the policy.
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the preservation policy. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Comment_ <br/> |Optional  <br/> |System.String  <br/> |The  _Comment_ parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: `"This is an admin note"`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter specifies whether the policy is enabled or disabled. Valid values are: <br/>  `$true`: The policy is enabled. This is the default value.  <br/>  `$false`: The policy is disabled.  <br/> |
| _ExchangeLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _ExchangeLocation_ parameter specifies the mailboxes to include in the policy. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group (all mailboxes that are currently members of the group). <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/>  If no mailboxes are specified, then no mailboxes are placed on hold. <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _PublicFolderLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _PublicFolderLocation_ parameter specifies that you want to include all public folders in the preservation policy. You use the value `All` for this parameter. <br/> |
| _SharePointLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _SharePointLocation_ parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value `All` to include all sites. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> SharePoint Online sites can't be added to the policy until they have been indexed. If no sites are specified, then no sites are placed on hold.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

