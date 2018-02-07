---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-TransportAgent

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-TransportAgent cmdlet to view the configuration of a transport agent on a computer that has the Edge Transport server role or the Hub Transport server role installed in a Microsoft Exchange Server 2010 organization.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-TransportAgent cmdlet to view the configuration of a transport agent.

## SYNTAX

```
Get-TransportAgent [[-Identity] <TransportAgentObjectId>] [-DomainController <Fqdn>]
 [-TransportService <Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport agents" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport agents" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-TransportAgent
```

This example displays a summary list of all transport agents installed on an Edge Transport server or a Hub Transport server.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-TransportAgent
```

This example displays a summary list of all transport agents installed on all Exchange servers in your organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-TransportAgent
```

This example displays a summary list of all transport agents installed on all Exchange servers in your organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-TransportAgent -Identity "Edge Rule Agent" | Format-List
```

This example displays detailed information about a specific transport agent. The output of the Get-TransportAgent command is piped to the Format-List command to display the detailed configuration of the specified transport rule.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-TransportAgent "Transport Rule Agent" -TransportService Hub | Format-List
```

This example displays detailed information about the Transport Rule agent that's installed in the Transport service on a Mailbox server. The output of the Get-TransportAgent command is piped to the Format-List command to display the detailed configuration of the transport agent.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-TransportAgent "Transport Rule Agent" -TransportService Hub | Format-List
```

This example displays detailed information about the Transport Rule agent that's installed in the Transport service on a Mailbox server. The output of the Get-TransportAgent command is piped to the Format-List command to display the detailed configuration of the transport agent.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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
The Identity parameter specifies the display name of the transport agent to be displayed. The length of the name can't exceed 64 characters.

```yaml
Type: TransportAgentObjectId
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TransportService
!!! Exchange Server 2013

The TransportService parameter specifies the transport service that you want to view or modify. Valid values for this parameter are:

- Hub for the Transport service on Mailbox servers.

- MailboxSubmission for the Mailbox Transport Submission service on Mailbox servers.

- MailboxDelivery for the Mailbox Transport Delivery service on Mailbox servers.

- FrontEnd for the Front End Transport service on Client Access servers.

- Edge on Edge Transport servers.



!!! Exchange Server 2016

The TransportService parameter specifies the transport service that you want to view or modify. Valid values for this parameter are:

- Hub for the Transport service on Mailbox servers.

- MailboxSubmission for the Mailbox Transport Submission service on Mailbox servers.

- MailboxDelivery for the Mailbox Transport Delivery service on Mailbox servers.

- FrontEnd for the Front End Transport service on Mailbox servers.

- Edge on Edge Transport servers.



```yaml
Type: Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery
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

[Online Version](https://technet.microsoft.com/library/83417504-5d52-43b2-8cf5-e48acae72e3a.aspx)

