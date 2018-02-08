---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Test-EcpConnectivity

## SYNOPSIS
!!! Exchange Server 2010

Use the Test-EcpConnectivity cmdlet to verify that the Exchange Control Panel is running as expected.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Test-EcpConnectivity cmdlet to verify that the Exchange Administration Center is running as expected.

The Exchange Control Panel (ECP) is the web-based user interface developed for Microsoft Exchange Server 2010. The Exchange Server 2013Exchange Administration Center cmdlets for virtual directory still use ECP in the name, and the ECP cmdlets can be used to manage Exchange 2010 and Exchange 2013 ECP virtual directories.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Test-EcpConnectivity cmdlet to test connectivity to Exchange admin center (EAC) virtual directories.

The ECP web management interface was introduced in MicrosoftExchange Server 2010. In Exchange Server 2013 and Exchange Server 2016, the EAC virtual directories and the corresponding management cmdlets still use ECP in the name. You can use these cmdlets to manage ECP virtual directories on Exchange 2010, Exchange 2013, and Exchange 2016 servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-EcpConnectivity [[-ClientAccessServer] <ServerIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-LightMode] [-MailboxServer <ServerIdParameter>] [-MonitoringContext] [-ResetTestAccountCredentials]
 [-RSTEndpoint <String>] [-TestType <Internal | External>] [-Timeout <UInt32>] [-TrustAnySSLCertificate]
 [-VirtualDirectoryName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Test-EcpConnectivity cmdlet can be used to test Exchange Control Panel connectivity for all Microsoft Exchange Server 2010 virtual directories on a specified Client Access server for all mailboxes on servers running Exchange in the same Active Directory site. The Test-EcpConnectivity cmdlet can also be used to test the connectivity for an individual Exchange Control Panel URL.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Test ECP" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Test-EcpConnectivity cmdlet can be used to test Exchange Administration Center connectivity for all ECP virtual directories on a specified Client Access server for all mailboxes on servers running Exchange in the same Active Directory site. The Test-EcpConnectivity cmdlet can also be used to test the connectivity for an individual Exchange Administration Center URL.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange Administration Center connectivity" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

The Test-EcpConnectivity cmdlet tests EAC connectivity by connecting to a specified EAC virtual directory, to any EAC virtual directories on a specified Exchange server, or to any EAC virtual directories that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.

The test results are displayed on-screen. The cmdlet returns the following information.

- CasServer: The Exchange server that the client connected to.

- LocalSite: The name of the local Active Directory site.

- Scenario: The operations that are tested. Values are: Logon and Sign in.

- Result: The values returned are typically Success, Skipped, or Failure.

- Latency(MS): The time required to complete the test in milliseconds.

- Error: Any error messages that were encountered.

You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding \> \<filename\> to the command. For example:

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Test-EcpConnectivity -ClientAccessServer Server01
```

This example tests user connectivity to the Exchange Control Panel on Server01.

### Example 1 -------------------------- (Exchange Server 2013)
```
Test-EcpConnectivity -ClientAccessServer Server01
```

This example tests user connectivity to the Exchange Administration Center on Server01.

### Example 1 -------------------------- (Exchange Server 2016)
```
Test-EcpConnectivity -ClientAccessServer Server01
```

This example tests user connectivity to the Exchange admin center on Server01.

## PARAMETERS

### -ClientAccessServer
!!! Exchange Server 2010, Exchange Server 2013

The ClientAccessServer parameter specifies the name of the Client Access server to test. If this parameter is included, all Exchange ECP virtual directories on the Client Access server are tested against all Exchange Mailbox servers in the local Active Directory site. Mailboxes that aren't on Exchange Mailbox servers are tested.



!!! Exchange Server 2016

The ClientAccessServer parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections.

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
!!! Exchange Server 2010, Exchange Server 2013

The LightMode parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of the command.

This parameter is implemented for other Exchange diagnostic commands where it's used to run a less intensive version of a command.



!!! Exchange Server 2016

This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.



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

### -MailboxServer
!!! Exchange Server 2010, Exchange Server 2013

The MailboxServer parameter specifies the name of the Mailbox server to test. If not specified, all Mailbox servers in the local Active Directory site are tested.



!!! Exchange Server 2016

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
!!! Exchange Server 2010

The MonitoringContext parameter specifies whether additional information is returned to Microsoft System Center Operations Manager 2007. When Operations Manager 2007 executes the Test-EcpConnectivity cmdlet, it requires additional information to be returned. By setting this parameter to $true, you can see exactly what would be returned to Operations Manager 2007. This parameter is informational only and has no effect on Operations Manager 2007.



!!! Exchange Server 2013

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. You don't need to specify a value with this switch. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager 2007 or System Center 2012 - Operations Manager.



!!! Exchange Server 2016

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch.



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

### -ResetTestAccountCredentials
!!! Exchange Server 2010, Exchange Server 2013

The ResetTestAccountCredentials parameter resets the password for the test account used to run this command. The password for the test account is usually reset every 7 days. Use this parameter to force a password reset any time that a password reset is required for security reasons.



!!! Exchange Server 2016

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

### -RSTEndpoint
This parameter is reserved for internal Microsoft use.

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

### -TestType
!!! Exchange Server 2010, Exchange Server 2013

The TestType parameter determines whether the command tests internal or external URLs. Values are Internal and External.



!!! Exchange Server 2016

The TestType parameter specifies whether the command tests internal or external URLs. Values are Internal and External. The default value is Internal.



```yaml
Type: Internal | External
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
The Timeout parameter specifies the amount of time, in seconds, to wait for the test operation to finish. The default value for the Timeout parameter is 30 seconds. You must specify a time-out value greater than 0 seconds and less than 1 hour (3,600 seconds). We recommend that you always configure this parameter with a value of 5 seconds or more.

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
!!! Exchange Server 2010

The TrustAnySSLCertificate parameter specifies whether SSL certificate validation failures are reported. If the TrustAnySSLCertificate parameter is used, SSL certificate validation failures aren't reported. This is useful for testing internal URLs because Internet Information Services (IIS) doesn't support assigning multiple certificates for a single virtual directory. If a directory has different URLs for internal and external access and has a certificate, that certificate is usually for the external URL. This parameter lets the task check an internal URL without generating an error when the certificate doesn't match the URL.



!!! Exchange Server 2013

The TrustAnySSLCertificate parameter specifies whether Secure Sockets Layer (SSL) certificate validation failures are reported. If the TrustAnySSLCertificate parameter is used, SSL certificate validation failures aren't reported. This is useful for testing internal URLs because Internet Information Services (IIS) doesn't support assigning multiple certificates for a single virtual directory. If a directory has different URLs for internal and external access and has a certificate, that certificate is usually for the external URL. This parameter lets the task check an internal URL without generating an error when the certificate doesn't match the URL.



!!! Exchange Server 2016

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

### -VirtualDirectoryName
!!! Exchange Server 2010, Exchange Server 2013

The VirtualDirectoryName parameter specifies the name of the virtual directory to test on a particular Client Access server. If this parameter isn't included, all Exchange Control Panel virtual directories that support Exchange mailboxes are tested.



!!! Exchange Server 2016

The VirtualDirectoryName parameter specifies the name of the EAC virtual directory that you want to test. Enclose values that contain spaces in quotation marks (").

If you don't use this parameter, all available EAC virtual directories are tested.



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

[Online Version](https://technet.microsoft.com/library/fbab57b0-acfc-46df-9910-06f27c002e96.aspx)

