---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-exomailboxfolderstatistics
applicable: Exchange Online
title: Get-EXOMailboxFolderStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxFolderStatistics

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Conect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

Use the Get-EXOMailboxFolderStatistics cmdlet to retrieve information about the folders in a specified mailbox, including the number and size of items in the folder, the folder name and ID, and other information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxFolderStatistics
 [-Archive]
 [-ExternalDirectoryObjectId <Guid>]
 [-Folderscope <ElcFolderType>]
 [-Identity <String>]
 [-IncludeOldestAndNewestItems]
 [-IncludeSoftDeletedRecipients]
 [-ResultSize <Unlimited>]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

## DESCRIPTION
A mailbox can have hidden items that are never visible to the user and are only used by applications. The Get-EXOMailboxFolderStatistics cmdlet can return hidden items for the following values: FolderSize, FolderAndSubfolderSize, ItemsInFolder and ItemsInFolderAndSubfolders.

Don't confuse Get-EXOMailboxFolderStatistics cmdlet (folders) with the Get-EXOMailboxStatistics cmdlet (mailboxes).

## EXAMPLES

### Example 1
```powershell
Get-EXOMailboxFolderStatistics -Identity admin@contoso.com
```

This example returns statistics for all mailbox folders. Default is FolderScope All.

### Example 2
```powershell
Get-EXOMailboxFolderStatistics -Identity admin@contoso.com -FolderScope Calendar -IncludeAnalysis -IncludeOldestAndNewestItems
```

This example returns statistics only for calendar folders.

## PARAMETERS

### -Archive
The Archive switch specifies whether to return the usage statistics of the archive mailbox that's associated with the mailbox or mail user. You don't need to specify a value with this switch.

If you use this switch on a mailbox that doesn't have archiving enabled, an error is returned.

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

### -ExternalDirectoryObjectId
The ExternalDirectoryObjectId parameter identifies the mailbox you want to view by using the ObjectId of the mailbox in Azure Active Directory. You can use this value instead of the Identity parameter.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Folderscope
The FolderScope parameter specifies the scope of the search by folder type. Valid values include:

- All

- Archive

- Calendar

- Clutter

- Contacts

- ConversationHistory

- DeletedItems

- Drafts

- Inbox

- Journal

- JunkEmail

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

```yaml
Type: ElcFolderType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the mailbox or mail user. For the best performance, we recommend using the user ID or user principal name (UPN) to identify the mailbox.

Otherwise, you can use any value that uniquely identifies the mailbox or mail user. For example:

- Name

- Alias

- Distinguished name (DN)

- LegacyExchangeDN

- SamAccountName

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -IncludeOldestAndNewestItems
The IncludeOldestAndNewestItems switch specifies whether to return the dates of the oldest and newest items in each folder. You don't need to specify a value with this switch.

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

### -IncludeSoftDeletedRecipients
The IncludeSoftDeletedRecipients switch specifies whether to include soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are mailboxes that have been deleted, but are still recoverable.

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

### -UserPrincipalName
The UserPrincipalName parameter specifies the UPN for the mailbox you want to view (for example, navin.contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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
