---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsRoutingConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies a list of voice routes.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies a list of voice routes.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsRoutingConfiguration [[-Identity] <XdsIdentity>] [-Route <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [-CallViaWorkCallerId <String>] [-EnableLocationBasedRouting <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsRoutingConfiguration [-Instance <PSObject>] [-Route <PSListModifier>] [-Force] [-WhatIf] [-Confirm]
 [-CallViaWorkCallerId <String>] [-EnableLocationBasedRouting <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Voice routes contain instructions that tell Microsoft Lync Server 2010 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
With this cmdlet you can modify the settings of any voice route defined within a Lync Server 2010 deployment.

The use of this cmdlet is not recommended.
To modify routing configurations, modify the individual voice routes by calling the Set-CsVoiceRoute cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsRoutingConfiguration"}

**Below Content Applies To:** Lync Server 2013

Voice routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
With this cmdlet you can modify the settings of any voice route defined within a Lync Server deployment.

The use of this cmdlet is not recommended.
To modify routing configurations, modify the individual voice routes by calling the Set-CsVoiceRoute cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsRoutingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsRoutingConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Voice routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
With this cmdlet you can modify the settings of any voice route defined within a Skype for Business Server 2015 deployment.

The use of this cmdlet is not recommended.
To modify routing configurations, modify the individual voice routes by calling the Set-CsVoiceRoute cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$a = Get-CsRoutingConfiguration
$b = $a.Route | Where-Object {$_.Name -match "LocalRoute"}
$b.SuppressCallerId = $False
Set-CsRoutingConfiguration -Instance $a
```

It takes several steps to modify a voice route within a routing configuration.
In this example, we start by retrieving the routing configuration object by calling Get-CsRoutingConfiguration.
We assign the object retrieved (there will be only one) to the variable $a.

In line 2 of this example we retrieve the contents of the Route property from variable $a, which is a collection of voice route objects.
We then pipe that collection to the Where-Object cmdlet, where we search the collection for all voice route objects with a Name matching the string LocalRoute.
We assign that object to the variable $b.

Next, we modify the LocalRoute voice route object by assigning the value $False to the property SuppressCallerId.
By updating that object we've updated the object in variable $a.
However, that object is still only in memory.
As a final step, we need to save those changes by passing $a to the Instance parameter of Set-CsRoutingConfiguration.

This is not the recommended way of modifying a routing configuration.
To modify a routing configuration, simply change the individual voice routes with the Set-CsVoiceRoute property, as shown here:

Set-CsVoiceRoute -Identity LocalRoute -SuppressCallerId $False

That one line will accomplish the same task shown in Example 1.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

It takes several steps to modify a voice route within a routing configuration.
In this example, we start by retrieving the routing configuration object by calling Get-CsRoutingConfiguration.
We assign the object retrieved (there will be only one) to the variable $a.

In line 2 of this example we retrieve the contents of the Route property from variable $a, which is a collection of voice route objects.
We then pipe that collection to the Where-Object cmdlet, where we search the collection for all voice route objects with a Name matching the string LocalRoute.
We assign that object to the variable $b.

Next, we modify the LocalRoute voice route object by assigning the value $False to the property SuppressCallerId.
By updating that object we've updated the object in variable $a.
However, that object is still only in memory.
As a final step, we need to save those changes by passing $a to the Instance parameter of Set-CsRoutingConfiguration.

This is not the recommended way of modifying a routing configuration.
To modify a routing configuration, simply change the individual voice routes with the Set-CsVoiceRoute property, as shown here:

Set-CsVoiceRoute -Identity LocalRoute -SuppressCallerId $False

That one line will accomplish the same task shown in Example 1.

$a = Get-CsRoutingConfiguration

$b = $a.Route | Where-Object {$_.Name -match "LocalRoute"}

$b.SuppressCallerId = $False

Set-CsRoutingConfiguration -Instance $a

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

It takes several steps to modify a voice route within a routing configuration.
In this example, we start by retrieving the routing configuration object by calling the Get-CsRoutingConfiguration cmdlet.
We assign the object retrieved (there will be only one) to the variable $a.

In line 2 of this example we retrieve the contents of the Route property from variable $a, which is a collection of voice route objects.
We then pipe that collection to the Where-Object cmdlet, where we search the collection for all voice route objects with a Name matching the string LocalRoute.
We assign that object to the variable $b.

Next, we modify the LocalRoute voice route object by assigning the value $False to the property SuppressCallerId.
By updating that object we've updated the object in variable $a.
However, that object is still only in memory.
As a final step, we need to save those changes by passing $a to the Instance parameter of the Set-CsRoutingConfiguration cmdlet.

This is not the recommended way of modifying a routing configuration.
To modify a routing configuration, simply change the individual voice routes with the Set-CsVoiceRoute cmdlet, as shown here:

Set-CsVoiceRoute -Identity LocalRoute -SuppressCallerId $False

That one line will accomplish the same task shown in Example 1.

$a = Get-CsRoutingConfiguration

$b = $a.Route | Where-Object {$_.Name -match "LocalRoute"}

$b.SuppressCallerId = $False

Set-CsRoutingConfiguration -Instance $a

## PARAMETERS

### -Identity
The scope of the routing configuration.
This must be Global.

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A routing configuration (Microsoft.Rtc.Management.WritablConfig.Policy.Voice.PstnRoutingSettings) object.
An object of this type can be retrieved by calling Get-CsRoutingConfiguration.



**Below Content Applies To:** Skype for Business Server 2015

A routing configuration (Microsoft.Rtc.Management.WritablConfig.Policy.Voice.PstnRoutingSettings) object.
An object of this type can be retrieved by calling the Get-CsRoutingConfiguration cmdlet.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A list of all voice routes (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route objects) defined for the Lync Server deployment.

You should modify individual voice route objects by using the Set-CsVoiceRoute cmdlet.
That is the recommended way of modifying routes in this list.



**Below Content Applies To:** Skype for Business Server 2015

A list of all voice routes (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route objects) defined for the Skype for Business Server 2015 deployment.

You should modify individual voice route objects by using the Set-CsVoiceRoute cmdlet.
That is the recommended way of modifying routes in this list.



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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -CallViaWorkCallerId
The number the system will display for the callback portion of an external call.
External calls first connect the user making the call by calling a specified number (typically the user's desk phone), once connected to the user, the system dials the outside number.
The CallViaWorkCallerId parameter specifies the number that will be displayed during the first leg, or callback segment, of the call via work external call.
For more information, see New-CsCallViaWorkPolicy.

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

### -EnableLocationBasedRouting
When set to True, voice routing will be managed by taking into account the location of both the user placing the call and the user receiving the call.
The default value is False.

```yaml
Type: Boolean
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
Microsoft.Rtc.WritableConfig.Management.Policy.Voice.PSTNRoutingSettings object.
Accepts pipelined input of a routing configuration object.

## OUTPUTS

###  
Set-CsRoutingConfiguration does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnRoutingSettings object.

###  
The Set-CsRoutingConfiguration cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PstnRoutingSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ab69c6e8-262a-4ecb-b1af-513383c494fe(OCS.14).aspx)

[New-CsRoutingConfiguration]()

[Remove-CsRoutingConfiguration]()

[Get-CsRoutingConfiguration]()

[Set-CsVoiceRoute]()

[Get-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/ab69c6e8-262a-4ecb-b1af-513383c494fe(OCS.15).aspx)

[New-CsCallViaWorkPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/ab69c6e8-262a-4ecb-b1af-513383c494fe(OCS.16).aspx)

