---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Test-UMConnectivity
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Test-UMConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-UMConnectivity cmdlet to test the operation of Unified Messaging (UM) servers.

**Note**: This cmdlet works best in Exchange 2010. In Exchange 2013 or later, the functionality of this cmdlet has been replaced by Managed Availability. For the best results, use the Invoke-MonitoringProbe cmdlet and specify the relevant active monitor probe instead of using this cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Test-UMConnectivity -Phone <String> -PIN <String> -TUILogon <$true | $false>
 -UMDialPlan <UMDialPlanIdParameter> [-CertificateThumbprint <String>] [-Confirm] [-DomainController <Fqdn>]
 [-ListenPort <Int32>] [-MediaSecured <$true | $false>] [-MonitoringContext <$true | $false>]
 [-RemotePort <Int32>] [-Secured <$true | $false>] [-Timeout <Int32>] [-WhatIf] -ResetPIN <$true | $false>
 -TUILogonAll <$true | $false> [<CommonParameters>]
```

### Set5
```
Test-UMConnectivity -Phone <String> -UMIPGateway <UMIPGatewayIdParameter> [-CertificateThumbprint <String>]
 [-Confirm] [-DiagDtmfDurationInMilisecs <Int32>] [-DiagDtmfSequence <String>]
 [-DiagInitialSilenceInMilisecs <Int32>] [-DiagInterDtmfDiffGapInMilisecs <String>]
 [-DiagInterDtmfGapInMilisecs <Int32>] [-DomainController <Fqdn>] [-From <String>] [-ListenPort <Int32>]
 [-MediaSecured <$true | $false>] [-MonitoringContext <$true | $false>] [-Secured <$true | $false>]
 [-Timeout <Int32>] [-WhatIf] -PIN <String> -TUILogon <$true | $false> -UMDialPlan <UMDialPlanIdParameter>
 [-RemotePort <Int32>] -ResetPIN <$true | $false> [<CommonParameters>]
```

### Set4
```
Test-UMConnectivity -ResetPIN <$true | $false> [-Confirm] [-DomainController <Fqdn>]
 [-MonitoringContext <$true | $false>] [-WhatIf] -Phone <String> -UMIPGateway <UMIPGatewayIdParameter>
 [-CertificateThumbprint <String>] [-DiagDtmfDurationInMilisecs <Int32>] [-DiagDtmfSequence <String>]
 [-DiagInitialSilenceInMilisecs <Int32>] [-DiagInterDtmfDiffGapInMilisecs <String>]
 [-DiagInterDtmfGapInMilisecs <Int32>] [-From <String>] [-ListenPort <Int32>] [-MediaSecured <$true | $false>]
 [-Secured <$true | $false>] [-Timeout <Int32>] -PIN <String> -TUILogon <$true | $false>
 -UMDialPlan <UMDialPlanIdParameter> [-RemotePort <Int32>] [<CommonParameters>]
```

### Set2
```
Test-UMConnectivity -TUILogonAll <$true | $false> [-CertificateThumbprint <String>] [-Confirm]
 [-DomainController <Fqdn>] [-ListenPort <Int32>] [-MediaSecured <$true | $false>]
 [-MonitoringContext <$true | $false>] [-RemotePort <Int32>] [-Secured <$true | $false>] [-Timeout <Int32>]
 [-WhatIf] -Phone <String> -UMIPGateway <UMIPGatewayIdParameter> [-DiagDtmfDurationInMilisecs <Int32>]
 [-DiagDtmfSequence <String>] [-DiagInitialSilenceInMilisecs <Int32>]
 [-DiagInterDtmfDiffGapInMilisecs <String>] [-DiagInterDtmfGapInMilisecs <Int32>] [-From <String>]
 [<CommonParameters>]
```

### Set1
```
Test-UMConnectivity [-CertificateThumbprint <String>] [-Confirm] [-DomainController <Fqdn>]
 [-ListenPort <Int32>] [-MediaSecured <$true | $false>] [-MonitoringContext <$true | $false>]
 [-RemotePort <Int32>] [-Secured <$true | $false>] [-Timeout <Int32>] [-WhatIf] [-CallRouter]
 [<CommonParameters>]
```

## DESCRIPTION
Two diagnostic tests are designed to test the operation of the Mailbox server software (mode 1) and the operation of the whole system that includes the connected telephony components (mode 2).

The Test-UMConnectivity cmdlet can be used to test the operation of a Mailbox server and related connected telephony equipment. When you run this cmdlet and include the UMIPGateway parameter, the Mailbox server tests the full end-to-end operation of the Unified Messaging system. This test includes the telephony components connected to the Mailbox server, such as IP gateways, Private Branch eXchanges (PBXs) and cabling. If the UMIPGateway parameter isn't specified, the Mailbox server tests only the operation of the Unified Messaging components that are installed and configured on the server.

When you run this cmdlet in an on-premises Unified Messaging deployment, you need to create a UM IP gateway object for the computer or server that the cmdlet is testing. When you create the UM IP gateway object, you must configure it with a fully qualified domain name (FQDN) and that FQDN must match the name of the computer running this cmdlet.

After this task is complete, the cmdlet will have tested the operation of the Mailbox server and related telephony components.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-UMConnectivity
```

This example performs connectivity and operational tests on the local Mailbox server, and then displays the Voice over IP (VoIP) connectivity information.

### -------------------------- Example 2 --------------------------
```
Test-UMConnectivity -UMIPGateway MyUMIPGateway -Phone 56780 -Secured $false
```

This example tests the ability of the local Mailbox server to use an unsecured TCP connection instead of a secured mutual TLS connection to place a call through the UM IP gateway MyUMIPGateway by using the telephone number 56780.

### -------------------------- Example 3 --------------------------
```
Test-UMConnectivity -Phone sip:sipdp.contoso.com@contoso.com -UMIPGateway MyUMIPGateway -Secured $true -From sip:user1@contoso.com -MediaSecured $true
```

This example tests a SIP dial plan by using a SIP URI. This example can be used in an environment that includes Lync Server or Skype for Business Server.

## PARAMETERS

### -Phone
The Phone parameter specifies the telephone number or Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) used when the test call is redirected. The extension number should be configured in the PBX to forward calls to the UM hunt group.

```yaml
Type: String
Parameter Sets: Set3, Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PIN
The PIN parameter specifies the PIN associated with the UM-enabled mailbox.

```yaml
Type: String
Parameter Sets: Set3, Set5, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetPIN
The ResetPIN parameter specifies whether to generate or regenerate a new PIN for all the test mailboxes in the current site.

```yaml
Type: $true | $false
Parameter Sets: Set3, Set5, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUILogon
The TUILogon parameter specifies whether the cmdlet tries to log on to one or more UM-enabled mailboxes. The mailboxes must be UM-enabled and associated with the UM dial plan to which the Mailbox server running the Microsoft Exchange Unified Messaging service belongs. The default setting is $false.

```yaml
Type: $true | $false
Parameter Sets: Set3, Set5, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUILogonAll
The TUILogonAll parameter specifies whether to try to connect to all test mailboxes in the current Active Directory site. The default setting is $false. The accounts that are tested must be generated by calling the New-TestCasConnectivityUser.ps1 script, and the corresponding mailboxes must be UM-enabled. Otherwise, no action is taken.

```yaml
Type: $true | $false
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies the UM dial plan to be tested. This parameter must be used with the TUILogon parameter.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: Set3, Set5, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMIPGateway
The UMIPGateway parameter specifies the name of the UM IP gateway or IP PBX to use for the outgoing test call.

```yaml
Type: UMIPGatewayIdParameter
Parameter Sets: Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CertificateThumbprint
The CertificateThumbprint parameter specifies the certificate thumbprint used for SIP Secured and Secured mode.

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

### -DiagDtmfDurationInMilisecs
The DiagDtmfDurationInMilisecs parameter specifies the duration of each digit sent.

```yaml
Type: Int32
Parameter Sets: Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagDtmfSequence
The DiagDtmfSequence parameter specifies the sequence of digits sent.

```yaml
Type: String
Parameter Sets: Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagInitialSilenceInMilisecs
The DiagInitialSilenceInMilisecs parameter specifies the time period in milliseconds that the cmdlet pauses before the digit sequence is sent.

```yaml
Type: Int32
Parameter Sets: Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagInterDtmfDiffGapInMilisecs
The DiagInterDtmfDiffGapInMilisecs parameter specifies whether to customize the time between the digits in the diagnostic sequence. This is a comma-delimited list that can accept null entries. This should include multiple values.

```yaml
Type: String
Parameter Sets: Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiagInterDtmfGapInMilisecs
The DiagInterDtmfGapInMilisecs parameter specifies the time in milliseconds between each digit sent in the digit sequence. This is a single value.

```yaml
Type: Int32
Parameter Sets: Set5, Set4, Set2
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

### -From
The From parameter specifies the SIP URI or SIP address that the call originated from. It's used only when you use the Phone parameter. The default setting is the SIP URI specified when you use the Phone parameter.

```yaml
Type: String
Parameter Sets: Set5, Set4, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ListenPort
The ListenPort parameter specifies the IP port number on which to listen. If not specified, IP port 9000 is used.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaSecured
The MediaSecured parameter specifies whether to use Secure RTP or RTP (unsecured) mode.

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

### -MonitoringContext
The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values for this parameter are $true or $false. The default value is $false. If you specify the value $true, the monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).

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

### -RemotePort
The RemotePort parameter specifies the port used for the call. If not specified, the default is port 5060 for Transmission Control Protocol (TCP) and 5061 for mutual Transport Layer Security (TLS).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Secured
The Secured parameter specifies whether the test is run in SIP Secured mode.

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

### -Timeout
The Timeout parameter specifies the length of time in seconds to wait for the test operation to finish. The default is 600 seconds. You can't set this parameter with a value of less than 60 seconds. However, we recommend that you always configure this parameter with a value of 60 seconds or more. The maximum value for this parameter is 1800 seconds.

```yaml
Type: Int32
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

### -CallRouter
The CallRouter switch specifies whether to test the Microsoft Exchange Unified Messaging Call Router service (front-end). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
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

[Online Version](https://technet.microsoft.com/library/4e8f5561-a098-4bfe-94e1-baf7c24b01bb.aspx)
