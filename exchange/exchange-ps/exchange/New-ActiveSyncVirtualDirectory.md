---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-ActiveSyncVirtualDirectory

## SYNOPSIS
!!! Exchange Server 2010

Use the New-ActiveSyncVirtualDirectory cmdlet to create Microsoft Exchange ActiveSync virtual directories on your specified Web sites.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the New-ActiveSyncVirtualDirectory cmdlet to create Microsoft Exchange ActiveSync virtual directories on your specified websites.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the New-ActiveSyncVirtualDirectory cmdlet to create Exchange ActiveSync virtual directories that are used in Internet Information Services (IIS) on Microsoft Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-ActiveSyncVirtualDirectory [-ApplicationRoot <String>] [-AppPoolId <String>] [-Confirm]
 [-DomainController <Fqdn>] [-ExtendedProtectionFlags <MultiValuedProperty>]
 [-ExtendedProtectionSPNList <MultiValuedProperty>] [-ExtendedProtectionTokenChecking <None | Allow | Require>]
 [-ExternalAuthenticationMethods <MultiValuedProperty>] [-ExternalUrl <Uri>]
 [-InstallProxySubDirectory <$true | $false>] [-InternalAuthenticationMethods <MultiValuedProperty>]
 [-InternalUrl <Uri>] [-Path <String>] [-WebSiteName <String>] [-WhatIf] [-Role <ClientAccess | Mailbox>]
 [-Server <ServerIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The New-ActiveSyncVirtualDirectory cmdlet creates an Exchange ActiveSync virtual directory on the specified server under the specified Web site. The Exchange ActiveSync virtual directory created is named Microsoft-Server-ActiveSync. Only one Exchange ActiveSync virtual directory can exist in each Exchange ActiveSync Web site.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync virtual directory settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The New-ActiveSyncVirtualDirectory cmdlet creates an Exchange ActiveSync virtual directory on the specified server under the specified website. The Exchange ActiveSync virtual directory created is named Microsoft-Server-ActiveSync. Only one Exchange ActiveSync virtual directory can exist in each Exchange ActiveSync website.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync virtual directory settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

The New-ActiveSyncVirtualDirectory cmdlet creates an Exchange ActiveSync virtual directory on the specified server under the specified website. The Exchange ActiveSync virtual directory created is named Microsoft-Server-ActiveSync. Only one Exchange ActiveSync virtual directory can exist in each Exchange ActiveSync website.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalURL http://www.contoso.com/Microsoft-Server-ActiveSync
```

This example creates an Exchange ActiveSync virtual directory.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalUrl http://www.contoso.com/Microsoft-Server-ActiveSync
```

This example creates an Exchange ActiveSync virtual directory and specifies the external URL used to connect to the virtual directory.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalUrl http://www.contoso.com/Microsoft-Server-ActiveSync
```

This example creates an Exchange ActiveSync virtual directory and specifies the external URL used to connect to the virtual directory.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalURL http://www.contoso.com/mail -InternalURL http://contoso/mail
```

This example creates an Exchange ActiveSync virtual directory and specifies several settings.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalUrl http://www.contoso.com/mail -InternalUrl http://contoso/mail
```

This example creates an Exchange ActiveSync virtual directory and specifies the external and internal URLs used to connect to the virtual directory.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalUrl http://www.contoso.com/mail -InternalUrl http://contoso/mail
```

This example creates an Exchange ActiveSync virtual directory and specifies the external and internal URLs used to connect to the virtual directory.

### Example 3 -------------------------- (Exchange Server 2010)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalURL "http://www.fourthcoffee.com/Microsoft-Server-ActiveSync"
```

This example creates an Exchange ActiveSync virtual directory for the company Fourth Coffee.

### Example 3 -------------------------- (Exchange Server 2013)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalUrl "http://www.fourthcoffee.com/Microsoft-Server-ActiveSync"
```

This example creates an Exchange ActiveSync virtual directory for the company Fourth Coffee.

### Example 3 -------------------------- (Exchange Server 2016)
```
New-ActiveSyncVirtualDirectory -WebSiteName "Default Web Site" -ExternalUrl "http://www.fourthcoffee.com/Microsoft-Server-ActiveSync"
```

This example creates an Exchange ActiveSync virtual directory for the company Fourth Coffee.

## PARAMETERS

### -ApplicationRoot
!!! Exchange Server 2010

The ApplicationRoot parameter specifies the metabase path of the virtual directory. By default, this path is the same as the Web site in which the virtual directory is created.



!!! Exchange Server 2013, Exchange Server 2016

The ApplicationRoot parameter specifies the metabase path of the virtual directory. By default, this path is the same as the website in which the virtual directory is created.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppPoolId
!!! Exchange Server 2010, Exchange Server 2013

The AppPoolId parameter specifies the pool of programs that can be used with the virtual directory.



!!! Exchange Server 2016

The AppPoolId parameter specifies the IIS application pool in which the virtual directory runs. We recommend that you leave this parameter at its default setting.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -ExtendedProtectionFlags
!!! Exchange Server 2010, Exchange Server 2013

The ExtendedProtectionFlags parameter is used to customize the options you use if you're using Extended Protection for Authentication. The possible values are:

- None Default setting.

- Proxy Specifies that a proxy is terminating the SSL channel. A Service Principal Name (SPN) must be registered in the ExtendedProtectionSPNList parameter if proxy mode is configured.

- ProxyCoHosting Specifies that both HTTP and HTTPS traffic may be accessing the Client Access server and that a proxy is located between at least some of the clients and the Client Access server.

- AllowDotlessSPN Specifies whether you want to support valid SPNs that aren't in the fully qualified domain name (FQDN) format, for example ContosoMail. You specify valid SPNs with the ExtendedProtectionSPNList parameter. This option makes extended protection less secure because dotless certificates aren't unique, so it isn't possible to ensure that the client-to-proxy connection was established over a secure channel.

- NoServiceNameCheck Specifies that the SPN list won't be checked to validate a channel binding token. This option makes Extended Protection for Authentication less secure. We generally don't recommend this setting.



!!! Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionSPNList
!!! Exchange Server 2010, Exchange Server 2013

The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the specified virtual directory.

The possible values are:

- Null This is the default value.

- Single SPN or comma delimited list of valid SPNs By default, you must specify the fully qualified domain name (FQDN) (for example mail.contoso.com) for each SPN. If you want to add an SPN that's not an FQDN (for example, ContosoMail), you must also use the ExtendedProtectionTokenChecking parameter with the AllowDotlessSPN value. You specify the domain in SPN format. The SPN format is \<protocol\>/\<FQDN\>. For example, a valid entry could be HTTP/mail.contoso.com.



!!! Exchange Server 2016

The ExtendedProtectionSPNList parameter specifies a list of valid Service Principal Names (SPNs) if you're using Extended Protection for Authentication on the virtual directory. Valid values are:

- $null: This is the default value.

- Single SPN or comma delimited list of valid SPNs: The SPN value format is \<protocol\>/\<FQDN\>. For example, HTTP/mail.contoso.com. To add an SPN that's not an FQDN (for example, HTTP/ContosoMail), you also need to use the AllowDotlessSPN value for the ExtendedProtectionFlags parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedProtectionTokenChecking
!!! Exchange Server 2010

The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the specified Exchange virtual directory. Extended Protection for Authentication isn't enabled by default. The available settings are:

- None Extended Protection for Authentication won't be used. Connections between the client and Exchange won't use Extended Protection for Authentication on this virtual directory. This is the default setting.

- Allow Extended Protection for Authentication will be used for connections between the client and Exchange on this virtual directory if both the client and server support Extended Protection for Authentication. Connections that don't support Extended Protection for Authentication on the client and server will work, but may not be as secure as a connection using Extended Protection for Authentication.

If you have a proxy server between the client and the Client Access server that's configured to terminate the client-to-proxy SSL channel, you must also configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.

- Require Extended Protection for Authentication will be used for all connections between clients and Exchange servers for this virtual directory. If either the client or server doesn't support Extended Protection for Authentication, the connection between the client and server will fail. If you set this option, you must also set a value for the ExtendedProtectionSPNList parameter.

If you have a proxy server between the client and the Client Access server that's configured to terminate the client-to-proxy SSL channel, you must also configure one or more SPNs using the parameter ExtendedProtectionSPNList.

To learn more about Extended Protection for Authentication, see Understanding Extended Protection for Authentication.



!!! Exchange Server 2013

The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the specified Exchange virtual directory. Extended Protection for Authentication isn't enabled by default. The available settings are:

- None: Extended Protection for Authentication isn't used. Connections between the client and Exchange don't use Extended Protection for Authentication on the virtual directory. This is the default value.

- Allow: Extended Protection for Authentication is used for connections between the client and Exchange on the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication on the client and server will work, but may not be as secure as a connection using Extended Protection for Authentication.

- Require: Extended Protection for Authentication is used for all connections between clients and Exchange servers for this virtual directory. If either the client or server doesn't support it, the connection between the client and server will fail. If you use this value, you also need to set a value for the ExtendedProtectionSPNList parameter.

Note:

If you use the value Allow or Require, and you have a proxy server between the client and the Client Access server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) using the ExtendedProtectionSPNList parameter.



!!! Exchange Server 2016

The ExtendedProtectionTokenChecking parameter defines how you want to use Extended Protection for Authentication on the virtual directory. Extended Protection for Authentication isn't enabled by default. Valid values are:

- None: Extended Protection for Authentication isn't be used on the virtual directory. This is the default value.

- Allow: Extended Protection for Authentication is used for connections between clients and the virtual directory if both the client and server support it. Connections that don't support Extended Protection for Authentication will work, but may not be as secure as connections that use Extended Protection for Authentication.

- Require: Extended Protection for Authentication is used for all connections between clients and the virtual directory. If either the client or server doesn't support it, the connection will fail. If you use this value, you also need to set an SPN value for the ExtendedProtectionSPNList parameter.

Note:

If you use the value Allow or Require, and you have a proxy server between the client and the Client Access services on the Mailbox server that's configured to terminate the client-to-proxy SSL channel, you also need to configure one or more Service Principal Names (SPNs) by using the ExtendedProtectionSPNList parameter.



```yaml
Type: None | Allow | Require
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAuthenticationMethods
!!! Exchange Server 2010, Exchange Server 2013

The ExternalAuthenticationMethods parameter specifies the authentication methods supported by the server that contains the virtual directory when access is requested from outside the network's firewall. If this parameter isn't set, all authentication methods can be used.



!!! Exchange Server 2016

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

The default value is blank ($null), which means all available authentication methods are accepted.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalUrl
!!! Exchange Server 2010, Exchange Server 2013

The ExternalUrl parameter specifies the URL used to connect to the virtual directory from outside the network's firewall.



!!! Exchange Server 2016

The ExternalURL parameter specifies the URL that's used to connect to the virtual directory from outside the firewall.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InstallProxySubDirectory
!!! Exchange Server 2010

The InstallProxySubDirectory parameter controls the creation of the new Exchange ActiveSync subdirectory used for proxying between Microsoft Exchange Server 2010 and Exchange Server 2007.



!!! Exchange Server 2013

The InstallProxySubDirectory parameter controls the creation of the new Exchange ActiveSync subdirectory used for proxying between Microsoft Exchange Server 2013 and previous versions of Exchange.



!!! Exchange Server 2016

The InstallProxySubDirectory parameter was used to create an subdirectory that was required for proxing ActiveSync connections with Exchange 2007.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalAuthenticationMethods
!!! Exchange Server 2010, Exchange Server 2013

The InternalAuthenticationMethods parameter specifies the authentication methods supported by the server that contains the virtual directory when access is requested from inside the network's firewall. If this parameter isn't set, all authentication methods can be used.



!!! Exchange Server 2016

The InternalAuthenticationMethods parameter restricts the authentication methods that can be used to connect to the virtual directory from inside the firewall. Valid values are:

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

Although you can specify any of these values, whether or not the authentication method actually works for internal connections depends on other factors. For example:

- Is the authentication method available on the virtual directory?

- Is the authentication method available, but disabled on the virtual directory?

The default value is blank ($null), which means all available authentication methods are accepted.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternalUrl
!!! Exchange Server 2010, Exchange Server 2013

The InternalUrl parameter specifies the URL used to connect to the virtual directory from inside the network's firewall.



!!! Exchange Server 2016

The InternalURL parameter specifies the URL that's used to connect to the virtual directory from inside the firewall.



```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
!!! Exchange Server 2010, Exchange Server 2013

The Path parameter sets the directory that contains the virtual directory's system files.



!!! Exchange Server 2016

The Path parameter specifies the file system path of the virtual directory. We recommend using this parameter only when you need to use a custom location for the virtual directory files. The default value is blank ($null), which indicates the default location is used.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebSiteName
!!! Exchange Server 2010

The WebSiteName parameter specifies the name of the Exchange ActiveSync Web site in which to create the new virtual directory.



!!! Exchange Server 2013

The WebSiteName parameter specifies the name of the Exchange ActiveSync website in which to create the virtual directory.



!!! Exchange Server 2016

The WebSiteName parameter specifies the name of the IIS website under which the virtual directory is created. You don't need to use this parameter to create the virtual directory under the default website.



```yaml
Type: String
Parameter Sets: (All)
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Role
!!! Exchange Server 2013

The Role parameter specifies the configuration that should be used when the virtual directory is created. The following are the values that can be used with this parameter:

- FrontEnd configure the virtual directory for use on a Client Access server

- BackEnd Configure the virtual directory for use on a Mailbox server.



!!! Exchange Server 2016

The Role parameter species the configuration for the virtual directory. Valid values are:

- ClientAccess: Configure the virtual directory for the Client Access (frontend) services on the Mailbox server.

- Mailbox: Configure the virtual directory for the backend services on the Mailbox server.

Client connections are proxied from the Client Access services to the backend services on local or remote Mailbox servers. Clients don't connect directly to the backend services.



```yaml
Type: ClientAccess | Mailbox
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
!!! Exchange Server 2013

The Server parameter specifies the Exchange server on which you want to create the virtual directory. You can use any value that uniquely identifies the server, for example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use the Server parameter, the virtual directory will be created on the server where the Remote PowerShell session is established This will always be a Mailbox server. If you want to create the virtual directory on a Client Access server or another Mailbox server, you must use the Server parameter.



!!! Exchange Server 2016

The Server parameter specifies the Exchange server that hosts the virtual directory. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- ExchangeLegacyDN



```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
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

[Online Version](https://technet.microsoft.com/library/30cdae85-3d72-450f-98cd-be1413e86cc0.aspx)

