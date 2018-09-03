---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# New-CsOnlineVoiceRoute
Creates a new online voice route. Voice routes contain instructions that tell Skype for Business Online how to route calls from Phone System users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX). 

## SYNOPSIS

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
Use this cmdlet to create a new online voice route. All voice routes are created at the Global scope. However, multiple global voice routes can be defined. This is accomplished through the Identity parameter, which requires a unique route name.

Voice routes are associated with online voice policies through online PSTN usages. A voice route includes a regular expression that identifies which phone numbers will be routed through a given voice route: phone numbers matching the regular expression will be routed through this route.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> New-CsOnlineVoiceRoute -Identity Route1
```

The command in this example creates a new online voice route with an Identity of Route1. All other properties will be set to the default values.

### -------------------------- Example 2 --------------------------
```
PS C:\> New-CsOnlineVoiceRoute -Identity Route1 -OnlinePstnUsages @{add="Long Distance"} -OnlinePstnGatewayList @{add="OnlinePstnGateway:redmondpool.litwareinc.com"}
```

The command in this example creates a new online voice route with an Identity of Route1. It also adds the online PSTN usage Long Distance to the list of usages and the service ID PstnGateway:redmondpool.litwareinc.com to the list of online PSTN gateways.

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
{{Fill Description Description}}

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
{{Fill Force Description}}

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
{{Fill Identity Description}}

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
{{Fill InMemory Description}}

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
{{Fill Name Description}}

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
{{Fill NumberPattern Description}}

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
{{Fill OnlinePstnGatewayList Description}}

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
{{Fill OnlinePstnUsages Description}}

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
{{Fill Priority Description}}

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
{{Fill Tenant Description}}

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
