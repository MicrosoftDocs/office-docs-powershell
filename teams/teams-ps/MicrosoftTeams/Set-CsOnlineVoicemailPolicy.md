---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
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
[-PrimarySystemPromptLanguage <string>] [-SecondarySystemPromptLanguage <string>] [-ShareData <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Cloud Voicemail service provides organizations with voicemail deposit capabilities for Phone System implementation.

By default, users enabled for Phone System will be enabled for Cloud Voicemail. The Online Voicemail policy controls whether or not voicemail transcription, profanity masking for the voicemail transcriptions, translation for the voicemail transcriptions, and editing call answer rule settings are enabled for a user. The policies also specify the voicemail maximum recording length for a user and the primary and secondary voicemail system prompt languages.

- Voicemail transcription is enabled by default
- Transcription profanity masking is disabled by default
- Transcription translation is enabled by default
- Editing call answer rule settings is enabled by default
- Voicemail maximum recording length is set to 5 minutes by default
- Primary and secondary system prompt languages are set to null by default and the user's voicemail language setting is used

Tenant admin would be able to create a customized online voicemail policy to match the organization's requirements.

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

## PARAMETERS

### -Confirm

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

### -Identity

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

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

> Applicable: Microsoft Teams

Specifies whether voicemail and transcription data are shared with the service for training and improving accuracy. Possible values are Defer and Deny.

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

> Applicable: Microsoft Teams

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
