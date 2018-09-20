---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-MailboxTransportService
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Get-MailboxTransportService

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxTransportService cmdlet to view the configuration of the Mailbox Transport service on Exchange 2013 or later Mailbox servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxTransportService [[-Identity] <MailboxTransportServerIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Mailbox Transport service runs on all Mailbox servers and is responsible for delivering messages to and accepting messages from local mailbox databases using remote procedure calls (RPC). The Mailbox Transport service also uses SMTP to send messages to and from the Transport service that runs on all Mailbox servers for routing their ultimate destinations.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxTransportService
```

This example displays a list of all Mailbox servers in your organization.

### -------------------------- Example 2 --------------------------
```
Get-MailboxTransportService Mailbox01 | Format-List
```

This example retrieves the detailed transport configuration information for the Mailbox Transport service on the Mailbox server named Mailbox01.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the server that you want to view.

```yaml
Type: MailboxTransportServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/54f1d3b1-a1d6-4438-900b-c77e94f1f6d7.aspx)
