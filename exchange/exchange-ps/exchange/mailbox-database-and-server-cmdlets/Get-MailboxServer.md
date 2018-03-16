---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-MailboxServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxServer cmdlet to view information about Mailbox servers in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxServer [[-Identity] <MailboxServerIdParameter>] [-DomainController <Fqdn>] [-Status]
 [<CommonParameters>]
```

## DESCRIPTION
The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange admin center when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-MailboxServer
```

This example returns a summary list of all the Mailbox servers in the organization.

### Example 2
```
Get-MailboxServer -Identity Server1 | Format-List
```

This example returns detailed information about the Mailbox server named Server1.

## PARAMETERS

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

### -Identity
The Identity parameter specifies the Mailbox server that you want to view. You can use any value that uniquely identifies the Mailbox server. For example:

- Name

- GUID

- Distinguished name (DN)

```yaml
Type: MailboxServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Status
The Status switch specifies whether to include additional property values in the results, for example, the Locale value. You don't need to specify a value with this switch.

To see the additional values, you need to pipe the output to a formatting cmdlet, for example, the Format-List cmdlet.

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

[Online Version](https://technet.microsoft.com/library/838bc72a-e3bb-4583-934f-d93a7c93252c.aspx)
