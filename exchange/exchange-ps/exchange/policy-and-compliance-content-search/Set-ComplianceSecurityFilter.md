---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Office 365 Security & Compliance Center
title: Set-ComplianceSecurityFilter
schema: 2.0.0
monikerRange: "o365scc-ps"
---

# Set-ComplianceSecurityFilter

## SYNOPSIS
This cmdlet is available only in the Office 365 Security & Compliance Center. For more information, see Office 365 Security & Compliance Center PowerShell (https://technet.microsoft.com/library/mt587091.aspx).

Use the Set-ComplianceSecurityFilter cmdlet to modify compliance security filters in the Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ComplianceSecurityFilter -FilterName <String> [-Action <Unknown | Preview | Export | Purge | Search | All>]
 [-Confirm] [-Description <String>] [-Filters <MultiValuedProperty>] [-Region <String>]
 [-Users <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$filterusers = Get-ComplianceSecurityFilter -FilterName "Ottawa Users Filter"; $filterusers.users.add("pilarp@contoso.com"); Set-ComplianceSecurityFilter -FilterName OttawaUsersFilter -Users $filterusers.users
```

This example adds user pilarp@contoso.com to the compliance security filter named Ottawa Users Filter without affecting other users assigned to the filter.

### -------------------------- Example 2 --------------------------
```
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

- Export: The filter is applied when exporting search results, or preparing them for analysis in Office 365 Advanced eDiscovery.

- Preview: The filter is applied when previewing search results.

- Purge: The filter is applied when purging search results. How the items are deleted is controlled by the PurgeType parameter value on the New-ComplianceSearchAction cmdlet. The default value is SoftDelete, which means the purged items are recoverable by users until the deleted items retention period expires.

- Search: The filter is applied when running a search.

- All: The filter is applied to all search actions.

```yaml
Type: Unknown | Preview | Export | Purge | Search | All
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

- Mailbox filter: Specifies the mailboxes that can be searched by the assigned users. Valid syntax is Mailbox\_\<MailboxPropertyName\>, where \<MailboxPropertyName\> is a mailbox property value. For example, "Mailbox\_CustomAttribute10 -eq 'OttawaUsers'" allows users to only search mailboxes that have the value OttawaUsers in the CustomAttribute10 property. For a list of supported mailbox properties, see Filterable properties for the -RecipientFilter parameter (https://technet.microsoft.com/library/bb738157.aspx).

- Mailbox content filter: Specifies the mailbox content the assigned users can search for. Valid syntax is MailboxContent\_\<SearchablePropertyName\>:\<value\>, where \<SearchablePropertyName\> specifies a Keyword Query Language (KQL) property that can be specified in a compliance search. For example, MailboxContent\_recipients:contoso.com allows users to only search for messages sent to recipients in the contoso.com domain. For a list of searchable message properties, see Keyword queries for Compliance Search (https://technet.microsoft.com/library/ms.o365.cc.searchquerylearnmore.aspx).

- Site and site content filter: There are two SharePoint Online and OneDrive for Business site-related filters that you can create: Site\_\<SearchableSiteProperty\> (specifies site-related properties. For example,"Site\_Path -eq 'https://contoso.sharepoint.com/sites/doctors'" allows users to only search for content in the https://contoso.sharepoint.com/sites/doctors site collection) and SiteContent\_\<SearchableSiteProperty\> (specifies content-related properties. For example, "SiteContent\_FileExtension -eq 'docx'" allows users to only search for Word documents). For a list of searchable site properties, see Overview of crawled and managed properties in SharePoint (https://go.microsoft.com/fwlink/p/?LinkId=331599). Properties marked with a Yes in the Queryable column can be used to create a site or site content filter.

You can specify multiple filters of the same type. For example, "Mailbox\_CustomAttribute10 -eq 'FTE' -and Mailbox\_MemberOfGroup -eq '$($DG.DistinguishedName)'".

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
This parameter is reserved for internal Microsoft use.

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
The WhatIf switch doesn't work in the Office 365 Security & Compliance Center.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9e47c29a-abbe-4e9a-8e3f-cd210793273b.aspx)
