---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/new-csonlinevoicemailpolicy
applicable: Skype for Business Online
title: New-CsOnlineVoicemailPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsOnlineVoicemailPolicy

## SYNOPSIS
Creates a new Online Voicemail policy. Online Voicemail policies determine whether or not voicemail transcription, profanity masking for the voicemail transcriptions, translation for the voicemail transcriptions, and editing call answer rule settings are enabled for a user. The policies also specify voicemail maximum recording length for a user and the primary and secondary voicemail system prompt languages.

## SYNTAX

```
New-CsOnlineVoicemailPolicy -Identity <XdsIdentity> [-Tenant <Guid>] [-EnableTranscription <Boolean>] [-ShareData <String>]
 [-EnableTranscriptionProfanityMasking <Boolean>] [-EnableTranscriptionTranslation <Boolean>] [-EnableEditingCallAnswerRulesSetting <Boolean>] [-MaximumRecordingLength <Duration>] [-PrimarySystemPromptLanguage <String>] [-SecondarySystemPromptLanguage <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Online Voicemail service provides organizations with voicemail deposit capabilities for Phone System implementation.

By default, users enabled for Phone System will be enabled for Online Voicemail. The Online Voicemail policy controls whether or not voicemail transcription, profanity masking for the voicemail transcriptions, translation for the voicemail transcriptions, and editing call answer rule settings are enabled for a user. The policies also specify the voicemail maximum recording length for a user and the primary and secondary voicemail system prompt languages. 

- Online Voicemail transcription is enabled by default
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

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySystemPromptLanguage
The primary (or first) language that voicemail system prompts will be presented in. Must also set SecondarySystemPromptLanguage. When set, this overrides the user language choice. Please see [Set-CsOnlineVoicemailUserSettings](/powershell/module/skype/set-csonlinevoicemailusersettings?view=skype-ps) -PromptLanguage for supported languages.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondarySystemPromptLanguage
The secondary language that voicemail system prompts will be presented in. Must also set PrimarySystemPromptLanguage and may not be the same value as PrimarySystemPromptanguage. When set, this overrides the user language choice.  Please see [Set-CsOnlineVoicemailUserSettings](/powershell/module/skype/set-csonlinevoicemailusersettings?view=skype-ps) -PromptLanguage for supported languages.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -ShareData
{{ Fill ShareData Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose voicemail policy is to be retrieved. For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" You can return the tenant ID for each of your tenants by running this command: 

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
[Get-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/get-csonlinevoicemailpolicy?view=skype-ps)

[Set-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/set-csonlinevoicemailpolicy?view=skype-ps)

[Remove-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csonlinevoicemailpolicy?view=skype-ps)

[Grant-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csonlinevoicemailpolicy?view=skype-ps)
