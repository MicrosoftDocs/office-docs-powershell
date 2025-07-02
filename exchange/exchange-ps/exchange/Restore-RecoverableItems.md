---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/restore-recoverableitems
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Restore-RecoverableItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Restore-RecoverableItems

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Restore-RecoverableItems items cmdlet to restore deleted items in mailboxes. You use the Get-RecoverableItems cmdlet to find the deleted items to recover.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### OnPremises
```
Restore-RecoverableItems -Identity <GeneralMailboxOrMailUserIdParameter>
 [-EntryID <String>]
 [-FilterEndTime <DateTime>]
 [-FilterItemType <String>]
 [-FilterStartTime <DateTime>]
 [-LastParentFolderID <String>]
 [-ResultSize <Unlimited>]
 [-SourceFolder <RecoverableItemsFolderType>]
 [-SubjectContains <String>]
 [<CommonParameters>]
```

### Cloud
```
Restore-RecoverableItems -Identity <GeneralMailboxOrMailUserIdParameter[]>
 [-EntryID <String>]
 [-FilterEndTime <DateTime>]
 [-FilterItemType <String>]
 [-FilterStartTime <DateTime>]
 [-LastParentFolderID <String>]
 [-MaxParallelSize <Int32>]
 [-NoOutput]
 [-PolicyTag <String[]>]
 [-RestoreTargetFolder <String>]
 [-ResultSize <Unlimited>]
 [-SourceFolder <RecoverableItemsFolderType>]
 [-SubjectContains <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Items are restored to the original folder location if the information is available for the item. If the information can't be found, the item is restored to the default folder for the item type (Inbox for messages, Calendar for meetings and appointments, etc.).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Restore-RecoverableItems -Identity laura@contoso.com -FilterItemType IPM.Note -SubjectContains "FY18 Accounting" -FilterStartTime "2/1/2018 12:00:00 AM" -FilterEndTime "2/5/2018 11:59:59 PM"
```

After using the Get-RecoverableItems cmdlet to verify the existence of the item, this example restores the specified deleted item from the specified mailbox:

- Mailbox: laura@contoso.com
- Item type: Email message
- Message subject: FY18 Accounting
- Location: Recoverable Items\Deletions
- Date range: 2/1/2018 to 2/5/2018

### Example 2
```powershell
$mailboxes = Import-CSV "C:\My Documents\RestoreMessage.csv"

$mailboxes | foreach {Restore-RecoverableItems -Identity $_.SMTPAddress -SubjectContains "Project X" -SourceFolder DeletedItems -FilterItemType IPM.Note}
```

In Exchange Server, this example restores the deleted email message "Project X" for the mailboxes that are specified in the comma-separated value (CSV) file C:\\My Documents\\RestoreMessage.csv. The CSV file uses the header value SMTPAddress, and contains the email address of each mailbox on a separate line like this:

SMTPAddress

chris@contoso.com

michelle@contoso.com

laura@contoso.com

julia@contoso.com

The first command reads the CSV file to the variable named $mailboxes. The second command restores the specified message from the Deleted Items folder in those mailboxes.

### Example 3
```powershell
Restore-RecoverableItems -Identity "malik@contoso.com","lillian@contoso.com" -FilterItemType IPM.Note -SubjectContains "COGS FY17 Review" -FilterStartTime "3/15/2019 12:00:00 AM" -FilterEndTime "3/25/2019 11:59:59 PM" -MaxParallelSize 2
```

In Exchange Online, after using the Get-RecoverableItems cmdlet to verify the existence of the item, this example restores the specified deleted items in the specified mailboxes:

- Mailboxes: malik@contoso.com, lillian@contoso.com
- Item type: Email message
- Message subject: COGS FY17 Review
- Location: Recoverable Items\Deletions
- Date range: 3/15/2019 to 3/25/2019
- Number of mailboxes processed simultaneously: 2

### Example 4
```powershell
Get-RecoverableItems administrator | Restore-RecoverableItems
```

This example bulk restores all the recoverable items for administrator.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that contains the deleted items that you want to restore. You can use any value that uniquely identifies the mailbox. For example:

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

In Exchange Online, you can specify multiple mailboxes separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: OnPremises
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: GeneralMailboxOrMailUserIdParameter[]
Parameter Sets: Cloud
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntryID
The EntryID parameter specifies the deleted item that you want to restore. The EntryID value for the deleted item is unique in the mailbox.

You can find the EntryID for specific items by using other search filters on the Get-RecoverableItems cmdlet (subject, date range, etc.).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterEndTime
The FilterEndTime specifies the end date/time of the date range. This parameter uses the LastModifiedTime value of the item.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterItemType
The FilterItemType parameter filters the results by the specified MessageClass (ItemClass) property value of the deleted item. For example:

- IPM.Appointment (Meetings and appointments)
- IPM.Contact
- IPM.File
- IPM.Note
- IPM.Task

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterStartTime
The FilterStartTime specifies the start date/time of the date range. This parameter uses the LastModifiedTime value of the item.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastParentFolderID
The LastParentFolderID parameter specifies the FolderID value of the item before it was deleted. For example, 53B93149989CA54DBC9702AE619B9CCA000062CE9397.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxParallelSize
This parameter is available only in the cloud-based service.

The MaxParallelSize parameter specifies the maximum number of mailboxes that are processed by the command in parallel. A valid value is an integer from 1 to 10. Typically, a higher value decreases the amount of time it takes to complete the command on multiple mailboxes.

The value of this parameter has no effect when the Identity parameter specifies only one mailbox.

```yaml
Type: Int32
Parameter Sets: Cloud
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoOutput
This parameter is available only in the cloud-based service.

The NoOutput switch restores the deleted items directly without any command output in the console. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Cloud
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTag
This parameter is available only in the cloud-based service.

{{ Fill PolicyTag Description }}

```yaml
Type: String[]
Parameter Sets: Default
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestoreTargetFolder
This parameter is available only in the cloud-based service.

The RestoreTargetFolder parameter specifies the top-level folder in which to restore data. If you don't specify this parameter, the command restores folders to the top of the folder structure in the target mailbox or archive. Content is merged under existing folders, and new folders are created if they don't already exist in the target folder structure.

This parameter is available only on primary mailboxes and is ignored on archive mailboxes. A destination folder will be created if it does not exist. Valid paths are:

- `/`
- `/folder1`
- `/folder1/folder2`
- `folder1`
- `folder1/folder2`

The preceding or trailing `/` will be ignored. Then, it will be treated as the relative path of the IPM sub-tree: `/Top Of Information Store`.

```yaml
Type: String
Parameter Sets: Default
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFolder
The SourceFolder parameter specifies where to search for deleted items in the mailbox. Valid values are:

- DeletedItems: The Deleted Items folder.
- RecoverableItems: The Recoverable Items\Deletions folder. This folder contains items that have been deleted from the Deleted Items folder (soft-deleted items).
- PurgedItems: The Recoverable Items\Purges folder. This folder contains items that have been purged from the Recoverable Items folder (hard-deleted items).

If you don't use this parameter, the command searches those three folders.

- DiscoveryHoldsItems (cloud-only): The Recoverable Items\DiscoveryHolds folder. This folder contains items that have been purged from the Recoverable Items folder (hard-deleted items) and are protected by a hold. To search for deleted items in this folder, use this parameter with the value DiscoveryHoldsItems.

```yaml
Type: RecoverableItemsFolderType
Parameter Sets: OnPrem
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContains
The SubjectContains parameter filters the deleted items by the specified text value in the Subject field. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
