---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsProxyConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies an existing collection of proxy server configuration settings.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies an existing collection of proxy server configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsProxyConfiguration [[-Identity] <XdsIdentity>] [-AcceptClientCompression <Boolean>]
 [-AcceptServerCompression <Boolean>] [-EnableWhiteSpaceKeepAlive <Boolean>]
 [-MaxClientCompressionCount <UInt32>] [-MaxServerCompressionCount <UInt32>] [-Realm <IRealmChoice>]
 [-RequestServerCompression <Boolean>] [-TreatAllClientsAsRemote <Boolean>]
 [-UseCertificateForClientToProxyAuth <Boolean>] [-UseKerberosForClientToProxyAuth <Boolean>]
 [-UseNtlmForClientToProxyAuth <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [-DisableNtlmFor2010AndLaterClients <Boolean>] [-DnsCacheRecordCount <UInt32>]
 [-MaxClientMessageBodySizeKb <UInt32>] [-MaxServerMessageBodySizeKb <UInt32>] [-OutgoingTlsCount <UInt32>]
 [-AllowPartnerPollingSubscribes <Boolean>] [-EnableLoggingAllMessageBodies <Boolean>]
 [-LoadBalanceEdgeServers <Boolean>] [-LoadBalanceInternalServers <Boolean>] [-MaxKeepAliveInterval <UInt32>]
 [-SpecialConfigurationList <String>] [-TestFeatureList <String>] [-TestParameterList <String>]
 [<CommonParameters>]
```

### Instance
```
Set-CsProxyConfiguration [-Instance <PSObject>] [-AcceptClientCompression <Boolean>]
 [-AcceptServerCompression <Boolean>] [-EnableWhiteSpaceKeepAlive <Boolean>]
 [-MaxClientCompressionCount <UInt32>] [-MaxServerCompressionCount <UInt32>] [-Realm <IRealmChoice>]
 [-RequestServerCompression <Boolean>] [-TreatAllClientsAsRemote <Boolean>]
 [-UseCertificateForClientToProxyAuth <Boolean>] [-UseKerberosForClientToProxyAuth <Boolean>]
 [-UseNtlmForClientToProxyAuth <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [-DisableNtlmFor2010AndLaterClients <Boolean>] [-DnsCacheRecordCount <UInt32>]
 [-MaxClientMessageBodySizeKb <UInt32>] [-MaxServerMessageBodySizeKb <UInt32>] [-OutgoingTlsCount <UInt32>]
 [-AllowPartnerPollingSubscribes <Boolean>] [-EnableLoggingAllMessageBodies <Boolean>]
 [-LoadBalanceEdgeServers <Boolean>] [-LoadBalanceInternalServers <Boolean>] [-MaxKeepAliveInterval <UInt32>]
 [-SpecialConfigurationList <String>] [-TestFeatureList <String>] [-TestParameterList <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Microsoft Lync Server 2010 enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Lync Server 2010, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

The Set-CsProxyConfiguration cmdlet provides a way for you to modify the property values of an existing collection of proxy server configuration settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsProxyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsProxyConfiguration"}

Below Content Applies To: Lync Server 2013

Lync Server enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Lync Server, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

The Set-CsProxyConfiguration cmdlet provides a way for you to modify the property values of an existing collection of proxy server configuration settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsProxyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsProxyConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Skype for Business Server 2015, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

The Set-CsProxyConfiguration cmdlet provides a way for you to modify the property values of an existing collection of proxy server configuration settings.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsProxyConfiguration -Identity service:EdgeServer:atl-edge-001.litwareinc.com -AcceptServerCompression $True
```

In Example 1, the proxy configuration settings that have the Identity service:EdgeServer:atl-edge-001.litwareinc.com are modified to accept server compression.
This is done by calling Set-CsProxyConfiguration and the AcceptServerCompression parameter, and by setting the parameter value to True.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, all the proxy configuration settings that have the Identity service:EdgeServer:atl-edge-001.litwareinc.com are modified to accept server compression.
This is done by calling Set-CsProxyConfiguration and the AcceptServerCompression parameter, and by setting the parameter value to True.

Set-CsProxyConfiguration -Identity service:EdgeServer:atl-edge-001.litwareinc.com -AcceptServerCompression $True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, all the proxy configuration settings that have the Identity service:EdgeServer:atl-edge-001.litwareinc.com are modified to accept server compression.
This is done by calling the Set-CsProxyConfiguration cmdlet and the AcceptServerCompression parameter, and by setting the parameter value to True.

Set-CsProxyConfiguration -Identity service:EdgeServer:atl-edge-001.litwareinc.com -AcceptServerCompression $True

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration | Where-Object {$_.AcceptServerCompression -eq $True} | Set-CsProxyConfiguration -AcceptClientCompression $True
```

The preceding command locates all of the proxy configuration settings that accept server compression, and then modifies these settings to accept client compression as well.
To do this, the command first calls Get-CsProxyConfiguration without any parameters in order to return a collection of all the proxy settings in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AcceptServerCompression property is equal to True.
The filtered collection is then piped to Set-CsProxyConfiguration, which takes each item in the collection and sets the AcceptClientCompression property to True.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 locates all of the proxy configuration settings that accept server compression, and then modifies these settings to accept client compression as well.
To do this, the command first calls Get-CsProxyConfiguration without any parameters in order to return a collection of all the proxy settings in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AcceptServerCompression property is equal to True.
The filtered collection is then piped to Set-CsProxyConfiguration, which takes each item in the collection and sets the AcceptClientCompression property to True.

Get-CsProxyConfiguration | Where-Object {$_.AcceptServerCompression -eq $True} | Set-CsProxyConfiguration -AcceptClientCompression $True

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 locates all of the proxy configuration settings that accept server compression, and then modifies these settings to accept client compression as well.
To do this, the command first calls the Get-CsProxyConfiguration cmdlet without any parameters in order to return a collection of all the proxy settings in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the AcceptServerCompression property is equal to True.
The filtered collection is then piped to the Set-CsProxyConfiguration cmdlet, which takes each item in the collection and sets the AcceptClientCompression property to True.

Get-CsProxyConfiguration | Where-Object {$_.AcceptServerCompression -eq $True} | Set-CsProxyConfiguration -AcceptClientCompression $True

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration -Filter service:* | Set-CsProxyConfiguration -UseNtlmForClientToProxyAuth $False
```

Example 3 shows how you can modify all of the proxy settings that have been configured at the service scope.
In order to do this, the command first calls Get-CsProxyConfiguration and includes the Filter parameter; the filter value "service:*" ensures that only settings that have an Identity that begins with the string value "service:" are returned.
The filtered collection is then piped to Set-CsProxyConfiguration, which takes each item in the collection and sets the UseNtlmForClientToProxyAuth property to False.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can modify all of the proxy settings that have been configured at the service scope.
In order to do this, the command first calls Get-CsProxyConfiguration and includes the Filter parameter; the filter value "service:*" ensures that only settings that have an Identity that begins with the string value "service:" are returned.
The filtered collection is then piped to Set-CsProxyConfiguration, which takes each item in the collection and sets the UseNtlmForClientToProxyAuth property to False.

Get-CsProxyConfiguration -Filter service:* | Set-CsProxyConfiguration -UseNtlmForClientToProxyAuth $False

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can modify all of the proxy settings that have been configured at the service scope.
In order to do this, the command first calls the Get-CsProxyConfiguration cmdlet and includes the Filter parameter; the filter value "service:*" ensures that only settings that have an Identity that begins with the string value "service:" are returned.
The filtered collection is then piped to the Set-CsProxyConfiguration cmdlet, which takes each item in the collection and sets the UseNtlmForClientToProxyAuth property to False.

Get-CsProxyConfiguration -Filter service:* | Set-CsProxyConfiguration -UseNtlmForClientToProxyAuth $False

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the proxy server configuration settings to be modified.
To modify the global settings, use this syntax: -Identity global.
To modify settings configured at the service scope, use syntax similar to this: -Identity "service: EdgeServer:atl-edge-001.litwareinc.com".

If this parameter is not included, Set-CsProxyConfiguration will automatically modify the global settings.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the proxy server configuration settings to be modified.
To modify the global settings, use this syntax:

-Identity global

To modify settings configured at the service scope, use syntax similar to this:

-Identity "service: EdgeServer:atl-edge-001.litwareinc.com"

If this parameter is not included, the Set-CsProxyConfiguration cmdlet will automatically modify the global settings.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
When set to True (the default value) the proxy server expects clients to periodically send a "whitespace message" (an empty message with no content) to indicate that the connection is still active.

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
Indicates whether or not security credentials are processed by the default proxy server realm (SIP Communication Services) or by a custom realm.
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
When set to True, the proxy server functions as if all client connections are external connections that pass through the Edge Server.
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
Below Content Applies To: Lync Server 2010, Lync Server 2013

When set to True (the default value), client endpoints will be allowed to use the Kerberos protocol for authentication.
Although Kerberos is a more secure protocol than NTLM, it cannot be used if the client belongs to a different domain than the server.



Below Content Applies To: Skype for Business Server 2015

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
That is not the case with Kerberos authentication.

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
Below Content Applies To: Lync Server 2010

When set to True, users logging on from Microsoft Lync 2010 must use the Kerberos protocol for authentication.
The default value is False.



Below Content Applies To: Lync Server 2013

When set to True, users logging on from Lync must use the Kerberos protocol for authentication.
The default value is False.



Below Content Applies To: Skype for Business Server 2015

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
Below Content Applies To: Lync Server 2010

{{Fill DnsCacheRecordCount Description}}



Below Content Applies To: Lync Server 2013

Maximum number of records that can be maintained in the DNS record cache.
The default value is 30000.



Below Content Applies To: Skype for Business Server 2015

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
Below Content Applies To: Lync Server 2013

When set to True, Lync Server will log the actual content of all instant messages.
For privacy reasons, message content is typically deleted and only information about the communicating endpoints is included in the log files.

The default value is False.



Below Content Applies To: Skype for Business Server 2015

When set to True, Skype for Business Server 2015 will log the actual content of all instant messages.
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
This parameter is not currently used by Skype for Business Server 2015.

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
This parameter is not currently used by Skype for Business Server 2015.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.
Set-CsProxyConfiguration accepts pipelined instances of the proxy settings object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.
The Set-CsProxyConfiguration cmdlet accepts pipelined instances of the proxy settings object.

## OUTPUTS

###  
Set-CsProxyConfiguration does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

###  
The Set-CsProxyConfiguration cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2eb74d25-05b5-4901-aa92-eeda2f351e25(OCS.14).aspx)

[Get-CsProxyConfiguration]()

[New-CsProxyConfiguration]()

[Remove-CsProxyConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/2eb74d25-05b5-4901-aa92-eeda2f351e25(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2eb74d25-05b5-4901-aa92-eeda2f351e25(OCS.16).aspx)

