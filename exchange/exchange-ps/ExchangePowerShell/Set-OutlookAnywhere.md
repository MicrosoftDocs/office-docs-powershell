---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-outlookanywhere
schema: 2.0.0
title: Set-OutlookAnywhere
---

# Set-OutlookAnywhere

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-OutlookAnywhere cmdlet to modify Outlook Anywhere virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. Outlook Anywhere uses virtual directories that contain "rpc" in the name.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OutlookAnywhere [-Identity] <VirtualDirectoryIdParameter>
 [-ClientAuthenticationMethod <AuthenticationMethod>]
 [-Confirm]
 [-DefaultAuthenticationMethod <AuthenticationMethod>]
 [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <ExtendedProtectionTokenCheckingMode>]
 [-ExternalClientAuthenticationMethod <AuthenticationMethod>]
 [-ExternalClientsRequireSsl <Boolean>]
 [-ExternalHostname <Hostname>]
 [-IISAuthenticationMethods <MultiValuedProperty>]
 [-InternalClientAuthenticationMethod <AuthenticationMethod>]
 [-InternalClientsRequireSsl <Boolean>]
 [-InternalHostname <String>]
 [-Name <String>]
 [-SSLOffloading <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about the different authentication methods that you can see in this article, see [Understanding HTTP Authentication](https://learn.microsoft.com/dotnet/framework/wcf/feature-details/understanding-http-authentication).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OutlookAnywhere -Identity:CAS01\Rpc (Default Web Site) -ClientAuthenticationMethod:Ntlm
```

In Exchange 2010, this example sets the client authentication method to NTLM for the /rpc virtual directory on the Client Access server CAS01.

### Example 2
```powershell
Set-OutlookAnywhere -Identity: "EXCH1\rpc (Default Web Site)" -ExternalClientAuthenticationMethod NTLM
```

This example sets the client authentication method to NTLM for the Outlook Anywhere virtual directory on the server named EXCH1.

### Example 3
```powershell
Set-OutlookAnywhere -Identity "EXCH1\rpc (Default Web Site)" -SSLOffloading $false -InternalClientsRequireSsl $true -ExternalClientsRequireSsl $true
```

This example sets the SSLOffloading parameter to $false for the Outlook Anywhere virtual directory on the server named EXCH1. This setting informs Outlook Anywhere to expect no SSL decryption between clients and the server, and enables the Require SSL value on the virtual directory. Because SSL is now required for Outlook Anywhere connections, we need to configure internal and external clients to use SSL.

### Example 4
```powershell
Set-OutlookAnywhere -Identity "EXCH1\rpc (Default Web Site)" -IISAuthenticationMethods NTLM
```

This example sets the authentication method for the Outlook Anywhere virtual directory setting in IIS to NTLM.

### Example 5
```powershell
Set-OutlookAnywhere -Identity "EXCH1\rpc (Default Web Site)" -IISAuthenticationMethods Basic,NTLM
```

In Exchange 2010 and Exchange 2013, this example sets the available authentication methods for the /rpc virtual directory setting in IIS to use both Basic and NTLM authentication. After you set this value, you can use the IIS virtual directory to handle authentication for multiple applications that require different authentication methods.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the Outlook Anywhere virtual directory that you want to modify. You can use any value that uniquely identifies the virtual directory. For example:

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

### -ClientAuthenticationMethod

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The ClientAuthenticationMethod parameter specifies the authentication method that the Autodiscover service provides to the Outlook Anywhere clients to authenticate to the Client Access server. Valid values are:

- Basic
- Ntlm

Although you can use this parameter to set only one authentication method, the command doesn't return an error if you include multiple values.

```yaml
Type: AuthenticationMethod
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

### -DefaultAuthenticationMethod

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DefaultAuthenticationMethod parameter specifies the default authentication method for Outlook Anywhere. This parameter replaces the existing ExternalClientAuthenticationMethod, InternalClientAuthenticationMethod and IISAuthenticationMethods property values with the value you specify. Valid values are:

- Basic
- Ntlm
- Negotiate

You can't use this parameter with the ExternalClientAuthenticationMethod, InternalClientAuthenticationMethod and IISAuthenticationMethods parameters.

```yaml
Type: AuthenticationMethod
Parameter Sets: (All)
Aliases:

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
- Proxy: A proxy server is responsible for terminating the SSL channel. To use this setting, you need to register an SPN by using the ExtendedProtectionSPNList parameter.
- ProxyCoHosting: HTTP and HTTPS traffic might be accessing the virtual directory and a proxy server is located between at least some of the clients and the Client Access services on the Exchange server.

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

The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the virtual directory. Extended Protection for Authentication isn't enabled by default. Valid values are:

- None: Extended Protection for Authentication isn't be used on the virtual directory. This value is the default.
- Allow: Extended Protection for Authentication is used for connections between clients and the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication work, but might not be as secure as connections that use Extended Protection for Authentication.
- Require: Extended Protection for Authentication is used for all connections between clients and the virtual directory. If either the client or server doesn't support it, the connection will fail. If you use this value, you also need to set an SPN value for the ExtendedProtectionSPNList parameter.

**Note**: If you use the value Allow or Require and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.

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

### -ExternalClientAuthenticationMethod

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalClientAuthenticationMethod parameter specifies the authentication method that's used to authenticate external Outlook Anywhere clients. Valid values are:

- Basic
- Ntlm
- Negotiate (default value)

You can't use this parameter with the DefaultAuthenticationMethods parameter.

```yaml
Type: AuthenticationMethod
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalClientsRequireSsl

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalClientsRequireSsl parameter specifies whether external Outlook Anywhere clients are required to use Secure Sockets Layer (SSL). Valid values are:

- $true: Clients connecting via Outlook Anywhere from outside the organization are required to use SSL.
- $false: Clients connecting via Outlook Anywhere from outside the organization aren't required to use SSL. This value is the default.

The value of this parameter is related to the value of the SSLOffloading parameter.

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

### -ExternalHostname

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ExternalHostname parameter specifies the external hostname for the Outlook Anywhere virtual directory. For example, mail.contoso.com.

```yaml
Type: Hostname
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IISAuthenticationMethods

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The IISAuthenticationMethods parameter specifies the authentication method that's used on the Outlook Anywhere virtual directory in IIS. Valid values are:

- Basic
- Ntlm
- Negotiate

You can specify multiple value separated by commas. By default, all values are used.

You can't use this parameter with the DefaultAuthenticationMethods parameter.

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

### -InternalClientAuthenticationMethod

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalClientAuthenticationMethod parameter specifies the authentication method that's used to authenticate internal Outlook Anywhere clients. Valid values are:

- Basic
- Ntlm (default value)
- Negotiate

You can't use this parameter with the DefaultAuthenticationMethods parameter.

```yaml
Type: AuthenticationMethod
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalClientsRequireSsl

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalClientsRequireSsl parameter specifies whether internal Outlook Anywhere clients are required to use SSL. Valid values are:

- $true: Clients connecting via Outlook Anywhere from inside the organization are required to use SSL.
- $false: Clients connecting via Outlook Anywhere from inside the organization aren't required to use SSL. This value is the default.

The value of this parameter is related to the value of the SSLOffloading parameter.

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

### -InternalHostname

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The InternalHostname parameter specifies the internal hostname for the Outlook Anywhere virtual directory. For example, mail.contoso.com.

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

The Name parameter specifies the name of the Outlook Anywhere virtual directory. The default value is Rpc (Default Web Site). If the value you specify contains spaces, enclose the value in quotation marks (").

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

### -SSLOffloading

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The SSLOffloading parameter specifies whether a network device accepts SSL connections and decrypts them before proxying the connections to the Outlook Anywhere virtual directory on the Exchange server. Valid values are:

- $true: Outlook Anywhere clients using SSL don't maintain an SSL connection along the entire network path to the Exchange server. A network device in front of the server decrypts the SSL connections and proxies the unencrypted (HTTP) client connections to the Outlook Anywhere virtual directory. The network segment where HTTP is used should be a secured network. This value is the default.
- $false: Outlook Anywhere clients using SSL maintain an SSL connection along the entire network path to the Exchange server. Only SSL connections are allowed to the Outlook Anywhere virtual directory.

This parameter configures the Require SSL value on the Outlook Anywhere virtual directory. When you set this parameter to $true, Require SSL is disabled. When you set this parameter to $fase, Require SSL is enabled. However, it might take several minutes before the change is visible in IIS Manager.

You need to use the value $true for this parameter if you don't require SSL connections for internal or external Outlook Anywhere clients.

The value of this parameter is related to the values of the ExternalClientsRequireSsl and InternalClientsRequireSsl parameters.

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
