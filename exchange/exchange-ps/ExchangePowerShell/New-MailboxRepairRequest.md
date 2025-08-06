---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-mailboxrepairrequest
schema: 2.0.0
title: New-MailboxRepairRequest
---

# New-MailboxRepairRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-MailboxRepairRequest cmdlet to detect and fix mailbox corruption issues.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Database
```
New-MailboxRepairRequest [-Database] <DatabaseIdParameter> -CorruptionType <MailboxStoreCorruptionType[]> [[-StoreMailbox] <StoreMailboxIdParameter>]
 [-Confirm]
 [-DetectOnly]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

### Mailbox
```
New-MailboxRepairRequest [-Mailbox] <MailboxIdParameter> -CorruptionType <MailboxStoreCorruptionType[]>
 [-Archive]
 [-Confirm]
 [-DetectOnly]
 [-DomainController <Fqdn>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet on a specific mailbox or all mailboxes in a database. While this task is running, mailbox access is disrupted only for the mailbox that's currently being repaired.

After you begin a repair request, you can't stop it unless you dismount the database.

To avoid performance problems, only one request can be active on a server for a database-level repair, or up to 100 requests can be active on a server for a mailbox-level repair.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MailboxRepairRequest -Mailbox tony@contoso.com -CorruptionType FolderView
```

This example detects and repairs all folder views for the mailbox tony@contoso.com.

### Example 2
```powershell
New-MailboxRepairRequest -Mailbox ayla -CorruptionType ProvisionedFolder,SearchFolder -DetectOnly
```

This example only detects and reports on ProvisionedFolder and SearchFolder corruption issues to Ayla Kol's mailbox. This command doesn't repair the mailbox.

### Example 3
```powershell
New-MailboxRepairRequest -Database MBX-DB01 -CorruptionType AggregateCounts
```

This example detects and repairs AggregateCounts for all mailboxes on mailbox database MBX-DB01.

### Example 4
```powershell
New-MailboxRepairRequest -Mailbox ayla -CorruptionType ProvisionedFolder,SearchFolder,AggregateCounts,Folderview -Archive
```

This example detects and repairs all corruption types for Ayla Kol's mailbox and archive.

### Example 5
```powershell
$Mailbox = Get-MailboxStatistics annb

New-MailboxRepairRequest -Database $Mailbox.Database -StoreMailbox $Mailbox.MailboxGuid -CorruptionType ProvisionedFolder,SearchFolder,AggregateCounts,Folderview
```

This example creates a variable that identifies Ann Beebe's mailbox and then uses the variable to specify the values for the Database and StoreMailbox parameters to create a request to detect and repair all corruption types.

## PARAMETERS

### -Database

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Database parameter repairs or detects corruption in all mailboxes in the specified database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Mailbox parameter.

To avoid performance issues, you're limited to one active database repair request at a time.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Mailbox parameter specifies the mailbox that you want to repair or detect corruption in. You can use any value that uniquely identifies the mailbox. For example:

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

You can't use this parameter with the Database parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -StoreMailbox

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The StoreMailbox parameter specifies the mailbox GUID of the mailbox you want to repair or detect corruption in. Use this parameter with the Database parameter.

Run the Get-MailboxStatistics cmdlet to find the mailbox GUID for a mailbox.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Database
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CorruptionType

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CorruptionType parameter specifies the type of corruption that you want to detect and repair. You can use the following values:

- AbandonedMoveDestination\*: Exchange 2016 or later, but only with the Database parameter, not the Mailbox parameter.
- AggregateCounts\*: Aggregate counts on folders that aren't reflecting correct values.
- BigFunnelMissingPOIs\*: Exchange 2016.
- BigFunnelPOI: Exchange 2019.
- CleanupFilesFolder\*: Exchange 2016 or later.
- CleanupGraphNodesWithPropertyError\*: Exchange 2016 or later.
- CleanupOfficeGraphFolders\*: Exchange 2016 or later.
- CleanupOfficeGraphSsc: Exchange 2016 or later.
- CleanupOrphanedIndexes\*: Exchange 2016 or later.
- CleanupTrendingAroundMe\*: Exchange 2016 or later.
- CorruptJunkRule\*: Exchange 2013 or later.
- CorruptSearchFolderCriteria\*: Exchange 2016 or later.
- CorruptedPerUserData\*: Exchange 2016 or later.
- DropAllLazyIndexes\*: Exchange 2013 or later.
- EmptyFilesFolder\*: Exchange 2016 or later.
- Extension1: Exchange 2013 or later, but reserved for internal Microsoft use.
- Extension2: Exchange 2013 or later, but reserved for internal Microsoft use.
- Extension3: Exchange 2013 or later, but reserved for internal Microsoft use.
- Extension4: Exchange 2013 or later, but reserved for internal Microsoft use.
- Extension5: Exchange 2013 or later, but reserved for internal Microsoft use.
- FocusedInboxCleanup\*: Exchange 2016 or later.
- FolderACL\*: Exchange 2013 or later.
- FolderView\*: Views on folders that aren't returning correct contents.
- ImapId\*: Exchange 2013 or later.
- LockedMoveTarget\*: Exchange 2013 or later, but only if the mailbox is locked.
- MessageId
- MessagePtagCn
- MissingSpecialFolders: Exchange 2013 or later.
- OlcFolderCleanup: Exchange 2016 or later.
- ProvisionedFolder: Provisioned folders that are incorrectly pointing into parent folders that aren't provisioned.
- ReduceRedundantAI\*: Exchange 2016 or later.
- RemovePICWFolder: Exchange 2016 or later, but reserved for internal Microsoft use.
- ReplState: Exchange 2013 or later.
- RestrictionFolder: Exchange 2013 or later.
- RuleMessageClass: Exchange 2013 or later.
- ScheduledCheck: Exchange 2013 or later.
- SearchFolder: Search folder corruption.
- SyncDefaultFolderLocalizationWithMailbox: Exchange 2016 or later.
- UniqueMidIndex: Exchange 2013 or later.

You can specify multiple values separated by commas.

\* You can only use this value by itself.

```yaml
Type: MailboxStoreCorruptionType[]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Archive switch specifies whether to repair or detect corruption the archive mailbox that's associated with the specified mailbox. You don't need to specify a value with this switch.

If you don't use this switch, only the primary mailbox is included.

You can't use this switch with the Database parameter.

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

### -DetectOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DetectOnly switch specifies that you want to report errors, but not fix them. You don't need to specify a value with this switch.

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

### -Force

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

This switch runs the command immediately without waiting to be dispatched by workload management.

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
