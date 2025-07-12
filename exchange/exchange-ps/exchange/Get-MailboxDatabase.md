---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxdatabase
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-MailboxDatabase
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-MailboxDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxDatabase cmdlet to retrieve one or more mailbox database objects from a server or organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Server
```
Get-MailboxDatabase -Server <ServerIdParameter>
 [-DomainController <Fqdn>]
 [-DumpsterStatistics]
 [-IncludeCorrupted]
 [-IncludePreExchange2010]
 [-IncludePreExchange2013]
 [-Status]
 [<CommonParameters>]
```

### Identity
```
Get-MailboxDatabase [[-Identity] <DatabaseIdParameter>]
 [-DomainController <Fqdn>]
 [-DumpsterStatistics]
 [-IncludeCorrupted]
 [-IncludePreExchange2010]
 [-IncludePreExchange2013]
 [-Status]
 [<CommonParameters>]
```

## DESCRIPTION
If you use the Get-MailboxDatabase cmdlet with no parameters, it retrieves information about all mailbox databases in the Exchange organization. If you use the Get-MailboxDatabase cmdlet with the Server parameter, it retrieves information about all mailbox databases on the server that you specify.

The following list describes the properties that are returned in the results.

- Name: Name of the database.
- Server: Server hosting the database.
- Recovery: Specifies whether the new database is designated as a recovery database.
- ReplicationType: Replication type of the database.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxDatabase
```

### Example 2
```powershell
Get-MailboxDatabase -Identity MailboxDatabase01 -Status | Format-List
```

This example returns detailed information about the mailbox database named MailboxDatabase01.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox database that you want to view. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

If you have multiple databases with the same name, the command retrieves all databases with the same name in the specified scope.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter filters the results by the specified Mailbox server. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

You can't use this parameter with the Identity parameter.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
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

### -DumpsterStatistics
The DumpsterStatistics switch specifies that transport dumpster statistics be returned with the database status. You don't need to specify a value with this switch.

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

### -IncludeCorrupted
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePreExchange2010
This parameter is available only in Exchange Server 2010.

The IncludePreExchange2010 switch specifies whether to return information about Exchange 2007 ore earlier mailbox databases. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePreExchange2013
The IncludePreExchange2013 switch specifies whether to return information about Exchange 2010 or earlier mailbox databases. You don't need to specify a value with this switch.

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

### -Status
The Status switch specifies whether to retrieve the available free space in the database root and information about the following attributes:

- BackupInProgress
- Mounted
- OnlineMaintenanceInProgress

You don't need to specify a value with this switch.

If you specify this switch, you should format the output in such a way that you can view the additional attributes, for example, pipe the output to the Format-List cmdlet.

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
