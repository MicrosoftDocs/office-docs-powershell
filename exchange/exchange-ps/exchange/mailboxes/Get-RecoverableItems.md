---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Online
title: Get-RecoverableItems
schema: 2.0.0
monikerRange: "exchonline-ps"
---
# Get-RecoverableItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-RecoverableItems items cmdlet to view deleted items in the Recoverable Items folder in mailboxes. After you find the deleted items, you use the Restore-RecoverableItems cmdlet to restore them.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-RecoverableItems -Identity <GeneralMailboxOrMailUserIdParameter> [-EntryID <String>] [-FilterEndTime <DateTime>] [-FilterItemType <String>] [-FilterStartTime <DateTime>] [-LastParentFolderID <String>] [-ResultSize <Unlimited>] [-SourceFolder <DeletedItems | RecoverableItems>] [-SubjectContains <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-RecoverableItems -Identity laura@contoso.com -Subject -SubjectContains "FY17 Accounting" -FilterItemType IPM.Note -FilterStartTime "2/1/2018 12:00:00 AM" -FilterEndTime "2/5/2018 11:59:59 PM"
```

This example returns all of the available recoverable deleted messages with the specified subject in the mailbox laura@contoso.com for the specified date/time range.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that contains the Recoverable Items folder that you want to view. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN 

- SamAccountName 

- User ID or user principal name (UPN)

```yaml
Type: GeneralMailboxOrMailUserIdParameter
Parameter Sets: (All)
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

You can find the EntryID for specific items by using other search filters on the Get-ReoverableItems cmdlet (subject, date range, etc.).

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

### -FilterEndTime
The FilterEndTime specifies the end date/time of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilterStartTime
The FilterStartTime specifies the start date/time of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceFolder
The SourceFolder parameter specifies the folder in the mailbox to search for deleted items. Valid values are:

- DeletedItems: The Deleted Items folder.

- RecoverableItems: Recoverable items that have been deleted from the Deleted Items folder.

If you don't use this parameter, the command will search both locations.

```yaml
Type: DeletedItems | RecoverableItems
Parameter Sets: (All)
Aliases:
Accepted values: DeletedItems, RecoverableItems
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubjectContains
The SubjectContains parameter filters the items by the specified text value in the Subject field. If the value contains spaces, enclose the value in quotation marks (").

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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/mailboxes/Get-RecoverableItems)
