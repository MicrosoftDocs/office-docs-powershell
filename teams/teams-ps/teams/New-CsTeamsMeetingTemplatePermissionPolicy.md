---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
title: New-CsTeamsMeetingTemplatePermissionPolicy
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/New-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
---

# New-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
Creates a new instance of the TeamsMeetingTemplatePermissionPolicy.

## SYNTAX

```powershell
New-CsTeamsMeetingTemplatePermissionPolicy [-Identity] <string>
 [-HiddenMeetingTemplates <HiddenMeetingTemplate[]>]
 [-Confirm]
 [-Description <string>]
 [-Force]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the policy with a name and a list of hidden meeting template IDs. The template IDs passed into the `HiddenMeetingTemplates` object must be valid existing template IDs. The current custom and first-party templates on a tenant can be fetched by [Get-CsTeamsMeetingTemplateConfiguration](https://learn.microsoft.com/powershell/module/teams/get-csteamsmeetingtemplateconfiguration) and [Get-CsTeamsFirstPartyMeetingTemplateConfiguration](https://learn.microsoft.com/powershell/module/teams/get-csteamsfirstpartymeetingtemplateconfiguration) respectively.

## EXAMPLES

### Example 1 - Creating a new meeting template permission policy

Assuming there are two valid templates with IDs `firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748` and `customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056`, we will first create the `HiddenMeetingTemplate` objects.

The next step would be to create the policy instance.
```powershell
$hiddentemplate_1 = New-CsTeamsHiddenMeetingTemplate -Id customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056
$hiddentemplate_2 = New-CsTeamsHiddenMeetingTemplate -Id firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748

New-CsTeamsMeetingTemplatePermissionPolicy -Identity Test_Policy -HiddenMeetingTemplates @($hiddentemplate_1, $hiddentemplate_2) -Description "This is a test policy"
```

```output
Identity               : Tag:Test_Policy
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056, firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748}
Description            : This is a test policy
```

## PARAMETERS

### -Identity

Name of the new policy instance to be created.

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

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

Description of the new policy instance to be created.

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

### -Force
Suppresses all confirmation prompts that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenMeetingTemplates

The list of meeting template IDs to hide.
The HiddenMeetingTemplate objects are created with [New-CsTeamsHiddenMeetingTemplate](https://learn.microsoft.com/powershell/module/teams/new-csteamshiddenmeetingtemplate).

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

### -WhatIf

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
[New-CsTeamsHiddenMeetingTemplate](New-CsTeamsHiddenMeetingTemplate.md)

[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)

[Get-CsTeamsMeetingTemplatePermissionPolicy](Get-CsTeamsMeetingTemplatePermissionPolicy.md)

[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)

[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.md)
