---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/test-outlookwebservices
schema: 2.0.0
title: Test-OutlookWebServices
---

# Test-OutlookWebServices

## SYNOPSIS
This cmdlet is functional only in Exchange Server 2010.

Use the Test-OutlookWebServices cmdlet to verify the Autodiscover service settings for Microsoft Outlook on a computer running Microsoft Exchange Server 2010 that has the Client Access server role installed.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Test-OutlookWebServices [[-Identity] <RecipientIdParameter>]
 [-ClientAccessServer <ClientAccessServerIdParameter>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-MonitoringContext <Boolean>]
 [-TargetAddress <RecipientIdParameter[]>]
 [-WhatIf]
 [<CommonParameters>]
```

### AutoDiscoverServer
```
Test-OutlookWebServices [[-Identity] <MailboxIdParameter>] -AutoDiscoverServer <ClientAccessServerIdParameter>
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-TrustAnySSLCertificate]
 [-WhatIf]
 [<CommonParameters>]
```

### ClientAccessServer
```
Test-OutlookWebServices [[-Identity] <MailboxIdParameter>] [-ClientAccessServer <ClientAccessServerIdParameter>]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-TrustAnySSLCertificate]
 [-WhatIf]
 [<CommonParameters>]
```

### MonitoringContext
```
Test-OutlookWebServices [[-Identity] <MailboxIdParameter>] [-MonitoringContext]
 [-Confirm]
 [-MailboxCredential <PSCredential>]
 [-TrustAnySSLCertificate]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Test-OutlookWebServices cmdlet uses a specified address to verify that the Outlook provider is configured correctly.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Test-OutlookWebServices -Identity:holly@contoso.com
```

This example verifies the service information that's returned to the Outlook client from the Autodiscover service for the user holly@contoso.com. The code example verifies information for the following services:

- Availability service
- Outlook Anywhere
- Offline address book
- Unified Messaging

The example tests for a connection to each service. The example also submits a request to the Availability service for the user holly@contoso.com to determine whether the user's free/busy information is being returned correctly from the Client Access server to the Outlook client.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies any valid address in the forest. If you specify this parameter, incorrectly formed addresses and addresses that are outside the forest are rejected. This address is used to test the Outlook provider. This property accepts the domain and username in the domain\\username format or an Active Directory GUID and resolves them to the SMTP address that's needed to authenticate.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AutoDiscoverServer

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The AutoDiscoverServer parameter specifies the server with the Client Access server role installed that's used for Autodiscover.

You can use any value that uniquely identifies the server. For example:

- Name (for example, Exchange01)
- Distinguished name (DN) (for example, CN=Exchange01,CN=Servers,CN=Exchange Administrative Group (FYDIBOHF23SPDLT),CN=Administrative Groups,CN=First Organization,CN=Microsoft Exchange,CN=Services,CN=Configuration,DC=contoso,DC=com)
- Exchange Legacy DN (for example, /o=First Organization/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=Exchange01)
- GUID (for example, bc014a0d-1509-4ecc-b569-f077eec54942)

You can't use this parameter with the ClientAccessServer parameter.

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: AutoDiscoverServer
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientAccessServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is functional only in Exchange Server 2010.

The ClientAccessServer parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections.

You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- ExchangeLegacyDN
- GUID

You can't use this parameter with the AutoDiscoverServer parameter.

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: Default, ClientAccessServer
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxCredential

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MailboxCredential parameter specifies the mailbox credential to use for a single mailbox test.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: AutoDiscoverServer, ClientAccessServer, MonitoringContext
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MonitoringContext parameter specifies whether to include the associated monitoring events and performance counters in the results. Valid values are:

- $true: Monitoring events and performance counters are included in the command results. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager (SCOM).
- $false: Monitoring events and performance counters aren't included in the command results. This value is the default.

```yaml
Type: Boolean
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAddress

> Applicable: Exchange Server 2010

The TargetAddress parameter specifies the recipient that's used to test whether Availability service data can be retrieved.

```yaml
Type: RecipientIdParameter[]
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The TrustAnySSLCertificate switch allows Exchange to accept certificates from untrusted certification authorities (CAs). You don't need to specify a value with this switch.

This switch is useful for testing internal URLs, because a URL that has an associated certificate is typically an external URL. This switch lets the task check an internal URL without generating an error when the certificate doesn't match the URL.

```yaml
Type: SwitchParameter
Parameter Sets: AutoDiscoverServer, ClientAccessServer, MonitoringContext
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
