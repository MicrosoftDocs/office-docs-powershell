---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsStaticRoutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the static routing configuration settings used in your organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the static routing configuration settings used in your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsStaticRoutingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsStaticRoutingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Microsoft Lync Server 2010, a global collection of static routes is automatically created for you.
(The collection is created, but there are no routes assigned to that collection.) In addition, the software enables you to create additional collections applied to the service scope (these new collections can only be assigned to the Registrar service).
The Get-CsStaticRoutingConfiguration cmdlet provides a way for you to return information about all the static routing configuration collections in use in your organization.
This includes the ability to return detailed information about each route assigned to a collection.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsStaticRoutingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsStaticRoutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Lync Server, a global collection of static routes is automatically created for you.
(The collection is created, but there are no routes assigned to that collection.) In addition, the software enables you to create additional collections applied to the service scope (these new collections can only be assigned to the Registrar service).
The Get-CsStaticRoutingConfiguration cmdlet provides a way for you to return information about all the static routing configuration collections in use in your organization.
This includes the ability to return detailed information about each route assigned to a collection.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsStaticRoutingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsStaticRoutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Skype for Business Server 2015, a global collection of static routes is automatically created for you.
(The collection is created, but there are no routes assigned to that collection.) In addition, the software enables you to create additional collections applied to the service scope (these new collections can only be assigned to the Registrar service).
The Get-CsStaticRoutingConfiguration cmdlet provides a way for you to return information about all the static routing configuration collections in use in your organization.
This includes the ability to return detailed information about each route assigned to a collection.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsStaticRoutingConfiguration
```

The command shown in Example 1 returns information about all the static routing configuration collections in use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the static routing configuration collections in use in your organization.

Get-CsStaticRoutingConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the static routing configuration collections in use in your organization.

Get-CsStaticRoutingConfiguration

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"
```

In Example 2, information about a single static routing configuration collection is returned: the collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information about a single static routing configuration collection is returned: the collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.

Get-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information about a single static routing configuration collection is returned: the collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.

Get-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsStaticRoutingConfiguration -Filter "service:*"
```

Example 3 uses the Filter parameter to return information about the static routing configuration collections assigned to the service scope.
The filter value "service:*" limits the returned data to collections that have an identity that begins with the string value "service:".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses the Filter parameter to return information about the static routing configuration collections assigned to the service scope.
The filter value "service:*" limits the returned data to collections that have an identity that begins with the string value "service:".

Get-CsStaticRoutingConfiguration -Filter "service:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the Filter parameter to return information about the static routing configuration collections assigned to the service scope.
The filter value "service:*" limits the returned data to collections that have an identity that begins with the string value "service:".

Get-CsStaticRoutingConfiguration -Filter "service:*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsStaticRoutingConfiguration | Select-Object -ExpandProperty Route
```

The preceding command returns detailed route information for all the static routing configuration collections in use in the organization.
To do this, the command first calls Get-CsStaticRoutingConfiguration without any parameters in order to return complete information for each static routing collection.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Route property.
When you expand a property, all the objects and values contained within that property are displayed on the screen in easy-to-read fashion.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns detailed route information for all the static routing configuration collections in use in the organization.
To do this, the command first calls Get-CsStaticRoutingConfiguration without any parameters in order to return complete information for each static routing collection.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Route property.
When you expand a property, all the objects and values contained within that property are displayed on the screen in easy-to-read fashion.

Get-CsStaticRoutingConfiguration | Select-Object -ExpandProperty Route

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns detailed route information for all the static routing configuration collections in use in the organization.
To do this, the command first calls the Get-CsStaticRoutingConfiguration cmdlet without any parameters in order to return complete information for each static routing collection.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Route property.
When you expand a property, all the objects and values contained within that property are displayed on the screen in easy-to-read fashion.

Get-CsStaticRoutingConfiguration | Select-Object -ExpandProperty Route

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsStaticRoutingConfiguration | Select-Object -ExpandProperty Route | Where-Object {$_.MatchOnlyPhoneUri -eq $True}
```

The command shown in Example 5 returns information about all the static routes that are configured to only match telephone Uniform Resource Identifiers (URIs).
To carry out this task, the command first calls Get-CsStaticRoutingConfiguration without any parameters; this returns all the static routing configuration collections and their associated routes.
This collection is then piped to the Select-Object cmdlet, which uses the ExpandProperty to expand all the objects stored in the Route property.
These route objects are then piped to the Where-Object cmdlet, which picks out only those routes where the MatchOnlyPhoneUri property is equal to True.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns information about all the static routes that are configured to only match telephone Uniform Resource Identifiers (URIs).
To carry out this task, the command first calls Get-CsStaticRoutingConfiguration without any parameters; this returns all the static routing configuration collections and their associated routes.
This collection is then piped to the Select-Object cmdlet, which uses the ExpandProperty to expand all the objects stored in the Route property.
These route objects are then piped to the Where-Object cmdlet, which picks out only those routes where the MatchOnlyPhoneUri property is equal to True.

Get-CsStaticRoutingConfiguration | Select-Object -ExpandProperty Route | Where-Object {$_.MatchOnlyPhoneUri -eq $True}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns information about all the static routes that are configured to only match telephone Uniform Resource Identifiers (URIs).
To carry out this task, the command first calls the Get-CsStaticRoutingConfiguration cmdlet without any parameters; this returns all the static routing configuration collections and their associated routes.
This collection is then piped to the Select-Object, cmdlet which uses the ExpandProperty to expand all the objects stored in the Route property.
These route objects are then piped to the Where-Object cmdlet, which picks out only those routes where the MatchOnlyPhoneUri property is equal to True.

Get-CsStaticRoutingConfiguration | Select-Object -ExpandProperty Route | Where-Object {$_.MatchOnlyPhoneUri -eq $True}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the static routing configuration collection.
To return information about the global collection, use this syntax: -Identity global.
To retrieve information about a collection configured at the service scope, use syntax similar to this: -Identity "service:Registrar:atl-cs-001.litwareinc.com".
Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, use the Filter parameter instead.

If you do not include either the Identity or the Filter parameters then Get-CsStaticRoutingConfiguration returns information about all your static routing configuration collections.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the static routing configuration collection.
To return information about the global collection, use this syntax:

-Identity global

To retrieve information about a collection configured at the service scope, use syntax similar to this:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, use the Filter parameter instead.

If you do not include either the Identity or the Filter parameters then the Get-CsStaticRoutingConfiguration cmdlet returns information about all your static routing configuration collections.



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

Enables you to use wildcards when specifying the static routing configuration collection (or collections) to be returned.
For example, this syntax returns all the static routing collections configured at the service scope: -Filter "service:*".

Note that you cannot use both the Identity and the Filter parameters in the same command.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to use wildcards when specifying the static routing configuration collection (or collections) to be returned.
For example, this syntax returns all the static routing collections configured at the service scope:

-Filter "service:*"

Note that you cannot use both the Identity and the Filter parameters in the same command.



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
Retrieves the static routing configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsStaticRoutingConfiguration does not accept pipelined input.

###  
None.
The Get-CsStaticRoutingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsStaticRoutingConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.

###  
The Get-CsStaticRoutingConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/94f126b4-b714-42ba-b9b6-81269634875f(OCS.14).aspx)

[New-CsStaticRoutingConfiguration]()

[Remove-CsStaticRoutingConfiguration]()

[Set-CsStaticRoutingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/94f126b4-b714-42ba-b9b6-81269634875f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/94f126b4-b714-42ba-b9b6-81269634875f(OCS.16).aspx)

