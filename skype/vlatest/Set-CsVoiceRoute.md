---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsVoiceRoute

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies a voice route.
Voice routes contain instructions that tell Microsoft Lync Server 2010 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

Below Content Applies To: Lync Server 2013

Modifies a voice route.
Voice routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Modifies a voice route.
Voice routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsVoiceRoute [[-Identity] <XdsGlobalRelativeIdentity>] [-AlternateCallerId <String>]
 [-Description <String>] [-NumberPattern <String>] [-Priority <Int32>] [-PstnGatewayList <PSListModifier>]
 [-PstnUsages <PSListModifier>] [-SuppressCallerId <Boolean>] [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

### Instance
```
Set-CsVoiceRoute [-Instance <PSObject>] [-AlternateCallerId <String>] [-Description <String>]
 [-NumberPattern <String>] [-Priority <Int32>] [-PstnGatewayList <PSListModifier>]
 [-PstnUsages <PSListModifier>] [-SuppressCallerId <Boolean>] [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

Use this cmdlet to modify an existing voice route.
Voice routes are associated with voice policies through public switched telephone network (PSTN) usages.
A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsVoiceRoute cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsVoiceRoute"}

Below Content Applies To: Skype for Business Server 2015

Use this cmdlet to modify an existing voice route.
Voice routes are associated with voice policies through public switched telephone network (PSTN) usages.
A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsVoiceRoute -Identity Route1 -Description "Test Route"
```

This command sets the Description of the Route1 voice route to "Test Route."

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This command sets the Description of the Route1 voice route to "Test Route."

Set-CsVoiceRoute -Identity Route1 -Description "Test Route"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This command sets the Description of the Route1 voice route to "Test Route."

Set-CsVoiceRoute -Identity Route1 -Description "Test Route"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"}
```

The command in this example modifies the voice route with the identity Route1 to add the PSTN usage Long Distance to the list of usages for this voice route.
Long Distance must be in the list of global PSTN usages (which can be retrieved with a call to Get-CsPstnUsage).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command in this example modifies the voice route with the identity Route1 to add the PSTN usage Long Distance to the list of usages for this voice route.
Long Distance must be in the list of global PSTN usages (which can be retrieved with a call to Get-CsPstnUsage).

Set-CsVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command in this example modifies the voice route with the identity Route1 to add the PSTN usage Long Distance to the list of usages for this voice route.
Long Distance must be in the list of global PSTN usages (which can be retrieved with a call to the Get-CsPstnUsage cmdlet).

Set-CsVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"}

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
$x = (Get-CsPstnUsage).Usage
Set-CsVoiceRoute -Identity Route1 -PstnUsages @{replace=$x}
```

This example modifies the voice route named Route1 to populate that route's list of PSTN usages with all the existing usages for the organization.
The first command in this example retrieves the list of global PSTN usages.
Notice that the call to Get-CsPstnUsage is in parentheses; this means that we first retrieve an object containing PSTN usage information.
(Because there is only one--global--PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object.
That property, which contains a list of PSTN usages, is assigned to the variable $x.
In the second line of this example, Set-CsVoiceRoute is called to modify the voice route with the identity Route1.
Notice the value passed to the PstnUsages parameter: @{replace=$x}.
This value says to replace everything in the PstnUsages list for this route with the contents of $x, which contain the PSTN usages list retrieved in line 1.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example modifies the voice route named Route1 to populate that route's list of PSTN usages with all the existing usages for the organization.
The first command in this example retrieves the list of global PSTN usages.
Notice that the call to Get-CsPstnUsage is in parentheses; this means that we first retrieve an object containing PSTN usage information.
(Because there is only one--global--PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object.
That property, which contains a list of PSTN usages, is assigned to the variable $x.
In the second line of this example, Set-CsVoiceRoute is called to modify the voice route with the identity Route1.
Notice the value passed to the PstnUsages parameter: @{replace=$x}.
This value says to replace everything in the PstnUsages list for this route with the contents of $x, which contain the PSTN usages list retrieved in line 1.

$x = (Get-CsPstnUsage).Usage

Set-CsVoiceRoute -Identity Route1 -PstnUsages @{replace=$x}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the voice route named Route1 to populate that route's list of PSTN usages with all the existing usages for the organization.
The first command in this example retrieves the list of global PSTN usages.
Notice that the call to the Get-CsPstnUsage cmdlet is in parentheses; this means that we first retrieve an object containing PSTN usage information.
(Because there is only one--global--PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object.
That property, which contains a list of PSTN usages, is assigned to the variable $x.
In the second line of this example, the Set-CsVoiceRoute cmdlet is called to modify the voice route with the identity Route1.
Notice the value passed to the PstnUsages parameter: @{replace=$x}.
This value says to replace everything in the PstnUsages list for this route with the contents of $x, which contain the PSTN usages list retrieved in line 1.

$x = (Get-CsPstnUsage).Usage

Set-CsVoiceRoute -Identity Route1 -PstnUsages @{replace=$x}

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
$x = Get-CsVoiceRoute -Identity Route1
$x.Name = "RouteA"
Set-CsVoiceRoute -Instance $x
```

This set of commands changes the Name property of the voice route with the identity Route1 to RouteA.
Changing the Name property automatically changes the Identity property, in this case to RouteA.

In the first line, Get-CsVoiceRoute is called to retrieve the voice route with the identity Route1.
The returned object is stored in the variable $x.
Next, the Name property of that object is assigned the string value "RouteA".
Finally, the object (contained in the variable $x) is passed to the Instance parameter of Set-CsVoiceRoute to make the change.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

This set of commands changes the Name property of the voice route with the identity Route1 to RouteA.
Changing the Name property automatically changes the Identity property, in this case to RouteA.

In the first line, Get-CsVoiceRoute is called to retrieve the voice route with the identity Route1.
The returned object is stored in the variable $x.
Next, the Name property of that object is assigned the string value "RouteA".
Finally, the object (contained in the variable $x) is passed to the Instance parameter of Set-CsVoiceRoute to make the change.

$x = Get-CsVoiceRoute -Identity Route1

$x.Name = "RouteA"

Set-CsVoiceRoute -Instance $x

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

This set of commands changes the Name property of the voice route with the identity Route1 to RouteA.
Changing the Name property automatically changes the Identity property, in this case to RouteA.

In the first line, the Get-CsVoiceRoute cmdlet is called to retrieve the voice route with the identity Route1.
The returned object is stored in the variable $x.
Next, the Name property of that object is assigned the string value "RouteA".
Finally, the object (contained in the variable $x) is passed to the Instance parameter of the Set-CsVoiceRoute cmdlet to make the change.

$x = Get-CsVoiceRoute -Identity Route1

$x.Name = "RouteA"

Set-CsVoiceRoute -Instance $x

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
$y = Get-CsVoiceRoute -Identity Route1
$y.PstnGatewayList.Add("PstnGateway:192.168.0.100")
Set-CsVoiceRoute -Instance $y
```

This example modifies the voice route named Route1 and populates that route's list of PSTN gateways (PstnGatewayList) with the server role of the gateway with the identity PstnGateway:192.168.0.100.
In the first line of this example, Get-CsVoiceRoute is called to retrieve the voice route we want to modify, in this case Route1.
Next we call the Add method on the PstnGatewayList property of Route1.
We pass the Add method the Identity of the service we want to add.
Finally, we call Set-CsVoiceRoute, passing the Instance parameter the variable $y, which will update Route1 (stored in $y) with the newly-added PSTN gateway.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

This example modifies the voice route named Route1 and populates that route's list of PSTN gateways (PstnGatewayList) with the server role of the gateway with the identity PstnGateway:192.168.0.100.
In the first line of this example, Get-CsVoiceRoute is called to retrieve the voice route we want to modify, in this case Route1.
Next we call the Add method on the PstnGatewayList property of Route1.
We pass the Add method the Identity of the service we want to add.
Finally, we call Set-CsVoiceRoute, passing the Instance parameter the variable $y, which will update Route1 (stored in $y) with the newly-added PSTN gateway.

$y = Get-CsVoiceRoute -Identity Route1

$y.PstnGatewayList.Add("PstnGateway:192.168.0.100")

Set-CsVoiceRoute -Instance $y

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the voice route named Route1 and populates that route's list of PSTN gateways (PstnGatewayList) with the server role of the gateway with the identity PstnGateway:192.168.0.100.
In the first line of this example, the Get-CsVoiceRoute cmdlet is called to retrieve the voice route we want to modify, in this case Route1.
Next we call the Add method on the PstnGatewayList property of Route1.
We pass the Add method the Identity of the service we want to add.
Finally, we call the Set-CsVoiceRoute cmdlet, passing the Instance parameter the variable $y, which will update Route1 (stored in $y) with the newly-added PSTN gateway.

$y = Get-CsVoiceRoute -Identity Route1

$y.PstnGatewayList.Add("PstnGateway:192.168.0.100")

Set-CsVoiceRoute -Instance $y

## PARAMETERS

### -Identity
The unique identity of the voice route.
(If the route name contains a space, such as Test Route, you must enclose the full string in parentheses.)

```yaml
Type: XdsGlobalRelativeIdentity
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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route and can be retrieved by calling Get-CsVoiceRoute.



Below Content Applies To: Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route and can be retrieved by calling the Get-CsVoiceRoute cmdlet.



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

### -AlternateCallerId
If the SuppressCallerId parameter is set to True, the value of the AlternateCallerId parameter will be displayed to receiving parties rather than the caller's actual number.
This number should be a valid number and could be used to represent a division within an organization, such as Support or Human Resources.

If the SuppressCallerId parameter is set to False, the AlternateCallerId parameter is ignored.

This value must match the regular expression (\+)?\[1-9\]\d*(;ext=\[1-9\]\d*)?.
In other words, the value can begin with a plus sign (+) but doesn't need to; must consist of any number of digits; and may be followed by an extension that begins with ;ext= followed by any number of digits.
(Note that if you include an extension the string must be placed within double quotes.)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description of what this phone route is for.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberPattern
A regular expression that specifies the phone numbers to which this route applies.
Numbers matching this pattern will be routed according to the rest of the routing settings.
For example, the default number pattern, \[0-9\]{10}, specifies a 10-digit number containing any digits 0 through 9.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
A number could resolve to multiple voice routes.
The priority determines the order in which the routes will be applied if more than one route is possible.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstnGatewayList
Below Content Applies To: Lync Server 2010

A Mediation Server can be associated with multiple gateways.
This parameter contains a list of gateways associated with this voice route.
Each member of this list must be the service Identity of the PSTN gateway or Mediation Server.
The value can refer to a Mediation Server only if the Mediation Server is configured for Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2.
For Lync Server 2010 a PSTN gateway must be used.
The service Identity is a string in the format ServiceRole:FQDN, where ServiceRole is the name of the service role (PSTNGateway), and FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server.
For example, PSTNGateway:redmondpool.litwareinc.com.
Service identities can be retrieved by calling the command Get-CsService | Select-Object Identity.

If you make changes to a voice route and leave the PstnGatewayList list empty, or if the change you make removes all the items in the list, you'll receive a warning message that users will be unable to make PSTN calls.



Below Content Applies To: Lync Server 2013

A Mediation Server can be associated with multiple gateways.
This parameter contains a list of gateways associated with this voice route.
Each member of this list must be the service Identity of the PSTN gateway or Mediation Server.
The value can refer to a Mediation Server only if the Mediation Server is configured for Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2.
For Lync Server a PSTN gateway must be used.
The service Identity is a string in the format ServiceRole:FQDN, where ServiceRole is the name of the service role (PSTNGateway), and FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server.
For example, PSTNGateway:redmondpool.litwareinc.com.
Service identities can be retrieved by calling the command Get-CsService | Select-Object Identity.

If you make changes to a voice route and leave the PstnGatewayList list empty, or if the change you make removes all the items in the list, you'll receive a warning message that users will be unable to make PSTN calls.



Below Content Applies To: Skype for Business Server 2015

A Mediation Server can be associated with multiple gateways.
This parameter contains a list of gateways associated with this voice route.
Each member of this list must be the service Identity of the PSTN gateway or Mediation Server.
The value can refer to a Mediation Server only if the Mediation Server is configured for Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2.
For Skype for Business Server 2015 a PSTN gateway must be used.
The service Identity is a string in the format ServiceRole:FQDN, where ServiceRole is the name of the service role (PSTNGateway), and FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server.
For example, PSTNGateway:redmondpool.litwareinc.com.
Service identities can be retrieved by calling the command Get-CsService | Select-Object Identity.

If you make changes to a voice route and leave the PstnGatewayList list empty, or if the change you make removes all the items in the list, you'll receive a warning message that users will be unable to make PSTN calls.



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

### -PstnUsages
A list of PSTN usages (such as Local or Long Distance) that can be applied to this voice route.
The PSTN usage must be an existing usage.
(PSTN usages can be retrieved by calling the Get-CsPstnUsage cmdlet.)

If you make changes to a voice route and leave the PstnUsages list empty, or if the change you make removes all the PSTN usages in the list, you'll receive a warning message that users will be unable to make PSTN calls.

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

### -SuppressCallerId
Determines whether a caller's ID will be revealed on outbound calls.
If this parameter is set to True, caller ID will be suppressed.
In place of the actual ID, the value of the AlternateCallerId will be displayed.
When SuppressCallerId is set to True, a value for AlternateCallerId must be supplied.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.
Accepts pipelined input of voice route objects.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.
The Set-CsVoiceRoute cmdlet accepts pipelined input of voice route objects.

## OUTPUTS

###  
Set-CsVoiceRoute does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.

###  
The Set-CsVoiceRoute cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b786aec0-946e-4ce5-812e-25e5d8cfa4d5(OCS.14).aspx)

[New-CsVoiceRoute]()

[Remove-CsVoiceRoute]()

[Get-CsVoiceRoute]()

[Test-CsVoiceRoute]()

[Get-CsPstnUsage]()

[Get-CsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/b786aec0-946e-4ce5-812e-25e5d8cfa4d5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b786aec0-946e-4ce5-812e-25e5d8cfa4d5(OCS.16).aspx)

