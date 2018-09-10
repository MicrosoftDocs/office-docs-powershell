---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# Set-CsOnlineVoiceRoute

## SYNOPSIS
Modifies an online voice route. Online voice routes contain instructions that tell Skype for Business Online how to route calls from Office 365 users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

## SYNTAX

### Identity (Default)
```
Set-CsOnlineVoiceRoute [-Tenant <Guid>] [-Description <String>] [-NumberPattern <String>]
 [-OnlinePstnUsages <PSListModifier>] [-OnlinePstnGatewayList <PSListModifier>] [-Priority <Int32>]
 [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsOnlineVoiceRoute [-Tenant <Guid>] [-Description <String>] [-NumberPattern <String>]
 [-OnlinePstnUsages <PSListModifier>] [-OnlinePstnGatewayList <PSListModifier>] [-Priority <Int32>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
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
PS C:\> Set-CsOnlineVoiceRoute -Identity Route1 -PstnUsages @{add="Long Distance"}
```

The command in this example modifies the online voice route with the identity Route1 to add the online PSTN usage Long Distance to the list of usages for this voice route. Long Distance must be in the list of global online PSTN usages (which can be retrieved with a call to the `Get-CsOnlinePstnUsage` cmdlet).

### -------------------------- Example 3 --------------------------
```
PS C:\> $x = (Get-CsOnlinePstnUsage).Usage

PS C:\> Set-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{replace=$x}
```

This example modifies the online voice route named Route1 to populate that route's list of online PSTN usages with all the existing usages for the organization. The first command in this example retrieves the list of global online PSTN usages. Notice that the call to the `Get-CsOnlinePstnUsage` cmdlet is in parentheses; this means that we first retrieve an object containing PSTN usage information. (Because there is only one--global--PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object. That property, which contains a list of online PSTN usages, is assigned to the variable $x. In the second line of this example, the Set-CsOnlineVoiceRoute cmdlet is called to modify the online voice route with the identity Route1. Notice the value passed to the OnlinePstnUsages parameter: @{replace=$x}. This value says to replace everything in the OnlinePstnUsages list for this route with the contents of $x, which contain the online PSTN usages list retrieved in line 1.

### -------------------------- Example 4 --------------------------
```
PS C:\> $x = Get-CsOnlineVoiceRoute -Identity Route1

PS C:\> $x.Name = "RouteA"

PS C:\> Set-CsOnlineVoiceRoute -Instance $x
```

This set of commands changes the Name property of the online voice route with the identity Route1 to RouteA. Changing the Name property automatically changes the Identity property, in this case to RouteA.

In the first line, the `Get-CsOnlineVoiceRoute` cmdlet is called to retrieve the online voice route with the identity Route1. The returned object is stored in the variable $x. Next, the Name property of that object is assigned the string value "RouteA". Finally, the object (contained in the variable $x) is passed to the Instance parameter of the `Set-CsOnlineVoiceRoute` cmdlet to make the change.

### -------------------------- Example 5 --------------------------
```
PS C:\> $y = Get-CsOnlineVoiceRoute -Identity Route1

PS C:\> $y.OnlinePstnGatewayList.Add("OnlinePstnGateway:192.168.0.100")

PS C:\> Set-CsOnlineVoiceRoute -Instance $y
```

This example modifies the online voice route named Route1 and populates that route's list of online PSTN gateways (OnlinePstnGatewayList) with the server role of the gateway with the identity PstnGateway:192.168.0.100. In the first line of this example, the `Get-CsOnlineVoiceRoute` cmdlet is called to retrieve the online voice route we want to modify, in this case Route1. Next we call the Add method on the OnlinePstnGatewayList property of Route1. We pass the Add method the Identity of the service we want to add. Finally, we call the `Set-CsOnlineVoiceRoute` cmdlet, passing the Instance parameter the variable $y, which will update Route1 (stored in $y) with the newly-added online PSTN gateway.

## PARAMETERS

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
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
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values. This object can be retrieved by calling the `Get-CsOnlineVoiceRoute` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
This parameter contains a list of online gateways associated with this online voice route. Each member of this list must be the service Identity of the online PSTN gateway. The service Identity is a string in the format OnlinePstnGateway:<FQDN>, where FQDN is the fully qualified domain name (FQDN) of the pool or the IP address of the server. For example, OnlinePstnGateway:redmondpool.litwareinc.com.

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
A number could resolve to multiple online voice routes. The priority determines the order in which the routes will be applied if more than one route is possible.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: System.Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/get-csonlinevoiceroute?view=skype-ps)

[New-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/new-csonlinevoiceroute?view=skype-ps)

[Remove-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csonlinevoiceroute?view=skype-ps)
