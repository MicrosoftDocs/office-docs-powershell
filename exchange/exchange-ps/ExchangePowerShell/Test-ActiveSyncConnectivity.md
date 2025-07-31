---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/test-activesyncconnectivity
schema: 2.0.0
title: Test-ActiveSyncConnectivity
---

# Test-ActiveSyncConnectivity

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Test-ActiveSyncConnectivity cmdlet to test connectivity to Microsoft Exchange ActiveSync virtual directories.

**Note**: This cmdlet works best in Exchange 2010. In later versions of Exchange, the functionality of this cmdlet has been replaced by Managed Availability. For the best results, use the Invoke-MonitoringProbe cmdlet and specify the relevant active monitor probe instead of using this cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Test-ActiveSyncConnectivity [[-ClientAccessServer] <ServerIdParameter>] [[-URL] <String>]
 [-AllowUnsecureAccess]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-LightMode]
 [-MailboxCredential <PSCredential>]
 [-MailboxServer <ServerIdParameter>]
 [-MonitoringContext]
 [-MonitoringInstance <String>]
 [-ResetTestAccountCredentials]
 [-Timeout <UInt32>]
 [-TrustAnySSLCertificate]
 [-UseAutodiscoverForClientAccessServer]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Test-ActiveSyncConnectivity cmdlet tests Exchange ActiveSync connectivity by connecting to a specified Exchange ActiveSync virtual directory, to any Exchange ActiveSync virtual directories on a specified Exchange server, or to any Exchange ActiveSync virtual directories that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command:

`& $env:ExchangeInstallPath\Scripts\New-TestCasConnectivityUser.ps1`

The test results are displayed on-screen. The cmdlet returns the following information.

- CasServer: The Exchange server that the client connected to.
- LocalSite: The name of the local Active Directory site.
- Scenario: The operations that are tested. Values are: Options, FolderSync, First Sync, GetItemEstimate, Sync Data, Ping, and Sync Test Item.
- Result: The values returned are typically Success, Skipped, or Failure.
- Latency(MS): The time required to complete the test in milliseconds.
- Error: Any error messages that were encountered.

You can write the results to a file by piping the output to ConvertTo-Html and Set-Content. For example: `Test-ActiveSyncConnectivity -ClientAccessServer MBX01 | ConvertTo-Html | Set-Content -Path "C:\My Documents\EAS Test.html"`.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-ActiveSyncConnectivity -ClientAccessServer MBX01
```

This example tests Exchange ActiveSync client connectivity for the server named MBX01.

### Example 2
```powershell
Test-ActiveSyncConnectivity -UseAutodiscoverForClientAccessServer $true -URL "https://contoso.com/mail" -MailboxCredential (Get-Credential pauls@contoso.com)
```

This example tests the Exchange ActiveSync connectivity for the mailbox PaulS using the Autodiscover URL.

## PARAMETERS

### -ClientAccessServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ClientAccessServer parameter specifies the Exchange server to test. This server has the Client Access server role installed and is responsible for accepting client connections.

You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

You can't use this parameter with the Url parameter.

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

### -URL

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The URL parameter specifies the URL that's used to connect to the Exchange ActiveSync virtual directory.

You can't use this parameter with the ClientAccessServer parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnsecureAccess

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AllowUnsecureAccess switch allows the test to continue over an unsecured channel that doesn't require Secure Sockets Layer (SSL). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### -LightMode

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The LightMode switch tells the command to perform only a subset of the tests. You don't need to specify a value with this switch.

When you use this switch, only the Options test is run.

If you don't use this switch, the First Sync, GetItemEstimate, Sync Data, Ping and Sync Test Item tests are also run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxCredential

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MailboxCredential parameter specifies the mailbox credential to use for a single mailbox test.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MailboxServer parameter specifies the Exchange Mailbox server that you want to test. This parameter identifies the backend server that accepts proxied connections from the frontend server where clients connect.

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. You don't need to specify a value with this switch.

Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringInstance

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The MonitoringInstance parameter specifies an identifier for this task when the test is run from Microsoft System Center Operations Manager (SCOM). This parameter is important because SCOM may run multiple instances of the test from the same server at the same time.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetTestAccountCredentials

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ResetTestAccountCredentials switch resets the password for the test account that's used to run this command. You don't need to specify a value with this switch.

The password for the test account is typically reset every seven days. Use this switch to force a password reset any time it's required for security reasons.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Timeout parameter specifies the amount of time (in seconds) to wait for a response from the command.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The TrustAnySSLCertificate switch allows Exchange to accept certificates from untrusted certification authorities (CAs). You don't need to specify a value with this switch.

This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseAutodiscoverForClientAccessServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The UseAutodiscoverForClientAccessServer switch specifies whether the test should use the Autodiscover service to locate the Exchange ActiveSync virtual directory. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
