---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: New-MailboxRepairRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# New-MailboxRepairRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-MailboxRepairRequest cmdlet to detect and fix mailbox corruptions. You can run this command against a specific mailbox or against a database. While this task is running, mailbox access is disrupted only for the mailbox being repaired. If you're running this command against a database, only the mailbox being repaired is disrupted. All other mailboxes on the database remain operational.

After you begin the repair request, it can't be stopped unless you dismount the database.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-MailboxRepairRequest [-Database] <DatabaseIdParameter> -CorruptionType <MailboxStoreCorruptionType[]>
 [-Confirm] [-DetectOnly] [-DomainController <Fqdn>] [-WhatIf] [[-StoreMailbox] <StoreMailboxIdParameter>]
 [-Force] [<CommonParameters>]
```

### Set1
```
New-MailboxRepairRequest [-Mailbox] <MailboxIdParameter> -CorruptionType <MailboxStoreCorruptionType[]>
 [-Archive] [-Confirm] [-DetectOnly] [-DomainController <Fqdn>] [-WhatIf] [-Force] [<CommonParameters>]
```

## DESCRIPTION
To avoid any performance problems, there are limits placed on the number of simultaneous repair requests that can be submitted per server. Only one request can be active for a database-level repair, or up to 100 requests can be active for a mailbox-level repair per server.

The New-MailboxRepairRequest cmdlet detects and fixes the following types of mailbox corruptions:

- Search folder corruptions (SearchFolder)

- Aggregate counts on folders that aren't reflecting correct values (AggregateCounts)

- Views on folders that aren't returning correct contents (FolderView)

- Provisioned folders that are incorrectly pointing into parent folders that aren't provisioned (ProvisionedFolder)

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-MailboxRepairRequest -Mailbox tony@contoso.com -CorruptionType FolderView
```

This example detects and repairs all folder views for the mailbox tony@contoso.com.

### -------------------------- Example 2 --------------------------
```
New-MailboxRepairRequest -Mailbox ayla -CorruptionType ProvisionedFolder,SearchFolder -DetectOnly
```

This example only detects and reports on ProvisionedFolder and SearchFolder corruption issues to Ayla Kol's mailbox. This command doesn't repair the mailbox.

### -------------------------- Example 3 --------------------------
```
New-MailboxRepairRequest -Database MBX-DB01 -CorruptionType AggregateCounts
```

This example detects and repairs AggregateCounts for all mailboxes on mailbox database MBX-DB01.

### -------------------------- Example 4 --------------------------
```
New-MailboxRepairRequest -Mailbox ayla -CorruptionType ProvisionedFolder,SearchFolder,AggregateCounts,Folderview -Archive
```

This example detects and repairs all corruption types for Ayla Kol's mailbox and archive.

### -------------------------- Example 5 --------------------------
```
$Mailbox = Get-MailboxStatistics annb; New-MailboxRepairRequest -Database $Mailbox.Database -StoreMailbox $Mailbox.MailboxGuid -CorruptionType ProvisionedFolder,SearchFolder,AggregateCounts,Folderview
```

This example creates a variable that identifies Ann Beebe's mailbox and then uses the variable to specify the values for the Database and StoreMailbox parameters to create a request to detect and repair all corruption types.

## PARAMETERS

### -CorruptionType
The CorruptionType parameter specifies the type of corruption that you want to detect and repair. You can use the following values:

- SearchFolder

- AggregateCounts

- ProvisionedFolder

- FolderView

You can search for multiple corruption types at a time. Separate multiple types with a comma, for example, SearchFolder,AggregateCounts.

```yaml
Type: MailboxStoreCorruptionType[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
The Database parameter specifies the database on which you run this command. If you use this parameter, all mailboxes on the database are searched for corruptions. To avoid performance issues, you're limited to one active database repair request at a time. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter in conjunction with the Mailbox parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox on which you run this command. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SMTP address

- Alias

You can't use this parameter in conjunction with the Database parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Archive
The Archive parameter specifies whether to detect corruptions or repair the archive mailbox associated with the specified mailbox. If you don't specify this parameter, only the primary mailbox is repaired.

You can't use this parameter in conjunction with the Database parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetectOnly
The DetectOnly parameter specifies that you want this command to report errors, but not fix them. You don't have to specify a value with this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies that the cmdlet should run immediately and not wait to be dispatched by workload management.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreMailbox
The StoreMailbox parameter specifies the mailbox GUID of the mailbox you want to repair. Use this parameter with the Database parameter.

Run the Get-MailboxStatistics cmdlet to find the mailbox GUID for a mailbox.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/5fd53ecb-1445-489d-91ac-1e771f41eb01.aspx)
