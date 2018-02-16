---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-OrganizationConfig

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-OrganizationConfig cmdlet to get configuration data for an Exchange organization.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-OrganizationConfig cmdlet to get configuration data for an Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-OrganizationConfig [[-Identity] <OrganizationIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell infrastructure permissions" section in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell infrastructure permissions" section in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-OrganizationConfig -DomainController ContosoDC
```

This example gets the organization configuration information for the domain controller ContosoDC.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-OrganizationConfig -DomainController ContosoDC
```

This example gets the organization configuration information for the domain controller ContosoDC.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-OrganizationConfig -DomainController ContosoDC
```

This example gets the organization configuration information for the domain controller ContosoDC.

### Example 1 -------------------------- (Exchange Online)
```
Get-OrganizationConfig -DomainController ContosoDC
```

This example gets the organization configuration information for the domain controller ContosoDC.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-OrganizationConfig -DomainController ContosoDC
```

This example gets the organization configuration information for the domain controller ContosoDC.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-OrganizationConfig Export-Cli c:\myFile.xml
```

This example gets the configuration information for the tenant organization.


For more information, see Troubleshoot a hybrid deployment.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-OrganizationConfig Export-Cli c:\myFile.xml
```

This example gets the configuration information for the tenant organization.


For more information, see Troubleshoot a hybrid deployment.

### Example 2 -------------------------- (Exchange Online)
```
Get-OrganizationConfig Export-Cli c:\myFile.xml
```

This example gets the configuration information for the tenant organization.


For more information, see Troubleshoot a hybrid deployment.

### Example 2 -------------------------- (Exchange Online Protection)
```
Get-OrganizationConfig Export-Cli c:\myFile.xml
```

This example gets the configuration information for the tenant organization.


For more information, see Troubleshoot a hybrid deployment.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-OrganizationConfig | Format-List EwsApplicationAccessPolicy,Ews*List
```

This example shows the applications that are allowed access to EWS and REST.


If the value of EwsApplicationAccessPolicy is EnforceAllowList, only the applications specified in EwsAllowList are allowed to access EWS and REST.

If the value of EwsApplicationAccessPolicy is EnforceBlockList, all applications are allowed to access EWS and REST, except those specified in EwsBlockList.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-OrganizationConfig | Format-List EwsApplicationAccessPolicy,Ews*List
```

This example shows the applications that are allowed access to EWS and REST.


If the value of EwsApplicationAccessPolicy is EnforceAllowList, only the applications specified in EwsAllowList are allowed to access EWS and REST.

If the value of EwsApplicationAccessPolicy is EnforceBlockList, all applications are allowed to access EWS and REST, except those specified in EwsBlockList.

### Example 3 -------------------------- (Exchange Online)
```
Get-OrganizationConfig | Format-List EwsApplicationAccessPolicy,Ews*List
```

This example shows the applications that are allowed access to EWS and REST.


If the value of EwsApplicationAccessPolicy is EnforceAllowList, only the applications specified in EwsAllowList are allowed to access EWS and REST.

If the value of EwsApplicationAccessPolicy is EnforceBlockList, all applications are allowed to access EWS and REST, except those specified in EwsBlockList.

### Example 3 -------------------------- (Exchange Online Protection)
```
Get-OrganizationConfig | Format-List EwsApplicationAccessPolicy,Ews*List
```

This example shows the applications that are allowed access to EWS and REST.


If the value of EwsApplicationAccessPolicy is EnforceAllowList, only the applications specified in EwsAllowList are allowed to access EWS and REST.

If the value of EwsApplicationAccessPolicy is EnforceBlockList, all applications are allowed to access EWS and REST, except those specified in EwsBlockList.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Identity parameter specifies the organization you want configuration data from.

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

[Online Version](https://technet.microsoft.com/library/3e07e5cc-5066-40e7-8642-845ad080f9a9.aspx)

