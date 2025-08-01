---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Grant-CsTeamsAIPolicy
online version: https://learn.microsoft.com/powershell/module/teams/Grant-CsTeamsAIPolicy
schema: 2.0.0
author: Andy447
ms.author: andywang
---

# Grant-CsTeamsAIPolicy

## SYNOPSIS
This cmdlet applies an instance of the Teams AI policy to users or groups in a tenant.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsAIPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsAIPolicy -Identity <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsAIPolicy [[-PolicyName] <String>] [-Group] <String> -Rank <Int32>
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsAIPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION

The new csTeamsAIPolicy will replace the existing enrollment settings in csTeamsMeetingPolicy, providing enhanced flexibility and control for Teams meeting administrators. Unlike the current single setting, EnrollUserOverride, which applies to both face and voice enrollment, the new policy introduces two distinct settings: EnrollFace and EnrollVoice. These can be individually set to Enabled or Disabled, offering more granular control over biometric enrollments. A new setting, SpeakerAttributionBYOD, is also being added to csTeamsAIPolicy. This allows IT admins to turn off speaker attribution in BYOD scenarios, giving them greater control over how voice data is managed in such environments. This setting can be set to Enabled or Disabled, and will be Enabled by default. In addition to improving the management of face and voice data, the csTeamsAIPolicy is designed to support future AI-related settings in Teams, making it a scalable solution for evolving needs.

This cmdlet applies an instance of the Teams AI policy to users or groups in a tenant.

Passes in the `Identity` of the policy instance in the `PolicyName` parameter and the user identifier in the `Identity` parameter or the group name in the `Group` parameter. One of either `Identity` or `Group` needs to be passed.

## EXAMPLES

### Example 1
```powershell
PS C:\> Grant-CsTeamsAIPolicy -PolicyName Test -Identity testuser@test.onmicrosoft.com
```

Assigns a given policy to a user.

### Example 2
```powershell
PS C:\> Grant-CsTeamsAIPolicy -Group f13d6c9d-ce76-422c-af78-b6018b4d9c80 -PolicyName Test
```

Assigns a given policy to a group.

### Example 3
```powershell
PS C:\> Grant-CsTeamsAIPolicy -Global -PolicyName Test
```

Assigns a given policy to the tenant.

### Example 4
```powershell
PS C:\> Grant-CsTeamsAIPolicy -Global -PolicyName Test
```

Note: _Using $null in place of a policy name can be used to unassigned a policy instance._

## PARAMETERS

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Global
This is the equivalent to `-Identity Global`.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
This is the identifier of the group that the policy should be assigned to.

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
Specifies the identity of the target user.

Example: testuser@test.onmicrosoft.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

Use the "Global" Identity if you wish to set the policy for the entire tenant.

```yaml
Type: String
Parameter Sets: GrantToUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Specifies the name of the policy to be assigned. The PolicyName is the policy identity minus the policy scope ("tag:"), for example, a policy that has an identity of "Tag:Enabled" has a PolicyName of "Enabled".

```yaml
Type: String
Parameter Sets: GrantToUser, GrantToGroup, GrantToTenant
Aliases:

Required: False
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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsaipolicy)

[Remove-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsaipolicy)

[Get-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsaipolicy)

[Set-CsTeamsAIPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy)