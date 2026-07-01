---
applicable: Microsoft Teams Queues App, Outlook
author: vijurtse
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: vijurtse
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CsSharedVoicemailTriageSettingsTemplate
schema: 2.0.0
title: Get-CsSharedVoicemailTriageSettingsTemplate
---

# Get-CsSharedVoicemailTriageSettingsTemplate

## SYNOPSIS
The Get‑CsSharedVoicemailTriageSettingsTemplate cmdlet retrieves the configuration for automatic triage of Shared Voicemails, including the importance flag, summary, suggested actions, and category settings.

## SYNTAX

```
Get-CsSharedVoicemailTriageSettingsTemplate [[-Id] <string>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get‑CsSharedVoicemailTriageSettingsTemplate cmdlet to retrieve the configuration for automatic triage of Shared Voicemails. This includes settings for importance flagging, summary generation, suggested actions, and category assignment.
## EXAMPLES

### Example 1
```
Get‑CsSharedVoicemailTriageSettingsTemplate -Id 3a4b3d9b-91d8-4fbf-bcff-6907f325842c

```
This example retrieves the configuration of the specified Shared Voicemail triage template.

### Example 2
```
Get‑CsSharedVoicemailTriageSettingsTemplate -Id

```
This example retrieves a list of all available templates for voicemail triage settings.

## PARAMETERS

### -ID

Template ID

```yaml
Type: System.String
Parameter Sets: (All)

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

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[New-CsSharedVoicemailTriageSettingsTemplate](./New-CsSharedVoicemailTriageSettingsTemplate.md)

[Set-CsSharedVoicemailTriageSettingsTemplate](./Set-CsSharedVoicemailTriageSettingsTemplate.md)

[Remove-CsSharedVoicemailTriageSettingsTemplate](./Remove-CsSharedVoicemailTriageSettingsTemplate.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)


