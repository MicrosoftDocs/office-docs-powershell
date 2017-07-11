---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsRegistrarConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the Registrar configuration settings currently in use in your organization.
Registrars are used to authenticate logon requests and to maintain information about user status and availability.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Returns information about the Registrar configuration settings currently in use in your organization.
Registrars are used to authenticate logon requests and to maintain information about user status and availability.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsRegistrarConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsRegistrarConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

The Registrar is perhaps the most important component in Microsoft Lync Server 2010; after all, without a Registrar, users would not be able to log on to the system, and Lync Server 2010 would not be able to keep track of users and their current status.
When a user logs on to Lync Server, the endpoint the user is logging on from sends a REGISTER request to the Registrar; in turn, the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

Registrar configuration settings are used to help manage endpoints and endpoint subscriptions; these settings can be applied at the global, site, or service scope.
(Service scoped-settings can only be used with the Registrar service.) The Get-CsRegistrarConfiguration cmdlet is used to return information about all the Registrar configurations collections currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRegistrarConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsRegistrarConfiguration"}

Below Content Applies To: Lync Server 2013

The Registrar is perhaps the most important component in Lync Server; after all, without a Registrar, users would not be able to log on to the system, and Lync Server would not be able to keep track of users and their current status.
When a user logs on to Lync Server, the endpoint the user is logging on from sends a REGISTER request to the Registrar; in turn, the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

Registrar configuration settings are used to help manage endpoints and endpoint subscriptions; these settings can be applied at the global, site, or service scope.
(Service scoped-settings can only be used with the Registrar service.) The Get-CsRegistrarConfiguration cmdlet is used to return information about all the Registrar configurations collections currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsRegistrarConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsRegistrarConfiguration"}

Below Content Applies To: Skype for Business Server 2015

The Registrar is perhaps the most important component in Skype for Business Server 2015; after all, without a Registrar, users would not be able to log on to the system, and Skype for Business Server 2015 would not be able to keep track of users and their current status.
When a user logs on to Skype for Business Server 2015, the endpoint the user is logging on from sends a REGISTER request to the Registrar; in turn, the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

Registrar configuration settings are used to help manage endpoints and endpoint subscriptions; these settings can be applied at the global, site, or service scope.
(Service scoped-settings can only be used with the Registrar service.) The Get-CsRegistrarConfiguration cmdlet is used to return information about all the Registrar configurations collections currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsRegistrarConfiguration
```

The command shown in Example 1 returns a collection of all the Registrar configuration settings currently in use in the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the Registrar configuration settings currently in use in the organization.

Get-CsRegistrarConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the Registrar configuration settings currently in use in the organization.

Get-CsRegistrarConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsRegistrarConfiguration -Identity site:Redmond
```

Example 2 returns a single collection of Registrar configuration settings: the settings configured for the Redmond site (-Identity site:Redmond).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns a single collection of Registrar configuration settings: the settings configured for the Redmond site (-Identity site:Redmond).

Get-CsRegistrarConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns a single collection of Registrar configuration settings: the settings configured for the Redmond site (-Identity site:Redmond).

Get-CsRegistrarConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsRegistrarConfiguration -Filter "service:*"
```

In Example 3, information is returned for all the Registrar configuration settings assigned at the service scope.
To do this, the command uses the Filter parameter and the filter value "service:*"; that filter value ensures that only settings that have an Identity that begins with the string value "service:" will be returned.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the Registrar configuration settings assigned at the service scope.
To do this, the command uses the Filter parameter and the filter value "service:*"; that filter value ensures that only settings that have an Identity that begins with the string value "service:" will be returned.

Get-CsRegistrarConfiguration -Filter "service:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the Registrar configuration settings assigned at the service scope.
To do this, the command uses the Filter parameter and the filter value "service:*"; that filter value ensures that only settings that have an Identity that begins with the string value "service:" will be returned.

Get-CsRegistrarConfiguration -Filter "service:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsRegistrarConfiguration | Where-Object {$_.EnableDHCPServer -eq $True}
```

Example 4 returns information about the Registrar configuration settings that enable the use of DHCP servers in order to register clients.
To carry out this task, the command first calls Get-CsRegistrarConfiguration without any parameters; that returns a collection of all the Registrar configuration settings currently in use.
This collection is then piped to Where-Object, which selects only those settings where the EnableDHCPServer property is equal to True.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information about the Registrar configuration settings that enable the use of DHCP servers in order to register clients.
To carry out this task, the command first calls Get-CsRegistrarConfiguration without any parameters; that returns a collection of all the Registrar configuration settings currently in use.
This collection is then piped to Where-Object, which selects only those settings where the EnableDHCPServer property is equal to True.

Get-CsRegistrarConfiguration | Where-Object {$_.EnableDHCPServer -eq $True}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information about the Registrar configuration settings that enable the use of DHCP servers in order to register clients.
To carry out this task, the command first calls the Get-CsRegistrarConfiguration cmdlet without any parameters; that returns a collection of all the Registrar configuration settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the EnableDHCPServer property is equal to True.

Get-CsRegistrarConfiguration | Where-Object {$_.EnableDHCPServer -eq $True}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsRegistrarConfiguration | Where-Object {$_.MaxEndpointsPerUser -gt 8}
```

In the preceding command, information is returned for all the Registrar configuration settings that allow more than eight endpoints per user.
To accomplish this, the command first uses Get-CsRegistrarConfiguration to return a collection of all the Registrar configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxEndpointsPerUser property is greater than 8.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, information is returned for all the Registrar configuration settings that allow more than eight endpoints per user.
To accomplish this, the command first uses Get-CsRegistrarConfiguration to return a collection of all the Registrar configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxEndpointsPerUser property is greater than 8.

Get-CsRegistrarConfiguration | Where-Object {$_.MaxEndpointsPerUser -gt 8}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, information is returned for all the Registrar configuration settings that allow more than eight endpoints per user.
To accomplish this, the command first uses the Get-CsRegistrarConfiguration cmdlet to return a collection of all the Registrar configuration settings used in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the MaxEndpointsPerUser property is greater than 8.

Get-CsRegistrarConfiguration | Where-Object {$_.MaxEndpointsPerUser -gt 8}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the Registrar configuration settings to be returned.
To return the global settings, use this syntax: -Identity global.
To return settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
To return settings at the service level, use syntax like this: -Identity service:Registrar:atl-cs-001.litwareinc.com.

If this parameter is omitted then Get-CsRegistrarConfiguration returns all of the Registrar configuration settings currently in use in your organization.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the Registrar configuration settings to be returned.
To return the global settings, use this syntax:

-Identity global

To return settings configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To return settings at the service level, use syntax like this:

-Identity service:Registrar:atl-cs-001.litwareinc.com

If this parameter is omitted then the Get-CsRegistrarConfiguration cmdlet returns all of the Registrar configuration settings currently in use in your organization.



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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to use wildcards in order to return one or more collections of Registrar configuration settings.
For example, to return all the settings configured at the site scope, use this syntax: -Filter "site:*".
To return all the settings configured at the service scope, use this syntax: -Filter "service:*".



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcards in order to return one or more collections of Registrar configuration settings.
For example, to return all the settings configured at the site scope, use this syntax:

-Filter "site:*"

To return all the settings configured at the service scope, use this syntax:

-Filter "service:*"



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
Retrieves the Registrar configuration settings data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsRegistrarConfiguration does not accept pipelined input.

###  
None.
The Get-CsRegistrarConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsRegistrarConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.

###  
The Get-CsRegistrarConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/67f2caf6-84a8-46d8-b034-7161e9841ab8(OCS.14).aspx)

[New-CsRegistrarConfiguration]()

[Remove-CsRegistrarConfiguration]()

[Set-CsRegistrarConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/67f2caf6-84a8-46d8-b034-7161e9841ab8(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/67f2caf6-84a8-46d8-b034-7161e9841ab8(OCS.16).aspx)

