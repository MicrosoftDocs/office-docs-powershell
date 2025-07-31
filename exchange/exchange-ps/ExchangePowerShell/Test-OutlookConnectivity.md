---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/test-outlookconnectivity
schema: 2.0.0
title: Test-OutlookConnectivity
---

# Test-OutlookConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-OutlookConnectivity cmdlet to test end-to-end Microsoft Outlook client connectivity in the Microsoft Exchange organization. This includes testing for both Outlook Anywhere (RPC over HTTP) and MAPI over HTTP connections.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Probe
```
Test-OutlookConnectivity [-ProbeIdentity] <String>
 [-Credential <PSCredential>]
 [-Hostname <String>]
 [-MailboxId <MailboxIdParameter>]
 [-RunFromServerId <ServerIdParameter>]
 [-TimeOutSeconds <String>]
 [<CommonParameters>]
```

### Protocol
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -Protocol <Protocol>
 [-Archive <Boolean>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf]
 [<CommonParameters>]
```

### RpcProxyServer
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -GetDefaultsFromAutodiscover <Boolean>
 [-Archive <Boolean>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-RpcAuthenticationType <RpcAuthenticationType>]
 [-RpcClientAccessServer <ClientAccessServerIdParameter>]
 [-RpcProxyAuthenticationType <RPCProxyAuthenticationType>]
 [-RpcProxyServer <ServerIdParameter>]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf]
 [<CommonParameters>]
```

### RpcTestType
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -RpcTestType <RpcTestType>
 [-Archive <Boolean>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-RpcAuthenticationType <RpcAuthenticationType>]
 [-RpcClientAccessServer <ClientAccessServerIdParameter>]
 [-RpcProxyAuthenticationType <RPCProxyAuthenticationType>]
 [-RpcProxyTestType <RpcProxyTestType>]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf]
 [<CommonParameters>]
```

### WSTestType
```
Test-OutlookConnectivity [[-Identity] <MailboxIdParameter>] -WSTestType <VirtualDirectoryUriScope>
 [-Archive <Boolean>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-MonitoringContext]
 [-TotalTimeoutInMinutes <Int32>]
 [-TrustAnySslCert]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Running the Test-OutlookConnectivity cmdlet validates an Outlook connection defined by the provided parameters. The command is able to validate a single mailbox.

The Test-OutlookConnectivity cmdlet runs the same process as the monitoring probes. The Microsoft Exchange Health Manager (MSExchangeHM) service must be running and have created the Outlook probes on the machine that will be tested. You need to select one of the Outlook probe identities to run the test. Use the [Get-MonitoringItemIdentity](https://learn.microsoft.com/powershell/module/exchange/get-monitoringitemidentity) cmdlet to see what probes are active.

This example lists the probes running in the backend services on a Mailbox server: `Get-MonitoringItemIdentity -Server MailboxServer1 -Identity outlook.protocol | ?{$_.Name -like '*probe'}`.

This example lists the probes running in the client access services on a Mailbox server: `Get-MonitoringItemIdentity -Server MailboxServer1 -Identity outlook | ?{$_.Name -like '*probe'}`.

For more information on probes and the monitoring framework, see [Managed Availability](https://learn.microsoft.com/exchange/managed-availability-exchange-2013-help), [Managed Availability and Server Health](https://techcommunity.microsoft.com/t5/exchange-team-blog/managed-availability-and-server-health/ba-p/593180), and [Customizing Managed Availability](https://techcommunity.microsoft.com/t5/exchange-team-blog/customizing-managed-availability/ba-p/592164).

By default, the cmdlet uses the test monitoring account attached to the specified probe. You may enter a different mailbox instead via the MailboxId parameter. The options and results follow.

- MailboxId and Credential are not specified: Generic connectivity test against a test mailbox using the system's test credentials.
- MailboxId is specified, Credential is not: Connectivity test to the specific mailbox using the system's test credentials.
- MailboxId and Credential are both specified: You get a connectivity test to the specific mailbox, and also a test that the credentials provided are valid for that mailbox

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-OutlookConnectivity -ProbeIdentity OutlookMapiHttp.Protocol\OutlookMapiHttpSelfTestProbe
```

In Exchange 2013 or later, this example runs an MAPI over HTTP OutlookRpcSelfTestProbe on the Mailbox server that you're currently connected to.

### Example 2
```powershell
Test-OutlookConnectivity "Outlook.Protocol\OutlookRpcDeepTestProbe\Mailbox Database 1234512345" -RunFromServerId PrimaryMailbox -MailboxId johnd@contoso.com
```

In Exchange 2013 or later, this example runs the OutlookRpcDeepTestProbe from the "PrimaryMailbox" server for the mailbox "johnd@contoso.com" mounted on "Mailbox Database 1234512345". Because the Credential parameter is not specified, the probe will use the default testing credentials.

### Example 3
```powershell
Test-OutlookConnectivity -Protocol HTTP -GetDefaultsFromAutoDiscover $true
```

In Exchange 2010, this example tests the most common end-to-end Outlook connectivity scenario for Outlook Anywhere. This includes testing for connectivity through the Autodiscover service, creating a user profile, and logging on to the user mailbox. All of the required values are retrieved from the Autodiscover service. Because the Identity parameter isn't specified, the command uses the temporary test user that you've created using the New-TestCasConnectivityUser.ps1 script. This example command can be run to test TCP/IP connectivity by setting the Protocol parameter to RPC.

### Example 4
```powershell
Test-OutlookConnectivity -RpcProxyTestType:Internal -RpcTestType:Server
```

In Exchange 2010, this example tests for Outlook Anywhere connectivity using the local server as the RpcProxy endpoint as well as the RPC endpoint. Because the Identity parameter isn't specified, the command uses the temporary test user that you've created using the New-TestCasConnectivityUser.ps1 script. Modify this example to use the public external URL by setting the RpcProxyTestType parameter to External. Additionally, the example command can use the Client Access server array as the RPC endpoint by setting the RpcTestType parameter to Array. To only validate TCP/IP connectivity, omit the RpcProxyTestType parameter.

### Example 5
```powershell
Test-OutlookConnectivity -RpcProxyServer RpcProxySrv01 -RpcProxyAuthenticationType Basic -RpcClientAccessServer CAS01 -RpcAuthenticationType NTLM
```

In Exchange 2010, this example validates Outlook connectivity through RpcProxy on one server to a different server running the Client Access server role with Basic for the outer authentication layer and NTLM for the inner authentication layer. Using these parameters should allow you to validate most types of Outlook connectivity configurations. This command can also be used with the GetDefaultsFromAutoDiscover parameter set to $true if you only need to override one or two parameters. This following command is similar to running a connectivity test using the RPC Ping utility but provides stronger validation.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The Identity parameter specifies a target user mailbox. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

If you don't use this parameter, the command looks for a test user in Active Directory that you previously created by using the New-TestCasConnectivityUser.ps1 script.

```yaml
Type: MailboxIdParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ProbeIdentity

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ProbeIdentity parameter specifies the probe to use. Valid values are:

Outlook Anywhere (RPC over HTTP) probes:

- `Outlook.Protocol\OutlookRpcSelfTestProbe`: Validates that the RPC/HTTP endpoint is able to receive traffic on the Mailbox server. It does not attempt to log in to a mailbox. It is a high level check of connectivity.
- `Outlook.Protocol\OutlookRpcDeepTestProbe`: Validates that the RPC/HTTP endpoint is working on the Mailbox server. It will attempt to connect to and log in to the mailbox. Since no database is specified, it will attempt to connect to the first database returned by the Get-MailboxDatabase cmdlet.
- `Outlook.Protocol\OutlookRpcDeepTestProbe\<Case-sensitive Mailbox Database Name>`: Validates that the RPC/HTTP endpoint is working on the Mailbox Server. It will attempt to connect to and log in to the mailbox in the specified mailbox database. If the mailbox database name contains spaces, enclose the entire value in quotation marks (for example, `"Outlook.Protocol\OutlookRpcDeepTestProbe\Mailbox Database 0352791530"`).

MAPI over HTTP probes:

- `OutlookMapiHttp.Protocol\OutlookMapiHttpSelfTestProbe`: Validates that the MAPI/HTTP endpoint is able to receive traffic on the Mailbox server. It does not attempt to log in to a mailbox. It is a high level check of connectivity.
- `OutlookMapiHttp.Protocol\OutlookMapiHttpDeepTestProbe`: Validates that the MAPI/HTTP endpoint is working on the Mailbox server. It will attempt to connect and log in to the mailbox. Since no database is specified, it will attempt to connect to the first database returned by the Get-MailboxDatabase cmdlet.
- `OutlookMapiHttp.Protocol\OutlookRpcDeepTestProbe\<Case-sensitive Mailbox Database Name>`: Validates that the MAPI/HTTP endpoint is working on the Mailbox Server. It will attempt to connect and log in to the mailbox in the specified database. If the mailbox database name contains spaces, enclose the entire value in quotation marks (for example, `"Outlook.Protocol\OutlookRpcDeepTestProbe\Mailbox Database 0352791530"`).

```yaml
Type: String
Parameter Sets: Probe
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetDefaultsFromAutodiscover

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The GetDefaultsFromAutodiscover parameter specifies whether to get default values for all of the other parameters for the command from the Autodiscover service settings. If you run the command specifying values for other parameters, those values override the default values from the Autodiscover service. The default value for this parameter is $true.

```yaml
Type: Boolean
Parameter Sets: RpcProxyServer
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protocol

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The Protocol parameter specifies whether to test for Outlook Anywhere connectivity or directly test for RPC or TCP/IP connectivity. The value is either HTTP or TCP.

```yaml
Type: Protocol
Parameter Sets: Protocol
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcTestType

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RpcTestType parameter specifies which type of RPC endpoint the command should test. Valid values are:

- Server: The command uses the local server as the RPC endpoint.
- Array: The command looks for a ClientAccessArray object in the local Active Directory site.

```yaml
Type: RpcTestType
Parameter Sets: RpcTestType
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WSTestType

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The WSTestType parameter specifies type of servers that you want to include in your Outlook connectivity test. You can use the following values:

- Unknown (This is the default value.)
- Internal
- External

```yaml
Type: VirtualDirectoryUriScope
Parameter Sets: WSTestType
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The Archive parameter specifies whether tests should be performed to connect to the user's on-premises archive mailbox. Valid values are:

$true: Connect to the user's on-premises archive mailbox.

$false: Don't connect to the user's on-premises mailbox. This is the default value.

```yaml
Type: Boolean
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Credential parameter specifies the credential used by the probe. The system's test credentials are used by default

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: Probe
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Hostname

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

TheHostname parameter specifies the protocol endpoint target of the probe. You can use a specific Mailbox server or route through Distributed Name Service server.

```yaml
Type: String
Parameter Sets: Probe
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxCredential

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MailboxCredential parameter specifies certain credentials to allow logon access to a user's mailbox. Use the parameter along with the Identity parameter to access a user's mailbox when you don't have access permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxId

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MailboxID parameter specifies the target mailbox.

In Exchange 2013 or later, the Identity parameter specifies a target user mailbox. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

If you don't use this parameter, the command uses the test account.

```yaml
Type: MailboxIdParameter
Parameter Sets: Probe
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MonitoringContext

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. You don't need to specify a value with this switch.

Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcAuthenticationType

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RpcAuthenticationType parameter specifies the authentication setting to test for the RPC layer. Using this parameter is helpful if a different authentication type is set at the RPC proxy virtual directory. You can use the following values:

- NTLM
- Kerberos
- Negotiate

The default value is Negotiate.

```yaml
Type: RpcAuthenticationType
Parameter Sets: RpcProxyServer, RpcTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcClientAccessServer

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RpcClientAccessServer parameter specifies the target server with the Client Access server role installed that you want to test. This can be a server fully qualified domain name (FQDN) or a GUID.

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: RpcProxyServer, RpcTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RpcProxyAuthenticationType

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RpcProxyAuthenticationType parameter specifies the authentication setting for the RPC Proxy endpoint. The value can be specified as Basic, NTLM, or Negotiate. There is no default value unless used with the GetDefaultsFromAutodiscover parameter.

```yaml
Type: RPCProxyAuthenticationType
Parameter Sets: RpcProxyServer, RpcTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RpcProxyServer

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RpcProxyServer parameter specifies whether to set the target RpcProxy server for testing. This parameter can be used when the RpcProxy server is different from the Client Access server.

```yaml
Type: ServerIdParameter
Parameter Sets: RpcProxyServer
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RpcProxyTestType

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The RpcProxyTestType parameter specifies which HTTP endpoint the command should connect to. Valid values are:

- Internal: Refers to the local computer name (`https://<localcomputername>`, for example, `https://CAS01`).
- External: Refers to a public namespace (the external HTTP URL on the /rpc virtual directory, for example, `https://mail.contoso.com`).

```yaml
Type: RpcProxyTestType
Parameter Sets: RpcTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunFromServerId

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RunFromServerID parameter specifies the server on which the probe should be run.

```yaml
Type: ServerIdParameter
Parameter Sets: Probe
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeOutSeconds

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TimeOutSeconds parameter specifies the timeout period in seconds before the probe is ended. The default value is 30 seconds. The digits can be entered with or with the use of quotation marks. Either 10 or "10" will work. Any input error will default back to 30 seconds.

```yaml
Type: String
Parameter Sets: Probe
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TotalTimeoutInMinutes

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The TotalTimeoutInMinutes parameter specifies the time limit, in minutes, for the command to wait for test results before ending the request. The default value is two minutes.

```yaml
Type: Int32
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySslCert

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The TrustAnySSLCertificate switch allows Exchange to accept certificates from untrusted certification authorities (CAs). You don't need to specify a value with this switch.

This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RpcProxyServer, Protocol, RpcTestType, WSTestType
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
