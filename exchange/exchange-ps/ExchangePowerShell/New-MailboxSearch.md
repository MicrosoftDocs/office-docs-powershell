---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/new-mailboxsearch
schema: 2.0.0
title: New-MailboxSearch
---

# New-MailboxSearch

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailboxSearch cmdlet to create a mailbox search and either get an estimate of search results, place search results on In-Place Hold or copy them to a Discovery mailbox. You can also place all contents in a mailbox on hold by not specifying a search query, which accomplishes similar results as Litigation Hold.

**Note**: As of October 2020, the \*-MailboxSearch cmdlets are retired in Exchange Online PowerShell. Use the \*-ComplianceSearch cmdlets in Security & Compliance PowerShell instead. For more information, see [Retirement of legacy eDiscovery tools](https://learn.microsoft.com/purview/ediscovery-legacy-retirement).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-MailboxSearch [-Name] <String>
 [-AllPublicFolderSources <Boolean>]
 [-AllSourceMailboxes <Boolean>]
 [-Confirm]
 [-Description <String>]
 [-DomainController <Fqdn>]
 [-DoNotIncludeArchive]
 [-EndDate <ExDateTime>]
 [-EstimateOnly]
 [-ExcludeDuplicateMessages <Boolean>]
 [-Force]
 [-IncludeKeywordStatistics]
 [-IncludeUnsearchableItems]
 [-InPlaceHoldEnabled <Boolean>]
 [-InPlaceHoldIdentity <String>]
 [-ItemHoldPeriod <Unlimited>]
 [-Language <CultureInfo>]
 [-LogLevel <LoggingLevel>]
 [-MessageTypes <KindKeyword[]>]
 [-Recipients <String[]>]
 [-SearchDumpster]
 [-SearchQuery <String>]
 [-Senders <String[]>]
 [-SourceMailboxes <RecipientIdParameter[]>]
 [-StartDate <ExDateTime>]
 [-StatusMailRecipients <RecipientIdParameter[]>]
 [-TargetMailbox <MailboxIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-MailboxSearch cmdlet creates an In-Place eDiscovery search or an In-Place Hold. You can stop, start, modify, or remove the search.

By default, mailbox searches are performed across all Exchange 2013 or later Mailbox servers in an organization, unless you constrain the search to fewer mailboxes by using the SourceMailboxes parameter. To search mailboxes on Exchange 2010 Mailbox servers, run the command on an Exchange 2010 server.

For more information, see [In-Place eDiscovery in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/ediscovery/ediscovery) and [In-Place Hold and Litigation Hold in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/holds/holds).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MailboxSearch -Name "Legal-ProjectX" -SourceMailboxes DG-Marketing,DG-Executives -TargetMailbox LegalDiscovery@contoso.com -StartDate "01/01/2018" -EndDate "12/31/2018" -Recipients "@contoso.com" -SearchQuery "project report hasattachments:true" -StatusMailRecipients "DG-DiscoveryTeam"
```

This example creates the mailbox search Legal-ProjectX. The search uses several parameters to restrict the search query:

- SourceMailboxes: This parameter restricts the search to members of the DG-Marketing and DG-Executives distribution groups.
- Recipients: This parameter specifies that the search includes all mail sent to the domain contoso.com.
- SearchQuery: This parameter specifies a KQL query for messages with either the words project or report and for messages with attachments.
- StartDate and EndDate: These parameters specify the start date of January 1, 2018, and end date of December 31, 2018, for the search.
- TargetMailbox: This parameter specifies that search results should be copied to the discovery mailbox LegalDiscovery.
- StatusMailRecipients: This parameter specifies that the distribution group DG-DiscoveryTeam is to receive a notification when the search is complete.

### Example 2
```powershell
New-MailboxSearch -Name "Hold-ProjectX" -SourceMailboxes DG-Finance -InPlaceHoldEnabled $true
```

This example creates an In-Place Hold named Hold-ProjectX and places all members of the distribution group DG-Finance on hold. Because the search doesn't specify the SearchQuery and ItemHoldPeriod parameters, all messages in mailboxes returned are placed on indefinite In-Place Hold.

### Example 3
```powershell
New-MailboxSearch -Name "Hold-tailspintoys" -SourceMailboxes DG-Research -SearchQuery '"Patent" AND "Project tailspintoys"' -InPlaceHoldEnabled $true
```

This example creates an In-Place Hold named Hold-tailspintoys and places all members of the distribution group DG-Research on hold. Because the search specifies the SearchQuery parameter, only messages that match the search query are placed on indefinite In-Place Hold.

### Example 4
```powershell
New-MailboxSearch -Name "Hold for all PFs" -AllPublicFolderSources $true -InPlaceHoldEnabled $true
```

In on-premises Exchange, this example creates an In-Place Hold named Hold for all PFs that places all content in all public folders on In-Place hold, with an unlimited hold duration.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies a friendly name for the search. If the value contains spaces, enclose the value in quotation marks (").

The value of this parameter is used to create the top-level folder that holds the search results in the target mailbox that's specified by the TargetMailbox parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllPublicFolderSources

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllPublicFolderSources parameter specifies whether to include all public folders in the organization in the search. Valid values are:

- $true: All public folders are included in the search. This value is required when the value of the AllSourceMailboxes parameter is $false and you don't specify one or more source mailboxes by using the SourceMailboxes parameter (the parameter value is blank [$null]).
- $false: No public folders are included in the search. This is the default value. You can use this value when the value of the AllSourceMailboxes parameter is $true or you specify one or more source mailboxes by using the SourceMailboxes parameter (the parameter value isn't blank [$null]).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllSourceMailboxes

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The AllSourceMailboxes parameter specifies whether to include all mailboxes in the search. Valid values are:

- $true: All mailboxes are included in the search. This value is required when the value of the AllPublicFolderSources parameter is $false and you don't specify one or more source mailboxes by using the SourceMailboxes parameter (the parameter value is blank [$null]).
- $false: All mailboxes aren't included in the search. This is the default value. You can use this value when the value of the AllPublicFolderSources parameter is $true or you specify one or more source mailboxes by using the SourceMailboxes parameter (the parameter value isn't blank [$null]).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Description parameter specifies a description for the search. The description isn't displayed to users. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotIncludeArchive

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The DoNotIncludeArchive switch specifies that archive mailboxes are not included in the search. You don't need to specify a value with this switch.

By default, archive mailboxes are included in the search. To exclude archive mailboxes, use this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EstimateOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The EstimateOnly switch specifies that only an estimate of the number of items that will be returned is provided. You don't need to specify a value with this switch.

If you don't use this switch, messages are copied to the target mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeDuplicateMessages

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExcludeDuplicateMessages parameter eliminates duplication of messages in search results. Valid values are:

- $true: Copy a single instance of a message if the same message exists in multiple folders or mailboxes. This is the default value.
- $false: Copy all instances of a message if the same message exists in multiple folders or mailboxes.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeKeywordStatistics

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The IncludeKeywordStatistics switch returns keyword statistics (number of instances for each keyword) in search results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUnsearchableItems

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The IncludeUnsearchableItems switch specifies that items that couldn't be indexed by Exchange Search should be included in the results. You don't need to specify a value with this switch.

Unsearchable items aren't placed on hold for a query-based In-Place Hold. If you need to place unsearchable items on hold, you need to create an indefinite hold (a hold without specifying any search parameters, which provides functionality similar to Litigation Hold.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InPlaceHoldEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The InPlaceHoldEnabled parameter specifies whether to set an In-Place Hold on items in the search results. Valid values are:

- $true: In-Place Hold is enabled on the search results.
- $false: In-Place Hold isn't enabled on the search results. This is the default value.

You can't set an In-Place Hold on the search results when the AllSourceMailboxes parameter is $true.

If you attempt to place a hold but don't specify mailboxes using the SourceMailboxes parameter, the command may succeed but the mailboxes are not placed on In-Place Hold.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InPlaceHoldIdentity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemHoldPeriod

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The ItemHoldPeriod parameter specifies the number of days for the In-Place Hold onthe mailbox items (all mailbox items or the items that are returned in the search query results). The duration is calculated from the time the item is received or created in the mailbox. Valid values are:

- An integer.
- The value unlimited. This is the default value. Items are held until you remove the In-Place Hold by removing the search by using the Remove-MailboxSearch cmdlet, removing the source mailbox from the search by using the Set-MailboxSearch cmdlet and the SourceMailboxes parameter, or in on-premises Exchange, you remove all public folders from the search by using the Set-MailboxSearch cmdlet to change the AllPublicFolderSources parameter from $true to $false.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Language parameter specifies a locale for the search.

Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework CultureInfo class. For example, da-DK for Danish or ja-JP for Japanese. For more information, see [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The LogLevel parameter specifies the logging level for the search. Valid values are:

- Suppress: No logs are kept.
- Basic: Basic information about the query and who ran it is kept. This is the default value.
- Full: In addition to the information kept by the Basic log level, the Full log level adds a complete list of search results.

```yaml
Type: LoggingLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MessageTypes parameter specifies the message types to include in the search query. Valid values are:

- Contacts
- Docs
- Email
- IM
- Journals
- Meetings
- Notes
- Tasks

You can specify multiple values separated by commas.

The default value is blank ($null), which means all message types are included.

```yaml
Type: KindKeyword[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recipients

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Recipients parameter specifies one or more recipients to include in the search query. Messages that have the specified recipients in the To, Cc, and Bcc fields are returned in the search results.

You can specify multiple recipients separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchDumpster

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The SearchDumpster switch specifies whether the dumpster is searched. You don't need to specify a value with this switch.

The dumpster is a storage area in the mailbox where deleted items are temporarily stored after being deleted or removed from the Deleted Items folder, or after being hard-deleted and before being purged from the mailbox based on Deleted Item Retention settings.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchQuery

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SearchQuery parameter specifies keywords for the search query by using the Keyword Query Language (KQL). For more information, see [Keyword Query Language (KQL) syntax reference](https://learn.microsoft.com/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) and [Keyword queries and search conditions for eDiscovery](https://learn.microsoft.com/purview/ediscovery-keyword-queries-and-search-conditions).

If you use this parameter with other search query parameters, the query combines these parameters by using the AND operator.

The other search query parameters are:

- EndDate
- MessageTypes
- Recipients
- Senders
- StartDate

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Senders

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Senders parameter specifies one or more senders to include in the search query. Messages that have the specified sender are returned in the search results. Senders can include users, distribution groups (messages sent by members of the group), SMTP addresses, or domains.

You can specify multiple senders separated by commas. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceMailboxes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SourceMailboxes parameter specifies the identity of one or more mailboxes to be searched. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To use this parameter, the AllSourceMailboxes parameter needs to be $false (the default value).

The default value is blank ($null), which means no source mailboxes are specified. To clear the source mailboxes, use the value $null.

To enable In-Place Hold on the search results, you need to set the AllSourceMailboxes parameter to $false (the default value) and configure one or both of the following settings:

- Specify one ore more source mailboxes by using the SourceMailboxes parameter.
- In on-premises Exchange, set the AllPublicFolderSources parameter to $true.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StatusMailRecipients

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StatusMailRecipients parameter specifies one or more recipients to receive a status email message upon completion of the search. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The TargetMailbox parameter specifies the destination mailbox where the search results are copied. You can use any value that uniquely identifies themailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The WhatIf switch doesn't work on this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
