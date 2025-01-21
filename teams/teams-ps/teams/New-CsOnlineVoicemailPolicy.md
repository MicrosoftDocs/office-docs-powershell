---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlinevoicemailpolicy
applicable: Microsoft Teams
title: New-CsOnlineVoicemailPolicy
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# New-CsOnlineVoicemailPolicy

## SYNOPSIS
Creates a new Online Voicemail policy. Online Voicemail policies determine whether or not voicemail transcription, profanity masking for the voicemail transcriptions, translation for the voicemail transcriptions, and editing call answer rule settings are enabled for a user. The policies also specify voicemail maximum recording length for a user and the primary and secondary voicemail system prompt languages.

## SYNTAX

### Identity (Default)

```powershell
New-CsOnlineVoicemailPolicy [-Identity] <string> [-EnableEditingCallAnswerRulesSetting <boolean>] [-EnableTranscription <boolean>]
[-EnableTranscriptionProfanityMasking <boolean>] [-EnableTranscriptionTranslation <boolean>] [-MaximumRecordingLength <timespan>]
[-PostAmbleAudioFile <string>] [-PreambleAudioFile <string>] [-PreamblePostambleMandatory <boolean>]
[-PrimarySystemPromptLanguage <string>] [-SecondarySystemPromptLanguage <string>] [-ShareData <string>] [-WhatIf] [-Confirm] [-Description <String>] [<CommonParameters>]
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

### -------------------------- Example 1 --------------------------
```
New-CsOnlineVoicemailPolicy -Identity "CustomOnlineVoicemailPolicy" -MaximumRecordingLength ([TimeSpan]::FromSeconds(60))
```

The command shown in Example 1 creates a per-user online voicemail policy CustomOnlineVoicemailPolicy with MaximumRecordingLength set to 60 seconds and other fields set to tenant level global value.

## PARAMETERS

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySystemPromptLanguage
The primary (or first) language that voicemail system prompts will be presented in. Must also set SecondarySystemPromptLanguage. When set, this overrides the user language choice. Please see [Set-CsOnlineVoicemailUserSettings](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoicemailusersettings) -PromptLanguage for supported languages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondarySystemPromptLanguage
The secondary language that voicemail system prompts will be presented in. Must also set PrimarySystemPromptLanguage and may not be the same value as PrimarySystemPromptanguage. When set, this overrides the user language choice.  Please see [Set-CsOnlineVoicemailUserSettings](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoicemailusersettings) -PromptLanguage for supported languages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShareData
Specifies whether voicemail and transcription data are shared with the service for training and improving accuracy. Possible values are Defer and Deny.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoicemailpolicy)

[Set-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoicemailpolicy)

[Remove-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoicemailpolicy)

[Grant-CsOnlineVoicemailPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csonlinevoicemailpolicy)
