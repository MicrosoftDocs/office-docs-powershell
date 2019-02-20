---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Test-OutlookConnectivity
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Test-OutlookConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-OutlookConnectivity cmdlet to test end-to-end Microsoft Outlook client connectivity in the Microsoft Exchange organization. This includes testing for both Outlook Anywhere (RPC over HTTP) and MAPI over HTTP connections.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Probe
```
Test-OutlookConnectivity [-ProbeIdentity] <String> [-Credential <PSCredential>] [-Hostname <String>]
 [-MailboxId <MailboxIdParameter>] [-RunFromServerId <ServerIdParameter>] [-TimeOutSeconds <String>]
 [<CommonParameters>]
```

### Protocol
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -Protocol <HTTP | TCP | WS>
 [-Archive <$true | $false>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf] [<CommonParameters>]
```

### RpcProxyServer
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -GetDefaultsFromAutodiscover <$true | $false>
 [-Archive <$true | $false>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-RpcAuthenticationType <Negotiate | NTLM | Kerberos>]
 [-RpcClientAccessServer <ClientAccessServerIdParameter>]
 [-RpcProxyAuthenticationType <Basic | NTLM | Negotiate>]
 [-RpcProxyServer <ServerIdParameter>]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf] [<CommonParameters>]

 [-MonitoringContext]
```

### RpcTestType
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -RpcTestType <Array | Server>
 [-Archive <$true | $false>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-RpcAuthenticationType <Negotiate | NTLM | Kerberos>]
 [-RpcClientAccessServer <ClientAccessServerIdParameter>]
 [-RpcProxyAuthenticationType <Basic | NTLM | Negotiate>]
 [-RpcProxyTestType <External | Internal>]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf] [<CommonParameters>]
```

### WSTestType
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -WSTestType <Unknown | Internal | External>
 [-Archive <$true | $false>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Running the Test-OutlookConnectivity cmdlet validates an Outlook connection defined by the provided parameters. The command is able to validate a single mailbox.

The Test-OutlookConnectivity cmdlet runs the same process as the monitoring probes. The Microsoft Exchange Health Manager (MSExchangeHM) service must be running and have created the Outlook probes on the machine that will be tested. You need to select one of the Outlook probe identities to run the test. Use the Get-MonitoringItemIdentity (https://go.microsoft.com/fwlink/p/?LinkId=510841) cmdlet to see what probes are active.

This example lists the probes running in the backend services on a Mailbox server.

This example lists the probes running in the client access services on a Mailbox server.

For more information on probes and the monitoring framework, see Managed Availability (https://go.microsoft.com/fwlink/p/?LinkId=510838), Managed Availability and Server Health (https://go.microsoft.com/fwlink/p/?LinkId=510839), and Customizing Managed Availability (https://go.microsoft.com/fwlink/p/?LinkId=510840)

By default, the cmdlet uses the test monitoring account attached to the specified probe. You may enter a different mailbox instead via the MailboxId parameter. The options and results follow.

- MailboxId and Credential are not specified: Generic connectivity test against a test mailbox using the system's test credentials.

- MailboxId is specified, Credential is not: Connectivity test to the specific mailbox using the system's test credentials.

- MailboxId and Credential are both specified: You get a connectivity test to the specific mailbox, and also a test that the credentials provided are valid for that mailbox

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-OutlookConnectivity -Protocol:HTTP -GetDefaultsFromAutoDiscover:$true
```

In Exchange 2010, this example tests the most common end-to-end Outlook connectivity scenario for Outlook Anywhere. This includes testing for connectivity through the Autodiscover service, creating a user profile, and logging on to the user mailbox. All of the required values are retrieved from the Autodiscover service. Because the Identity parameter isn't specified, the command uses the temporary test user that you've created using the New-TestCasConnectivityUser.ps1 script. This example command can be run to test TCP/IP connectivity by setting the Protocol parameter to RPC.

### -------------------------- Example 2 --------------------------
```
Test-OutlookConnectivity -ProbeIdentity "OutlookRpcSelfTestProbe"
```

In Exchange 2013 or later, this example runs an OutlookRpcSelfTestProbe on the mailbox server that you're currently connected to.

### -------------------------- Example 3 --------------------------
```
Test-OutlookConnectivity -RpcProxyTestType:Internal -RpcTestType:Server
```

In Exchange 2010, this example tests for Outlook Anywhere connectivity using the local server as the RpcProxy endpoint as well as the RPC endpoint. Because the Identity parameter isn't specified, the command uses the temporary test user that you've created using the New-TestCasConnectivityUser.ps1 script. Modify this example to use the public external URL by setting the RpcProxyTestType parameter to External. Additionally, the example command can use the Client Access server array as the RPC endpoint by setting the RpcTestType parameter to Array. To only validate TCP/IP connectivity, omit the RpcProxyTestType parameter.

### -------------------------- Example 4 --------------------------
```
Test-OutlookConnectivity "OutlookRpcDeepTestProbe\Mailbox Database 1234512345" -RunFromServerId PrimaryMailbox -MailboxId johnd@contoso.com
```

In Exchange 2013 or later, this example runs the OutlookRpcDeepTestProbe from the "PrimaryMailbox" server for the mailbox "johnd@contoso.com" mounted on "Mailbox Database 1234512345". Because the Credential parameter is not specified, the probe will use the default testing credentials.

### -------------------------- Example 5 --------------------------
```
Test-OutlookConnectivity -RpcProxyServer:RpcProxySrv01 -RpcProxyAuthenticationType:Basic -RpcClientAccessServer:CAS01 -RpcAuthenticationType:NTLM
```

In Exchange 2010, this example validates Outlook connectivity through RpcProxy on one server to a different server running the Client Access server role with Basic for the outer authentication layer and NTLM for the inner authentication layer. Using these parameters should allow you to validate most types of Outlook connectivity configurations. This command can also be used with the GetDefaultsFromAutoDiscover parameter set to $true if you only need to override one or two parameters. This following command is similar to running a connectivity test using the RPC Ping utility but provides stronger validation.

### -------------------------- Example 6 --------------------------
```
$TestCredentials = Get-Credential; 
Test-OutlookConnectivity -ProbeIdentity OutlookRpcCtpProbe -MailboxId johnd@contoso.com -Credential $TestCredentials
```

In Exchange 2013 or later, this example runs the OutlookRpcCtpProbe and verifies the log-on credentials for the "johnd@contoso.com" mailbox.

### -------------------------- Example 7 --------------------------
```
Test-OutlookConnectivity -ProbeIdentity "OutlookRpcCTPProbe" -MailboxID johnd@contoso.com
```

In Exchange 2013 or later, this example runs a logon test from the client access services on a Mailbox server for the mailbox johnd@contoso.com.

## PARAMETERS

### -Identity
This parameter is available or functional only in Exchange Server 2010.

The Identity parameter specifies a target user mailbox. This value can be the mailbox GUID or can be the domain name\\user, for example, contoso.com\\erin. If the parameter isn't specified, the command looks for a test user in Active Directory. You need to create the test user with the New-TestCasConnectivityUser.ps1 script.

```yaml
Type: MailboxIdParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -GetDefaultsFromAutodiscover
This parameter is available or functional only in Exchange Server 2010.

The GetDefaultsFromAutodiscover parameter specifies whether to get default values for all of the other parameters for the command from the Autodiscover service settings. If you run the command specifying values for other parameters, those values override the default values from the Autodiscover service. The default value for this parameter is $true.

```yaml
Type: $true | $false
Parameter Sets: RpcProxyServer
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protocol
This parameter is available or functional only in Exchange Server 2010.

The Protocol parameter specifies whether to test for Outlook Anywhere connectivity or directly test for RPC or TCP/IP connectivity. The value is either HTTP or TCP.

```yaml
Type: HTTP | TCP | WS
Parameter Sets: Protocol
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcTestType
This parameter is available or functional only in Exchange Server 2010.

The RpcTestType parameter specifies which type of RPC endpoint the command should test. Valid values are Server or Array. If Server is specified, the command uses the local server as the RPC endpoint. If Array is specified, the command looks for a ClientAccessArray object in the same Active Directory site where the command is being run.

```yaml
Type: Array | Server
Parameter Sets: RpcTestType
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSTestType
This parameter is available or functional only in Exchange Server 2010.

The WSTestType parameter specifies type of servers that you want to include in your Outlook connectivity test. You can use the following values:

- Unknown

- Internal

- External

- The default value is Unknown.

```yaml
Type: Unknown | Internal | External
Parameter Sets: WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
This parameter is available or functional only in Exchange Server 2010.

The Archive parameter specifies whether tests should be performed to connect to the user's on-premises archive mailbox. You don't need to specify a value for this parameter.

```yaml
Type: $true | $false
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
This parameter is available or functional only in Exchange Server 2010.

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases: cf
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the credential used by the probe. The system's test credentials are used by default. This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: Probe
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Hostname
TheHostname parameter specifies the protocol endpoint target of the probe. You can use a specific Mailbox server or route through Distributed Name Service server.

```yaml
Type: String
Parameter Sets: Probe
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxCredential
This parameter is available or functional only in Exchange Server 2010.

The MailboxCredential parameter specifies certain credentials to allow logon access to a user's mailbox. Use the parameter along with the Identity parameter to access a user's mailbox when you don't have access permissions.

```yaml
Type: PSCredential
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxId
The MailboxID parameter specifies the target mailbox. IF not specified, this uses the test account.

```yaml
Type: MailboxIdParameter
Parameter Sets: Probe
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MonitoringContext
This parameter is available or functional only in Exchange Server 2010.

The MonitoringContext parameter specifies whether the command returns additional information that can be used with Microsoft System Center Operations Manager 2007. The default value is $false.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProbeIdentity
The ProbeIdentity parameter specifies the probe to use.

- RPC over HTTP (Outlook Anywhere) probes

- MAPI over HTTP probes

```yaml
Type: String
Parameter Sets: Probe
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcAuthenticationType
This parameter is available or functional only in Exchange Server 2010.

The RpcAuthenticationType parameter specifies the authentication setting to test for the RPC layer. Using this parameter is helpful if a different authentication type is set at the RPC proxy virtual directory. You can use the following values:

- NTLM

- Kerberos

- Negotiate

The default value is Negotiate.

```yaml
Type: Negotiate | NTLM | Kerberos
Parameter Sets: RpcProxyServer, RpcTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcClientAccessServer
This parameter is available or functional only in Exchange Server 2010.

The RpcClientAccessServer parameter specifies the target server with the Client Access server role installed that you want to test. This can be a server fully qualified domain name (FQDN) or a GUID.

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: RpcProxyServer, RpcTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RpcProxyAuthenticationType
This parameter is available or functional only in Exchange Server 2010.

The RpcProxyAuthenticationType parameter specifies the authentication setting for the RPC Proxy endpoint. The value can be specified as Basic, NTLM, or Negotiate. There is no default value unless used with the GetDefaultsFromAutodiscover parameter.

```yaml
Type: Basic | NTLM | Negotiate
Parameter Sets: RpcProxyServer, RpcTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcProxyServer
This parameter is available or functional only in Exchange Server 2010.

The RpcProxyServer parameter specifies whether to set the target RpcProxy server for testing. This parameter can be used when the RpcProxy server is different from the Client Access server.

```yaml
Type: ServerIdParameter
Parameter Sets: RpcProxyServer
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RpcProxyTestType
This parameter is available or functional only in Exchange Server 2010.

The RpcProxyTestType parameter specifies which HTTP endpoint the command should connect to. The value can be Internal or External. The Internal value refers to the local computer name (http://\<localcomputername\>, for example, http://CAS01). The External value refers to a public namespace (the external HTTP URL on the /rpc virtual directory, for example, http://mail.contoso.com).

```yaml
Type: External | Internal
Parameter Sets: RpcTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunFromServerId
The RunFromServerID parameter specifies the server on which the probe should be run.

```yaml
Type: ServerIdParameter
Parameter Sets: Probe
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeOutSeconds
The TimeOutSeconds parameter specifies the timeout period in seconds before the probe is ended. The default value is 30 seconds. The digits can be entered with or with the use of quotation marks. Either 10 or "10" will work. Any input error will default back to 30 seconds.

```yaml
Type: String
Parameter Sets: Probe
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TotalTimeoutInMinutes
This parameter is available or functional only in Exchange Server 2010.

The TotalTimeoutInMinutes parameter specifies the time limit, in minutes, for the command to wait for test results before ending the request. The default value is two minutes.

```yaml
Type: Int32
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySslCert
This parameter is available or functional only in Exchange Server 2010.

The TrustAnySslCert parameter can be set to $true to ignore any Secure Sockets Layer (SSL) certificate warnings. The default value is $false.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
This parameter is available or functional only in Exchange Server 2010.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases: wi
Applicable: Exchange Server 2010
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

[Online Version](https://technet.microsoft.com/library/09d810f1-0550-4cd3-8feb-f524018a5d6b.aspx)
