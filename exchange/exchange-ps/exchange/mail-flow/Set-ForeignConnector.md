---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Set-ForeignConnector
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-ForeignConnector

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ForeignConnector cmdlet to modify an existing Foreign connector in the Transport service of a Mailbox server.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ForeignConnector [-Identity] <ForeignConnectorIdParameter> [-AddressSpaces <MultiValuedProperty>]
 [-Comment <String>] [-Confirm] [-DomainController <Fqdn>] [-DropDirectory <String>]
 [-DropDirectoryQuota <Unlimited>] [-Enabled <$true | $false>] [-Force] [-IsScopedConnector <$true | $false>]
 [-MaxMessageSize <Unlimited>] [-Name <String>] [-RelayDsnRequired <$true | $false>]
 [-SourceTransportServers <MultiValuedProperty>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
A Foreign connector uses a Drop directory in the Transport service of a Mailbox server to send messages to a local messaging server that doesn't use SMTP as its primary transport mechanism. These messaging servers are known as foreign gateway servers. Third-party fax gateway servers are examples of foreign gateway servers. The address spaces assigned to a Foreign connector can be SMTP or non-SMTP.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ForeignConnector "Fax Connector" -MaxMessageSize 10MB
```

This example configures a 10 MB message size limit on the existing Foreign connector named Fax Connector.

## PARAMETERS

### -Identity
The Identity parameter specifies the Foreign connector that you want to modify. The Identity parameter can take any of the following values for the Foreign connector object:

- GUID

- Connector name

- ServerName\\ConnectorName

```yaml
Type: ForeignConnectorIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AddressSpaces
The AddressSpaces parameter specifies the domain names to which the Foreign connector sends messages. The complete syntax for entering each address space is as follows: \<AddressSpaceType\>:\<AddressSpace\>;\<AddressSpaceCost\>

- AddressSpaceType: The address space type may be SMTP, X400, or any other text string. If you omit the address space type, an SMTP address space type is assumed.

- AddressSpace: For SMTP address space types, the address space that you enter must be RFC 1035-compliant. For example, \*, \*.com, and \*.contoso.com are permitted, but \*contoso.com isn't permitted. For X.400 address space types, the address space that you enter must be RFC 1685-compliant, such as o=MySite;p=MyOrg;a=adatum;c=us. For all other values of address type, you can enter any text for the address space.

- AddressSpaceCost : The valid input range for the cost is from 1 through 100. A lower cost indicates a better route. If you omit the address space cost, a cost of 1 is assumed. If you enter a non-SMTP address space that contains a semicolon (;), you must specify the address space cost.

If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("). For example, the following address space entries are equivalent:

- "SMTP:contoso.com;1"

- "contoso.com;1"

- "SMTP:contoso.com"

- contoso.com

You may specify multiple address spaces by separating the address spaces with commas, for example: contoso.com,fabrikam.com. If you specify the address space type or the address space cost, you must enclose the address space in quotation marks ("), for example: "contoso.com;2","fabrikam.com;3".

To add or remove one or more address space values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DropDirectory
The DropDirectory parameter specifies the name of the Drop directory used by this Foreign connector. All outbound messages sent to address spaces defined by this Foreign connector are put in the specified Drop directory. The location of the Drop directory for each Foreign connector is controlled by the following two items:

- RootDropDirectoryPath parameter in the Set-TransportService cmdlet: This option is used for all Foreign connectors that exist on the Mailbox server. The value of the RootDropDirectoryPath parameter may be a local path or a Universal Naming Convention (UNC) path to a remote server.

- DropDirectory parameter in the Set-ForeignConnector cmdlet: This value is set for each Foreign Connector that exists on the server.

By default, the RootDropDirectoryPath parameter is blank. This indicates the value of RootDropDirectoryPath is the Exchange 2010 installation folder. The default Exchange 2010 installation folder is C:\\Program Files\\Microsoft\\Exchange Server\\. By default, the value of the DropDirectory parameter is the name of the Foreign connector.

If the value of the DropDirectory parameter doesn't contain absolute path information, the location of the Drop directory is defined by the combination of the DropDirectory parameter and the RootDropDirectoryPath parameter. If the value of the DropDirectory parameter contains absolute path information, the value of the RootDropDirectoryPath must be unspecified. The location of the Drop directory is defined only by the value of the DropDirectory parameter.

The Drop directory isn't created for you. Therefore, you have to manually create each Drop directory folder.

The Drop directory must have the following permissions assigned to it:

- Network Service: Full Control

- System: Full Control

- Administrators: Full Control

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DropDirectoryQuota
The DropDirectoryQuota parameter specifies the maximum size of all message files in the Drop directory. When the specified value is reached, no new message files can be copied into the Drop directory until the existing messages are delivered and deleted.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 1 through 2147483647 bytes. If you enter a value of unlimited, no message size limit is imposed on the Drop directory. The default value is unlimited.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether to enable the Foreign connector. The valid values are $true or $false. The default value is $true.

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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

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

### -MaxMessageSize
The MaxMessageSize parameter specifies the maximum size of a message that can pass through this Foreign connector.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

If you enter a value of unlimited, no message size limit is imposed on this Foreign connector. The default value is unlimited. The valid input range for this parameter is from 0 through 2147483647 kilobytes. If you set the value of the MaxMessageSize parameter to 0, you effectively disable the Foreign connector. However, if you set the value of the MaxMessageSize parameter to 0 when the value of the Enabled attribute is $true, you generate event log errors. The preferred method to disable the Foreign connector is to use the Enabled parameter.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a descriptive name for the Foreign connector.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RelayDsnRequired
The RelayDsnRequired parameter specifies whether a Relay delivery status notification (DSN) is required by the Foreign connector when messages are written to the Drop directory. The valid input values for this parameter are $true or $false. The default value is $false.

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
The SourceTransportServers parameter specifies the names of the Mailbox servers that use this Foreign connector. Having a single Foreign connector homed on multiple Mailbox servers running the Transport service provides fault tolerance and high availability if one of the servers fails. The default value of this parameter is the name of the Mailbox server on which this Foreign connector was first installed.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

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

[Online Version](https://technet.microsoft.com/library/93d43160-f34a-418c-86b7-61c25fd9e847.aspx)
