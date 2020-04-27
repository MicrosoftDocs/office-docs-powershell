---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csonlinevoicemailusersettings
applicable: Skype for Business Online
title: Set-CsOnlineVoicemailUserSettings
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsOnlineVoicemailUserSettings

## SYNOPSIS
Use the Set-CsOnlineVoicemailUserSettings cmdlet to modify the online voicemail user settings of a specific user.
New online voicemail user settings of the user would be returned after executing.

## SYNTAX

```
Set-CsOnlineVoicemailUserSettings -Identity <String> [-VoicemailEnabled <Boolean>] [-PromptLanguage <String>] [-OofGreetingEnabled <Boolean>] [-OofGreetingFollowAutomaticRepliesEnabled <Boolean>] [-OofGreetingFollowCalendarEnabled <Boolean>] [-CallAnswerRule <DeclineCall | PromptOnly | PromptOnlyWithTransfer | RegularVoicemail | VoicemailWithTransferOption>] [-TransferTarget <String>] [-DefaultGreetingPromptOverwrite <String>] [-DefaultOofGreetingPromptOverwrite <String>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Set-CsOnlineVoicemailUserSettings cmdlet lets tenant admin modify the online voicemail user settings of a specific user in the organization. New online voicemail user settings of the user would be returned after executing.
For example, tenant admin could enable/disable voicemail, change voicemail prompt language, modify out-of-office voicemail greeting settings, or setup simple call answer rules. Only those properties that tenant admin have actually provided with be modified. If an online voicemail user setting was not set by tenant admin, it would remain the old value after this cmdlet has been executed.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineVoicemailUserSettings -Identity sip:user@contoso.com -VoicemailEnabled $true
```

This example changes VoicemailEnabled setting to true for the user with SIP URI sip:user@contoso.com.

### -------------------------- Example 2 --------------------------
```
Set-CsOnlineVoicemailUserSettings -Identity "00000000-0000-0000-0000-000000000000" -PromptLanguage "en-US" -OofGreetingFollowCalendarEnabled $false
```

This example changes PromptLanguage setting to "en-US" and OofGreetingFollowCalendarEnabled setting to false for the user with Object ID "00000000-0000-0000-0000-000000000000".

### -------------------------- Example 3 --------------------------
```
Set-CsOnlineVoicemailUserSettings -Identity "00000000-0000-0000-0000-000000000000" -CallAnswerRule PromptOnlyWithTransfer -TransferTarget sip:user2@contoso.com
```

This example changes CallAnswerRule setting to PromptOnlyWithTransfer and set TransferTarget to "sip:user2@contoso.com" for the user with Object ID "00000000-0000-0000-0000-000000000000".

### -------------------------- Example 4 --------------------------
```
Set-CsOnlineVoicemailUserSettings -Identity "00000000-0000-0000-0000-000000000000" -CallAnswerRule VoicemailWithTransferOption -TransferTarget "+12345678900"
```

This example changes CallAnswerRule setting to VoicemailWithTransferOption and set TransferTarget to "+12345678900" for the user with Object ID "00000000-0000-0000-0000-000000000000".

### -------------------------- Example 5 --------------------------
```
Set-CsOnlineVoicemailUserSettings -Identity "00000000-0000-0000-0000-000000000000" -DefaultGreetingPromptOverwrite "Hi, I am currently not available."
```

This example changes DefaultGreetingPromptOverwrite setting to "Hi, I am currently not available." for the user with Object ID "00000000-0000-0000-0000-000000000000".


## PARAMETERS

### -Identity
The Identity parameter represents the ID of the specific user in your organization; this can be either a SIP URI or an Object ID.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoicemailEnabled
The VoicemailEnabled parameter represents whether to enable voicemail service.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PromptLanguage
The PromptLanguage parameter represents the language that is used to play voicemail prompts. 

Now the following languages are supported:

- "ar-EG" (Arabic - Egypt)
- "ca-ES" (Catalan - Catalan)
- "da-DK" (Danish - Denmark)
- "de-DE" (German - Germany)
- "en-AU" (English - Australia)
- "en-CA" (English - Canada)
- "en-GB" (English - United Kingdom)
- "en-IN" (English - India)
- "en-US" (English - United States)
- "es-ES" (Spanish - Spain)
- "es-MX" (Spanish - Mexico)
- "fi-FI" (Finnish - Finland)
- "fr-CA" (French - Canada)
- "fr-FR" (French - France)
- "it-IT" (Italian - Italy)
- "ja-JP" (Japanese - Japan)
- "ko-KR" (Korean - Korea)
- "nl-NL" (Dutch - Netherlands)
- "nb-NO" (Norwegian, Bokmål - Norway)
- "pl-PL" (Polish - Poland)
- "pt-BR" (Portuguese - Brazil)
- "pt-PT" (Portuguese - Portugal)
- "ru-RU" (Russian - Russia)
- "sv-SE" (Swedish - Sweden)
- "tr-TR" (Turkish - Turkey)
- "zh-CN" (Chinese - Simplified, PRC)
- "zh-TW" (Chinese - Traditional, Taiwan)
- "zh-HK" (Chinese - Traditional, Hong Kong S.A.R.)
- "cs-CZ" (Czech - Czech Republic)
- "th-TH" (Thai - Thailand)
- "el-GR" (Greek - Greece)
- "hu-HU" (Hungarian - Hungary)
- "sk-SK" (Slovak - Slovakia)
- "hr-HR" (Croatian - Croatia)
- "sl-SI" (Slovenian - Slovenia)
- "id-ID" (Indonesian - Indonesia)
- "ro-RO" (Romanian - Romania)
- "vi-VN" (Vietnamese - Viet Nam)

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OofGreetingFollowCalendarEnabled
The OofGreetingFollowCalendarEnabled parameter represents whether to play out-of-office greeting in voicemail deposit scenario when user set out-of-office in calendar.

```yaml
Type: System.Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TransferTarget
The TransferTarget parameter represents the target to transfer the call when call answer rule set to PromptOnlyWithTransfer or VoicemailWithTransferOption.
Value of this parameter should be a SIP URI of another user, an auto attendant, or a hunt group (call queue) in your organization.
For user with Enterprise Voice enabled, a valid telephone number could also be accepted as TransferTarget.


```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultGreetingPromptOverwrite
The DefaultGreetingPromptOverwrite parameter represents the contents that overwrite the default normal greeting prompt.
If user normal custom greeting is not set and DefaultGreetingPromptOverwrite is not empty, voicemail service will play this overwrite greeting instead of default normal greeting in voicemail deposit scenario.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultOofGreetingPromptOverwrite
The DefaultOofGreetingPromptOverwrite parameter represents the contents that overwrite the default out-of-office greeting prompt.
If user out-of-office custom greeting is not set and DefaultOofGreetingPromptOverwrite is not empty, voicemail service will play this overwrite greeting instead of default out-of-office greeting in voicemail deposit scenario.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
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

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Voicemail.Models.VoicemailUserSettings


## NOTES


## RELATED LINKS

[Get-CsOnlineVoicemailUserSettings](Get-CsOnlineVoicemailUserSettings.md)

