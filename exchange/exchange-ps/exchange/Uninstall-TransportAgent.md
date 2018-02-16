---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Uninstall-TransportAgent

## SYNOPSIS
!!! Exchange Server 2010

Use the Uninstall-TransportAgent cmdlet to unregister a transport agent that's no longer needed on a computer that has the Edge Transport server role or the Hub Transport server role installed in a Microsoft Exchange Server 2010 organization.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Uninstall-TransportAgent cmdlet to unregister a transport agent from the Transport service on a Mailbox server, the Front End Transport service on a Client Access server, or from an Edge Transport server.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Uninstall-TransportAgent cmdlet to unregister transport agents from Exchange servers.

## SYNTAX

```
Uninstall-TransportAgent [-Identity] <TransportAgentObjectId> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [-TransportService <Hub | Edge | FrontEnd | MailboxSubmission | MailboxDelivery>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport agents" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Transport agents" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

You can install and uninstall transport agents in the following locations:

- The Transport service on Mailbox servers.

- The Front End Transport service on Mailbox servers.

- Edge Transport servers.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Uninstall-TransportAgent -Identity "Antivirus for Exchange"
```

This example uninstalls a fictitious antivirus application from an Edge Transport server or a Hub Transport server.

### Example 1 -------------------------- (Exchange Server 2013)
```
Uninstall-TransportAgent "Test App" -TransportService Hub
```

This example uninstalls a fictitious application named Test App from the Transport service on a Mailbox server.

### Example 1 -------------------------- (Exchange Server 2016)
```
Uninstall-TransportAgent "Test App" -TransportService Hub
```

This example uninstalls a fictitious application named Test App from the Transport service on a Mailbox server.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the display name of the transport agent to be uninstalled. The length of the name can't exceed 64 characters.



!!! Exchange Server 2016

The Identity parameter specifies the display name of the transport agent that you want to uninstall. If the value contains spaces, enclose the value in quotation marks.



```yaml
Type: TransportAgentObjectId
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

[Online Version](https://technet.microsoft.com/library/e0f9c8e5-2279-4e4d-8a32-108b8e8e9f00.aspx)

