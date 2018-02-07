---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Install-TransportAgent

## SYNOPSIS
!!! Exchange Server 2010

Use the Install-TransportAgent cmdlet to register a transport agent on a computer that has the Edge Transport server role or the Hub Transport server role installed in a Microsoft Exchange Server 2010 organization.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Install-TransportAgent cmdlet to register a transport agent in the Transport service on a Mailbox server, in the Front End Transport service on a Client Access server, or on an Edge Transport server.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Install-TransportAgent cmdlet to register transport agents on Exchange servers.

## SYNTAX

```
Install-TransportAgent [-Name] <String> -AssemblyPath <String> -TransportAgentFactory <String> [-Confirm]
 [-DomainController <Fqdn>] [-WhatIf]
 [-TransportService <Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery>] [-EscalationTeam <String>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Install-TransportAgent cmdlet is used to register a transport agent for use on an Edge Transport server or a Hub Transport server.

Transport agents have full access to all e-mail messages that they encounter. Exchange puts no restrictions on a transport agent's behavior. Transport agents that are unstable or contain security flaws may affect the stability and security of Exchange. Therefore, you must only install transport agents that you fully trust and that have been fully tested in a test environment.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport agents" entry in the Transport Permissions topic.

!!! Exchange Server 2013

Transport agents have full access to all email messages that they encounter. Exchange puts no restrictions on a transport agent's behavior. Transport agents that are unstable or contain security flaws may affect the stability and security of Exchange. Therefore, you must only install transport agents that you fully trust and that have been fully tested in a test environment.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport agents" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

Transport agents have full access to all email messages that they encounter. Exchange puts no restrictions on a transport agent's behavior. Transport agents that are unstable or contain security flaws may affect the stability and security of Exchange. Therefore, you need to only install transport agents that you fully trust and that have been fully tested.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Install-TransportAgent -Name "Antivirus for Exchange" -TransportAgentFactory "vendor.exchange.avTransportAgentfactory" -AssemblyPath "c:\Program Files\Vendor\TransportAgent\AvTransportAgentFactory.dll"
```

This example shows how a fictitious antivirus application is installed on an Edge Transport server or a Hub Transport server.

### Example 1 -------------------------- (Exchange Server 2013)
```
Install-TransportAgent -Name "Test App" -TransportAgentFactory "vendor.exchange.avTransportAgentfactory" -AssemblyPath "c:\Program Files\Vendor\TransportAgent\AvTransportAgentFactory.dll" -TransportService Hub
```

This example shows how a fictitious application named Test App is installed in the Transport service on a Mailbox server.

### Example 1 -------------------------- (Exchange Server 2016)
```
Install-TransportAgent -Name "Test App" -TransportAgentFactory "vendor.exchange.avTransportAgentfactory" -AssemblyPath "c:\Program Files\Vendor\TransportAgent\AvTransportAgentFactory.dll" -TransportService Hub
```

This example shows how a fictitious application named Test App is installed in the Transport service on a Mailbox server.

## PARAMETERS

### -AssemblyPath
!!! Exchange Server 2010, Exchange Server 2013

The AssemblyPath parameter specifies the location of the transport agent Microsoft .NET assembly. Universal Naming Convention (UNC) file paths can't be used.



!!! Exchange Server 2016

The AssemblyPath parameter specifies the location of the transport agent Microsoft.NET assembly. Universal Naming Convention (UNC) file paths can't be used.



```yaml
Type: String
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
The Name parameter specifies the display name of the transport agent to be installed. The length of the name can't exceed 64 characters.

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

### -TransportAgentFactory
!!! Exchange Server 2010, Exchange Server 2013

The TransportAgentFactory parameter specifies the Microsoft .NET class type of the transport agent factory. The developer of the transport agent being installed provides the transport agent factory and related information. For more information, see the documentation provided by the developer of the transport agent.



!!! Exchange Server 2016

The TransportAgentFactory parameter specifies the Microsoft.NET class type of the transport agent factory. The developer of the transport agent being installed provides the transport agent factory and related information. For more information, see the documentation provided by the developer of the transport agent.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
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

### -TransportService
!!! Exchange Server 2013

The TransportService parameter specifies the transport service that you want to view or modify. Valid values for this parameter are:

- Hub for the Transport service on Mailbox servers.

- MailboxSubmission for the Mailbox Transport Submission service on Mailbox servers.

- MailboxDelivery for the Mailbox Transport Delivery service on Mailbox servers.

- FrontEnd for the Front End Transport service on Client Access servers.

- Edge on Edge Transport servers.



!!! Exchange Server 2016

The TransportService parameter specifies the transport service that you want to view or modify. Valid values for this parameter are:

- Hub for the Transport service on Mailbox servers.

- MailboxSubmission for the Mailbox Transport Submission service on Mailbox servers.

- MailboxDelivery for the Mailbox Transport Delivery service on Mailbox servers.

- FrontEnd for the Front End Transport service on Mailbox servers.

- Edge on Edge Transport servers.



```yaml
Type: Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EscalationTeam
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/520bfa38-f51a-400c-9ff3-46fa50222092.aspx)

