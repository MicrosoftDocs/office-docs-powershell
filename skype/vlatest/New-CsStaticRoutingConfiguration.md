---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsStaticRoutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new collection of static routing configuration settings.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new collection of static routing configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsStaticRoutingConfiguration [-Identity] <XdsIdentity> [-Route <PSListModifier>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
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
In addition to that, you can use the New-CsStaticRoutingConfiguration cmdlet to create additional collections and the site scope or the service scope (for the Registrar service only).

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsStaticRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsStaticRoutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Lync Server, a global collection of static routes is automatically created for you.
In addition to that, you can use the New-CsStaticRoutingConfiguration cmdlet to create additional collections and the site scope or the service scope (for the Registrar service only).

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsStaticRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsStaticRoutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages, and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Skype for Business Server 2015, a global collection of static routes is automatically created for you.
In addition to that, you can use the New-CsStaticRoutingConfiguration cmdlet to create additional collections and the site scope or the service scope (for the Registrar service only).



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"
```

The preceding command creates a new static routing configuration collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.
Because the Route parameter is not included in the command, the new collection will not have any static routes assigned to it.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new static routing configuration collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.
Because the Route parameter is not included in the command, the new collection will not have any static routes assigned to it.

New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new static routing configuration collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.
Because the Route parameter is not included in the command, the new collection will not have any static routes assigned to it.

New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = New-CsStaticRoute -TCPRoute -Destination "192.168.0.100" -Port 8025 -MatchUri "*.litwareinc.com"

New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com" -Route $x
```

The commands shown in Example 2 create a new SIP proxy route that uses TCP as its transport; this new route is then added to a new static routing configuration collection.
To do this, the first command in the example uses New-CsStaticRoute to create a new route that points to the next hop server with the IP address 192.168.1.100.
This new route (stored in a variable named $x) also uses port 8025 and the MatchUri "*.litwareinc.com".

After that, New-CsStaticRoutingConfiguration is called to create a new collection (with the Identity service:Registrar:atl-cs-001.litwareinc.com), assigning the route stored in the variable $x to the Route property of the new collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 create a new SIP proxy route that uses TCP as its transport; this new route is then added to a new static routing configuration collection.
To do this, the first command in the example uses New-CsStaticRoute to create a new route that points to the next hop server with the IP address 192.168.1.100.
This new route (stored in a variable named $x) also uses port 8025 and the MatchUri "*.litwareinc.com".

After that, New-CsStaticRoutingConfiguration is called to create a new collection (with the Identity service:Registrar:atl-cs-001.litwareinc.com), assigning the route stored in the variable $x to the Route property of the new collection.

$x = New-CsStaticRoute -TCPRoute -Destination "192.168.0.100" -Port 8025 -MatchUri "*.litwareinc.com"

New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com" -Route $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 create a new SIP proxy route that uses TCP as its transport; this new route is then added to a new static routing configuration collection.
To do this, the first command in the example uses the New-CsStaticRoute cmdlet to create a new route that points to the next hop server with the IP address 192.168.1.100.
This new route (stored in a variable named $x) also uses port 8025 and the MatchUri "*.litwareinc.com".

After that, the New-CsStaticRoutingConfiguration cmdlet is called to create a new collection (with the Identity service:Registrar:atl-cs-001.litwareinc.com), assigning the route stored in the variable $x to the Route property of the new collection.

$x = New-CsStaticRoute -TCPRoute -Destination "192.168.0.100" -Port 8025 -MatchUri "*.litwareinc.com"

New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com" -Route $x

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the new static routing collection to be created.
New collections can only be created at the service scope, and can only be assigned to the Registrar service.
Because of that, the Identity for a new collection must look similar to this: -Identity "service:Registrar:atl-cs-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the new static routing collection to be created.
New collections can only be created at the service scope, and can only be assigned to the Registrar service.
Because of that, the Identity for a new collection must look similar to this:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"



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

### -Route
Individual static routes maintained within the collection.
Routes to be added to a collection must either by copied from another collection or created using the New-CsStaticRoute cmdlet.
For details, see the Examples section in this topic.

```yaml
Type: PSListModifier
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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsStaticRoutingConfiguration does not accept pipelined input.

###  
None.
The New-CsStaticRoutingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsStaticRoutingConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.

###  
The New-CsStaticRoutingConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/30d1736f-990f-46e8-931f-9247cd988244(OCS.14).aspx)

[Get-CsStaticRoutingConfiguration]()

[New-CsStaticRoute]()

[Remove-CsStaticRoutingConfiguration]()

[Set-CsStaticRoutingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/30d1736f-990f-46e8-931f-9247cd988244(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/30d1736f-990f-46e8-931f-9247cd988244(OCS.16).aspx)

