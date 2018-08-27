---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-IntraOrganizationConnector
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-IntraOrganizationConnector

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-IntraOrganizationConnector cmdlet to view the settings of Intra-Organization connectors.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-IntraOrganizationConnector [[-Identity] <IntraOrganizationConnectorIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
Intra-Organizational connectors enable features and services between divisions in your Exchange organization. It allows for the expansion of organizational boundaries for features and services across different hosts and network boundaries, such as between Active Directory forests, between on-premises and cloud-based organizations, or between tenants hosted in the same or different datacenters.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-IntraOrganizationConnector
```

This example returns a summary list of all Intra-Organization connectors.

### -------------------------- Example 2 --------------------------
```
Get-IntraOrganizationConnector "MainCloudConnector" | Format-List
```

This example returns details about the Intra-Organization connector named "MainCloudConnector".

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the Intra-Organization connector that you want to view. You can use any value that uniquely identifies the connector. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: IntraOrganizationConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/213b31c9-71b5-452e-9ead-401b87f6ce4e.aspx)
