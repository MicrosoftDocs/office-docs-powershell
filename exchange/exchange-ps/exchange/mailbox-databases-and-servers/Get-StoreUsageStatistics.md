---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-StoreUsageStatistics
schema: 2.0.0
---

# Get-StoreUsageStatistics

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-StoreUsageStatistics cmdlet to aid in diagnosing performance issues with your servers or databases.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-StoreUsageStatistics -Database <DatabaseIdParameter> [-DomainController <Fqdn>] [-Filter <String>]
 [[-Identity] <GeneralMailboxIdParameter>] [<CommonParameters>]
```

### Set1
```
Get-StoreUsageStatistics [-Identity] <GeneralMailboxIdParameter> [-DomainController <Fqdn>] [-Filter <String>]
 [-CopyOnServer <ServerIdParameter>] [<CommonParameters>]
```

### Set3
```
Get-StoreUsageStatistics -Server <ServerIdParameter> [-DomainController <Fqdn>] [-Filter <String>]
 -Database <DatabaseIdParameter> [-CopyOnServer <ServerIdParameter>] [<CommonParameters>]
```

### Set4
```
Get-StoreUsageStatistics -Server <ServerIdParameter> [-DomainController <Fqdn>] [-Filter <String>]
 [-IncludePassive] [<CommonParameters>]
```

## DESCRIPTION
The Microsoft Exchange Information Store collects per-user information on latency, input/output (I/O), page counts, processor usage, and TimeInServer. The TimeInServer metric represents the total time that synchronous and asynchronous requests spend in the Microsoft Exchange Information Store for a user's mailbox. You can retrieve this resource information in the Microsoft Exchange Information Store for the 25 highest usage accounts on a specified database. Usage of a mailbox is defined as the amount of server time spent in performing operations for that mailbox. The cmdlet reports the top 25 users for every one-minute period for the last 10 minutes (250 objects per ten-minute interval). The resource usage is an indicator of the load that different users are placing on the server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-StoreUsageStatistics -Server EX1 | ft -auto
```

This example retrieves store usage statistics for all active databases on server EX1.

### -------------------------- Example 2 --------------------------
```
Get-StoreUsageStatistics -Server EX1 -IncludePassive | ft -auto
```

This example retrieves store usage statistics for all active and passive databases on server EX1.

### -------------------------- Example 3 --------------------------
```
Get-StoreUsageStatistics -Database DB1 | Sort-Object LogRecordBytes -desc | Select-Object -First 10 | ft DigestCategory, *guid, LogRecordBytes, *time* -auto
```

This example retrieves store usage statistics for database DB1 and sorts the output by the 10 highest log file generators.

## PARAMETERS

### -Database
The Database parameter specifies the name of the mailbox database. When you specify a value for the Database parameter, the Exchange Management Shell returns usage statistics for the top 25 mailboxes on the database specified.

You can use the following value:

- Database

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies a mailbox. When you specify a value for the Identity parameter, the command looks up the mailbox specified in the Identity parameter, connects to the server where the mailbox resides, and returns the statistics for the mailbox. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

Results are returned for the mailbox only if it's one of the top 25 users of store resources.

```yaml
Type: GeneralMailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: GeneralMailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server from which you want to obtain mailbox statistics. You can use one of the following values:

- Fully qualified domain name (FQDN)

- NetBIOS name

When you specify a value for the Server parameter, the command returns usage statistics for the top 25 mailboxes on all the active databases on the specified server. If you don't specify this parameter, the command returns logon statistics for the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: Set3, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter indicates the OPath filter used to filter recipients.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyOnServer
The CopyOnServer parameter is used to retrieve statistics from a specific database copy from the server specified with the Server parameter.

```yaml
Type: ServerIdParameter
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePassive
Without the IncludePassive parameter, the cmdlet retrieves statistics from active database copies only. Using the IncludePassive parameter, you can have the cmdlet return statistics from all active and passive database copies.

```yaml
Type: SwitchParameter
Parameter Sets: Set4
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/0fd00fe0-de0e-48d2-b9fd-44220455cb8e.aspx)
