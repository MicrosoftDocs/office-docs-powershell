---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-UMIPGateway
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-UMIPGateway

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-UMIPGateway cmdlet to create a Unified Messaging (UM) IP gateway. A UM IP gateway is used to connect Unified Messaging servers to an IP gateway or a Session Initiation Protocol (SIP)-enabled IP Private Branch eXchange (PBX).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-UMIPGateway [-Name] <String> -Address <UMSmartHost> [-Confirm] [-DomainController <Fqdn>]
 [-GlobalCallRoutingScheme <None | E164 | GatewayGuid | Reserved1 | Reserved2 | Reserved3>]
 [-UMDialPlan <UMDialPlanIdParameter>] [-WhatIf]
 [-IPAddressFamily <IPv4Only | IPv6Only | Any>] [<CommonParameters>]
```

## DESCRIPTION
The New-UMIPGateway cmdlet creates a UM IP gateway. A UM IP gateway has organization-wide scope and references a single physical IP gateway. The UM IP gateway that's created is used to establish a connection to an IP gateway or a SIP-enabled IP PBX. After this task is completed, a new UM IP gateway is created.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-UMIPGateway -Identity MyUMIPGateway -Address 10.10.10.1
```

This example creates the UM IP gateway MyUMIPGateway that enables a Mailbox server to start accepting calls from an IP gateway with an IP address of 10.10.10.1.

### -------------------------- Example 2 --------------------------
```
New-UMIPGateway -Identity MyUMIPGateway -Address fe80::39bd:88f7:6969:d223%11 -IPAddressFamily Any -Status Disabled -OutcallsAllowed $false
```

This example creates the UM IP gateway MyUMIPGateway and prevents it from accepting incoming calls and outgoing calls, sets an IPv6 address and allows the UM IP gateway to use IPv4 and IPV6 addresses.

### -------------------------- Example 3 --------------------------
```
New-UMIPGateway -Identity MyUMIPGateway -Address "MyUMIPGateway.contoso.com"
```

This example creates the UM IP gateway MyUMIPGateway that enables a Mailbox server to start accepting calls from an IP gateway with an FQDN of MyUMIPGateway.contoso.com.

## PARAMETERS

### -Address
The Address parameter specifies the IP address configured on the IP gateway or SIP-enabled IP PBX.

```yaml
Type: UMSmartHost
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the display name for the UM IP gateway. The name for the new UM IP gateway can contain up to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

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

### -GlobalCallRoutingScheme
This parameter is available or functional only in Exchange Server 2010.

The GlobalCallRoutingScheme parameter specifies whether the IP gateway can accept calls for UM-enabled users and auto attendant numbers included in the global routing database. If the setting is E.164, the IP gateway accepts the call.

```yaml
Type: None | E164 | GatewayGuid | Reserved1 | Reserved2 | Reserved3
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies the UM dial plan to be associated with the UM IP gateway.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressFamily
The IPAddressFamily parameter specifies whether the UM IP gateway uses Internet Protocol version 4 (IPv4), IPv6, or both to communicate. If set to IPv4Only, the UM IP gateway only uses IPv4 to communicate. If set to IPv6Only, the UM IP gateway only uses IPv6. If set to Any, IPv6 will be used first, and then, if necessary, it will fallback to IPv4. The default is IPv4Only.

```yaml
Type: IPv4Only | IPv6Only | Any
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/598774bf-2a38-4779-be5a-9955c6b5ef4b.aspx)
