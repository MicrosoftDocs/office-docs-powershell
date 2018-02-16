---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-AvailabilityAddressSpace

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AvailabilityAddressSpace cmdlet to return details about how your Exchange organization is configured in regard to the exchange of free/busy information.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AvailabilityAddressSpace cmdlet to return details about how your Exchange organization is configured in regard to the exchange of free/busy information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AvailabilityAddressSpace cmdlet to view existing availability address space objects that are used to share free/busy data across Exchange organizations.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AvailabilityAddressSpace [[-Identity] <AvailabilityAddressSpaceIdParameter>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-AvailabilityAddressSpace cmdlet returns details about the access method and associated credentials used to exchange free/busy information across forests. To effectively use the command, run it on a computer that has the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Availability address space settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-AvailabilityAddressSpace cmdlet returns details about the access method and associated credentials used to exchange free/busy information across forests. To effectively use the command, run it on a computer that has the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Availability service address space settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

In on-premises Exchange organizations, you run the Remove-AvailabilityAddressSpace cmdlet on Exchange servers that have the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-AvailabilityAddressSpace
```

This example returns details about how your Exchange organization is configured in regard to the exchange of free/busy information across your organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AvailabilityAddressSpace
```

This example returns details about how your Exchange organization is configured in regard to the exchange of free/busy information across your organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AvailabilityAddressSpace
```

This example returns a summary list of all availability address space objects that are configured in your organization.

### Example 1 -------------------------- (Exchange Online)
```
Get-AvailabilityAddressSpace
```

This example returns a summary list of all availability address space objects that are configured in your organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-AvailabilityAddressSpace -Identity Contoso.com
```

This example returns details about how your Exchange organization is configured in regard to the exchange of free/busy information for the specific domain in the organization Contoso.com.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-AvailabilityAddressSpace -Identity Contoso.com
```

This example returns details about how your Exchange organization is configured in regard to the exchange of free/busy information for the specific domain in the organization Contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-AvailabilityAddressSpace -Identity Contoso.com | Format-List
```

This example returns details information for the availability address space object named Contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
Get-AvailabilityAddressSpace -Identity Contoso.com | Format-List
```

This example returns details information for the availability address space object named Contoso.com.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-AvailabilityAddressSpace -DomainController <FQDN of the domain controller>
```

This example returns details about how your Exchange organization is configured in regard to the exchange of free/busy information for a specific domain in your organization. This example uses the FQDN of the domain controller.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-AvailabilityAddressSpace -DomainController <FQDN of the domain controller>
```

This example returns details about how your Exchange organization is configured in regard to the exchange of free/busy information for a specific domain in your organization. This example uses the FQDN of the domain controller.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



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
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the availability address space entry to be retrieved.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the availability address space that you want to view. You can use any value that uniquely identifies the object. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: AvailabilityAddressSpaceIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/46777869-f5b1-4eee-8ce6-68c3a9002be4.aspx)

