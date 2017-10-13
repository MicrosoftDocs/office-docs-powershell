---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsStaticRoutingConfiguration
schema: 2.0.0
---

# New-CsStaticRoutingConfiguration

## SYNOPSIS
Creates a new collection of static routing configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsStaticRoutingConfiguration [-Identity] <XdsIdentity> [-Route <PSListModifier>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely and accurate, delivery of messages and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Skype for Business Server, a global collection of static routes is automatically created for you.
In addition to that, you can use the `New-CsStaticRoutingConfiguration` cmdlet to create additional collections and the site scope or the service scope (for the Registrar service only).


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com"
```

Example 1 creates a new static routing configuration collection with the Identity service:Registrar:atl-cs-001.litwareinc.com.
Because the Route parameter is not included in the command, the new collection will not have any static routes assigned to it.


### -------------------------- Example 2 ------------------------
```
$x = New-CsStaticRoute -TCPRoute -Destination "192.168.0.100" -Port 8025 -MatchUri "*.litwareinc.com"

New-CsStaticRoutingConfiguration -Identity "service:Registrar:atl-cs-001.litwareinc.com" -Route $x
```

The commands shown in Example 2 create a new SIP proxy route that uses TCP as its transport; this new route is then added to a new static routing configuration collection.
To do this, the first command in the example uses the `New-CsStaticRoute` cmdlet to create a new route that points to the next hop server with the IP address 192.168.1.100.
This new route (stored in a variable named $x) also uses port 8025 and the MatchUri "*.litwareinc.com".

After that, the `New-CsStaticRoutingConfiguration` cmdlet is called to create a new collection (with the Identity service:Registrar:atl-cs-001.litwareinc.com), assigning the route stored in the variable $x to the Route property of the new collection.


## PARAMETERS

### -Identity
Unique identifier for the new static routing collection to be created.
New collections can only be created at the service scope and can only be assigned to the Registrar service.
Because of that, the Identity for a new collection must look similar to this:

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

### -Route
Individual static routes maintained within the collection.
Routes to be added to a collection must either by copied from another collection or created using the `New-CsStaticRoute` cmdlet.
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
The `New-CsStaticRoutingConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsStaticRoutingConfiguration` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.

## NOTES

## RELATED LINKS

[Get-CsStaticRoutingConfiguration](Get-CsStaticRoutingConfiguration.md)

[New-CsStaticRoute](New-CsStaticRoute.md)

[Remove-CsStaticRoutingConfiguration](Remove-CsStaticRoutingConfiguration.md)

[Set-CsStaticRoutingConfiguration](Set-CsStaticRoutingConfiguration.md)
