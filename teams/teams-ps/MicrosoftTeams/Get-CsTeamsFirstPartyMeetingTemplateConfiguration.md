---
author: boboPD
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: pradas
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsTeamsFirstPartyMeetingTemplateConfiguration
schema: 2.0.0
title: Get-CsTeamsFirstPartyMeetingTemplateConfiguration
---

# Get-CsTeamsFirstPartyMeetingTemplateConfiguration

## SYNOPSIS
This cmdlet fetches the first-party meeting templates stored on the tenant.

## SYNTAX

```powershell
Get-CsTeamsFirstPartyMeetingTemplateConfiguration [[-Identity] <string>] [<CommonParameters>]
```

## DESCRIPTION
Fetches the list of first-party templates on the tenant. Each template object contains its list of meeting options, the name of the template, and its ID.

This is a read-only configuration.

## EXAMPLES

### Example 1 - Fetching all first party meeting templates on the tenant

```powershell
PS C:\> Get-CsTeamsFirstPartyMeetingTemplateConfiguration

Identity              : Global
TeamsMeetingTemplates : {default, firstparty_30d773c0-1b4e-4bf6-970b-73f544c054bb,
                        firstparty_399f69a3-c482-41bf-9cf7-fcdefe269ce6,
                        firstparty_64c92390-c8a2-471e-96d9-4ee8f6080155...}
Description           : The `TeamsMeetingTemplates` property contains the meeting template details:

TeamsMeetingOptions : {SelectedSensitivityLabel, AutoAdmittedUsers, AllowPstnUsersToBypassLobby,
                      EntryExitAnnouncementsEnabled...}
Description         : Townhall
Name                : firstparty_21f91ef7-6265-4064-b78b-41ab66889d90
Category            :

TeamsMeetingOptions : {AutoRecordingEnabled, AllowMeetingChat, PresenterOption}
Description         : Virtual appointment
Name                : firstparty_e514e598-fba6-4e1f-b8b3-138dd3bca748
Category            :
```

Fetches all the first-party templates on the tenant.

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
[Get-CsTeamsMeetingTemplateConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration)
