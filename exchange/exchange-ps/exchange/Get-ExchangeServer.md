---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-ExchangeServer

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ExchangeServer cmdlet to obtain the attributes of a specified server. If a server isn't specified, the cmdlet obtains the attributes of all the servers in the Exchange organization.

When you run the Get-ExchangeServer cmdlet with no parameters, it returns the attributes of all the servers in the Exchange organization. To return specific server properties (including domain controller information) where the Get-ExchangeServer cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the Status parameter.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeServer cmdlet to obtain the attributes of a specified server. If a server isn't specified, the cmdlet obtains the attributes of all the servers in the Exchange organization.

When you run the Get-ExchangeServer cmdlet with no parameters, it returns the attributes of all the servers in the Exchange organization. To return specific server properties (including domain controller information) where the Get-ExchangeServer cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the Status parameter.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-ExchangeServer cmdlet to view the properties of Exchange servers.

When you run the Get-ExchangeServer cmdlet with no parameters, it returns the attributes of all the servers in the Exchange organization. To return specific server properties (including domain controller information) where the Get-ExchangeServer cmdlet has to contact servers directly or perform a complex or slow calculation, make sure you use the Status parameter.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-ExchangeServer -Domain <Fqdn> [-DomainController <Fqdn>] [-Status] [<CommonParameters>]
```

### Set1
```
Get-ExchangeServer [[-Identity] <ServerIdParameter>] [-DomainController <Fqdn>] [-Status] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

To view all the Exchange server attributes that this cmdlet returns, you must pipe the command to the Format-List cmdlet.

The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Exchange displayed in the Exchange Management Console when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell Infrastructure Permissions" section in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

To view all the Exchange server attributes that this cmdlet returns, you must pipe the command to the Format-List cmdlet.

The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Exchange displayed in the Exchange Administration Center when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Shell infrastructure permissions" section in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

The ExchangeVersion attribute returned is the minimum version of Microsoft Exchange that you can use to manage the returned object. This attribute isn't the same as the version of Exchange displayed in the Exchange admin center when you select Server Configuration.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ExchangeServer | Format-List
```

This example retrieves the attributes of all the servers in the Exchange organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ExchangeServer | Format-List
```

This example retrieves the attributes of all the servers in the Exchange organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ExchangeServer | Format-List
```

This example returns a summary list of all the Exchange servers in the organization.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-ExchangeServer -Identity Mailbox01 | Format-List
```

This example returns detailed information about the Exchange server named Mailbox01.

## PARAMETERS

### -Domain
!!! Exchange Server 2010

The Domain parameter specifies the fully qualified domain name (FQDN) of the domain.



!!! Exchange Server 2013

The Domain parameter specifies the fully qualified domain name (FQDN) of the domain. If you use this parameter, you can't use the Identity parameter.



!!! Exchange Server 2016

The Domain parameter filters the results by the fully qualified domain name (FQDN) of the domain (for example, contoso.com).

You can't use this parameter with the Identity parameter.



```yaml
Type: Fqdn
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the identity of the server. If you use this parameter, you can't use the Domain parameter.



!!! Exchange Server 2016

The Identity parameter specifies the Exchange server that you want to view. You can use any value that uniquely identifies the Exchange server. For example:

- Name

- GUID

- Distinguished name (DN)

- ExchangeLegacyDN

You can't use this parameter with the Domain parameter.



```yaml
Type: ServerIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Status
!!! Exchange Server 2010, Exchange Server 2013

The Status parameter specifies the status of the server.



!!! Exchange Server 2016

The Status switch specifies whether to include additional property values in the results, for example, the Watson state, StaticDomainControllers, and runtime domain controller usage. You don't need to specify a value with this switch.

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

[Online Version](https://technet.microsoft.com/library/96543903-10fa-46fe-9ea0-90570ca0ad2e.aspx)

