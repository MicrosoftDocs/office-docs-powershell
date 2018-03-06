---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Search-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Search-Mailbox cmdlet to search a mailbox and copy the results to a specified target mailbox, delete messages from the source mailbox, or both.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Search-Mailbox [-Identity] <MailboxOrMailUserIdParameter> [-EstimateResultOnly] [-Confirm]
 [-DomainController <Fqdn>] [-DoNotIncludeArchive] [-Force] [-IncludeUnsearchableItems] [-SearchDumpster]
 [-SearchDumpsterOnly] [-SearchQuery <String>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Search-Mailbox [-Identity] <MailboxOrMailUserIdParameter> -TargetFolder <String>
 -TargetMailbox <MailboxIdParameter> [-Confirm] [-DeleteContent] [-DomainController <Fqdn>]
 [-DoNotIncludeArchive] [-Force] [-IncludeUnsearchableItems] [-LogLevel <Suppress | Basic | Full>] [-LogOnly]
 [-SearchDumpster] [-SearchDumpsterOnly] [-SearchQuery <String>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Search-Mailbox [-Identity] <MailboxOrMailUserIdParameter> [-Confirm] [-DeleteContent]
 [-DomainController <Fqdn>] [-DoNotIncludeArchive] [-Force] [-IncludeUnsearchableItems] [-SearchDumpster]
 [-SearchDumpsterOnly] [-SearchQuery <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You can use the Search-Mailbox cmdlet to search messages in a specified mailbox and perform any of the following tasks:

- Copy messages to a specified target mailbox.

- Delete messages from the source mailbox. You have to be assigned the Mailbox Import Export management role to delete messages.

- Copy messages from the source mailbox and delete them from the target mailbox.

- Perform single item recovery to recover items from a user's Recoverable Items folder.

- Clean up the Recoverable Items folder for a mailbox when it has reached the Recoverable Items hard quota.

In Exchange Online, we recommend that you don't use the Search-Mailbox -DeleteContent command to delete messages in mailboxes that have auto-expanding archiving enabled. Unexpected data loss may occur.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Search-Mailbox -Identity "Joe Healy" -SearchQuery "Subject:Project Hamilton" -TargetMailbox "DiscoveryMailbox" -TargetFolder "JoeHealy-ProjectHamilton" -LogLevel Full
```

This example searches the mailbox of Joe Healy and copies the search results to the DiscoveryMailbox in the folder JoeHealy-ProjectHamilton.

### Example 2
```
Search-Mailbox -Identity "April Stewart" -SearchQuery 'Subject:"Your bank statement"' -TargetMailbox "administrator" -TargetFolder "SearchAndDeleteLog" -LogOnly -LogLevel Full
```

This example searches April Stewart's mailbox for messages that contain the phrase "Your bank statement" in the subject and logs the result in the SearchAndDeleteLog folder in the administrator's mailbox. Messages aren't copied to the target mailbox.

### Example 3
```
Search-Mailbox -Identity "April Stewart" -SearchQuery 'Subject:"Your bank statement"' -DeleteContent
```

This example searches April Stewart's mailbox for messages that contain the phrase "Your bank statement" in the subject and deletes the messages from the source mailbox. You have to be assigned the Mailbox Import Export management role to use the DeleteContent switch.

### Example 4
```
Get-Mailbox | Search-Mailbox -SearchQuery 'election OR candidate OR vote' -TargetMailbox "Discovery Search Mailbox" -TargetFolder "AllMailboxes-Election" -LogLevel Full
```

This example searches all mailboxes in your organization for messages that contain the words "election", "candidate", or "vote". The search results are copied to the Discovery Search Mailbox in the folder AllMailboxes-Election.

## PARAMETERS

### -EstimateResultOnly
The EstimateResultOnly switch specifies that only an estimate of the total number and size of messages returned by the search be provided. Messages aren't copied to the target mailbox. You can't use this switch with the TargetMailbox parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the mailbox to search. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TargetFolder
The TargetFolder parameter specifies a folder name in which search results are saved in the target mailbox. The folder is created in the target mailbox upon execution.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox
The TargetMailbox parameter specifies the identity of the destination mailbox where search results are copied. You can use the following values:

- Alias

- Display name

- Domain\\Account

- SMTP address

- DN

- Object GUID

- UPN

- LegacyExchangeDN

When you specify a value for the TargetMailbox parameter, you must also specify the TargetFolder parameter. You can't use this parameter with the EstimateResultOnly switch.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteContent
The DeleteContent switch specifies that the messages returned by the search be permanently deleted from the source mailbox. When used with the TargetMailbox parameter, messages are copied to the target mailbox and removed from the source mailbox. If you set the logging level for the search to Basic or Full, you must specify a target mailbox and a target folder to place the log in. To delete messages from the source mailbox without copying them to the target mailbox, don't specify the TargetMailbox, TargetFolder, and LogLevel parameters.

As previously stated, we recommend that you don't use the DeleteContent switch to delete messages in Exchange Online mailboxes that have auto-expanding archiving enabled because unexpected data loss may occur.

You need to be assigned the Mailbox Import Export management role to use this switch. By default, this role isn't assigned to any role group. Typically, you assign a role to a built-in or custom role group. Or you can assign a role to a user, or a universal security group.

Before you use the DeleteContent switch to delete content, we recommend that you test search parameters by using the LogOnly parameter, as shown in Example 2.

```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DoNotIncludeArchive
The DoNotIncludeArchive switch specifies that the user's archive mailbox shouldn't be included in the search. You don't need to specify a value for this switch. By default, the archive mailbox is always searched.

If auto-expanding archiving is enabled for an Exchange Online mailbox, only the user's primary archive mailbox is searched. Auxiliary archive mailboxes aren't included in the search.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch overrides the confirmation prompt displayed when your use the DeleteContent switch to permanently delete messages.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeUnsearchableItems
The IncludeUnsearchableItems switch specifies whether to include items that couldn't be indexed by Exchange Search. When set to $true, the IncludeUnsearchableItems switch specifies that items that couldn't be indexed by Exchange Search should be included in the search results.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel
The LogLevel parameter specifies the logging level for the search. It can have one of the following values:

- Suppress: No logs are kept.

- Basic: Basic information about the query and who ran it is kept.

- Full: In addition to the information kept by the Basic log level, the Full log level adds a complete list of search results.

The default log level is Basic.

```yaml
Type: Suppress | Basic | Full
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogOnly
The LogOnly switch specifies that a search be performed and only a log be generated. Messages returned by the search aren't copied to the target mailbox. The logging level is specified by using the LogLevel parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchDumpster
The SearchDumpster parameter specifies whether to search the Recoverable Items folder, which is the storage location in which items deleted from the Deleted Items folder or hard-deleted items are stored until they're purged from the mailbox database. By default, the Recoverable Items folder is always searched. To exclude the folder from the search, set the SearchDumpster switch to $false, for example,-SearchDumpster:$false

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchDumpsterOnly
The SearchDumpsterOnly switch specifies that only the Recoverable Items folder of the specified mailbox be searched. You can also use this switch with the DeleteContent switch to delete messages from the Recoverable Items folder and reduce the size of the folder.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchQuery
The SearchQuery parameter specifies a search string or a query formatted using Keyword Query Language (KQL). For more details about KQL, see Keyword Query Language syntax reference (https://go.microsoft.com/fwlink/p/?linkid=269603).

If this parameter is empty, all messages are returned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9ee3b02c-d343-4816-a583-a90b1fad4b26.aspx)
