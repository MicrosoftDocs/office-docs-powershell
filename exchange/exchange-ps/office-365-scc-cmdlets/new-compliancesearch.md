---
title: "New-ComplianceSearch"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 5/27/2017
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 433d1602-a026-4d63-be5e-605dd6b7b0d0
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-ComplianceSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-ComplianceSearch** cmdlet to create compliance searches in Exchange Server 2016 and in the Office 365 Security &amp; Compliance Center. You use this cmdlet to define the search criteria.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ComplianceSearch -Name <String> [-AllowNotFoundExchangeLocationsEnabled <$true | $false>] [-Case <String>] [-Confirm [<SwitchParameter>]] [-ContentMatchQuery <String>] [-Description <String>] [-ExchangeLocation <String[]>] [-ExchangeLocationExclusion <String[]>] [-Force <SwitchParameter>] [-HoldNames <String[]>] [-Language <CultureInfo>] [-LogLevel <Suppressed | Basic | Full>] [-OneDriveLocation <String[]>] [-OneDriveLocationExclusion <String[]>] [-PublicFolderLocation <String[]>] [-PublicFolderLocationExclusion <String[]>] [-RefinerNames <String[]>] [-SearchNames <String[]>] [-SharePointLocation <String[]>] [-SharePointLocationExclusion <String[]>] [-StatusMailRecipients <String[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new compliance search named Hold-Project X that searches all members of the distribution group named Finance Department. Because the search doesn't use the  _ContentMatchQuery_ parameter, all items in the mailboxes are searched.
  
```
New-ComplianceSearch -Name "Hold Project X" -ExchangeLocation "Finance Department"
```

### Example 2

This example creates a new compliance search named Hold-Tailspin Toys that searches all member of the distribution group named Research Department. Because the search uses the  _ContentMatchQuery_ parameter, only messages that match the query are searched.
  
```
New-ComplianceSearch -Name "Hold-Tailspin Toys" -ExchangeLocation "Research Department" -ContentMatchQuery "'Patent' AND 'Project Tailspin Toys'"
```

### Example 3

This example creates a new compliance search named AnnBeebe-InactiveMailbox that searches an inactive mailbox and returns all items in the mailbox. To search inactive mailboxes, you need to use the primary SMTP address of the inactive mailbox, prepended with a period ("."). You also need to include the  _AllowNotFoundExchangeLocationsEnabled_ parameter so the search doesn't try to validate the existence of the inactive mailbox.
  
```
New-ComplianceSearch -Name "AnnBeebe-InactiveMailbox" -ExchangeLocation .annb@contoso.onmicrosoft.com -AllowNotFoundExchangeLocationsEnabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

A compliance search requires at least one location. For example, mailboxes using the  _ExchangeLocation_ parameter, or SharePoint sites using the _SharePointLocation_ parameter.
  
 After you create a compliance search using the **New-ComplianceSearch** cmdlet, you run the search using the **Start-ComplianceSearch** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group. 
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the compliance search. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _AllowNotFoundExchangeLocationsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowNotFoundExchangeLocationsEnabled_ parameter specifies whether to allow inactive mailboxes in the compliance search. Aninactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. Valid values are: <br/>  `$true`: The search doesn't try to validate the existence of the mailbox before proceeding. This value is required if you want to include inactive mailboxes in the search, because inactive mailboxes don't resolve as regular mailboxes.  <br/>  `$false`: The search tries to validate the existence of the mailbox before proceeding. If you specify an inactive mailbox or a mailbox that otherwise can't be found, the search will fail. This is the default value.  <br/> |
| _Case_ <br/> |Optional  <br/> |System.String  <br/> |The  _Case_ parameter specifies the name of an eDiscovery case that the new compliance search will be associated with. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ContentMatchQuery_ <br/> |Optional  <br/> |System.String  <br/> |The  _ContentMatchQuery_ parameter specifies a content search filter. <br/> This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information about KQL, see [Keyword Query Language syntax reference](https://go.microsoft.com/fwlink/?LinkId=269603).  <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies an optional description for the compliance search. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _ExchangeLocation_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ExchangeLocation_ parameter specifies the mailboxes to include. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group (all mailboxes that are currently members of the group). <br/>  The value `All` for all mailboxes. You can only use this value by itself. <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _ExchangeLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> | This parameter specifies the mailboxes to exclude when you use the value `All` for the _ExchangeLocation_ parameter. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group (all mailboxes that are currently members of the group). <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _HoldNames_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _HoldNames_ parameter specifies that the content locations that have been placed on hold in the specified eDiscovery case will be searched. You use the value `All` for this parameter. You also need to specify the name of an eDiscovery case by using the _Case_ parameter. <br/> Also, if a content location was placed on a query-based case hold, only items that are on hold will be searched when you run this compliance search. For example, if a user was placed on a query-based case hold that preserves items that were sent or created before a specific date, only those items would be searched by using the search criteria specified by this compliance search.  <br/> |
| _Language_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _Language_ parameter specifies the language for the compliance search. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _LogLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceJobLogLevel  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OneDriveLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OneDriveLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolderLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _PublicFolderLocation_ parameter specifies that you want to include all public folders in the search. You use the value `All` for this parameter. <br/> |
| _PublicFolderLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RefinerNames_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SearchNames_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SharePointLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _SharePointLocation_ parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value `All` to include all sites. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _SharePointLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter specifies the SharePoint Online sites to exclude when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _StatusMailRecipients_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

