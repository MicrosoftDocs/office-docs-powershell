---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mailboxfolderstatistics
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxFolderStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MailboxFolderStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxFolderStatistics cmdlet to retrieve information about the folders in a specified mailbox, including the number and size of items in the folder, the folder name and ID, and other information.

**Note**: In Exchange Online PowerShell, we recommend that you use the Get-EXOMailboxFolderStatistics cmdlet instead of this cmdlet. For more information, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-MailboxFolderStatistics [-Identity] <GeneralMailboxOrMailUserIdParameter> [-Archive] [-DiagnosticInfo <String>]
 [-DomainController <Fqdn>] [-FolderScope <Microsoft.Exchange.Data.Directory.SystemConfiguration.ElcFolderType>]
 [-IncludeAnalysis] [-IncludeOldestAndNewestItems] [-IncludeSoftDeletedRecipients] [<CommonParameters>]
```

### AuditLog
```
Get-MailboxFolderStatistics [-AuditLog] [-DomainController <Fqdn>]
 [-FolderScope <Microsoft.Exchange.Data.Directory.SystemConfiguration.ElcFolderType>]
 [[-Identity] <GeneralMailboxOrMailUserIdParameter>] [-IncludeAnalysis]
 [-IncludeOldestAndNewestItems] [-DiagnosticInfo <String>] [-IncludeSoftDeletedRecipients] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

A mailbox can have hidden items that are never visible to the user and are only used by applications. The Get-MailboxFolderStatistics cmdlet can return hidden items for the following values: FolderSize, FolderAndSubfolderSize, ItemsInFolder and ItemsInFolderAndSubfolders.

The Get-MailboxFolderStatistics cmdlet shouldn't be confused with the Get-MailboxStatistics cmdlet.

## EXAMPLES

### Example 1
```powershell
Get-MailboxFolderStatistics -Identity contoso\chris
```

This example doesn't specify the FolderScope parameter and retrieves all the information about the user Chris in the Contoso domain.

### Example 2
```powershell
Get-MailboxFolderStatistics -Identity Chris -FolderScope Calendar
```

This example uses the FolderScope parameter to view the statistics for calendar folders for the user Chris.

### Example 3
```powershell
Get-MailboxFolderStatistics -Identity Ayla@contoso.com -Archive
```

This example uses the Archive switch to view the statistics for Ayla's archive.

### Example 4
```powershell
Get-MailboxFolderStatistics -Identity "Tony" -FolderScope RecoverableItems -IncludeAnalysis
```

This example uses the IncludeAnalysis switch to view the statistics of Tony's Recoverable Items folder.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the mailbox or mail user. You can use any value that uniquely identifies the mailbox or mail user. For example:

- Name

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
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

```yaml
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: AuditLog
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Archive
The Archive switch specifies whether to return the usage statistics of the archive associated with the mailbox or mail user. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: AuditLog
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagnosticInfo
This parameter is available only in the cloud-based service.

Typically, you use the DiagnosticInfo parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FolderScope
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
Type: Microsoft.Exchange.Data.Directory.SystemConfiguration.ElcFolderType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAnalysis
The IncludeAnalysis switch specifies whether to scan all items within a folder and return statistics related to the folder and item size. You don't need to specify a value with this switch.

You should use this switch for troubleshooting purposes, because the command might take a long time to complete.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeOldestAndNewestItems
The IncludeOldestAndNewestItems switch specifies whether to return the dates of the oldest and newest items in each folder. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSoftDeletedRecipients
This parameter is available only in the cloud-based service.

The IncludeSoftDeletedRecipients switch specifies whether to include soft deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
