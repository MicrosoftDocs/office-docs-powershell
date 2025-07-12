---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-storeusagestatistics
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-StoreUsageStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-StoreUsageStatistics

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-StoreUsageStatistics cmdlet to aid in diagnosing performance issues with your servers or databases.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Database
```
Get-StoreUsageStatistics -Database <DatabaseIdParameter>
 [-CopyOnServer <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [<CommonParameters>]
```

### Identity
```
Get-StoreUsageStatistics [-Identity] <GeneralMailboxIdParameter>
 [-CopyOnServer <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [<CommonParameters>]
```

### Server
```
Get-StoreUsageStatistics -Server <ServerIdParameter>
 [-IncludePassive]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Microsoft Exchange Information Store collects per-user information on latency, input/output (I/O), page counts, processor usage, and TimeInServer. The TimeInServer metric represents the total time that synchronous and asynchronous requests spend in the Microsoft Exchange Information Store for a user's mailbox. You can retrieve this resource information in the Microsoft Exchange Information Store for the 25 highest usage accounts on a specified database. Usage of a mailbox is defined as the amount of server time spent in performing operations for that mailbox. The cmdlet reports the top 25 users for every one-minute period for the last 10 minutes (250 objects per ten-minute interval). The resource usage is an indicator of the load that different users are placing on the server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-StoreUsageStatistics -Server EX1 | ft -auto
```

This example retrieves store usage statistics for all active databases on server EX1.

### Example 2
```powershell
Get-StoreUsageStatistics -Server EX1 -IncludePassive | ft -auto
```

This example retrieves store usage statistics for all active and passive databases on server EX1.

### Example 3
```powershell
Get-StoreUsageStatistics -Database DB1 | Sort-Object LogRecordBytes -desc | Select-Object -First 10 | ft DigestCategory, *guid, LogRecordBytes, *time* -auto
```

This example retrieves store usage statistics for database DB1 and sorts the output by the 10 highest log file generators.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox to get usage statistics from. You can use one of the following values to identify the mailbox:

- GUID
- Distinguished name (DN)
- Domain\\Account
- User principal name (UPN)
- Legacy Exchange DN
- SMTP address
- Alias

The command returns results for the mailbox only if it's one of the top 25 users of store resources.

You can't use this parameter with the Database or Server parameters.

```yaml
Type: GeneralMailboxIdParameter
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Database
The Database parameter specifies the name of the mailbox database to get usage statistics from (the top 25 largest mailboxes on the specified mailbox database). You can use any value that uniquely identifies the mailbox database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity or Server parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Mailbox server to get usage statistics from (the top 25 mailboxes on all active databases on the specified server). You can use one of the following values to identify the server:

- Fully qualified domain name (FQDN)
- NetBIOS name

You can't use this parameter with the Database or Identity parameters.

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

### -CopyOnServer
The CopyOnServer parameter specifies the mailbox database copy to get usage statistics from. You can use any value that uniquely identifies the mailbox database. For example:

- Name
- Distinguished name (DN)
- GUID

You use this parameter with the Server or Identity parameters.

```yaml
Type: ServerIdParameter
Parameter Sets: Database, Identity
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property.
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

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

### -IncludePassive
The IncludePassive switch specifies whether to include usage statistics from active and passive copies of mailbox databases on the Mailbox server you specified with the Server parameter. You don't need to specify a value with this switch.

If you don't use this switch, only statistics from active copies of mailbox databases are included in the results.

```yaml
Type: SwitchParameter
Parameter Sets: Server
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
