---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-logonstatistics
applicable: Exchange Server 2010, Exchange Server 2013
title: Get-LogonStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013"
---

# Get-LogonStatistics

## SYNOPSIS
This cmdlet is available only in on-premises Exchange and is only functional in Exchange Server 2010.

The Get-LogonStatistics cmdlet has been deprecated and is no longer used.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Database
```
Get-LogonStatistics -Database <DatabaseIdParameter>
 [-DomainController <Fqdn>] [<CommonParameters>]
```

### Identity
```
Get-LogonStatistics [-Identity] <LogonableObjectIdParameter>
 [-DomainController <Fqdn>] [<CommonParameters>]
```

### Server
```
Get-LogonStatistics -Server <ServerIdParameter>
 [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
The Get-LogonStatistics cmdlet retrieves logon information about currently active sessions. On Mailbox servers only, you can use the Get-LogonStatistics cmdlet without parameters. In this case, the cmdlet returns the logon statistics for all mailboxes on all databases on the local server.

Users who log on to their mailboxes using Microsoft Office Outlook Web App aren't continually connected to the Mailbox server. An Outlook Web App client connects to the server, performs tasks, and then disconnects from the server. Therefore, you may see few or no logon statistics for Outlook Web App, even if users are logged on with this client.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Mailbox Permissions topic.

## EXAMPLES

### Example 1
```powershell
Get-LogonStatistics -Server Server01
```

This example returns logon statistics for all users connected to the server Server01.

## PARAMETERS

### -Database
The Database parameter specifies the mailbox database to get logon statistics from (all mailboxes in the specified database). You can use any value that uniquely identifies the mailbox database. For example:

- Name

- Distinguished name (DN)

- GUID

This parameter accepts pipeline input from the Get-MailboxDatabase command.

You can't use this parameter with the Identity or Server parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox to get logon statistics from. You can use one of the following values to identify the mailbox:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SmtpAddress

- Alias

This parameter accepts pipeline input from the Get-Mailbox command.

You can't use this parameter with the Database or Server parameters.

```yaml
Type: LogonableObjectIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Mailbox server to get logon statistics from (all mailboxes on all databases, including recovery databases, on the specified server). You can use one of the following values to identify the server:

- Fully qualified domain name (FQDN)

- NetBIOS name

This parameter accepts pipeline input from the Get-ExchangeServer and Get-MailboxServer commands.

You can't use this parameter with the Database or Identity parameters.

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

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
Applicable: Exchange Server 2010, Exchange Server 2013

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
