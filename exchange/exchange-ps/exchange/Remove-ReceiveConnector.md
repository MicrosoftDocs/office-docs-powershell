---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-ReceiveConnector

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-ReceiveConnector cmdlet to delete a Receive connector on a computer that has the Hub Transport server role or the Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Remove-ReceiveConnector cmdlet to delete a Receive connector.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Remove-ReceiveConnector cmdlet to remove Receive connectors from Mailbox servers and Edge Transport servers.

## SYNTAX

```
Remove-ReceiveConnector [-Identity] <ReceiveConnectorIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Remove-ReceiveConnector cmdlet deletes the object and the configuration information for a Receive connector.

Although a Receive connector is configured on a local Hub Transport server or an Edge Transport server, deleting a Receive connector may affect mail flow throughout the organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Receive connectors" entry in the Transport Permissions topic.

!!! Exchange Server 2013

The Remove-ReceiveConnector cmdlet deletes the object and the configuration information for a Receive connector.

Deleting a Receive connector may affect mail flow throughout the organization.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Receive connectors" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

Removing a Receive connector from the server might affect mail flow throughout the organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-ReceiveConnector "Contoso.com Receive Connector"
```

This example deletes the Receive connector Contoso.com Receive Connector.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-ReceiveConnector "Contoso.com Receive Connector"
```

This example deletes the Receive connector Contoso.com Receive Connector.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-ReceiveConnector -Identity "Contoso.com Receive Connector"
```

This example removes the Receive connector named Contoso.com Receive Connector.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the GUID or connector name that represents a specific Receive connector. You can also include the server name by using the format ServerName\\ConnectorName.



!!! Exchange Server 2016

The Identity parameter specifies the Receive connector that you want to remove. You can use any value that uniquely identifies the Receive connector. For example:

- Name

- Distinguished name (DN)

- GUID

- \<ServerName\>\\\<Name\>



```yaml
Type: ReceiveConnectorIdParameter
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

[Online Version](https://technet.microsoft.com/library/0b1629a0-9ee1-4c4b-bc4d-37a4d3547f70.aspx)

