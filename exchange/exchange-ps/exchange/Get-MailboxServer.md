---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-MailboxServer

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MailboxServer cmdlet to return a Mailbox server object and all its attributes. If no parameter is specified, a complete list of the Mailbox servers in the entire Exchange organization is returned.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxServer cmdlet to return a Mailbox server object and all its attributes. If no parameter is specified, a complete list of the Mailbox servers in the entire organization is returned.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxServer cmdlet to view information about Mailbox servers in your organization.

## SYNTAX

```
Get-MailboxServer [[-Identity] <MailboxServerIdParameter>] [-DomainController <Fqdn>] [-Status]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

To view all the Mailbox server attributes that this cmdlet returns, you must pipe the command to the Format-List cmdlet.

The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange Management Console when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox server configuration" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

To view all the Mailbox server attributes that this cmdlet returns, you must pipe the command to the Format-List cmdlet.

The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange Administration Center when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox server configuration" entry in the Recipients Permissions topic.

!!! Exchange Server 2016

The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Microsoft Exchange that's displayed in the Exchange admin center when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxServer
```

This example retrieves all the Mailbox servers in the organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxServer
```

This example retrieves all the Mailbox servers in the organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxServer
```

This example returns a summary list of all the Mailbox servers in the organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxServer -Identity Server1
```

This example retrieves a specific server instance called Server1.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxServer -Identity Server1
```

This example retrieves the specific server instance Server1.

### Example 2 -------------------------- (Exchange Server 2016)
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
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the Mailbox server. You can use the following values:

- Name

- GUID

- Distinguished name (DN)



!!! Exchange Server 2016

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
!!! Exchange Server 2010

The Status parameter specifies whether you want to get additional status information, such as locale.

You don't need to specify any value with this parameter.

If you specify this parameter, you should format the output in such a way that you can view the additional attributes. For example, pipe the output to the Format-List cmdlet.



!!! Exchange Server 2013

The Status parameter specifies whether you want to get additional status information, such as locale.

You don't need to specify a value with this parameter.

If you specify this parameter, you should format the output in such a way that you can view the additional attributes, for example, pipe the output to the Format-List cmdlet.



!!! Exchange Server 2016

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

