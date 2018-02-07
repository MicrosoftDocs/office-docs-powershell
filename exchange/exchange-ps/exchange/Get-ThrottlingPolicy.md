---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-ThrottlingPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ThrottlingPolicy cmdlet to view the client throttling settings for one or more throttling policies.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-ThrottlingPolicy cmdlet to view the user throttling settings for one or more throttling policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ThrottlingPolicy [[-Identity] <ThrottlingPolicyIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [-Diagnostics] [-Explicit]
 [-ThrottlingPolicyScope <Regular | Organization | Global>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-ThrottlingPolicy cmdlet returns the client throttling settings for one or more throttling policies. If you use the Identity parameter, the cmdlet returns the settings for the identified throttling policy. If you don't use the Identity parameter, the cmdlet returns the settings for all throttling policies.

For more information about client throttling, see Understanding Client Throttling Policies. For more information about managing performance with client throttling policies, see Managing Performance with Client Throttling Policies.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Client throttling settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-ThrottlingPolicy cmdlet returns the client throttling settings for one or more throttling policies. If you use the Identity parameter, the cmdlet returns the settings for the identified throttling policy. If you don't use the Identity parameter, the cmdlet returns the settings for all throttling policies.

For more information about how to control the resources consumed by individual users, see Exchange workload management.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User throttling" entry in the Server health and performance permissions topic.

!!! Exchange Server 2016

The Get-ThrottlingPolicy cmdlet returns the client throttling settings for one or more throttling policies. If you use the Identity parameter, the cmdlet returns the settings for the identified throttling policy. If you don't use the Identity parameter, the cmdlet returns the settings for all throttling policies.

For more information about how to control the resources consumed by individual users, see User workload management in Exchange 2016.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ThrottlingPolicy
```

This example returns the settings for all throttling policies.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ThrottlingPolicy | Format-List
```

This example returns the settings for all throttling policies.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ThrottlingPolicy | Format-List
```

This example returns the settings for all throttling policies.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-ThrottlingPolicy -Identity ThrottlingPolicy2
```

This example displays the parameters and values for throttling policy ThrottlingPolicy2.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-ThrottlingPolicy -Identity ThrottlingPolicy2 | Format-List
```

This example displays the parameters and values for throttling policy ThrottlingPolicy2.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ThrottlingPolicy -Identity ThrottlingPolicy2 | Format-List
```

This example displays the parameters and values for throttling policy ThrottlingPolicy2.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-ThrottlingPolicy | where-object {$_.IsDefault -eq $true}
```

This example returns the default throttling policy. Default throttling policies have the IsDefault parameter set to $true.

### Example 4 -------------------------- (Exchange Server 2010)
```
$policy = $null; $policyLink = (get-mailbox tonysmith).ThrottlingPolicy; if ($policyLink -eq $null); {; $policy = Get-ThrottlingPolicy | where-object {$_.IsDefault -eq $true}; }; else; {; $policy = $policyLink | Get-ThrottlingPolicy; }
```

This example returns the throttling policies associated with the user with the alias tonysmith.

## PARAMETERS

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



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
The Identity parameter identifies the name of the throttling policy that you want to return settings for.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -Diagnostics
The Diagnostics switch specifies whether you want the output to include the diagnostics string. To return diagnostics information, use the syntax Get-ThrottlingPolicy -Diagnostics. You don't specify a value for this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Explicit
The Explicit switch specifies whether you only want to return the policy settings that have been directly assigned using this policy. By default, this parameter is set to $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicyScope
!!! Exchange Server 2013

The ThrottlingPolicyScope parameter specifies the scope of the throttling policy. You can use the following values:

- Global

- Organization

- Regular

For information about each of these policy scopes, see Exchange workload management.



!!! Exchange Server 2016

The ThrottlingPolicyScope parameter specifies the scope of the throttling policy. You can use the following values:

- Global

- Organization

- Regular

For information about each of these policy scopes, see User workload management in Exchange 2016.



```yaml
Type: Regular | Organization | Global
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/f7490b98-20e0-46ee-b369-6f77538da689.aspx)

