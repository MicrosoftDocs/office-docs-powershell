---
applicable: Microsoft Teams Queues App, Outlook
author: vijurtse
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: vijurtse
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/New-CsSharedVoicemailTriageSettingsTemplate
schema: 2.0.0
title: New-CsSharedVoicemailTriageSettingsTemplate
---

# New-CsSharedVoicemailTriageSettingsTemplate

## SYNOPSIS
The SharedVoicemailTriageSettingsTemplateId enables automatic triage of Shared Voicemail using a compliant Substrate Large Language Model (LLM). 
It also defines which LLM‑generated fields are added to each shared voicemail message, including the importance flag, summary, suggested actions, and categories.
All data is processed in real time by the model, and the results are stored in your organization’s Exchange environment as part of the delivered voicemail message.

## SYNTAX

```
New-CsSharedVoicemailTriageSettingsTemplate -Name <string> -Description <string> [-EnableUrgencyDetection <bool>] [-EnableCategoryDetection <bool>] [-EnableCallToActionDetection <bool>] [-EnableVoiceToTextSummary <bool>] [-HttpPipelinePrepend <SendAsyncStep[]>] [<CommonParameters>]

```

## DESCRIPTION
Use the New-CsSharedVoicemailTriageSettingsTemplate cmdlet to create a Shared Call History template. The template defines which roles can access Shared Call History and which parts of the history are visible to them.

## EXAMPLES

### Example 1
```
New-CsSharedVoicemailTriageSettingsTemplate -Name "Voicemails triage with summaries, actions and categories " -Description "Template will enable automatic triage of voicemails and generate summary, identify message importance actions and category" 

```
This example creates a new template for automatic triaging of Shared Voicemails, with all triage capabilities enabled by default: summary generation, message prioritization, action identification, and category assignment.

### Example 2
```
New-CsSharedVoicemailTriageSettingsTemplate -Name "Voicemails triage without summaries and actions" -Description "Template will enable automatic triage of voicemails and identify message importance and category" -EnableUrgencyDetection $true -EnableCategoryDetection $true  -EnableVoiceToTextSummary $false -EnableCallToActionDetection $false

```
This example creates a new template for automatic triage of Shared Voicemails with message prioritization and action identification enabled only.

## PARAMETERS

### -Description

A description for the template for automatic voicemails triage

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

[Get-CsSharedVoicemailTriageSettingsTemplate](./Get-CsSharedVoicemailTriageSettingsTemplate.md)

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


