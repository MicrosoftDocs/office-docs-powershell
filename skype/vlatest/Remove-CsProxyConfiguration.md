---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsProxyConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes an existing collection of proxy server configuration settings.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes an existing collection of proxy server configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsProxyConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Microsoft Lync Server 2010 enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Lync Server 2010, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

Any new proxy server settings you create can later be removed by using the Remove-CsProxyConfiguration cmdlet.
You can also run Remove-CsProxyConfiguration against the global collection.
In that case, however, the global settings will not be removed; that's because Lync Server does not allow you to remove global settings.
Instead, all of the properties within the global collection will be reset to their default values.
For example, by default proxy server settings allow clients to use the Kerberos protocol for authentication.
You can change the global settings to disable the use of Kerberos.
However, if you run Remove-CsProxyConfiguration against the global collection, the property in question (UseKerberosForClientToProxyAuth) will be reset to its default value, and Kerberos will again be enabled for use as an authentication protocol.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsProxyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsProxyConfiguration"}

Below Content Applies To: Lync Server 2013

Lync Server enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Lync Server, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

Any new proxy server settings you create can later be removed by using the Remove-CsProxyConfiguration cmdlet.
You can also run Remove-CsProxyConfiguration against the global collection.
In that case, however, the global settings will not be removed; that's because Lync Server does not allow you to remove global settings.
Instead, all of the properties within the global collection will be reset to their default values.
For example, by default proxy server settings allow clients to use the Kerberos protocol for authentication.
You can change the global settings to disable the use of Kerberos.
However, if you run Remove-CsProxyConfiguration against the global collection, the property in question (UseKerberosForClientToProxyAuth) will be reset to its default value, and Kerberos will again be enabled for use as an authentication protocol.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsProxyConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsProxyConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Skype for Business Server 2015, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

Any new proxy server settings you create can later be removed by using the Remove-CsProxyConfiguration cmdlet.
You can also run the Remove-CsProxyConfiguration cmdlet against the global collection.
In that case, however, the global settings will not be removed; that's because Skype for Business Server 2015 does not allow you to remove global settings.
Instead, all of the properties within the global collection will be reset to their default values.
For example, by default proxy server settings allow clients to use the Kerberos protocol for authentication.
You can change the global settings to disable the use of Kerberos.
However, if you run the Remove-CsProxyConfiguration cmdlet against the global collection, the property in question (UseKerberosForClientToProxyAuth) will be reset to its default value, and Kerberos will again be enabled for use as an authentication protocol.



## EXAMPLES

### -------------------------- Examples 1 -------------------------- (Lync Server 2010)
```
Remove-CsProxyConfiguration -Identity service:EdgeServer:atl-edge-011.litwareinc.com
```

The command shown in Example 1 deletes the proxy configuration settings that have the Identity service:EdgeServer:atl-edge-litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the proxy configuration settings that have the Identity service:EdgeServer:atl-edge-litwareinc.com.

Remove-CsProxyConfiguration -Identity service:EdgeServer:atl-edge-011.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the proxy configuration settings that have the Identity service:EdgeServer:atl-edge-litwareinc.com.

Remove-CsProxyConfiguration -Identity service:EdgeServer:atl-edge-011.litwareinc.com

### -------------------------- Examples 2 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration -Filter "service:*" | Remove-CsProxyConfiguration
```

In Example 2, all of the proxy configuration settings applied at the service scope are deleted.
To accomplish this task, the command first calls Get-CsProxyConfiguration along with the Filter parameter.
The filter value "service:*" ensures that only proxy settings that have an Identity that begins with the string value "service:" will be returned.
That filtered collection is then piped to Remove-CsProxyConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all of the proxy configuration settings applied at the service scope are deleted.
To accomplish this task, the command first calls Get-CsProxyConfiguration along with the Filter parameter.
The filter value "service:*" ensures that only proxy settings that have an Identity that begins with the string value "service:" will be returned.
That filtered collection is then piped to Remove-CsProxyConfiguration, which deletes each item in the collection.

Get-CsProxyConfiguration -Filter "service:*" | Remove-CsProxyConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all of the proxy configuration settings applied at the service scope are deleted.
To accomplish this task, the command first calls the Get-CsProxyConfiguration cmdlet along with the Filter parameter.
The filter value "service:*" ensures that only proxy settings that have an Identity that begins with the string value "service:" will be returned.
That filtered collection is then piped to the Remove-CsProxyConfiguration cmdlet, which deletes each item in the collection.

Get-CsProxyConfiguration -Filter "service:*" | Remove-CsProxyConfiguration

### -------------------------- Examples 3 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration | Where-Object {$_.TreatAllClientsAsRemote -eq $True} | Remove-CsProxyConfiguration
```

The preceding command deletes any proxy configuration settings that treat all clients as remote clients.
To do this, Get-CsProxyConfiguration is first called without any parameters in order to return a collection of all the proxy server configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the TreatAllClientsAsRemote property is equal to True.
This subset of proxy configuration settings is then piped to Remove-CsProxyConfiguration, which removes all the settings in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes any proxy configuration settings that treat all clients as remote clients.
To do this, Get-CsProxyConfiguration is first called without any parameters in order to return a collection of all the proxy server configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the TreatAllClientsAsRemote property is equal to True.
This subset of proxy configuration settings is then piped to Remove-CsProxyConfiguration, which removes all the settings in the collection.

Get-CsProxyConfiguration | Where-Object {$_.TreatAllClientsAsRemote -eq $True} | Remove-CsProxyConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes any proxy configuration settings that treat all clients as remote clients.
To do this, the Get-CsProxyConfiguration cmdlet is first called without any parameters in order to return a collection of all the proxy server configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the TreatAllClientsAsRemote property is equal to True.
This subset of proxy configuration settings is then piped to the Remove-CsProxyConfiguration cmdlet, which removes all the settings in the collection.

Get-CsProxyConfiguration | Where-Object {$_.TreatAllClientsAsRemote -eq $True} | Remove-CsProxyConfiguration

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier of the proxy server configuration settings to be removed; for example: -Identity "service:Registrar:atl-cs-001.litwareinc.com".

Remove-CsProxyConfiguration can also be run against the global settings.
In that case, however, the settings will not be removed.
Instead, the properties within that global collection will all be reset to their default values.



Below Content Applies To: Skype for Business Server 2015

Unique identifier of the proxy server configuration settings to be removed; for example:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"

The Remove-CsProxyConfiguration cmdlet can also be run against the global settings.
In that case, however, the settings will not be removed.
Instead, the properties within that global collection will all be reset to their default values.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.
Remove-CsProxyConfiguration accepts pipelined instances of the proxy settings object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.
The Remove-CsProxyConfiguration cmdlet accepts pipelined instances of the proxy settings object.

## OUTPUTS

###  
None.
Instead, Remove-CsProxyConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

###  
None.
Instead, the Remove-CsProxyConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/738f731c-4d62-4395-bdc3-3f5e5738f443(OCS.14).aspx)

[Get-CsProxyConfiguration]()

[New-CsProxyConfiguration]()

[Set-CsProxyConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/738f731c-4d62-4395-bdc3-3f5e5738f443(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/738f731c-4d62-4395-bdc3-3f5e5738f443(OCS.16).aspx)

