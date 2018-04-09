---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2016, Office 365 Security & Compliance Center
title: New-ComplianceSearch
schema: 2.0.0
monikerRange: "exchserver-ps-2016 || o365scc-ps"
---

# New-ComplianceSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-ComplianceSearch cmdlet to create compliance searches in Exchange Server 2016 and in the Office 365 Security & Compliance Center. You use this cmdlet to define the search criteria.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-ComplianceSearch [-Name] <String> [-AllowNotFoundExchangeLocationsEnabled <$true | $false>]
 [-Case <String>] [-Confirm] [-ContentMatchQuery <String>] [-Description <String>]
 [-ExchangeLocation <String[]>] [-ExchangeLocationExclusion <String[]>] [-Force] [-HoldNames <String[]>]
 [-Language <CultureInfo>] [-LogLevel <Suppressed | Basic | Full>] [-OneDriveLocation <String[]>]
 [-OneDriveLocationExclusion <String[]>] [-PublicFolderLocation <String[]>]
 [-PublicFolderLocationExclusion <String[]>] [-RefinerNames <String[]>] [-SearchNames <String[]>]
 [-SharePointLocation <String[]>] [-SharePointLocationExclusion <String[]>] [-StatusMailRecipients <String[]>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A compliance search requires at least one location. For example, mailboxes using the ExchangeLocation parameter, or SharePoint sites using the SharePointLocation parameter.

After you create a compliance search using the New-ComplianceSearch cmdlet, you run the search using the Start-ComplianceSearch cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

This cmdlet is available in the Mailbox Search role. By default, this role is assigned only to the Discovery Management role group, and not to the Organization Management role group.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see Permissions in Office 365 Security & Compliance Center (https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ComplianceSearch -Name "Hold Project X" -ExchangeLocation "Finance Department"
```

This example creates a new compliance search named Hold-Project X that searches all members of the distribution group named Finance Department. Because the search doesn't use the ContentMatchQuery parameter, all items in the mailboxes are searched.

### -------------------------- Example 2 --------------------------
```
New-ComplianceSearch -Name "Hold-Tailspin Toys" -ExchangeLocation "Research Department" -ContentMatchQuery "'Patent' AND 'Project Tailspin Toys'"
```

This example creates a new compliance search named Hold-Tailspin Toys that searches all member of the distribution group named Research Department. Because the search uses the ContentMatchQuery parameter, only messages that match the query are searched.

### -------------------------- Example 3 --------------------------
```
New-ComplianceSearch -Name "AnnBeebe-InactiveMailbox" -ExchangeLocation .annb@contoso.onmicrosoft.com -AllowNotFoundExchangeLocationsEnabled $true
```

This example creates a new compliance search named AnnBeebe-InactiveMailbox that searches an inactive mailbox and returns all items in the mailbox. To search inactive mailboxes, you need to use the primary SMTP address of the inactive mailbox, prepended with a period ("."). You also need to include the AllowNotFoundExchangeLocationsEnabled parameter so the search doesn't try to validate the existence of the inactive mailbox.

## PARAMETERS

### -Name
The Name parameter specifies the name of the compliance search. If the value contains spaces, enclose the value in quotation marks.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Office 365 Security & Compliance Center

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowNotFoundExchangeLocationsEnabled
The AllowNotFoundExchangeLocationsEnabled parameter specifies whether to allow inactive mailboxes in the compliance search. An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. Valid values are:

- $true: The search doesn't try to validate the existence of the mailbox before proceeding. This value is required if you want to include inactive mailboxes in the search, because inactive mailboxes don't resolve as regular mailboxes.

- $false: The search tries to validate the existence of the mailbox before proceeding. If you specify an inactive mailbox or a mailbox that otherwise can't be found, the search will fail. This is the default value.

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

### -Case
The Case parameter specifies the name of an eDiscovery case that the new compliance search will be associated with. If the value contains spaces, enclose the value in quotation marks.

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
The Description parameter specifies an optional description for the compliance search. If the value contains spaces, enclose the value in quotation marks.

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

- A mailbox

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
Accept pipeline input: True
Accept wildcard characters: False
```

### -ExchangeLocationExclusion
This parameter specifies the mailboxes to exclude when you use the value All for the ExchangeLocation parameter. Valid values are:

- A mailbox

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
The HoldNames parameter specifies that the content locations that have been placed on hold in the specified eDiscovery case will be searched. You use the value All for this parameter. You also need to specify the name of an eDiscovery case by using the Case parameter.

Also, if a content location was placed on a query-based case hold, only items that are on hold will be searched when you run this compliance search. For example, if a user was placed on a query-based case hold that preserves items that were sent or created before a specific date, only those items would be searched by using the search criteria specified by this compliance search.

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

### -LogLevel
This parameter is reserved for internal Microsoft use.

```yaml
Type: Suppressed | Basic | Full
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

### -StatusMailRecipients
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

### -WhatIf
This parameter is reserved for internal Microsoft use.

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

[Online Version](https://technet.microsoft.com/library/433d1602-a026-4d63-be5e-605dd6b7b0d0.aspx)
