---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MessageCategory

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MessageCategory cmdlet to retrieve a message category from the specified mailbox.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MessageCategory cmdlet to retrieve a message category from the specified mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MessageCategory [[-Identity] <MessageCategoryIdParameter>] [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-MessageCategory cmdlet is used by the Web management interface in Microsoft Exchange Server 2010 to populate fields that display message category information.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Message categories" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

The Get-MessageCategory cmdlet is used by the web management interface in Microsoft Exchange to populate fields that display message category information.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Message categories" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-MessageCategory cmdlet is used by the web management interface in Microsoft Exchange to populate fields that display message category information.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MessageCategory -Mailbox "User1"
```

This example retrieves message categories from the mailbox User1.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MessageCategory -Mailbox "User1"
```

This example retrieves message categories from the mailbox User1.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MessageCategory -Mailbox "User1"
```

This example retrieves message categories from the mailbox User1.

### Example 1 -------------------------- (Exchange Online)
```
Get-MessageCategory -Mailbox "User1"
```

This example retrieves message categories from the mailbox User1.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the message category to be retrieved.

```yaml
Type: MessageCategoryIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

### -Mailbox
The Mailbox parameter specifies the identity of a mailbox user to retrieve the message category from.

```yaml
Type: MailboxIdParameter
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

[Online Version](https://technet.microsoft.com/library/62d403c8-d1cf-4507-a0d7-342bdfb17a9a.aspx)

