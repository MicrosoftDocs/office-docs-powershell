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

### Example 1

Create a new hidden meeting template object:
```powershell
PS> $hiddentemplate_1 = New-CsTeamsHiddenMeetingTemplate -Id customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056
```

Creates a new HiddenMeetingTemplate object with the given template id.

For more examples on how this can be used, please check the examples at [New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)

## PARAMETERS

### -Id

ID of the meeting template to hide.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)

[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)

[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)