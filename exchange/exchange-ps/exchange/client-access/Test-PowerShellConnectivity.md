---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Test-PowerShellConnectivity
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Test-PowerShellConnectivity

## SYNOPSIS
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
The Test-PowerShellConnectivity cmdlet tests Exchange remote PowerShell connectivity by connecting to a specified remote PowerShell virtual directory, to any remote PowerShell virtual directories on a specified Exchange server, or to any remote PowerShell virtual directories that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command:

`& $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1`

The test results are displayed on-screen. The cmdlet returns the following information.

- CasServer: The Exchange server that the client connected to.

- LocalSite: The name of the local Active Directory site.

- Scenario: The operations that are tested. Values are: Logon User.

- Result: The values returned are typically Success, Skipped or Failure.

- Latency(MS): The time required to complete the test in milliseconds.

- Error: Any error messages that were encountered.

You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding `> <filename>` to the command. For example:

`Test-PowerShellConnectivity -ClientAccessServer MBX01 | ConvertTo-Html > "C:\My Documents\PowerShell Test.html"`

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-PowerShellConnectivity -ClientAccessServer MBX2 -VirtualDirectoryName "PowerShell (Default Web Site)" -TrustAnySSLCertificate
```

This example tests the PowerShell (Default Web Site) virtual directory on the MBX2 server. The TrustAnySSLCertificate switch is used to skip the certificate check during connection.

### -------------------------- Example 2 --------------------------
```
$UserCredentials = Get-Credential; Test-PowerShellConnectivity -ConnectionUri https://contoso.com/powershell -TestCredential $UserCredentials -Authentication Basic
```

This example tests the remote PowerShell virtual directory that's available at https://contoso.com/powershell. A mismatch between the SSL certificate and the URL isn't expected, so the TrustAnySSLCertificate switch isn't used. The virtual directoryis configured to use Basic authentication.

The credentials that are used to connect to the virtual directory are stored in the $UserCredentials variable. The test is then run as previously described.

## PARAMETERS

### -ConnectionUri
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

### -TestType
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

[Online Version](https://technet.microsoft.com/library/2a876f48-9431-47fa-b65a-f3ea57c7f220.aspx)
