---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsHiddenMeetingTemplate
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/New-CsTeamsHiddenMeetingTemplate
schema: 2.0.0
---

# New-CsTeamsHiddenMeetingTemplate

## SYNOPSIS
This cmdlet is used to create a `HiddenMeetingTemplate` object for use with the [New-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingtemplatepermissionpolicy) and [Set-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingtemplatepermissionpolicy) cmdlets.

## SYNTAX

```powershell
New-CsTeamsHiddenMeetingTemplate -Id <string> [<CommonParameters>]
```

## DESCRIPTION

Creates an object that can be supplied as `HiddenMeetingTemplate` to the [New-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingtemplatepermissionpolicy) and [Set-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingtemplatepermissionpolicy) cmdlets.

## EXAMPLES

### Example 1 - Creating a new hidden meeting template

Creates a new hidden meeting template object:

```powershell
PS> $hiddentemplate_1 = New-CsTeamsHiddenMeetingTemplate -Id customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056
```

Creates a new HiddenMeetingTemplate object with the given template ID.

For more examples of how this can be used, see the examples for [New-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingtemplatepermissionpolicy).

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingtemplatepermissionpolicy)

[New-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsmeetingtemplatepermissionpolicy)

[Set-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingtemplatepermissionpolicy)
