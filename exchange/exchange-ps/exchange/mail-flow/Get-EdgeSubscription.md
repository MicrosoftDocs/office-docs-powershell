---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-EdgeSubscription
schema: 2.0.0
---

# Get-EdgeSubscription

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-EdgeSubscription cmdlet to retrieve information about Edge Subscriptions in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-EdgeSubscription [[-Identity] <TransportServerIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Run the Get-EdgeSubscription cmdlet on an Exchange server in your organization. This cmdlet retrieves the list of Edge Subscriptions. Each Edge Transport server that's subscribed to the Exchange organization has a separate Edge Subscription. You can use this cmdlet to view the Edge Subscription information for a specific Edge Transport server. You can also use this cmdlet to view the Edge Subscription information for all Edge Transport servers subscribed to Active Directory sites.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-EdgeSubscription | Format-List
```

This example retrieves detailed Edge Subscription information for all Edge Transport servers subscribed to your Exchange organization.

### -------------------------- Example 2 --------------------------
```
Get-EdgeSubscription Edge1 -DomainController DC1.contoso.com
```

This example retrieves the Edge Subscription information for the Edge Transport server name Edge1 from the domain controller named DC1.

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
The Identity parameter specifies the name of the Edge Transport server for which you want to retrieve Edge Subscription information. The identity is expressed as the host name of the Edge Transport server. If no identity is specified, all Edge Subscriptions are returned.

```yaml
Type: TransportServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/dc05b43c-ddc3-468b-97ff-5e915f56c751.aspx)
