---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010
title: Enable-OutlookAnywhere
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Enable-OutlookAnywhere

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Enable-OutlookAnywhere cmdlet to enable Outlook Anywhere on a computer running Microsoft Exchange Server 2010 that has the Client Access server role installed. Running the Enable-OutlookAnywhere cmdlet enables the server to accept requests from Microsoft Office Outlook 2007 and Outlook 2003 client computers from the Internet by using Outlook Anywhere, also known as RPC over HTTP.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Enable-OutlookAnywhere
 -ClientAuthenticationMethod <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | MaxValidValue | Misconfigured>
 -ExternalHostname <Hostname> -SSLOffloading <$true | $false> [-Confirm] [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>] [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <None | Allow | Require>] [-IISAuthenticationMethods <MultiValuedProperty>]
 [-Server <ServerIdParameter>] [-WhatIf] [-XropUrl <Uri>] [<CommonParameters>]
```

### Set1
```
Enable-OutlookAnywhere
 -DefaultAuthenticationMethod <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | MaxValidValue | Misconfigured>
 -ExternalHostname <Hostname> -SSLOffloading <$true | $false> [-Confirm] [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>] [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <None | Allow | Require>] [-Server <ServerIdParameter>] [-WhatIf]
 [-XropUrl <Uri>] [<CommonParameters>]
```

## DESCRIPTION
The Enable-OutlookAnywhere cmdlet enables the Exchange 2010 Client Access server for Outlook Anywhere. This lets the server accept requests from Outlook 2007 and Outlook 2003 clients from the Internet by using Outlook Anywhere.

This cmdlet can be successfully run only if the RPC over HTTP proxy Windows networking component is already installed.

When you run this cmdlet, it can take as long as an hour for the settings to become effective, depending on how long it takes for Active Directory to replicate.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-OutlookAnywhere -Server:Server01 -ExternalHostname:mail.contoso.com -ClientAuthenticationMethod:Ntlm -SSLOffloading:$true
```

This example enables the server Server01 for Outlook Anywhere. The external host name is set to mail.contoso.com, both Basic and NTLM authentication are used, and SSL offloading is set to $true.

### -------------------------- Example 2 --------------------------
```
Enable-OutlookAnywhere -DefaultAuthenticationMethod:Ntlm -ExternalHostname:mail.contoso.com -SSLOffloading:$false
```

This example enables Outlook Anywhere on the server that has the Client Access role installed. The SSLOffloading parameter is set to $false, the ExternalHostname parameter is specified as mail.contoso.com, and the DefaultAuthenticationMethod parameter is set to NTLM.

### -------------------------- Example 3 --------------------------
```
Enable-Outlookanywhere -IISAuthenticationMethods NTLM -SSlOffloading:$false -ClientAuthenticationMethod:Basic -ExternalHostname:mail.contoso.com
```

This example enables the Exchange Client Access server for Outlook Anywhere. The SSLOffloading parameter is set to $false, the ExternalHostname parameter is set to mail.contoso.com, the IISAuthenticationMethods parameter is set to NTLM, and the ClientAuthenticationMethod parameter is set to Basic.

## PARAMETERS

### -ClientAuthenticationMethod
The ClientAuthenticationMethod parameter specifies the authentication method that the Autodiscover service provides to the Outlook Anywhere clients to authenticate to the Client Access server. This parameter accepts the following values:

- Basic

- Ntlm

- MaxValidValue Also known as Negotiate Ex authentication (NegoEx). This authentication type is reserved for future Microsoft use and shouldn't be used. Use of this setting will cause authentication to fail.

This parameter must be specified if you don't use the DefaultAuthenticationMethod parameter. When you use this parameter without specifying the IISAuthenticationMethods parameter, IISAuthenticationMethods parameter is set to both NTLM and Basic.

Although this parameter only allows setting one authentication method, the Shell doesn't return an error if you include multiple values.

```yaml
Type: Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | MaxValidValue | Misconfigured
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultAuthenticationMethod
The DefaultAuthenticationMethod parameter specifies whether to set both the ClientAuthenticationMethod and IISAuthenticationMethods parameters to the same authentication value.

When you set an authentication value by using the DefaultAuthenticationMethod parameter, you force the specified authentication method to be used on the /rpc virtual directory in Internet Information Services (IIS). This parameter accepts the following values:

- Basic

- Ntlm

- MaxValidValue Also known as Negotiate Ex authentication (NegoEx). This authentication type is reserved for future Microsoft use and shouldn't be used. Use of this setting will cause authentication to fail.

If the DefaultAuthenticationMethod parameter is specified, neither the ClientAuthenticationMethod nor the IISAuthenticationMethods parameter can be used.

```yaml
Type: Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | MaxValidValue | Misconfigured
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalHostname
The ExternalHostname parameter specifies the external host name to use in the Outlook profiles for users enabled for Outlook Anywhere.

```yaml
Type: Hostname
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SSLOffloading
The SSLOffloading parameter specifies whether the Client Access server requires Secure Sockets Layer (SSL). This value should be set only to $true when an SSL hardware solution is running in front of the Client Access server.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ExtendedProtectionFlags
The ExtendedProtectionFlags parameter is used to customize the options you use if you're using Extended Protection for Authentication. The possible values are:

- None Default setting.

- Proxy Specifies that a proxy is terminating the SSL channel. A Service Principal Name (SPN) must be registered in the ExtendedProtectionSPNList parameter if proxy mode is configured.

- ProxyCoHosting Specifies that both HTTP and HTTPS traffic may be accessing the Client Access server and that a proxy is located between at least some of the clients and the Client Access server.

- AllowDotlessSPN Specifies whether you want to support valid SPNs that aren't in the fully qualified domain name (FQDN) format, for example ContosoMail. You specify valid SPNs with the ExtendedProtectionSPNList parameter. This option makes extended protection less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel.

- NoServiceNameCheck Specifies that the SPN list won't be checked to validate a channel binding token. This option makes Extended Protection for Authentication less secure. We generally don't recommend this setting.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionSPNList
The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the specified virtual directory.

The possible values are:

- Null This is the default value.

- Single SPN or comma delimited list of valid SPNs By default, you must specify the fully qualified domain name (FQDN) (for example mail.contoso.com) for each SPN. If you want to add an SPN that's not an FQDN (for example, ContosoMail), you must also use the ExtendedProtectionTokenChecking parameter with the AllowDotlessSPN value. You specify the domain in SPN format. The SPN format is `<protocol>/<FQDN>`. For example, a valid entry could be `HTTP/mail.contoso.com`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionTokenChecking
The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the specified Exchange virtual directory. Extended Protection for Authentication isn't enabled by default. The available settings are:

- None Extended Protection for Authentication won't be used. Connections between the client and Exchange won't use Extended Protection for Authentication on this virtual directory. This is the default setting.

- Allow Extended Protection for Authentication will be used for connections between the client and Exchange on this virtual directory if both the client and server support Extended Protection for Authentication. Connections that don't support Extended Protection for Authentication on the client and server will work, but may not be as secure as a connection using Extended Protection for Authentication.

If you have a proxy server between the client and the Client Access server that's configured to terminate the client-to-proxy SSL channel, you must also configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.

- Require Extended Protection for Authentication will be used for all connections between clients and Exchange servers for this virtual directory. If either the client or server doesn't support Extended Protection for Authentication, the connection between the client and server will fail. If you set this option, you must also set a value for the ExtendedProtectionSPNList parameter.

If you have a proxy server between the client and the Client Access server that's configured to terminate the client-to-proxy SSL channel, you must also configure one or more SPNs using the parameter ExtendedProtectionSPNList.

To learn more about Extended Protection for Authentication, see Understanding Extended Protection for Authentication.

```yaml
Type: None | Allow | Require
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IISAuthenticationMethods
The IISAuthenticationMethods parameter specifies the authentication method that's enabled on the /rpc virtual directory in IIS. You can set the virtual directory to allow Basic authentication or NTLM authentication. Alternatively, you can also set the virtual directory to allow both Basic and NTLM authentication. All other authentication methods are disabled.

You may want to enable both Basic and NTLM authentication if you're using the IIS virtual directory with multiple applications that require different authentication methods.

When you configure this setting using the IIS interface, you can enable as many authentication methods as you want.

For more information about configuring this parameter with multiple values, see the example later in this topic.

```yaml
Type: MultiValuedProperty
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the name of the Client Access server to be enabled for Outlook Anywhere.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: True
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

### -XropUrl
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
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

[Online Version](https://technet.microsoft.com/library/e5e30ed6-cc78-4e0c-b200-3160ccb77deb.aspx)
