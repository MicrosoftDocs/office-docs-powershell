---
title: "New-ComplianceSecurityFilter"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 2/1/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: ff60106c-5974-4367-80df-f48406e419fe

description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# New-ComplianceSecurityFilter

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **New-ComplianceSecurityFilter** cmdlet to create compliance security filters in the Security &amp; Compliance Center. These filters allow specified users to search only a subset of mailboxes and SharePoint Online or OneDrive for Business sites in your Office 365 organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ComplianceSecurityFilter -Action <Unknown | Preview | Export | Purge | Search | All> -FilterName <String> -Users <MultiValuedProperty> [-Confirm [<SwitchParameter>]] [-Description <String>] [-Filters <MultiValuedProperty>] [-Region <String>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example allows the user annb to perform all compliance search actions only for mailboxes in Canada. The filter uses the ISO 3166-1 numeric country code value.
  
```
New-ComplianceSecurityFilter -FilterName CountryFilter -Users annb@contoso.com -Filters "Mailbox_CountryCode  -eq '124'" -Action All
```

### Example 2

This example allows the users donh and suzanf to search only the mailboxes that have the value  `Marketing` for the **CustomAttribute1** mailbox property.
  
```
New-ComplianceSecurityFilter -FilterName MarketingFilter  -Users donh,suzanf -Filters "Mailbox_CustomAttribute1  -eq 'Marketing'" -Action Search
```

### Example 3

This example allows members of the US Discovery Managers role group to perform all compliance search actions only on mailboxes in the United States.
  
```
New-ComplianceSecurityFilter -FilterName USDiscoveryManagers  -Users "US Discovery Managers" -Filters "Mailbox_CountryCode  -eq 'US'" -Action All
```

### Example 4

This example assigns allows members of the eDiscovery Manager role group to only search the mailboxes of members of the Ottawa Users distribution group.
  
This example requires you to connect to Security &amp; Compliance Center PowerShell and Exchange Online PowerShell in the same remote PowerShell session. For instructions, see [Configure permissions filtering for Compliance Search](https://technet.microsoft.com/library/mt171557.aspx).
  
```
$DG = Get-DistributionGroup "Ottawa Users"; New-ComplianceSecurityFilter -FilterName DGFilter  -Users eDiscoveryManager -Filters "Mailbox_MemberOfGroup -eq '$($DG.DistinguishedName)'" -Action Search
```

### Example 5

This example prevents any user from deleting content from the mailboxes of members of the Executive Team distribution group.
  
This example requires you to connect to Security &amp; Compliance Center PowerShell and Exchange Online PowerShell in the same remote PowerShell session. For instructions, see [Configure permissions filtering for Compliance Search](https://technet.microsoft.com/library/mt171557.aspx).
  
```
$DG = Get-DistributionGroup "Executive Team"; New-ComplianceSecurityFilter -FilterName NoExecutivesPreview -Users all -Filters "Mailbox_MemberOfGroup -ne '$($DG.DistinguishedName)'" -Action Destroy
```

### Example 6

This example restricts the user to performing all compliance search actions only on email messages sent during the calendar year 2015.
  
```
New-ComplianceSecurityFilter -FilterName EmailDateRestrictionFilter -Users donh@contoso.com -Filters "MailboxContent_Received -ge '01-01-2015' -and MailboxContent_Received -le '12-31-2015'" -Action All
```

### Example 7

This example allows members of the OneDrive eDiscovery Managers custom role group to only search for content in OneDrive for Business locations in the organization.
  
```
New-ComplianceSecurityFilter -FilterName OneDriveOnly  -Users "OneDrive eDiscovery Managers" -Filters "Site_Path -like 'https://contoso-my.sharepoint.com/personal*'" -Action Search
```

### Example 8

This example restricts the user to performing all compliance search actions on documents that were last changed sometime in the calendar year 2015.
  
```
New-ComplianceSecurityFilter -FilterName DocumentDateRestrictionFilter -Users donh@contoso.com -Filters "SiteContent_LastModifiedTime -ge '01-01-2015' -and SiteContent_LastModifiedTime -le '12-31-2015'" -Action All
```

### Example 9

This example prevents the user from performing any compliance search actions on any mailbox in the organization.
  
```
New-ComplianceSecurityFilter -FilterName NoEXO -Users suzanf@contoso.com -Filters "Mailbox_Alias -notlike '*'"  -Action All
```

## Detailed Description
<a name="DetailedDescription"> </a>

Compliance security filters work with compliance searches in the Security &amp; Compliance Center ( **\*-ComplianceSearch** cmdlets), not In-Place eDiscovery searches in Exchange Online ( **\*-MailboxSearch** cmdlets).
  
You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Action_ <br/> |Required  <br/> |Microsoft.Exchange.Compliance.TaskDistributionCommon.ObjectModel.ComplianceSecurityFilterActionType  <br/> | The _Action_ parameter specifies that type of search action that the filter is applied to. Valid values are: <br/>  `Export`: The filter is applied when exporting search results, or preparing them for analysis in Office 365 Advanced eDiscovery.  <br/>  `Preview`: The filter is applied when previewing search results.  <br/>  `Purge`: The filter is applied when purging search results. How the items are deleted is controlled by the  _PurgeType_ parameter value on the **New-ComplianceSearchAction** cmdlet. The default value is `SoftDelete`, which means the purged items are recoverable by users until the deleted items retention period expires.  <br/>  `Search`: The filter is applied when running a search.  <br/>  `All`: The filter is applied to all search actions.  <br/> |
| _FilterName_ <br/> |Required  <br/> |System.String  <br/> |The  _FilterName_ parameter specifies the name for the compliance security filter. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Users_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Users_ parameter specifies the user who gets this filter applied to their searches. Valid values are: <br/> **One or more users**: Identify users by their alias or email address. You can specify multiple values separated by commas.  <br/> **The value All**: Assigns the filter to all users. You can only use this value by itself.  <br/> **One or more role groups**: Identify the role group by its name. You can specify multiple values separated by commas.  <br/>  You can't specify distribution groups with this parameter. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies a description for the compliance security filter. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Filters_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _Filters_ parameter specifies the search criteria for the compliance security filter. The filters are applied to the users specified by the _Users_ parameter. You can create three different types of filters: <br/> **Mailbox filter**: Specifies mailboxes that can be searched by the assigned users. Valid syntax is  `Mailbox_<MailboxPropertyName>`, where  `<MailboxPropertyName>` is a mailbox property value. For example, `"Mailbox_CustomAttribute10 -eq 'OttawaUsers'"` allows users to only search mailboxes that have the value `OttawaUsers` in the **CustomAttribute10** property. For a list of supported mailbox properties, see[Filterable properties for the -RecipientFilter parameter](https://technet.microsoft.com/library/bb738157.aspx).  <br/> **Mailbox content filter**: Specifies mailbox content that the assigned users can search for. Valid syntax is  `MailboxContent_<SearchablePropertyName>:<value>`, where  `<SearchablePropertyName>` specifies a Keyword Query Language (KQL) property that can be specified in a compliance search. For example, `MailboxContent_recipients:contoso.com` allows users to only search for messages sent to recipients in the contoso.com domain. For a list of searchable message properties, see[Keyword queries for Compliance Search](https://technet.microsoft.com/library/ms.o365.cc.searchquerylearnmore.aspx).  <br/> **Site and site content filter**: There are two SharePoint Online and OneDrive for Business site-related filters that you can create.  `Site_<SearchableSiteProperty>` specifies site-related properties. For example, `"Site_Path -eq 'https://contoso.sharepoint.com/sites/doctors'"` allows users to only search for content in the https://contoso.sharepoint.com/sites/doctors site collection. `SiteContent_<SearchableSiteProperty>` specifies content-related properties. For example, `"SiteContent_FileExtension -eq 'docx'"` allows users to only search for Word documents. For a list of searchable site properties, see[Overview of crawled and managed properties in SharePoint](https://go.microsoft.com/fwlink/p/?LinkId=331599). Properties marked with a **Yes** in the ** Queryable** column can be used to create a site or site content filter. <br/>  You can specify multiple filters of the same type. For example, `"Mailbox_CustomAttribute10 -eq 'FTE' -and Mailbox_MemberOfGroup -eq '$($DG.DistinguishedName)'"`.  <br/> > [!NOTE]>  You have to create a search permissions filter to explicitly prevent users from searching any content location in a specific Office 365 service (such as preventing a user from searching Exchange mailboxes or SharePoint sites). In other words, creating a search permissions filter that allows a user to search all SharePoint sites in the organization doesn't prevent that user from searching mailboxes. For example, to allow a SharePoint admin to only search SharePoint sites, you have to create a create a filter that prevents them from mailboxes (see Example 9). Similarly, to allow an Exchange admin to only search mailboxes, you have to create a create a filter that prevents them from searching sites.          |
| _Region_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

