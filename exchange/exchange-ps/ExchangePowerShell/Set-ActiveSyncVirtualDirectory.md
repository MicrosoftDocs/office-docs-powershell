---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-activesyncvirtualdirectory
schema: 2.0.0
title: Set-ActiveSyncVirtualDirectory
---

# Set-ActiveSyncVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ActiveSyncVirtualDirectory cmdlet to modify existing Microsoft Exchange ActiveSync virtual directories that are used in Internet Information Services (IIS) on Exchange servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ActiveSyncVirtualDirectory [-Identity] <VirtualDirectoryIdParameter>
 [-ActiveSyncServer <String>]
 [-BadItemReportingEnabled <Boolean>]
 [-BasicAuthEnabled <Boolean>]
 [-ClientCertAuth <ClientCertAuthTypes>]
 [-CompressionEnabled <Boolean>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <ExtendedProtectionTokenCheckingMode>]
 [-ExternalAuthenticationMethods <MultiValuedProperty>]
 [-ExternalUrl <Uri>]
 [-InstallIsapiFilter <Boolean>]
 [-InternalAuthenticationMethods <MultiValuedProperty>]
 [-InternalUrl <Uri>]
 [-MobileClientCertificateAuthorityURL <String>]
 [-MobileClientCertificateProvisioningEnabled <Boolean>]
 [-MobileClientCertTemplateName <String>]
 [-Name <String>]
 [-RemoteDocumentsActionForUnknownServers <RemoteDocumentsActions>]
 [-RemoteDocumentsAllowedServers <MultiValuedProperty>]
 [-RemoteDocumentsBlockedServers <MultiValuedProperty>]
 [-RemoteDocumentsInternalDomainSuffixList <MultiValuedProperty>]
 [-SendWatsonReport <Boolean>]
 [-WhatIf]
 [-WindowsAuthEnabled <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-ActiveSyncVirtualDirectory cmdlet configures a variety of settings on the virtual directory used for Exchange ActiveSync including security, authentication, and internal and external URL settings.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ActiveSyncVirtualDirectory -Identity "contoso\Microsoft-Server-ActiveSync (Default Web Site)" -BasicAuthEnabled $false
```

This example disables Basic authentication on the default Exchange ActiveSync virtual directory on the server Contoso.

### Example 2
```powershell
Set-ActiveSyncVirtualDirectory -Identity "contoso\Microsoft-Server-ActiveSync (Default Web Site)" -BadItemReportingEnabled $true -SendWatsonReport:$true
```

This example enables bad item reporting and turns on the option to send Watson reports for errors on the server Contoso.

### Example 3
```powershell
Set-ActiveSyncVirtualDirectory -Identity "contoso\Microsoft-Server-ActiveSync (Default Web Site)" -ExternalUrl "https://contoso.com/mail"
```

This example configures the external URL on the default Exchange ActiveSync virtual directory on the server Contoso.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the ActiveSync virtual directory that you want to modify. You can use any value that uniquely identifies the virtual directory. For example:

- Name or Server\\Name
- Distinguished name (DN)
- GUID

The Name value uses the syntax `"VirtualDirectoryName (WebsiteName)"` from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax `VirtualDirectoryName*`.

```yaml
Type: VirtualDirectoryIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSyncServer

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ActiveSyncServer parameter specifies the URL of the Mailbox server. This value is in the following format: https://servername/Microsoft-Server-ActiveSync.

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

### -BadItemReportingEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The BadItemReportingEnabled parameter specifies whether items that can't be synchronized should be reported to the user. If set to $true, the user receives a notification when an item can't be synchronized to the mobile phone.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BasicAuthEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The BasicAuthentication parameter specifies whether Basic authentication is enabled on the virtual directory. Valid values are:

- $true: Basic authentication is enabled. This value is the default.
- $false: Basic authentication is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientCertAuth

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ClientCertAuth parameter specifies the status of client certificate authentication. By default, client certificate authentication is disabled. The default setting is Ignore.

```yaml
Type: ClientCertAuthTypes
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompressionEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The CompressionEnabled parameter is a Boolean value that identifies the compression applied to the specified Exchange ActiveSync virtual directory. The default setting is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -ExtendedProtectionFlags

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExtendedProtectionFlags parameter specifies custom settings for Extended Protection for Authentication on the virtual directory. Valid values are:

- None: This is the default setting.
- AllowDotlessSPN: Required if you want to use Service Principal Name (SPN) values that don't contain FQDNs (for example, HTTP/ContosoMail instead of HTTP/mail.contoso.com). You specify SPNs with the ExtendedProtectionSPNList parameter. This setting makes Extended Protection for Authentication less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel.
- NoServiceNameCheck: The SPN list isn't checked to validate a channel binding token. This setting makes Extended Protection for Authentication less secure. We generally don't recommend this setting.
- Proxy: A proxy server is responsible for terminating the TLS channel. To use this setting, you need to register an SPN by using the ExtendedProtectionSPNList parameter.
- ProxyCoHosting: HTTP and HTTPS traffic might be accessing the virtual directory, and a proxy server is located between at least some of the clients and the Client Access services on the Exchange server.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionSPNList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the virtual directory. Valid values are:

- $null: This value is the default.
- Single SPN or comma delimited list of valid SPNs: The SPN value format is `Protocol\FQDN`. For example, HTTP/mail.contoso.com. To add an SPN that's not an FQDN (for example, HTTP/ContosoMail), you also need to use the AllowDotlessSPN value for the ExtendedProtectionFlags parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionTokenChecking

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExtendedProtectionTokenChecking parameter specifies whether Extended Protection for Authentication is used for client connections to the virtual directory. Valid values are:

- None: Extended Protection for Authentication isn't used for client connections to the virtual directory. This value is the default.
- Allow: Extended Protection for Authentication is used for client connections to the virtual directory if the client and server both support it.
- Require: Extended Protection for Authentication is required for client connections to the virtual directory. If the client or server don't support it, the connection fails. This value also requires a Service Principal Name (SPN) value for the ExtendedProtectionSPNList parameter.

**Note**: If a proxy server in front of the Exchange server terminates the client-to-proxy Transport Layer Security (TLS) channel, the values Allow or Require need one or more SPN values for the ExtendedProtectionSPNList parameter.

```yaml
Type: ExtendedProtectionTokenCheckingMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAuthenticationMethods

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalAuthenticationMethods parameter restricts the authentication methods that can be used to connect to the virtual directory from outside the firewall. Valid values are:

- Adfs
- Basic
- Certificate
- Digest
- Fba
- Kerberos
- LiveIdBasic
- LiveIdFba
- LiveIdNegotiate
- NegoEx
- Negotiate
- Ntlm
- OAuth
- WindowsIntegrated
- WSSecurity

You can specify multiple values separated by commas.

Although you can specify any of these values, whether or not the authentication method actually works for external connections depends on other factors. For example:

- Is the authentication method available on the virtual directory?
- Is the authentication method available, but disabled on the virtual directory?

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalUrl

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalURL parameter specifies the URL that connects to the virtual directory from outside the firewall.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstallIsapiFilter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InstallIsapiFilter parameter specifies whether the Internet Server API (ISAPI) filter is installed.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalAuthenticationMethods

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalAuthenticationMethods parameter specifies the authentication methods supported by the server that contains the virtual directory when access is requested from inside the network firewall. If this parameter isn't set, all authentication methods can be used.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalUrl

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalURL parameter specifies the URL that connects to the virtual directory from inside the firewall.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobileClientCertificateAuthorityURL

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MobileClientCertificateAuthorityURL parameter specifies the URL for the certification authority (CA) used by the mobile phone.

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

### -MobileClientCertificateProvisioningEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MobileClientCertificateProvisioningEnabled parameter specifies whether the Autodiscover service returns the Certificate Services server URL in the XML file.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobileClientCertTemplateName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MobileClientCertTemplateName parameter specifies the template name for the client certificate.

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

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Name parameter specifies the name of the Exchange ActiveSync virtual directory.

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

### -RemoteDocumentsActionForUnknownServers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RemoteDocumentsActionForUnknownServers parameter specifies the action that occurs when a Microsoft Windows SharePoint Services or Microsoft Windows file share request comes in via Exchange ActiveSync. When a request arrives, Exchange ActiveSync looks for the requested host name in the Allow and Block lists. If the host name isn't found in either list, the action specified in this parameter, either Block or Allow, is performed.

```yaml
Type: RemoteDocumentsActions
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsAllowedServers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RemoteDocumentsAllowedServers parameter is a multivalued property that lists all the allowed servers for remote document access.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsBlockedServers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RemoteDocumentsBlockedServers parameter is a multivalued property that lists all the blocked servers for remote document access.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteDocumentsInternalDomainSuffixList

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The RemoteDocumentsInternalDomainSuffixList parameter is used in organizations that don't run Windows Internet Name Service (WINS) in their network. In these environments, you can specify one or more FQDNs that Exchange ActiveSync treats as internal when a request for remote file access is received.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendWatsonReport

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SendWatsonReport parameter specifies whether a Watson report is sent for errors and events.

```yaml
Type: Boolean
Parameter Sets: (All)
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

### -WindowsAuthEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The WindowsAuthEnabled parameter specifies whether Integrated Windows authentication is enabled. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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
