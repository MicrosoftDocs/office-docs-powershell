---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-GlobalAddressList

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-GlobalAddressList cmdlet to return all the attributes of a global address list (GAL) or a set of GALs.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-GlobalAddressList cmdlet to return all the attributes of a global address list (GAL) or a set of GALs.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-GlobalAddressList cmdlet to view a global address list (GAL) or a set of GALs.

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-GlobalAddressList [-DefaultOnly] [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

### Set1
```
Get-GlobalAddressList [[-Identity] <GlobalAddressListIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-GlobalAddressList cmdlet is mainly used to populate the GAL property pages in the Exchange Management Console. This command doesn't provide a filtering capability. If filtering is required, you should use a WHERE clause with the command.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Global address lists" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Get-GlobalAddressList cmdlet is mainly used to populate the GAL property pages in the Exchange Administration Center. This command doesn't provide a filtering capability. If filtering is required, you should use a WHERE clause with the command.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Global address lists" entry in the Email address and address book permissions topic.

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

!!! Exchange Server 2016, Exchange Online

The Get-GlobalAddressList cmdlet is mainly used to populate the GAL property pages in the Exchange admin center. This command doesn't provide a filtering capability. If filtering is required, you should use a WHERE clause with the command.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-GlobalAddressList
```

This example doesn't use parameters and returns all the attributes of all GALs.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-GlobalAddressList
```

This example doesn't use parameters and returns all the attributes of all GALs.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-GlobalAddressList
```

This example returns a summary list of all GALs.

### Example 1 -------------------------- (Exchange Online)
```
Get-GlobalAddressList
```

This example returns a summary list of all GALs.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-GlobalAddressList -DefaultOnly
```

This example uses the DefaultOnly parameter to return the default GAL only.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-GlobalAddressList -DefaultOnly
```

This example uses the DefaultOnly parameter to return all the attributes of the default GAL only.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-GlobalAddressList -Identity GAL_AgencyB | Format-List
```

This example returns detailed information about the GAL named GAL\_AgencyB.

### Example 2 -------------------------- (Exchange Online)
```
Get-GlobalAddressList -Identity GAL_AgencyB | Format-List
```

This example returns detailed information about the GAL named GAL\_AgencyB.

## PARAMETERS

### -DefaultOnly
!!! Exchange Server 2010, Exchange Server 2013

The DefaultOnly parameter specifies the default GAL only.



!!! Exchange Server 2016, Exchange Online

The DefaultOnly switch filters the results so only the default GAL is returned. You don't need to use a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the GUID, distinguished name (DN), or GAL name that represents a specific address list. You can also include the path by using the format Path\\GlobalAddressListName.

You can omit the parameter label so that only the GAL name or GUID is supplied.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the global address list that you want to view. You can use any value that uniquely identifies the GAL. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: GlobalAddressListIdParameter
Parameter Sets: Set1
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

[Online Version](https://technet.microsoft.com/library/1cf4684c-0347-488e-aa04-04d11dd5661c.aspx)

