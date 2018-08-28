---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-MailboxDatabase
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-MailboxDatabase

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxDatabase cmdlet to retrieve one or more mailbox database objects from a server or organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-MailboxDatabase -Server <ServerIdParameter> [-DomainController <Fqdn>] [-DumpsterStatistics]
 [-IncludePreExchange2010] [-Status] [-IncludePreExchange2013] [-IncludeCorrupted] [<CommonParameters>]
```

### Set1
```
Get-MailboxDatabase [[-Identity] <DatabaseIdParameter>] [-DomainController <Fqdn>] [-DumpsterStatistics]
 [-IncludePreExchange2010] [-Status] [-IncludePreExchange2013] [-IncludeCorrupted] [<CommonParameters>]
```

## DESCRIPTION
If you use the Get-MailboxDatabase cmdlet with no parameters, it retrieves information about all mailbox databases in the Exchange organization. If you use the Get-MailboxDatabase cmdlet with the Server parameter, it retrieves information about all mailbox databases on the server that you specify.

The following list describes the properties that are returned in the results.

- Name: Name of the database.

- Server: Server hosting the database.

- Recovery: Specifies whether the new database is designated as a recovery database.

- ReplicationType: Replication type of the database.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxDatabase -IncludePreExchange2010
```

In Exchange Server 2010, this example retrieves information about all the mailbox databases in the Exchange organization, including the mailbox databases that reside on computers running Exchange 2010 and earlier versions of Exchange.

### -------------------------- Example 2 --------------------------
```
Get-MailboxDatabase -IncludePreExchange2013
```

This example retrieves information about all the mailbox databases in the Exchange organization, including Exchange 2010 mailbox databases.

### -------------------------- Example 3 --------------------------
```
Get-MailboxDatabase -Identity MailboxDatabase01 -Server Server01 -Status | Format-List
```

This example retrieves information about MailboxDatabase01 on Server01. This example also retrieves the status information, and pipes the output to the Format-List cmdlet so that you can view all the information about the mailbox database.

## PARAMETERS

### -Server
The Server parameter specifies the name of the server from which to retrieve mailbox database information. If you specify this parameter, the command retrieves information about all of the mailbox databases on the server that you specify.

```yaml
Type: ServerIdParameter
Parameter Sets: Set2
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

### -DumpsterStatistics
The DumpsterStatistics switch specifies that transport dumpster statistics be returned with the database status. You don't need to specify a value with this switch.

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

### -Identity
The Identity parameter specifies a mailbox database. You can use the following values:

- GUID

- Distinguished name (DN)

- Database name

If you have multiple databases with the same name, the command retrieves all databases with the same name in the specified scope.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludePreExchange2010
This parameter is available or functional only in Exchange Server 2010.

The IncludePreExchange2010 parameter specifies whether to return information about the mailbox databases that reside on computers running Microsoft Exchange Server 2010 and earlier versions of Exchange.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePreExchange2013
The IncludePreExchange2013 switch parameter specifies whether to return information about Exchange 2010 mailbox databases. You don't need to specify a value with this switch.

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

### -IncludeCorrupted
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/e12bd6d3-3793-49cb-9ab6-948d42dd409e.aspx)
