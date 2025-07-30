---
applicable: Microsoft Teams
author: serdarsoysal
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamssharedcallingroutingpolicy
schema: 2.0.0
title: Grant-CsTeamsSharedCallingRoutingPolicy
---

# Grant-CsTeamsSharedCallingRoutingPolicy

## SYNOPSIS

Assigns a specific Teams shared calling routing policy to a user, a group of users, or sets the Global policy instance.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsSharedCallingRoutingPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsSharedCallingRoutingPolicy [[-PolicyName] <string>] -Identity <string> [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsSharedCallingRoutingPolicy -Global [[-PolicyName] <string>] [-Force] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsSharedCallingRoutingPolicy [-Group] <string> [[-PolicyName] <string>] -Rank <int> [<CommonParameters>]
```

## EXAMPLES

### EXAMPLE 1
```
Grant-CsTeamsSharedCallingRoutingPolicy -Identity "user@contoso.com" -PolicyName "Seattle"
```
The command shown in Example 1 assigns the per-user Teams shared calling routing policy instance Seattle to the user user@contoso.com.

### EXAMPLE 2
```
Grant-CsTeamsSharedCallingRoutingPolicy -PolicyName "Seattle" -Global
```
Example 2 assigns the per-user Teams shared calling routing policy instance Seattle to all the users in the organization, except any that have an explicit Teams shared calling routing policy assignment.

## PARAMETERS

### -Force

> Applicable: Microsoft Teams

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
When you use this cmdlet without specifying a user identity, the policy applies to all users in your organization, except any that have an explicit policy assignment. To prevent a warning when you carry out this operation, specify this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: (GrantToGroup)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be assigned the per-user Teams shared calling routing policy. User identities can be specified using one of the following formats: the user's SIP address, the user's user principal name (UPN), or the user's ObjectId or Identity.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PolicyName
Name of the policy to be assigned. The PolicyName is simply the policy Identity minus the policy scope (the "tag:" prefix). For example, a policy with the Identity tag:Seattle has a PolicyName equal to Seattle.

To unassign a per-user policy previously assigned to a user, set the PolicyName to a null value ($Null).

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

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: (GrantToGroup)
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

## NOTES
This cmdlet was introduced in Teams PowerShell Module 5.5.0.

## RELATED LINKS
[Get-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamssharedcallingroutingpolicy)

[Set-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamssharedcallingroutingpolicy)

[Remove-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamssharedcallingroutingpolicy)

[New-CsTeamsSharedCallingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamssharedcallingroutingpolicy)
