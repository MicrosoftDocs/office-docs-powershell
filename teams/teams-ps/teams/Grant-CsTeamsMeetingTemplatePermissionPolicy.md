---
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

```powershell
    Grant-CsTeamsMeetingTemplatePermissionPolicy  [<CommonParameters>]

    Grant-CsTeamsMeetingTemplatePermissionPolicy [[-PolicyName] <string>] -Identity <string>  [<CommonParameters>]

    Grant-CsTeamsMeetingTemplatePermissionPolicy [-Group] <string> [[-PolicyName] <string>] -Rank <int>
    [<CommonParameters>]

    Grant-CsTeamsMeetingTemplatePermissionPolicy [-Global] [[-PolicyName] <string>] [-Force] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet applies an instance of the TeamsMeetingTemplatePermissionPolicy to users or groups in a tenant.

Pass in the `Identity` of the policy instance in the `PolicyName` parameter and the user identifier in the `Identity` parameter or the group name in the `Group` parameter. One of `Identity` or `Group` needs to be passed.

## EXAMPLES

Lets attempt to assign the Foobar policy instance to the user testuser@test.onmicrosoft.com. The policy instance that we want to assign:

```powershell
PS> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            : updated description
```

Command to assign the policy to the user:

```powershell
PS> Grant-CsTeamsMeetingTemplatePermissionPolicy -PolicyName Foobar -Identity testuser@test.onmicrosoft.com
```

## PARAMETERS

### -PolicyName

Specifies the Identity of the policy to assign to the user/group.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)

[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)

[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)

[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)