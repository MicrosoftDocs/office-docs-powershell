# New-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
Creates a new instance of the TeamsMeetingTemplatePermissionPolicy.

## SYNTAX

```powershell
    New-CsTeamsMeetingTemplatePermissionPolicy [-Identity] <string> [-HiddenMeetingTemplates
    <PSListModifier[HiddenMeetingTemplate]>] [-Description <string>] [-Force] [-WhatIf] [-Confirm]
    [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the policy with a name and a list of hidden meeting template IDs. The templates IDs passed in to the `HiddenMeetingTemplates` object must be valid existing template IDs. The current custom and first party templates on a tenant can be fetched by [Get-CsTeamsMeetingTemplateConfiguration](Get-CsTeamsMeetingTemplateConfiguration.md) and [Get-CsTeamsFirstPartyMeetingTemplateConfiguration](Get-CsTeamsFirstPartyMeetingTemplateConfiguration.md) respectively.

## EXAMPLES

Assuming there are two valid templates with IDs `firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748` and `customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056`, we will first create the `HiddenMeetingTemplate` objects

```powershell
PS C:\test> $hiddentemplate_1 = New-CsTeamsHiddenMeetingTemplate -Id customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056
PS C:\test> $hiddentemplate_2 = New-CsTeamsHiddenMeetingTemplate -Id firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748
```

The next step would be to create the policy instance

```powershell
PS C:\test> New-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy -HiddenMeetingTemplates @($hiddentemplate_1, $hiddentemplate_2) -Description "This is a test policy"

Identity               : Tag:Test_Policy
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056, firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748}
Description            : This is a test policy
```

## INPUTS

The property `HiddenMeetingTemplates` is an array of type 

## OUTPUTS

The created policy object.

## RELATED LINKS
[New-CsTeamsHiddenMeetingTemplate](New-CsTeamsHiddenMeetingTemplate.md)
[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)
[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)
[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.md)