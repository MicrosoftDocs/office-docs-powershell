---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-AcceptedDomain

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AcceptedDomain cmdlet to view the configuration information for the accepted domains configured in your organization.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AcceptedDomain cmdlet to view the configuration information for the accepted domains in your organization.

## SYNTAX

```
Get-AcceptedDomain [[-Identity] <AcceptedDomainIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Accepted domains" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Accepted domains" entry in the Mail flow permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-AcceptedDomain
```

This example lists all the accepted domains in your organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AcceptedDomain
```

This example lists all the accepted domains in your organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AcceptedDomain
```

This example lists all the accepted domains in your organization.

### Example 1 -------------------------- (Exchange Online)
```
Get-AcceptedDomain
```

This example lists all the accepted domains in your organization.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-AcceptedDomain
```

This example lists all the accepted domains in your organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-AcceptedDomain | Where{$_.DomainType -eq 'Authoritative'}
```

This example lists all the authoritative accepted domains in your organization.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-AcceptedDomain | Where{$_.DomainType -eq 'Authoritative'}
```

This example lists all the authoritative accepted domains in your organization.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-AcceptedDomain | Where{$_.DomainType -eq 'Authoritative'}
```

This example lists all the authoritative accepted domains in your organization.

### Example 2 -------------------------- (Exchange Online)
```
Get-AcceptedDomain | Where{$_.DomainType -eq 'Authoritative'}
```

This example lists all the authoritative accepted domains in your organization.

### Example 2 -------------------------- (Exchange Online Protection)
```
Get-AcceptedDomain | Where{$_.DomainType -eq 'Authoritative'}
```

This example lists all the authoritative accepted domains in your organization.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies a string value for the accepted domain. Enter either the GUID or the name of the accepted domain.

```yaml
Type: AcceptedDomainIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/e0c2366a-eda9-4152-bd3e-3a2d1953562d.aspx)

