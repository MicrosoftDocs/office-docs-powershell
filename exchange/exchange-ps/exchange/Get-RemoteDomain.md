---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-RemoteDomain

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-RemoteDomain cmdlet to view the configuration information for the remote domains configured in your organization. You can view the remote domain configuration from inside the Exchange organization or from a computer that has the Edge Transport server role installed in a Microsoft Exchange Server 2010 organization.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-RemoteDomain cmdlet to view the configuration information for the remote domains configured in your organization. You can view the remote domain configuration from inside the Exchange organization or from an Edge Transport server in the perimeter network.

## SYNTAX

```
Get-RemoteDomain [[-Identity] <RemoteDomainIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Remote domains" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Remote domains" entry in the Mail flow permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-RemoteDomain
```

This example returns all remote domains configured in the Active Directory forest in which you run the command.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-RemoteDomain
```

This example returns all remote domains configured in the Active Directory forest in which you run the command.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-RemoteDomain
```

This example returns all remote domains configured in the Active Directory forest in which you run the command.

### Example 1 -------------------------- (Exchange Online)
```
Get-RemoteDomain
```

This example returns all remote domains configured in the Active Directory forest in which you run the command.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-RemoteDomain -Identity Contoso
```

This example returns the configuration for the remote domain Contoso.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-RemoteDomain Contoso
```

This example returns the configuration for the remote domain Contoso.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-RemoteDomain Contoso
```

This example returns the configuration for the remote domain Contoso.

### Example 2 -------------------------- (Exchange Online)
```
Get-RemoteDomain Contoso
```

This example returns the configuration for the remote domain Contoso.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-RemoteDomain | Where {$_.TNEFEnabled -eq $false}
```

This example queries Active Directory for all remote domains and displays only those remote domains for which Transport Neutral Encapsulation Format (TNEF) encoding isn't used.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-RemoteDomain | Where {$_.TNEFEnabled -eq $false}
```

This example queries Active Directory for all remote domains and displays only those remote domains for which Transport Neutral Encapsulation Format (TNEF) encoding isn't used.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-RemoteDomain | Where {$_.TNEFEnabled -eq $false}
```

This example queries Active Directory for all remote domains and displays only those remote domains for which Transport Neutral Encapsulation Format (TNEF) encoding isn't used.

### Example 3 -------------------------- (Exchange Online)
```
Get-RemoteDomain | Where {$_.TNEFEnabled -eq $false}
```

This example queries Active Directory for all remote domains and displays only those remote domains for which Transport Neutral Encapsulation Format (TNEF) encoding isn't used.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies a string value for the remote domain. Enter either the GUID or name of the remote domain.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Identity parameter specifies the remote domain you want to view. Enter either the GUID or name of the remote domain.



```yaml
Type: RemoteDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/183b2f07-4225-4ef3-96c8-d29269730d18.aspx)

