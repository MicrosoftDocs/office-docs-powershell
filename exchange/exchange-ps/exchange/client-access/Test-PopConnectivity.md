---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Test-PopConnectivity
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Test-PopConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-PopConnectivity cmdlet to verify that the Microsoft Exchange POP3 service is working as expected.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-PopConnectivity [[-ClientAccessServer] <ServerIdParameter>] [-Confirm]
 [-ConnectionType <Plaintext | Tls | Ssl>] [-DomainController <Fqdn>] [-LightMode]
 [-MailboxCredential <PSCredential>] [-MailboxServer <ServerIdParameter>] [-MonitoringContext]
 [-PerConnectionTimeout <Int32>] [-PortClientAccessServer <Int32>] [-ResetTestAccountCredentials]
 [-Timeout <UInt32>] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-PopConnectivity cmdlet tests POP3 connectivity by connecting to a specified mailbox, a specified Exchange server, or all Exchange servers that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command:

`& $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1`

The test results are displayed on-screen. The cmdlet returns the following information.

- CasServer: The Exchange server that the client connected to.

- LocalSite: The name of the local Active Directory site.

- Scenario: The operations that are tested. Test POP3 Connectivity connects to the server using the POP3 protocol, searches for the test message, and deletes the test message.

- Result: The values returned are typically Success, Skipped or Failure.

- Latency(MS): The time required to complete the test in milliseconds.

- Error: Any error messages that were encountered.

You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding `> <filename>` to the command. For example:

`Test-PopConnectivity -ClientAccessServer MBX01 | ConvertTo-Html > "C:\My Documents\POP Test.html"`

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-PopConnectivity -ClientAccessServer Contoso12 -MailboxCredential (Get-Credential contoso\kweku)
```

This example tests the client POP3 connectivity for the server named Contoso12 by using the credentials for the user contoso\kweku.

### -------------------------- Example 2 --------------------------
```
Test-PopConnectivity -ClientAccessServer Contoso12
```

This example tests the client POP3 connectivity of the specific server named Contoso12 and tests all Exchange mailboxes.

## PARAMETERS

### -ClientAccessServer
The ClientAccessServer parameter specifies the Exchange server to test. This server has the Client Access server role installed and is responsible for accepting client connections.

You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, `Remove-*` cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, `New-*` and `Set-*` cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ConnectionType
The ConnectionType parameter specifies the type of connection that's used to connect to the POP3 service. Valid values are:

- Plaintext

- Ssl

- Tls

```yaml
Type: Plaintext | Tls | Ssl
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

### -LightMode
The LightMode switch tells the command to perform only a test logon to the server by using the POP3 protocol. You don't need to specify a value with this switch.

If you don't use this switch, the command also tests sending and receiving a message using the POP3 protocol.

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

### -MailboxCredential
The MailboxCredential parameter specifies the mailbox credential to use for a single mailbox test.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxServer
The MailboxServer parameter specifies the Exchange 2016 or Exchange 2013 Mailbox server that you want to test. This parameter identifies the backend server that accepts proxied connections from the frontend server where clients connect.

You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

If you don't use this parameter, connections to all Mailbox servers in the local Active Directory site are tested.

```yaml
Type: ServerIdParameter
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
The MonitoringContext switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM). You don't need to specify a value with this switch.

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

### -PerConnectionTimeout
The PerConnectionTimeout parameter specifies the amount of time, in seconds, to wait per connection for the test operation to finish. Valid values are between 0 and 120 seconds. The default value is 120 seconds.

We recommend that you configure this parameter with a value of 5 seconds or more.

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

### -PortClientAccessServer
The PortClientAccessServer parameter specifies the port to use to connect to the Client Access server. The default port is 110 for POP3. The valid range is from 0 through 65,535.

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

### -ResetTestAccountCredentials
The ResetTestAccountCredentials switch resets the password for the test account that's used to run this command. The password for the test account is typically reset every seven days. Use this switch to force a password reset any time it's required for security reasons.

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

### -Timeout
The Timeout parameter specifies the amount of time, in seconds, to wait for the test operation to finish. Valid values are between 0 and 3600 seconds (1 hour). The default value is 180 seconds (3 minutes).

We recommend that you configure this parameter with a value of 5 seconds or more.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate
The TrustAnySSLCertificate switch specifies whether to ignore Secure Sockets Layer (SSL) certificate validation failures. You don't need to specify a value with this switch.

This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.

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

[Online Version](https://technet.microsoft.com/library/73f0ce87-e723-43e5-a32c-29cd2d899ff9.aspx)
