---
title: "Set-ComplianceSecurityFilter"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/1/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 9e47c29a-abbe-4e9a-8e3f-cd210793273b
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-ComplianceSecurityFilter

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-ComplianceSecurityFilter** cmdlet to modify compliance security filters in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ComplianceSecurityFilter -FilterName <String> [-Action <Unknown | Preview | Export | Purge | Search | All>] [-Confirm [<SwitchParameter>]] [-Description <String>] [-Filters <MultiValuedProperty>] [-Region <String>] [-Users <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds user pilarp@contoso.com to the compliance security filter named Ottawa Users Filter without affecting other users assigned to the filter.
  
```
$filterusers = Get-ComplianceSecurityFilter -FilterName "Ottawa Users Filter"; $filterusers.users.add("pilarp@contoso.com"); Set-ComplianceSecurityFilter -FilterName OttawaUsersFilter -Users $filterusers.users
```

### Example 2

This example removes user annb@contoso.com to the compliance security filter named Ottawa Users Filter without affecting other users assigned to the filter.
  
```
$filterusers = Get-ComplianceSecurityFilter -FilterName "Ottawa Users Filter"; $filterusers.users.remove("annb@contoso.com"); Set-ComplianceSecurityFilter -FilterName OttawaUsersFilter -Users $filterusers.users
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _FilterName_ <br/> |Required  <br/> |System.String  <br/> |The  _FilterName_ parameter specifies the name of the compliance security filter that you want to modify. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Action_ <br/> |Optional  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceSecurityFilterActionType  <br/> | The _Action_ parameter specifies that type of search action that the filter is applied to. Valid values are: <br/>  `Export`: The filter is applied when exporting search results, or preparing them for analysis in Office 365 Advanced eDiscovery.  <br/>  `Preview`: The filter is applied when previewing search results.  <br/>  `Purge`: The filter is applied when purging search results. How the items are deleted is controlled by the  _PurgeType_ parameter value on the **New-ComplianceSearchAction** cmdlet. The default value is `SoftDelete`, which means the purged items are recoverable by users until the deleted items retention period expires.  <br/>  `Search`: The filter is applied when running a search.  <br/>  `All`: The filter is applied to all search actions.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies a description for the compliance security filter. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Filters_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Filters_ parameter specifies the search criteria for the compliance security filter. You can create three different types of filters: <br/> **Mailbox filter**: Specifies the mailboxes that can be searched by the assigned users. Valid syntax is  `Mailbox_<MailboxPropertyName>`, where  `<MailboxPropertyName>` is a mailbox property value. For example, `"Mailbox_CustomAttribute10 -eq 'OttawaUsers'"` allows users to only search mailboxes that have the value `OttawaUsers` in the **CustomAttribute10** property. For a list of supported mailbox properties, see[Filterable properties for the -RecipientFilter parameter](https://technet.microsoft.com/library/bb738157.aspx).  <br/> **Mailbox content filter**: Specifies the mailbox content the assigned users can search for. Valid syntax is  `MailboxContent_<SearchablePropertyName>:<value>`, where  `<SearchablePropertyName>` specifies a Keyword Query Language (KQL) property that can be specified in a compliance search. For example, `MailboxContent_recipients:contoso.com` allows users to only search for messages sent to recipients in the contoso.com domain. For a list of searchable message properties, see[Keyword queries for Compliance Search](https://technet.microsoft.com/library/ms.o365.cc.searchquerylearnmore.aspx).  <br/> **Site and site content filter**: There are two SharePoint Online and OneDrive for Business site-related filters that you can create:  `Site_<SearchableSiteProperty>` (specifies site-related properties. For example, `"Site_Path -eq 'https://contoso.sharepoint.com/sites/doctors'"` allows users to only search for content in the https://contoso.sharepoint.com/sites/doctors site collection) and `SiteContent_<SearchableSiteProperty>` (specifies content-related properties. For example, `"SiteContent_FileExtension -eq 'docx'"` allows users to only search for Word documents). For a list of searchable site properties, see[Overview of crawled and managed properties in SharePoint](https://go.microsoft.com/fwlink/p/?LinkId=331599). Properties marked with a **Yes** in the ** Queryable** column can be used to create a site or site content filter. <br/>  You can specify multiple filters of the same type. For example, `"Mailbox_CustomAttribute10 -eq 'FTE' -and Mailbox_MemberOfGroup -eq '$($DG.DistinguishedName)'"`.  <br/> |
| _Region_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Users_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Users_ parameter specifies the user who gets this filter applied to their searches. Valid values are: <br/> **One or more users**: Identify users by their alias or email address. You can specify multiple values separated by commas.  <br/> **The value All**: Assigns the filter to all users. You can only use this value by itself.  <br/> **One or more role groups**: Identify the role group by its name. You can specify multiple values separated by commas.  <br/>  You can't specify distribution groups with this parameter. <br/>  The values you specify will overwrite any existing entries. See the Examples section to add or remove users without affecting other existing entries. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

