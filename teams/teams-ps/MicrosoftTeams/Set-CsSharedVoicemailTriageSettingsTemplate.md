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

To fully disable LLM‑based triaging for Shared Voicemails, the corresponding triage settings template must be removed from the associated Call Queue, Auto Attendant, or Main Line Attendant configuration. Alternatively, you can delete the template itself using Remove‑CsSharedVoicemailTriageSettingsTemplate.

## SYNTAX

```
Set-CsSharedVoicemailTriageSettingsTemplate [-Instance] <psobject> [[-Force]] [-HttpPipelinePrepend <SendAsyncStep[]>] [-WhatIf] [-Confirm] [<CommonParameters>]


```

## DESCRIPTION
Use the Set‑CsSharedVoicemailTriageSettingsTemplate cmdlet to update the triage rules applied to Shared Voicemails. You can enable or disable individual LLM‑based triage capabilities, including summary generation, message prioritization, suggested actions, and category assignment.

## EXAMPLES

### Example 1

```
$templateInstance = Get-CsSharedVoicemailTriageSettingsTemplate -Id "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$templateInstance.Name = "Triage without urgency identification"
$templateInstance.Description = "Template to triage voicemails while skipping message‑urgency identification"
$templateInstance.EnableUrgencyDetection = $false
$templateInstance.EnableCategoryDetection = $true
$templateInstance.EnableCallToActionDetection = $true
$templateInstance.EnableVoiceToTextSummary = $true
Set-CsSharedVoicemailTriageSettingsTemplate -Instance $templateInstance


```
This example updates the template name and description, and disables identification of voicemail message importance.

### Example 2

```
$templateInstance = Get-CsSharedVoicemailTriageSettingsTemplate -Id "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$templateInstance.EnableUrgencyDetection = $true
$templateInstance.EnableCategoryDetection = $false
$templateInstance.EnableCallToActionDetection = $false
$templateInstance.EnableVoiceToTextSummary = $true
Set-CsSharedVoicemailTriageSettingsTemplate -Instance $templateInstance

```
This example disables identification of category and actions for shared voicemail messages.


### Example 3

```
$templateInstance = Get-CsSharedVoicemailTriageSettingsTemplate -Id "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
$templateInstance.EnableUrgencyDetection = $false
$templateInstance.EnableCategoryDetection = $false
$templateInstance.EnableCallToActionDetection = $false
$templateInstance.EnableVoiceToTextSummary = $false
Set-CsSharedVoicemailTriageSettingsTemplate -Instance $templateInstance

```
This example disables adding LLM‑generated fields to Shared Voicemail messages only. To fully stop LLM involvement, the triage settings template must be removed from the associated Call Queue, Auto Attendant, or Main Line Attendant configuration. Alternatively, you can delete the template itself using Remove‑CsSharedVoicemailTriageSettingsTemplate.

## PARAMETERS

### -Instance

The instance of the Voicemail triage template to change

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



