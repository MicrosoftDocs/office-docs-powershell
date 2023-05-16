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

    Grant-CsTeamsMeetingTemplatePermissionPolicy [-Global] [[-PolicyName] <string>] [-Force]  [<CommonParameters>]
```

## DESCRIPTION

This cmdlet applies an instance of the TeamsMeetingTemplatePermissionPolicy to users or groups in a tenant.

Pass in the `Identity` of the policy instance in the `PolicyName` parameter and the user identifier in the `Identity` parameter or the group name in the `Group` parameter.

## EXAMPLES

Lets attempt to assign the Foobar policy instance to the user testuser@test.onmicrosoft.com. The policy instance that we want to assign:

```powershell
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            : updated description
```

Command to assign the policy to the user:

```powershell
PS C:\test> Grant-CsTeamsMeetingTemplatePermissionPolicy -PolicyName Foobar -Identity testuser@test.onmicrosoft.com
```

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)
[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)
[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)
[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)