---
applicable: Microsoft Teams
author: officedocspr
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: odocspr
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoicemailpolicy
schema: 2.0.0
title: Set-CsOnlineVoicemailPolicy
---

# Set-CsOnlineVoicemailPolicy

## SYNOPSIS
Modifies an existing Online Voicemail policy.

## SYNTAX

### Identity (Default)
```powershell
Set-CsOnlineVoicemailPolicy [[-Identity] <string>] [-Description <String>] [-EnableEditingCallAnswerRulesSetting <boolean>] [-EnableTranscription <boolean>]
[-EnableTranscriptionProfanityMasking <boolean>] [-EnableTranscriptionTranslation <boolean>] [-MaximumRecordingLength <timespan>]
[-PostambleAudioFile <string>] [-PostambleAudioFile <string>] [-PreamblePostambleMandatory <boolean>]
[-PrimarySystemPromptLanguage <string>] [-SecondarySystemPromptLanguage <string>] [-ShareData <string>] [-EnableVoicemailTriage <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```



## DESCRIPTION
Cloud Voicemail provides voicemail recording, deposit, and retrieval capabilities for Microsoft Teams and Teams Phone users.

By default, Teams and Teams Phone users are enabled for Cloud Voicemail. The Online Voicemail Policy controls whether voicemail transcription, transcription profanity masking, transcription translation, AI-powered voicemail triage, and call answer rule editing are enabled for a user. The policy also specifies the maximum voicemail recording length and the primary and secondary system prompt languages used by the voicemail service.

By default:

- Voicemail transcription is enabled
- Transcription profanity masking is disabled
- Transcription translation is enabled
- Call answer rule editing is enabled
- The maximum voicemail recording length is 5 minutes
- The primary and secondary system prompt languages are not configured. The user's voicemail language setting is used instead
- AI-powered voicemail triage is disabled

Tenant admin would be able to create a customized online voicemail policy to match the organization's requirements.

> [!IMPORTANT]
> The following configuration parameters will only work for customers that are participating in the Voice Applications private preview for these features. General Availability for this functionality has not been determined at this time.
>
> - EnableVoicemailTriage

## EXAMPLES

### Example 1
```
Set-CsOnlineVoicemailPolicy -Identity "CustomOnlineVoicemailPolicy" -MaximumRecordingLength ([TimeSpan]::FromSeconds(60))
```

The command shown in Example 1 changes the MaximumRecordingLength to 60 seconds for the per-user online voicemail policy CustomOnlineVoicemailPolicy.

### Example 2
```
Set-CsOnlineVoicemailPolicy -EnableTranscriptionProfanityMasking $false
```

The command shown in Example 2 changes the EnableTranscriptionProfanityMasking to false for tenant level global online voicemail policy when calling without Identity parameter.

### Example 3
```
Set-CsOnlineVoicemailPolicy -Identity "CustomOnlineVoicemailPolicy" -EnableTranscription $true -EnableVoicemailTriage $true
```
This command enables AI-powered voicemail triage for users assigned to the specified Online Voicemail Policy.

When AI-powered voicemail triage is enabled, voicemail messages delivered to users with an eligible Microsoft 365 Copilot license include an AI-generated summary, identified action items, a suggested category, and an importance classification.

## PARAMETERS

### -Confirm

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

Enables administrators to provide explanatory text about the policy. For example, the Description might indicate the users the policy should be assigned to.

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

### -EnableEditingCallAnswerRulesSetting

Controls if editing call answer rule settings are enabled or disabled for a user. Possible values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTranscription

Allows you to disable or enable voicemail transcription. Possible values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTranscriptionProfanityMasking

Allows you to disable or enable profanity masking for the voicemail transcriptions. Possible values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTranscriptionTranslation

Allows you to disable or enable translation for the voicemail transcriptions. Possible values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableVoicemailTriage
Specifies whether AI-powered voicemail triage is enabled.

When enabled, voicemail messages delivered to users with an eligible Microsoft 365 Copilot license are enriched with AI-generated metadata derived from the voicemail transcription, including a summary, identified action items, a suggested category, and an importance classification.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

A unique identifier specifying the scope, and in some cases the name, of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumRecordingLength

A duration of voicemail maximum recording length. The length should be between 30 seconds to 10 minutes.

```yaml
Type: Duration
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostambleAudioFile

The audio file to play to the caller after the user's voicemail greeting has played and before the caller is allowed to leave a voicemail message.

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
### -PreambleAudioFile

The audio file to play to the caller before the user's voicemail greeting is played.

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

### -PreamblePostambleMandatory

Is playing the Pre- or Post-amble mandatory before the caller can leave a message.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySystemPromptLanguage

The primary (or first) language that voicemail system prompts will be presented in. Must also set SecondarySystemPromptLanguage. When set, this overrides the user language choice. See [Set-CsOnlineVoicemailUserSettings](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoicemailusersettings) -PromptLanguage for supported languages.

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

### -SecondarySystemPromptLanguage

The secondary language that voicemail system prompts will be presented in. Must also set PrimarySystemPromptLanguage and may not be the same value as PrimarySystemPromptanguage. When set, this overrides the user language choice.  See [Set-CsOnlineVoicemailUserSettings](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoicemailusersettings) -PromptLanguage for supported languages.

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

### -ShareData

Specifies whether voicemail and transcription data are shared with the service for training and improving accuracy. Possible values are Defer and Deny. 
> [!IMPORTANT]
> This parameter is deprecated and no longer has any effect. Its value is ignored by the service and is retained only for backward compatibility.
>

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


### -WhatIf

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
[Get-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinevoicemailpolicy)

[New-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinevoicemailpolicy)

[Remove-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csonlinevoicemailpolicy)

[Grant-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csonlinevoicemailpolicy)
