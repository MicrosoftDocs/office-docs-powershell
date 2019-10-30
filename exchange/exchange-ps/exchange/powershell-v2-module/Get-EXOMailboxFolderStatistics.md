---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXOMailboxFolderStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EXOMailboxFolderStatistics

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://review.docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2?branch=ExORestModule-chrisda).

Use the Get-EXOMailboxFolderStatistics cmdlet to retrieve information about the folders in a specified mailbox, including the number and size of items in the folder, the folder name and ID, and other information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EXOMailboxFolderStatistics
 [-Archive]
 [-ExternalDirectoryObjectId <Guid>]
 [-Folderscope <ElcFolderType>]
 [-Identity <String>]
 [-IncludeAnalysis]
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

### -------------------------- Example 1 --------------------------
```
Get-EXOMailboxFolderStatistics -Identity admin@contoso.com
```

This example returns statistics for all mailbox folders. Default is FolderScope All.

### -------------------------- Example 2 --------------------------
```
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
The ExternalDirectoryObjectId parameter specifies the object ID for the Azure Active Directory account as the external directory object id of the mailbox.

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
The FolderScope parameter specifies the scope of the search by folder type. Valid parameter values include:

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
The Identity parameter specifies the identity of the mailbox or mail user. You can use any value that uniquely identifies the mailbox or mail user. For example:

- GUID

- User Principal Name (UPN)

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

### -IncludeAnalysis
The IncludeAnalysis switch specifies whether to scan all items within a folder and return statistics related to the folder and item size. You don't need to specify a value with this switch.

You should use this switch for troubleshooting purposes, because the command might take a long time to complete.

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
The UserPrincipalName parameter specifies the UPN of the user (for example, navin@contoso.com).

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailboxfolderstatistics)
