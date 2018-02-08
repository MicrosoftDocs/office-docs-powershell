---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# update-EmailAddressPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Update-EmailAddressPolicy cmdlet to apply an e-mail address policy to all recipients.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Update-EmailAddressPolicy cmdlet to apply an email address policy to all recipients.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Update-EmailAddressPolicy cmdlet to apply new or updated email address policies to the affected recipients in an on-premises Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
update-EmailAddressPolicy [-Identity] <EmailAddressPolicyIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-FixMissingAlias] [-WhatIf] [-UpdateSecondaryAddressesOnly] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Update-EmailAddressPolicy cmdlet queries for all recipients that match the specified e-mail address policy and saves the objects to Active Directory. Use the Update-EmailAddressPolicy cmdlet after you use the Set-EmailAddressPolicy cmdlet to apply all changes. For more information about the Set-EmailAddressPolicy cmdlet, see Set-EmailAddressPolicy.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "E-mail address policy" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The Update-EmailAddressPolicy cmdlet queries for all recipients that match the specified email address policy and saves the objects to Active Directory. Use the Update-EmailAddressPolicy cmdlet after you use the Set-EmailAddressPolicy cmdlet to apply all changes. For more information about the Set-EmailAddressPolicy cmdlet, see Set-EmailAddressPolicy.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Email address policies" entry in the Email address and address book permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Update-EmailAddressPolicy -Identity EMAIL_ADDRESS_POLICY01
```

This example applies the e-mail address policy named EMAIL\_ADDRESS\_POLICY01 to all affected recipients.

### Example 1 -------------------------- (Exchange Server 2013)
```
Update-EmailAddressPolicy -Identity EMAIL_ADDRESS_POLICY01
```

This example applies the email address policy EMAIL\_ADDRESS\_POLICY01 to all affected recipients.

### Example 1 -------------------------- (Exchange Server 2016)
```
Update-EmailAddressPolicy -Identity "Northwest Executives"
```

This example applies the email address policy named Northwest Executives to all affected recipients.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the GUID, distinguished name (DN), or e-mail address policy name that represents a specific e-mail address policy. You can also include the path by using the format Path\\EmailAddressPolicy.

You can omit the parameter label Identity so that only the e-mail address policy name or GUID is supplied.



!!! Exchange Server 2013

The Identity parameter specifies the GUID, distinguished name (DN), or email address policy name that represents a specific email address policy. You can also include the path by using the format Path\\EmailAddressPolicy.

You can omit the parameter label Identity so that only the email address policy name or GUID is supplied.



!!! Exchange Server 2016

The Identity parameter specifies the email address policy that you want to apply to recipients. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: EmailAddressPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -FixMissingAlias
!!! Exchange Server 2010

The FixMissingAlias parameter repairs recipients that don't have an alias. The alias is generated based on the name of the recipient. You need to use the FixMissingAlias parameter if you receive an error message when you attempt to update an e-mail address policy, global address list, or address list.



!!! Exchange Server 2013

The FixMissingAlias switch repairs recipients that don't have an alias. The alias is generated based on the name of the recipient. You need to use the FixMissingAlias parameter if you receive an error message when you attempt to update an email address policy, global address list, or address list.



!!! Exchange Server 2016

The FixMissingAlias switch repairs recipients that don't have an alias. The alias is generated based on the Name property of the recipient. You don't need to specify a value with this switch.

You need to use this switch if you receive an error message when you attempt to update the email address policy, global address list, or address list.



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

### -UpdateSecondaryAddressesOnly
!!! Exchange Server 2013

The UpdateSecondaryAddressesOnly switch parameter specifies to update the secondary email addresses only. If you specify this parameter, the primary proxy email address isn't updated.



!!! Exchange Server 2016

The UpdateSecondaryAddressesOnly switch parameter specifies that only the proxy email addresses are updated for the recipients. The recipient's primary email address isn't updated. You don't need to specify a value with this switch.



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

[Online Version](https://technet.microsoft.com/library/283081a2-14bb-46cd-918e-e2dd168c43ab.aspx)

