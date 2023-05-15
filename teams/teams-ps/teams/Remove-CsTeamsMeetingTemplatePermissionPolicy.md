# Remove-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
Deletes an instance of TeamsMeetingTemplatePermissionPolicy

## SYNTAX

```powershell
Remove-CsTeamsMeetingTemplatePermissionPolicy [-Identity] <string> [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
```

## DESCRIPTION
Deletes an instance of TeamsMeetingTemplatePermissionPolicy. The `Identity` parameter accepts the identity of the policy instance to delete.

## EXAMPLES
We'll first find a policy to delete, delete the policy and then confirm that it has been deleted by trying to fetch it again.

```powershell
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy

Identity               : Tag:Test_Policy
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056, firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748}
Description            : This is a test policy

PS C:\test> Remove-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy
PS C:\test> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy

Get-CsTeamsMeetingTemplatePermissionPolicy : "Test_Policy" not found Please check your request parameters. CorrelationId: c2738e06-0171-4da2-a0ae-e7e99b7c70e3
At line:1 char:1
+ Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [Get-CsTeamsMeet...ermissionPolicy], PolicyRpException
    + FullyQualifiedErrorId : ClientError,Microsoft.Teams.Policy.Administration.Cmdlets.Core.GetTeamsMeetingTemplatePermissionPolicyCmdlet
```

## INPUTS

## OUTPUTS

## NOTES

Attempting to delete a policy instance that is currently assigned to users will result in an error. Please remove the assignment before attempting to delete it.

```powershell
PS C:\test> Remove-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```

```output
Remove-CsTeamsMeetingTemplatePermissionPolicy : The policy "Foobar" is currently assigned to one or more users. Assign a different policy to the users before removing
this one. Please refer to documentation. CorrelationId: 8698472b-f441-423b-8ee3-0469c7e07528
At line:1 char:1
+ Remove-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [Remove-CsTeamsM...ermissionPolicy], PolicyRpException
    + FullyQualifiedErrorId : ClientError,Microsoft.Teams.Policy.Administration.Cmdlets.Core.RemoveTeamsMeetingTemplatePermissionPolicyCmdlet
```

## RELATED LINKS
[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)
[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)
[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.md)