---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsStaticRoutingConfiguration
schema: 2.0.0
---

# Set-CsStaticRoutingConfiguration

## SYNOPSIS
Modifies an existing collection of static routing configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsStaticRoutingConfiguration [[-Identity] <XdsIdentity>] [-Route <PSListModifier>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsStaticRoutingConfiguration [-Instance <PSObject>] [-Route <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
When you send a SIP message to someone that message might need to traverse multiple subnets and networks before it is delivered; the path traveled by the message is often referred to as a route.
In networking, there are two types of routes: dynamic and static.
With dynamic routing, servers use algorithms to determine the next location (the next hop) where a message should be forwarded.
With static routing, message paths are predetermined by system administrators.
When a message is received by a server, the server checks the message address and then forwards the message to the next hop server that has been preconfigured by an administrator.
If configured correctly, static routes help ensure timely, and accurate, delivery of messages and with minimal overheard placed on servers.
The downside to static routes is that messages are not dynamically rerouted in the event of a network failure.

When you install Skype for Business Server, a global collection of static routes is automatically created for you.
(The collection is created, but there are no routes assigned to that collection). In addition, the software enables you to create additional collections applied to the service scope (these new collections can only be assigned to the Registrar service).
The `Set-CsStaticRoutingConfiguration` cmdlet enables you to modify the property values of an existing static routing collection.
This means that you can use the cmdlet to add new routes to a collection, or to delete existing routes from a collection.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
$x = Get-CsStaticRoutingConfiguration -Identity global | Select-Object -ExpandProperty Route | Where-Object {$_.MatchUri -eq "litwareinc.com" -and $_.MatchOnlyPhoneUri -eq $True}

Set-CsStaticRoutingConfiguration -Identity service:Registrar:atl-cs-001.litwareinc.com -Route @{Add=$x}
```

The commands shown in Example 1 copy a route from the global static routing collection and then assign that route to a second static routing collection, one with the Identity service:Registrar:atl-cs-001.litwareinc.com.
To carry out this task, the first command in the example connects to the global collection and returns an object reference to the route with the MatchUri litwareinc.com and a MatchOnlyPhoneUri equal to True.

To do this, the command calls the `Get-CsStaticRoutingConfiguration` cmdlet to return information from the global routing static configuration collection.
This data is then piped to the `Select-Object` cmdlet, which uses the ExpandProperty parameter to expand the values in the Route property.
These expanded values (which represent the individual routes assigned to the collection) are then piped to the `Where-Object` cmdlet, which picks out the one route where the MatchUri property is equal to litwareinc.com and the MatchOnlyPhoneUri property is equal to True.
The returned route is stored in a variable named $x.

After the route has been retrieved, the second command in the example adds that route to the service: Registrar:atl-cs-001.litwareinc.com collection.
To do this, the `Set-CsStaticRoutingConfiguration` cmdlet is called along with the Route parameter; the parameter value @{Add=$x} instructs the `Set-CsStaticRoutingConfiguration` cmdlet to append the route stored in the variable $x to the collection of routes maintained in the Route property.


### -------------------------- Example 2 ------------------------
```
$x = Get-CsStaticRoutingConfiguration -Identity service:Registrar:atl-cs-001.litwareinc.com | Select-Object -ExpandProperty Route | Where-Object {$_.MatchUri -eq "litwareinc.com" -and $_.MatchOnlyPhoneUri -eq $True}

Set-CsStaticRoutingConfiguration -Identity service:Registrar:atl-cs-001.litwareinc.com -Route @{Remove=$x}
```

The commands shown in Example 2 delete a route from a static routing collection.
To do this, the first command in the example connects to the collection with the Identity service:Registrar:atl-cs-001.litwareinc.com and returns an object reference to the route with the MatchUri litwareinc.com and a MatchOnlyPhoneUri equal to True.
To do that, the command calls the `Get-CsStaticRoutingConfiguration` cmdlet to return information from the service:Registrar:atl-cs-001.litwareinc.com collection.
This data is then piped to the `Select-Object` cmdlet, which uses the ExpandProperty parameter to expand the values in the Route property.
These expanded values (which represent the individual routes assigned to the collection) are then piped to the `Where-Object` cmdlet, which picks out the one route where the MatchUri property is equal to litwareinc.com and the MatchOnlyPhoneUri property is equal to True.
The returned route in then stored in a variable named $x.

After the route has been retrieved, the second command deletes that route from the collection.
To do this, the `Set-CsStaticRoutingConfiguration` cmdlet is called along with the Route parameter; the parameter value @{Remove=$x} instructs the `Set-CsStaticRoutingConfiguration` cmdlet to delete the route stored in the variable $x.


### -------------------------- Example 3 ------------------------
```
Set-CsStaticRoutingConfiguration -Identity service:Registrar:atl-cs-001.litwareinc.com -Route $Null
```

Example 3 shows how you can remove all the routes assigned to a static routing configuration collection.
To do this, simply include the Route parameter and set the parameter value to null.
After the command completes, the collection will still exist, but it will no longer have any routes assigned to it.


## PARAMETERS

### -Identity
Unique identifier of the static routing configuration collection to be modified.
To modify the global collection, use this syntax:

`-Identity global`

To modify a collection applied to the service scope, use syntax similar to this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`

You cannot use wildcards when specifying the Identity.

If this parameter is not included the `Set-CsStaticRoutingConfiguration` cmdlet will automatically modify the global collection.


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

### -Route
Individual static routes maintained within the collection.
Routes to be added to a collection must either be copied from another collection or created by using the `New-CsStaticRoute` cmdlet; to delete a route from a collection, you must first create an object reference to that route.
For details, see the Examples section of help topic.

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
Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.
The `Set-CsStaticRoutingConfiguration` cmdlet accepts pipelined instances of the static routing settings object.

## OUTPUTS

###  
The `Set-CsStaticRoutingConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.RoutingSettings object.

## NOTES

## RELATED LINKS

[Get-CsStaticRoutingConfiguration](Get-CsStaticRoutingConfiguration.md)

[New-CsStaticRoute](New-CsStaticRoute.md)

[New-CsStaticRoutingConfiguration](New-CsStaticRoutingConfiguration.md)

[Remove-CsStaticRoutingConfiguration](Remove-CsStaticRoutingConfiguration.md)
