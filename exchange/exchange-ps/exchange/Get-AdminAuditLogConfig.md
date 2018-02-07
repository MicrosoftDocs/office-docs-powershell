---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-AdminAuditLogConfig

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AdminAuditLogConfig cmdlet to view the administrator audit logging configuration settings.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-AdminAuditLogConfig cmdlet to view the administrator audit logging configuration settings.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AdminAuditLogConfig [[-Identity] <OrganizationIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

When audit logging is enabled, a log entry is created for each cmdlet that's run, excluding Get cmdlets. For more information about administrator audit logging, see Administrator Audit Logging.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Administrator audit logging" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

When audit logging is enabled, a log entry is created for each cmdlet that's run, excluding Get cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Administrator audit logging" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

When audit logging is enabled, a log entry is created for each cmdlet that's run, excluding Get cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-AdminAuditLogConfig | Format-List
```

This example displays the administrator audit logging settings. The output of the Get-AdminAudigLogConfig cmdlet is piped to the Format-List cmdlet. For more information about piping and the Format-List cmdlet, see the following topics:


Pipelining

Working with Command Output

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AdminAuditLogConfig | Format-List
```

This example displays the administrator audit logging settings. The output of the Get-AdminAuditLogConfig cmdlet is piped to the Format-List cmdlet. For more information about piping and the Format-List cmdlet, see the following topics:


Pipelining

Working with command output

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AdminAuditLogConfig | Format-List
```

This example displays the administrator audit logging settings. The output of the Get-AdminAuditLogConfig cmdlet is piped to the Format-List cmdlet. For more information about piping and the Format-List cmdlet, see the following topics:


Pipelining

Working with command output

### Example 1 -------------------------- (Exchange Online)
```
Get-AdminAuditLogConfig | Format-List
```

This example displays the administrator audit logging settings. The output of the Get-AdminAuditLogConfig cmdlet is piped to the Format-List cmdlet. For more information about piping and the Format-List cmdlet, see the following topics:


Pipelining

Working with command output

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-AdminAuditLogConfig | Format-List
```

This example displays the administrator audit logging settings. The output of the Get-AdminAuditLogConfig cmdlet is piped to the Format-List cmdlet. For more information about piping and the Format-List cmdlet, see the following topics:


Pipelining

Working with command output

## PARAMETERS

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

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
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Identity parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

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

[Online Version](https://technet.microsoft.com/library/775f7985-19f0-4681-afef-ac1db324784e.aspx)

