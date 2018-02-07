---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxFolderStatistics

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MailboxFolderStatistics cmdlet to retrieve information about the folders in a specified mailbox, including the number and size of items in the folder, the folder name and ID, and other information.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxFolderStatistics cmdlet to retrieve information about the folders in a specified mailbox, including the number and size of items in the folder, the folder name and ID, and other information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Get-MailboxFolderStatistics [-Identity] <MailboxOrMailUserIdParameter> [-Archive] [-DomainController <Fqdn>]
 [-FolderScope <Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems>]
 [-IncludeAnalysis] [-IncludeOldestAndNewestItems] [<CommonParameters>]
```

### Set1
```
Get-MailboxFolderStatistics [-Identity] <MailboxOrMailUserIdParameter> [-Archive] [-DomainController <Fqdn>]
 [-FolderScope <Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems | NonIpmRoot | LegacyArchiveJournals>]
 [-IncludeAnalysis] [-IncludeOldestAndNewestItems] [-IncludeInternalAccessFolders] [-IncludeRecoverableItems]
 [<CommonParameters>]
```

### Set2
```
Get-MailboxFolderStatistics [[-Identity] <MailboxOrMailUserIdParameter>] [-AuditLog] [-DomainController <Fqdn>]
 [-FolderScope <Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems | NonIpmRoot | LegacyArchiveJournals>]
 [-IncludeAnalysis] [-IncludeOldestAndNewestItems] [-IncludeInternalAccessFolders] [-IncludeRecoverableItems]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox folder" entry in the Mailbox Permissions topic.

A mailbox can have hidden items that are never visible to the user and are only used by applications. The Get-MailboxFolderStatistics cmdlet can return hidden items for the following values: FolderSize, FolderAndSubfolderSize, ItemsInFolder, and ItemsInFolderAndSubfolders.

The Get-MailboxFolderStatistics cmdlet shouldn't be confused with the Get-MailboxStatistics cmdlet. For more information, see Get-MailboxStatistics.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox folder permissions" entry in the Recipients Permissions topic.

A mailbox can have hidden items that are never visible to the user and are only used by applications. The Get-MailboxFolderStatistics cmdlet can return hidden items for the following values: FolderSize, FolderAndSubfolderSize, ItemsInFolder, and ItemsInFolderAndSubfolders.

The Get-MailboxFolderStatistics cmdlet shouldn't be confused with the Get-MailboxStatistics cmdlet. For more information, see Get-MailboxStatistics.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

A mailbox can have hidden items that are never visible to the user and are only used by applications. The Get-MailboxFolderStatistics cmdlet can return hidden items for the following values: FolderSize, FolderAndSubfolderSize, ItemsInFolder, and ItemsInFolderAndSubfolders.

The Get-MailboxFolderStatistics cmdlet shouldn't be confused with the Get-MailboxStatistics cmdlet. For more information, see Get-MailboxStatistics.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxFolderStatistics -Identity contoso\chris
```

This example doesn't specify the FolderScope parameter and retrieves all the information about the user Chris in the Contoso domain.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxFolderStatistics -Identity contoso\chris
```

This example doesn't specify the FolderScope parameter and retrieves all the information about the user Chris in the Contoso domain.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxFolderStatistics -Identity contoso\chris
```

This example doesn't specify the FolderScope parameter and retrieves all the information about the user Chris in the Contoso domain.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxFolderStatistics -Identity contoso\chris
```

This example doesn't specify the FolderScope parameter and retrieves all the information about the user Chris in the Contoso domain.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxFolderStatistics -Identity Chris -FolderScope Calendar
```

This example uses the FolderScope parameter to view the statistics for calendar folders for the user Chris.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxFolderStatistics -Identity Chris -FolderScope Calendar
```

This example uses the FolderScope parameter to view the statistics for calendar folders for the user Chris.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxFolderStatistics -Identity Chris -FolderScope Calendar
```

This example uses the FolderScope parameter to view the statistics for calendar folders for the user Chris.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxFolderStatistics -Identity Chris -FolderScope Calendar
```

This example uses the FolderScope parameter to view the statistics for calendar folders for the user Chris.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-MailboxFolderStatistics -Identity Ayla@contoso.com -Archive
```

This example uses the Archive parameter to view the statistics for Ayla's archive.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MailboxFolderStatistics -Identity Ayla@contoso.com -Archive
```

This example uses the Archive switch to view the statistics for Ayla's archive.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MailboxFolderStatistics -Identity Ayla@contoso.com -Archive
```

This example uses the Archiveswitch to view the statistics for Ayla's archive.

### Example 3 -------------------------- (Exchange Online)
```
Get-MailboxFolderStatistics -Identity Ayla@contoso.com -Archive
```

This example uses the Archiveswitch to view the statistics for Ayla's archive.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-MailboxFolderStatistics -Identity "Tony" -FolderScope RecoverableItems -IncludeAnalysis
```

This example uses the IncludeAnalysis parameter to view the statistics of Tony's Recoverable Items folder.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-MailboxFolderStatistics -Identity "Tony" -FolderScope RecoverableItems -IncludeAnalysis
```

This example uses the IncludeAnalysis switch to view the statistics of Tony's Recoverable Items folder.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-MailboxFolderStatistics -Identity "Tony" -FolderScope RecoverableItems -IncludeAnalysis
```

This example uses the IncludeAnalysisswitch to view the statistics of Tony's Recoverable Items folder.

### Example 4 -------------------------- (Exchange Online)
```
Get-MailboxFolderStatistics -Identity "Tony" -FolderScope RecoverableItems -IncludeAnalysis
```

This example uses the IncludeAnalysisswitch to view the statistics of Tony's Recoverable Items folder.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the identity of the mailbox or mail-enabled user. You can use one of the following values:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SMTP address

- Alias



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the identity of the mailbox or mail user. You can use any value that uniquely identifies the mailbox or mail user.

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
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive
!!! Exchange Server 2010

The Archive parameter specifies whether to return the usage statistics of the archive associated with the mailbox or mail-enabled user. You don't need to provide a value with this parameter.



!!! Exchange Server 2013

The Archive switch specifies whether to return the usage statistics of the archive associated with the mailbox or mail-enabled user. You don't need to specify a value with this switch.



!!! Exchange Server 2016, Exchange Online

The Archiveswitch specifies whether to return the usage statistics of the archive associated with the mailbox or mail user. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -FolderScope
!!! Exchange Server 2010

The FolderScope parameter specifies the scope of the search by folder type. Valid parameter values include:

- All

- Calendar

- Contacts

- ConversationHistory

- DeletedItems

- Drafts

- Inbox

- JunkEmail

- Journal

- ManagedCustomFolder

- Notes

- Outbox

- Personal

- RecoverableItems

- RssSubscriptions

- SentItems

- SyncIssues

- Tasks

If the ManagedCustomFolder value is entered, the command returns the output for all managed custom folders. If the RecoverableItems value is entered, the command returns the output for the Recoverable Items folder and the Deletions, Purges, and Versions subfolders.



!!! Exchange Server 2013

The FolderScope parameter specifies the scope of the search by folder type. Valid parameter values include:

- All

- Calendar

- Contacts

- ConversationHistory

- DeletedItems

- Drafts

- Inbox

- JunkEmail

- Journal

- LegacyArchiveJournals

- ManagedCustomFolder

- NonIpmRoot

- Notes

- Outbox

- Personal

- RecoverableItems

- RssSubscriptions

- SentItems

- SyncIssues

- Tasks

The ManagedCustomFolder value returns output for all managed custom folders. The RecoverableItems value returns output for the Recoverable Items folder and the Deletions, DiscoveryHolds, Purges, and Versions subfolders.



!!! Exchange Server 2016, Exchange Online

The FolderScope parameter specifies the scope of the search by folder type. Valid parameter values include:

- All

- Archive

- Calendar

- Contacts

- ConversationHistory

- DeletedItems

- Drafts

- Inbox

- JunkEmail

- Journal

- LegacyArchiveJournals

- ManagedCustomFolder

- NonIpmRoot

- Notes

- Outbox

- Personal

- RecoverableItems

- RssSubscriptions

- SentItems

- SyncIssues

- Tasks

The ManagedCustomFolder value returns output for all managed custom folders. The RecoverableItems value returns output for the Recoverable Items folder and the Deletions, DiscoveryHolds, Purges, and Versions subfolders.



```yaml
Type: Calendar | Contacts | DeletedItems | Drafts | Inbox | JunkEmail | Journal | Notes | Outbox | SentItems | Tasks | All | ManagedCustomFolder | RssSubscriptions | SyncIssues | ConversationHistory | Personal | RecoverableItems
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAnalysis
!!! Exchange Server 2010

The IncludeAnalysis parameter specifies whether to scan all items within a folder and return statistics related to the folder and item size. This parameter should be used for troubleshooting purposes and it may take a long time to complete.

You don't need to provide a value with this parameter.



!!! Exchange Server 2013

The IncludeAnalysis parameter specifies whether to scan all items within a folder and return statistics related to the folder and item size. You don't need to specify a value with this switch.

You should use this switch for troubleshooting purposes, because the command might take a long time to complete.



!!! Exchange Server 2016, Exchange Online

The IncludeAnalysisswitch specifies whether to scan all items within a folder and return statistics related to the folder and item size. You don't need to specify a value with this switch.

You should use this switch for troubleshooting purposes, because the command might take a long time to complete.



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

### -IncludeOldestAndNewestItems
!!! Exchange Server 2010

The IncludeOldestAndNewestItems parameter specifies whether to return the dates of the oldest and newest items in each folder.



!!! Exchange Server 2013

The IncludeOldestAndNewestItems switch specifies whether to return the dates of the oldest and newest items in each folder. You don't need to specify a value with this switch.



!!! Exchange Server 2016, Exchange Online

The IncludeOldestAndNewestItemsswitch specifies whether to return the dates of the oldest and newest items in each folder. You don't need to specify a value with this switch.



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

### -AuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeInternalAccessFolders
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeRecoverableItems
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/212ca564-435e-4af6-8673-5564732bf118.aspx)

