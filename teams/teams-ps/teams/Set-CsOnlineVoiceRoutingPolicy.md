---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceroutingpolicy
applicable: Microsoft Teams
title: Set-CsOnlineVoiceRoutingPolicy
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Modifies an existing online voice routing policy. Online voice routing policies manage online PSTN usages for Phone System users.

## SYNTAX

### Identity (Default)
```
Set-CsOnlineVoiceRoutingPolicy [[-Identity] <string>] [-Description <string>]
 [-OnlinePstnUsages <Object>] [-RouteType <string>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Microsoft Phone System Direct Routing scenarios. Assigning your Teams users an online voice routing policy enables those users to receive and to place phone calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Set-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy" -OnlinePstnUsages @{Add="Long Distance"}
```

The command shown in Example 1 adds the online PSTN usage "Long Distance" to the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy.

### -------------------------- Example 2 --------------------------
```
PS C:\> Set-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy" -OnlinePstnUsages @{Remove="Local"}
```

In Example 2, the online PSTN usage "Local" is removed from the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy.

### -------------------------- Example 3 --------------------------
```
PS C:\> Set-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -contains "Local"} | Set-CsOnlineVoiceRoutingPolicy -OnlinePstnUsages @{Remove="Local"}
```

Example 3 removes the online PSTN usage "Local" from all the online voice routing policies that include that usage. In order to do this, the command first calls the `Get-CsOnlineVoiceRoutingPolicy` cmdlet without any parameters in order to return a collection of all the available online voice routing policies. That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the OnlinePstnUsages property includes (-contains) the "Local" usage. Those policies are then piped to the `Set-CsOnlineVoiceRoutingPolicy` cmdlet, which deletes the Local usage from each policy.

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
Enables administrators to provide explanatory text to accompany an online voice routing policy. For example, the Description might include information about the users the policy should be assigned to.

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
Unique identifier assigned to the policy when it was created. Online voice routing policies can be assigned at the global scope or the per-user scope. To refer to the global instance, use this syntax:

-Identity global

To refer to a per-user policy, use syntax similar to this:

-Identity "RedmondOnlineVoiceRoutingPolicy"

If you do not specify an Identity, then the `Set-CsOnlineVoiceRoutingPolicy` cmdlet will modify the global policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlinePstnUsages
A list of online PSTN usages (such as Local or Long Distance) that can be applied to this online voice routing policy. The online PSTN usage must be an existing usage. (PSTN usages can be retrieved by calling the `Get-CsOnlinePstnUsage` cmdlet.)

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteType
This parameter is reserved for internal Microsoft use.

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

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csonlinevoiceroutingpolicy)

[Get-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoiceroutingpolicy)

[Grant-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csonlinevoiceroutingpolicy)

[Remove-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoiceroutingpolicy)
