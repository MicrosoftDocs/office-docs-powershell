---
author: boboPD
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
title: Set-CsTeamsMeetingTemplatePermissionPolicy
---

# Set-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
This cmdlet updates an existing TeamsMeetingTemplatePermissionPolicy.

## SYNTAX

```powershell
    Set-CsTeamsMeetingTemplatePermissionPolicy [-Identity] <string> [-HiddenMeetingTemplates <PSListModifier[HiddenMeetingTemplate]>] [-Description <string>] [-Force][-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Update any of the properties of an existing instance of the TeamsMeetingTemplatePermissionPolicy.

## EXAMPLES

### Example 1 - Updating the description of an existing policy

```powershell
PS> Set-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar -Description "updated description"
```

Updates the description field of a policy.

### Example 2 - Updating the hidden meeting template list of an existing policy

```powershell
PS> Set-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar -HiddenMeetingTemplates @($hiddentemplate_1, $hiddentemplate_2)
```

Updates the hidden meeting templates array.

## PARAMETERS

### -Description

> Applicable: Microsoft Teams

Pass in a new description if that field needs to be updated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenMeetingTemplates

> Applicable: Microsoft Teams

The updated list of meeting template IDs to hide.
The HiddenMeetingTemplate objects are created with [New-CsTeamsHiddenMeetingTemplate](https://learn.microsoft.com/powershell/module/teams/new-csteamshiddenmeetingtemplate).

```yaml
Type: HiddenMeetingTemplate[]
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

Name of the policy instance to be updated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
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

[Remove-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsmeetingtemplatepermissionpolicy)

[Grant-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsmeetingtemplatepermissionpolicy)
