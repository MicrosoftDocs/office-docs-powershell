---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-compliancesecurityfilter
applicable: Office 365 Security & Compliance Center
title: New-ComplianceSecurityFilter
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# New-ComplianceSecurityFilter

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the New-ComplianceSecurityFilter cmdlet to create compliance security filters in the Security & Compliance Center. These filters allow specified users to search only a subset of mailboxes and SharePoint Online or OneDrive for Business sites in your Office 365 organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
New-ComplianceSecurityFilter -Action <ComplianceSecurityFilterActionType> -FilterName <String>
 -Users <MultiValuedProperty> [-Confirm] [-Description <String>] [-Filters <MultiValuedProperty>]
 [-Region <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Compliance security filters work with compliance searches in the Security & Compliance Center (\*-ComplianceSearch cmdlets), not In-Place eDiscovery searches in Exchange Online (\*-MailboxSearch cmdlets).

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
New-ComplianceSecurityFilter -FilterName CountryFilter -Users annb@contoso.com -Filters "Mailbox_CountryCode -eq '124'" -Action All
```

This example allows the user annb to perform all compliance search actions only for mailboxes in Canada. The filter uses the ISO 3166-1 numeric country code value.

### Example 2
```powershell
New-ComplianceSecurityFilter -FilterName MarketingFilter -Users donh,suzanf -Filters "Mailbox_CustomAttribute1 -eq 'Marketing'" -Action Search
```

This example allows the users donh and suzanf to search only the mailboxes that have the value Marketing for the CustomAttribute1 mailbox property.

### Example 3
```powershell
New-ComplianceSecurityFilter -FilterName USDiscoveryManagers -Users "US Discovery Managers" -Filters "Mailbox_CountryCode -eq 'US'" -Action All
```

This example allows members of the US Discovery Managers role group to perform all compliance search actions only on mailboxes in the United States.

### Example 4
```powershell
$DG = Get-DistributionGroup "Ottawa Users"; New-ComplianceSecurityFilter -FilterName DGFilter -Users eDiscoveryManager -Filters "Mailbox_MemberOfGroup -eq '$($DG.DistinguishedName)'" -Action Search
```

This example assigns allows members of the eDiscovery Manager role group to only search the mailboxes of members of the Ottawa Users distribution group.

This example requires you to connect to Security & Compliance Center PowerShell and Exchange Online PowerShell in the same remote PowerShell session. For instructions, see [Configure permissions filtering for Compliance Search](https://docs.microsoft.com/microsoft-365/compliance/permissions-filtering-for-content-search).

### Example 5
```powershell
$DG = Get-DistributionGroup "Executive Team"; New-ComplianceSecurityFilter -FilterName NoExecutivesPreview -Users all -Filters "Mailbox_MemberOfGroup -ne '$($DG.DistinguishedName)'" -Action Purge
```

This example prevents any user from deleting content from the mailboxes of members of the Executive Team distribution group.

This example requires you to connect to Security & Compliance Center PowerShell and Exchange Online PowerShell in the same remote PowerShell session. For instructions, see [Configure permissions filtering for Compliance Search](https://docs.microsoft.com/microsoft-365/compliance/permissions-filtering-for-content-search).

### Example 6
```powershell
New-ComplianceSecurityFilter -FilterName EmailDateRestrictionFilter -Users donh@contoso.com -Filters "MailboxContent_Received -ge '01-01-2018' -and MailboxContent_Received -le '12-31-2018'" -Action All
```

This example restricts the user to performing all compliance search actions only on email messages sent during the calendar year 2018.

### Example 7
```powershell
New-ComplianceSecurityFilter -FilterName OneDriveOnly -Users "OneDrive eDiscovery Managers" -Filters "Site_Path -like 'https://contoso-my.sharepoint.com/personal*'" -Action Search
```

This example allows members of the OneDrive eDiscovery Managers custom role group to only search for content in OneDrive for Business locations in the organization.

### Example 8
```powershell
New-ComplianceSecurityFilter -FilterName DocumentDateRestrictionFilter -Users donh@contoso.com -Filters "SiteContent_LastModifiedTime -ge '01-01-2018' -and SiteContent_LastModifiedTime -le '12-31-2018'" -Action All
```

This example restricts the user to performing all compliance search actions on documents that were last changed sometime in the calendar year 2018.

### Example 9
```powershell
New-ComplianceSecurityFilter -FilterName NoEXO -Users suzanf@contoso.com -Filters "Mailbox_Alias -notlike '*'" -Action All
```

This example prevents the user from performing any compliance search actions on any mailbox in the organization.

## PARAMETERS

### -Action
The Action parameter specifies that type of search action that the filter is applied to. Valid values are:

- Export: The filter is applied when exporting search results, or preparing them for analysis in Office 365 Advanced eDiscovery.

- Preview: The filter is applied when previewing search results.

- Purge: The filter is applied when purging search results. How the items are deleted is controlled by the PurgeType parameter value on the New-ComplianceSearchAction cmdlet. The default value is SoftDelete, which means the purged items are recoverable by users until the deleted items retention period expires.

- Search: The filter is applied when running a search.

- All: The filter is applied to all search actions.

```yaml
Type: ComplianceSecurityFilterActionType
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterName
The FilterName parameter specifies the name for the compliance security filter. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Users
The Users parameter specifies the user who gets this filter applied to their searches. Valid values are:

- One or more users: Identify users by their alias or email address. You can specify multiple values separated by commas.

- The value All: Assigns the filter to all users. You can only use this value by itself.

- One or more role groups: Identify the role group by its name. You can specify multiple values separated by commas.

You can't specify distribution groups with this parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a description for the compliance security filter. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filters
The Filters parameter specifies the search criteria for the compliance security filter. The filters are applied to the users specified by the Users parameter. You can create three different types of filters:

- Mailbox filter: Specifies the mailboxes that can be searched by the assigned users. Valid syntax is `Mailbox_<MailboxPropertyName>`, where `<MailboxPropertyName>` is a mailbox property value. For example,`"Mailbox_CustomAttribute10 -eq 'OttawaUsers'"` allows users to only search mailboxes that have the value OttawaUsers in the CustomAttribute10 property. For a list of supported mailbox properties, see [Filterable properties for the RecipientFilter parameter](https://docs.microsoft.com/powershell/exchange/exchange-server/recipient-filters/recipientfilter-properties).

- Mailbox content filter: Specifies the mailbox content the assigned users can search for. Valid syntax is `MailboxContent_<SearchablePropertyName>:<value>`, where `<SearchablePropertyName>` specifies a Keyword Query Language (KQL) property that can be specified in a compliance search. For example, `MailboxContent_recipients:contoso.com` allows users to only search for messages sent to recipients in the contoso.com domain. For a list of searchable message properties, see [Keyword queries for Compliance Search](https://docs.microsoft.com/microsoft-365/compliance/keyword-queries-and-search-conditions).

- Site and site content filter: There are two SharePoint Online and OneDrive for Business site-related filters that you can create: `Site_<SearchableSiteProperty>` (specifies site-related properties. For example,`"Site_Path -eq 'https://contoso.sharepoint.com/sites/doctors'"` allows users to only search for content in the <https://contoso.sharepoint.com/sites/doctors> site collection) and `SiteContent_<SearchableSiteProperty>` (specifies content-related properties. For example, `"SiteContent_FileExtension -eq 'docx'"` allows users to only search for Word documents). For a list of searchable site properties, see [Overview of crawled and managed properties in SharePoint Server](https://go.microsoft.com/fwlink/p/?LinkId=331599). Properties marked with a Yes in the Queryable column can be used to create a site or site content filter.

You can specify multiple filters of the same type. For example, `"Mailbox_CustomAttribute10 -eq 'FTE' -and Mailbox_MemberOfGroup -eq '$($DG.DistinguishedName)'"`.

You have to create a search permissions filter to explicitly prevent users from searching any content location in a specific Office 365 service (such as preventing a user from searching Exchange mailboxes or SharePoint sites). In other words, creating a search permissions filter that allows a user to search all SharePoint sites in the organization doesn't prevent that user from searching mailboxes. For example, to allow a SharePoint admin to only search SharePoint sites, you have to create a create a filter that prevents them from mailboxes (see Example 9). Similarly, to allow an Exchange admin to only search mailboxes, you have to create a create a filter that prevents them from searching sites.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Region
The Region parameter specifies the satellite location for multi-geo tenants to conduct eDiscovery searches in. Valid values are:

- APC: Asia-Pacific

- AUS: Australia

- CAN: Canada

- EUR: Europe, Middle East, Africa

- FRA: France

- GBR: United Kingdom

- IND: India

- JPN: Japan

- LAM: Latin America

- NAM: North America

If you don't use this parameter in a multi-geo tenant, eDiscovery searches are performed in the central location.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Office 365 Security & Compliance Center PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Office 365 Security & Compliance Center

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
