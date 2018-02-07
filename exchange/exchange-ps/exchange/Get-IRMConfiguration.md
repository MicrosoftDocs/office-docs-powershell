---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-IRMConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-IRMConfiguration cmdlet to view the Information Rights Management (IRM) configuration in a Microsoft Exchange Server 2010 organization.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-IRMConfiguration cmdlet to view the Information Rights Management (IRM) configuration in a Microsoft Exchange Server 2013 organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-IRMConfiguration cmdlet to view the Information Rights Management (IRM) configuration in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-IRMConfiguration [[-Identity] <OrganizationIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-IRMConfiguration cmdlet provides details about the current IRM configuration, including whether individual IRM features are enabled or disabled, and provides the URLs used for ServiceLocation, PublishingLocation, and LicensingLocation.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Rights protection" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

The Get-IRMConfiguration cmdlet provides details about the current IRM configuration, including whether individual IRM features are enabled or disabled, and provides the URLs used for ServiceLocation, PublishingLocation, and LicensingLocation.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Information Rights Management (IRM) configuration" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Get-IRMConfiguration cmdlet provides details about the current IRM configuration, including whether individual IRM features are enabled or disabled, and provides the URLs used for ServiceLocation, PublishingLocation, and LicensingLocation.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-IRMConfiguration
```

This example retrieves the IRM configuration in an Exchange 2010 organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-IRMConfiguration
```

This example retrieves the IRM configuration in an Exchange 2013 organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-IRMConfiguration
```

This example retrieves the IRM configuration in your organization.

### Example 1 -------------------------- (Exchange Online)
```
Get-IRMConfiguration
```

This example retrieves the IRM configuration in your organization.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-IRMConfiguration
```

This example retrieves the IRM configuration in your organization.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



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
The Identity parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/e1821219-fe18-4642-a9c2-58eb0aadd61a.aspx)

