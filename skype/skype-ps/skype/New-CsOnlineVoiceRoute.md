---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# New-CsOnlineVoiceRoute

## SYNOPSIS
Creates a new online voice route. Online voice routes contain instructions that tell Skype for Business Online how to route calls from Office 365 users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

## SYNTAX

### Identity (Default)
```
New-CsOnlineVoiceRoute [-Tenant <Guid>] [-Description <String>] [-NumberPattern <String>]
 [-OnlinePstnUsages <PSListModifier>] [-OnlinePstnGatewayList <PSListModifier>] [-Priority <Int32>]
 [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsOnlineVoiceRoute [-Tenant <Guid>] -Name <String> [-Description <String>] [-NumberPattern <String>]
 [-OnlinePstnUsages <PSListModifier>] [-OnlinePstnGatewayList <PSListModifier>] [-Priority <Int32>] [-InMemory]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
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
PS C:\> New-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{add="Long Distance"} -OnlinePstnGatewayList @{add="OnlinePstnGateway:sbc1.litwareinc.com"}
```

The command in this example creates a new online voice route with an Identity of Route1. It also adds the online PSTN usage Long Distance to the list of usages and the service ID PstnGateway:sbc1.litwareinc.com to the list of online PSTN gateways.

### -------------------------- Example 3 --------------------------
```
PS C:\> $x = (Get-CsOnlinePstnUsage).Usage

New-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{add=$x}
```

This example creates a new online voice route named Route1 and populates that route's list of PSTN usages with all the existing usages for the organization. The first command in this example retrieves the list of global online PSTN usages. Notice that the call to the `Get-CsOnlinePstnUsage` cmdlet is in parentheses; this means that we first retrieve an object containing PSTN usage information. (Because there is only one, global, online PSTN usage, only one object will be retrieved.) The command then retrieves the Usage property of this object. That property, which contains a list of usages, is assigned to the variable $x. In the second line of this example, the `New-CsOnlineVoiceRoute` cmdlet is called to create a new online voice route. This voice route will have an identity of Route1. Notice the value passed to the OnlinePstnUsages parameter: @{add=$x}. This value says to add the contents of $x, which contain the phone usages list retrieved in line 1, to the list of online PSTN usages for this route.

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
A name that uniquely identifies the online voice route. Voice routes can be defined only at the global scope, so the identity is simply the name you want to give the route. (You can have spaces in the route name, for instance Test Route, but you must enclose the full string in double quotes in the call to the New-CsOnlineVoiceRoute cmdlet.)

If Identity is specified, the Name must be left blank. The value of the Identity will be assigned to the Name.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-<cmdlet>.

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

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/get-csonlinevoiceroute?view=skype-ps)

[Set-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/set-csonlinevoiceroute?view=skype-ps)

[Remove-CsOnlineVoiceRoute](https://docs.microsoft.com/en-us/powershell/module/skype/remove-csonlinevoiceroute?view=skype-ps)
