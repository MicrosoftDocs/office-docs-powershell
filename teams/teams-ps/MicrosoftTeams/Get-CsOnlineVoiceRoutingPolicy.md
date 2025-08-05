---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinevoiceroutingpolicy
schema: 2.0.0
title: Get-CsOnlineVoiceRoutingPolicy
---

# Get-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Returns information about the online voice routing policies configured for use in your tenant.

## SYNTAX

### Identity (Default)
```
Get-CsOnlineVoiceRoutingPolicy [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineVoiceRoutingPolicy [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Microsoft Phone System Direct Routing scenarios. Assigning your Teams users an online voice routing policy enables those users to receive and to place phone calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### Example 1
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy
```

The command shown in Example 1 returns information for all the online voice routing policies configured for use in the tenant.

### Example 2
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy"
```

In Example 2, information is returned for a single online voice routing policy: the policy with the Identity RedmondOnlineVoiceRoutingPolicy.

### Example 3
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy -Filter "tag:*"
```

The command shown in Example 3 returns information about all the online voice routing policies configured at the per-user scope. To do this, the command uses the Filter parameter and the filter value "tag:\*"; that filter value limits the returned data to policies that have an Identity that begins with the string value "tag:".

### Example 4
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -contains "Long Distance"}
```

In Example 4, information is returned only for those online voice routing policies that include the PSTN usage "Long Distance". To carry out this task, the command first calls `Get-CsVoiceRoutingPolicy` without any parameters; that returns a collection of all the voice routing policies configured for use in the organization. This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the OnlinePstnUsages property includes (-contains) the usage "Long Distance".

### Example 5
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -notcontains "Long Distance"}
```

Example 5 is a variation on the command shown in Example 4; in this case, however, information is returned only for those online voice routing policies that do not include the PSTN usage "Long Distance". In order to do that, the Where-Object cmdlet uses the -notcontains operator, which limits returned data to policies that do not include the usage "Long Distance".

## PARAMETERS

### -Filter
Enables you to use wildcards when retrieving one or more online voice routing policies. For example, to return all the policies configured at the per-user scope, use this syntax:

-Filter "tag:\*"

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the online voice routing policy to be retrieved. To return the global policy, use this syntax:

-Identity global

To return a policy configured at the per-user scope, use syntax like this:

-Identity "RedmondOnlineVoiceRoutingPolicy"

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then `Get-CsOnlineVoiceRoutingPolicy` returns all the voice routing policies configured for use in the tenant.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinevoiceroutingpolicy)

[Set-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoiceroutingpolicy)

[Grant-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csonlinevoiceroutingpolicy)

[Remove-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csonlinevoiceroutingpolicy)
