---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Test-WebServicesConnectivity
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Test-WebServicesConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-WebServicesConnectivity cmdlet to test client connectivity to Exchange Web Services virtual directories.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Test-WebServicesConnectivity [[-ClientAccessServer] <ServerIdParameter>] [-AllowUnsecureAccess] [-Confirm]
 [-DomainController <Fqdn>] [-LightMode] [-MailboxCredential <PSCredential>]
 [-MailboxServer <ServerIdParameter>] [-MonitoringContext] [-ResetTestAccountCredentials] [-Timeout <UInt32>]
 [-TrustAnySSLCertificate] [-UseAutodiscoverForClientAccessServer] [-WhatIf] [<CommonParameters>]
```

### Set3
```
Test-WebServicesConnectivity [[-Identity] <MailboxIdParameter>]
 -AutoDiscoverServer <ClientAccessServerIdParameter> [-Confirm] [-LightMode]
 [-MailboxCredential <PSCredential>] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Test-WebServicesConnectivity [[-Identity] <MailboxIdParameter>] [-MonitoringContext] [-Confirm] [-LightMode]
 [-MailboxCredential <PSCredential>] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Test-WebServicesConnectivity [[-Identity] <MailboxIdParameter>]
 [-ClientAccessServer <ClientAccessServerIdParameter>] [-Confirm] [-LightMode]
 [-MailboxCredential <PSCredential>] [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-WebServicesConnectivity cmdlet tests Exchange Web Services connectivity by connecting to a specified Exchange Web Services virtual directory, to any Exchange Web Services virtual directories on a specified Exchange server, or to any Exchange Web Services virtual directories that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command:

& $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1

The test results are displayed on-screen. The cmdlet returns the following information.

- Source: Source server.

- ServiceEndpoint: Destination server.

- Scenario: The operations that are tested. Values are Autodiscover: SOAP Provider and EWS: GetFolder (full mode) or EWS: ConvertID (light mode).

- Result: The values returned are typically Success or \*FAILURE\*.

- Latency(MS): The time required to complete the test in milliseconds

You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding \> \<filename\> to the command. For example:

Test-WebServicesConnectivity -ClientAccessServer MBX01 | ConvertTo-Html \> "C:\\My Documents\\EWS Test.html"

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-WebServicesConnectivity -AllowUnsecureAccess
```

In Exchange 2010, this example tests Exchange Web Services on the local Client Access server and allows the test to use an unsecured connection that doesn't require SSL. A default test account is used.

### -------------------------- Example 2 --------------------------
```
Test-WebServicesConnectivity -ClientAccessServer MBX01
```
This example tests the client connection to Exchange Web Services on the server named MBX01.

## PARAMETERS

### -AllowUnsecureAccess
This parameter is available or functional only in Exchange Server 2010.

The AllowUnsecureAccess switch specifies whether to enable the command to continue to run over an unsecured channel that doesn't require Secure Sockets Layer (SSL).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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

You can't use this parameter with the AutoDiscoverServer parameter.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: ServerIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available or functional only in Exchange Server 2010.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LightMode
The LightMode switch tells the command to perform only a subset of the tests. You don't need to specify a value with this switch.

When you use this switch, the EWS: ConvertId test is run instead of the EWS: GetFolder test.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxCredential
The MailboxCredential parameter specifies the mailbox credential to use for a single mailbox test.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

This parameter is required when you use the Identity parameter.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxServer
The MailboxServer parameter specifies the identity of the Exchange Mailbox server on which the test is run.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
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
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
The Timeout parameter specifies the amount of time, in seconds, to wait for the test operation to finish. The default value for the Timeout parameter is 300 seconds. You must specify a time-out value greater than 0 seconds. We recommend that you always configure this parameter with a value of 5 seconds or more.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseAutodiscoverForClientAccessServer
The UseAutodiscoverForClientAccessServer parameter specifies whether the test should use the Autodiscover service to locate the Client Access server.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverServer
The AutoDiscoverServer parameter specifies the server with the Client Access server role installed that's used for Autodiscover.

You can use any value that uniquely identifies the server. For example:

- Name (for example, Exchange01)

- Distinguished name (DN) (for example, CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com)

- Exchange Legacy DN (for example, /o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01)

- GUID (for example, bc014a0d-1509-4ecc-b569-f077eec54942)

You can't use this parameter with the ClientAccessServer parameter.

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox to use for the test. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

When you use this parameter, you also need to use the MailboxCredential parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/5e1b2b06-f24e-4f33-8ddc-fdb1c5bb7eb2.aspx)
