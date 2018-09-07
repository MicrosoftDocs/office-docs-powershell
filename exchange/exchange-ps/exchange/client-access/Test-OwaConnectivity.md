---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010
title: Test-OwaConnectivity
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Test-OwaConnectivity

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Test-OwaConnectivity cmdlet to verify that Microsoft Office Outlook Web App is running as expected. The Test-OwaConnectivity cmdlet can be used to test Outlook Web App connectivity for all Microsoft Exchange Server 2010 virtual directories on a specified Client Access server for all mailboxes on servers running Exchange that are in the same Active Directory site. The Test-OwaConnectivity cmdlet can also be used to test the connectivity for an individual Exchange Outlook Web App URL.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Test-OwaConnectivity [-URL] <String> -MailboxCredential <PSCredential> [-AllowUnsecureAccess] [-Confirm]
 [-DomainController <Fqdn>] [-LightMode] [-ResetTestAccountCredentials] [-Timeout <UInt32>]
 [-TrustAnySSLCertificate] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Test-OwaConnectivity [[-ClientAccessServer] <ServerIdParameter>] [-AllowUnsecureAccess] [-Confirm]
 [-DomainController <Fqdn>] [-LightMode] [-MailboxServer <ServerIdParameter>] [-MonitoringContext]
 [-ResetTestAccountCredentials] [-RSTEndpoint <String>] [-TestType <Internal | External>] [-Timeout <UInt32>]
 [-TrustAnySSLCertificate] [-VirtualDirectoryName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Test-OwaConnectivity cmdlet tests the connectivity of all Exchange Outlook Web App virtual directories on a Client Access server or tests connectivity of a single Exchange Outlook Web App URL.

To test all Exchange Outlook Web App virtual directories on a Client Access server, there must be a test Active Directory account. There must also be a test mailbox in each Active Directory site that hosts mailboxes that can be accessed through the virtual directories being tested. If the test environment wasn't created during the Mailbox server setup, you are prompted to run the script that creates the test mailboxes and test users when you run the Test-OwaConnectivity cmdlet.

If the server hosting the test mailbox isn't available, the Test-OwaConnectivity cmdlet returns an error that might not clearly identify the problem. To avoid this, check that the server that hosts the test mailbox is running and that the mailbox is available before you run the Test-OwaConnectivity cmdlet. You can use the Test-MapiConnectivity cmdlet to do this.

If you run the Test-OwaConnectivity cmdlet on a Client Access server without using either the ClientAccessServer parameter or the URL parameter, the cmdlet tests the server on which you run the cmdlet. To test a specific Client Access server, use the ClientAccessServer parameter.

To test a single URL, run the Test-OwaConnectivity cmdlet with the URL parameter and credentials for an existing Exchange mailbox. If the URL is behind a load balancer, you can't predict which Client Access server the command will test. Because credentials are required as part of the parameters when you use the URL parameter, you can use any account to run the Test-OwaConnectivity cmdlet when you use the URL parameter.

If the command encounters a virtual directory that doesn't require Secure Sockets Layer (SSL), the command skips that directory unless the AllowUnsecureAccess parameter is used. If the AllowUnsecureAccess parameter is used, communications between servers are sent in clear text for purposes of the test.

The Test-OwaConnectivity cmdlet can be run as a one-time interactive task or as a scheduled task under Microsoft System Center Operations Manager 2007 control. To run the Test-OwaConnectivity cmdlet as a System Center Operations Manager 2007 task, the Client Access test mailbox must be available on the Mailbox servers that the cmdlet tests against.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-OwaConnectivity -URL:https://mail.contoso.com/owa -MailboxCredential:(get-credential contoso\kweku)
```

This example tests the connectivity for the URL https://mail.contoso.com/owa using the credentials for the user contoso\kweku.

### -------------------------- Example 2 --------------------------
```
Test-OwaConnectivity -ClientAccessServer:Contoso12 -AllowUnsecureAccess
```

This example tests the connectivity of a specific Client Access server Contoso12 and tests all Exchange Outlook Web App virtual directories that support Exchange mailboxes. These include the virtual directories that don't require SSL.

## PARAMETERS

### -MailboxCredential
The MailboxCredential parameter specifies the mailbox credential for a single URL test.

The MailboxCredential parameter is required only when using the URL parameter.

```yaml
Type: PSCredential
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -URL
The URL parameter specifies the URL to test. This parameter is required only when you want to test a single Outlook Web App URL.

If this parameter is used, the MailboxCredential parameter is also required.

You can't use the URL parameter with the TestType or ClientAccessServer parameters.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnsecureAccess
The AllowUnsecureAccess parameter specifies whether virtual directories that don't require SSL are tested. If the AllowUnsecureAccess parameter is included, it enables virtual directories that don't require SSL to be tested. If this parameter isn't included, the command skips virtual directories that don't require SSL, and an error is generated.

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
The ClientAccessServer parameter specifies the name of the Client Access server to test. If this parameter is included, all Exchange Outlook Web App virtual directories on the Client Access server are tested against all Exchange Mailbox servers in the local Active Directory site.

Don't use this parameter with the URL parameter.

```yaml
Type: ServerIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LightMode
The LightMode parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of the command.

This parameter is implemented for other Exchange diagnostic commands where it's used to run a less intensive version of a command.

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

### -MailboxServer
The MailboxServer parameter specifies the name of the Mailbox server to test. If not specified, all Mailbox servers in the local Active Directory site are tested.

```yaml
Type: ServerIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext
The MonitoringContext parameter shows you what information is returned to System Center Operations Manager 2007. When Operations Manager 2007 executes the Test-OwaConnectivity cmdlet, it requires additional information to be returned. By setting this parameter to $true, you can see exactly what would be returned to Operations Manager 2007. This parameter is informational only and has no effect on Operations Manager 2007.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestType
The TestType parameter specifies whether the command tests internal or external URLs. Values are Internal and External. You can't use this parameter with the URL parameter. When neither the TestType parameter nor the URL parameter is specified, the default is TestType:Internal.

```yaml
Type: Internal | External
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
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
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate
The TrustAnySSLCertificate parameter specifies whether to check an internal URL without generating an SSL certificate validation error. The TrustAnySSLCertificate parameter allows SSL certificate validation failures to not be reported. This is useful for testing internal URLs because Internet Information Services (IIS) doesn't support assigning multiple certificates for a single virtual directory. If a directory has different URLs for internal and external access and has a certificate, that certificate is usually for the external URL. This parameter lets the task check an internal URL without generating an error when the certificate doesn't match the URL.

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

### -VirtualDirectoryName
The VirtualDirectoryName parameter specifies the name of the virtual directory to test on a particular Client Access server. If this parameter isn't included, all Exchange Outlook Web App virtual directories that support Exchange mailboxes are tested.

```yaml
Type: String
Parameter Sets: Set1
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

[Online Version](https://technet.microsoft.com/library/44808bba-56b3-45bc-8cab-b45f52758636.aspx)
