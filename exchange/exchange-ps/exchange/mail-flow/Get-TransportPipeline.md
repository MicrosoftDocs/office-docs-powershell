---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-TransportPipeline
schema: 2.0.0
---

# Get-TransportPipeline

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-TransportPipeline cmdlet to view transport agents and the SMTP event where the transport agent is registered.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-TransportPipeline [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
The Get-TransportPipeline cmdlet enables you to view all the transport agents that are configured in the following locations:

- In the Transport service on Mailbox servers.

- In the Front End Transport service on Mailbox servers.

- On Edge Transport server in the perimeter network.

The associated transport service must be started and at least one email message must be sent through the server since the last service restart before the transport pipeline can be viewed. Only the transport events and agents that were involved in the processing of email messages since the associated service was last started are returned.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-TransportPipeline
```

This example returns a summary list of all agents in the transport pipeline that were involved in processing email messages since the last server or service restart.

### -------------------------- Example 2 --------------------------
```
Get-TransportPipeline | Format-List
```

This example returns a list of agents registered in the transport pipeline, with full details for each transport event.

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

[Online Version](https://technet.microsoft.com/library/b5741539-21d0-475d-b4a7-c6355d7b1c0b.aspx)
