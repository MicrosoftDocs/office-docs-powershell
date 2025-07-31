---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-ecpvirtualdirectory
schema: 2.0.0
title: Set-EcpVirtualDirectory
---

# Set-EcpVirtualDirectory

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-EcpVirtualDirectory cmdlet to modify Exchange Control Panel (ECP) virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers. The ECP virtual directory manages the Exchange admin center.

The ECP web management interface was introduced in Exchange Server 2010. In Exchange Server 2013 and Exchange Server 2016, the EAC virtual directories and the corresponding management cmdlets still use ECP in the name. You can use these cmdlets to manage ECP virtual directories on Exchange 2010, Exchange 2013, and Exchange 2016 servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-EcpVirtualDirectory [-Identity] <VirtualDirectoryIdParameter>
 [-AdfsAuthentication <Boolean>]
 [-AdminEnabled <Boolean>]
 [-BasicAuthentication <Boolean>]
 [-Confirm]
 [-DigestAuthentication <Boolean>]
 [-DomainController <Fqdn>]
 [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>]
 [-ExtendedProtectionTokenChecking <ExtendedProtectionTokenCheckingMode>]
 [-ExternalAuthenticationMethods <MultiValuedProperty>]
 [-ExternalUrl <Uri>]
 [-FormsAuthentication <Boolean>]
 [-GzipLevel <GzipLevel>]
 [-InternalUrl <Uri>]
 [-OAuthAuthentication <Boolean>]
 [-OwaOptionsEnabled <Boolean>]
 [-WhatIf]
 [-WindowsAuthentication <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-EcpVirtualDirectory -Identity "Server01\ecp (Default Web site)" -BasicAuthentication:$false
```

This example disables Basic authentication on the default ECP virtual directory on the server named Server01.

### Example 2
```powershell
Set-EcpVirtualDirectory -Identity "Server01\ecp (Default Web site)" -AdminEnabled $false
```

This example turns off the Internet access to the EAC on server named Server01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the ECP virtual directory that you want to modify. You can use any value that uniquely identifies the virtual directory. For example:

- Name or Server\\Name
- Distinguished name (DN)
- GUID

The Name value uses the syntax `"VirtualDirectoryName (WebsiteName)"` from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax `VirtualDirectoryName*`.

To manage the first ECP virtual directory created in an Exchange organization, you need to use this cmdlet on the computer that includes the first ECP virtual directory. If you create additional ECP virtual directories, you can manage those remotely.

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

### -AdfsAuthentication

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AdfsAuthentication parameter specifies that the ECP virtual directory allows users to authenticate through Active Directory Federation Services (AD FS) authentication. This parameter accepts $true or $false. The default value is $false.

The ADFS authentication settings for Set-OwaVirtualDirectory and Set-EcpVirtualDirectory are related. You need to set the AdfsAuthentication parameter on Set-EcpVirtualDirectory to $true before you can set the AdfsAuthentication parameter on Set-OwaVirtualDirectory to $true. Likewise, you need to set the AdfsAuthentication parameter on Set-OwaVirtualDirectory to $false before you can set the AdfsAuthentication parameter on Set-EcpVirtualDirectory to $false.

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

### -AdminEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AdminEnabled parameter specifies that the EAC isn't able to be accessed through the Internet. For more information, see [Turn off access to the Exchange admin center](https://learn.microsoft.com/Exchange/architecture/client-access/disable-exchange-admin-center-access). This parameter accepts $true or $false.

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

### -BasicAuthentication

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The BasicAuthentication parameter specifies whether Basic authentication is enabled on the virtual directory. Valid values are:

- $true: Basic authentication is enabled. This is the default value.
- $false: Basic authentication is disabled.

This parameter can be used with the FormsAuthentication parameter or with the DigestAuthentication and WindowsAuthentication parameters.

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

### -DigestAuthentication

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DigestAuthentication parameter specifies whether Digest authentication is enabled on the virtual directory. Valid values are:

- $true: Digest authentication is enabled.
- $false: Digest authentication is disabled. This is the default value.

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

### -ExtendedProtectionFlags

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExtendedProtectionFlags parameter specifies custom settings for Extended Protection for Authentication on the virtual directory. Valid values are:

- None: This is the default setting.
- AllowDotlessSPN: Required if you want to use Service Principal Name (SPN) values that don't contain FQDNs (for example, HTTP/ContosoMail instead of HTTP/mail.contoso.com). You specify SPNs with the ExtendedProtectionSPNList parameter. This setting makes Extended Protection for Authentication less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel.
- NoServiceNameCheck: The SPN list isn't checked to validate a channel binding token. This setting makes Extended Protection for Authentication less secure. We generally don't recommend this setting.
- Proxy: A proxy server is responsible for terminating the SSL channel. To use this setting, you need to register an SPN by using the ExtendedProtectionSPNList parameter.
- ProxyCoHosting: HTTP and HTTPS traffic may be accessing the virtual directory, and a proxy server is located between at least some of the clients and the Client Access services on the Exchange server.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the virtual directory. Valid values are:

- $null: This is the default value.
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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the virtual directory. Extended Protection for Authentication isn't enabled by default. Valid values are:

- None: Extended Protection for Authentication isn't be used on the virtual directory. This is the default value.
- Allow: Extended Protection for Authentication is used for connections between clients and the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication will work, but may not be as secure as connections that use Extended Protection for Authentication.
- Require: Extended Protection for Authentication is used for all connections between clients and the virtual directory. If either the client or server doesn't support it, the connection will fail. If you use this value, you also need to set an SPN value for the ExtendedProtectionSPNList parameter.

**Note**: If you use the value Allow or Require, and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExternalAuthenticationMethods parameter specifies the authentication methods supported on the Exchange server from outside the firewall.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ExternalURL parameter specifies the URL that's used to connect to the virtual directory from outside the firewall.

This setting is also important when Secure Sockets Layer (SSL) is used. You need to set this parameter to allow the Autodiscover service to return the URL for the ECP virtual directory.

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

### -FormsAuthentication

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The FormsAuthentication parameter specifies whether forms-based authentication is enabled on the ECP virtual directory. Valid values are:

- $true: Forms authentication is enabled. The BasicAuthentication parameter is set to $true, and the DigestAuthentication and WindowsAuthentication parameters are set to $false.
- $false: Forms authentication is disabled.

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

### -GzipLevel

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The GzipLevel parameter sets Gzip configuration information for the ECP virtual directory.

```yaml
Type: GzipLevel
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalUrl

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The InternalURL parameter specifies the URL that's used to connect to the virtual directory from inside the firewall.

This setting is also important when SSL is used. You need to set this parameter to allow the Autodiscover service to return the URL for the ECP virtual directory.

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

### -OAuthAuthentication

> Applicable: Exchange Server 2019

{{ Fill OAuthAuthentication Description }}

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

### -OwaOptionsEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The OwaOptionsEnabled parameter specifies that Outlook on the web Options is enabled for end users. If this parameter is set to $false, users aren't able to access Outlook on the web Options. You may want to disable access if your organization uses non-Microsoft provider tools. This parameter accepts $true or $false.

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

### -WindowsAuthentication

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WindowsAuthentication parameter specifies whether Integrated Windows authentication is enabled on the virtual directory. Valid values are:

- $true: Integrated Windows authentication is enabled. This is the default value.
- $false: Integrated Windows authentication is disabled.

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
