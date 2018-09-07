---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: New-ForeignConnector
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# New-ForeignConnector

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-ForeignConnector cmdlet to create a new Foreign connector in the Transport service of a Mailbox server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-ForeignConnector [-Name] <String> -AddressSpaces <MultiValuedProperty> [-Confirm]
 [-DomainController <Fqdn>] [-IsScopedConnector <$true | $false>]
 [-SourceTransportServers <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A Foreign connector uses a Drop directory in the Transport service of a Mailbox server to send messages to a local messaging server that doesn't use SMTP as its primary transport mechanism. These messaging servers are known as foreign gateway servers. Third-party fax gateway servers are examples of foreign gateway servers. The address spaces assigned to a Foreign connector can be SMTP or non-SMTP.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-ForeignConnector -Name "Contoso Foreign Connector" -AddressSpaces "X400:c=US;a=Fabrikam;P=Contoso;5" -SourceTransportServers Hub01,Hub02
```

This example creates a Foreign connector with the following properties:

- Connector name: Contoso Foreign Connector

- Address space: "c=US;a=Fabrikam;P=Contoso"

- Address space type: X.400

- Address space cost: 5

- Source transport servers: Hub01 and Hub02

## PARAMETERS

### -AddressSpaces
The AddressSpaces parameter specifies the domain names to which the Foreign connector sends messages. The complete syntax for entering each address space is as follows: \<AddressSpaceType\>:\<AddressSpace\>;\<AddressSpaceCost\>

- AddressSpaceType: The address space type may be SMTP, X400, or any other text string. If you omit the address space type, an SMTP address space type is assumed.

- AddressSpace: For SMTP address space types, the address space that you enter must be RFC 1035-compliant. For example, `*`, `*.com`, and `*.contoso.com` are valid, but `*contoso.com` isn't valid. For X.400 address space types, the address space that you enter must be RFC 1685-compliant, such as o=MySite;p=MyOrg;a=adatum;c=us. For all other values of an address type, you can enter any text for the address space.

- AddressSpaceCost: The valid input range for the cost is from 1 through 100. A lower cost indicates a better route. If you omit the address space cost, a cost of 1 is assumed. If you enter a non-SMTP address space that contains the semicolon character (;), you must specify the address space cost.

If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("). For example, the following address space entries are equivalent:

- "SMTP:contoso.com;1"

- "contoso.com;1"

- "SMTP:contoso.com"

- contoso.com

You may specify multiple address spaces by separating the address spaces with commas, for example: contoso.com,fabrikam.com. If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("), for example: "contoso.com;2","fabrikam.com;3".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name for the Foreign connector.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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

### -IsScopedConnector
The IsScopedConnector parameter specifies the availability of the connector to other Mailbox servers. When the value of this parameter is $false, the connector can be used by all Mailbox servers in the Exchange organization. When the value of this parameter is $true, the connector can be used only by Mailbox servers in the same Active Directory site. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceTransportServers
The SourceTransportServers parameter specifies the names of the Mailbox servers that use this Foreign connector. Having a single Foreign connector homed on multiple servers provides fault tolerance and high availability if one of the Mailbox servers fails. The default value of this parameter is the name of the server on which this Foreign connector is first installed.

To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax: "<value1>","<value2>",..."<valueX>".

```yaml
Type: MultiValuedProperty
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
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/111b71d0-75f2-45b2-a9c9-b4ff51af57b7.aspx)
