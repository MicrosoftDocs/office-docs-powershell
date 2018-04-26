---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-MailboxDatabaseCopyStatus
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-MailboxDatabaseCopyStatus

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxDatabaseCopyStatus cmdlet to view health and status information about one or more mailbox database copies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-MailboxDatabaseCopyStatus -Server <MailboxServerIdParameter> [-ConnectionStatus] [-DomainController <Fqdn>]
 [-ExtendedErrorInfo] [-Active] [-UseServerCache] [<CommonParameters>]
```

### Set1
```
Get-MailboxDatabaseCopyStatus [[-Identity] <DatabaseCopyIdParameter>] [-Active] [-ConnectionStatus]
 [-DomainController <Fqdn>] [-Local] [-ExtendedErrorInfo] [-UseServerCache] [<CommonParameters>]
```

## DESCRIPTION
If a database is specified by using the Identity parameter with the command, the status of all copies of the database is returned. If a server is specified by using the Server parameter with the command, information about all database copies on the server is returned. If neither parameter is specified with the command, information about all database copies in the organization is returned.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxDatabaseCopyStatus -Identity DB1 | Format-List
```

This example returns status information for all copies of the database DB1. The status results are displayed in a list format.

### -------------------------- Example 2 --------------------------
```
Get-MailboxDatabaseCopyStatus -Server MBX1 | Format-List
```

This example returns the status for all database copies on the Mailbox server MBX1. The status results are also displayed in a list format.

### -------------------------- Example 3 --------------------------
```
Get-MailboxDatabaseCopyStatus -Identity DB1\MBX2 | Format-List
```

This example returns the status for the copy of database DB1 on the Mailbox server MBX2. The status results are also displayed in a list format.

## PARAMETERS

### -Server
The Server parameter specifies that a Mailbox server returns status information for all of its mailbox database copies. This parameter can't be combined with the Identity parameter.

```yaml
Type: MailboxServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Active
The Active switch specifies whether to return mailbox database copy status for the active mailbox database copy only.

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

### -ConnectionStatus
The ConnectionStatus switch is obsolete and in the process of being deprecated. Use of this switch will be ignored by the task. The information previously provided by this switch is now provided through an internal caching mechanism and, as such, the switch is no longer needed.

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

### -Identity
The Identity parameter specifies the name of the database copy for which the command should gather information. The Identity parameter can be specified in the form of \<database\>\\\<server\>. Specifying just \<database\> returns information for all copies of the database. This parameter can't be combined with the Server parameter.

```yaml
Type: DatabaseCopyIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Local
The Local switch specifies whether to return mailbox database copy status information from only the local Mailbox server.

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

### -ExtendedErrorInfo
The ExtendedErrorInfo switch specifies whether to return an output object containing any exception details.

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

### -UseServerCache
The UseServerCache switch specifies whether to enable a server-side remote procedure call (RPC) caching of status information for 5 seconds.

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

[Online Version](https://technet.microsoft.com/library/6ad690fb-3a23-41d4-b19d-666b34e62b26.aspx)
