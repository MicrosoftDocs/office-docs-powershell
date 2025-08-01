---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoiceroutingpolicy
applicable: Microsoft Teams
title: Remove-CsOnlineVoiceRoutingPolicy
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Remove-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Deletes an existing online voice routing policy. Online voice routing policies manage online PSTN usages for Phone System users.

## SYNTAX

### Identity
```
Remove-CsOnlineVoiceRoutingPolicy [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Microsoft Phone System Direct Routing scenarios. Assigning your Teams users an online voice routing policy enables those users to receive and to place phone calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Remove-CsOnlineVoiceRoutingPolicy -Identity "RedmondOnlineVoiceRoutingPolicy"
```

The command shown in Example 1 deletes the online voice routing policy RedmondOnlineVoiceRoutingPolicy.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy -Filter "tag:*" | Remove-CsOnlineVoiceRoutingPolicy
```

In Example 2, all the online voice routing policies configured at the per-user scope are removed. To do this, the command first calls the `Get-CsOnlineVoiceRoutingPolicy` cmdlet along with the Filter parameter; the filter value "tag:\*" limits the returned data to online voice routing policies configured at the per-user scope. Those per-user policies are then piped to and removed by, the `Remove-CsOnlineVoiceRoutingPolicy` cmdlet.

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsOnlineVoiceRoutingPolicy | Where-Object {$_.OnlinePstnUsages -contains "Long Distance"} | Remove-CsOnlineVoiceRoutingPolicy
```

In Example 3, all the online voice routing polices that include the online PSTN usage "Long Distance" are removed. To carry out this task, the `Get-CsOnlineVoiceRoutingPolicy` cmdlet is first called without any parameters in order to return a collection of all the available online voice routing policies. That collection is then piped to the Where-Object cmdlet, which picks out only those policies where the OnlinePstnUsages property includes (-contains) the usage "Long Distance". Policies that meet that criterion are then piped to the `Remove-CsOnlineVoiceRoutingPolicy`, which removes each online voice routing policy that includes the online PSTN usage "Long Distance".

## PARAMETERS

### -Identity
Unique identifier assigned to the policy when it was created.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: ByPropertyName
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csonlinevoiceroutingpolicy)

[Get-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoiceroutingpolicy)

[Set-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceroutingpolicy)

[Grant-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csonlinevoiceroutingpolicy)
