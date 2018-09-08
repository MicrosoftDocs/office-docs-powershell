---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-UMIPGateway
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-UMIPGateway

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-UMIPGateway cmdlet to modify the configuration settings for a single Unified Messaging (UM) IP gateway or to return a list of configuration settings that can be modified on a specified UM IP gateway.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-UMIPGateway [-Identity] <UMIPGatewayIdParameter> [-Address <UMSmartHost>] [-Confirm]
 [-DelayedSourcePartyInfoEnabled <$true | $false>] [-DomainController <Fqdn>] [-ForceUpgrade]
 [-MessageWaitingIndicatorAllowed <$true | $false>] [-Name <String>] [-OutcallsAllowed <$true | $false>]
 [-Port <Int32>] [-Simulator <$true | $false>] [-Status <Enabled | Disabled | NoNewCalls>] [-WhatIf]
 [-IPAddressFamily <IPv4Only | IPv6Only | Any>] [<CommonParameters>]
```

## DESCRIPTION
The Set-UMIPGateway cmdlet modifies configuration settings for a specific UM IP gateway, for example, the IP address to the IP gateway. These modifications include allowing outgoing calls and controlling communications with a Session Initiation Protocol (SIP)-enabled IP Private Branch eXchange (PBX) or IP gateway.

It's possible that modifications to the UM IP gateway settings may disrupt communication between Mailbox servers and the SIP-enabled IP PBX or IP gateway. Modifications to a UM IP gateway should be performed only by an administrator who fully understands the implications of making configuration changes to the UM IP gateway.

After this task is completed, the parameters and values specified are configured on the UM IP gateway.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-UMIPGateway -Identity MyUMIPGateway -Address 10.10.10.1
```

This example modifies the IP address of the UM IP gateway MyUMIPGateway.

### -------------------------- Example 2 --------------------------
```
Set-UMIPGateway -Identity MyUMIPGateway -Address 10.10.10.1 -Status Disabled -OutcallsAllowed $false
```

This example prevents the UM IP gateway from accepting incoming calls and prevents outgoing calls.

### -------------------------- Example 3 --------------------------
```
Set-UMIPGateway -Identity MyUMIPGateway -Address fe80::39bd:88f7:6969:d223%11 -IPAddressFamily Any -Status Disabled -OutcallsAllowed $false
```

This example prevents the UM IP gateway MyUMIPGateway from accepting incoming calls and outgoing calls, sets an IPv6 address, and allows the UM IP gateway to use IPv4 and IPv6 addresses.

### -------------------------- Example 4 --------------------------
```
Set-UMIPGateway -Identity MyUMIPGateway -Simulator $true
```

This example enables the UM IP gateway to function as an IP gateway simulator and can be used with the Test-UMConnectivity cmdlet.

## PARAMETERS

### -Identity
The Identity parameter specifies the identifier for the UM IP gateway being modified. This parameter is the directory object ID for the UM IP gateway.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Address
The Address parameter specifies the IP address or the fully qualified domain name (FQDN) configured on the UM IP gateway or SIP-enabled IP PBX. An FQDN is required if the UM dial plan associated with the UM IP gateway is operating in SIP Secured or Secured mode. If an FQDN is used, verify that the Domain Name System (DNS) has been configured correctly.

```yaml
Type: UMSmartHost
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
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

### -DelayedSourcePartyInfoEnabled
The DelayedSourcePartyInfoEnabled parameter specifies whether Unified Messaging should delay the process of accepting an inbound call from the Voice over IP (VoIP) gateway if the corresponding SIP INVITE of the call contains no calling party and diversion information.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
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

### -ForceUpgrade
This parameter is available only in on-premises Exchange.

The ForceUpgrade switch specifies whether you're prompted for confirmation before a UM IP gateway object is upgraded.

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

### -MessageWaitingIndicatorAllowed
The MessageWaitingIndicatorAllowed parameter specifies whether to enable the UM IP gateway to allow SIP NOTIFY messages to be sent to users associated with a UM dial plan and the UM IP gateway. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the display name for the UM IP gateway. This display name is limited to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutcallsAllowed
The OutcallsAllowed parameter specifies whether to allow this UM IP gateway to be used for outgoing calls. This doesn't govern call transfers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port
The Port parameter specifies the IP port on which the IP gateway or IP PBX is listening. By default, it's port 5060. The range for this parameter is from 0 through 65535.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Simulator
The Simulator parameter specifies the simulator used for the UM IP gateway being viewed. A simulator allows a client to connect to the Mailbox server.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status parameter specifies whether to enable or disable the UM IP gateway.

```yaml
Type: Enabled | Disabled | NoNewCalls
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
The IPAddressFamily parameter specifies whether the UM IP gateway will use Internet Protocol version 4 (IPv4), IPv6, or both to communicate. If set to IPv4Only, the UM IP gateway will only use IPv4 to communicate. If set to IPv6Only, the UM IP gateway will only use IPv6. If set to Any, IPv6 will be used first, and then if necessary, it will fall back to IPv4. The default is IPv4Only.

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

[Online Version](https://technet.microsoft.com/library/1c9ecde5-36ec-42af-be9e-10eacdc98458.aspx)
