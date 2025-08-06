---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/test-umconnectivity
schema: 2.0.0
title: Test-UMConnectivity
---

# Test-UMConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-UMConnectivity cmdlet to test the operation of Unified Messaging (UM) servers.

**Note**: This cmdlet works best in Exchange 2010. In later versions of Exchange, the functionality of this cmdlet is replaced by Managed Availability. For the best results, use the Invoke-MonitoringProbe cmdlet and specify the relevant active monitor probe instead of using this cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### TuiLogonSpecific
```
Test-UMConnectivity -Phone <String> -PIN <String> -TUILogon <Boolean> -UMDialPlan <UMDialPlanIdParameter>
 [-CertificateThumbprint <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ListenPort <Int32>]
 [-MediaSecured <Boolean>]
 [-MonitoringContext <Boolean>]
 [-RemotePort <Int32>]
 [-Secured <Boolean>]
 [-Timeout <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

### EndToEnd
```
Test-UMConnectivity -Phone <String> -UMIPGateway <UMIPGatewayIdParameter>
 [-DiagDtmfDurationInMilisecs <Int32>]
 [-DiagDtmfSequence <String>]
 [-DiagInitialSilenceInMilisecs <Int32>]
 [-DiagInterDtmfDiffGapInMilisecs <String>]
 [-DiagInterDtmfGapInMilisecs <Int32>]
 [-From <String>]
 [-CertificateThumbprint <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ListenPort <Int32>]
 [-MediaSecured <Boolean>]
 [-MonitoringContext <Boolean>]
 [-Secured <Boolean>]
 [-Timeout <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

### PinReset
```
Test-UMConnectivity -ResetPIN <Boolean>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MonitoringContext <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

### TuiLogonGeneral
```
Test-UMConnectivity -TUILogonAll <Boolean>
 [-CertificateThumbprint <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ListenPort <Int32>]
 [-MediaSecured <Boolean>]
 [-MonitoringContext <Boolean>]
 [-RemotePort <Int32>]
 [-Secured <Boolean>]
 [-Timeout <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

### LocalLoop
```
Test-UMConnectivity [-CallRouter]
 [-CertificateThumbprint <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ListenPort <Int32>]
 [-MediaSecured <Boolean>]
 [-MonitoringContext <Boolean>]
 [-RemotePort <Int32>]
 [-Secured <Boolean>]
 [-Timeout <Int32>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Two diagnostic tests are designed to test the operation of the Mailbox server software (mode 1) and the operation of the whole system that includes the connected telephony components (mode 2).

The Test-UMConnectivity cmdlet can be used to test the operation of a Mailbox server and related connected telephony equipment. When you run this cmdlet and include the UMIPGateway parameter, the Mailbox server tests the full end-to-end operation of the Unified Messaging system. This test includes the telephony components connected to the Mailbox server, such as IP gateways, Private Branch eXchanges (PBXs) and cabling. If the UMIPGateway parameter isn't specified, the Mailbox server tests only the operation of the Unified Messaging components that are installed and configured on the server.

When you run this cmdlet in an on-premises Unified Messaging deployment, you need to create a UM IP gateway object for the computer or server that the cmdlet is testing. When you create the UM IP gateway object, you must configure it with a fully qualified domain name (FQDN) and that FQDN must match the name of the computer running this cmdlet.

After this task is complete, the cmdlet tested the operation of the Mailbox server and related telephony components.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-UMConnectivity
```

This example performs connectivity and operational tests on the local Mailbox server, and then displays the Voice over IP (VoIP) connectivity information.

### Example 2
```powershell
Test-UMConnectivity -UMIPGateway MyUMIPGateway -Phone 56780 -Secured $false
```

This example tests the ability of the local Mailbox server to use an unsecured TCP connection instead of a secured mutual TLS connection to place a call through the UM IP gateway MyUMIPGateway by using the telephone number 56780.

### Example 3
```powershell
Test-UMConnectivity -Phone sip:sipdp.contoso.com@contoso.com -UMIPGateway MyUMIPGateway -Secured $true -From sip:user1@contoso.com -MediaSecured $true
```

This example tests a SIP dial plan by using a SIP URI. This example can be used in an environment that includes Lync Server or Skype for Business Server.

## PARAMETERS

### -Phone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Phone parameter specifies the telephone number or Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) used when the test call is redirected. The extension number should be configured in the PBX to forward calls to the UM hunt group.

```yaml
Type: String
Parameter Sets: TuiLogonSpecific, EndToEnd
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PIN

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The PIN parameter specifies the PIN associated with the UM-enabled mailbox.

```yaml
Type: String
Parameter Sets: TuiLogonSpecific
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetPIN

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ResetPIN parameter specifies whether to generate or regenerate a new PIN for all the test mailboxes in the current site.

```yaml
Type: Boolean
Parameter Sets: PinReset
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUILogon

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The TUILogon parameter specifies whether the cmdlet tries to log on to one or more UM-enabled mailboxes. The mailboxes must be UM-enabled and associated with the UM dial plan to which the Mailbox server running the Microsoft Exchange Unified Messaging service belongs. The default setting is $false.

```yaml
Type: Boolean
Parameter Sets: TuiLogonSpecific
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUILogonAll

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The TUILogonAll parameter specifies whether to try to connect to all test mailboxes in the current Active Directory site. The default setting is $false. The accounts that are tested must be generated by calling the New-TestCasConnectivityUser.ps1 script, and the corresponding mailboxes must be UM-enabled. Otherwise, no action is taken.

```yaml
Type: Boolean
Parameter Sets: TuiLogonGeneral
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMDialPlan parameter specifies the UM dial plan to be tested. This parameter must be used with the TUILogon parameter.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: TuiLogonSpecific
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIPGateway

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The UMIPGateway parameter specifies the name of the UM IP gateway or IP PBX to use for the outgoing test call.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: EndToEnd
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallRouter

> Applicable: Exchange Server 2013, Exchange Server 2016

The CallRouter switch specifies whether to test the Microsoft Exchange Unified Messaging Call Router service (front-end). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The CertificateThumbprint parameter specifies the certificate thumbprint used for SIP Secured and Secured mode.

```yaml
Type: String
Parameter Sets: TuiLogonSpecific, EndToEnd, TuiLogonGeneral, LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -DiagDtmfDurationInMilisecs

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DiagDtmfDurationInMilisecs parameter specifies the duration of each digit sent.

```yaml
Type: Int32
Parameter Sets: EndToEnd
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagDtmfSequence

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DiagDtmfSequence parameter specifies the sequence of digits sent.

```yaml
Type: String
Parameter Sets: EndToEnd
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagInitialSilenceInMilisecs

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DiagInitialSilenceInMilisecs parameter specifies the time period in milliseconds that the cmdlet pauses before the digit sequence is sent.

```yaml
Type: Int32
Parameter Sets: EndToEnd
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagInterDtmfDiffGapInMilisecs

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DiagInterDtmfDiffGapInMilisecs parameter specifies whether to customize the time between the digits in the diagnostic sequence. This is a comma-delimited list that can accept null entries. This should include multiple values.

```yaml
Type: String
Parameter Sets: EndToEnd
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagInterDtmfGapInMilisecs

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DiagInterDtmfGapInMilisecs parameter specifies the time in milliseconds between each digit sent in the digit sequence. This is a single value.

```yaml
Type: Int32
Parameter Sets: EndToEnd
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

### -From

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The From parameter specifies the SIP URI or SIP address that the call originated from. It's used only when you use the Phone parameter. The default setting is the SIP URI specified when you use the Phone parameter.

```yaml
Type: String
Parameter Sets: EndToEnd
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListenPort

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The ListenPort parameter specifies the IP port number on which to listen. If not specified, IP port 9000 is used.

```yaml
Type: Int32
Parameter Sets: TuiLogonSpecific, EndToEnd, TuiLogonGeneral, LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaSecured

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The MediaSecured parameter specifies whether to use Secure RTP or RTP (unsecured) mode.

```yaml
Type: Boolean
Parameter Sets: TuiLogonSpecific, EndToEnd, TuiLogonGeneral, LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values are:

- $true: Monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).
- $false: Monitoring events and performance counters aren't included in the command results. This value is the default.

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

### -RemotePort

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The RemotePort parameter specifies the port used for the call. If not specified, the default is port 5060 for Transmission Control Protocol (TCP) and 5061 for mutual Transport Layer Security (TLS).

```yaml
Type: Int32
Parameter Sets: TuiLogonSpecific, TuiLogonGeneral, LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Secured

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Secured parameter specifies whether the test is run in SIP Secured mode.

```yaml
Type: Boolean
Parameter Sets: TuiLogonSpecific, EndToEnd, TuiLogonGeneral, LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Timeout parameter specifies the length of time in seconds to wait for the test operation to finish. The default is 600 seconds. You can't set this parameter with a value of less than 60 seconds. However, we recommend that you always configure this parameter with a value of 60 seconds or more. The maximum value for this parameter is 1800 seconds.

```yaml
Type: Int32
Parameter Sets: TuiLogonSpecific, EndToEnd, TuiLogonGeneral, LocalLoop
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
