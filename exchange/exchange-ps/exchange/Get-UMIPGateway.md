---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-UMIPGateway

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-UMIPGateway cmdlet to return a list of properties and values for a specified Unified Messaging (UM) IP gateway or a list of UM IP gateways.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMIPGateway cmdlet to return a list of properties and values for a specified Unified Messaging (UM) IP gateway or a list of UM IP gateways.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMIPGateway [[-Identity] <UMIPGatewayIdParameter>] [-DomainController <Fqdn>] [-IncludeSimulator]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-UMIPGateway cmdlet displays the properties and values for a specified UM IP gateway, such as the display name, the IP address, status, and outcall settings. If no parameter is specified, all UM IP gateways in the Active Directory forest are returned.

When you're using the Get-UMIPGateway cmdlet, you can't enter the IP address that's configured on the UM IP gateway. You must use the name of the UM IP gateway. The name that's specified on the Identity parameter with the Get-UMIPGateway cmdlet can be the same as or different from the host name of the UM IP gateway. For example, Get-UMIPGatewayMyUMIPGateway.

After this task is completed, you can see the list of properties and values for a specific UM IP gateway. Or, if the Identity parameter isn't used, the cmdlet returns a list of all UM IP gateways in the forest.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM IP gateways" entry in the Unified Messaging Permissions topic.

!!! Exchange Server 2013

The Get-UMIPGateway cmdlet displays the properties and values for a specified UM IP gateway, such as the display name, IP address, status, and outgoing calls settings. If no parameter is specified, all UM IP gateways in the Active Directory forest are returned.

When you're using the Get-UMIPGateway cmdlet, you can't enter the IP address configured on the UM IP gateway. You must use the name of the UM IP gateway. The name specified with the Identity parameter of the Get-UMIPGateway cmdlet can be the same as or different from the host name of the UM IP gateway, for example, Get-UMIPGatewayMyUMIPGateway.

After this task is completed, you can view the list of properties and values for a specific UM IP gateway. Or, if the Identity parameter isn't used, the cmdlet returns a list of all UM IP gateways in the forest.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM IP gateways" entry in the Unified Messaging permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-UMIPGateway cmdlet displays the properties and values for a specified UM IP gateway, such as the display name, IP address, status, and outgoing calls settings. If no parameter is specified, all UM IP gateways in the Active Directory forest are returned.

When you're using the Get-UMIPGateway cmdlet, you can't enter the IP address configured on the UM IP gateway. You must use the name of the UM IP gateway. The name specified with the Identity parameter of the Get-UMIPGateway cmdlet can be the same as or different from the host name of the UM IP gateway, for example, Get-UMIPGatewayMyUMIPGateway.

After this task is completed, you can view the list of properties and values for a specific UM IP gateway. Or, if the Identity parameter isn't used, the cmdlet returns a list of all UM IP gateways in the forest.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-UMIPGateway |Format-List
```

This example displays a formatted list of all the UM IP gateways in the Active Directory forest.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-UMIPGateway | Format-List
```

This example displays a formatted list of all the UM IP gateways in the Active Directory forest.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-UMIPGateway | Format-List
```

This example displays a formatted list of all the UM IP gateways in the Active Directory forest.

### Example 1 -------------------------- (Exchange Online)
```
Get-UMIPGateway | Format-List
```

This example displays a formatted list of all the UM IP gateways in the Active Directory forest.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-UMIPGateway -Identity MyUMIPGateway
```

This example displays the properties for a UM IP gateway named MyUMIPGateway.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-UMIPGateway -Identity MyUMIPGateway
```

This example displays the properties for the UM IP gateway MyUMIPGateway.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-UMIPGateway -Identity MyUMIPGateway
```

This example displays the properties for the UM IP gateway MyUMIPGateway.

### Example 2 -------------------------- (Exchange Online)
```
Get-UMIPGateway -Identity MyUMIPGateway
```

This example displays the properties for the UM IP gateway MyUMIPGateway.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-UMIPGateway -IncludeSimulator $true
```

This example displays all the UM IP gateways including IP gateway simulators in the Active Directory forest.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-UMIPGateway -IncludeSimulator $true
```

This example displays all the UM IP gateways including IP gateway simulators in the Active Directory forest.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-UMIPGateway -IncludeSimulator $true
```

This example displays all the UM IP gateways including IP gateway simulators in the Active Directory forest.

### Example 3 -------------------------- (Exchange Online)
```
Get-UMIPGateway -IncludeSimulator $true
```

This example displays all the UM IP gateways including IP gateway simulators in the Active Directory forest.

## PARAMETERS

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

### -Identity
The Identity parameter specifies the identifier for the UM IP gateway being viewed. This parameter is the directory object ID for the UM IP gateway.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeSimulator
!!! Exchange Server 2010

The IncludeSimulator parameter retrieves the simulator of the UM IP gateway being viewed. A simulator allows a client to connect to the Unified Messaging server.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The IncludeSimulator switch retrieves the simulator of the UM IP gateway being viewed. A simulator allows a client to connect to the Mailbox server.



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

### -Organization
The Organization parameter is reserved for internal Microsoft use.

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

[Online Version](https://technet.microsoft.com/library/d7f8c7d0-6ed7-4b74-91de-8b0ed2377946.aspx)

