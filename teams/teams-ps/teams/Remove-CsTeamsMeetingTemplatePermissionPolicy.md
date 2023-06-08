---
Module Name: MicrosoftTeams
title: Remove-CsTeamsMeetingTemplatePermissionPolicy
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Remove-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
---

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

### Example 1

```powershell
PS> Remove-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy
```

Delete a policy instance with the Identity *Test_Policy*.

## PARAMETERS

### -Identity

Identity of the policy instance to be deleted.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## NOTES

Attempting to delete a policy instance that is currently assigned to users will result in an error. Please remove the assignment before attempting to delete it.

```powershell
PS> Remove-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
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