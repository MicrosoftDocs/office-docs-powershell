---
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-recoverableitems
schema: 2.0.0
title: Get-RecoverableItems
---
# Get-RecoverableItems

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-RecoverableItems items cmdlet to view deleted items in mailboxes. After you find the deleted items, you use the Restore-RecoverableItems cmdlet to restore them.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### OnPremises
```
Get-RecoverableItems -Identity <GeneralMailboxOrMailUserIdParameter>
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
Get-RecoverableItems -Identity <GeneralMailboxOrMailUserIdParameter[]>
 [-EntryID <String>]
 [-FilterEndTime <DateTime>]
 [-FilterItemType <String>]
 [-FilterStartTime <DateTime>]
 [-LastParentFolderID <String>]
 [-MaxParallelSize <Int32>]
 [-PolicyTag <String[]>]
 [-ResultSize <Unlimited>]
 [-SkipCount <Int32>]
 [-SourceFolder <RecoverableItemsFolderType>]
 [-SubjectContains <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-RecoverableItems -Identity laura@contoso.com -SubjectContains "FY17 Accounting" -FilterItemType IPM.Note -FilterStartTime "2/1/2018 12:00:00 AM" -FilterEndTime "2/5/2018 11:59:59 PM"
```

This example returns all of the available recoverable deleted messages with the specified subject in the mailbox laura@contoso.com for the specified date/time range.

### Example 2
```powershell
Get-RecoverableItems -Identity "malik@contoso.com", "lillian@contoso.com" -FilterItemType IPM.Note -FilterStartTime "3/15/2019 12:00:00 AM" -FilterEndTime "3/25/2019 11:59:59 PM"
```

This example returns all of the available recoverable deleted messages with the specified subject in the mailboxes of both malik@contoso.com and lillian@contoso.com for the specified date/time range.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the mailbox that contains the deleted items that you want to view. You can use any value that uniquely identifies the mailbox. For example:

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
Parameter Sets: OnPremises, Cloud
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EntryID

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The EntryID parameter specifies the deleted item that you want to restore. The EntryID value for the deleted item is unique in the mailbox.

You can find the EntryID for specific items by using other search filters on the Get-RecoverableItems cmdlet (subject, date range, etc.).

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

### -FilterEndTime

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The FilterEndTime specifies the end date/time of the date range. This parameter uses the LastModifiedTime value of the item.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -FilterItemType

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterStartTime

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The FilterStartTime specifies the start date/time of the date range. This parameter uses the LastModifiedTime value of the item.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -LastParentFolderID

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The LastParentFolderID parameter specifies the FolderID value of the item before it was deleted. For example, 53B93149989CA54DBC9702AE619B9CCA000062CE9397.

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

### -MaxParallelSize

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The MaxParallelSize parameter specifies the maximum number of mailboxes that are processed by the command in parallel. A valid value is an integer from 1 to 10. Typically, a higher value decreases the amount of time it takes to complete the command on multiple mailboxes.

The value of this parameter has no effect when the Identity parameter specifies only one mailbox.

```yaml
Type: Int32
Parameter Sets: Cloud
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTag

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill PolicyTag Description }}

```yaml
Type: String[]
Parameter Sets: Cloud
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

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

### -SkipCount

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SkipCount Description }}

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

### -SourceFolder

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SourceFolder parameter specifies where to search for deleted items in the mailbox. Valid values are:

- DeletedItems: The Deleted Items folder.
- RecoverableItems: The Recoverable Items\Deletions folder. This folder contains items that have been deleted from the Deleted Items folder (soft-deleted items).
- PurgedItems: The Recoverable Items\Purges folder. This folder contains items that have been purged from the Recoverable Items folder (hard-deleted items).

If you don't use this parameter, the command searches those three folders.

- DiscoveryHoldsItems (cloud-only): The Recoverable Items\DiscoveryHolds folder. This folder contains items that have been purged from the Recoverable Items folder (hard-deleted items) and are protected by a hold. To search for deleted items in this folder, use this parameter with the value DiscoveryHoldsItems.

```yaml
Type: RecoverableItemsFolderType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContains

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The SubjectContains parameter filters the items by the specified text value in the Subject field. If the value contains spaces, enclose the value in quotation marks (").

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
