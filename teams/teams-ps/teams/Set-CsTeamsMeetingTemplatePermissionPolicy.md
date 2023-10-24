---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
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
        [-Description <string>]
        [-Force]
        [-WhatIf]
        [-Confirm]
        [<CommonParameters>]
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

### -Identity

Name of the policy instance to be updated.

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

### -HiddenMeetingTemplates

The updated list of meeting template IDs to hide.
The HiddenMeetingTemplate objects are created with [New-CsTeamsHiddenMeetingTemplate](New-CsTeamsHiddenMeetingTemplate.yml).

```yaml
Type: HiddenMeetingTemplate[]
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

Pass in a new description if that field needs to be updated.

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

## RELATED LINKS
[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.yml)

[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.yml)

[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.yml)

[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.yml)