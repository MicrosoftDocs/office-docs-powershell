---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/test-mapiconnectivity
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Test-MAPIConnectivity
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Test-MAPIConnectivity

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Test-MapiConnectivity cmdlet to verify server functionality by logging on to the mailbox that you specify. If you don't specify a mailbox, the cmdlet logs on to the SystemMailbox on the database that you specify.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Database
```
Test-MAPIConnectivity -Database <DatabaseIdParameter>
 [-ActiveDirectoryTimeout <Int32>]
 [-AllConnectionsTimeout <Int32>]
 [-Confirm]
 [-CopyOnServer <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [-MonitoringContext <Boolean>]
 [-PerConnectionTimeout <Int32>]
 [-WhatIf] [<CommonParameters>]
```

### Identity
```
Test-MAPIConnectivity [-Identity] <MailboxIdParameter>
 [-ActiveDirectoryTimeout <Int32>]
 [-AllConnectionsTimeout <Int32>]
 [-Archive]
 [-Confirm]
 [-CopyOnServer <ServerIdParameter>]
 [-DomainController <Fqdn>]
 [-MonitoringContext <Boolean>]
 [-PerConnectionTimeout <Int32>]
 [-WhatIf] [<CommonParameters>]
```

### Server
```
Test-MAPIConnectivity [-Server <ServerIdParameter>]
 [-ActiveDirectoryTimeout <Int32>]
 [-AllConnectionsTimeout <Int32>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IncludePassive]
 [-MonitoringContext <Boolean>]
 [-PerConnectionTimeout <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-MapiConnectivity cmdlet verifies server functionality. This cmdlet logs on to the mailbox that you specify (or to the SystemMailbox if you don't specify the Identity parameter) and retrieves a list of items in the Inbox. Logging on to the mailbox tests two critical protocols used when a client connects to a Mailbox server: MAPI and LDAP. During authentication, the Test-MapiConnectivity cmdlet indirectly verifies that the MAPI server, Exchange store, and Directory Service Access (DSAccess) are working.

The cmdlet logs on to the mailbox that you specify using the credentials of the account with which you're logged on to the local computer. After a successful authentication, the Test-MapiConnectivity cmdlet accesses the mailbox to verify that the database is working. If a successful connection to a mailbox is made, the cmdlet also determines the time that the logon attempt occurred.

There are three distinct parameters that you can use with the command: Database, Identity and Server:

- The Database parameter takes a database identity and tests the ability to log on to the system mailbox on the specified database.

- The Identity parameter takes a mailbox identity and tests the ability to log on to a specific mailbox.

- The Server parameter takes a server identity and tests the ability to log on to each system mailbox on the specified server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-MapiConnectivity -Server "Server01"
```

This example tests connectivity to the server Server01.

### Example 2
```powershell
Test-MapiConnectivity -Identity "midwest\john"
```

This example tests connectivity to a mailbox, specified as a domain name and user name.

## PARAMETERS

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter specifies the database on which to test the connectivity to the system mailbox. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

If you don't use this parameter or the Identity parameter, the command tests the SystemMailbox on each active database on the Exchange server (the local Exchange server or the server you specify with the Server parameter).

You can't use the Identity, Database, or Server parameters in the same command.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies a mailbox to test. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

This cmdlet accepts pipeline input from the Get-Mailbox or Get-Recipient cmdlet. If you pipe the identify from the Get-Mailbox or Get-Recipient cmdlets, you don't need to use this parameter.

If you don't use this parameter, the cmdlet tests the SystemMailbox on the database that you specify.

You can't use the Identity, Database, or Server parameters in the same command.

```yaml
Type: MailboxIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveDirectoryTimeout
This parameter is available only in on-premises Exchange.

The ActiveDirectoryTimeout parameter specifies the amount of time, in seconds, allowed for each Active Directory operation to complete before the operation times out. The default value is 15 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllConnectionsTimeout
This parameter is available only in on-premises Exchange.

The AllConnectionsTimeout parameter specifies the amount of time, in seconds, allowed for all connections to complete before the cmdlet times out. The time-out countdown doesn't begin until all information necessary to perform the connections is gathered from Active Directory.The default value is 90 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive parameter specifies whether to test the MAPI connectivity of the personal archive associated with the specified mailbox. If you don't specify this parameter, only the primary mailbox is tested.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CopyOnServer
This parameter is available only in on-premises Exchange.

The CopyOnServer parameter specifies the Mailbox server that holds the specific database copy to test. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

You can only use this parameter with the Server parameter, not the Identify or Database parameters.

```yaml
Type: ServerIdParameter
Parameter Sets: Database, Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePassive
This parameter is available only in on-premises Exchange.

Without the IncludePassive parameter, the cmdlet tests MAPI connectivity from active database copies only. Using the IncludePassive parameter, you can have the cmdlet test MAPI connectivity from all active and passive database copies.

```yaml
Type: SwitchParameter
Parameter Sets: Server
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext
This parameter is available only in on-premises Exchange.

The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are $true or $false. The default value is $false. If you specify the value $true, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PerConnectionTimeout
This parameter is available only in on-premises Exchange.

The PerConnectionTimeout parameter specifies the amount of time, in seconds, allowed for each connection to complete before the connection times out. The default value is 10 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
This parameter is available only in on-premises Exchange.

The Server parameter specifies the server on which you will test the MAPI connectivity. The command tests the MAPI connectivity to each system mailbox hosted on active databases on the specified server. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't specify this parameter, the command tests the mailbox on the local server.

You can't use the Identity, Database, or Server parameters in the same command.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
