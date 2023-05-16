---
Module Name: MicrosoftTeams
title: New-CsTeamsHiddenMeetingTemplate
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/New-CsTeamsHiddenMeetingTemplate
schema: 2.0.0
---

# New-CsTeamsHiddenMeetingTemplate

## SYNOPSIS

This cmdlet is used to create a `HiddenMeetingTemplate` object for use with the [New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md) and [Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md) cmdlets.

## SYNTAX

```powershell
New-CsTeamsHiddenMeetingTemplate -Id <string>  [<CommonParameters>]
```

## DESCRIPTION

Creates an object that can be supplied as `HiddenMeetingTemplate` to [New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md) and [Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md) cmdlets.

## EXAMPLES

```powershell
PS C:\test> $hiddentemplate_1 = New-CsTeamsHiddenMeetingTemplate -Id customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056
```

For more examples on how this can be used, please check the examples at [New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)

## INPUTS

## OUTPUTS

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)
[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)
[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)