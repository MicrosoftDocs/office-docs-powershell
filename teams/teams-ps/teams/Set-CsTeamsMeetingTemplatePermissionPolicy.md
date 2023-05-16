---
Module Name: MicrosoftTeams
title: Set-CsTeamsMeetingTemplatePermissionPolicy
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
---

# Set-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS

This cmdlet updates an existing TeamsMeetingTemplatePermissionPolicy.

## SYNTAX

```powershell
    Set-CsTeamsMeetingTemplatePermissionPolicy 
        [-Identity] <string> 
        [-HiddenMeetingTemplates <PSListModifier[HiddenMeetingTemplate]>] 
        [-Description <string>] [-Force]
        [-WhatIf]
        [-Confirm]
        [<CommonParameters>]
```

## DESCRIPTION

Update any of the properties of an existing instance of the TeamsMeetingTemplatePermissionPolicy.

## EXAMPLES

The below snippets illustrates a typical update operation where we fetch an existing policy instance and then update one of its properties and then fetch it again to confirm that the update was applied.

Lets update a policy instance with Identity=Foobar:

```powershell
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            :
```

Nows lets try to update its description:

```powershell
PS C:\test> Set-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar -Description "updated description"
```

Fetch it again to confirm that the update was saved:

```powershell
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            : updated description
```

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)
[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)
[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)
[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.md)