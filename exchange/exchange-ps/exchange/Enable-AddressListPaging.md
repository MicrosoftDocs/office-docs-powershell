---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# enable-AddressListPaging

## SYNOPSIS
!!! Exchange Server 2010

Use the Enable-AddressListPaging cmdlet to enable Active Directory virtual list view for address lists. Virtual list view allows you to display the address lists in your organization as pages instead of loading and viewing the entire directory.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Enable-AddressListPaging cmdlet to enable Active Directory virtual list view for address lists. Virtual list view allows you to display the address lists in your organization as pages instead of loading and viewing the entire directory.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
enable-AddressListPaging [[-Identity] <OrganizationIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-DoNotUpdateRecipients] [-ForceUpdateOfRecipients] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Enable-AddressListPaging cmdlet creates the Address List container in Active Directory. Exchange 2010 recipient cmdlets, such as Get-Recipient, use the information written to the container to quickly retrieve recipient data.

Exchange 2007 can't read the Address List container and will clear its contents while managing address lists. As a result, the Exchange 2010 recipient cmdlets won't return any recipient data. If you're in a coexistence deployment with Exchange 2007, and you use Exchange 2007 servers to manage address lists, don't enable address list paging. If you've already enabled address list paging, you can disable it by running the Disable-AddressListPaging cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Address lists" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Enable-AddressListPaging cmdlet creates the Address List container in Active Directory. Recipient cmdlets, such as Get-Recipient, use the information written to the container to quickly retrieve recipient data.

Microsoft Exchange Server 2007 can't read the Address List container and will clear its contents while managing address lists. As a result, the Exchange Server 2010 or later recipient cmdlets won't return any recipient data. If you're in a coexistence deployment with Exchange 2007, and you use Exchange 2007 servers to manage address lists, don't enable address list paging. If you've already enabled address list paging, you can disable it by running the Disable-AddressListPaging cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Address lists" entry in the Email address and address book permissions topic.

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

!!! Exchange Server 2016

The Enable-AddressListPaging cmdlet creates the Address List container in Active Directory. Recipient cmdlets, such as Get-Recipient, use the information written to the container to quickly retrieve recipient data.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Enable-AddressListPaging
```

This example enables virtual list view for your organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Enable-AddressListPaging
```

This example enables virtual list view for your organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Enable-AddressListPaging
```

This example enables virtual list view for your organization.

## PARAMETERS

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -DoNotUpdateRecipients
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The DoNotUpdateRecipients switch specifies that the Address List container be created in Active Directory but no recipients be added to the virtual list view.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceUpdateOfRecipients
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The ForceUpdateOfRecipients switch specifies that all system address lists be updated.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Identity parameter specifies the identity of the tenant organization.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/d20e96a9-8742-4f6b-8acc-6433e79a23db.aspx)

