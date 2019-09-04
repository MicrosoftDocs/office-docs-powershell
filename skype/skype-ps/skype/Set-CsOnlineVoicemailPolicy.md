---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Set-CsOnlineVoicemailPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsOnlineVoicemailPolicy

## SYNOPSIS
Modifies an existing Online Voicemail policy. Online Voicemail policies determine whether or not voicemail transcription, profanity masking for the voicemail transcriptions, and editing call answer rule settings are enabled for a user. The policies also specify voicemail maximum recording length for a user.

## SYNTAX

### Identity (Default)
```
Set-CsOnlineVoicemailPolicy [-Tenant <Guid>] [-EnableTranscription <Boolean>] [-ShareData <String>]
 [-EnableTranscriptionProfanityMasking <Boolean>] [-EnableEditingCallAnswerRulesSetting <Boolean>] [-MaximumRecordingLength <Duration>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Set-CsOnlineVoicemailPolicy [-Tenant <Guid>] [-EnableTranscription <Boolean>] [-ShareData <String>]
 [-EnableTranscriptionProfanityMasking <Boolean>] [-EnableEditingCallAnswerRulesSetting <Boolean>] [-MaximumRecordingLength <Duration>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Online Voicemail service provides organizations with voicemail deposit capabilities for Phone System implementation.

By default, users enabled for Phone System will be enabled for Online Voicemail, and Online Voicemail policy controls whether or not voicemail transcription, profanity masking for the voicemail transcriptions, and editing call answer rule settings are enabled for a user. The policies also specify voicemail maximum recording length for a user. Online Voicemail transcription is enabled by default, transcription profanity masking is disabled by default, editing call answer rule settings is enabled by default, and voicemail maximum recording length is set to 5 minutes by default. Tenant admin would be able to modify existing policies to match the organization's requirements.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineVoicemailPolicy -Identity "CustomOnlineVoicemailPolicy" -MaximumRecordingLength ([TimeSpan]::FromSeconds(60))
```

The command shown in Example 1 changes the MaximumRecordingLength to 60 seconds for the per-user online voicemail policy CustomOnlineVoicemailPolicy.

### -------------------------- Example 2 --------------------------
```
Set-CsOnlineVoicemailPolicy -EnableTranscriptionProfanityMasking $false
```

The command shown in Example 2 changes the EnableTranscriptionProfanityMasking to false for tenant level global online voicemail policy when calling without Identity parameter.


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
PARAMVALUE: $true | $false

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
PARAMVALUE: $true | $false

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
PARAMVALUE: $true | $false

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
A unique identifier specifying the scope, and in some cases the name, of the policy. If this parameter is omitted, Set-CsOnlineVoicemailPolicy would update tenant level Global policy value.

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
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

[New-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/new-csonlinevoicemailpolicy?view=skype-ps)

[Remove-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/remove-csonlinevoicemailpolicy?view=skype-ps)

[Grant-CsOnlineVoicemailPolicy](https://docs.microsoft.com/powershell/module/skype/grant-csonlinevoicemailpolicy?view=skype-ps)
