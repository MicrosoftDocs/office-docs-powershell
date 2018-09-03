---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineUser
schema: 2.0.0
---

# New-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Creates a new online voice routing policy. Online voice routing policies manage online PSTN usages for users of Phone System.

## SYNTAX
### Identity
```
New-CsOnlineVoiceRoutingPolicy [-Tenant <Guid>] [-OnlinePstnUsages <PSListModifier>]
 [-Description <String>] [-RouteType <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Direct Routing scenarios. Assigning your Skype for Business Online users an online voice routing policy enables those users to receive and to place phones calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Skype for Business Online or Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> New-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy" -Name "RedmondOnlineVoiceRoutingPolicy" -OnlinePstnUsages "Long Distance"
```

The command shown in Example 1 creates a new online per-user voice routing policy with the Identity RedmondOnlineVoiceRoutingPolicy. This policy is assigned a single online PSTN usage: Long Distance.

### -------------------------- Example 2 --------------------------
```
PS C:\> New-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy" -Name "RedmondOnlineVoiceRoutingPolicy" -OnlinePstnUsages "Long Distance", "Local", "Internal"
```

Example 2 is a variation of the command shown in Example 1; in this case, however, the new policy is assigned three online PSTN usages: Long Distance; Local; Internal. Multiple usages can be assigned simply by separating each usage using a comma.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
