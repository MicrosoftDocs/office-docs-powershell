---
author: boboPD
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/teams/Get-CsTeamsMeetingTemplateConfiguration
schema: 2.0.0
title: Get-CsTeamsMeetingTemplateConfiguration
---

# Get-CsTeamsMeetingTemplateConfiguration

## SYNOPSIS
This cmdlet fetches the custom meeting templates stored on the tenant.

## SYNTAX

```powershell
Get-CsTeamsMeetingTemplateConfiguration [[-Identity] <string>] [<CommonParameters>]
```

## DESCRIPTION
Fetches the list of custom templates on the tenant. Each template object contains its list of meeting options, the name of the template, and its ID.

## EXAMPLES

### Example 1 - Fetching all custom meeting templates on the tenant

```powershell
PS C:\> Get-CsTeamsMeetingTemplateConfiguration

Identity              : Global
TeamsMeetingTemplates : {default, customtemplate_1cb7073a-8b19-4b5d-a3a6-14737d006969,
                        customtemplate_21ecf22c-eb1a-4f05-93e0-555b994ebeb5,
                        customtemplate_0b9c1f57-01ec-4b8a-b4c2-08bd1c01e6ba...}
Description           : The `TeamsMeetingTemplates` property contains the meeting template details:

TeamsMeetingOptions : {SelectedSensitivityLabel, AutoAdmittedUsers, AllowPstnUsersToBypassLobby,
                      EntryExitAnnouncementsEnabled...}
Description         : Custom Template 1
Name                : customtemplate_1cb7073a-8b19-4b5d-a3a6-14737d006969
Category            :

TeamsMeetingOptions : {AutoRecordingEnabled, AllowMeetingChat, PresenterOption}
Description         : Custom Template 2
Name                : customtemplate_21ecf22c-eb1a-4f05-93e0-555b994ebeb5
Category            :
```

Fetches all the custom templates on the tenant.

## PARAMETERS

### -Identity

> Applicable: Microsoft Teams

This parameter can be used to fetch a specific instance of the configuration.

Note: This configuration is read only and will only have the Global instance.

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
[Get-CsTeamsFirstPartyMeetingTemplateConfiguration](https://learn.microsoft.com/powershell/module/teams/get-csteamsfirstpartymeetingtemplateconfiguration)
