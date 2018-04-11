---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-ClientAccessArray
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-ClientAccessArray

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ClientAccessArray cmdlet to view legacy RPC Client Access arrays that exist in your Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ClientAccessArray [[-Identity] <ClientAccessArrayIdParameter>] [-DomainController <Fqdn>]
 [-Site <AdSiteIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Client Access arrays were introduced in Exchange Server 2010 so Outlook clients in an Active Directory site could access the Client Access servers in the array by using RPC over TCP to a single, unified fully qualified domain name (FQDN). The RpcClientAccessServer property of new mailbox databases was automatically populated with the FQDN of the Client Access array and this value was used during the creation of Outlook profiles for mailboxes in those databases.

Changes in the Exchange server architecture that were introduced in Exchange Server 2013 removed the need for RPC Client Access arrays:

- Outlook clients can't use RPC over TCP to access mailboxes on Exchange Server 2013 or later versions and RPC Client Access arrays only work with RPC over TCP.

- Because the Client Access server role is now a stateless proxy, you use different and less complex methods to configure load balancing and high availability for internal and external client connections. For more information, see Load balancing in Exchange 2016 (https://technet.microsoft.com/library/jj898588.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ClientAccessArray
```

This example returns a summary list of all Client Access arrays that exist in the local Active Directory site.

### -------------------------- Example 2 --------------------------
```
Get-ClientAccessArray -Identity CASArray01 | Format-List
```

This example returns detailed information for the Client Access array named CASArray01.

## PARAMETERS

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
The Identity parameter specifies the Client Access that you want to view. You can use any value that uniquely identifies the array. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ClientAccessArrayIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Site
The Site parameter filters the results by Active Directory site. You can use any value that uniquely identifies the site. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: AdSiteIdParameter
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

[Online Version](https://technet.microsoft.com/library/4d366fb0-58b9-4730-9c67-8d4a0d47e19a.aspx)
