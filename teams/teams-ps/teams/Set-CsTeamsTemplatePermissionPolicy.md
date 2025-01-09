---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamstemplatepermissionpolicy
title: Set-CsTeamsTemplatePermissionPolicy
author: yishuaihuang4
ms.author: yishuaihuang
ms.reviewer:
manager: weiliu2
schema: 2.0.0
---

# Set-CsTeamsTemplatePermissionPolicy

## SYNOPSIS
This cmdlet updates an existing TeamsTemplatePermissionPolicy.

## SYNTAX

```
Set-CsTeamsTemplatePermissionPolicy
 [-HiddenTemplates <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.HiddenTemplate]>]
 [-Description <String>] [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Updates any of the properties of an existing instance of the TeamsTemplatePermissionPolicy.

## EXAMPLES

### Example 1
```powershell
PS >$manageEventTemplate = New-CsTeamsHiddenTemplate -Id com.microsoft.teams.template.ManageAnEvent
PS >$manageProjectTemplate = New-CsTeamsHiddenTemplate -Id com.microsoft.teams.template.ManageAProject
PS >$HiddenList = @($manageProjectTemplate, $manageEventTemplate)
PS >Set-CsTeamsTemplatePermissionPolicy -Identity Global -HiddenTemplates $HiddenList
```

Updates the hidden templates array.

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
Adds a new description if that field needs to be updated.

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
The updated list of Teams template IDs to hide.
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
Name of the policy instance to be updated.

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

### System.Void

## NOTES

## RELATED LINKS
[Get-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamstemplatepermissionpolicy)

[New-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamstemplatepermissionpolicy)

[Remove-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamstemplatepermissionpolicy)
