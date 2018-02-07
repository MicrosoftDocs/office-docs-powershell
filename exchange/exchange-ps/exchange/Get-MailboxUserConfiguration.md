---
applicable: Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxUserConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxUserConfiguration cmdlet to view user configuration items in mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxUserConfiguration [-Identity] <MailboxUserConfigurationIdParameter> -Mailbox <MailboxIdParameter>
 [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxUserConfiguration -Mailbox laura@contoso.com -Identity Configuration\* | Format-Table -Auto Identity
```

This example returns a summary list of all user configuration items in the Configuration folder in the mailbox laura@contoso.com.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxUserConfiguration -Mailbox laura@contoso.com -Identity Configuration\* | Format-Table -Auto Identity
```

This example returns a summary list of all user configuration items in the Configuration folder in the mailbox laura@contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxUserConfiguration -Mailbox julia@contoso.com -Identity Configuration\IPM.Configuration.Aggregated.OwaUserConfiguration
```

This example returns detailed information for the specified user configuration item in the mailbox julia@contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxUserConfiguration -Mailbox julia@contoso.com -Identity Configuration\IPM.Configuration.Aggregated.OwaUserConfiguration
```

This example returns detailed information for the specified user configuration item in the mailbox julia@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user configuration item that you want to view. This parameter uses the syntax \<MailboxFolder\>\\\<ItemName\>:

- Valid values for \<MailboxFolder\> are folder names (for example, Inbox or Calendar), the value Configuration, or the value Root. Wildcards (\*) aren't supported.

- Valid values for \<ItemName\> start with IPM.Configuration (for example, IPM.Configuration.Aggregated.OwaUserConfiguration. Wildcards (\*) are supported.

```yaml
Type: MailboxUserConfigurationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the mailbox that contains the user configuration items you want to view. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/d54dcb7d-e989-463f-aaf0-950ba3ed0c65.aspx)

