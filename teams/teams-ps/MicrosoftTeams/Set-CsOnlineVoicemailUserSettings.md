---
applicable: Microsoft Teams
author: clyvr
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: colongma
ms.reviewer: colongma
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlinevoicemailusersettings
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
[-VoicemailEnabled <boolean>]  [-UrgencyDetectionEnabled <boolean>] [-CategoryDetectionEnabled <boolean>]  [-CallToActionDetectionEnabled <boolean>]
[-VoiceToTextSummaryEnabled <boolean>]  [-WhatIf] [-Confirm] [<CommonParameters>]
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

This example changes CallAnswerRule setting to VoicemailWithTransferOption and set TransferTarget to "+14255551234" for user5@contoso.com.

### Example 5
```
Set-CsOnlineVoicemailUserSettings -Identity user6@contoso.com -DefaultGreetingPromptOverwrite "Hi, I am currently not available."
```

This example changes DefaultGreetingPromptOverwrite setting to "Hi, I am currently not available." for user6@contoso.com.

### Example 6
Set-CsOnlineVoicemailUserSettings -Identity 345987e0-258d-4278-8b75-ce0d6504a5be -UrgencyDetectionEnabled $true -CategoryDetectionEnabled $true -CallToActionDetectionEnabled $true -VoiceToTextSummaryEnabled $false

This example updates the Voicemail AI triage settings for a user by enabling urgency, category, and actions detection, while disabling voicemail summaries.

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
Type: String
Parameter Sets: (All)
Aliases:

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
Type: String
Parameter Sets: (All)
Aliases:

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
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OofGreetingEnabled

The OofGreetingEnabled parameter represents whether to play out-of-office greeting in voicemail deposit scenario.

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

### -OofGreetingFollowAutomaticRepliesEnabled

The OofGreetingFollowAutomaticRepliesEnabled parameter represents whether to play out-of-office greeting in voicemail deposit scenario when user set automatic replies in Outlook.

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

### -OofGreetingFollowCalendarEnabled

The OofGreetingFollowCalendarEnabled parameter represents whether to play out-of-office greeting in voicemail deposit scenario when user has an out-of-office event set up in their Outlook calendar.

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

### -PromptLanguage

The PromptLanguage parameter specifies the language used for voicemail prompts.

The default value is `en-US`.

Supported values (115 total):

### -PromptLanguage

The PromptLanguage parameter specifies the language used for voicemail prompts.

The default value is `en-US`.

Supported values:

```csharp
"ar-EG", // Arabic (Egypt)
"ar-SA", // Arabic (Saudi Arabia)
"bg-BG", // Bulgarian (Bulgaria)
"ca-ES", // Catalan (Catalan)
"cs-CZ", // Czech (Czech Republic)
"cy-GB", // Welsh (United Kingdom)
"da-DK", // Danish (Denmark)
"de-AT", // German (Austria)
"de-CH", // German (Switzerland)
"de-DE", // German (Germany)
"el-GR", // Greek (Greece)
"en-AU", // English (Australia)
"en-CA", // English (Canada)
"en-GB", // English (United Kingdom)
"en-IE", // English (Ireland)
"en-IN", // English (India)
"en-PH", // English (Philippines)
"en-US", // English (United States)
"en-ZA", // English (South Africa)
"es-ES", // Spanish (Spain)
"es-MX", // Spanish (Mexico)
"et-EE", // Estonian (Estonia)
"fi-FI", // Finnish (Finland)
"fr-BE", // French (Belgium)
"fr-CA", // French (Canada)
"fr-CH", // French (Switzerland)
"fr-FR", // French (France)
"he-IL", // Hebrew (Israel)
"hi-IN", // Hindi (India)
"hr-HR", // Croatian (Croatia)
"hu-HU", // Hungarian (Hungary)
"id-ID", // Indonesian (Indonesia)
"it-IT", // Italian (Italy)
"ja-JP", // Japanese (Japan)
"ko-KR", // Korean (Korea)
"lt-LT", // Lithuanian (Lithuania)
"lv-LV", // Latvian (Latvia)
"nb-NO", // Norwegian, Bokmål (Norway)
"nl-BE", // Dutch (Belgium)
"nl-NL", // Dutch (Netherlands)
"pl-PL", // Polish (Poland)
"pt-BR", // Portuguese (Brazil)
"pt-PT", // Portuguese (Portugal)
"ro-RO", // Romanian (Romania)
"ru-RU", // Russian (Russia)
"sk-SK", // Slovak (Slovakia)
"sl-SI", // Slovenian (Slovenia)
"sv-SE", // Swedish (Sweden)
"th-TH", // Thai (Thailand)
"tr-TR", // Turkish (Turkey)
"vi-VN", // Vietnamese (Viet Nam)
"zh-CN", // Chinese (Simplified, PRC)
"zh-HK", // Chinese (Traditional, Hong Kong S.A.R.)
"zh-TW", // Chinese (Traditional, Taiwan)
"af-ZA", // Afrikaans (South Africa)
"am-ET", // Amharic (Ethiopia)
"ar-AE", // Arabic (United Arab Emirates)
"ar-DZ", // Arabic (Algeria)
"ar-IQ", // Arabic (Iraq)
"ar-JO", // Arabic (Jordan)
"ar-KW", // Arabic (Kuwait)
"ar-LB", // Arabic (Lebanon)
"ar-MA", // Arabic (Morocco)
"ar-QA", // Arabic (Qatar)
"as-IN", // Assamese (India)
"az-AZ", // Azerbaijani (Azerbaijan)
"bn-BD", // Bengali (Bangladesh)
"bn-IN", // Bengali (India)
"bs-BA", // Bosnian (Bosnia and Herzegovina)
"en-HK", // English (Hong Kong S.A.R.)
"en-KE", // English (Kenya)
"en-NG", // English (Nigeria)
"en-NZ", // English (New Zealand)
"en-SG", // English (Singapore)
"es-AR", // Spanish (Argentina)
"es-CL", // Spanish (Chile)
"es-CO", // Spanish (Colombia)
"es-DO", // Spanish (Dominican Republic)
"es-EC", // Spanish (Ecuador)
"es-PE", // Spanish (Peru)
"es-PR", // Spanish (Puerto Rico)
"es-US", // Spanish (United States)
"es-VE", // Spanish (Venezuela)
"eu-ES", // Basque (Spain)
"fa-IR", // Persian (Iran)
"fil-PH", // Filipino (Philippines)
"ga-IE", // Irish (Ireland)
"gl-ES", // Galician (Spain)
"gu-IN", // Gujarati (India)
"hy-AM", // Armenian (Armenia)
"is-IS", // Icelandic (Iceland)
"ka-GE", // Georgian (Georgia)
"kk-KZ", // Kazakh (Kazakhstan)
"km-KH", // Khmer (Cambodia)
"kn-IN", // Kannada (India)
"lo-LA", // Lao (Laos)
"mk-MK", // Macedonian (North Macedonia)
"ml-IN", // Malayalam (India)
"mr-IN", // Marathi (India)
"ms-MY", // Malay (Malaysia)
"mt-MT", // Maltese (Malta)
"ne-NP", // Nepali (Nepal)
"or-IN", // Odia (India)
"pa-IN", // Punjabi (India)
"sq-AL", // Albanian (Albania)
"sr-Latn-RS", // Serbian (Latin, Serbia)
"ta-IN", // Tamil (India)
"ta-LK", // Tamil (Sri Lanka)
"ta-MY", // Tamil (Malaysia)
"ta-SG", // Tamil (Singapore)
"te-IN", // Telugu (India)
"uk-UA", // Ukrainian (Ukraine)
"ur-IN", // Urdu (India)
"ur-PK", // Urdu (Pakistan)
"uz-UZ", // Uzbek (Uzbekistan)
```

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: en-US
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShareData

Specifies whether voicemail and transcription data is shared with the service for training and improving accuracy.

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

### -TransferTarget

The TransferTarget parameter represents the target to transfer the call when call answer rule set to PromptOnlyWithTransfer or VoicemailWithTransferOption.
Value of this parameter should be a SIP URI of another user in your organization.
For user with Enterprise Voice enabled, a valid telephone number could also be accepted as TransferTarget.

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

### -VoicemailEnabled

The VoicemailEnabled parameter represents whether to enable voicemail service. If set to $false, the user has no voicemail service.

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

### -UrgencyDetectionEnabled

The UrgencyDetectionEnabled parameter specifies whether urgency detection is enabled for voicemail AI triage. If set to $true, time-critical voicemail content can be identified and marked as important.

> [!IMPORTANT]
> The following configuration parameter is available through the Microsoft Frontier Program. General Availability for this functionality has not been determined at this time.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -CategoryDetectionEnabled

The CategoryDetectionEnabled parameter specifies whether category detection is enabled for voicemail AI triage. If set to $true, a category label can be generated from voicemail transcript content.

> [!IMPORTANT]
> The following configuration parameter is available through the Microsoft Frontier Program. General Availability for this functionality has not been determined at this time.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -CallToActionDetectionEnabled

The CallToActionDetectionEnabled parameter specifies whether suggested action detection is enabled for voicemail AI triage. If set to $true, suggested follow-up actions can be generated from voicemail transcript content.

> [!IMPORTANT]
> The following configuration parameter is available through the Microsoft Frontier Program. General Availability for this functionality has not been determined at this time.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -VoiceToTextSummaryEnabled

The VoiceToTextSummaryEnabled parameter specifies whether summary generation is enabled for voicemail AI triage. If set to $true, a concise summary can be generated from voicemail transcript content.

> [!IMPORTANT]
> The following configuration parameter is available through the Microsoft Frontier Program. General Availability for this functionality has not been determined at this time.

```yaml
Type: System.Boolean
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Voicemail.Models.VoicemailUserSettings

## NOTES

## RELATED LINKS

[Get-CsOnlineVoicemailUserSettings](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinevoicemailusersettings)
