---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csonlinevoiceroutingpolicy
schema: 2.0.0
title: Grant-CsOnlineVoiceRoutingPolicy
---

# Grant-CsOnlineVoiceRoutingPolicy

## SYNOPSIS
Assigns a per-user online voice routing policy to one user, a group of users, or sets the Global policy instance. Online voice routing policies manage online PSTN usages for Phone System users.

## SYNTAX

### Identity (Default)
```powershell
Grant-CsOnlineVoiceRoutingPolicy [[-Identity] <string>] [[-PolicyName] <string>] [-PassThru] [<CommonParameters>]
```

### GrantToTenant
```powershell
Grant-CsOnlineVoiceRoutingPolicy [[-PolicyName] <string>] [-PassThru] [-Global] [<CommonParameters>]
```

### GrantToGroup
```powershell
Grant-CsOnlineVoiceRoutingPolicy [-Group] <string> [[-PolicyName] <string>] [-PassThru] [-Rank <int>] [<CommonParameters>]
```

## DESCRIPTION
Online voice routing policies are used in Microsoft Phone System Direct Routing scenarios. Assigning your Teams users an online voice routing policy enables those users to receive and to place phone calls to the public switched telephone network by using your on-premises SIP trunks.

Note that simply assigning a user an online voice routing policy will not enable them to make PSTN calls via Teams. Among other things, you will also need to enable those users for Phone System and will need to assign them an appropriate online voice policy.

## EXAMPLES

### Example 1
```powershell
Grant-CsOnlineVoiceRoutingPolicy -Identity Ken.Myer@contoso.com -PolicyName "RedmondOnlineVoiceRoutingPolicy"
```

The command shown in Example 1 assigns the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy to the user ken.myer@contoso.com.

### Example 2
```powershell
Grant-CsOnlineVoiceRoutingPolicy -Identity Ken.Myer@contoso.com -PolicyName $Null
```

In Example 2, any per-user online voice routing policy previously assigned to the user Ken Myer is unassigned from that user; as a result, Ken Myer will be managed by the global online voice routing policy. To unassign a per-user policy, set the PolicyName to a null value ($null).

### Example 3
```powershell
Get-CsOnlineUser | Grant-CsOnlineVoiceRoutingPolicy -PolicyName "RedmondOnlineVoiceRoutingPolicy"
```

Example 3 assigns the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy to all the users in the tenant. To do this, the command first calls the `Get-CsOnlineUser` cmdlet to get all user accounts enabled for Microsoft Teams or Skype for Business Online. Those user accounts are then piped to the `Grant-CsOnlineVoiceRoutingPolicy` cmdlet, which assigns each user the online voice routing policy RedmondOnlineVoiceRoutingPolicy.

### Example 4
```powershell
Grant-CsOnlineVoiceRoutingPolicy -PolicyName "RedmondOnlineVoiceRoutingPolicy" -Global
```

Example 4 assigns the per-user online voice routing policy RedmondOnlineVoiceRoutingPolicy as the global online voice routing policy. This affects all the users in the tenant, except any that have an explicit policy assignment.

### Example 5
```powershell
Grant-CsOnlineVoiceRoutingPolicy -Group sales@contoso.com -Rank 10 -PolicyName "RedmondOnlineVoiceRoutingPolicy"
```

Example 5 assigns the online voice routing policy RedmondOnlineVoiceRoutingPolicy to all members of the group sales@contoso.com.

## PARAMETERS

### -Global
When you use this cmdlet without specifying a user identity, the policy applies to all users in your tenant, except any that have an explicit policy assignment. To skip a warning when you do this operation, specify this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be assigned the per-user online voice routing policy. User Identities can be specified using one of the following formats: the user's SIP address, the user's user principal name (UPN), or the user's Active Directory display name (for example, Ken Myer).

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being assigned the online voice routing policy. By default, the `Grant-CsOnlineVoiceRoutingPolicy` cmdlet does not pass objects through the pipeline.

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

### -PolicyName
Name of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:Redmond has a PolicyName equal to Redmond; likewise, a policy with the Identity tag:RedmondOnlineVoiceRoutingPolicy has a PolicyName equal to RedmondOnlineVoiceRoutingPolicy.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

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

The GrantToGroup syntax is supported in Teams PowerShell Module 4.5.1-preview or later.

## RELATED LINKS
[New-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinevoiceroutingpolicy)

[Get-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinevoiceroutingpolicy)

[Set-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoiceroutingpolicy)

[Remove-CsOnlineVoiceRoutingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csonlinevoiceroutingpolicy)
