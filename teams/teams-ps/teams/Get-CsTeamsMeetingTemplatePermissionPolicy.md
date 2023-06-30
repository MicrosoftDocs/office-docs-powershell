---
Module Name: MicrosoftTeams
title: Get-CsTeamsMeetingTemplatePermissionPolicy
author: boboPD
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
---

# Get-CsTeamsMeetingTemplatePermissionPolicy

## SYNOPSIS
Fetches the TeamsMeetingTemplatePermissionPolicy. This policy can be used to hide meeting templates from users and groups.

## SYNTAX

### Identity
```powershell
Get-CsTeamsMeetingTemplatePermissionPolicy [[-Identity] <string>]  [<CommonParameters>]
```

### Filter
```powershell
Get-CsTeamsMeetingTemplatePermissionPolicy [-Filter <string>]  [<CommonParameters>]
```

## DESCRIPTION
Fetches the instances of the policy. Each policy object contains a property called `HiddenMeetingTemplates`.This array contains the list of meeting template IDs that will be hidden by that instance of the policy.

## EXAMPLES

### Example 1

```powershell
Get-CsTeamsMeetingTemplatePermissionPolicy
```
```output
Identity               : Global
HiddenMeetingTemplates : {}
Description            :

Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            :

Identity               : Tag:dashbrd test
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            : test

Identity               : Tag:Default
HiddenMeetingTemplates : {}
Description            :
```

Fetches all the policy instances currently available.

### Example 2

```powershell
PS> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            :
```

Fetches an instance of a policy with known identity.

### Example 3

```powershell
PS> Get-CsTeamsMeetingTemplatePermissionPolicy -Filter *Foo*
```
```output
Identity               : Tag:Foobar
HiddenMeetingTemplates : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description            :
```

The `Filter` parameter can be used to fetch policy instances based on partial matches on Identity.

Note: _The "Tag:" prefix can be ignored when specifying the identity._

## PARAMETERS

### -Identity

This parameter can be used to fetch a specific instance of the policy.

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

### -Filter

This parameter can be used to fetch policy instances based on partial matches on the `Identity` field.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS
[Set-CsTeamsMeetingTemplatePermissionPolicy](Set-CsTeamsMeetingTemplatePermissionPolicy.md)

[New-CsTeamsMeetingTemplatePermissionPolicy](New-CsTeamsMeetingTemplatePermissionPolicy.md)

[Remove-CsTeamsMeetingTemplatePermissionPolicy](Remove-CsTeamsMeetingTemplatePermissionPolicy.md)

[Grant-CsTeamsMeetingTemplatePermissionPolicy](Grant-CsTeamsMeetingTemplatePermissionPolicy.md)