---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Remove-AvailabilityAddressSpace

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-AvailabilityAddressSpace cmdlet to remove a previously defined availability address space and the associated credentials used in cross-forest requests for free/busy information.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-AvailabilityAddressSpace cmdlet to remove a previously defined availability address space and the associated credentials used in cross-forest requests for free/busy information.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-AvailabilityAddressSpace cmdlet to remove existing availability address space objects and the associated credentials that were used to share free/busy data across Exchange organizations.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-AvailabilityAddressSpace [-Identity] <AvailabilityAddressSpaceIdParameter> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

To effectively use the Remove-AvailabilityAddressSpace cmdlet, run it on a computer that has the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Availability address space settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

To effectively use the Remove-AvailabilityAddressSpace cmdlet, run it on a computer that has the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Availability service address space settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

In on-premises Exchange organizations, you run the Remove-AvailabilityAddressSpace cmdlet on Exchange servers that have the Client Access server role installed.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com
```

This example removes the availability address space entry Contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com
```

This example removes the availability address space entry Contoso.com.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com
```

This example removes the availability address space objectnamed Contoso.com.

### Example 1 -------------------------- (Exchange Online)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com
```

This example removes the availability address space objectnamed Contoso.com.

### Example 2 -------------------------- (Exchange Server 2010)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com -Confirm
```

This example removes the availability address space entry Contoso.com and requires confirmation before completing the removal.

### Example 2 -------------------------- (Exchange Server 2013)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com -Confirm
```

This example removes the availability address space entry Contoso.com and then requires confirmation before completing the removal.

### Example 2 -------------------------- (Exchange Server 2016)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com -Confirm:$false
```

This example immediately removes the availability address space objectnamed Contoso.com without displaying the confirmation prompt.

### Example 2 -------------------------- (Exchange Online)
```
Remove-AvailabilityAddressSpace -Identity Contoso.com -Confirm:$false
```

This example immediately removes the availability address space objectnamed Contoso.com without displaying the confirmation prompt.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the availability address space entry to be removed.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the availability address that you want to remove. You can use any value that uniquely identifies the object. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: AvailabilityAddressSpaceIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/51a1b398-3358-4e08-9175-1d804114a2a5.aspx)

