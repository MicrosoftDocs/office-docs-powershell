---
applicable: Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-umcallroutersettings
schema: 2.0.0
title: Set-UMCallRouterSettings
---

# Set-UMCallRouterSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-UMCallRouterSettings cmdlet to modify the configuration of the Microsoft Exchange Unified Messaging Call Router service. This service exists on Exchange servers that have the Client Access server role installed, and is used by telephony clients to connect to Exchange.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-UMCallRouterSettings [[-Server] <ServerIdParameter>]
 [-Confirm]
 [-DialPlans <MultiValuedProperty>]
 [-DomainController <Fqdn>]
 [-IPAddressFamily <IPAddressFamily>]
 [-IPAddressFamilyConfigurable <Boolean>]
 [-MaxCallsAllowed <Int32>]
 [-SipTcpListeningPort <Int32>]
 [-SipTlsListeningPort <Int32>]
 [-UMStartupMode <UMStartupMode>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UMCallRouterSettings -DialPlans MySIPDialPlan -IPAddressFamily Any -Server MyUMCallRouter.northwindtraders.com -UMStartupMode TLS
```

This example creates the following configuration on the Exchange server named MyUMCallRouter:

- Adds the server to the UM SIP dial plan MySIPDialPlan.
- Enables the Microsoft Exchange Unified Messaging Call Router service to accept both IPv4 and IPv6 data packets.
- Sets the maximum number of incoming voice, fax, auto attendant and Outlook Voice Access calls to 150.
- Enables the Microsoft Exchange Unified Messaging Call Router service to start up using TLS mode.

### Example 2
```powershell
Set-UMCallRouterSettings -DialPlans $null -Server UMCallRouter001.contoso.com
```

This example removes the Exchange server named UMCallRouter001 from all UM SIP dial plans.

## PARAMETERS

### -Server

> Applicable: Exchange Server 2013, Exchange Server 2016

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2013, Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialPlans

> Applicable: Exchange Server 2013, Exchange Server 2016

The DialPlans parameter specifies the dial plan used by the Microsoft Exchange Unified Messaging Call Router service. The Exchange server only needs to be associated with a UM dial plan if Lync Server 2010, Lync Server 2013, or Skype for Business Server 2015 is used in your organization. To remove an Exchange server from a dial plan, use $null. The default is no dial plans assigned.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressFamily

> Applicable: Exchange Server 2013, Exchange Server 2016

The IPAddressFamily parameter specifies whether the UM IP gateway will use Internet Protocol version 4 (IPv4), IPv6, or both to communicate. If set to IPv4Only, the UM IP gateway only uses IPv4 to communicate. If set to IPv6Only, the UM IP gateway only uses IPv6. If set to Any, IPv6 is used first, and then if necessary, it falls back to IPv4. The default is Any.

```yaml
Type: IPAddressFamily
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressFamilyConfigurable

> Applicable: Exchange Server 2013, Exchange Server 2016

The IPAddressFamilyConfigurable parameter specifies whether you're able to set the IPAddressFamily parameter to IPv6Only or Any. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCallsAllowed

> Applicable: Exchange Server 2013, Exchange Server 2016

This parameter has been deprecated and is no longer used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipTcpListeningPort

> Applicable: Exchange Server 2013, Exchange Server 2016

The SipTcpListeningPort parameter specifies the TCP port that's used by the Microsoft Exchange Unified Messaging Call Router service to receive incoming calls. This TCP port is used when a UM dial plan isn't configured to use SIP Secured or Secured mode. The default is port 5060.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipTlsListeningPort

> Applicable: Exchange Server 2013, Exchange Server 2016

The SipTlsListeningPort parameter specifies the Transport Layer Security (TLS) port that's used by the Microsoft Exchange Unified Messaging Call Router service to receive incoming calls. This TLS port is used when a UM dial plan is configured to use SIP Secured or Secured mode. The default is port 5061.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMStartupMode

> Applicable: Exchange Server 2013, Exchange Server 2016

The UMStartupMode parameter specifies whether the Microsoft Exchange Unified Messaging Call Router service starts up in TCP, TLS, or Dual mode. If the Exchange server isn't associated with any UM dial plans or is being added to UM dial plans that have different security settings, you should choose Dual mode. In Dual mode, the Microsoft server can listen on ports 5060 and 5061 at the same time. If the startup mode is changed, the Microsoft Exchange Unified Messaging Call Router service must be restarted.

```yaml
Type: UMStartupMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2013, Exchange Server 2016

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
