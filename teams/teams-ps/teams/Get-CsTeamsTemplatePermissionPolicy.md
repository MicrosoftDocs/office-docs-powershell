---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamstemplatepermissionpolicy
title: Get-CsTeamsTemplatePermissionPolicy
author: yishuaihuang4
ms.author: yishuaihuang
ms.reviewer:
manager: weiliu2
schema: 2.0.0
---

# Get-CsTeamsTemplatePermissionPolicy

## SYNOPSIS
Fetches the TeamsTemplatePermissionPolicy. This policy can be used to hide Teams templates from users and groups.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsTemplatePermissionPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsTemplatePermissionPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Fetches the instances of the policy. Each policy object contains a property called `HiddenTemplates`.This array contains the list of Teams template IDs that will be hidden by that instance of the policy.

## EXAMPLES

### Example 1
```powershell
PS >Get-CsTeamsTemplatePermissionPolicy
```
```output
Identity                  HiddenTemplates                                                                           Description
--------                  ---------------                                                                           -----------
Global                    {com.microsoft.teams.template.CoordinateIncidentResponse}
Tag:Foobar                {com.microsoft.teams.template.ManageAProject, com.microsoft.teams.template.ManageAnEvent}
```

Fetches all the policy instances currently available.

### Example 2

```powershell
PS >Get-CsTeamsTemplatePermissionPolicy -Identity Foobar
```
```output
Identity   HiddenTemplates                                                                           Description
--------   ---------------                                                                           -----------
Tag:Foobar {com.microsoft.teams.template.ManageAProject, com.microsoft.teams.template.ManageAnEvent}
```

Fetches an instance of a policy with known identity.

### Example 3

```powershell
PS >Get-CsTeamsTemplatePermissionPolicy -Filter *Foo*
```
```output
Identity   HiddenTemplates                                                                           Description
--------   ---------------                                                                           -----------
Tag:Foobar {com.microsoft.teams.template.ManageAProject, com.microsoft.teams.template.ManageAnEvent}
```

The `Filter` parameter can be used to fetch policy instances based on partial matches on Identity.

Note: _The "Tag:" prefix can be ignored when specifying the identity._

## PARAMETERS

### -Filter
This parameter can be used to fetch policy instances based on partial matches on the `Identity` field.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter can be used to fetch a specific instance of the policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
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
[New-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamstemplatepermissionpolicy)

[Remove-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamstemplatepermissionpolicy)

[Set-CsTeamsTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamstemplatepermissionpolicy)
