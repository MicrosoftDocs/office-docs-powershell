---
author: yishuaihuang4
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: weiliu2
Module Name: MicrosoftTeams
ms.author: yishuaihuang
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamstemplatepermissionpolicy
schema: 2.0.0
title: New-CsTeamsTemplatePermissionPolicy
---

# New-CsTeamsTemplatePermissionPolicy

## SYNOPSIS
Creates a new instance of the TeamsTemplatePermissionPolicy.

## SYNTAX

```
New-CsTeamsTemplatePermissionPolicy
 [-HiddenTemplates <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.HiddenTemplate]>]
 [-Description <String>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Creates a new instance of the policy with a name and a list of hidden Teams template IDs. The template IDs passed into the `HiddenTemplates` object must be valid existing template IDs. The current custom and first-party templates on a tenant can be fetched by [Get-CsTeamTemplateList](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist).

## EXAMPLES

### Example 1

Assuming there are two valid templates with IDs `com.microsoft.teams.template.ManageAProject` and `com.microsoft.teams.template.ManageAnEvent`, we will first create the `HiddenTemplate` objects.

The next step would be to create the policy instance.
```powershell
PS >$manageEventTemplate = New-CsTeamsHiddenTemplate -Id com.microsoft.teams.template.ManageAnEvent
PS >$manageProjectTemplate = New-CsTeamsHiddenTemplate -Id com.microsoft.teams.template.ManageAProject
PS >$HiddenList = @($manageProjectTemplate, $manageEventTemplate)
PS >New-CsTeamsTemplatePermissionPolicy -Identity Foobar -HiddenTemplates $HiddenList
```

```output
Identity   HiddenTemplates                                                                           Description
--------   ---------------                                                                           -----------
Tag:Foobar {com.microsoft.teams.template.ManageAProject, com.microsoft.teams.template.ManageAnEvent}
```

## PARAMETERS

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -HiddenTemplates
The list of Teams template IDs to hide.
The HiddenTemplate objects are created with [New-CsTeamsHiddenTemplate](https://learn.microsoft.com/powershell/module/teams/new-csteamshiddentemplate).

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.HiddenTemplate]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Name of the new policy instance to be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
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

### None

## OUTPUTS

### TeamsTemplatePermissionPolicy.Cmdlets.TeamsTemplatePermissionPolicy

## NOTES

## RELATED LINKS
[Get-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamstemplatepermissionpolicy)

[Remove-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamstemplatepermissionpolicy)

[Set-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamstemplatepermissionpolicy)
