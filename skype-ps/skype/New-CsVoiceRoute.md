---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsVoiceRoute

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new voice route.
Voice routes contain instructions that tell Microsoft Lync Server 2010  how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

**Below Content Applies To:** Lync Server 2013

Creates a new voice route.
Voice routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new voice route.
Voice routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsVoiceRoute [-Identity] <XdsGlobalRelativeIdentity> [-AlternateCallerId <String>] [-Description <String>]
 [-NumberPattern <String>] [-Priority <Int32>] [-PstnGatewayList <PSListModifier>]
 [-PstnUsages <PSListModifier>] [-SuppressCallerId <Boolean>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsVoiceRoute -Name <String> [-AlternateCallerId <String>] [-Description <String>] [-NumberPattern <String>]
 [-Priority <Int32>] [-PstnGatewayList <PSListModifier>] [-PstnUsages <PSListModifier>]
 [-SuppressCallerId <Boolean>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Use this cmdlet to create a new voice route.
All voice routes are created at the Global scope.
However, multiple global voice routes can be defined.
This is accomplished through the Identity parameter, which requires a unique route name.

Voice routes are associated with voice policies through PSTN usages.
A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsVoiceRoute cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsVoiceRoute"}

**Below Content Applies To:** Skype for Business Server 2015

Use this cmdlet to create a new voice route.
All voice routes are created at the Global scope.
However, multiple global voice routes can be defined.
This is accomplished through the Identity parameter, which requires a unique route name.

Voice routes are associated with voice policies through PSTN usages.
A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsVoiceRoute -Identity Route1
```

The command in this example creates a new voice route with an Identity of Route1.
All other properties will be set to the default values.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command in this example creates a new voice route with an Identity of Route1.
All other properties will be set to the default values.

New-CsVoiceRoute -Identity Route1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command in this example creates a new voice route with an Identity of Route1.
All other properties will be set to the default values.

New-CsVoiceRoute -Identity Route1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"} -PstnGatewayList @{add="PstnGateway:redmondpool.litwareinc.com"}
```

The command in this example creates a new voice route with an Identity of Route1.
It also adds the PSTN usage Long Distance to the list of usages and the service ID PstnGateway:redmondpool.litwareinc.com to the list of PSTN gateways.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command in this example creates a new voice route with an Identity of Route1.
It also adds the PSTN usage Long Distance to the list of usages and the service ID PstnGateway:redmondpool.litwareinc.com to the list of PSTN gateways.

New-CsVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"} -PstnGatewayList @{add="PstnGateway:redmondpool.litwareinc.com"}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command in this example creates a new voice route with an Identity of Route1.
It also adds the PSTN usage Long Distance to the list of usages and the service ID PstnGateway:redmondpool.litwareinc.com to the list of PSTN gateways.

New-CsVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"} -PstnGatewayList @{add="PstnGateway:redmondpool.litwareinc.com"}

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
$x = (Get-CsPstnUsage).Usage
New-CsVoiceRoute -Identity Route1 -PstnUsages @{add=$x}
```

This example creates a new voice route named Route1 and populates that route's list of PSTN usages with all the existing usages for the organization.
The first command in this example retrieves the list of global PSTN usages.
Notice that the call to Get-CsPstnUsage is in parentheses; this means that we first retrieve an object containing PSTN usage information.
(Because there is only one, global, PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object.
That property, which contains a list of usages, is assigned to the variable $x.
In the second line of this example, New-CsVoiceRoute is called to create a new voice route.
This voice route will have an identity of Route1.
Notice the value passed to the PstnUsages parameter: @{add=$x}.
This value says to add the contents of $x, which contain the phone usages list retrieved in line 1, to the list of PSTN usages for this route.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example creates a new voice route named Route1 and populates that route's list of PSTN usages with all the existing usages for the organization.
The first command in this example retrieves the list of global PSTN usages.
Notice that the call to Get-CsPstnUsage is in parentheses; this means that we first retrieve an object containing PSTN usage information.
(Because there is only one, global, PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object.
That property, which contains a list of usages, is assigned to the variable $x.
In the second line of this example, New-CsVoiceRoute is called to create a new voice route.
This voice route will have an identity of Route1.
Notice the value passed to the PstnUsages parameter: @{add=$x}.
This value says to add the contents of $x, which contain the phone usages list retrieved in line 1, to the list of PSTN usages for this route.

$x = (Get-CsPstnUsage).Usage

New-CsVoiceRoute -Identity Route1 -PstnUsages @{add=$x}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new voice route named Route1 and populates that route's list of PSTN usages with all the existing usages for the organization.
The first command in this example retrieves the list of global PSTN usages.
Notice that the call to the Get-CsPstnUsage cmdlet is in parentheses; this means that we first retrieve an object containing PSTN usage information.
(Because there is only one, global, PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object.
That property, which contains a list of usages, is assigned to the variable $x.
In the second line of this example, the New-CsVoiceRoute cmdlet is called to create a new voice route.
This voice route will have an identity of Route1.
Notice the value passed to the PstnUsages parameter: @{add=$x}.
This value says to add the contents of $x, which contain the phone usages list retrieved in line 1, to the list of PSTN usages for this route.

$x = (Get-CsPstnUsage).Usage

New-CsVoiceRoute -Identity Route1 -PstnUsages @{add=$x}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A name that uniquely identifies the voice route.
Voice routes can be defined only at the global scope, so the identity is simply the name you want to give the route.
(You can have spaces in the route name, for instance Test Route, but you must enclose the full string in double quotes in the call to New-CsVoiceRoute.)

If Identity is specified, the Name must be left blank.
The value of the Identity will be assigned to the Name.



**Below Content Applies To:** Skype for Business Server 2015

A name that uniquely identifies the voice route.
Voice routes can be defined only at the global scope, so the identity is simply the name you want to give the route.
(You can have spaces in the route name, for instance Test Route, but you must enclose the full string in double quotes in the call to the New-CsVoiceRoute cmdlet.)

If Identity is specified, the Name must be left blank.
The value of the Identity will be assigned to the Name.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The unique name of the voice route.
If this parameter is set, the value will be automatically applied to the voice route Identity.
You cannot specify both an Identity and a Name.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
A description of what this voice route is for.

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

Default: \[0-9\]{10}

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
**Below Content Applies To:** Lync Server 2010

In Lync Server 2010 a Mediation Server can be associated with multiple gateways.
This parameter contains a list of gateways associated with this voice route.
Each member of this list must be the service Identity of the PSTN gateway or Mediation Server.
The value can refer to a Mediation Server only if the Mediation Server is configured for Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2.
For Lync Server 2010, a PSTN gateway must be used.
The service Identity is a string in the format \<ServiceRole\>:\<FQDN\>, where ServiceRole is the name of the service role (PSTNGateway), and FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server.
For example, PSTNGateway:redmondpool.litwareinc.com.
Service identities can be retrieved by calling the command Get-CsService | Select-Object Identity.

By default this list is empty.
However, if you leave this parameter blank when creating a new voice route, you'll receive a warning message.



**Below Content Applies To:** Lync Server 2013

In Lync Server a Mediation Server can be associated with multiple gateways.
This parameter contains a list of gateways associated with this voice route.
Each member of this list must be the service Identity of the PSTN gateway or Mediation Server.
The value can refer to a Mediation Server only if the Mediation Server is configured for Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2.
For Lync Server, a PSTN gateway must be used.
The service Identity is a string in the format \<ServiceRole\>:\<FQDN\>, where ServiceRole is the name of the service role (PSTNGateway), and FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server.
For example, PSTNGateway:redmondpool.litwareinc.com.
Service identities can be retrieved by calling the command Get-CsService | Select-Object Identity.

By default this list is empty.
However, if you leave this parameter blank when creating a new voice route, you'll receive a warning message.



**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015 a Mediation Server can be associated with multiple gateways.
This parameter contains a list of gateways associated with this voice route.
Each member of this list must be the service Identity of the PSTN gateway or Mediation Server.
The value can refer to a Mediation Server only if the Mediation Server is configured for Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2.
For Skype for Business Server 2015, a PSTN gateway must be used.
The service Identity is a string in the format \<ServiceRole\>:\<FQDN\>, where ServiceRole is the name of the service role (PSTNGateway), and FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server.
For example, PSTNGateway:redmondpool.litwareinc.com.
Service identities can be retrieved by calling the command Get-CsService | Select-Object Identity.

By default this list is empty.
However, if you leave this parameter blank when creating a new voice route, you'll receive a warning message.



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
A list of PSTN usages (such as Local, Long Distance, etc.) that can be applied to this voice route.
The PSTN usage must be an existing usage.
(PSTN usages can be retrieved by calling the Get-CsPstnUsage cmdlet.)

By default this list is empty.
However, if you leave this parameter blank when creating a new voice route, you'll receive a warning message.

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

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1118f74f-b06c-41d2-8b1b-5cc1e1957b77(OCS.14).aspx)

[Remove-CsVoiceRoute]()

[Set-CsVoiceRoute]()

[Get-CsVoiceRoute]()

[Test-CsVoiceRoute]()

[Get-CsPstnUsage]()

[Get-CsService]()

[Online Version](http://technet.microsoft.com/EN-US/library/1118f74f-b06c-41d2-8b1b-5cc1e1957b77(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1118f74f-b06c-41d2-8b1b-5cc1e1957b77(OCS.16).aspx)

