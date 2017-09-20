---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsProxyConfiguration
schema: 2.0.0
---

# New-CsProxyConfiguration

## SYNOPSIS

Creates a new collection of proxy configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsProxyConfiguration [-Identity] <XdsIdentity> [-AcceptClientCompression <Boolean>]
 [-AcceptServerCompression <Boolean>] [-EnableWhiteSpaceKeepAlive <Boolean>]
 [-MaxClientCompressionCount <UInt32>] [-MaxServerCompressionCount <UInt32>] [-Realm <IRealmChoice>]
 [-RequestServerCompression <Boolean>] [-TreatAllClientsAsRemote <Boolean>]
 [-UseCertificateForClientToProxyAuth <Boolean>] [-UseKerberosForClientToProxyAuth <Boolean>]
 [-UseNtlmForClientToProxyAuth <Boolean>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-DisableNtlmFor2010AndLaterClients <Boolean>] [-DnsCacheRecordCount <UInt32>]
 [-MaxClientMessageBodySizeKb <UInt32>] [-MaxServerMessageBodySizeKb <UInt32>] [-OutgoingTlsCount <UInt32>]
 [-AllowPartnerPollingSubscribes <Boolean>] [-EnableLoggingAllMessageBodies <Boolean>]
 [-LoadBalanceEdgeServers <Boolean>] [-LoadBalanceInternalServers <Boolean>] [-MaxKeepAliveInterval <UInt32>]
 [-SpecialConfigurationList <String>] [-TestFeatureList <String>] [-TestParameterList <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Skype for Business Server, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.
These new collections are created by using the New-CsProxyConfiguration cmdlet.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsProxyConfiguration -Identity "service:EdgeServer:atl-edge-001.litwareinc.com" -RequestServerCompression $True -MaxClientMessageBodySizeKb 256
```

Example 1 creates a new collection of proxy configuration settings for the service EdgeServer:atl-edge-001.litwareinc.com.
These new settings use all the default proxy server property values except for two: RequestServerCompression, which is set to True; and MaxClientMessageBodySizeKb, which is set to 256.
Note that this command will fail if proxy server settings have already been configured for the service EdgeServer:atl-edge-001.litwareinc.com.


### -------------------------- EXAMPLE 2 --------------------------
```

$x = New-CsProxyConfiguration -Identity "service:EdgeServer:atl-edge-001.litwareinc.com" -InMemory

$x.RequestServerCompression = $True

$x.MaxClientMessageBodySizeKb = 256

Set-CsProxyConfiguration -Instance $x
```

The commands shown in Example 2 demonstrate how you can create a collection of proxy server settings that initially exist only in memory.
To do this, the first command calls the New-CsProxyConfiguration cmdlet along with two parameters: Identity (which specifies the Identity for the settings) and InMemory, which indicates that the new settings should be created in memory only.
The resulting object is stored in the variable $x.

After these virtual settings have been created, commands 2 and 3 are used to modify the values of the RequestServerCompression and MaxClientMessageBodySizeKb properties, respectively.
Finally, command 4 is used to transform the virtual proxy server configuration settings into an actual collection of settings applied to the service EdgeServer:atl-edge-001.litwareinc.com.
This final command is mandatory.
If you do not call the Set-CsProxyConfiguration cmdlet, no settings will be applied to EdgeServer:atl-edge-001.litwareinc.com and the virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.


## PARAMETERS

### -Identity

Unique identifier for the proxy server configuration settings to be created.
Proxy server configuration settings can only be created at the service scope, and only for the Edge Server and Registrar services.
You cannot create settings at the global scope; likewise, you cannot create settings at the service scope if the service in question already hosts a collection of proxy server settings.
For example, if the service Registrar:atl-cs-001.litwareinc.com already hosts proxy server settings, then any command that attempts to create new settings for that service will fail.

To specify the Identity for your new proxy server settings, use syntax similar to this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptClientCompression
When set to True (the default value), the proxy server will accept all incoming compression requests from client endpoints.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptServerCompression
When set to True (the default value), the proxy server will accept all incoming compression requests from other servers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableWhiteSpaceKeepAlive
When set to True (the default value), the proxy server expects clients to periodically send a "whitespace message" (an empty message with no content) to indicate that the connection is still active.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxClientCompressionCount
Indicates the maximum number of client-to-server connections that can be compressed at any given time; additional connections beyond this limit will not be compressed.
The compression count can be set to any integer value between 0 and 65535, inclusive.
The default value is 15000.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxServerCompressionCount
Indicates the maximum number of server-to-server connections that can be compressed at any given time; additional connections beyond this limit will not be compressed.
The server compression count can be set to any integer value between 0 and 65535, inclusive.
The default value is 1024.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Realm
Indicates whether or not security credentials are processed by the default proxy server realm (SIP Communications Service) or by a custom realm.
Custom realms must be specified (and created) by using the New-CsSipProxyCustom cmdlet.

```yaml
Type: IRealmChoice
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestServerCompression
When set to True (the default value) the proxy server requests that compression be used on all outgoing connections to other servers.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatAllClientsAsRemote
When set to True, the proxy server functions as if all client connections are external connections that pass through the Edge Server running the Access Edge service.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCertificateForClientToProxyAuth
When set to True (the default value), client endpoints will be allowed to use certificates for authentication.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseKerberosForClientToProxyAuth

When set to True (the default value), client endpoints will be allowed to use the Kerberos protocol for authentication.
Although Kerberos is a more secure protocol than NTLM, it cannot be used if the client belongs to a different realm than the server.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseNtlmForClientToProxyAuth
When set to True (the default value), client endpoints will be allowed to use the NTLM protocol for authentication.
Although NTLM is a less secure protocol than Kerberos, NTLM can be used if the client belongs to a different domain than the server.
That is not true for Kerberos authentication.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableNtlmFor2010AndLaterClients

When set to True, users logging on from Skype for Business must use the Kerberos protocol for authentication.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DnsCacheRecordCount

Maximum number of records that can be maintained in the DNS record cache.
The default value is 3000.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxClientMessageBodySizeKb
The maximum-allowed size (in kilobytes) for the body of a message sent from a client endpoint.
The default value is 128, meaning that messages with a body size larger than 128 KB will be rejected.
The client message body size can be set to any integer value between 64 and 256, inclusive.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxServerMessageBodySizeKb
The maximum-allowed size (in kilobytes) for the body of a message sent from another server.
The default value is 5000, meaning that messages with a body size larger than 5000 KB will be rejected.
The server message body size can be set to any integer value between 1000 and 20000, inclusive.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutgoingTlsCount
Specifies the maximum number of Transport Layer Security (TLS) connections that can be used for each internal server.
The minimum number of TLS connections is 1, and the maximum number is 4.
By default, OutgoingTlsCount is set to 4.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPartnerPollingSubscribes
When set the True, partner applications are allowed to periodically poll the service for state changes.
The default value is False ($False).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLoggingAllMessageBodies
When set to True, Microsoft Lync Server will log the actual content of all instant messages.
For privacy reasons, message content is typically deleted and only information about the communicating endpoints is included in the log files.

The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoadBalanceEdgeServers
When True, software load balancing is employed for requests to Edge Servers.
The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoadBalanceInternalServers
When True, software load balancing is employed for requests to Registrars and other internal servers.
The default value is true ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxKeepAliveInterval
Specifies the amount of time (in minutes) that can elapse before the server verifies that the connection with the client is still valid.
The default value is 20 minutes.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpecialConfigurationList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestFeatureList
This parameter is not currently used by Skype for Business Server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestParameterList
This parameter is not currently used by Skype for Business Server.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsProxyConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsProxyConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

## NOTES

## RELATED LINKS

[Get-CsProxyConfiguration]()

[Remove-CsProxyConfiguration]()

[Set-CsProxyConfiguration]()

