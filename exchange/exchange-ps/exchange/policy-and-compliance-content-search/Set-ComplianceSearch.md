---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2016, Office 365 Security & Compliance Center
title: Set-ComplianceSearch
schema: 2.0.0
monikerRange: "exchserver-ps-2016 || o365scc-ps"
---

# Set-ComplianceSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-ComplianceSearch cmdlet to modify non-running compliance searches in Exchange Server 2016 and in the Office 365 Security & Compliance Center.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ComplianceSearch [-Identity] <ComplianceSearchIdParameter> [-AddExchangeLocation <String[]>]
 [-AddExchangeLocationExclusion <String[]>] [-AddOneDriveLocation <String[]>]
 [-AddOneDriveLocationExclusion <String[]>] [-AddPublicFolderLocation <String[]>]
 [-AddPublicFolderLocationExclusion <String[]>] [-AddSharePointLocation <String[]>]
 [-AddSharePointLocationExclusion <String[]>] [-AllowNotFoundExchangeLocationsEnabled <$true | $false>]
 [-Confirm] [-ContentMatchQuery <String>] [-Description <String>] [-ExchangeLocation <String[]>]
 [-ExchangeLocationExclusion <String[]>] [-Force] [-HoldNames <String[]>] [-IncludeUserAppContent <$true | $false>] [-Language <CultureInfo>]
 [-Name <String>] [-OneDriveLocation <String[]>] [-OneDriveLocationExclusion <String[]>]
 [-PublicFolderLocation <String[]>] [-PublicFolderLocationExclusion <String[]>] [-RefinerNames <String[]>]
 [-RemoveExchangeLocation <String[]>] [-RemoveExchangeLocationExclusion <String[]>]
 [-RemoveOneDriveLocation <String[]>] [-RemoveOneDriveLocationExclusion <String[]>]
 [-RemovePublicFolderLocation <String[]>] [-RemovePublicFolderLocationExclusion <String[]>]
 [-RemoveSharePointLocation <String[]>] [-RemoveSharePointLocationExclusion <String[]>]
 [-SearchNames <String[]>] [-SharePointLocation <String[]>] [-SharePointLocationExclusion <String[]>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ComplianceSearch -Identity "Project X" -ExchangeLocation All
```

This example changes the existing compliance search named Project X. The scope of the Exchange search is changed to all mailboxes.

### -------------------------- Example 2 --------------------------
```
Set-ComplianceSearch -Identity "Contoso Case Search 1" -HoldNames All -ExchangeLocation $null -SharePointLocation $null
```

This example changes an existing compliance search that's associated with an eDiscovery case in the Office 365 Security & Compliance Center. The scope of the search is changed from searching selected mailboxes and SharePoint sites to searching all content locations that have been placed on hold in the eDiscovery case.

### -------------------------- Example 3 --------------------------
```
Set-ComplianceSearch -Identity "China Subsidiary Search" -Language zh-CN
```

This example changes the language setting for an existing compliance search to Chinese.

You might have to change the language setting if you're using non-English keywords in the search query (which is specified in the ContentMatchQuery parameter).

## PARAMETERS

### -Identity
The Identity parameter specifies the compliance search that you want to modify.

You can use any value that uniquely identifies the compliance search. For example:

- Name

- JobRunId (GUID)

You can find these values by running the command Get-ComplianceSearch | Format-Table -Auto Name,JobRunId,Status

```yaml
Type: ComplianceSearchIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddExchangeLocation
The AddExchangeLocation parameter specifies the mailboxes to add to the list of included mailboxes when you aren't using the value All for the ExchangeLocation parameter. Valid values are:

- A regular user mailbox. Including other types of mailboxes (for example, inactive mailboxes or Office 365 guest users) is controlled by the AllowNotFoundExchangeLocationsEnabled parameter.

- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddExchangeLocationExclusion
This parameter specifies the mailboxes to add to the list of excluded mailboxes when you use the value All for the ExchangeLocation parameter. Valid values are:

- A regular user mailbox. Including other types of mailboxes (for example, inactive mailboxes or Office 365 guest users) is controlled by the AllowNotFoundExchangeLocationsEnabled parameter.

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddOneDriveLocationExclusion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddPublicFolderLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddPublicFolderLocationExclusion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocation
The AddSharePointLocation parameter specifies the SharePoint Online sites to add to the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSharePointLocationExclusion
This parameter specifies the SharePoint Online sites to add to the list of excluded sites when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNotFoundExchangeLocationsEnabled
The AllowNotFoundExchangeLocationsEnabled parameter specifies whether to include mailboxes other than regular user mailboxes in the compliance search. Valid values are:

- $true: The search doesn't try to validate the existence of the mailbox before proceeding. This value is required if you want to search mailboxes that don't resolve as regular mailboxes.

- $false: The search tries to validate the existence of the mailbox before proceeding. If you specify a mailbox that isn't a regular user mailbox, the search will fail. This is the default value.

The mailbox types that are affected by the value of this parameter include:

- Inactive mailboxes

- Users without an Exchange Online license who use Office applications

- Office 365 guest users

- On-premises users whose identity is synchronized with your Office 365 organization

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
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
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentMatchQuery
The ContentMatchQuery parameter specifies a content search filter.

This parameter uses a text search string or a query that's formatted by using the Keyword Query Language (KQL). For more information about KQL, see Keyword Query Language syntax reference (https://go.microsoft.com/fwlink/p/?linkid=269603).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter specifies a description for the compliance search. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeLocation
The ExchangeLocation parameter specifies the mailboxes to include. Valid values are:

- A regular user mailbox. Including other types of mailboxes (for example, inactive mailboxes or Office 365 guest users) is controlled by the AllowNotFoundExchangeLocationsEnabled parameter.

- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

- The value All for all mailboxes. You can only use this value by itself.

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeLocationExclusion
This parameter specifies the mailboxes to exclude when you use the value All for the ExchangeLocation parameter. Valid values are:

- A regular user mailbox. Including other types of mailboxes (for example, inactive mailboxes or Office 365 guest users) is controlled by the AllowNotFoundExchangeLocationsEnabled parameter.

- A distribution group or mail-enabled security group (all mailboxes that are currently members of the group).

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldNames
The HoldNames parameter specifies that the content locations that have been placed on hold in the eDiscovery case will be searched. You use the value All for this parameter. You can use this parameter only for compliance searches that are associated with an eDiscovery case.

If the content locations in the compliance search include mailboxes, you also need to use the ExchangeLocation parameter with the value $null. Similarly, if the compliance search includes SharePoint sites, you also need to use the SharePointLocation parameter withthe value $null.

Also, if a content location was placed on a query-based case hold, only items that are on hold will be searched when you restart this compliance search. For example, if a user was placed on a query-based case hold that preserves items that were sent or created before a specific date, only those items would be searched by using the search criteria specified by this compliance search.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUserAppContent
This parameter is available only in the cloud-based service.

The IncludeUserAppContent parameter specifies that you want to search the cloud-based storage location for users who don't have a regular Office 365 user account in your organization. These types of users include users without an Exchange Online license who use Office applications, Office 365 guest users, and on-premises users whose identity is synchronized with your Office 365 organization. Valid values are:

- $true: The cloud-based storage location for the users specified in any of the Exchange location parameters will be included in the search. If you use the value All for the ExchangeLocation parameter, the cloud-based storage location for any guest or on-premises user will be included in the search.

- $false: The cloud-based storage location for the users specified in the ExchangeLocation parameter won't be included in the search. This is the default value. 

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The Language parameter specifies the language for the compliance search.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OneDriveLocationExclusion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderLocation
The PublicFolderLocation parameter specifies that you want to include all public folders in the search. You use the value All for this parameter.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderLocationExclusion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefinerNames
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocation
The RemoveExchangeLocation parameter specifies the mailboxes to remove from the list of included mailboxes when you aren't using the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveExchangeLocationExclusion
This parameter specifies the mailboxes to remove from the list of excluded mailboxes when you use the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

- A distribution group or mail-enabled security group

To specify a mailbox or distribution group, you can use any value that uniquely identifies it. For example:

- Name

- Distinguished name (DN)

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOneDriveLocationExclusion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePublicFolderLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePublicFolderLocationExclusion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocation
The RemoveSharePointLocation parameter specifies the SharePoint Online sites to remove from the list of included sites when you aren't using the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSharePointLocationExclusion
This parameter specifies the SharePoint Online sites to remove from the list of excluded sites when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchNames
This parameter is reserved for internal Microsoft use.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocation
The SharePointLocation parameter specifies the SharePoint Online sites to include. You identify the site by its URL value, or you can use the value All to include all sites.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointLocationExclusion
This parameter specifies the SharePoint Online sites to exclude when you use the value All for the SharePointLocation parameter. You identify the site by its URL value.

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter doesn't work in the Office 365 Security & Compliance Center.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center
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

[Online Version](https://technet.microsoft.com/library/49464588-9e57-442f-97ec-ab9d9927983a.aspx)
