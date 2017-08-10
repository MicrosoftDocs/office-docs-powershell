---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsProxyConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the proxy server configuration settings currently in use in your organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the proxy server configuration settings currently in use in your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsProxyConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsProxyConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Lync Server 2010, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

The Get-CsProxyConfiguration cmdlet enables you to return information about any of the proxy server configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsProxyConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsProxyConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Server enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Lync Server, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

The Get-CsProxyConfiguration cmdlet enables you to return information about any of the proxy server configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsProxyConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsProxyConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 enables you to manage your proxy servers through proxy server configuration settings.
These settings, which can be applied at both the global scope and the service scope (albeit for only the Edge Server and Registrar services) enable you to control such things as the authentication protocols that can be used by client endpoints and whether or not compression will be used on incoming and outgoing proxy server connections.
When you install Skype for Business Server 2015, a global collection of proxy server configuration settings is automatically created for you.
As noted, you can also create additional collections at the service scope.

The Get-CsProxyConfiguration cmdlet enables you to return information about any of the proxy server configuration settings currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration
```

The command shown in Example 1 returns a collection of all the proxy configuration settings currently in use in the organization.
This is done by calling Get-CsProxyConfiguration without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the proxy configuration settings currently in use in the organization.
This is done by calling Get-CsProxyConfiguration without any parameters.

Get-CsProxyConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the proxy configuration settings currently in use in the organization.
This is done by calling the Get-CsProxyConfiguration cmdlet without any parameters.

Get-CsProxyConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration -Identity "service:EdgeServer:atl-cs-001.litwareinc.com"
```

In Example 2, information about the proxy configuration settings that have the Identity service:EdgeServer:atl-cs-001.litwareinc.com is returned.
Because Identities must be unique, this command will never return more than one collection of settings.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information about the proxy configuration settings that have the Identity service:EdgeServer:atl-cs-001.litwareinc.com is returned.
Because Identities must be unique, this command will never return more than one collection of settings.

Get-CsProxyConfiguration -Identity "service:EdgeServer:atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information about the proxy configuration settings that have the Identity service:EdgeServer:atl-cs-001.litwareinc.com is returned.
Because Identities must be unique, this command will never return more than one collection of settings.

Get-CsProxyConfiguration -Identity "service:EdgeServer:atl-cs-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration -Filter "service:*"
```

The preceding command returns information about all of the proxy settings that have been configured at the service scope.
To do this, the command calls Get-CsProxyConfiguration along with the Filter parameter; the filter value "service:*" ensures that only those settings that have an Identity that begins with the string value "service:" will be returned.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information about all of the proxy settings that have been configured at the service scope.
To do this, the command calls Get-CsProxyConfiguration along with the Filter parameter; the filter value "service:*" ensures that only those settings that have an Identity that begins with the string value "service:" will be returned.

Get-CsProxyConfiguration -Filter "service:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information about all of the proxy settings that have been configured at the service scope.
To do this, the command calls the Get-CsProxyConfiguration cmdlet along with the Filter parameter; the filter value "service:*" ensures that only those settings that have an Identity that begins with the string value "service:" will be returned.

Get-CsProxyConfiguration -Filter "service:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration | Where-Object {$_.UseCertificateForClientToProxyAuth -eq $False}
```

Example 4 returns information about the proxy configuration settings that do not allow the use of client certificates as an authentication mechanism.
To carry out this task, the command first uses Get-CsProxyConfiguration to return a collection of all the proxy configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the UseCertificateForClientToProxyAuth property is equal to False.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information about the proxy configuration settings that do not allow the use of client certificates as an authentication mechanism.
To carry out this task, the command first uses Get-CsProxyConfiguration to return a collection of all the proxy configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the UseCertificateForClientToProxyAuth property is equal to False.

Get-CsProxyConfiguration | Where-Object {$_.UseCertificateForClientToProxyAuth -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information about the proxy configuration settings that do not allow the use of client certificates as an authentication mechanism.
To carry out this task, the command first uses the Get-CsProxyConfiguration cmdlet to return a collection of all the proxy configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the UseCertificateForClientToProxyAuth property is equal to False.

Get-CsProxyConfiguration | Where-Object {$_.UseCertificateForClientToProxyAuth -eq $False}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsProxyConfiguration | Where-Object {$_.MaxClientMessageBodySizeKb -lt 5000}
```

The preceding command returns all the proxy configuration settings where the maximum body size for a client message is less than 5000 kilobytes.
To do this, the command first calls Get-CsProxyConfiguration without any parameters; this returns a collection of all the proxy configuration settings currently in use.
This collection is then piped to Where-Object, which picks out those settings where the MaxClientMessageBodySizeKb property is less than 5000 kilobytes.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns all the proxy configuration settings where the maximum body size for a client message is less than 5000 kilobytes.
To do this, the command first calls Get-CsProxyConfiguration without any parameters; this returns a collection of all the proxy configuration settings currently in use.
This collection is then piped to Where-Object, which picks out those settings where the MaxClientMessageBodySizeKb property is less than 5000 kilobytes.

Get-CsProxyConfiguration | Where-Object {$_.MaxClientMessageBodySizeKb -lt 5000}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns all the proxy configuration settings where the maximum body size for a client message is less than 5000 kilobytes.
To do this, the command first calls the Get-CsProxyConfiguration cmdlet without any parameters; this returns a collection of all the proxy configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxClientMessageBodySizeKb property is less than 5000 kilobytes.

Get-CsProxyConfiguration | Where-Object {$_.MaxClientMessageBodySizeKb -lt 5000}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the proxy server configuration settings to be returned.
To return the global settings, use this syntax: -Identity global.
To return settings configured at the service scope, use syntax similar to this: -Identity "service:EdgeServer:atl-cs-001.litwareinc.com".
Note that you cannot use wildcards when specifying an Identity.
If you want to (or need to) use wildcards, use the Filter parameter instead.

If this parameter is not included, Get-CsProxyConfiguration returns all of the proxy server settings currently in use in your organization.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the proxy server configuration settings to be returned.
To return the global settings, use this syntax:

-Identity global

To return settings configured at the service scope, use syntax similar to this:

-Identity "service:EdgeServer:atl-cs-001.litwareinc.com"

Note that you cannot use wildcards when specifying an Identity.
If you want to (or need to) use wildcards, use the Filter parameter instead.

If this parameter is not included, the Get-CsProxyConfiguration cmdlet returns all of the proxy server settings currently in use in your organization.



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

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to use wildcards when specifying the proxy configuration settings to be returned.
For example, this syntax returns all the settings configured at the service scope: -Filter "service:*".

You cannot use both the Filter and the Identity parameters in the same command.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to use wildcards when specifying the proxy configuration settings to be returned.
For example, this syntax returns all the settings configured at the service scope:

-Filter "service:*"

You cannot use both the Filter and the Identity parameters in the same command.



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the proxy configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsProxyConfiguration does not accept pipelined input.

###  
None.
The Get-CsProxyConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsProxyConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

###  
The Get-CsProxyConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.ProxySettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e4836619-026f-4df0-adbd-aa5216e36368(OCS.14).aspx)

[New-CsProxyConfiguration]()

[Remove-CsProxyConfiguration]()

[Set-CsProxyConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/e4836619-026f-4df0-adbd-aa5216e36368(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e4836619-026f-4df0-adbd-aa5216e36368(OCS.16).aspx)

