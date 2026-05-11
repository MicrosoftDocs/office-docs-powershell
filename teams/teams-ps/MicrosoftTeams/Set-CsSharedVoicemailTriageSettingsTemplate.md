---
applicable: Microsoft Teams Queues App, Outlook
author: vijurtse
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: vijurtse
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/Set-CsSharedVoicemailTriageSettingsTemplate
schema: 2.0.0
title: Set-CsSharedVoicemailTriageSettingsTemplate
---

# Set-CsSharedVoicemailTriageSettingsTemplate

## SYNOPSIS

The Set‑CsSharedVoicemailTriageSettingsTemplate cmdlet updates the configuration for automatic triage of Shared Voicemails performed by the Substrate Large Language Model (LLM). You can enable or disable individual triage capabilities, including summary generation, message prioritization, suggested actions, and category assignment.

To fully disable LLM‑based triaging for Shared Voicemails, the corresponding triage settings template must be removed, not just updated. Disabling individual capabilities does not stop the LLM from being invoked; removing the template ensures that no LLM processing occurs.

## SYNTAX

```
Set-CsSharedVoicemailTriageSettingsTemplate [-Instance] <psobject> [[-Force]] [-HttpPipelinePrepend <SendAsyncStep[]>] [-WhatIf] [-Confirm] [<CommonParameters>]


```

## DESCRIPTION
Use the Set‑CsSharedVoicemailTriageSettingsTemplate cmdlet to update the triage rules applied to Shared Voicemails. You can enable or disable individual LLM‑based triage capabilities, including summary generation, message prioritization, suggested actions, and category assignment.

## EXAMPLES

### Example 1
```
Set-CsSharedVoicemailTriageSettingsTemplate -Instance $templateInstance -Name "Triage without urgency indetification" -Description "Template to triage voicemails while skipping message‑urgency identification" -EnableUrgencyDetection $false -EnableCategoryDetection $true  -EnableVoiceToTextSummary $true -EnableCallToActionDetection $true

```
This example updates the template name and description, and disables identification of voicemail message importance.



## PARAMETERS

### -Instance

Template object ID  includes all config values of the template

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCallToActionDetection

When enabled, LL identifies all actionable tasks in the voicemail and also assigns standard action types such as Callback, Email Reply, Set Appointment, Reschedule Appointment, or Cancel Appointment.

PARAMVALUE: True| False

```yaml
Type: bool

Required: True
Position: Named
Default value: True
```

### -EnableCategoryDetection

When enabled, LLM assigns category as short noun representing the voicemail’s primary intent. 
Standard categories such as Junk or Harmful Content may also be applied when appropriate.

PARAMVALUE: True| False

```yaml
Type: bool

Required: True
Position: Named
Default value: True
```

### -EnableUrgencyDetection

When enabled, LLM identifies time critical messages and marks them as Important

PARAMVALUE: True| False

```yaml
Type: bool

Required: True
Position: Named
Default value: True
```

### -EnableVoiceToTextSummary

When enabled, LLM generates a one paragraph summary for a message. The first sentence captures the caller’s intent, followed by key details such as dates, times, required actions, and contact information.

PARAMVALUE: True| False

```yaml
Type: bool

Required: True
Position: Named
Default value: True
```


### -Name

The name of the template.

```yaml
Type: System.String
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

### Microsoft.Rtc.Management.OAA.Models.AutoAttendant

## NOTES

## RELATED LINKS

[New-CsSharedVoicemailTriageSettingsTemplate](./New-CsSharedVoicemailTriageSettingsTemplate.md)

[Get-CsSharedVoicemailTriageSettingsTemplate](./Get-CsSharedVoicemailTriageSettingsTemplate.md)

[Remove-CsSharedVoicemailTriageSettingsTemplate](./Remove-CsSharedVoicemailTriageSettingsTemplate.md)

[New-CsCallQueue](./New-CsCallQueue.md)

[Get-CsCallQueue](./Get-CsCallQueue.md)

[Set-CsCallQueue](./Set-CsCallQueue.md)

[Remove-CsCallQueue](./Remove-CsCallQueue.md)

[New-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendant)

[Get-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/get-csautoattendant)

[Set-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/set-csautoattendant)

[Remove-CsAutoAttendant](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csautoattendant)



