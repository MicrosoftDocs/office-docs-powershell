---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinevoicemailusersettings
schema: 2.0.0
title: Set-CsOnlineVoicemailUserSettings
---

# Set-CsOnlineVoicemailUserSettings

## SYNOPSIS
Use the Set-CsOnlineVoicemailUserSettings cmdlet to modify the online voicemail user settings of a specific user.
New online voicemail user settings of the user would be returned after executing.

## SYNTAX

```
Set-CsOnlineVoicemailUserSettings [-Identity] <string> [-CallAnswerRule <Object>] [-DefaultGreetingPromptOverwrite <string>]
[-DefaultOofGreetingPromptOverwrite <string>] [-Force] [-OofGreetingEnabled <boolean>] [-OofGreetingFollowAutomaticRepliesEnabled <boolean>]
[-OofGreetingFollowCalendarEnabled <boolean>] [-PromptLanguage <string>] [-ShareData <boolean>] [-TransferTarget <string>]
[-VoicemailEnabled <boolean>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOnlineVoicemailUserSettings cmdlet lets tenant admin modify the online voicemail user settings of a specific user in the organization. New online voicemail user settings of the user would be returned after executing.
For example, tenant admin could enable/disable voicemail, change voicemail prompt language, modify out-of-office voicemail greeting settings, or setup simple call answer rules. Only those properties that tenant admin have actually provided with be modified. If an online voicemail user setting was not set by tenant admin, it would remain the old value after this cmdlet has been executed.

## EXAMPLES

### Example 1
```
Set-CsOnlineVoicemailUserSettings -Identity sip:user1@contoso.com -VoicemailEnabled $true
```

This example changes VoicemailEnabled setting to true for the user with SIP URI sip:user1@contoso.com.

### Example 2
```
Set-CsOnlineVoicemailUserSettings -Identity user2@contoso.com -PromptLanguage "en-US" -OofGreetingFollowCalendarEnabled $false
```

This example changes PromptLanguage setting to "en-US" and OofGreetingFollowCalendarEnabled setting to false for user2@contoso.com.

### Example 3
```
Set-CsOnlineVoicemailUserSettings -Identity user3@contoso.com -CallAnswerRule PromptOnlyWithTransfer -TransferTarget sip:user4@contoso.com
```

This example changes CallAnswerRule setting to PromptOnlyWithTransfer and set TransferTarget to "sip:user4@contoso.com" for user3@contoso.com.

### Example 4
```
Set-CsOnlineVoicemailUserSettings -Identity user5@contoso.com -CallAnswerRule VoicemailWithTransferOption -TransferTarget "+14255551234"
```

This example changes CallAnswerRule setting to VoicemailWithTransferOption and set TransferTarget to "+14255551234" for user5@contoso.com..

### Example 5
```
Set-CsOnlineVoicemailUserSettings -Identity user6@contoso.com -DefaultGreetingPromptOverwrite "Hi, I am currently not available."
```

This example changes DefaultGreetingPromptOverwrite setting to "Hi, I am currently not available." for user6@contoso.com.

## PARAMETERS

### -CallAnswerRule
The CallAnswerRule parameter represents the value of the call answer rule, which can be any of the following:

- DeclineCall
- PromptOnly
- PromptOnlyWithTransfer
- RegularVoicemail
- VoicemailWithTransferOption

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
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

### -DefaultGreetingPromptOverwrite
The DefaultGreetingPromptOverwrite parameter represents the contents that overwrite the default normal greeting prompt.
If the user's normal custom greeting is not set and DefaultGreetingPromptOverwrite is not empty, the voicemail service will play this overwrite greeting instead of the default normal greeting in the voicemail deposit scenario.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultOofGreetingPromptOverwrite
The DefaultOofGreetingPromptOverwrite parameter represents the contents that overwrite the default out-of-office greeting prompt.
If the user's out-of-office custom greeting is not set and DefaultOofGreetingPromptOverwrite is not empty, the voicemail service will play this overwrite greeting instead of the default out-of-office greeting in the voicemail deposit scenario.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter represents the ID of the specific user in your organization; this can be either a SIP URI or an Object ID.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OofGreetingEnabled
The OofGreetingEnabled parameter represents whether to play out-of-office greeting in voicemail deposit scenario.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OofGreetingFollowAutomaticRepliesEnabled
The OofGreetingFollowAutomaticRepliesEnabled parameter represents whether to play out-of-office greeting in voicemail deposit scenario when user set automatic replies in Outlook.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PromptLanguage
The PromptLanguage parameter represents the language that is used to play voicemail prompts.

The following languages are supported:

- "ar-EG" (Arabic - Egypt)
- "ar-SA" (Arabic - Saudi Arabia)
- "bg-BG" (Bulgarian - Bulgaria)
- "ca-ES" (Catalan - Catalan)
- "cy-GB" (Welsh - United Kingdom)
- "cs-CZ" (Czech - Czech Republic)
- "da-DK" (Danish - Denmark)
- "de-AT" (German - Austria)
- "de-CH" (German - Switzerland)
- "de-DE" (German - Germany)
- "el-GR" (Greek - Greece)
- "en-AU" (English - Australia)
- "en-CA" (English - Canada)
- "en-GB" (English - United Kingdom)
- "en-IE" (English - Ireland)
- "en-IN" (English - India)
- "en-PH" (English - Philippines)
- "en-US" (English - United States)
- "en-ZA" (English - South Africa)
- "es-ES" (Spanish - Spain)
- "es-MX" (Spanish - Mexico)
- "et-EE" (Estonian - Estonia)
- "fi-FI" (Finnish - Finland)
- "fr-BE" (French - Belgium)
- "fr-CA" (French - Canada)
- "fr-CH" (French - Switzerland)
- "fr-FR" (French - France)
- "he-IL" (Hebrew - Israel)
- "hi-IN" (Hindi - India)
- "hr-HR" (Croatian - Croatia)
- "hu-HU" (Hungarian - Hungary)
- "id-ID" (Indonesian - Indonesia)
- "it-IT" (Italian - Italy)
- "ja-JP" (Japanese - Japan)
- "ko-KR" (Korean - Korea)
- "lt-LT" (Lithuanian - Lithuania)
- "lv-LV" (Latvian - Latvia)
- "nl-BE" (Dutch - Belgium)
- "nl-NL" (Dutch - Netherlands)
- "nb-NO" (Norwegian, Bokmål - Norway)
- "pl-PL" (Polish - Poland)
- "pt-BR" (Portuguese - Brazil)
- "pt-PT" (Portuguese - Portugal)
- "ro-RO" (Romanian - Romania)
- "ru-RU" (Russian - Russia)
- "sk-SK" (Slovak - Slovakia)
- "sl-SI" (Slovenian - Slovenia)
- "sv-SE" (Swedish - Sweden)
- "th-TH" (Thai - Thailand)
- "tr-TR" (Turkish - Turkey)
- "vi-VN" (Vietnamese - Viet Nam)
- "zh-CN" (Chinese - Simplified, PRC)
- "zh-TW" (Chinese - Traditional, Taiwan)
- "zh-HK" (Chinese - Traditional, Hong Kong S.A.R.)

```yaml
Type: System.String
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
Specifies whether voicemail and transcription data is shared with the service for training and improving accuracy.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransferTarget
The TransferTarget parameter represents the target to transfer the call when call answer rule set to PromptOnlyWithTransfer or VoicemailWithTransferOption.
Value of this parameter should be a SIP URI of another user in your organization.
For user with Enterprise Voice enabled, a valid telephone number could also be accepted as TransferTarget.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoicemailEnabled
The VoicemailEnabled parameter represents whether to enable voicemail service. If set to $false, the user has no voicemail service.

```yaml
Type: System.Boolean
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Voicemail.Models.VoicemailUserSettings

## NOTES

## RELATED LINKS

[Get-CsOnlineVoicemailUserSettings](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoicemailusersettings)
