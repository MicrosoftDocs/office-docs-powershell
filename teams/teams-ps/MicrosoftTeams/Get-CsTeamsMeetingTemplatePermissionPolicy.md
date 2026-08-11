---
author: boboPD
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsTeamsMeetingTemplatePermissionPolicy
schema: 2.0.0
title: Get-CsTeamsMeetingTemplatePermissionPolicy
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
Fetches the instances of the policy. Each policy object contains a property called `HiddenMeetingTemplates`.This array contains the list of meeting template IDs that will be hidden by that instance of the policy. The policy also contains a `DefaultMeetingTemplateId` property that specifies the ID of the meeting template to be applied by default to ad-hoc or standard meetings created by the user.

## EXAMPLES

### Example 1 - Fetching all policies

```powershell
PS C:\> Get-CsTeamsMeetingTemplatePermissionPolicy

Identity                  : Global
HiddenMeetingTemplates    : {}
Description               :
DefaultMeetingTemplateId  :

Identity                  : Tag:Foobar
HiddenMeetingTemplates    : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description               :
DefaultMeetingTemplateId  :

Identity                  : Tag:dashbrd test
HiddenMeetingTemplates    : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description               : test
DefaultMeetingTemplateId  : customtemplate_1ed47b4c-2a43-4a75-b884-87f4f3e3a1c8

Identity                  : Tag:Default
HiddenMeetingTemplates    : {}
Description               :
DefaultMeetingTemplateId  :
```

Fetches all the policy instances currently available.

### Example 2 - Fetching a specific policy using its identity

```powershell
PS C:\> Get-CsTeamsMeetingTemplatePermissionPolicy -Identity Foobar

Identity                  : Tag:Foobar
HiddenMeetingTemplates    : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description               :
DefaultMeetingTemplateId  :
```

Fetches an instance of a policy with known identity.

### Example 3 - Fetching policies using regex

```powershell
PS C:\> Get-CsTeamsMeetingTemplatePermissionPolicy -Filter *Foo*

Identity                  : Tag:Foobar
HiddenMeetingTemplates    : {customtemplate_9ab0014a-bba4-4ad6-b816-0b42104b5056}
Description               :
DefaultMeetingTemplateId  :
```

The `Filter` parameter can be used to fetch policy instances based on partial matches on Identity.

Note: _The "Tag:" prefix can be ignored when specifying the identity._

## PARAMETERS

### -Filter

> Applicable: Microsoft Teams

This parameter can be used to fetch policy instances based on partial matches on the `Identity` field.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: True
```

### -Identity

> Applicable: Microsoft Teams

This parameter can be used to fetch a specific instance of the policy.

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
[Set-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingtemplatepermissionpolicy)

[New-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsmeetingtemplatepermissionpolicy)

[Remove-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsmeetingtemplatepermissionpolicy)

[Grant-CsTeamsMeetingTemplatePermissionPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsmeetingtemplatepermissionpolicy)
