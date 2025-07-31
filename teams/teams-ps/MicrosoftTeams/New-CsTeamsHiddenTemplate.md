---
author: yishuaihuang4
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: weiliu2
Module Name: MicrosoftTeams
ms.author: yishuaihuang
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamshiddentemplate
schema: 2.0.0
title: New-CsTeamsHiddenTemplate
---

# New-CsTeamsHiddenTemplate

## SYNOPSIS
This cmdlet is used to create a `HiddenTemplate` object.
## SYNTAX

```
New-CsTeamsHiddenTemplate -Id <String> [<CommonParameters>]
```

## DESCRIPTION
Creates an object that can be supplied as `HiddenTemplate` to the [New-CsTeamsTemplatePermissionPolicy](new-csteamstemplatepermissionpolicy.md) and [Set-CsTeamsTemplatePermissionPolicy](set-csteamstemplatepermissionpolicy.md) cmdlets.

## EXAMPLES

### Example 1
```powershell
PS >$manageProjectTemplate = New-CsTeamsHiddenTemplate -Id com.microsoft.teams.template.ManageAProject
```

Creates a new hidden Teams template object. For more examples of how this can be used, see the examples for [New-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamstemplatepermissionpolicy).

## PARAMETERS

### -Id
ID of the Teams template to hide.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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

### HiddenTemplate.Cmdlets.HiddenTemplate

## NOTES

## RELATED LINKS
[New-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamstemplatepermissionpolicy)

[Set-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamstemplatepermissionpolicy)
