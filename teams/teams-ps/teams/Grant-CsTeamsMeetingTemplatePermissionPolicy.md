---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
title: Grant-CsTeamsMeetingTemplatePermissionPolicy
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Grant-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
---

# Grant-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
This cmdlet applies an instance of the TeamsMeetingTemplatePermissionPolicy to users or groups in a tenant.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsMeetingTemplatePermissionPolicy [<CommonParameters>]
```

### GrantToUser
```
Grant-CsTeamsMeetingTemplatePermissionPolicy [-Identity] <String> [[-PolicyName] <String>] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsMeetingTemplatePermissionPolicy [[-PolicyName] <String>] [-Group] <String> [-Rank] <Int32>
 [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsMeetingTemplatePermissionPolicy [[-PolicyName] <String>] [-Global] [-Force] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet applies an instance of the TeamsMeetingTemplatePermissionPolicy to users or groups in a tenant.

Pass in the `Identity` of the policy instance in the `PolicyName` parameter and the user identifier in the `Identity` parameter or the group name in the `Group` parameter. One of either `Identity` or `Group` needs to be passed.

## EXAMPLES

### Example 1 - Assign a policy to a user

```powershell
PS> Grant-CsTeamsMeetingTemplatePermissionPolicy -PolicyName Foobar -Identity testuser@test.onmicrosoft.com
```

Assigns a given policy to a user.

## PARAMETERS

### -PolicyName

Specifies the Identity of the policy to assign to the user or group.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

This is the identifier of the user that the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group

This is the identifier of the group that the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Forces the policy assignment.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
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
Parameter Sets: GrantToGroup
Aliases:

Required: True
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

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingtemplatepermissionpolicy)

[New-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingtemplatepermissionpolicy)

[Set-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingtemplatepermissionpolicy)

[Remove-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmeetingtemplatepermissionpolicy)
