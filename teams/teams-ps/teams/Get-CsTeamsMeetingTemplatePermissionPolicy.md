---
Module Name: MicrosoftTeams
title: Get-CsTeamsMeetingTemplatePermissionPolicy
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
---

# Get-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
Fetches the TeamsMeetingTemplatePermissionPolicy. This policy can be used to hide meeting templates from users and groups.

## SYNTAX
```powershell
Get-CsTeamsMeetingTemplatePermissionPolicy [[-Identity] <string>]  [<CommonParameters>]

Get-CsTeamsMeetingTemplatePermissionPolicy [-Filter <string>]  [<CommonParameters>]
```

## DESCRIPTION
Fetches the instances of the policy. Each policy object contains a property called `HiddenMeetingTemplates`.This array contains the list of meeting template IDs that will be hidden by that instance of the policy.

## EXAMPLES
To fetch all the policy instances currently available run the command with any parameters;

```powershell
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy
```
```output
Identity               : Global
HiddenMeetingTemplates : {}
Description            :

Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            :

Identity               : Tag:dashbrd test
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            : test

Identity               : Tag:Default
HiddenMeetingTemplates : {}
Description            :
```

To fetch an instance of a policy with known identity, pass in the `Identity` parameter:

```powershell
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            :
```

Note: _The "Tag:" prefix can be ignored when specifying the identity._

## INPUTS

## OUTPUTS

## RELATED LINKS
[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)
[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)
[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)
[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.md)