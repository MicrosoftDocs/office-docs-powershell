---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/restore-mailbox
schema: 2.0.0
title: Restore-Mailbox
---

# Restore-Mailbox

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Restore-Mailbox cmdlet to extract mailbox content from a restored database.

**Note**: In Exchange Server 2010 Service Pack 1 (SP1) or later, use the New-MailboxRestoreRequest cmdlet instead of the Restore-Mailbox cmdlet to extract mailbox content from a restored database.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Restore-Mailbox [-Identity] <MailboxIdParameter> -RecoveryDatabase <DatabaseIdParameter> -RecoveryMailbox <StoreMailboxIdParameter> -TargetFolder <String>
 [-AllowDuplicates]
 [-AllContentKeywords <String[]>]
 [-AttachmentFilenames <String[]>]
 [-BadItemLimit <Int32>]
 [-Confirm]
 [-ContentKeywords <String[]>]
 [-EndDate <DateTime>]
 [-ExcludeFolders <MapiFolderPath[]>]
 [-GlobalCatalog <Fqdn>]
 [-IncludeFolders <MapiFolderPath[]>]
 [-Locale <CultureInfo>]
 [-MaxThreads <Int32>]
 [-RecipientKeywords <String[]>]
 [-SenderKeywords <String[]>]
 [-StartDate <DateTime>]
 [-SubjectKeywords <String[]>]
 [-ValidateOnly]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Restore-Mailbox cmdlet copies end-user data from any server running Microsoft Exchange Server 2010 to a mailbox on an Exchange 2010 Mailbox server in the same organization that has adequate space and resources to support the mailbox. The Restore-Mailbox cmdlet can only use disconnected mailboxes on a server as a source of data, and the cmdlet can only use connected mailboxes as a target for data.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Restore-Mailbox -Identity Scott -RecoveryDatabase MyRecoveryDatabase
```

This example restores a mailbox for user Scott from the database MyRecoveryDatabase.

### Example 2
```powershell
Restore-Mailbox -Identity Scott -RecoveryDatabase MyRecoveryDatabase -RecoveryMailbox John -TargetFolder Recovery
```

This example restores John's mailbox content into Scott's mailbox under the Recovery folder.

### Example 3
```powershell
Restore-Mailbox -Identity Scott -RecoveryDatabase MyRecoveryDatabase -SubjectKeywords "Meeting" -ContentKeywords "business" -IncludeFolders \Inbox,\Calendar
```

This example restores only the mail with the subject Meeting, with the message body containing the word business, and with the message location either in the Inbox or Calendar folder. This example assumes that the mailbox is in English.

### Example 4
```powershell
Get-Mailbox -Database MyDatabase | Restore-Mailbox -RecoveryDatabase MyRecoveryDatabase
```

This example bulk restores all the mailboxes in the MyDatabase mailbox database that are also present in MyRecoveryDatabase.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

The Identity parameter specifies the mailbox that you want to restore. You can use any value that uniquely identifies the mailbox. For example:

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

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RecoveryDatabase

> Applicable: Exchange Server 2010

The RecoveryDatabase parameter specifies the recovery database where you are restoring the mailbox from. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoveryMailbox

> Applicable: Exchange Server 2010

The RecoveryMailbox parameter specifies the mailbox to be used as the source mailbox. This parameter is required if the source mailbox is different from the target mailbox.

You identify the mailbox by its GUID value. You can find the GUID value by using the Get-Mailbox or Get-MailboxStatistics cmdlets.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TargetFolder

> Applicable: Exchange Server 2010

The TargetFolder parameter specifies the mailbox folder that's created on the mailbox specified. This parameter is required if the mailbox being restored is different from the target mailbox. (For example, the value specified with the Identity parameter isn't the same as the value specified with the RecoveryMailbox parameter.) In this case, the Restore-Mailbox command performs a merge. If the values are the same, the TargetFolder parameter isn't required.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDuplicates

> Applicable: Exchange Server 2010

The AllowDuplicates switch copies mail items without checking if they're duplicates of existing items and without removing duplicate items. You don't need to specify a value with this switch.

We recommend that you use this switch with the IncludeFolders parameter.

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

### -AllContentKeywords

> Applicable: Exchange Server 2010

The AllContentKeywords parameter specifies the filters for all of the following:

- Subject
- Message body
- Attachment content

This allows an OR search of all these fields. If your search criteria are part of the subject, message body, or attachment content, you get results.

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

### -AttachmentFilenames

> Applicable: Exchange Server 2010

The AttachmentFilenames parameter specifies the filter for the attachment file name. You can use wildcard characters in the string. For example, you can use \*.txt to export items that have a .txt extension.

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

### -BadItemLimit

> Applicable: Exchange Server 2010

The BadItemLimit parameter specifies the number of corrupted items in a mailbox to skip before the export operation fails.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

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

### -ContentKeywords

> Applicable: Exchange Server 2010

The ContentKeywords parameter specifies the keyword filters for the message body and content of attachments in the source mailbox.

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

### -EndDate

> Applicable: Exchange Server 2010

The EndDate parameter specifies the end date for filtering content that will be exported from the source mailbox. Only items in the mailbox whose date is prior to the end date are exported. When you enter a specific date, use the short date format defined in the Regional Options settings configured on the local computer. For example, if your computer is configured to use the short date format MM/dd/yyyy, enter 03/01/2010 to specify March 1, 2010.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFolders

> Applicable: Exchange Server 2010

The ExcludeFolders parameter specifies the list of folders to exclude during the export. Folders are excluded as they're entered. They aren't localized. For example, excluding calendar only excludes calendar in English because calendar in other languages is a different word.

```yaml
Type: MapiFolderPath[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog

> Applicable: Exchange Server 2010

The GlobalCatalog parameter specifies the global catalog to use to search for the target mailbox.

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

### -IncludeFolders

> Applicable: Exchange Server 2010

The IncludeFolders parameter specifies the list of folders to include during the export. Folders are included as they're entered. They aren't localized. For example, including calendar only includes calendar in English because calendar in other languages is a different word.

```yaml
Type: MapiFolderPath[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locale

> Applicable: Exchange Server 2010

The Locale parameter specifies the locale setting on a message to restore. With this filter set, only messages with the specified locale setting are extracted.

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

### -MaxThreads

> Applicable: Exchange Server 2010

The MaxThreads parameter specifies the maximum number of threads to use.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientKeywords

> Applicable: Exchange Server 2010

The RecipientKeywords parameter specifies the keyword filters for recipients of items in the source mailbox. This filter finds the search string even if it's part of a word. This isn't a whole word search.

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

### -SenderKeywords

> Applicable: Exchange Server 2010

The SenderKeywords parameter specifies the keyword filters for senders of items in the source mailbox. This filter finds the search string even if it's part of a word. This isn't a whole word search.

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

### -StartDate

> Applicable: Exchange Server 2010

The StartDate parameter specifies the start date. The start date must be before the end date.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectKeywords

> Applicable: Exchange Server 2010

The SubjectKeywords parameter specifies the keyword filters for subjects of items in the source mailbox. This filter finds the search string even if it's part of a word. This isn't a whole word search.

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

### -ValidateOnly

> Applicable: Exchange Server 2010

The ValidateOnly switch tells the command to evaluate the conditions and requirements necessary to perform the operation, and then report whether the operation will succeed or fail. You don't need to specify a value with this switch.

No changes are made when you use this switch.

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

### -WhatIf

> Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
