---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/search-mailbox
schema: 2.0.0
title: Search-Mailbox
---

# Search-Mailbox

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Search-Mailbox cmdlet to search a mailbox and copy the results to a specified target mailbox, delete messages from the source mailbox, or both.

**Note**: In cloud-based environments, the Search-Mailbox cmdlet was deprecated in favor of [New-ComplianceSearch](https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancesearch) and related eDiscovery cmdlets.

By default, Search-Mailbox is available only in the Mailbox Search or Mailbox Import Export roles, and these roles aren't assigned to *any* role groups. To use this cmdlet, you need to add one or both of the roles to a role group (for example, the Organization Management role group). Only the Mailbox Import Export role gives you access to the DeleteContent parameter. For more information about adding roles to role groups, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Search-Mailbox [-Identity] <MailboxOrMailUserIdParameter>
 [-Confirm]
 [-DeleteContent]
 [-DomainController <Fqdn>]
 [-DoNotIncludeArchive]
 [-Force]
 [-IncludeUnsearchableItems]
 [-SearchDumpster]
 [-SearchDumpsterOnly]
 [-SearchQuery <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### EstimateResult
```
Search-Mailbox [-Identity] <MailboxOrMailUserIdParameter>
 [-EstimateResultOnly]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-DoNotIncludeArchive]
 [-Force]
 [-IncludeUnsearchableItems]
 [-SearchDumpster]
 [-SearchDumpsterOnly]
 [-SearchQuery <String>]
 [-WhatIf]
 [<CommonParameters>]
```

### Mailbox
```
Search-Mailbox [-Identity] <MailboxOrMailUserIdParameter> -TargetFolder <String> -TargetMailbox <MailboxIdParameter>
 [-Confirm]
 [-DeleteContent]
 [-DomainController <Fqdn>]
 [-DoNotIncludeArchive]
 [-Force]
 [-IncludeUnsearchableItems]
 [-LogLevel <LoggingLevel>]
 [-LogOnly]
 [-SearchDumpster]
 [-SearchDumpsterOnly]
 [-SearchQuery <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can use the Search-Mailbox cmdlet to search messages in a specified mailbox and perform any of the following tasks:

- Copy messages to a specified target mailbox.
- Delete messages from the source mailbox. You have to be assigned the Mailbox Import Export management role to delete messages.
- Perform single item recovery to recover items from a user's Recoverable Items folder.
- Clean up the Recoverable Items folder for a mailbox when it has reached the Recoverable Items hard quota.

## EXAMPLES

### Example 1
```powershell
Search-Mailbox -Identity "Joe Healy" -SearchQuery "Subject:Project Hamilton" -TargetMailbox "DiscoveryMailbox" -TargetFolder "JoeHealy-ProjectHamilton" -LogLevel Full
```

This example searches the mailbox of Joe Healy and copies the search results to the DiscoveryMailbox in the folder JoeHealy-ProjectHamilton.

### Example 2
```powershell
Search-Mailbox -Identity "April Stewart" -SearchQuery 'Subject:"Your bank statement"' -TargetMailbox "administrator" -TargetFolder "SearchAndDeleteLog" -LogOnly -LogLevel Full
```

This example searches April Stewart's mailbox for messages that contain the phrase "Your bank statement" in the subject and logs the result in the SearchAndDeleteLog folder in the administrator's mailbox. Messages aren't copied to the target mailbox.

### Example 3
```powershell
Search-Mailbox -Identity "April Stewart" -SearchQuery 'Subject:"Your bank statement"' -DeleteContent
```

This example searches April Stewart's mailbox for messages that contain the phrase "Your bank statement" in the subject and deletes the messages from the source mailbox. You have to be assigned the Mailbox Import Export management role to use the DeleteContent switch.

### Example 4
```powershell
Get-Mailbox | Search-Mailbox -SearchQuery 'election OR candidate OR vote' -TargetMailbox "Discovery Search Mailbox" -TargetFolder "AllMailboxes-Election" -LogLevel Full
```

This example searches all mailboxes in your organization for messages that contain the words "election", "candidate", or "vote". The search results are copied to the Discovery Search Mailbox in the folder AllMailboxes-Election.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the identity of the mailbox to search. You can use any value that uniquely identifies the mailbox. For example:

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
Type: MailboxOrMailUserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -EstimateResultOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The EstimateResultOnly switch returns only an estimate of the total number and size of messages. Messages aren't copied to the target mailbox. You don't need to specify a value with this switch.

You can't use this switch with the TargetMailbox parameter.

```yaml
Type: SwitchParameter
Parameter Sets: EstimateResult
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFolder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TargetFolder parameter specifies a folder name in which search results are saved in the target mailbox. The folder is created in the target mailbox upon execution.

```yaml
Type: String
Parameter Sets: Mailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TargetMailbox parameter specifies the destination mailbox where search results are copied. You can use any value that uniquely identifies the mailbox. For example:

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

You must use this parameter with the TargetFolder parameter. You can't use this parameter with the EstimateResultOnly switch.

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DeleteContent

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

**Note**: You need to be assigned the Mailbox Import Export management role to use this switch. By default, this role isn't assigned to any role group (including Organization Management). Typically, you assign a role to a built-in or custom role group.

The DeleteContent switch specifies that the messages returned by the search be permanently deleted from the source mailbox. You don't need to specify a value with this switch.

When you use this switch with the TargetMailbox parameter, messages are copied to the target mailbox and removed from the source mailbox. If you set the logging level for the search to Basic or Full, you must specify a target mailbox and a target folder to place the log in. To delete messages from the source mailbox without copying them to the target mailbox, don't specify the TargetMailbox, TargetFolder, and LogLevel parameters.

Before you use the DeleteContent switch to delete content, we recommend that you test search parameters by using the LogOnly parameter, as shown in Example 2.

```yaml
Type: SwitchParameter
Parameter Sets: Mailbox, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DoNotIncludeArchive switch specifies that the user's archive mailbox shouldn't be included in the search. You don't need to specify a value for this switch.

By default, the archive mailbox is always searched.

If auto-expanding archiving is enabled for an Exchange Online mailbox, only the user's primary archive mailbox is searched. Auxiliary archive mailboxes aren't included in the search.

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

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

Use this switch to hide the confirmation prompt when you use the DeleteContent switch to permanently delete messages.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The IncludeUnsearchableItems switch includes items that couldn't be indexed by Exchange Search in the search results. You don't need to specify a value with this switch.

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

### -LogLevel

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The LogLevel parameter specifies the logging level for the search. It can have one of the following values:

- Suppress: No logs are kept.
- Basic: Basic information about the query and who ran it is kept.
- Full: In addition to the information kept by the Basic log level, the Full log level adds a complete list of search results.

The default log level is Basic.

When you included this parameter, an email message is created and sent to the mailbox specified by the TargetMailbox parameter. The log file (which is a CSV-formatted file named Search Results.csv) is attached to this email message, and is located in the folder specified by the TargetFolder parameter. The log file contains a row for each message that's included in the search results when you run the Search-Mailbox cmdlet.

```yaml
Type: LoggingLevel
Parameter Sets: Mailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The LogOnly switch performs a search, but only generates a log. Messages returned by the search aren't copied to the target mailbox. You don't need to specify a value with this switch.

The logging level is specified by using the LogLevel parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Mailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchDumpster

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SearchDumpster switch specifies whether to include the Recoverable Items folder in the search. The Recoverable items folder stores items that were deleted from the Deleted Items folder or items that were hard-deleted until they're purged from the mailbox database.

By default, the Recoverable Items folder is always included in the search. To exclude the Recoverable Items folder from the search, use this exact syntax: `-SearchDumpster:$false`.

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

### -SearchDumpsterOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SearchDumpsterOnly switch specifies that only the Recoverable Items folder of the specified mailbox is searched. You don't need to specify a value with this switch.

The Recoverable items folder stores items that were deleted from the Deleted Items folder or items that were hard-deleted until they're purged from the mailbox database.

You can also use this switch with the DeleteContent switch to delete messages from the Recoverable Items folder and reduce the size of the folder.

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

### -SearchQuery

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The SearchQuery parameter specifies a search string or a query formatted using Keyword Query Language (KQL). For more information about KQL in Exchange, see [Message properties and search operators for In-Place eDiscovery](https://learn.microsoft.com/exchange/security-and-compliance/in-place-ediscovery/message-properties-and-search-operators).

If this parameter is empty, all messages are returned.

**Note**: The Search-Mailbox cmdlet returns up to 10000 results per mailbox if a search query is specified.

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
