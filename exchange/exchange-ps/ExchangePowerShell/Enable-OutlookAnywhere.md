---
applicable: Exchange Server 2010
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/enable-outlookanywhere
schema: 2.0.0
title: Enable-OutlookAnywhere
---

# Enable-OutlookAnywhere

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Enable-OutlookAnywhere cmdlet to enable Outlook Anywhere on a computer running Microsoft Exchange Server 2010 that has the Client Access server role installed. Running the Enable-OutlookAnywhere cmdlet enables the server to accept requests from Microsoft Office Outlook 2007 and Outlook 2003 client computers from the Internet by using Outlook Anywhere, also known as RPC over HTTP.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### CustomIdentity
```
Enable-OutlookAnywhere -ClientAuthenticationMethod <AuthenticationMethod> -ExternalHostname <Hostname> -SSLOffloading <Boolean>
 [-IISAuthenticationMethods <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <ExtendedProtectionTokenCheckingMode>]
 [-Server <ServerIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### DefaultIdentity
```
Enable-OutlookAnywhere -DefaultAuthenticationMethod <AuthenticationMethod> -ExternalHostname <Hostname> -SSLOffloading <Boolean>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <ExtendedProtectionTokenCheckingMode>]
 [-Server <ServerIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Enabling Outlook Anywhere on the Client Access server allows the server to accept external connections by Outlook 2003 or later clients by using Outlook Anywhere.

This cmdlet can be successfully run only if the RPC over HTTP proxy Windows networking component is already installed.

When you run this cmdlet, it can take as long as an hour for the settings to become effective, depending on how long it takes for Active Directory to replicate.

For more information about the different authentication methods that you can see in this article, see [Understanding HTTP Authentication](https://learn.microsoft.com/dotnet/framework/wcf/feature-details/understanding-http-authentication).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Enable-OutlookAnywhere -Server Server01 -ExternalHostname mail.contoso.com -ClientAuthenticationMethod Ntlm -SSLOffloading $true
```

This example enables the server Server01 for Outlook Anywhere. The external host name is set to mail.contoso.com, both Basic and NTLM authentication are used, and the SSLOffloading parameter is set to $true.

### Example 2
```powershell
Enable-OutlookAnywhere -DefaultAuthenticationMethod Ntlm -ExternalHostname mail.contoso.com -SSLOffloading $false
```

This example enables Outlook Anywhere on the server that has the Client Access role installed. The SSLOffloading parameter is set to $false, the ExternalHostname parameter is specified as mail.contoso.com, and the DefaultAuthenticationMethod parameter is set to NTLM.

### Example 3
```powershell
Enable-OutlookAnywhere -IISAuthenticationMethods NTLM -SSlOffloading $false -ClientAuthenticationMethod Basic -ExternalHostname mail.contoso.com
```

This example enables the Exchange Client Access server for Outlook Anywhere. The SSLOffloading parameter is set to $false, the ExternalHostname parameter is set to mail.contoso.com, the IISAuthenticationMethods parameter is set to NTLM, and the ClientAuthenticationMethod parameter is set to Basic.

## PARAMETERS

### -ClientAuthenticationMethod

> Applicable: Exchange Server 2010

The ClientAuthenticationMethod parameter specifies the authentication method that the Autodiscover service provides to the Outlook Anywhere clients to authenticate to the Client Access server. Valid values are:

- Basic
- Ntlm

This parameter must be specified if you don't use the DefaultAuthenticationMethod parameter. When you use this parameter without specifying the IISAuthenticationMethods parameter, IISAuthenticationMethods parameter is set to both NTLM and Basic.

Although this parameter only allows setting one authentication method, the command doesn't return an error if you include multiple values.

```yaml
Type: AuthenticationMethod
Parameter Sets: CustomIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultAuthenticationMethod

> Applicable: Exchange Server 2010

The DefaultAuthenticationMethod parameter specifies whether to set both the ClientAuthenticationMethod and IISAuthenticationMethods parameters to the same authentication value.

When you set an authentication value by using the DefaultAuthenticationMethod parameter, you force the specified authentication method to be used on the /rpc virtual directory in Internet Information Services (IIS). Valid values are:

- Basic
- Ntlm

If the DefaultAuthenticationMethod parameter is specified, neither the ClientAuthenticationMethod nor the IISAuthenticationMethods parameter can be used.

```yaml
Type: AuthenticationMethod
Parameter Sets: DefaultIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalHostname

> Applicable: Exchange Server 2010

The ExternalHostname parameter specifies the external host name to use in the Outlook profiles for users enabled for Outlook Anywhere.

```yaml
Type: Hostname
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SSLOffloading

> Applicable: Exchange Server 2010

The SSLOffloading parameter specifies whether a network device accepts Transport Layer Security (TLS) connections and decrypts them before proxying the connections to the Outlook Anywhere virtual directory on the Exchange server. Valid values are:

- $true: Outlook Anywhere clients using TLS don't maintain an TLS connection along the entire network path to the Exchange server. A network device in front of the server decrypts the TLS connections and proxies the unencrypted (HTTP) client connections to the Outlook Anywhere virtual directory. The network segment where HTTP is used should be a secured network.
- $false: Outlook Anywhere clients using TLS maintain an TLS connection along the entire network path to the Exchange server. Only TLS connections are allowed to the Outlook Anywhere virtual directory. This value is the default.

This parameter configures the "Require SSL" setting on the Outlook Anywhere virtual directory. When you set this parameter to $true, "Require SSL" is disabled. When you set this parameter to $false, "Require SSL" is enabled. However, it might take several minutes before the change is visible in IIS Manager.

You need to use the value $true for this parameter if you don't require TLS connections for internal or external Outlook Anywhere clients.

The value of this parameter is related to the values of the ExternalClientsRequireSsl and InternalClientsRequireSsl parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010

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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionFlags

> Applicable: Exchange Server 2010

The ExtendedProtectionFlags parameter is used to customize the options you use if you're using Extended Protection for Authentication. The possible values are:

- None: Default setting.
- Proxy: Specifies that a proxy is terminating the TLS channel. A Service Principal Name (SPN) must be registered in the ExtendedProtectionSPNList parameter if proxy mode is configured.
- ProxyCoHosting: Specifies that both HTTP and HTTPS traffic might be accessing the Client Access server and that a proxy is located between at least some of the clients and the Client Access server.
- AllowDotlessSPN: Specifies whether you want to support valid SPNs that aren't in the fully qualified domain name (FQDN) format, for example ContosoMail. You specify valid SPNs with the ExtendedProtectionSPNList parameter. This option makes extended protection less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel.
- NoServiceNameCheck: Specifies that the SPN list isn't checked to validate a channel binding token. This option makes Extended Protection for Authentication less secure. We generally don't recommend this setting.

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

> Applicable: Exchange Server 2010

The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the specified virtual directory.

The possible values are:

- Null This value is the default.
- Single SPN or comma delimited list of valid SPNs By default, you must specify the fully qualified domain name (FQDN) (for example mail.contoso.com) for each SPN. If you want to add an SPN that's not an FQDN (for example, ContosoMail), you must also use the ExtendedProtectionTokenChecking parameter with the AllowDotlessSPN value. You specify the domain in SPN format. The SPN format is `Protocol\FQDN` (for example, `HTTP/mail.contoso.com`).

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

> Applicable: Exchange Server 2010

The ExtendedProtectionTokenChecking parameter specifies whether Extended Protection for Authentication is used for client connections to the virtual directory. Valid values are:

- None: Extended Protection for Authentication isn't used for client connections to the virtual directory. This value is the default.
- Allow: Extended Protection for Authentication is used for client connections to the virtual directory if the client and server both support it.
- Require: Extended Protection for Authentication is required for client connections to the virtual directory. If the client or server don't support it, the connection fails. This value also requires a Service Principal Name (SPN) value for the ExtendedProtectionSPNList parameter.

**Note**: If a proxy server in front of the Exchange server terminates the client-to-proxy Transport Layer Security (TLS) channel, the values Allow or Require need one or more SPN values for the ExtendedProtectionSPNList parameter.

To learn more about Extended Protection for Authentication, see [Understanding Extended Protection for Authentication](https://learn.microsoft.com/previous-versions/office/exchange-server-2010/ff459225(v=exchg.141)).

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

### -IISAuthenticationMethods

> Applicable: Exchange Server 2010

The IISAuthenticationMethods parameter specifies the authentication method that's enabled on the /rpc virtual directory in IIS. You can set the virtual directory to allow Basic authentication or NTLM authentication. Alternatively, you can also set the virtual directory to allow both Basic and NTLM authentication. All other authentication methods are disabled.

You might want to enable both Basic and NTLM authentication if you're using the IIS virtual directory with multiple applications that require different authentication methods.

When you configure this setting using the IIS interface, you can enable as many authentication methods as you want.

For more information about configuring this parameter with multiple values, see the example later in this article.

```yaml
Type: MultiValuedProperty
Parameter Sets: CustomIdentity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010

The Server parameter specifies the Client Access server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
