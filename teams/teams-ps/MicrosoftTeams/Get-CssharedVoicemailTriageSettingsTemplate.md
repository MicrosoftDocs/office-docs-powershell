---
applicable: Microsoft Teams Queues App, Outlook
author: vijurtse
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: vijurtse
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Get-CssharedVoicemailTriageSettingsTemplate
schema: 2.0.0
title: Get-CssharedVoicemailTriageSettingsTemplate
---

# Get-CssharedVoicemailTriageSettingsTemplate

## SYNOPSIS
The Get‑CsSharedVoicemailTriageSettingsTemplate cmdlet retrieves the configuration for automatic triage of Shared Voicemails, including the importance flag, summary, suggested actions, and category settings.

## SYNTAX

```

Get-CsSharedVoicemailTriageSettingsTemplate [[-Id] <string>] [[-HttpPipelinePrepend] <SendAsyncStep[]>] [-Force] [<CommonParameters>]

```

## DESCRIPTION
Use the Get‑CsSharedVoicemailTriageSettingsTemplate cmdlet to retrieve the configuration for automatic triage of Shared Voicemails. This includes settings for importance flagging, summary generation, suggested actions, and category assignment.
## EXAMPLES

### Example 1
```
Get‑CsSharedVoicemailTriageSettingsTemplate -Id "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx"

```
This example retrieves the configuration of the specified Shared Voicemail triage template.


## PARAMETERS


```

### -ID

Template ID


```yaml
Type: string

Required: True
Position: Named
Default value: None
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


