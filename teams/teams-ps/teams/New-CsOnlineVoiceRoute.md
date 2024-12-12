---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlinevoiceroute
applicable: Microsoft Teams
title: New-CsOnlineVoiceRoute
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# New-CsOnlineVoiceRoute

## SYNOPSIS
Creates a new online voice route. Online voice routes contain instructions that tell Skype for Business Online how to route calls from Office 365 users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

## SYNTAX

### Identity (Default)
```
New-CsOnlineVoiceRoute [-Identity] <String> [-BridgeSourcePhoneNumber <String>] [-Description <String>]
 [-NumberPattern <String>] [-OnlinePstnGatewayList <Object>] [-OnlinePstnUsages <Object>] [-Priority <Int32>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsOnlineVoiceRoute [-BridgeSourcePhoneNumber <String>] [-Description <String>] [-NumberPattern <String>]
 [-OnlinePstnGatewayList <Object>] [-OnlinePstnUsages <Object>] [-Priority <Int32>]
 -Name <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to create a new online voice route. All online voice routes are created at the Global scope. However, multiple global voice routes can be defined. This is accomplished through the Identity parameter, which requires a unique route name.

Voice routes are associated with online voice policies through online PSTN usages. A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.

This cmdlet is used when configuring Microsoft Phone System Direct Routing.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> New-CsOnlineVoiceRoute -Identity Route1
```

The command in this example creates a new online voice route with an Identity of Route1. All other properties will be set to the default values.

### -------------------------- Example 2 --------------------------
```
PS C:\> New-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{add="Long Distance"} -OnlinePstnGatewayList @{add="sbc1.litwareinc.com"}
```

The command in this example creates a new online voice route with an Identity of Route1. It also adds the online PSTN usage Long Distance to the list of usages and the service ID PstnGateway sbc1.litwareinc.com to the list of online PSTN gateways.

### -------------------------- Example 3 --------------------------
```
PS C:\> $x = (Get-CsOnlinePstnUsage).Usage

New-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{add=$x}
```

This example creates a new online voice route named Route1 and populates that route's list of PSTN usages with all the existing usages for the organization. The first command in this example retrieves the list of global online PSTN usages. Notice that the call to the `Get-CsOnlinePstnUsage` cmdlet is in parentheses; this means that we first retrieve an object containing PSTN usage information. (Because there is only one, global, online PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object. That property, which contains a list of usages, is assigned to the variable $x. In the second line of this example, the `New-CsOnlineVoiceRoute` cmdlet is called to create a new online voice route. This voice route will have an identity of Route1. Notice the value passed to the OnlinePstnUsages parameter: @{add=$x}. This value says to add the contents of $x, which contain the phone usages list retrieved in line 1, to the list of online PSTN usages for this route.

## PARAMETERS

### -BridgeSourcePhoneNumber
BridgeSourcePhoneNumber is an E.164 formatted Operator Connect Conferencing phone number assigned to your Audio Conferencing Bridge. Using BridgeSourcePhoneNumber in an online voice route is mutually exclusive with using OnlinePstnGatewayList in the same online voice route.

When using BridgeSourcePhoneNumber in an online voice route, the OnlinePstnUsages used in the online voice route should only be used in a corresponding OnlineAudioConferencingRoutingPolicy. The same OnlinePstnUsages should not be used in online voice routes that are not using BridgeSourcePhoneNumber.

For more information about Operator Connect Conferencing, please see [Configure Operator Connect Conferencing](https://learn.microsoft.com/microsoftteams/operator-connect-conferencing-configure).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description of what this online voice route is for.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A name that uniquely identifies the online voice route. Voice routes can be defined only at the global scope, so the identity is simply the name you want to give the route. (You can have spaces in the route name, for instance Test Route, but you must enclose the full string in double quotes in the call to the New-CsOnlineVoiceRoute cmdlet.)

If Identity is specified, the Name must be left blank. The value of the Identity will be assigned to the Name.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The unique name of the voice route. If this parameter is set, the value will be automatically applied to the online voice route Identity. You cannot specify both an Identity and a Name.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberPattern
A regular expression that specifies the phone numbers to which this route applies. Numbers matching this pattern will be routed according to the rest of the routing settings.

Default: [0-9]{10}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlinePstnGatewayList
This parameter contains a list of online gateways associated with this online voice route. Each member of this list must be the service Identity of the online PSTN gateway. The service Identity is the fully qualified domain name (FQDN) of the pool or the IP address of the server. For example, redmondpool.litwareinc.com.

By default this list is empty. However, if you leave this parameter blank when creating a new voice route, you'll receive a warning message.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlinePstnUsages
A list of online PSTN usages (such as Local, Long Distance, etc.) that can be applied to this online voice route. The PSTN usage must be an existing usage (PSTN usages can be retrieved by calling the Get-CsOnlinePstnUsage cmdlet).

By default this list is empty. However, if you leave this parameter blank when creating a new online voice route, you'll receive a warning message.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
A number could resolve to multiple online voice routes. The priority determines the order in which the routes will be applied if more than one route is possible. The lowest priority will be applied first and then in ascendant order.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoiceroute)

[Set-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceroute)

[Remove-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoiceroute)
