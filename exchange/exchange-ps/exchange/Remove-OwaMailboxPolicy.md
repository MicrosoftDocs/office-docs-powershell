---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Remove-OwaMailboxPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-OwaMailboxPolicy cmdlet to remove a Microsoft Office Outlook Web App mailbox policy.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-OwaMailboxPolicy cmdlet to remove Microsoft Outlook Web App mailbox policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-OwaMailboxPolicy cmdlet to remove Outlook on the web mailbox policies from the organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-OwaMailboxPolicy [-Identity] <MailboxPolicyIdParameter> [-Confirm] [-DomainController <Fqdn>] [-Force]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Remove-OwaMailboxPolicy cmdlet removes an existing Outlook Web App mailbox policy.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Outlook Web App mailbox policies" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Remove-OwaMailboxPolicy cmdlet removes an existing Outlook Web App mailbox policy.

Changes to Outlook Web App mailbox polices may take up to 60 minutes to take effect. In on-premises Exchange 2013, you can force an update by running the command IISRESET /noforce.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Outlook Web App mailbox policies" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

Changes to Outlook on the web mailbox polices may take up to 60 minutes to take effect. In on-premises Exchange, you can force an update by running the command IISRESET /noforce.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-OwaMailboxPolicy -Identity Executives
```

This example removes the mailbox policy Executives.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-OwaMailboxPolicy -Identity Executives
```

This example removes the mailbox policy Executives.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-OwaMailboxPolicy -Identity Executives
```

This example removes the mailbox policy named Executives.

### Example 1 -------------------------- (Exchange Online)
```
Remove-OwaMailboxPolicy -Identity Executives
```

This example removes the mailbox policy named Executives.

### Example 2 -------------------------- (Exchange Server 2010)
```
Remove-OwaMailboxPolicy -Identity Fabrikam\Employees
```

This example removes the mailbox policy Employees for the organization Fabrikam.

### Example 2 -------------------------- (Exchange Server 2013)
```
Remove-OwaMailboxPolicy -Identity Fabrikam\Employees
```

This example removes the mailbox policy Employees for the organization Fabrikam.

### Example 2 -------------------------- (Exchange Server 2016)
```
Remove-OwaMailboxPolicy -Identity Fabrikam\Employees
```

This example removes the mailbox policy named Employees for the organization Fabrikam.

### Example 2 -------------------------- (Exchange Online)
```
Remove-OwaMailboxPolicy -Identity Fabrikam\Employees
```

This example removes the mailbox policy named Employees for the organization Fabrikam.

### Example 3 -------------------------- (Exchange Server 2010)
```
Remove-OwaMailboxPolicy -Identity EMEA\Contoso\Corporate
```

This example removes the mailbox policy Corporate for the tenant Contoso in the organization EMEA.

### Example 3 -------------------------- (Exchange Server 2013)
```
Remove-OwaMailboxPolicy -Identity Litware\Contoso\Corporate
```

This example removes the mailbox policy Corporate for the tenant Contoso in the organization Litware.

### Example 3 -------------------------- (Exchange Server 2016)
```
Remove-OwaMailboxPolicy -Identity Litware\Contoso\Corporate
```

This example removes the mailbox policy named Corporate for the tenant Contoso in the organization Litware.

### Example 3 -------------------------- (Exchange Online)
```
Remove-OwaMailboxPolicy -Identity Litware\Contoso\Corporate
```

This example removes the mailbox policy named Corporate for the tenant Contoso in the organization Litware.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the name of the policy or the path to the policy including the name, for example, \<Organization\>\\\<ResellerA\>\\\<Reseller…n\>\\\<Tenant\>\\\<Object Name\>.



!!! Exchange Server 2013

The Identity parameter specifies the name of the policy or the path to the policy including the name, for example, \<Organization\>\\\<ResellerA\>\\\<Reseller...n\>\\\<Tenant\>\\\<Object Name\>.



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox policy that you want to remove. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

In multi-tenant environments, you can use the path to the policy including the name, for example, \<Organization\>\\\<ResellerA\>\\\<Reseller...n\>\\\<Tenant\>\\\<Policy Name\>.



```yaml
Type: MailboxPolicyIdParameter
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

### -Force
!!! Exchange Server 2010, Exchange Server 2013

The Force parameter specifies whether to suppress the warning or confirmation messages that appear during specific configuration changes.



!!! Exchange Server 2016, Exchange Online

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.



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

[Online Version](https://technet.microsoft.com/library/834bee7a-1044-4628-9d0d-1601e88a73f8.aspx)

