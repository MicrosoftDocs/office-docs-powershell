---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-EmailAddressPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-EmailAddressPolicy cmdlet to return all of the attributes on a policy or set of policies.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-EmailAddressPolicy cmdlet to return all of the attributes on a policy or set of policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-EmailAddressPolicy cmdlet to view email address policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-EmailAddressPolicy [[-Identity] <EmailAddressPolicyIdParameter>] [-DomainController <Fqdn>]
 [-IncludeMailboxSettingOnlyPolicy] [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "E-mail address policies" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Email address policies" entry in the Email address and address book permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-EmailAddressPolicy -Identity "Email Address Policy 1"
```

This example retrieves the attributes for Email Address Policy 1.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-EmailAddressPolicy -Identity "Email Address Policy 1"
```

This example retrieves the attributes for Email Address Policy 1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-EmailAddressPolicy
```

This example returns a summary list of all email address policies in the organization.

### Example 1 -------------------------- (Exchange Online)
```
Get-EmailAddressPolicy
```

This example returns a summary list of all email address policies in the organization.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-EmailAddressPolicy -Identity "Contoso Employees"
```

This example returns detailed information for the email address policy named Contoso Employees.

### Example 2 -------------------------- (Exchange Online)
```
Get-EmailAddressPolicy -Identity "Contoso Employees"
```

This example returns detailed information for the email address policy named Contoso Employees.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

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
!!! Exchange Server 2010

The Identity parameter specifies the GUID, distinguished name (DN), or e-mail address policy name that represents a specific e-mail address policy. You can also include the path using the format Path\\EmailAddressPolicy.

You can omit the parameter label Identity so that only the GUID, DN, or e-mail address policy name is supplied.



!!! Exchange Server 2013

The Identity parameter specifies the GUID, distinguished name (DN), or email address policy name that represents a specific email address policy. You can also include the path using the format Path\\EmailAddressPolicy.

You can omit the parameter label Identity so that only the GUID, DN, or email address policy name is supplied.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the email address policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: EmailAddressPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeMailboxSettingOnlyPolicy
!!! Exchange Server 2010

The IncludeMailboxSettingOnlyPolicy parameter retrieves Microsoft Exchange Server 2003 e-mail address policies that contain only mailbox management configuration. Microsoft Exchange Server 2010 supports both policies that contain only e-mail address policy settings, and policies that contain e-mail address policy settings and mailbox management configuration. Exchange 2010 doesn't support policies that contain only mailbox management configuration, but Exchange 2003 policies that contain only mailbox management configuration are, by default, preserved and not upgraded. The IncludeMailboxSettingOnlyPolicy parameter is required to retrieve these policies.

The attributes of e-mail address policies that contain only mailbox management configuration can't be modified in Exchange 2010. These policies can only be removed.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is reserved for internal Microsoft use.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

[Online Version](https://technet.microsoft.com/library/ab3c08f2-31d7-4711-a1ec-6e7135c9fdfa.aspx)

