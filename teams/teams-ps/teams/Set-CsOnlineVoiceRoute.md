---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceroute
applicable: Microsoft Teams
title: Set-CsOnlineVoiceRoute
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsOnlineVoiceRoute

## SYNOPSIS
Modifies an online voice route. Online voice routes contain instructions that tell Microsoft Teams how to route calls from Microsoft or Office 365 users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

## SYNTAX

### Identity
```
Set-CsOnlineVoiceRoute [-BridgeSourcePhoneNumber <String>] [-Description <String>] [[-Identity] <String>]
 [-NumberPattern <String>] [-OnlinePstnGatewayList <Object>] [-OnlinePstnUsages <Object>] [-Priority <Int32>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to modify an existing online voice route. Online voice routes are associated with online voice policies through online public switched telephone network (PSTN) usages. A online voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.

This cmdlet is used when configuring Microsoft Phone System Direct Routing.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Set-CsOnlineVoiceRoute -Identity Route1 -Description "Test Route"
```

This command sets the Description of the Route1 online voice route to "Test Route."

### -------------------------- Example 2 --------------------------
```
PS C:\> Set-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{add="Long Distance"}
```

The command in this example modifies the online voice route with the identity Route1 to add the online PSTN usage Long Distance to the list of usages for this voice route. Long Distance must be in the list of global online PSTN usages (which can be retrieved with a call to the `Get-CsOnlinePstnUsage` cmdlet).

### -------------------------- Example 3 --------------------------
```
PS C:\> $x = (Get-CsOnlinePstnUsage).Usage

PS C:\> Set-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{replace=$x}
```

This example modifies the online voice route named Route1 to populate that route's list of online PSTN usages with all the existing usages for the organization. The first command in this example retrieves the list of global online PSTN usages. Notice that the call to the `Get-CsOnlinePstnUsage` cmdlet is in parentheses; this means that we first retrieve an object containing PSTN usage information. (Because there is only one--global--PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object. That property, which contains a list of online PSTN usages, is assigned to the variable $x. In the second line of this example, the Set-CsOnlineVoiceRoute cmdlet is called to modify the online voice route with the identity Route1. Notice the value passed to the OnlinePstnUsages parameter: @{replace=$x}. This value says to replace everything in the OnlinePstnUsages list for this route with the contents of $x, which contain the online PSTN usages list retrieved in line 1.

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
A description of what this phone route is for.

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
The unique identity of the online voice route. (If the route name contains a space, such as Test Route, you must enclose the full string in parentheses.)

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberPattern
A regular expression that specifies the phone numbers to which this route applies. Numbers matching this pattern will be routed according to the rest of the routing settings. For example, the default number pattern, [0-9]{10}, specifies a 10-digit number containing any digits 0 through 9.

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoiceroute)

[New-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/new-csonlinevoiceroute)

[Remove-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoiceroute)
