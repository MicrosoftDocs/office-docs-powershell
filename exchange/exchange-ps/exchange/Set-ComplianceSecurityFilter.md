---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-compliancesecurityfilter
applicable: Office 365 Security & Compliance Center
title: Set-ComplianceSecurityFilter
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ComplianceSecurityFilter

## SYNOPSIS
This cmdlet is available only in Security & Compliance Center PowerShell. For more information, see [Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-ComplianceSecurityFilter cmdlet to modify compliance security filters in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ComplianceSecurityFilter -FilterName <String> [-Action <ComplianceSecurityFilterActionType>]
 [-Confirm] [-Description <String>] [-Filters <MultiValuedProperty>] [-Region <String>]
 [-Users <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in the Security & Compliance Center](https://docs.microsoft.com/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center).

## EXAMPLES

### Example 1
```powershell
$filterusers = Get-ComplianceSecurityFilter -FilterName "Ottawa Users Filter"; $filterusers.users.add("pilarp@contoso.com"); Set-ComplianceSecurityFilter -FilterName OttawaUsersFilter -Users $filterusers.users
```

This example adds user pilarp@contoso.com to the compliance security filter named Ottawa Users Filter without affecting other users assigned to the filter.

### Example 2
```powershell
$filterusers = Get-ComplianceSecurityFilter -FilterName "Ottawa Users Filter"; $filterusers.users.remove("annb@contoso.com"); Set-ComplianceSecurityFilter -FilterName OttawaUsersFilter -Users $filterusers.users
```

This example removes user annb@contoso.com to the compliance security filter named Ottawa Users Filter without affecting other users assigned to the filter.

## PARAMETERS

### -FilterName
The FilterName parameter specifies the name of the compliance security filter that you want to modify. If the value contains spaces, enclose the value in quotation marks (").

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

### -Action
The Action parameter specifies that type of search action that the filter is applied to. Valid values are:

- Export: The filter is applied when exporting search results, or preparing them for analysis in Microsoft 365 Advanced eDiscovery.

- Preview: The filter is applied when previewing search results.

- Purge: The filter is applied when purging search results. How the items are deleted is controlled by the PurgeType parameter value on the New-ComplianceSearchAction cmdlet. The default value is SoftDelete, which means the purged items are recoverable by users until the deleted items retention period expires.

- Search: The filter is applied when running a search.

- All: The filter is applied to all search actions.

```yaml
Type: ComplianceSecurityFilterActionType
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: False
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
The Filters parameter specifies the search criteria for the compliance security filter. You can create three different types of filters:

- Mailbox filter: Specifies the mailboxes that can be searched by the assigned users. Valid syntax is `Mailbox_<MailboxPropertyName>`, where `<MailboxPropertyName>` is a mailbox property value. For example,`"Mailbox_CustomAttribute10 -eq 'OttawaUsers'"` allows users to only search mailboxes that have the value OttawaUsers in the CustomAttribute10 property. For a list of supported mailbox properties, see [Filterable properties for the RecipientFilter parameter](https://docs.microsoft.com/powershell/exchange/recipientfilter-properties).

- Mailbox content filter: Specifies the mailbox content the assigned users can search for. Valid syntax is `MailboxContent_<SearchablePropertyName>:<value>`, where `<SearchablePropertyName>` specifies a Keyword Query Language (KQL) property that can be specified in a compliance search. For example, `MailboxContent_recipients:contoso.com` allows users to only search for messages sent to recipients in the contoso.com domain. For a list of searchable message properties, see [Keyword queries for Compliance Search](https://docs.microsoft.com/microsoft-365/compliance/keyword-queries-and-search-conditions).

- Site and site content filter: There are two SharePoint Online and OneDrive for Business site-related filters that you can create: `Site_<SearchableSiteProperty>` (specifies site-related properties. For example,`"Site_Path -eq 'https://contoso.sharepoint.com/sites/doctors'"` allows users to only search for content in the `https://contoso.sharepoint.com/sites/doctors` site collection) and `SiteContent_<SearchableSiteProperty>` (specifies content-related properties. For example, `"SiteContent_FileExtension -eq 'docx'"` allows users to only search for Word documents). For a list of searchable site properties, see [Overview of crawled and managed properties in SharePoint Server](https://docs.microsoft.com/SharePoint/technical-reference/crawled-and-managed-properties-overview). Properties marked with a Yes in the Queryable column can be used to create a site or site content filter.

You can specify multiple filters of the same type. For example, `"Mailbox_CustomAttribute10 -eq 'FTE' -and Mailbox_MemberOfGroup -eq '$($DG.DistinguishedName)'"`.

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

### -Users
The Users parameter specifies the user who gets this filter applied to their searches. Valid values are:

- One or more users: Identify users by their alias or email address. You can specify multiple values separated by commas.

- The value All: Assigns the filter to all users. You can only use this value by itself.

- One or more role groups: Identify the role group by its name. You can specify multiple values separated by commas.

You can't specify distribution groups with this parameter.

The values you specify will overwrite any existing entries. See the Examples section to add or remove users without affecting other existing entries.

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

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance Center PowerShell.

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
