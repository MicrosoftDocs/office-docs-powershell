---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Test-PowerShellConnectivity

## SYNOPSIS
!!! Exchange Server 2010

Use the Test-PowerShellConnectivity cmdlet to test whether Windows PowerShell remoting on the target Client Access server is functioning correctly.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Test-PowerShellConnectivity cmdlet to test whether Windows PowerShell remoting on the target Client Access server is functioning correctly.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Test-PowerShellConnectivity cmdlet to test client connectivity to Exchange remote PowerShell virtual directories.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Test-PowerShellConnectivity -ConnectionUri <Uri> -TestCredential <PSCredential>
 [-Authentication <Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos>]
 [-Confirm] [-DomainController <Fqdn>] [-MailboxServer <ServerIdParameter>] [-MonitoringContext]
 [-ResetTestAccountCredentials] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Test-PowerShellConnectivity [[-ClientAccessServer] <ServerIdParameter>]
 [-Authentication <Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos>]
 [-Confirm] [-DomainController <Fqdn>] [-MailboxServer <ServerIdParameter>] [-MonitoringContext]
 [-ResetTestAccountCredentials] [-TestType <Internal | External>] [-TrustAnySSLCertificate]
 [-VirtualDirectoryName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Test-PowerShellConnectivity cmdlet enables you to connect to a Client Access server to test whether Windows PowerShell remoting on that server is working correctly and whether the Client Access server can perform commands against a remote Mailbox server.

When you run the Test-PowerShellConnectivity cmdlet, you must specify either the fully qualified domain name (FQDN) of the Client Access server to connect to by using the ClientAccessServer parameter, or the Uniform Resource Identifier (URI) of a Client Access server by using the ConnectionUri parameter. You can't use both the ClientAccessServer and ConnectionUri parameters in the same command.

The first time you use the Test-PowerShellConnectivity cmdlet with the ClientAccessServer parameter, you might be required to create a new test user. To create a new test user, use the New-TestCasConnectivityUser.ps1 script.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "PowerShell virtual directories" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

The Test-PowerShellConnectivity cmdlet connects to a Client Access server to test whether Windows PowerShell remoting on that server is working correctly and whether the Client Access server can perform commands against a remote Mailbox server.

When you run the Test-PowerShellConnectivity cmdlet, you must specify either the fully qualified domain name (FQDN) of the Client Access server to connect to by using the ClientAccessServer parameter, or the Uniform Resource Identifier (URI) of a Client Access server by using the ConnectionUri parameter. You can't use both the ClientAccessServer and ConnectionUri parameters in the same command.

The first time you use the Test-PowerShellConnectivity cmdlet with the ClientAccessServer parameter, you might be required to create a test user. To create a test user, use the New-TestCasConnectivityUser.ps1 script.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "PowerShell virtual directories" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

The Test-PowerShellConnectivity cmdlet tests Exchange remote PowerShell connectivity by connecting to a specified remote PowerShell virtual directory, to any remote PowerShell virtual directories on a specified Exchange server, or to any remote PowerShell virtual directories that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.

The test results are displayed on-screen. The cmdlet returns the following information.

- CasServer: The Exchange server that the client connected to.

- LocalSite: The name of the local Active Directory site.

- Scenario: The operations that are tested. Values are: Logon User.

- Result: The values returned are typically Success, Skipped, or Failure.

- Latency(MS): The time required to complete the test in milliseconds.

- Error: Any error messages that were encountered.

You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding \> \<filename\> to the command. For example:

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Test-PowerShellConnectivity -ClientAccessServer CAS2 -VirtualDirectoryName "PowerShell (Default Web Site)" -TrustAnySSLCertificate
```

This example tests the PowerShell (Default Web Site) virtual directory on the CAS2 server. The TrustAnySSLCertificate switch is used to skip the certificate check during connection. You might need to use the New-TestCasConnectivityUser.ps1 script to create a test user that the command can use to test the Windows PowerShell virtual directory.

### Example 1 -------------------------- (Exchange Server 2013)
```
Test-PowerShellConnectivity -ClientAccessServer CAS2 -VirtualDirectoryName "PowerShell (Default Web Site)" -TrustAnySSLCertificate
```

This example tests the PowerShell (Default Web Site) virtual directory on the CAS2 server. The TrustAnySSLCertificate switch is used to skip the certificate check during connection. You might need to use the New-TestCasConnectivityUser.ps1 script to create a test user that the command can use to test the Windows PowerShell virtual directory.

### Example 1 -------------------------- (Exchange Server 2016)
```
Test-PowerShellConnectivity -ClientAccessServer MBX2 -VirtualDirectoryName "PowerShell (Default Web Site)" -TrustAnySSLCertificate
```

This example tests the PowerShell (Default Web Site) virtual directory on the MBX2 server. The TrustAnySSLCertificate switch is used to skip the certificate check during connection.

### Example 2 -------------------------- (Exchange Server 2010)
```
$UserCredentials = Get-Credential; Test-PowerShellConnectivity -ConnectionUri https://contoso.com/powershell -TestCredential $UserCredentials -Authentication Basic
```

This example tests the remote Windows PowerShell virtual directory at the URI https://contoso.com/powershell. Because the SSL certificate should be valid, the TrustAnySSLCertificate switch isn't used. The remote server uses Basic authentication so the Authentication parameter is used with a value of Basic.


Before running the test, the credentials to be used to connect to the remote Windows PowerShell virtual directory need to be retrieved. The following command retrieves the credentials from the person running the test using the Get-Credential cmdlet and stores them in the $UserCredentials variable. The test is then run using the Test-PowerShellConnectivity cmdlet with the options previously described.

### Example 2 -------------------------- (Exchange Server 2013)
```
$UserCredentials = Get-Credential; Test-PowerShellConnectivity -ConnectionUri https://contoso.com/powershell -TestCredential $UserCredentials -Authentication Basic
```

This example tests the remote Windows PowerShell virtual directory at the URI https://contoso.com/powershell. Because the SSL certificate should be valid, the TrustAnySSLCertificate switch isn't used. The remote server uses Basic authentication so the Authentication parameter is used with a value of Basic.


The first command retrieves the credentials from the person running the test using the Get-Credential cmdlet and stores them in the $UserCredentials variable. The second command runs the test with the options previously described.

### Example 2 -------------------------- (Exchange Server 2016)
```
$UserCredentials = Get-Credential; Test-PowerShellConnectivity -ConnectionUri https://contoso.com/powershell -TestCredential $UserCredentials -Authentication Basic
```

This example tests the remote PowerShell virtual directory that's available at https://contoso.com/powershell. A mismatch between the SSL certificate and the URL isn't expected, so the TrustAnySSLCertificate switch isn't used. The virtual directoryis configured to use Basic authentication.


The credentials that are used to connect to the virtual directory are stored in the $UserCredentials variable. The test is then run as previously described.

## PARAMETERS

### -ConnectionUri
!!! Exchange Server 2010, Exchange Server 2013

The ConnectionUri parameter specifies the URI of the Client Access server to test, for example, https://contoso.com/powershell. If the ClientAccessServer parameter is specified, you can't use the ConnectionUri parameter.



!!! Exchange Server 2016

The ConnectionUri parameter specifies the URL of the remote PowerShell virtual directory to test, for example, https://contoso.com/powershell.

You can't use this parameter with the ClientAccessServer parameter.



```yaml
Type: Uri
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestCredential
!!! Exchange Server 2010

The TestCredential parameter specifies the credentials to use when connecting to the Client Access server. This parameter can only be used when the ConnectionUri parameter is specified.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).



!!! Exchange Server 2013

The TestCredential parameter specifies the credentials to use when connecting to the Client Access server. This parameter can only be used when the ConnectionUri parameter is specified.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



!!! Exchange Server 2016

The TestCredential parameter specifies the credentials to use for the test.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

You can only use this parameter with the ConnectionUri parameter.



```yaml
Type: PSCredential
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Authentication
!!! Exchange Server 2010

The Authentication parameter specifies the type of authentication to use when establishing a connection. You can use one of the following values:

- Default

- Basic

- Negotiate

- NegotiateWithImplicitCredential

- Credssp

- Digest

- Kerberos



!!! Exchange Server 2013

The Authentication parameter specifies the type of authentication to use when establishing a connection. You can use one of the following values:

- Default

- Basic

- Negotiate

- NegotiateWithImplicitCredential

- Credssp

- Digest

- Kerberos

The NegotiateWithImplicitCredential value has been deprecated and is no longer used.



!!! Exchange Server 2016

The Authentication parameter specifies the type of authentication that's used to connect. Valid values are:

- Default

- Basic

- Credssp

- Digest

- Kerberos

- Negotiate



```yaml
Type: Default | Basic | Negotiate | NegotiateWithImplicitCredential | Credssp | Digest | Kerberos
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAccessServer
!!! Exchange Server 2010, Exchange Server 2013

The ClientAccessServer parameter specifies the name of the Client Access server to test. If the ConnectionUri parameter is specified, you can't use the ClientAccessServer parameter.



!!! Exchange Server 2016

The ClientAccessServer parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections.

You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

You can't use this parameter with the ConnectionUri parameter.



```yaml
Type: ServerIdParameter
Parameter Sets: Set1
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

The MonitoringContext switch specifies whether the command is run by Microsoft System Center Operations Manager 2007. Running the command with this parameter without System Center Operations Manager 2007 causes the command to fail. If this parameter is excluded, you must run the task interactively.



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
!!! Exchange Server 2010

The ResetTestAccountCredentials parameter resets the test account credentials to use with this command.



!!! Exchange Server 2013, Exchange Server 2016

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

### -TestType
!!! Exchange Server 2010

The TestType parameter specifies whether the command should test the internal or external URL of a virtual directory. This parameter can only be used with the ClientAccessServer parameter. The valid values are Internal and External. The default in Internal.



!!! Exchange Server 2013

The TestType parameter specifies whether the command should test the internal or external URL of a virtual directory. This parameter can only be used with the ClientAccessServer parameter. The valid values are Internal and External. The default value is Internal.



!!! Exchange Server 2016

The TestType parameter specifies whether the command tests internal or external URLs. Values are Internal and External. The default value is Internal.

You can only use this parameter with the ClientAccessServer parameter.



```yaml
Type: Internal | External
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate
!!! Exchange Server 2010, Exchange Server 2013

The TrustAnySSLCertificate parameter specifies whether Secure Sockets Layer (SSL) certificate validation failures are reported. This parameter instructs the command to check Windows PowerShell connectivity without generating an error when the certificate doesn't match the URL of the Client Access server.



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
!!! Exchange Server 2010

The VirtualDirectoryName parameter specifies the virtual directory on the Client Access server to test. The VirutalDirectoryName parameter can only be used with the ClientAccessServer parameter. If the VirutalDirectoryName parameter isn't specified, all virtual directories on the Client Access server are tested.



!!! Exchange Server 2013

The VirtualDirectoryName parameter specifies the virtual directory on the Client Access server to test. The VirtualDirectoryName parameter can only be used with the ClientAccessServer parameter. If the VirtualDirectoryName parameter isn't specified, all virtual directories on the Client Access server are tested.



!!! Exchange Server 2016

The VirtualDirectoryName parameter specifies the name of the remote PowerShell virtual directory that you want to test. Enclose values that contain spaces in quotation marks (").

You can only use this parameter with the ClientAccessServer parameter. If you don't use this parameter, all available remote PowerShell virtual directories on the server are tested.



```yaml
Type: String
Parameter Sets: Set1
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

[Online Version](https://technet.microsoft.com/library/2a876f48-9431-47fa-b65a-f3ea57c7f220.aspx)

