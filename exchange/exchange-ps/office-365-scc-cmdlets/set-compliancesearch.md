---
title: "Set-ComplianceSearch"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/19/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 49464588-9e57-442f-97ec-ab9d9927983a
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ComplianceSearch

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-ComplianceSearch** cmdlet to modify non-running compliance searches in Exchange Server 2016 and in the Office 365 Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ComplianceSearch -Identity <ComplianceSearchIdParameter> [-AddExchangeLocation <String[]>] [-AddExchangeLocationExclusion <String[]>] [-AddOneDriveLocation <String[]>] [-AddOneDriveLocationExclusion <String[]>] [-AddPublicFolderLocation <String[]>] [-AddPublicFolderLocationExclusion <String[]>] [-AddSharePointLocation <String[]>] [-AddSharePointLocationExclusion <String[]>] [-AllowNotFoundExchangeLocationsEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-ContentMatchQuery <String>] [-Description <String>] [-ExchangeLocation <String[]>] [-ExchangeLocationExclusion <String[]>] [-Force <SwitchParameter>] [-HoldNames <String[]>] [-Language <CultureInfo>] [-Name <String>] [-OneDriveLocation <String[]>] [-OneDriveLocationExclusion <String[]>] [-PublicFolderLocation <String[]>] [-PublicFolderLocationExclusion <String[]>] [-RefinerNames <String[]>] [-RemoveExchangeLocation <String[]>] [-RemoveExchangeLocationExclusion <String[]>] [-RemoveOneDriveLocation <String[]>] [-RemoveOneDriveLocationExclusion <String[]>] [-RemovePublicFolderLocation <String[]>] [-RemovePublicFolderLocationExclusion <String[]>] [-RemoveSharePointLocation <String[]>] [-RemoveSharePointLocationExclusion <String[]>] [-SearchNames <String[]>] [-SharePointLocation <String[]>] [-SharePointLocationExclusion <String[]>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the existing compliance search named Project X. The scope of the Exchange search is changed to all mailboxes.
  
```
Set-ComplianceSearch -Identity "Project X" -ExchangeLocation All
```

### Example 2

This example changes an existing compliance search that's associated with an eDiscovery case in the Office 365 Security &amp; Compliance Center. The scope of the search is changed from searching selected mailboxes and SharePoint sites to searching all content locations that have been placed on hold in the eDiscovery case.
  
```
Set-ComplianceSearch -Identity "Contoso Case Search 1" -HoldNames All -ExchangeLocation $null -SharePointLocation $null
```

### Example 3

This example changes the language setting for an existing compliance search to Chinese.
  
```
Set-ComplianceSearch -Identity "China Subsidiary Search" -Language zh-CN
```

You might have to change the language setting if you're using non-English keywords in the search query (which is specified in the  _ContentMatchQuery_ parameter).
  
## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx). 
  
This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group. 
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.ComplianceJob.Tasks.ComplianceSearchIdParameter  <br/> | The _Identity_ parameter specifies the compliance search that you want to modify. <br/>  You can use any value that uniquely identifies the compliance search. For example: <br/>  Name <br/>  `JobRunId` (GUID) <br/>  You can find these values by running the command `Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status` <br/> |
| _AddExchangeLocation_ <br/> |Optional  <br/> |System.String[]  <br/> | The _AddExchangeLocation_ parameter specifies the mailboxes to add to the list of included mailboxes when you aren't using the value `All` for the _ExchangeLocation_ parameter. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group (all mailboxes that are currently members of the group). <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AddExchangeLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> | This parameter specifies the mailboxes to add to the list of excluded mailboxes when you use the value `All` for the _ExchangeLocation_ parameter. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AddOneDriveLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AddOneDriveLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AddPublicFolderLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AddPublicFolderLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _AddSharePointLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _AddSharePointLocation_ parameter specifies the SharePoint Online sites to add to the list of included sites when you aren't using the value `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AddSharePointLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter specifies the SharePoint Online sites to add to the list of excluded sites when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _AllowNotFoundExchangeLocationsEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _AllowNotFoundExchangeLocationsEnabled_ parameter specifies whether to allow inactive mailboxes in the compliance search. Aninactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. Valid values are: <br/>  `$true`: The search doesn't try to validate the existence of the mailbox before proceeding. This value is required if you want to include inactive mailboxes in the search, because inactive mailboxes don't resolve as regular mailboxes.  <br/>  `$false`: The search tries to validate the existence of the mailbox before proceeding. If you specify an inactive mailbox or a mailbox that otherwise can't be found, the search will fail. This is the default value.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _ContentMatchQuery_ <br/> |Optional  <br/> |System.String  <br/> |The  _ContentMatchQuery_ parameter specifies a content search filter. <br/> This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information about KQL, see [Keyword Query Language syntax reference](https://go.microsoft.com/fwlink/?LinkId=269603).  <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies a description for the compliance search. If the value contains spaces, enclose the value in quotation marks. <br/> |
| _ExchangeLocation_ <br/> |Optional  <br/> |System.String[]  <br/> | The _ExchangeLocation_ parameter specifies the mailboxes to include. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group (all mailboxes that are currently members of the group). <br/>  The value `All` for all mailboxes. You can only use this value by itself. <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _ExchangeLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> | This parameter specifies the mailboxes to exclude when you use the value `All` for the _ExchangeLocation_ parameter. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group (all mailboxes that are currently members of the group). <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _HoldNames_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _HoldNames_ parameter specifies that the content locations that have been placed on hold in the eDiscovery case will be searched. You use the value `All` for this parameter. You can use this parameter only for compliance searches that are associated with an eDiscovery case. <br/> If the content locations in the compliance search include mailboxes, you also need to use the  _ExchangeLocation_ parameter with the value `$null`. Similarly, if the compliance search includes SharePoint sites, you also need to use the  _SharePointLocation_ parameter withthe value `$null`.  <br/> Also, if a content location was placed on a query-based case hold, only items that are on hold will be searched when you restart this compliance search. For example, if a user was placed on a query-based case hold that preserves items that were sent or created before a specific date, only those items would be searched by using the search criteria specified by this compliance search.  <br/> |
| _Language_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _Language_ parameter specifies the language for the compliance search. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OneDriveLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OneDriveLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PublicFolderLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _PublicFolderLocation_ parameter specifies that you want to include all public folders in the search. You use the value `All` for this parameter. <br/> |
| _PublicFolderLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RefinerNames_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoveExchangeLocation_ <br/> |Optional  <br/> |System.String[]  <br/> | The _RemoveExchangeLocation_ parameter specifies the mailboxes to remove from the list of included mailboxes when you aren't using the value `All` for the _ExchangeLocation_ parameter. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _RemoveExchangeLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> | This parameter specifies the mailboxes to remove from the list of excluded mailboxes when you use the value `All` for the _ExchangeLocation_ parameter. Valid values are: <br/>  A mailbox <br/>  A distribution group or mail-enabled security group <br/>  To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  Email address <br/>  GUID <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _RemoveOneDriveLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoveOneDriveLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemovePublicFolderLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemovePublicFolderLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RemoveSharePointLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _RemoveSharePointLocation_ parameter specifies the SharePoint Online sites to remove from the list of included sites when you aren't using the value `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _RemoveSharePointLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter specifies the SharePoint Online sites to remove from the list of excluded sites when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _SearchNames_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _SharePointLocation_ <br/> |Optional  <br/> |System.String[]  <br/> |The  _SharePointLocation_ parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value `All` to include all sites. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _SharePointLocationExclusion_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter specifies the SharePoint Online sites to exclude when you use the value  `All` for the _SharePointLocation_ parameter. You identify the site by its URL value. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter doesn't work in the Office 365 Security &amp; Compliance Center.  <br/> The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

